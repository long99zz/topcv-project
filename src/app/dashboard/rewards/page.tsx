'use client';

import React, { useState } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import Sidebar from '@/components/dashboard/Sidebar';
import { 
  Gift, 
  Star, 
  CreditCard, 
  Tag,
  Clock,
  CheckCircle,
  Flame
} from 'lucide-react';

export default function RewardsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [userPoints] = useState(1250);
  const [userCredits] = useState(45);

  const rewardCategories = [
    { id: 'all', name: 'Tất cả', count: 28 },
    { id: 'vouchers', name: 'Voucher', count: 12 },
    { id: 'services', name: 'Dịch vụ TopCV', count: 8 },
    { id: 'courses', name: 'Khóa học', count: 6 },
    { id: 'gifts', name: 'Quà tặng', count: 2 },
  ];

  const rewards = [
    {
      id: 1,
      title: 'Voucher Grab 50k',
      description: 'Giảm 50.000đ cho đơn hàng từ 100.000đ',
      points: 500,
      credits: 0,
      type: 'voucher',
      category: 'Giao thông',
      image: '/images/rewards/grab-voucher.png',
      available: 15,
      expired: '31/12/2025',
      hot: true,
      rating: 4.8,
      reviews: 234
    },
    {
      id: 2,
      title: 'TopCV Premium 1 tháng',
      description: 'Truy cập đầy đủ tính năng Premium trong 1 tháng',
      points: 800,
      credits: 0,
      type: 'service',
      category: 'Dịch vụ',
      image: '/images/rewards/premium.png',
      available: 50,
      expired: 'Không giới hạn',
      hot: true,
      rating: 4.9,
      reviews: 156
    },
    {
      id: 3,
      title: 'Khóa học Excel từ cơ bản đến nâng cao',
      description: 'Khóa học 20 giờ với chứng chỉ hoàn thành',
      points: 0,
      credits: 25,
      type: 'course',
      category: 'Kỹ năng',
      image: '/images/rewards/excel-course.png',
      available: 8,
      expired: '30/11/2025',
      hot: false,
      rating: 4.7,
      reviews: 89
    },
    {
      id: 4,
      title: 'Shopee Voucher 100k',
      description: 'Miễn phí vận chuyển + Giảm 100k đơn từ 300k',
      points: 750,
      credits: 0,
      type: 'voucher',
      category: 'Mua sắm',
      image: '/images/rewards/shopee-voucher.png',
      available: 3,
      expired: '25/10/2025',
      hot: true,
      rating: 4.6,
      reviews: 312
    },
    {
      id: 5,
      title: 'CV Scoring miễn phí',
      description: 'Phân tích và chấm điểm CV bởi AI',
      points: 200,
      credits: 0,
      type: 'service',
      category: 'Dịch vụ',
      image: '/images/rewards/cv-scoring.png',
      available: 100,
      expired: 'Không giới hạn',
      hot: false,
      rating: 4.5,
      reviews: 67
    },
    {
      id: 6,
      title: 'Airpods Pro Max',
      description: 'Apple AirPods Pro Max - Màu Space Gray',
      points: 0,
      credits: 2500,
      type: 'gift',
      category: 'Công nghệ',
      image: '/images/rewards/airpods.png',
      available: 1,
      expired: '31/12/2025',
      hot: true,
      rating: 5.0,
      reviews: 12
    }
  ];

  const filteredRewards = activeTab === 'all' 
    ? rewards 
    : rewards.filter(reward => reward.type === activeTab);

  const userLevel = {
    current: 'Diamond',
    next: 'Platinum',
    progress: 75,
    benefits: ['Ưu tiên đổi quà', 'Giảm giá 10%', 'Hỗ trợ VIP']
  };

  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <DashboardHeader 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)} 
        onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      
      <div className="flex w-full">
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)}
          isCollapsed={sidebarCollapsed}
        />
        
        <main className={`flex-1 w-full transition-all duration-300 ${
          sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'
        } lg:w-auto`}>
          <div className="px-4 py-4">
            <div className="max-w-7xl mx-auto">
              {/* Page Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">TopCV Rewards</h1>
                <p className="text-gray-600 mt-2">Đổi điểm lấy quà - Trải nghiệm dịch vụ premium</p>
              </div>

              {/* User Points & Level */}

              {/* User Points & Level */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Points Balance */}
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg text-white p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-white/20 rounded-lg p-2 mr-3">
                        <Star className="h-6 w-6" />
                      </div>
                </div>
                <div>
                  <p className="text-green-100 text-sm">Top Point</p>
                  <p className="text-2xl font-bold">{userPoints} TP</p>
                </div>
              </div>
            </div>
            <div className="flex items-center text-green-100 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              <span>Có hiệu lực đến 31/12/2025</span>
            </div>
          </div>

          {/* Credits Balance */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg text-white p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-white/20 rounded-lg p-2 mr-3">
                  <CreditCard className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-blue-100 text-sm">Credit Point</p>
                  <p className="text-2xl font-bold">{userCredits} CP</p>
                </div>
              </div>
            </div>
            <div className="flex items-center text-blue-100 text-sm">
              <CheckCircle className="h-4 w-4 mr-1" />
              <span>Không giới hạn thời gian</span>
            </div>
          </div>

          {/* User Level */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-yellow-100 rounded-lg p-2 mr-3">
                  <Star className="h-6 w-6 text-yellow-500 fill-current" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Hạng thành viên</p>
                  <p className="text-xl font-bold text-gray-900">{userLevel.current}</p>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Tiến độ lên {userLevel.next}</span>
                <span>{userLevel.progress}%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 rounded-full"
                  style={{ width: `${userLevel.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white rounded-xl shadow-sm border">
          <div className="border-b">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {rewardCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`${
                    activeTab === category.id
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
                >
                  {category.name}
                  <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* Rewards Grid */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRewards.map((reward) => (
                <div key={reward.id} className="bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow relative">
                  {reward.hot && (
                    <div className="absolute top-3 left-3 z-10">
                      <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                        <Flame className="h-3 w-3 mr-1" />
                        HOT
                      </div>
                    </div>
                  )}
                  
                  {/* Image */}
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-t-xl">
                    <div className="flex items-center justify-center h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-xl">
                      <Gift className="h-12 w-12 text-gray-400" />
                    </div>
                  </div>

                  <div className="p-4">
                    {/* Title and Category */}
                    <div className="mb-2">
                      <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        {reward.category}
                      </span>
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{reward.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{reward.description}</p>

                    {/* Rating */}
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(reward.rating) ? 'text-yellow-400 fill-current' : 'text-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-1 text-sm text-gray-600">
                        {reward.rating} ({reward.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        {reward.points > 0 && (
                          <div className="flex items-center text-green-600">
                            <Star className="h-4 w-4 mr-1" />
                            <span className="font-bold">{reward.points} TP</span>
                          </div>
                        )}
                        {reward.credits > 0 && (
                          <div className="flex items-center text-blue-600">
                            <CreditCard className="h-4 w-4 mr-1" />
                            <span className="font-bold">{reward.credits} CP</span>
                          </div>
                        )}
                      </div>
                      <span className="text-xs text-gray-500">Còn {reward.available}</span>
                    </div>

                    {/* Action Button */}
                    <button 
                      className={`w-full py-2 px-4 rounded-lg font-medium text-sm transition-colors ${
                        (reward.points > 0 && userPoints >= reward.points) ||
                        (reward.credits > 0 && userCredits >= reward.credits)
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                      disabled={
                        !((reward.points > 0 && userPoints >= reward.points) ||
                          (reward.credits > 0 && userCredits >= reward.credits))
                      }
                    >
                      {(reward.points > 0 && userPoints >= reward.points) ||
                       (reward.credits > 0 && userCredits >= reward.credits)
                        ? 'Đổi ngay'
                        : 'Không đủ điểm'
                      }
                    </button>

                    {/* Expiry */}
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      HSD: {reward.expired}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How to earn points */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Cách tích điểm</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-medium text-gray-900 text-sm">Hoàn thiện hồ sơ</h4>
              <p className="text-xs text-gray-600 mt-1">+50 TP</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                <Gift className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-medium text-gray-900 text-sm">Ứng tuyển việc làm</h4>
              <p className="text-xs text-gray-600 mt-1">+20 TP/lần</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-medium text-gray-900 text-sm">Đánh giá công ty</h4>
              <p className="text-xs text-gray-600 mt-1">+30 TP/lần</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                <Tag className="h-6 w-6 text-orange-600" />
              </div>
              <h4 className="font-medium text-gray-900 text-sm">Giới thiệu bạn bè</h4>
              <p className="text-xs text-gray-600 mt-1">+100 TP/lần</p>
            </div>
          </div>
        </div>
          </div>
        </main>
      </div>
    </div>
  );
}