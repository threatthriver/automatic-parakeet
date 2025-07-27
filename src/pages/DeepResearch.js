import React, { useState, useRef, useEffect } from 'react';
import styles from './DeepResearch.module.css';

const DeepResearch = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! I\'m your AI research assistant. How can I help you today?', sender: 'assistant' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: `I'm analyzing your query about "${inputValue}". This is a simulated response. In a real implementation, this would be connected to an AI research assistant.`,
        sender: 'assistant'
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };
  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        <h2 className={styles.chatTitle}>XenArcAI Research Assistant</h2>
      </div>
      
      <div className={styles.chatMessages}>
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`${styles.message} ${message.sender === 'user' ? styles.userMessage : styles.assistantMessage}`}
          >
            {message.text}
          </div>
        ))}
        
        {isTyping && (
          <div className={styles.typingIndicator}>
            <div className={styles.typingDot}></div>
            <div className={styles.typingDot}></div>
            <div className={styles.typingDot}></div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className={styles.chatInputContainer}>
        <form onSubmit={handleSubmit} className={styles.chatForm}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask me anything about your research..."
            className={styles.chatInput}
            disabled={isTyping}
          />
          <button 
            type="submit" 
            className={styles.sendButton}
            disabled={!inputValue.trim() || isTyping}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeepResearch;
