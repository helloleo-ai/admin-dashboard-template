import { useState } from 'react'
import Chart from 'react-apexcharts'

export default function Dashboard() {
  const stats = [
    { name: 'Total Revenue', value: '$45,231', change: '+20.1%', trend: 'up' },
    { name: 'Active Users', value: '2,345', change: '+15.1%', trend: 'up' },
    { name: 'New Orders', value: '345', change: '+12.5%', trend: 'up' },
    { name: 'Conversion Rate', value: '3.15%', change: '-2.1%', trend: 'down' },
  ]

  const [revenueChart] = useState({
    options: {
      chart: {
        id: 'revenue-line',
        toolbar: { show: false },
        background: 'transparent'
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
      },
      stroke: { curve: 'smooth', width: 3 },
      colors: ['#6366f1'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.2,
          stops: [0, 90, 100]
        }
      },
      theme: { mode: 'light' }
    },
    series: [{
      name: 'Revenue',
      data: [30, 40, 35, 50, 49, 60]
    }]
  })

  const [usersChart] = useState({
    options: {
      chart: {
        id: 'users-bar',
        toolbar: { show: false },
        background: 'transparent'
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: false,
        }
      },
      colors: ['#8b5cf6'],
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      theme: { mode: 'light' }
    },
    series: [{
      name: 'Active Users',
      data: [144, 155, 187, 156, 261, 247, 163]
    }]
  })

  const [ordersChart] = useState({
    options: {
      chart: {
        id: 'orders-donut',
        toolbar: { show: false },
        background: 'transparent'
      },
      labels: ['Completed', 'Pending', 'Cancelled'],
      colors: ['#10b981', '#f59e0b', '#ef4444'],
      plotOptions: {
        pie: {
          donut: {
            size: '75%'
          }
        }
      },
      theme: { mode: 'light' }
    },
    series: [63, 27, 10]
  })

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Dashboard</h1>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((item, index) => (
              <div
                key={item.name}
                className="card animate-fadeIn hover:scale-[1.02] transition-transform duration-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{item.name}</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {item.change}
                  </span>
                </div>
                <p 
                  className="mt-2 text-3xl font-semibold text-gray-900 dark:text-gray-100 animate-scaleIn"
                  style={{ animationDelay: `${index * 100 + 200}ms` }}
                >
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="card">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Revenue Overview</h3>
              <Chart
                options={revenueChart.options}
                series={revenueChart.series}
                type="area"
                height={350}
              />
            </div>

            <div className="card">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Daily Active Users</h3>
              <Chart
                options={usersChart.options}
                series={usersChart.series}
                type="bar"
                height={350}
              />
            </div>

            <div className="card">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Order Status Distribution</h3>
              <Chart
                options={ordersChart.options}
                series={ordersChart.series}
                type="donut"
                height={350}
              />
            </div>

            <div className="card">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { time: '2 hours ago', text: 'New order #1234 from John Doe' },
                  { time: '3 hours ago', text: 'Payment received for order #1233' },
                  { time: '5 hours ago', text: 'New user registration: jane@example.com' },
                  { time: '6 hours ago', text: 'Product "iPhone 13" stock updated' },
                  { time: '8 hours ago', text: 'New support ticket #789 created' }
                ].map((activity, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary-500"></div>
                    <div>
                      <p className="text-sm text-gray-900 dark:text-gray-100">{activity.text}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
