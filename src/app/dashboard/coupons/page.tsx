"use client";

import React, { useState } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import Sidebar from '@/components/dashboard/Sidebar';

const CouponsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('available');

  const availableCoupons = [
    {
      id: 1,
      code: 'TOPCP50',
      title: 'Giảm 50% gói TopCV Connect',
      description: 'Áp dụng cho lần đăng ký đầu tiên gói TopCV Connect Premium',
      discount: '50%',
      validUntil: '30/09/2025',
      type: 'percentage',
      status: 'available'
    },
    {
      id: 2,
      code: 'INSIGHTS299',
      title: 'Giảm 299k gói Insights Pro',
      description: 'Miễn phí tháng đầu tiên cho gói TopCV Insights Pro',
      discount: '299,000đ',
      validUntil: '15/10/2025',
      type: 'fixed',
      status: 'available'
    },
    {
      id: 3,
      code: 'NEWUSER20',
      title: 'Giảm 20% cho người dùng mới',
      description: 'Dành cho khách hàng đăng ký lần đầu tại TopCV',
      discount: '20%',
      validUntil: '31/12/2025',
      type: 'percentage',
      status: 'available'
    }
  ];

  const usedCoupons = [
    {
      id: 4,
      code: 'SUMMER2025',
      title: 'Ưu đãi mùa hè 2025',
      description: 'Giảm 30% tất cả dịch vụ',
      discount: '30%',
      usedDate: '15/08/2025',
      savedAmount: '179,700đ'
    },
    {
      id: 5,
      code: 'CONNECT100',
      title: 'Giảm 100k gói Connect',
      description: 'Ưu đãi đặc biệt cho gói Connect',
      discount: '100,000đ',
      usedDate: '01/08/2025',
      savedAmount: '100,000đ'
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
                <h1 className="text-3xl font-bold text-gray-900">Mã ưu đãi</h1>
                <p className="text-gray-600 mt-2">Tiết kiệm chi phí với các mã ưu đãi đặc biệt</p>
              </div>

              {/* Coupon Input */}
              <div className="bg-white rounded-lg shadow p-6 mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Nhập mã ưu đãi</h2>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Nhập mã ưu đãi của bạn"
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                    Áp dụng
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="mb-6">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex space-x-8">
                    <button
                      onClick={() => setActiveTab('available')}
                      className={`py-2 px-1 border-b-2 font-medium text-sm ${
                        activeTab === 'available'
                          ? 'border-green-500 text-green-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      Mã có sẵn ({availableCoupons.length})
                    </button>
                    <button
                      onClick={() => setActiveTab('used')}
                      className={`py-2 px-1 border-b-2 font-medium text-sm ${
                        activeTab === 'used'
                          ? 'border-green-500 text-green-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      Đã sử dụng ({usedCoupons.length})
                    </button>
                  </nav>
                </div>
              </div>

              {/* Available Coupons */}
              {activeTab === 'available' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {availableCoupons.map((coupon) => (
                    <div key={coupon.id} className="bg-white rounded-lg shadow-lg border border-dashed border-green-300 relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-xs font-medium">
                        {coupon.discount} OFF
                      </div>
                      
                      <div className="p-6">
                        <div className="mb-4">
                          <div className="bg-green-100 text-green-800 text-sm font-mono px-3 py-1 rounded inline-block mb-2">
                            {coupon.code}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">{coupon.title}</h3>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-4">{coupon.description}</p>
                        
                        <div className="text-sm text-gray-500 mb-4">
                          <span>Có hiệu lực đến: {coupon.validUntil}</span>
                        </div>
                        
                        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                          Sử dụng ngay
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Used Coupons */}
              {activeTab === 'used' && (
                <div className="space-y-4">
                  {usedCoupons.map((coupon) => (
                    <div key={coupon.id} className="bg-white rounded-lg shadow p-6 border border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4">
                            <div className="bg-gray-100 text-gray-600 text-sm font-mono px-3 py-1 rounded">
                              {coupon.code}
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{coupon.title}</h3>
                              <p className="text-gray-600 text-sm">{coupon.description}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-green-600 font-semibold">Tiết kiệm: {coupon.savedAmount}</div>
                          <div className="text-gray-500 text-sm">Sử dụng: {coupon.usedDate}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Stats */}
              <div className="mt-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-6 text-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold">279,700đ</div>
                    <div className="opacity-90">Tổng tiết kiệm</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">{availableCoupons.length}</div>
                    <div className="opacity-90">Mã có sẵn</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">{usedCoupons.length}</div>
                    <div className="opacity-90">Đã sử dụng</div>
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

export default CouponsPage;