'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import { 
  MagnifyingGlassIcon,
  DocumentTextIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Recent articles data
  const recentArticles = [
    'Cập nhật quy định đăng tin tuyển dụng Lao động phổ thông trên TopCV',
    'Quy định đăng tin của TopCV',
    '[Cập nhật] Điều chỉnh quy định đăng tin',
    'Điều chỉnh điều kiện bán hàng đối với NTD email cá nhân sử dụng gói Top Credit',
    'Toppy AI duyệt tin tự động',
    'Huy hiệu Tia sét (Flash Badge)',
    'Làm thế nào để xuất danh sách ứng viên từ pool'
  ];

  // Help sections data
  const helpSections = [
    {
      title: 'Tổng quan',
      items: [
        'Hướng dẫn sử dụng tài liệu',
        'Lịch sử cập nhật',
        'Video hướng dẫn',
        'Các câu hỏi thường gặp'
      ],
      icon: '📊'
    },
    {
      title: 'Phương pháp luận',
      items: [
        'Smart Recruitment Platform Principle',
        'AI in Recruitment',
        'Recruitment Marketing'
      ],
      icon: '📚'
    },
    {
      title: 'Định nghĩa & các khái niệm',
      items: [
        'Chiến dịch tuyển dụng',
        'Dịch vụ tuyển dụng',
        'Trạng thái dịch vụ',
        'Nguồn và trạng thái hồ sơ'
      ],
      icon: '📝',
      showAll: true,
      totalItems: 9
    },
    {
      title: 'Hướng dẫn sử dụng',
      items: [
        'Điều chỉnh điều kiện bán hàng đối với NTD email cá nhân sử dụng gói Top Credit',
        'Tạo tài khoản tuyển dụng',
        'Tạo chiến dịch tuyển dụng',
        'Đăng tin tuyển dụng miễn phí'
      ],
      icon: '⚙️',
      showAll: true,
      totalItems: 13
    }
  ];

  // Filter function for search
  const filteredArticles = recentArticles.filter(article =>
    article.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="text-white pt-24 pb-20 relative overflow-hidden bg-cover bg-center bg-no-repeat" 
        style={{ 
          minHeight: '320px',
          backgroundImage: 'url(/images/banners/Banner-1.png)'
        }}
      >
       
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 drop-shadow-lg">
              Smart Recruitment Platform
            </h1>
            
            {/* Search Bar */}
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm nội dung hỗ trợ"
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-300 shadow-lg text-base bg-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Recent Updates */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-lg font-medium text-gray-900">Mới cập nhật</h2>
            <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">New</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredArticles.slice(0, 8).map((article, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow cursor-pointer group">
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-green-600 transition-colors leading-relaxed">
                  {article}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Help Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {helpSections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg border">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="text-2xl mr-3">{section.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-gray-700 hover:text-green-600 cursor-pointer transition-colors group">
                      <DocumentTextIcon className="h-4 w-4 mr-3 text-gray-400 group-hover:text-green-500" />
                      <span className="text-sm flex-1">{item}</span>
                    </div>
                  ))}
                  
                  {section.showAll && (
                    <div className="pt-3 border-t">
                      <button className="flex items-center text-sm text-green-600 hover:text-green-700 font-medium">
                        <span>XEM TẤT CẢ {section.totalItems} KHÁI NIỆM</span>
                        <ChevronRightIcon className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            Copyright 2014 - 2023 | Smart Recruitment Platform by TopCV | All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}