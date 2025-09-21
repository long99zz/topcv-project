"use client";

import React from 'react';
import { StarIcon } from '@heroicons/react/24/outline';

const PointsStatsSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Top Point (TP) */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl overflow-hidden text-white">
        {/* Header */}
        <div className="px-6 py-4 border-b border-green-500 border-opacity-30">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-lg font-bold">Top Point (TP)</h3>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm opacity-90 mb-2">Điểm tích lũy đổi quà</div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-orange-100 p-1 rounded">
                  <span className="text-xs font-bold text-orange-600">TP</span>
                </div>
                <span className="text-3xl font-bold">0</span>
              </div>
              <button className="bg-green-800 bg-opacity-50 hover:bg-opacity-70 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Đổi quà ▶
              </button>
            </div>
            
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <StarIcon className="w-4 h-4" />
                <span className="text-sm opacity-90">Thực hiện nhiệm vụ nhận Top Point</span>
              </div>
              <button className="bg-green-800 bg-opacity-50 hover:bg-opacity-70 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Xem nhiệm vụ ▶
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Credit (CP) */}
      <div className="bg-white rounded-xl border border-gray-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-600">
                <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900">Credit (CP)</h3>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-2">Chính</div>
              <div className="flex items-center justify-center space-x-2 mb-1">
                <span className="text-3xl font-bold text-gray-900">0</span>
                <div className="bg-orange-100 p-1 rounded">
                  <span className="text-xs font-bold text-orange-600">CP</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-2">Khuyến mại</div>
              <div className="flex items-center justify-center space-x-2 mb-1">
                <span className="text-3xl font-bold text-gray-900">0</span>
                <div className="bg-orange-100 p-1 rounded">
                  <span className="text-xs font-bold text-orange-600">CP</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="text-sm text-gray-600 text-center">
              Mua Credit để đăng tin tuyển dụng và sử dụng các dịch vụ TopCV
            </div>
            <div className="flex justify-center mt-3">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                Mua Credit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointsStatsSection;