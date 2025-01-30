import { useState } from 'react'
import Chart from 'react-apexcharts'

export default function Analytics() {
  const metrics = [
    { name: 'Page Views', value: '1.2M', change: '+12.3%', trend: 'up' },
    { name: 'Bounce Rate', value: '42.5%', change: '-8.1%', trend: 'down' },
    { name: 'Session Duration', value: '2m 45s', change: '+15.4%', trend: 'up' },
    { name: 'Conversion Rate', value: '2.8%', change: '+1.2%', trend: 'up' },
  ]

  const [trafficChart] = useState({
    options: {
      chart: {
        id: 'traffic-line',
        toolbar: { show: false },
        background: 'transparent'
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      stroke: { curve: 'smooth', width: 3 },
      colors: ['#8b5cf6'],
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
      name: 'Traffic',
      data: [3200, 4100, 3800, 5100, 4800, 5800, 4100]
    }]
  })

  const [sourcesChart] = useState({
    options: {
      chart: {
        id: 'sources-pie',
        toolbar: { show: false },
        background: 'transparent'
      },
      labels: ['Direct', 'Social', 'Organic', 'Referral'],
      colors: ['#10b981', '#6366f1', '#f59e0b', '#ef4444'],
      theme: { mode: 'light' }
    },
    series: [35, 25, 25, 15]
  })

  const [devicesChart] = useState({
    options: {
      chart: {
        id: 'devices-bar',
        toolbar: { show: false },
        background: 'transparent'
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      colors: ['#6366f1'],
      xaxis: {
        categories: ['Desktop', 'Mobile', 'Tablet']
      },
      theme: { mode: 'light' }
    },
    series: [{
      name: 'Users',
      data: [58, 34, 8]
    }]
  })

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Analytics</h1>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((item, index) => (
              <div
                key={item.name}
                className="card animate-fadeIn hover:scale-[1.02] transition-transform duration-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{item.name}</h3>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    item.trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {item.change}
                  </span>
                </div>
                <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-gray-100">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="card">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Weekly Traffic</h3>
              <Chart
                options={trafficChart.options}
                series={trafficChart.series}
                type="area"
                height={350}
              />
            </div>

            <div className="card">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Traffic Sources</h3>
              <Chart
                options={sourcesChart.options}
                series={sourcesChart.series}
                type="pie"
                height={350}
              />
            </div>

            <div className="card">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Device Distribution</h3>
              <Chart
                options={devicesChart.options}
                series={devicesChart.series}
                type="bar"
                height={350}
              />
            </div>

            <div className="card">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Top Pages</h3>
              <div className="space-y-4">
                {[
                  { path: '/home', views: '12.5K', change: '+12%' },
                  { path: '/products', views: '8.2K', change: '+8%' },
                  { path: '/blog', views: '6.4K', change: '+15%' },
                  { path: '/about', views: '3.8K', change: '+5%' },
                  { path: '/contact', views: '2.9K', change: '+3%' }
                ].map((page, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-500"></div>
                      <p className="text-sm text-gray-900 dark:text-gray-100">{page.path}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-gray-500">{page.views}</span>
                      <span className="text-xs text-green-600">({page.change})</span>
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
