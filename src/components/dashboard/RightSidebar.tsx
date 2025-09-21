"use client";

import React from 'react';
import { 
  CurrencyDollarIcon, 
  CreditCardIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

interface TopPointTransaction {
  id: number;
  type: 'earn' | 'spend';
  amount: number;
  description: string;
  date: string;
}

interface Credit {
  type: string;
  amount: number;
  expiry: string;
}

interface Update {
  id: number;
  type: 'info' | 'warning' | 'success';
  title: string;
  description: string;
  time: string;
}

const RightSidebar = () => {
  const topPointTransactions: TopPointTransaction[] = [
    {
      id: 1,
      type: 'earn',
      amount: 50,
      description: 'Đăng tin tuyển dụng mới',
      date: '2 giờ trước'
    },
    {
      id: 2,
      type: 'spend',
      amount: -30,
      description: 'Xem thông tin ứng viên',
      date: '1 ngày trước'
    },
    {
      id: 3,
      type: 'earn',
      amount: 100,
      description: 'Hoàn thành khảo sát',
      date: '3 ngày trước'
    }
  ];

  const credits: Credit[] = [
    {
      type: 'Xem CV',
      amount: 25,
      expiry: '30/01/2024'
    },
    {
      type: 'Đăng tin',
      amount: 8,
      expiry: '15/02/2024'
    },
    {
      type: 'TopCV Connect',
      amount: 12,
      expiry: '28/02/2024'
    }
  ];

  const updates: Update[] = [
    {
      id: 1,
      type: 'info',
      title: 'Cập nhật tính năng mới',
      description: 'TopCV Insights đã được nâng cấp với nhiều báo cáo chi tiết hơn',
      time: '30 phút trước'
    },
    {
      id: 2,
      type: 'success',
      title: 'Tin tuyển dụng được duyệt',
      description: 'Tin "Senior Frontend Developer" đã được duyệt và đăng tải',
      time: '2 giờ trước'
    },
    {
      id: 3,
      type: 'warning',
      title: 'Credit sắp hết hạn',
      description: '5 credit "Xem CV" sẽ hết hạn vào ngày 30/01/2024',
      time: '1 ngày trước'
    }
  ];

  const getUpdateIcon = (type: string) => {
    switch (type) {
      case 'info':
        return <InformationCircleIcon className="h-5 w-5 text-blue-600" />;
      case 'warning':
        return <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600" />;
      case 'success':
        return <CheckCircleIcon className="h-5 w-5 text-green-600" />;
      default:
        return <InformationCircleIcon className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Point */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
            <CurrencyDollarIcon className="h-5 w-5 text-yellow-600" />
            <span>Top Point</span>
          </h3>
          <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
            1,250 điểm
          </div>
        </div>
        
        <div className="space-y-3">
          {topPointTransactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between py-2">
              <div className="flex-1">
                <p className="text-sm text-gray-900">{transaction.description}</p>
                <p className="text-xs text-gray-500">{transaction.date}</p>
              </div>
              <div className={`text-sm font-medium ${
                transaction.type === 'earn' ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.type === 'earn' ? '+' : ''}{transaction.amount}
              </div>
            </div>
          ))}
        </div>
        
        <button className="w-full mt-4 bg-yellow-100 text-yellow-800 py-2 rounded-lg font-medium hover:bg-yellow-200 transition-colors">
          Đổi quà
        </button>
      </div>

      {/* Credit */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
            <CreditCardIcon className="h-5 w-5 text-blue-600" />
            <span>Credit</span>
          </h3>
        </div>
        
        <div className="space-y-3">
          {credits.map((credit, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-900">{credit.type}</span>
                <span className="text-sm font-bold text-blue-600">{credit.amount}</span>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <ClockIcon className="h-3 w-3 mr-1" />
                <span>Hết hạn: {credit.expiry}</span>
              </div>
            </div>
          ))}
        </div>
        
        <button className="w-full mt-4 bg-blue-100 text-blue-800 py-2 rounded-lg font-medium hover:bg-blue-200 transition-colors">
          Mua thêm Credit
        </button>
      </div>

      {/* Cập nhật mới nhất */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Cập nhật mới nhất</h3>
        
        <div className="space-y-4">
          {updates.map((update) => (
            <div key={update.id} className="border-l-4 border-gray-200 pl-4">
              <div className="flex items-start space-x-2">
                {getUpdateIcon(update.type)}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{update.title}</p>
                  <p className="text-xs text-gray-600 mt-1">{update.description}</p>
                  <p className="text-xs text-gray-500 mt-1">{update.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="w-full mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium">
          Xem tất cả cập nhật
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;