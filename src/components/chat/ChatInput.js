import React from 'react';
import styles from '../../pages/DeepResearch.module.css';

const ChatInput = ({ inputValue, setInputValue, handleSubmit, isTyping }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className={styles.chatInputContainer}>
      <form onSubmit={handleSubmit} className={styles.chatForm}>
        <div className={styles.chatInputWrapper}>
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Message XenArcAI Research Assistant..."
            className={styles.chatInput}
            disabled={isTyping}
            onKeyDown={handleKeyDown}
          />
          <button 
            type="submit" 
            className={styles.sendButton}
            disabled={!inputValue.trim() || isTyping}
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
