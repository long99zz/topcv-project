"use client";

import React, { useState } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import Sidebar from '@/components/dashboard/Sidebar';

const ServicesPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const services = [
    {
      id: 1,
      name: 'TopCV Insights Pro',
      description: 'Báo cáo thị trường lao động chi tiết và xu hướng tuyển dụng',
      price: '299,000',
      period: 'tháng',
      features: [
        'Báo cáo thị trường hàng tuần',
        'Phân tích xu hướng lương',
        'Dữ liệu ứng viên chi tiết',
        'Hỗ trợ 24/7'
      ],
      popular: false,
      color: 'border-gray-200'
    },
    {
      id: 2,
      name: 'TopCV Connect Premium',
      description: 'Kết nối trực tiếp với ứng viên chất lượng cao',
      price: '599,000',
      period: 'tháng',
      features: [
        'Kết nối không giới hạn',
        'Ứng viên được xác thực',
        'Chat trực tiếp',
        'Hỗ trợ ưu tiên'
      ],
      popular: true,
      color: 'border-green-500'
    },
    {
      id: 3,
      name: 'TopCV Recruitment Suite',
      description: 'Giải pháp tuyển dụng toàn diện cho doanh nghiệp',
      price: '1,299,000',
      period: 'tháng',
      features: [
        'Tất cả tính năng Premium',
        'ATS tích hợp',
        'Báo cáo analytics',
        'Account manager riêng'
      ],
      popular: false,
      color: 'border-purple-200'
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
                <h1 className="text-3xl font-bold text-gray-900">Mua dịch vụ</h1>
                <p className="text-gray-600 mt-2">Nâng cấp trải nghiệm tuyển dụng với các gói dịch vụ chuyên nghiệp</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className={`bg-white rounded-xl shadow-lg border-2 ${service.color} relative overflow-hidden`}
                  >
                    {service.popular && (
                      <div className="absolute top-0 right-0">
                        <div className="bg-green-500 text-white px-4 py-1 text-sm font-medium">
                          Phổ biến nhất
                        </div>
                      </div>
                    )}
                    
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      
                      <div className="mb-6">
                        <span className="text-4xl font-bold text-gray-900">{service.price}</span>
                        <span className="text-gray-500">đ/{service.period}</span>
                      </div>
                      
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                        service.popular
                          ? 'bg-green-600 hover:bg-green-700 text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      }`}>
                        Chọn gói này
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-white rounded-xl shadow p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Câu hỏi thường gặp</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tôi có thể hủy gói dịch vụ bất cứ lúc nào không?</h3>
                    <p className="text-gray-600">Có, bạn có thể hủy gói dịch vụ bất cứ lúc nào. Dịch vụ sẽ tiếp tục hoạt động đến hết chu kỳ thanh toán hiện tại.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Có được hoàn tiền không?</h3>
                    <p className="text-gray-600">Chúng tôi có chính sách hoàn tiền trong vòng 7 ngày đầu nếu bạn không hài lòng với dịch vụ.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Làm sao để nâng cấp gói dịch vụ?</h3>
                    <p className="text-gray-600">Bạn có thể nâng cấp gói dịch vụ bất cứ lúc nào. Chúng tôi sẽ tính toán và hoàn trả phần chênh lệch một cách công bằng.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ServicesPage;