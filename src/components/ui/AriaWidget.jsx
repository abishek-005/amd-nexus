'use client';
import { useState } from 'react';
import './AriaWidget.css';
import { MessageSquare, X, Send } from 'lucide-react';

export default function AriaWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="aria-container">
      {isOpen && (
        <div className="aria-chat-bubble glass-panel">
          <div className="aria-header">
            <div className="aria-avatar-small">
              <span className="aria-dot"></span>
            </div>
            <div>
              <h4 className="aria-name">ARIA</h4>
              <p className="aria-status">Online</p>
            </div>
            <button className="aria-close" onClick={() => setIsOpen(false)}>
              <X size={18} />
            </button>
          </div>
          
          <div className="aria-messages">
            <div className="aria-message bot-message">
              <p>Hi! I'm ARIA. Tell me what you do and I'll find your perfect AMD processor 🔴</p>
            </div>
          </div>
          
          <div className="aria-input-area">
            <input 
              type="text" 
              placeholder="E.g. I need a PC for 4K video editing..." 
              className="aria-input"
            />
            <button className="aria-send">
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {!isOpen && (
        <button 
          className="aria-trigger-btn"
          onClick={() => setIsOpen(true)}
        >
          <div className="aria-avatar">
            <MessageSquare color="white" />
          </div>
        </button>
      )}
    </div>
  );
}
