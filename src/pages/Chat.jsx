import { useState } from 'react';

const mockMessages = [
  {
    id: 1,
    sender: 'John Doe',
    avatar: 'https://terros.io/wp-content/uploads/2024/04/Leo.webp',
    message: 'Hey, how are you doing?',
    timestamp: '10:30 AM',
    isMe: false
  },
  {
    id: 2,
    sender: 'Me',
    avatar: 'https://terros.io/wp-content/uploads/2024/04/Leo.webp',
    message: 'I\'m good, thanks! Just working on the new dashboard.',
    timestamp: '10:31 AM',
    isMe: true
  },
  {
    id: 3,
    sender: 'John Doe',
    avatar: 'https://terros.io/wp-content/uploads/2024/04/Leo.webp',
    message: 'That sounds great! Need any help with that?',
    timestamp: '10:32 AM',
    isMe: false
  },
  {
    id: 4,
    sender: 'Me',
    avatar: 'https://terros.io/wp-content/uploads/2024/04/Leo.webp',
    message: 'I think I\'ve got it covered, but thanks for offering!',
    timestamp: '10:33 AM',
    isMe: true
  }
];

export default function Chat() {
  const [messages, setMessages] = useState(mockMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message = {
      id: messages.length + 1,
      sender: 'Me',
      avatar: 'https://terros.io/wp-content/uploads/2024/04/Leo.webp',
      message: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="p-4 border-b dark:border-gray-700">
        <h1 className="text-xl font-semibold">Chat</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 ${msg.isMe ? 'flex-row-reverse' : ''}`}
          >
            <img
              src={msg.avatar}
              alt={msg.sender}
              className="w-8 h-8 rounded-full"
            />
            <div
              className={`flex flex-col max-w-[70%] ${
                msg.isMe ? 'items-end' : 'items-start'
              }`}
            >
              <div
                className={`px-4 py-2 rounded-lg ${
                  msg.isMe
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700'
                }`}
              >
                <p className="text-sm">{msg.message}</p>
              </div>
              <span className="text-xs text-gray-500 mt-1">
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSendMessage} className="p-4 border-t dark:border-gray-700">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
