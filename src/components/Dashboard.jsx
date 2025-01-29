import { useState } from 'react'
import Chart from 'react-apexcharts'

export default function Dashboard() {
  const [chartData] = useState({
    options: {
      chart: {
        id: 'basic-line',
        toolbar: {
          show: false
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
      },
      stroke: {
        curve: 'smooth'
      },
      theme: {
        mode: 'light'
      }
    },
    series: [{
      name: 'Revenue',
      data: [30, 40, 35, 50, 49, 60]
    }]
  })

  const stats = [
    { name: 'Total Revenue', value: '$45,231', change: '+20.1%' },
    { name: 'Active Users', value: '2,345', change: '+15.1%' },
    { name: 'New Orders', value: '345', change: '+12.5%' },
  ]

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Dashboard</h1>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((item) => (
              <div key={item.name} className="card">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{item.name}</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {item.change}
                  </span>
                </div>
                <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-gray-100">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="card">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Revenue Overview</h3>
              <Chart
                options={chartData.options}
                series={chartData.series}
                type="line"
                height={350}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
