import React, { useState } from 'react';
import styles from './DeepResearch.module.css';
import Sidebar from '../components/chat/Sidebar';
import ChatMessages from '../components/chat/ChatMessages';
import ChatInput from '../components/chat/ChatInput';

const DeepResearch = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! I\'m your XenArcAI research assistant. How can I help you with your research today?', sender: 'assistant' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    { id: 1, title: 'Research on AI Models', active: true },
    { id: 2, title: 'Data Analysis Techniques', active: false },
    { id: 3, title: 'Literature Review', active: false }
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
    };

    const currentInputValue = inputValue;
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Add a placeholder for the AI response
    const assistantMessageId = Date.now() + 1;
    setMessages((prev) => [
      ...prev,
      { id: assistantMessageId, text: '', sender: 'assistant' },
    ]);

    try {
      // For now, we're not sending websites. In a full implementation, you might want to
      // extract URLs from the user's message or have a separate input for them.
      const websites = [];
      
      const response = await fetch('http://localhost:3001/api/agent-pipeline', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: currentInputValue,
          websites: websites
        }),
      });

      if (!response.body) return;

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        const chunk = decoder.decode(value, { stream: true });
        
        // Process Server-Sent Events
        const lines = chunk.split('\n\n');
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const jsonString = line.substring(6);
            try {
              const data = JSON.parse(jsonString);
              
              // Handle different types of messages from the agent pipeline
              if (data.type === 'plan' && data.content) {
                setMessages((prev) =>
                  prev.map((msg) =>
                    msg.id === assistantMessageId
                      ? { ...msg, text: msg.text + data.content }
                      : msg
                  )
                );
              } else if (data.type === 'webInfo' && data.content) {
                setMessages((prev) =>
                  prev.map((msg) =>
                    msg.id === assistantMessageId
                      ? { ...msg, text: msg.text + '\n\nWeb Search Information:\n' + data.content }
                      : msg
                  )
                );
              } else if (data.type === 'finalResponse' && data.content) {
                // Replace the entire message content with the final response from Gemini
                setMessages((prev) =>
                  prev.map((msg) =>
                    msg.id === assistantMessageId
                      ? { ...msg, text: data.content }
                      : msg
                  )
                );
              } else if (data.type === 'status' && data.content) {
                // Status messages could be displayed differently if desired
                // For now, we'll add them to the main message
                setMessages((prev) =>
                  prev.map((msg) =>
                    msg.id === assistantMessageId
                      ? { ...msg, text: msg.text + '\n\nStatus: ' + data.content }
                      : msg
                  )
                );
              } else if (data.type === 'complete' && data.content) {
                // We don't need to display the completion message since the final response is already shown
                // But we'll keep this here in case we want to display it in the future
              } else if (data.type === 'error' && data.content) {
                setMessages((prev) =>
                  prev.map((msg) =>
                    msg.id === assistantMessageId
                      ? { ...msg, text: msg.text + '\n\nError: ' + data.content }
                      : msg
                  )
                );
              }
            } catch (error) {
              console.error('Failed to parse JSON chunk:', jsonString);
            }
          }
        }
      }
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantMessageId
            ? { ...msg, text: 'Sorry, I encountered an error. Please try again.' }
            : msg
        )
      );
    } finally {
      setIsTyping(false);
    }
  };

  const handleNewChat = () => {
    setMessages([
      { id: 1, text: 'Hello! I\'m your XenArcAI research assistant. What would you like to explore today?', sender: 'assistant' }
    ]);
    const newChatTitle = inputValue.trim() ? (inputValue.trim().substring(0, 20) + (inputValue.trim().length > 20 ? '...' : '')) : `Chat ${chatHistory.length + 1}`;
    setChatHistory(prev => prev.map(chat => ({ ...chat, active: false })));
    setChatHistory(prev => [
      ...prev,
      { id: prev.length + 1, title: newChatTitle, active: true }
    ]);
    setSidebarOpen(false);
  };

  const handleSelectChat = (chatId) => {
    setChatHistory(prev => prev.map(chat => ({ ...chat, active: chat.id === chatId })));
    setMessages([
      { id: 1, text: `Loading conversation: ${chatHistory.find(c => c.id === chatId)?.title}`, sender: 'assistant' }
    ]);
    setSidebarOpen(false);
  };

  return (
    <div className={styles.chatContainer}>
      <Sidebar 
        sidebarOpen={sidebarOpen} 
        chatHistory={chatHistory} 
        handleNewChat={handleNewChat} 
        handleSelectChat={handleSelectChat} 
      />
      <div className={styles.mainChat}>
        <button 
          className={styles.sidebarToggle}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className={styles.chatHeader}>
          <h2 className={styles.chatTitle}>XenArcAI Research Assistant</h2>
        </div>
        <ChatMessages messages={messages} isTyping={isTyping} />
        <ChatInput 
          inputValue={inputValue} 
          setInputValue={setInputValue} 
          handleSubmit={handleSubmit} 
          isTyping={isTyping} 
        />
      </div>
    </div>
  );
};

export default DeepResearch;

