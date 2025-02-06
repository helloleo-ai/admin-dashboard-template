import { useState, useEffect } from 'react';

const mockConversations = [
  {
    id: 1,
    name: 'John Doe',
    avatar: 'https://terros.io/wp-content/uploads/2024/04/Leo.webp',
    lastMessage: 'Need any help with that?',
    timestamp: '10:32 AM',
    unread: 2,
    messages: [
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
      }
    ]
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatar: 'https://terros.io/wp-content/uploads/2024/04/Leo.webp',
    lastMessage: 'The project looks amazing!',
    timestamp: '9:15 AM',
    unread: 1,
    messages: [
      {
        id: 1,
        sender: 'Jane Smith',
        avatar: 'https://terros.io/wp-content/uploads/2024/04/Leo.webp',
        message: 'Hi! I saw the latest updates.',
        timestamp: '9:14 AM',
        isMe: false
      },
      {
        id: 2,
        sender: 'Jane Smith',
        avatar: 'https://terros.io/wp-content/uploads/2024/04/Leo.webp',
        message: 'The project looks amazing!',
        timestamp: '9:15 AM',
        isMe: false
      }
    ]
  },
  {
    id: 3,
    name: 'Team Chat',
    avatar: 'https://terros.io/wp-content/uploads/2024/04/Leo.webp',
    lastMessage: 'Meeting at 3 PM',
    timestamp: 'Yesterday',
    unread: 0,
    messages: [
      {
        id: 1,
        sender: 'Alice Johnson',
        avatar: 'https://terros.io/wp-content/uploads/2024/04/Leo.webp',
        message: 'Meeting at 3 PM',
        timestamp: 'Yesterday',
        isMe: false
      }
    ]
  }
];

const initialMessages = [
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
  const [conversations, setConversations] = useState(mockConversations);
  const [activeConversation, setActiveConversation] = useState(conversations[0]);
  const [messages, setMessages] = useState(activeConversation.messages);
  const [newMessage, setNewMessage] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const handleConversationSelect = (conversation) => {
    setActiveConversation(conversation);
    setMessages(conversation.messages);
    // Mark conversation as read
    setConversations(conversations.map(conv => 
      conv.id === conversation.id ? { ...conv, unread: 0 } : conv
    ));
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] relative">
      {/* Main chat area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile conversation toggle */}
        <button
          className="lg:hidden absolute right-4 top-4 z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
          </svg>
        </button>
        <div className="p-4 border-b dark:border-gray-700 flex items-center gap-3">
          <img
            src={activeConversation.avatar}
            alt={activeConversation.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h1 className="text-xl font-semibold">{activeConversation.name}</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Online</p>
          </div>
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

      {/* Right sidebar - Conversations list */}
      <div className={`fixed lg:static inset-y-0 right-0 w-80 border-l dark:border-gray-700 bg-white dark:bg-gray-800 overflow-y-auto transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
      }`}>
        <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Conversations</h2>
          <button
            className="lg:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => setSidebarOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="divide-y dark:divide-gray-700">
          {conversations.map((conversation) => (
            <button
              key={conversation.id}
              className={`w-full p-4 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors ${
                activeConversation.id === conversation.id ? 'bg-gray-50 dark:bg-gray-700/50' : ''
              }`}
              onClick={() => handleConversationSelect(conversation)}
            >
              <div className="relative">
                <img
                  src={conversation.avatar}
                  alt={conversation.name}
                  className="w-12 h-12 rounded-full"
                />
                {conversation.unread > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary-500 text-white text-xs flex items-center justify-center">
                    {conversation.unread}
                  </span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <p className="font-medium truncate">{conversation.name}</p>
                  <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap ml-2">
                    {conversation.timestamp}
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                  {conversation.lastMessage}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
