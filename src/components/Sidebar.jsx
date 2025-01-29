import { useState } from 'react'
import { HiChartBar, HiUsers, HiShoppingCart, HiCog } from 'react-icons/hi'
import clsx from 'clsx'

const navigation = [
  { name: 'Dashboard', icon: HiChartBar, href: '#' },
  { name: 'Customers', icon: HiUsers, href: '#' },
  { name: 'Orders', icon: HiShoppingCart, href: '#' },
  { name: 'Settings', icon: HiCog, href: '#' },
]

export default function Sidebar({ open, setOpen }) {
  return (
    <>
      <div
        className={clsx(
          'fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity lg:hidden',
          open ? 'opacity-100 ease-out duration-300' : 'opacity-0 ease-in duration-200 pointer-events-none'
        )}
        onClick={() => setOpen(false)}
      />

      <div
        className={clsx(
          'fixed inset-y-0 left-0 flex flex-col w-64 bg-white dark:bg-gray-800 transform transition-transform lg:translate-x-0 lg:static lg:inset-0',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-center h-16 flex-shrink-0 px-4 bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-800 dark:to-primary-700">
          <h1 className="text-xl font-bold text-white tracking-tight">Admin Dashboard</h1>
        </div>

        <nav className="flex-1 px-2 py-4 space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/50 transition-colors duration-200"
            >
              <item.icon className="mr-3 h-6 w-6" />
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
