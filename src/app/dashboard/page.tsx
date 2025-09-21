"use client";

import React, { useState } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import Sidebar from '@/components/dashboard/Sidebar';
import BannerSection from '@/components/dashboard/BannerSection';
import DiscoverSection from '@/components/dashboard/DiscoverSection';
import CVExportSection from '@/components/dashboard/CVExportSection';
import UserProfileSection from '@/components/dashboard/UserProfileSection';
import PointsStatsSection from '@/components/dashboard/PointsStatsSection';
import RightSidebar from '@/components/dashboard/RightSidebar';
import FloatingChatSupport from '@/components/dashboard/FloatingChatSupport';

const DashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

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
        
        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${
          sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'
        }`}>
          <div className="flex min-h-screen">
            {/* Center Content */}
            <div className="flex-1 p-6">
              <div className="max-w-6xl">
                {/* Page Title */}
                <div className="mb-6">
                  <h1 className="text-2xl font-semibold text-gray-900">Bảng tin</h1>
                </div>

                {/* Banner Section */}
                <BannerSection />

                {/* Welcome Section */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-8 border border-green-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-semibold">0%</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Xin chào, <span className="text-green-600">Hoàng Long Nguyễn Bá</span>
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Hãy thực hiện các bước sau để gia tăng tính bảo mật cho tài khoản của bạn và nhận ngay{' '}
                          <span className="text-green-600 font-semibold">+2 Top Points</span>{' '}
                          để Đổi quà khi đăng tin tuyển dụng đầu tiên.
                        </p>
                      </div>
                    </div>
                    <div className="hidden lg:block">
                      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Discover TopCV Section */}
                <DiscoverSection />

                {/* CV Export Section */}
                <CVExportSection />

                {/* User Profile Section */}
                <UserProfileSection />

                {/* Points & Stats Section */}
                <PointsStatsSection />
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden xl:block w-80 px-6 py-6 bg-white border-l border-gray-200">
              <RightSidebar />
            </div>
          </div>
        </main>
      </div>

      {/* Floating Chat Support */}
      <FloatingChatSupport />
    </div>
  );
};

export default DashboardPage;