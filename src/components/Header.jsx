import { HiMenu, HiSearch, HiBell, HiMoon, HiSun } from 'react-icons/hi'

export default function Header({ sidebarOpen, setSidebarOpen, darkMode, toggleDarkMode }) {
  return (
    <header className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm shadow-sm border-b border-gray-100 dark:border-gray-700">
      <button
        type="button"
        className="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <HiMenu className="h-6 w-6" />
      </button>
      
      <div className="flex flex-1 justify-between px-4">
        <div className="flex flex-1">
          <div className="flex w-full md:ml-0">
            <div className="relative w-full max-w-2xl">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <HiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="search"
                placeholder="Search..."
                className="block w-full rounded-lg border-0 bg-gray-50 py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none dark:bg-gray-700/50 dark:text-gray-200 transition-colors duration-200"
              />
            </div>
          </div>
        </div>
        
        <div className="ml-4 flex items-center md:ml-6 space-x-4">
          <button
            type="button"
            className="rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            <HiBell className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={toggleDarkMode}
            className="rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            {darkMode ? <HiSun className="h-6 w-6" /> : <HiMoon className="h-6 w-6" />}
          </button>

          <div className="relative">
            <button
              type="button"
              className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
