import React, { useState, useRef, useEffect } from 'react';

const Chatbot = ({ onClose }) => {
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Hi! How can I help you today?' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
    if (input.trim()) {
        const userMessage = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);

        try {
            const res = await fetch('https://12404fae700a.ngrok-free.app/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: input })
            });

            const data = await res.json();
            const botReply = { sender: 'bot', text: data.response };
            setMessages(prev => [...prev, botReply]);
        } catch (err) {
            setMessages(prev => [...prev, { sender: 'bot', text: "Error contacting server." }]);
        }

        setInput('');
    }
    
};
    const textareaRef = useRef(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [input]);

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
                <textarea
                    ref={textareaRef}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSend();
                        }
                    }}
                    placeholder="Type your message..."
                    rows={1}
                />

                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default Chatbot;
