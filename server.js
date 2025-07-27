require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { default: Cerebras } = require('@cerebras/cerebras_cloud_sdk');
const { processWebSearchInfo } = require('./src/services/llamaScout');
const { generateFinalResponse } = require('./src/services/geminiFinal');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const cerebras = new Cerebras({
  apiKey: process.env.CEREBRAS_API_KEY,
});

// Endpoint for Cerebras research plan generation
app.post('/api/research-plan', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const stream = await cerebras.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are an expert research assistant. When a user provides a topic, you will create a detailed and structured research plan. The plan should include key areas to investigate, potential sources, and a timeline. Present it in a clear, step-by-step format.',
        },
        {
          role: 'user',
          content: message,
        },
      ],
      model: 'qwen-3-235b-a22b',
      stream: true,
      max_completion_tokens: 4000,
      temperature: 0.6,
      top_p: 0.95,
    });

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || '';
      if (content) {
        res.write(`data: ${JSON.stringify({ content })}\n\n`);
      }
    }
    res.end();
  } catch (error) {
    console.error('Error with Cerebras API:', error);
    res.status(500).json({ error: 'Failed to fetch response from AI' });
  }
});

// Endpoint for Llama-4-Scout web search info processing
app.post('/api/web-search-info', async (req, res) => {
  const { researchPlan, websites } = req.body;

  if (!researchPlan || !websites || !Array.isArray(websites)) {
    return res.status(400).json({ error: 'Research plan and websites array are required' });
  }

  try {
    const processedInfo = await processWebSearchInfo(researchPlan, websites);
    res.json({ processedInfo });
  } catch (error) {
    console.error('Error processing web search info:', error);
    res.status(500).json({ error: 'Failed to process web search information' });
  }
});

// Main endpoint that orchestrates the full agent pipeline
app.post('/api/agent-pipeline', async (req, res) => {
  const { message, websites } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // Step 1: Generate research plan with Cerebras
    res.write(`data: ${JSON.stringify({ type: 'status', content: 'Generating research plan...' })}\n\n`);
    
    let researchPlan = '';
    const planStream = await cerebras.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are an expert research assistant. When a user provides a topic, you will create a detailed and structured research plan. The plan should include key areas to investigate, potential sources, and a timeline. Present it in a clear, step-by-step format.',
        },
        {
          role: 'user',
          content: message,
        },
      ],
      model: 'qwen-3-235b-a22b',
      stream: true,
      max_completion_tokens: 4000,
      temperature: 0.6,
      top_p: 0.95,
    });

    for await (const chunk of planStream) {
      const content = chunk.choices[0]?.delta?.content || '';
      if (content) {
        researchPlan += content;
        res.write(`data: ${JSON.stringify({ type: 'plan', content })}\n\n`);
      }
    }

    // Step 2: Process web search info with Llama-4-Scout (if websites provided)
    let processedInfo = '';
    if (websites && Array.isArray(websites) && websites.length > 0) {
      res.write(`data: ${JSON.stringify({ type: 'status', content: 'Processing web search information...' })}\n\n`);
      
      try {
        processedInfo = await processWebSearchInfo(researchPlan, websites);
        res.write(`data: ${JSON.stringify({ type: 'webInfo', content: processedInfo })}\n\n`);
      } catch (webError) {
        console.error('Error processing web search info:', webError);
        res.write(`data: ${JSON.stringify({ type: 'error', content: 'Failed to process web search information. Continuing with research plan only.' })}\n\n`);
        processedInfo = 'Web search information processing failed.';
      }
    } else {
      processedInfo = 'No web search information was provided or processed.';
    }
    
    // Step 3: Generate final response with Gemini
    res.write(`data: ${JSON.stringify({ type: 'status', content: 'Generating final comprehensive response...' })}\n\n`);
    
    try {
      const finalResponse = await generateFinalResponse(researchPlan, processedInfo);
      res.write(`data: ${JSON.stringify({ type: 'finalResponse', content: finalResponse })}\n\n`);
      res.write(`data: ${JSON.stringify({ type: 'complete', content: 'Research pipeline completed successfully.' })}\n\n`);
    } catch (geminiError) {
      console.error('Error generating final response with Gemini:', geminiError);
      res.write(`data: ${JSON.stringify({ type: 'error', content: 'Failed to generate final response. Providing research plan and web information only.' })}\n\n`);
      
      // Fallback: Send the research plan and web info as the final response
      const fallbackResponse = `Research Plan:\n${researchPlan}\n\nWeb Search Information:\n${processedInfo}`;
      res.write(`data: ${JSON.stringify({ type: 'finalResponse', content: fallbackResponse })}\n\n`);
      res.write(`data: ${JSON.stringify({ type: 'complete', content: 'Research pipeline completed with partial results.' })}\n\n`);
    }
    
    res.end();
  } catch (error) {
    console.error('Error in agent pipeline:', error);
    res.status(500).json({ error: 'Failed to execute research pipeline' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
