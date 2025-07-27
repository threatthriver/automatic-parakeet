import React, { useEffect, useRef } from 'react';
import styles from '../../pages/DeepResearch.module.css';

const ChatMessages = ({ messages, isTyping }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div className={styles.chatMessages}>
      {messages.map((message) => (
        <div 
          key={message.id} 
          className={`${styles.messageWrapper} ${message.sender === 'user' ? styles.userMessageWrapper : styles.assistantMessageWrapper}`}
        >
          <div className={`${styles.messageAvatar} ${message.sender === 'user' ? styles.userAvatar : styles.assistantAvatar}`}>
            {message.sender === 'user' ? 'U' : 'AI'}
          </div>
          <div className={styles.messageContent}>
            <div className={styles.message}>
              {message.text}
            </div>
          </div>
        </div>
      ))}
      
      {isTyping && (
        <div className={`${styles.messageWrapper} ${styles.assistantMessageWrapper}`}>
          <div className={`${styles.messageAvatar} ${styles.assistantAvatar}`}>
            AI
          </div>
          <div className={styles.messageContent}>
            <div className={styles.typingIndicator}>
              <div className={styles.typingDot}></div>
              <div className={styles.typingDot}></div>
              <div className={styles.typingDot}></div>
            </div>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
