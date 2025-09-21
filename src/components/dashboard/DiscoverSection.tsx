"use client";

import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface DiscoverCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  buttonText: string;
  stats?: string;
}

const DiscoverSection = () => {
  const cards: DiscoverCard[] = [
    {
      id: 1,
      title: 'Đăng tin tuyển dụng',
      description: 'Đăng tin tuyển dụng miễn phí để tiếp cận hàng ngàn ứng viên chất lượng.',
      icon: '�',
      color: 'bg-green-50 border-green-200 hover:bg-green-100',
      buttonText: 'Thử ngay',
      stats: 'Miễn phí'
    },
    {
      id: 2,
      title: 'Tìm kiếm CV',
      description: 'Tìm kiếm và liên hệ trực tiếp với ứng viên phù hợp cho vị trí tuyển dụng.',
      icon: '🔍',
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      buttonText: 'Thử ngay',
      stats: '2M+ CV'
    },
    {
      id: 3,
      title: 'Mua dịch vụ',
      description: 'Nâng cao hiệu quả tuyển dụng với các gói dịch vụ chuyên nghiệp.',
      icon: '�',
      color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
      buttonText: 'Thử ngay',
      stats: 'Ưu đãi 50%'
    }
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Khám phá TopCV dành cho nhà tuyển dụng
          </h2>
          <p className="text-gray-600 mt-1">
            Tận dụng tối đa các công cụ và dịch vụ để tối ưu hóa quá trình tuyển dụng
          </p>
        </div>
        <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1">
          <span>Xem tất cả</span>
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`${card.color} border rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group`}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">{card.icon}</span>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {card.title}
            </h3>
            
            <p className="text-gray-600 text-sm mb-4 leading-relaxed min-h-[40px]">
              {card.description}
            </p>
            
            {card.stats && (
              <div className="text-xs text-green-600 mb-4 font-semibold bg-white px-2 py-1 rounded-full inline-block">
                {card.stats}
              </div>
            )}
            
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors text-sm">
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverSection;