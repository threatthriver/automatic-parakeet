import React from 'react';
import styles from '../../pages/DeepResearch.module.css';

const Sidebar = ({ chatHistory, handleNewChat, handleSelectChat, sidebarOpen }) => {
  return (
    <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}>
      <div className={styles.sidebarHeader}>
        <button className={styles.newChatButton} onClick={handleNewChat}>
          <i className="fas fa-plus"></i>
          New chat
        </button>
      </div>
      <div className={styles.sidebarContent}>
        <div className={styles.chatHistory}>
          {chatHistory.map(chat => (
            <div 
              key={chat.id}
              className={`${styles.chatHistoryItem} ${chat.active ? styles.active : ''}`}
              onClick={() => handleSelectChat(chat.id)}
            >
              <i className="fas fa-message"></i>
              <span>{chat.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.sidebarFooter}>
        <div className={styles.userInfo}>
          <div className={styles.userAvatar}>U</div>
          <span>User Account</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
