"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface Banner {
  id: number;
  type: 'notification' | 'promotion';
  title: string;
  content: string;
  buttonText?: string;
  color: string;
  icon?: string;
}

const BannerSection = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [showNotification, setShowNotification] = useState(true);

  const banners: Banner[] = [
    {
      id: 1,
      type: 'promotion',
      title: 'Market Insights',
      content: 'Ra mắt tính năng - Powered by Toppy AI - Mở rộng góc nhìn, tối ưu hành trình tuyển dụng',
      buttonText: 'Khám phá ngay',
      color: 'bg-green-700',
      icon: '📊'
    },
    {
      id: 2,
      type: 'promotion',
      title: 'CV Scoring',
      content: 'Ra mắt tính năng - Powered by Toppy AI - Chấm điểm & sàng lọc ứng viên hiệu quả',
      buttonText: 'Khám phá ngay',
      color: 'bg-green-700',
      icon: '🎯'
    },
    {
      id: 3,
      type: 'promotion',
      title: 'HappyTime',
      content: 'HappyTime - Nền tảng quản lý và gia tăng trải nghiệm nhân viên',
      buttonText: 'Khám phá ngay',
      color: 'bg-orange-500',
      icon: '⏰'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [banners.length]);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="space-y-6">
      {/* Important Notification */}
      {showNotification && (
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
          <div className="flex items-start justify-between">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="ml-3 flex-1">
                <h3 className="text-sm font-semibold text-blue-800">
                  Thông báo quan trọng
                </h3>
                <p className="mt-1 text-sm text-blue-700">
                  Từ ngày 11/08/2025, TopCV áp dụng cơ chế kết nối mới, sử dụng điểm credit chi khi ứng viên phản hồi và xác nhận sẵn sàng trao đổi.
                </p>
                <button className="mt-2 text-blue-600 hover:text-blue-500 font-medium text-sm">
                  Tìm hiểu thêm
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500 font-medium">1 / 2</span>
              <button
                onClick={() => setShowNotification(false)}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <XMarkIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Promotional Banner Carousel with External Navigation */}
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={prevBanner}
          className="absolute left-0 z-10 -ml-4 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-gray-50 transition-all"
        >
          <ChevronLeftIcon className="h-4 w-4 text-gray-600" />
        </button>

        {/* Banner Container */}
        <div className="overflow-hidden rounded-lg mx-8 flex-1">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentBanner * 100}%)` }}
          >
            {banners.map((banner) => (
              <div
                key={banner.id}
                className="w-full flex-shrink-0 relative overflow-hidden rounded-lg"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={
                      banner.id === 1 ? '/images/banners/market-insights.png' :
                      banner.id === 2 ? '/images/banners/cv-scoring.png' :
                      '/images/banners/happytime.png'
                    }
                    alt={banner.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                  {/* Fallback gradient background */}
                  <div className={`absolute inset-0 ${banner.color} -z-10`}></div>
                </div>
                
                {/* Content Overlay */}
                <div className="relative z-10 p-8 flex items-center justify-between h-48 bg-gradient-to-r from-black/40 to-transparent">
                  <div className="flex items-center space-x-6">
                    <div className="text-5xl">{banner.icon}</div>
                    <div className="max-w-lg">
                      <h3 className="text-xl font-bold mb-2 text-white">
                        RA MẮT TÍNH NĂNG
                      </h3>
                      <h4 className="text-3xl font-bold mb-3 text-white">
                        {banner.title.toUpperCase()}
                      </h4>
                      <p className="text-base text-white/90 mb-4 leading-relaxed">
                        POWERED BY TOPPY AI
                      </p>
                      <p className="text-sm text-white/80 leading-relaxed">
                        {banner.id === 1 && 'Mở rộng góc nhìn, tối ưu hành trình tuyển dụng'}
                        {banner.id === 2 && 'Chấm điểm & sàng lọc ứng viên hiệu quả'}
                        {banner.id === 3 && 'Nền tảng quản lý và gia tăng trải nghiệm nhân viên'}
                      </p>
                      <p className="text-xs text-white/70 mt-2">
                        Chi tiết vui lòng liên hệ
                        <br />
                        Chuyên viên phụ trách tài khoản Quy khách hoặc:
                        <br />
                        Email: care@topcv.vn | Hotline: 0246 329 1314 | 0862 69 19 29
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105">
                      {banner.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextBanner}
          className="absolute right-0 z-10 -mr-4 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-gray-50 transition-all"
        >
          <ChevronRightIcon className="h-4 w-4 text-gray-600" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-4">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentBanner ? 'bg-gray-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSection;