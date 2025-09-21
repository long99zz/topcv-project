"use client";

import React, { useState } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import Sidebar from '@/components/dashboard/Sidebar';

const MyServicesPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const activeServices = [
    {
      id: 1,
      name: 'TopCV Connect Premium',
      status: 'Đang hoạt động',
      startDate: '15/08/2025',
      endDate: '15/09/2025',
      price: '599,000đ',
      usage: {
        used: 45,
        total: 100,
        type: 'kết nối'
      }
    },
    {
      id: 2,
      name: 'TopCV Insights Pro',
      status: 'Đang hoạt động',
      startDate: '01/09/2025',
      endDate: '01/10/2025',
      price: '299,000đ',
      usage: {
        used: 12,
        total: 50,
        type: 'báo cáo'
      }
    }
  ];

  const serviceHistory = [
    {
      id: 1,
      name: 'TopCV Connect Basic',
      period: '15/07/2025 - 15/08/2025',
      status: 'Đã hết hạn',
      price: '299,000đ'
    },
    {
      id: 2,
      name: 'TopCV Recruitment Suite',
      period: '01/06/2025 - 01/07/2025',
      status: 'Đã hủy',
      price: '1,299,000đ'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <DashboardHeader 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)} 
        onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      
      <div className="flex">
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)}
          isCollapsed={sidebarCollapsed}
        />
        
        <main className={`flex-1 transition-all duration-300 ${
          sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'
        }`}>
          <div className="px-4 py-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Dịch vụ của tôi</h1>
                <p className="text-gray-600 mt-2">Quản lý các gói dịch vụ đang sử dụng và lịch sử</p>
              </div>

              {/* Active Services */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Dịch vụ đang hoạt động</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {activeServices.map((service) => (
                    <div key={service.id} className="bg-white rounded-lg shadow p-6 border border-green-200">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1">
                            {service.status}
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-gray-900">{service.price}</p>
                          <p className="text-sm text-gray-500">hàng tháng</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Đã sử dụng {service.usage.used}/{service.usage.total} {service.usage.type}</span>
                          <span>{Math.round((service.usage.used / service.usage.total) * 100)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-600 h-2 rounded-full" 
                            style={{ width: `${(service.usage.used / service.usage.total) * 100}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-600 mb-4">
                        <p>Chu kỳ: {service.startDate} - {service.endDate}</p>
                      </div>

                      <div className="flex space-x-3">
                        <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                          Gia hạn
                        </button>
                        <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors">
                          Chi tiết
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service History */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">Lịch sử dịch vụ</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Dịch vụ
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Thời gian
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Trạng thái
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Giá
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Thao tác
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {serviceHistory.map((service) => (
                        <tr key={service.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{service.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{service.period}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              service.status === 'Đã hết hạn' 
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {service.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {service.price}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-green-600 hover:text-green-900 mr-3">
                              Xem chi tiết
                            </button>
                            <button className="text-blue-600 hover:text-blue-900">
                              Gia hạn
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Cần thêm dịch vụ?</h3>
                <p className="mb-4 opacity-90">Khám phá các gói dịch vụ khác để tối ưu hóa hiệu quả tuyển dụng</p>
                <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Xem tất cả dịch vụ
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyServicesPage;