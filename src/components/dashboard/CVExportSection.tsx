"use client";

import React from 'react';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';

const CVExportSection = () => {
  return (
    <div className="mb-8">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-green-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <SparklesIcon className="h-5 w-5 text-green-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">CV đề xuất</h2>
            </div>
            <button className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center space-x-1">
              <span>Xem tất cả</span>
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-start space-x-8">
            {/* AI Robot Illustration - Image Placeholder */}
            <div className="flex-shrink-0">
              <div className="w-[420px] h-64 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center border border-green-200">
                {/* Placeholder for AI Robot Image */}
                <img 
                  src="/images/toppy-ai-robot.png" 
                  alt="Toppy AI Robot"
                  className="w-full h-full object-contain rounded-2xl"
                  onError={(e) => {
                    // Fallback content when image not found
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Fallback content when image not available */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🤖</div>
                    <div className="text-xs">Toppy AI</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 pl-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Kích hoạt CV dễ xuất bởi <span className="text-green-600">Toppy AI</span> để được:
              </h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Gợi ý ứng viên tiềm năng</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Lọc sàn các thông tin nổi bật</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Tự động sắp xếp theo điểm phù hợp</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                <span className="text-green-600 font-semibold">Mua dịch vụ Top Jobs</span> để sử dụng tính năng CV dễ xuất.
              </p>
              
              {/* Action Button */}
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg">
                Mua ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVExportSection;