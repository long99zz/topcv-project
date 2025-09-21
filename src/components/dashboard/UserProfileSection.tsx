"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const UserProfileSection = () => {
  return (
    <div className="mb-8">
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        {/* User Info Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center space-x-4">
            {/* Avatar */}
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
              <Image 
                src="/images/avatar-placeholder.jpg" 
                alt="Hoàng Long Nguyễn Bá"
                width={64}
                height={64}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Fallback */}
              <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-600 text-xl font-bold">
                H
              </div>
            </div>
            
            {/* User Details */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900">Hoàng Long Nguyễn Bá</h3>
              <p className="text-gray-600 text-sm">Mã NTD: 758820</p>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>zzdragon14@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>0866107085</span>
                </div>
              </div>
            </div>
            
            {/* Member Badge */}
            <div className="bg-gray-100 px-4 py-2 rounded-lg flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div>
                <div className="text-sm font-semibold text-gray-700">MEMBER</div>
                <div className="text-xs text-gray-500">Hạng khách hàng</div>
              </div>
              <ArrowRightIcon className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Membership Progress */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex space-x-8">
              <div className="text-center">
                <div className="text-sm font-medium text-gray-500">Member</div>
                <div className="text-lg font-bold text-green-600">0</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-gray-500">Silver</div>
                <div className="text-lg font-bold text-gray-600">300</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-gray-500">Gold</div>
                <div className="text-lg font-bold text-gray-600">800</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-gray-500">Platinum</div>
                <div className="text-lg font-bold text-gray-600">1500</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-gray-500">Diamond</div>
                <div className="text-lg font-bold text-gray-600">2500</div>
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div className="bg-green-500 h-2 rounded-full w-0"></div>
          </div>
          
          {/* Rating Section */}
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Điểm xết hạng</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-green-600">0</span>
                  <div className="bg-orange-100 p-1 rounded">
                    <span className="text-xs font-bold text-orange-600">TP</span>
                  </div>
                </div>
                <p className="text-sm text-red-500 mt-2">
                  Bạn cần đạt tối thiểu cấp độ xác thực 2 để thực hiện xết hạng khách hàng và sử dụng các quyền lợi tương ứng.
                </p>
                <button className="text-blue-600 text-sm hover:underline mt-1">
                  Tìm hiểu thêm
                </button>
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Ưu đãi của tôi →
              </button>
            </div>
            <button className="mt-4 bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors">
              Xác thực ngay →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileSection;