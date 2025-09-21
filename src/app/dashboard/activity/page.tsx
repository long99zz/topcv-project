"use client";

import React, { useState } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import Sidebar from '@/components/dashboard/Sidebar';

const ActivityPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const activities = [
    {
      id: 1,
      type: 'login',
      title: 'Đăng nhập hệ thống',
      description: 'Đăng nhập thành công từ địa chỉ IP 192.168.1.1',
      timestamp: '2025-09-25T10:30:00',
      icon: '🔐',
      category: 'security'
    },
    {
      id: 2,
      type: 'profile_update',
      title: 'Cập nhật thông tin cá nhân',
      description: 'Đã cập nhật số điện thoại và địa chỉ email',
      timestamp: '2025-09-25T09:15:00',
      icon: '👤',
      category: 'profile'
    },
    {
      id: 3,
      type: 'job_application',
      title: 'Ứng tuyển vị trí Frontend Developer',
      description: 'Ứng tuyển tại công ty ABC Technology',
      timestamp: '2025-09-24T16:45:00',
      icon: '💼',
      category: 'job'
    },
    {
      id: 4,
      type: 'cv_update',
      title: 'Cập nhật CV',
      description: 'Đã thêm kinh nghiệm làm việc mới tại XYZ Company',
      timestamp: '2025-09-24T14:20:00',
      icon: '📄',
      category: 'cv'
    },
    {
      id: 5,
      type: 'service_purchase',
      title: 'Mua gói TopCV Connect Premium',
      description: 'Thanh toán thành công gói dịch vụ 599,000đ',
      timestamp: '2025-09-23T11:30:00',
      icon: '💳',
      category: 'purchase'
    },
    {
      id: 6,
      type: 'job_save',
      title: 'Lưu công việc',
      description: 'Đã lưu 3 công việc vào danh sách yêu thích',
      timestamp: '2025-09-23T08:10:00',
      icon: '❤️',
      category: 'job'
    },
    {
      id: 7,
      type: 'cv_review',
      title: 'CV được review',
      description: 'CV của bạn đã được chuyên gia đánh giá với điểm 8.5/10',
      timestamp: '2025-09-22T15:00:00',
      icon: '⭐',
      category: 'cv'
    },
    {
      id: 8,
      type: 'password_change',
      title: 'Thay đổi mật khẩu',
      description: 'Mật khẩu đã được thay đổi thành công',
      timestamp: '2025-09-22T09:45:00',
      icon: '🔒',
      category: 'security'
    }
  ];

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffHours < 1) {
      const diffMins = Math.floor(diffMs / (1000 * 60));
      return `${diffMins} phút trước`;
    } else if (diffHours < 24) {
      return `${diffHours} giờ trước`;
    } else if (diffDays < 7) {
      return `${diffDays} ngày trước`;
    } else {
      return date.toLocaleDateString('vi-VN');
    }
  };

  const filteredActivities = activeTab === 'all' 
    ? activities 
    : activities.filter(activity => activity.category === activeTab);

  const categoryCount = (category: string) => {
    return activities.filter(activity => activity.category === category).length;
  };

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
                <h1 className="text-3xl font-bold text-gray-900">Hoạt động gần đây</h1>
                <p className="text-gray-600 mt-2">Theo dõi tất cả hoạt động của bạn trên TopCV</p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Hôm nay</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {activities.filter(a => new Date(a.timestamp).toDateString() === new Date().toDateString()).length}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-green-100 text-green-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Tuần này</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {activities.filter(a => {
                          const activityDate = new Date(a.timestamp);
                          const weekAgo = new Date();
                          weekAgo.setDate(weekAgo.getDate() - 7);
                          return activityDate >= weekAgo;
                        }).length}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Ứng tuyển</p>
                      <p className="text-2xl font-bold text-gray-900">{categoryCount('job')}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Bảo mật</p>
                      <p className="text-2xl font-bold text-gray-900">{categoryCount('security')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="mb-6">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex space-x-8">
                    {[
                      { id: 'all', label: 'Tất cả', count: activities.length },
                      { id: 'job', label: 'Việc làm', count: categoryCount('job') },
                      { id: 'cv', label: 'CV', count: categoryCount('cv') },
                      { id: 'profile', label: 'Hồ sơ', count: categoryCount('profile') },
                      { id: 'purchase', label: 'Mua hàng', count: categoryCount('purchase') },
                      { id: 'security', label: 'Bảo mật', count: categoryCount('security') }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`py-2 px-1 border-b-2 font-medium text-sm ${
                          activeTab === tab.id
                            ? 'border-green-500 text-green-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        {tab.label} ({tab.count})
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Activity Timeline */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-6">
                  <div className="flow-root">
                    <ul className="-mb-8">
                      {filteredActivities.map((activity, activityIdx) => (
                        <li key={activity.id}>
                          <div className="relative pb-8">
                            {activityIdx !== filteredActivities.length - 1 ? (
                              <span
                                className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                aria-hidden="true"
                              />
                            ) : null}
                            <div className="relative flex space-x-3">
                              <div>
                                <span className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-lg">
                                  {activity.icon}
                                </span>
                              </div>
                              <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                <div>
                                  <p className="text-sm font-medium text-gray-900">
                                    {activity.title}
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    {activity.description}
                                  </p>
                                </div>
                                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                  <time>{formatTime(activity.timestamp)}</time>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {filteredActivities.length === 0 && (
                  <div className="text-center py-12">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">Không có hoạt động</h3>
                    <p className="mt-1 text-sm text-gray-500">Chưa có hoạt động nào trong danh mục này.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ActivityPage;