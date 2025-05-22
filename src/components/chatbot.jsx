import React, { useState } from 'react';

const Chatbot = ({ onClose }) => {
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Hi! How can I help you today?' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            const userMessage = { sender: 'user', text: input };
            const botReply = { sender: 'bot', text: 'Thanks for your message!' };
            setMessages(prev => [...prev, userMessage, botReply]);
            setInput('');
        }
    };

    return (
        <div className="chatbot-window">
            <div className="chatbot-header">
                <span>Chatbot</span>
                <button className="close-button" onClick={onClose}>X</button>
            </div>
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSend()}
                    placeholder="Type your message..."
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default Chatbot;
