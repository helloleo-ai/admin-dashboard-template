import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bars3Icon,
  MagnifyingGlassIcon,
  BellIcon,
  SunIcon, 
  MoonIcon,
  ChatBubbleLeftIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

export default function Header({ sidebarOpen, setSidebarOpen, darkMode, toggleDarkMode }) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [notifications, setNotifications] = useState(3);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white/80 dark:bg-gray-800/90 backdrop-blur-lg shadow-sm"
    >
      <button
        type="button"
        className="px-4 text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <Bars3Icon className="h-6 w-6" />
      </button>
      
      <div className="flex flex-1 items-center justify-between px-4 gap-4">
        <motion.div 
          className="flex flex-1"
          animate={{ width: isSearchFocused ? '100%' : '100%' }}
        >
          <div className="flex w-full md:ml-0">
            <div className="relative w-full max-w-2xl">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="search"
                placeholder="Search anything..."
                className="search-bar"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
            </div>
          </div>
        </motion.div>
        
        <div className="flex items-center gap-2">
          <motion.nav className="hidden md:flex items-center gap-1">
            <button className="nav-item">
              <ChatBubbleLeftIcon className="h-5 w-5" />
              <span className="hidden lg:inline">Messages</span>
            </button>
            <button className="nav-item relative">
              <BellIcon className="h-5 w-5" />
              <span className="hidden lg:inline">Notifications</span>
              {notifications > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center"
                >
                  {notifications}
                </motion.span>
              )}
            </button>
            <button className="nav-item">
              <Cog6ToothIcon className="h-5 w-5" />
              <span className="hidden lg:inline">Settings</span>
            </button>
          </motion.nav>

          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
            >
              {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 p-0.5 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all duration-200"
            >
              <img
                className="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User avatar"
              />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
