import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const LiveChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (input) {
      setMessages([...messages, { text: input, sender: 'User' }]);
      setInput('');
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: 'Thank you for your message!', sender: 'Bot' }]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-5 right-5">
      {/* WhatsApp Icon Button */}
      <button className="bg-green-500 text-white rounded-full p-3 shadow-lg flex items-center">
        <FontAwesomeIcon icon={faWhatsapp} size="lg" />
      </button>

      {/* Chat Window */}
      <div className="fixed bottom-16 right-0 bg-white shadow-lg p-4 rounded-lg w-80">
        <h4 className="font-bold">Live Chat</h4>
        <div className="h-60 overflow-y-scroll">
          {messages.map((msg, index) => (
            <div key={index} className={`my-2 ${msg.sender === 'User' ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block p-1 rounded ${msg.sender === 'User' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                {msg.text}
              </span>
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage} className="mt-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border rounded p-2 w-full"
            placeholder="Type a message..."
          />
        </form>
      </div>
    </div>
  );
};

export default LiveChat;