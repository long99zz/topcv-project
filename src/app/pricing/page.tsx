"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


const topJobsPackages = [
  {
    name: 'TOP MAX PLUS',
    price: '9,650,000 VNĐ',
    badge: 'vip_plus_original.png',
    features: [
      'Hiển thị trong Box Việc làm tốt nhất',
      'Ưu tiên hiển thị trong tất cả danh sách việc làm',
      '14 lần đẩy TOP khung giờ vàng',
      'Đề xuất CV bởi AI',
      'Thông báo việc làm phù hợp với ứng viên',
      'Được bảo hành dịch vụ với nhiều quyền lợi ưu tiên',
    ],
    popular: true,
  },
  {
    name: 'TOP MAX',
    price: '7,500,000 VNĐ',
    badge: 'vip_original.png',
    features: [
      'Hiển thị trong Box Việc làm tốt nhất',
      'Ưu tiên hiển thị trong tất cả danh sách việc làm',
      '07 lần đẩy TOP khung giờ vàng',
      'Đề xuất CV bởi AI',
      'Thông báo việc làm phù hợp với ứng viên',
      'Được bảo hành dịch vụ với nhiều quyền lợi ưu tiên',
    ],
    popular: false,
  },
  {
    name: 'TOP PRO',
    price: '5,440,000 VNĐ',
    badge: null,
    features: [
      'Hiển thị trong Box Việc làm hấp dẫn',
      'Ưu tiên hiển thị trong Top đề xuất việc làm',
      '03 lần đẩy TOP khung giờ vàng',
      'Đề xuất CV bởi AI',
      'Thông báo việc làm phù hợp với ứng viên',
      'Được bảo hành dịch vụ với nhiều quyền lợi',
    ],
    popular: false,
  },
  {
    name: 'TOP ECO PLUS',
    price: '4,400,000 VNĐ',
    badge: null,
    features: [
      'Ưu tiên hiển thị trong Top Việc làm liên quan',
      '01 lần đẩy TOP khung giờ vàng',
      'Đề xuất CV bởi AI',
      'Thông báo việc làm phù hợp với ứng viên',
      'Được bảo hành dịch vụ',
    ],
    popular: false,
  },
];

const topStandardPackages = [
  {
    name: 'STANDARD EXTRA COMBO',
    price: '2,550,000 VNĐ / 3 tin',
    badge: 'new_original.png',
    features: [
        'Ưu tiên hiển thị trên Tin Standard (dưới tin Top Jobs) trên các danh sách việc làm',
        '02 lần đẩy TOP khung giờ thường trong danh sách các tin nền vàng',
        'Đề xuất CV bởi AI',
    ],
    popular: false,
  }
];

const PricingPage = () => {
  const [showCompare, setShowCompare] = useState(true);

  return (
    <div className="bg-gray-50">
      <Header />
      <main className="pt-24">
        {/* Hero Section - cập nhật style */}
        <section className="text-left py-10 px-4 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-green-600 text-lg font-semibold mb-2 tracking-wide">TOP JOBS & TOP STANDARD</h2>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Đăng tin tuyển dụng</h1>
            <p className="text-gray-600 text-base mb-4">Cộng hưởng sức mạnh công nghệ tạo ra hiệu quả đột phá cho tin tuyển dụng của Doanh nghiệp</p>
          </div>
        </section>

        {/* Top Jobs Section - cập nhật style */}
        <section className="py-10 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-green-700 mb-2">Top Jobs</h2>
            <p className="text-gray-700 mb-8">Đăng tin tuyển dụng Hiệu suất cao</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topJobsPackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`rounded-2xl shadow border border-gray-200 flex flex-col bg-white relative overflow-hidden ${pkg.popular ? 'border-green-600' : ''}`}
                  style={{ minHeight: 420 }}
                >
                  <div className="px-6 pt-6 pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-base font-bold text-white px-3 py-1 rounded-t-xl ${pkg.name.includes('MAX') ? 'bg-[#1a253c]' : pkg.name.includes('PRO') ? 'bg-[#1a3c7c]' : pkg.name.includes('ECO') ? 'bg-[#f7b500]' : 'bg-[#1a253c]'}`}>{pkg.name}</span>
                      {pkg.badge && (
                        <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded ml-2">VIP</span>
                      )}
                    </div>
                    <p className="text-2xl font-extrabold text-green-600 mb-1">{pkg.price.replace('VNĐ', 'VNĐ').replace('VND', 'VNĐ')}</p>
                    <p className="text-xs text-gray-500 mb-4">* Giá trên chưa bao gồm VAT</p>
                    <button className="w-full border border-green-600 text-green-600 font-semibold py-2 rounded-lg hover:bg-green-600 hover:text-white transition mb-4">Liên hệ tư vấn</button>
                    <div className="text-gray-800 text-sm font-semibold mb-2">QUYỀN LỢI ĐẶC BIỆT</div>
                    <ul className="space-y-2 mb-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Standard Section - cập nhật style */}
        <section className="py-10 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-[#bfa100] mb-2">Top Standard</h2>
            <p className="text-gray-700 mb-8">Đăng tin tuyển dụng Tiết kiệm</p>
            <div className="flex justify-start">
              {topStandardPackages.map((pkg, index) => (
                <div
                  key={index}
                  className="rounded-2xl shadow border border-gray-200 flex flex-col bg-white relative overflow-hidden w-full"
                  style={{ minHeight: 260 }}
                >
                  <div className="w-full h-2 bg-[#f7b500] rounded-t-2xl absolute top-0 left-0"></div>
                  <div className="px-8 pt-8 pb-2 flex flex-row items-start">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-lg font-bold text-black">{pkg.name}</span>
                        {pkg.badge && (
                          <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded ml-2">MỚI</span>
                        )}
                      </div>
                      <p className="text-2xl font-extrabold text-green-600 mb-1">{pkg.price}</p>
                      <p className="text-xs text-gray-500 mb-4">* Giá trên chưa bao gồm VAT</p>
                      <button className="w-full border border-green-600 text-green-600 font-semibold py-2 rounded-lg hover:bg-green-600 hover:text-white transition mb-4">Liên hệ tư vấn</button>
                    </div>
                    <div className="flex-1 pl-8">
                      <div className="text-gray-800 text-sm font-semibold mb-2">QUYỀN LỢI ĐẶC BIỆT</div>
                      <ul className="space-y-2 mb-2">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-gray-700">
                            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* So sánh quyền lợi */}
        <section className="py-10 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-6">
              <button
                className="bg-white border border-green-600 text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-green-50"
                onClick={() => setShowCompare((prev) => !prev)}
              >
                So sánh quyền lợi {showCompare ? '▲' : '▼'}
              </button>
            </div>
            {showCompare && (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-green-600 pl-4">So sánh quyền lợi</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                    <thead>
                      <tr>
                        <th className="text-left font-semibold text-gray-700 px-4 py-4 border-r border-gray-200 bg-gray-50 w-1/4">&nbsp;</th>
                        <th className="text-center px-3 py-4 border-r border-gray-200">
                          <div className="bg-[#1a253c] text-white px-3 py-1 rounded text-sm font-bold mb-2">TOP MAX PLUS</div>
                          <div className="text-green-600 font-bold text-lg">9,650,000 VNĐ</div>
                          <button className="bg-green-600 text-white px-4 py-2 rounded mt-2 text-sm font-semibold">Liên hệ ngay</button>
                        </th>
                        <th className="text-center px-3 py-4 border-r border-gray-200">
                          <div className="bg-[#1a253c] text-white px-3 py-1 rounded text-sm font-bold mb-2">TOP MAX</div>
                          <div className="text-green-600 font-bold text-lg">7,500,000 VNĐ</div>
                          <button className="bg-white border border-green-600 text-green-600 px-4 py-2 rounded mt-2 text-sm font-semibold">Liên hệ ngay</button>
                        </th>
                        <th className="text-center px-3 py-4 border-r border-gray-200">
                          <div className="bg-[#1a253c] text-white px-3 py-1 rounded text-sm font-bold mb-2">TOP PRO</div>
                          <div className="text-green-600 font-bold text-lg">5,440,000 VNĐ</div>
                          <button className="bg-white border border-green-600 text-green-600 px-4 py-2 rounded mt-2 text-sm font-semibold">Liên hệ ngay</button>
                        </th>
                        <th className="text-center px-3 py-4 border-r border-gray-200">
                          <div className="bg-[#1a253c] text-white px-3 py-1 rounded text-sm font-bold mb-2">TOP ECO PLUS</div>
                          <div className="text-green-600 font-bold text-lg">4,400,000 VNĐ</div>
                          <button className="bg-white border border-green-600 text-green-600 px-4 py-2 rounded mt-2 text-sm font-semibold">Liên hệ ngay</button>
                        </th>
                        <th className="text-center px-3 py-4 border-r border-gray-200">
                          <div className="bg-[#1a253c] text-white px-3 py-1 rounded text-sm font-bold mb-2">STANDARD EXTRA</div>
                          <div className="text-green-600 font-bold text-lg">2,550,000 VNĐ</div>
                          <button className="bg-white border border-green-600 text-green-600 px-4 py-2 rounded mt-2 text-sm font-semibold">Liên hệ ngay</button>
                        </th>
                        <th className="text-center px-3 py-4">
                          <div className="bg-gray-400 text-white px-3 py-1 rounded text-sm font-bold mb-2">STANDARD</div>
                          <div className="text-gray-600 font-bold text-lg">Miễn phí</div>
                          <button className="bg-white border border-green-600 text-green-600 px-4 py-2 rounded mt-2 text-sm font-semibold">Liên hệ ngay</button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="px-4 py-3 font-medium text-gray-700 border-r border-gray-200 bg-gray-50">Thời gian hiển thị tin</td>
                        <td className="text-center py-3 border-r border-gray-200">30 ngày</td>
                        <td className="text-center py-3 border-r border-gray-200">30 ngày</td>
                        <td className="text-center py-3 border-r border-gray-200">30 ngày</td>
                        <td className="text-center py-3 border-r border-gray-200">30 ngày</td>
                        <td className="text-center py-3 border-r border-gray-200">30 ngày</td>
                        <td className="text-center py-3">30 ngày</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="px-4 py-3 font-medium text-gray-700 border-r border-gray-200 bg-gray-50">Thời gian hiệu lực của dịch vụ</td>
                        <td className="text-center py-3 border-r border-gray-200">02 tuần</td>
                        <td className="text-center py-3 border-r border-gray-200">02 tuần</td>
                        <td className="text-center py-3 border-r border-gray-200">02 tuần</td>
                        <td className="text-center py-3 border-r border-gray-200">02 tuần</td>
                        <td className="text-center py-3 border-r border-gray-200">02 tuần</td>
                        <td className="text-center py-3">--</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-green-50">
                        <td className="px-4 py-3 font-semibold text-green-700 border-r border-gray-200">Quyền lợi</td>
                        <td className="text-center py-3 border-r border-gray-200"></td>
                        <td className="text-center py-3 border-r border-gray-200"></td>
                        <td className="text-center py-3 border-r border-gray-200"></td>
                        <td className="text-center py-3 border-r border-gray-200"></td>
                        <td className="text-center py-3 border-r border-gray-200"></td>
                        <td className="text-center py-3"></td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="px-4 py-3 text-gray-700 border-r border-gray-200">Tặng Credits</td>
                        <td className="text-center py-3 border-r border-gray-200">500 Credits</td>
                        <td className="text-center py-3 border-r border-gray-200">500 Credits</td>
                        <td className="text-center py-3 border-r border-gray-200">300 Credits</td>
                        <td className="text-center py-3 border-r border-gray-200">200 Credits</td>
                        <td className="text-center py-3 border-r border-gray-200">60 Credits/ 3 tin</td>
                        <td className="text-center py-3">--</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="px-4 py-3 text-gray-700 border-r border-gray-200">Box việc làm nổi bật</td>
                        <td className="text-center py-3 border-r border-gray-200">Việc làm tốt nhất</td>
                        <td className="text-center py-3 border-r border-gray-200">Việc làm tốt nhất</td>
                        <td className="text-center py-3 border-r border-gray-200">Việc làm hấp dẫn</td>
                        <td className="text-center py-3 border-r border-gray-200">--</td>
                        <td className="text-center py-3 border-r border-gray-200">--</td>
                        <td className="text-center py-3">--</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-green-50">
                        <td className="px-4 py-3 font-semibold text-green-700 border-r border-gray-200">Vị trí hiển thị ưu tiên/Top Impression</td>
                        <td className="text-center py-3 border-r border-gray-200"></td>
                        <td className="text-center py-3 border-r border-gray-200"></td>
                        <td className="text-center py-3 border-r border-gray-200"></td>
                        <td className="text-center py-3 border-r border-gray-200"></td>
                        <td className="text-center py-3 border-r border-gray-200"></td>
                        <td className="text-center py-3"></td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="px-4 py-3 text-gray-700 border-r border-gray-200">Hiển thị trong TOP để xuất việc làm phù hợp</td>
                        <td className="text-center py-3 border-r border-gray-200"><span className="text-green-600 font-semibold">Nền xanh</span></td>
                        <td className="text-center py-3 border-r border-gray-200"><span className="text-green-600 font-semibold">Nền xanh</span></td>
                        <td className="text-center py-3 border-r border-gray-200">--</td>
                        <td className="text-center py-3 border-r border-gray-200">--</td>
                        <td className="text-center py-3 border-r border-gray-200">--</td>
                        <td className="text-center py-3">--</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="px-4 py-3 text-gray-700 border-r border-gray-200">Hiển thị trong TOP để xuất việc làm theo CV</td>
                        <td className="text-center py-3 border-r border-gray-200"><span className="text-green-600 font-semibold">Nền xanh</span></td>
                        <td className="text-center py-3 border-r border-gray-200"><span className="text-green-600 font-semibold">Nền xanh</span></td>
                        <td className="text-center py-3 border-r border-gray-200"><span className="text-green-600 font-semibold">Nền xanh</span></td>
                        <td className="text-center py-3 border-r border-gray-200">--</td>
                        <td className="text-center py-3 border-r border-gray-200">--</td>
                        <td className="text-center py-3">--</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="px-4 py-3 text-gray-700 border-r border-gray-200">Hiển thị trong TOP để xuất việc làm liên quan</td>
                        <td className="text-center py-3 border-r border-gray-200"><span className="text-green-600 font-semibold">Nền xanh</span></td>
                        <td className="text-center py-3 border-r border-gray-200"><span className="text-green-600 font-semibold">Nền xanh</span></td>
                        <td className="text-center py-3 border-r border-gray-200"><span className="text-green-600 font-semibold">Nền xanh</span></td>
                        <td className="text-center py-3 border-r border-gray-200"><span className="text-green-600 font-semibold">Nền xanh</span></td>
                        <td className="text-center py-3 border-r border-gray-200"><span className="text-yellow-600 font-semibold">Nền vàng (Dưới nền xanh)</span></td>
                        <td className="text-center py-3">--</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="px-4 py-3 text-gray-700 border-r border-gray-200">Hiển thị trong TOP kết quả tìm kiếm việc làm có nền nổi bật</td>
                        <td className="text-center py-3 border-r border-gray-200"><span className="text-green-600 font-semibold">Nền xanh</span></td>
                        <td className="text-center py-3 border-r border-gray-200"><span className="text-green-600 font-semibold">Nền xanh</span></td>
                        <td className="text-center py-3 border-r border-gray-200"><span className="text-green-600 font-semibold">Nền xanh</span></td>
                        <td className="text-center py-3 border-r border-gray-200"><span className="text-green-600 font-semibold">Nền xanh</span></td>
                        <td className="text-center py-3 border-r border-gray-200">--</td>
                        <td className="text-center py-3">--</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-green-50">
                        <td className="px-4 py-3 font-semibold text-green-700 border-r border-gray-200">Đẩy top tự động hàng tuần/ Re-Top</td>
                        <td className="text-center py-3 border-r border-gray-200"></td>
                        <td className="text-center py-3 border-r border-gray-200"></td>
                        <td className="text-center py-3 border-r border-gray-200"></td>
                        <td className="text-center py-3 border-r border-gray-200"></td>
                        <td className="text-center py-3 border-r border-gray-200"></td>
                        <td className="text-center py-3"></td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="px-4 py-3 text-gray-700 border-r border-gray-200">Đẩy top khung giờ vàng</td>
                        <td className="text-center py-3 border-r border-gray-200">14 lần</td>
                        <td className="text-center py-3 border-r border-gray-200">7 lần</td>
                        <td className="text-center py-3 border-r border-gray-200">3 lần</td>
                        <td className="text-center py-3 border-r border-gray-200">1 lần</td>
                        <td className="text-center py-3 border-r border-gray-200">--</td>
                        <td className="text-center py-3">--</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="px-4 py-3 text-gray-700 border-r border-gray-200">Đẩy top khung giờ thường</td>
                        <td className="text-center py-3 border-r border-gray-200">14 lần</td>
                        <td className="text-center py-3 border-r border-gray-200">7 lần</td>
                        <td className="text-center py-3 border-r border-gray-200">5 lần</td>
                        <td className="text-center py-3 border-r border-gray-200">3 lần</td>
                        <td className="text-center py-3 border-r border-gray-200"><span className="text-sm">2 lần (Trong các tin nền vàng)</span></td>
                        <td className="text-center py-3">--</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-green-50">
                        <td className="px-4 py-3 font-semibold text-green-700 border-r border-gray-200">Thông báo việc làm/ Top Job Alert</td>
                        <td className="text-center py-3 border-r border-gray-200"></td>
                        <td className="text-center py-3 border-r border-gray-200"></td>
                        <td className="text-center py-3 border-r border-gray-200"></td>
                        <td className="text-center py-3 border-r border-gray-200"></td>
                        <td className="text-center py-3 border-r border-gray-200"></td>
                        <td className="text-center py-3"></td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="px-4 py-3 font-semibold text-green-700 border-r border-gray-200">Tính năng</td>
                        <td className="text-center py-3 border-r border-gray-200"></td>
                        <td className="text-center py-3 border-r border-gray-200"></td>
                        <td className="text-center py-3 border-r border-gray-200"></td>
                        <td className="text-center py-3 border-r border-gray-200"></td>
                        <td className="text-center py-3 border-r border-gray-200"></td>
                        <td className="text-center py-3"></td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="px-4 py-3 text-gray-700 border-r border-gray-200">Tính năng CV đề xuất bởi search</td>
                        <td className="text-center py-3 border-r border-gray-200"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></td>
                        <td className="text-center py-3 border-r border-gray-200"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></td>
                        <td className="text-center py-3 border-r border-gray-200"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></td>
                        <td className="text-center py-3 border-r border-gray-200"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></td>
                        <td className="text-center py-3 border-r border-gray-200"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></td>
                        <td className="text-center py-3">--</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="px-4 py-3 text-gray-700 border-r border-gray-200">Kích hoạt dịch vụ cộng thêm Top Add-ons</td>
                        <td className="text-center py-3 border-r border-gray-200"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></td>
                        <td className="text-center py-3 border-r border-gray-200"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></td>
                        <td className="text-center py-3 border-r border-gray-200"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></td>
                        <td className="text-center py-3 border-r border-gray-200"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></td>
                        <td className="text-center py-3 border-r border-gray-200"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></td>
                        <td className="text-center py-3">--</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="px-4 py-3 text-gray-700 border-r border-gray-200">Tiêu đề tin nâng cao</td>
                        <td className="text-center py-3 border-r border-gray-200"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></td>
                        <td className="text-center py-3 border-r border-gray-200"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></td>
                        <td className="text-center py-3 border-r border-gray-200"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></td>
                        <td className="text-center py-3 border-r border-gray-200"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></td>
                        <td className="text-center py-3 border-r border-gray-200"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></td>
                        <td className="text-center py-3">--</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-green-100">
                        <td className="px-4 py-3 text-gray-700 border-r border-gray-200">Add-on visual</td>
                        <td className="text-center py-3 border-r border-gray-200"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></td>
                        <td className="text-center py-3 border-r border-gray-200"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></td>
                        <td className="text-center py-3 border-r border-gray-200"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></td>
                        <td className="text-center py-3 border-r border-gray-200"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></td>
                        <td className="text-center py-3 border-r border-gray-200">--</td>
                        <td className="text-center py-3">--</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-green-50">
                        <td className="px-4 py-3 font-semibold text-green-700 border-r border-gray-200">Bảo hành dịch vụ</td>
                        <td className="text-center py-3 border-r border-gray-200"></td>
                        <td className="text-center py-3 border-r border-gray-200"></td>
                        <td className="text-center py-3 border-r border-gray-200"></td>
                        <td className="text-center py-3 border-r border-gray-200"></td>
                        <td className="text-center py-3 border-r border-gray-200"></td>
                        <td className="text-center py-3"></td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="px-4 py-3 text-gray-700 border-r border-gray-200">Điều kiện: Tin đăng chạy dịch vụ có dưới X CV ứng tuyển trong thời gian chạy dịch vụ</td>
                        <td className="text-center py-3 border-r border-gray-200">Dưới 30</td>
                        <td className="text-center py-3 border-r border-gray-200">Dưới 25</td>
                        <td className="text-center py-3 border-r border-gray-200">Dưới 15</td>
                        <td className="text-center py-3 border-r border-gray-200">Dưới 15</td>
                        <td className="text-center py-3 border-r border-gray-200">--</td>
                        <td className="text-center py-3">--</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-gray-700 border-r border-gray-200">Gói An tâm tuyển dụng tương ứng với từng dịch vụ</td>
                        <td className="text-center py-3 border-r border-gray-200"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></td>
                        <td className="text-center py-3 border-r border-gray-200"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></td>
                        <td className="text-center py-3 border-r border-gray-200"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></td>
                        <td className="text-center py-3 border-r border-gray-200"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></td>
                        <td className="text-center py-3 border-r border-gray-200">--</td>
                        <td className="text-center py-3">--</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="text-center mt-6">
                  <button className="bg-white border border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold mr-4 hover:bg-green-50">
                    Tư vấn tuyển dụng
                  </button>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
                    Đăng tin ngay
                  </button>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Campaign Banner - dùng ảnh tĩnh */}
        <section className="py-8 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <Image
              src="/images/banner-campaign.jpg"
              alt="Discount combo banner"
              className="w-full h-auto rounded-xl"
              width={1200}
              height={300}
              priority
            />
          </div>
        </section>

        {/* Top Credit Section - cập nhật với ảnh */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <Image
                  src="/images/credit.png"
                  alt="Top Credit"
                  width={500}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-green-600 text-lg font-semibold mb-2 tracking-wide">TOP CREDIT</h2>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Linh hoạt sử dụng các tiện ích trên nền tảng</h3>
                <p className="text-gray-600 mb-8">
                  Sử dụng linh hoạt nhiều tiện ích, hỗ trợ quá trình tuyển dụng, giúp Doanh nghiệp có nhiều sự lựa chọn phù hợp với nhu cầu
                </p>
                <div className="flex gap-4">
                  <button className="bg-white border border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50">
                    Tư vấn tuyển dụng
                  </button>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
                    Đăng tin ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Add-on Services Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <span className="text-green-600 text-lg font-semibold mb-2 block tracking-wide">TOP ADD-ON</span>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Dịch vụ cộng thêm
              </h2>
              <p className="text-gray-600">
                Thêm tùy chọn giúp tin tuyển dụng nổi bật hơn với ứng viên
              </p>
            </div>
            
            {/* First row - 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Add-on Value */}
              <div className="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-lg transition-shadow">
                <div className="h-2 bg-blue-400 rounded-full mb-6"></div>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-xl font-bold text-gray-800">Add-on Value</h3>
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xs text-gray-600">?</span>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-green-600">2,000,000 VNĐ</span>
                  <p className="text-sm text-gray-500 mt-1">(Giá trên chưa bao gồm VAT)</p>
                </div>
                <p className="text-gray-600 text-sm">
                  Hiển thị 3 lý do để apply vào job trên box tin của khách hàng tại trang tìm kiếm việc làm trên đầu trang chi tiết việc làm
                </p>
              </div>

              {/* Add-on Label: Gấp */}
              <div className="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-lg transition-shadow">
                <div className="h-2 bg-blue-600 rounded-full mb-6"></div>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-xl font-bold text-gray-800">Add-on Label: Gấp</h3>
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xs text-gray-600">?</span>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-green-600">1,000,000 VNĐ</span>
                  <p className="text-sm text-gray-500 mt-1">(Giá trên chưa bao gồm VAT)</p>
                </div>
                <p className="text-gray-600 text-sm">
                  Tin tuyển dụng được gắn nhãn <strong>GẤP</strong> vào tiêu đề tin
                </p>
              </div>

              {/* Add-on Label: Hot */}
              <div className="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-lg transition-shadow">
                <div className="h-2 bg-yellow-400 rounded-full mb-6"></div>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-xl font-bold text-gray-800">Add-on Label: Hot</h3>
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xs text-gray-600">?</span>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-green-600">1,000,000 VNĐ</span>
                  <p className="text-sm text-gray-500 mt-1">(Giá trên chưa bao gồm VAT)</p>
                </div>
                <p className="text-gray-600 text-sm">
                  Tin tuyển dụng được gắn nhãn <strong>HOT</strong> vào tiêu đề tin
                </p>
              </div>
            </div>

            {/* Second row - 2 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Add-on Tittle: Red */}
              <div className="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-lg transition-shadow">
                <div className="h-2 bg-red-500 rounded-full mb-6"></div>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-xl font-bold text-gray-800">Add-on Tittle: Red</h3>
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xs text-gray-600">?</span>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-green-600">1,000,000 VNĐ</span>
                  <p className="text-sm text-gray-500 mt-1">(Giá trên chưa bao gồm VAT)</p>
                </div>
                <p className="text-gray-600 text-sm">
                  Tin tuyển dụng hiển thị ở tất cả các trang sẽ có tiêu đề tin <strong>MÀU ĐỎ</strong>
                </p>
              </div>

              {/* Box Remarketing */}
              <div className="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-lg transition-shadow">
                <div className="h-2 bg-purple-600 rounded-full mb-6"></div>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-xl font-bold text-gray-800">Box Remarketing</h3>
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xs text-gray-600">?</span>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-green-600">6,250,000 VNĐ</span>
                  <p className="text-sm text-gray-500 mt-1">(Giá trên chưa bao gồm VAT)</p>
                </div>
                <p className="text-gray-600 text-sm">
                  Tin tuyển dụng được hiển thị lại cho ứng viên đã lưu tin hoặc từng xem tin
                </p>
              </div>
            </div>

            {/* Add-on notes */}
            <div className="max-w-4xl mx-auto mt-8 text-left">
              <ul className="text-gray-700 text-base list-disc pl-6 mb-6">
                <li>Top add-on này cần phải gắn với tin tuyển dụng chạy dịch vụ Top Jobs</li>
                <li>Thời hạn sử dụng: tối đa 2 tuần / tin tuyển dụng chạy dịch vụ Top Jobs / lần kích hoạt</li>
                <li>Dịch vụ cộng thêm sẽ kết thúc vào thời điểm tin tuyển dụng chạy dịch vụ Top Jobs kết thúc</li>
              </ul>
              <div className="flex gap-4">
                <button className="bg-white border border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50">
                  Tư vấn tuyển dụng
                </button>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
                  Đăng tin ngay
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Employer Branding Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <span className="text-green-600 text-lg font-semibold mb-2 block tracking-wide">TOP EMPLOYER BRANDING</span>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Truyền thông thương hiệu tuyển dụng
              </h2>
              <p className="text-gray-600">
                Xây dựng hình ảnh thương hiệu tuyển dụng uy tín, nâng cao hiệu quả hoạt động tuyển dụng
              </p>
            </div>
            
            {/* First row - 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Banner T1 */}
              <div className="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-lg transition-shadow">
                <div className="h-2 bg-blue-600 rounded-full mb-6"></div>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-xl font-bold text-gray-800">Banner T1</h3>
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xs text-gray-600">?</span>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-green-600">30,000,000 VNĐ</span>
                  <span className="text-lg text-gray-600"> /04 tuần</span>
                  <p className="text-sm text-gray-500 mt-1">(Giá trên chưa bao gồm VAT)</p>
                </div>
                <p className="text-gray-600 text-sm">
                  Banner trên đầu trang chủ việc làm
                </p>
              </div>

              {/* Banner C1 */}
              <div className="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-lg transition-shadow">
                <div className="h-2 bg-orange-500 rounded-full mb-6"></div>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-xl font-bold text-gray-800">Banner C1</h3>
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xs text-gray-600">?</span>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-green-600">11,000,000 VNĐ</span>
                  <span className="text-lg text-gray-600"> /04 tuần</span>
                  <p className="text-sm text-gray-500 mt-1">(Giá trên chưa bao gồm VAT)</p>
                </div>
                <p className="text-gray-600 text-sm">
                  Banner phía dưới Box Việc làm tốt nhất
                </p>
              </div>

              {/* Banner B1 */}
              <div className="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-lg transition-shadow">
                <div className="h-2 bg-yellow-400 rounded-full mb-6"></div>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-xl font-bold text-gray-800">Banner B1</h3>
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xs text-gray-600">?</span>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-green-600">8,000,000 VNĐ</span>
                  <span className="text-lg text-gray-600"> /04 tuần</span>
                  <p className="text-sm text-gray-500 mt-1">(Giá trên chưa bao gồm VAT)</p>
                </div>
                <p className="text-gray-600 text-sm">
                  Banner dọc bên trái của Popup Tải CV
                </p>
              </div>
            </div>

            {/* Second row - 1 centered card */}
            <div className="flex justify-center">
              <div className="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-lg transition-shadow max-w-md">
                <div className="h-2 bg-green-500 rounded-full mb-6"></div>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-xl font-bold text-gray-800">Chuyên trang tuyển dụng - EBP</h3>
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xs text-gray-600">?</span>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-green-600">5,000,000 VNĐ</span>
                  <span className="text-lg text-gray-600"> /53 tuần</span>
                  <p className="text-sm text-gray-500 mt-1">(Giá trên chưa bao gồm VAT)</p>
                </div>
                <p className="text-gray-600 text-sm">
                  Giao diện hiển thị riêng khác biệt
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex justify-center gap-4 mt-12">
              <button className="bg-white border border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50">
                Tư vấn tuyển dụng
              </button>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
                Đăng tin ngay
              </button>
            </div>
          </div>
        </section>

        {/* Developer API Section */}
        <section className="py-16 px-0 bg-white">
          <div className="w-full">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left side - Image */}
              <div className="flex-1">
                <Image
                  src="/images/top-developer-api.png"
                  alt="Top Developer API"
                  className="w-full h-[220px] lg:h-[400px] object-cover"
                  width={1920}
                  height={400}
                  priority
                />
              </div>
              
              {/* Right side - Content */}
              <div className="flex-1 px-8">
                <span className="text-green-600 text-lg font-semibold mb-2 block tracking-wide">TOP DEVELOPER API</span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Dịch vụ dành cho nhà phát triển</h2>
                <p className="text-gray-600 mb-8">
                  Tích hợp các nền tảng quản trị tuyển dụng phổ biến tại Việt Nam.
                </p>
                
                {/* API Service Card */}
                <div className="bg-white rounded-2xl border shadow-sm p-6 mb-8">
                  <div className="h-2 bg-purple-600 rounded-full mb-6"></div>
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-xl font-bold text-gray-800">Dịch vụ API</h3>
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-green-600">3,000,000 VNĐ</span>
                    <span className="text-lg text-gray-600"> /6 Tháng</span>
                    <p className="text-sm text-gray-500 mt-1">(Giá trên chưa bao gồm VAT)</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="bg-white border border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50">
                    Tư vấn tuyển dụng
                  </button>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
                    Đăng tin ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Banner Mừng Quốc Khánh */}
        <section className="py-0 px-0">
          <div className="w-full">
            <Image
              src="/images/banner-api.jpg"
              alt="Mừng Quốc Khánh - TopCV"
              className="w-full h-auto object-contain"
              width={1920}
              height={400}
              priority
            />
          </div>
        </section>

        {/* TopCV Rewards Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-green-600 text-lg font-semibold mb-2 tracking-wide uppercase">
                TOP REWARDS
              </h2>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Chương trình TopCV Rewards
              </h3>
              <p className="text-gray-600 mb-2">
                Điều kiện & quà tặng khi đạt hạng khách hàng
              </p>
              <p className="text-gray-600 max-w-4xl mx-auto">
                Khi tham gia chương trình TopCV Rewards và đạt hạng khách hàng Bạc trở lên, khách hàng sẽ nhận được bộ quà tặng tương ứng dựa trên thứ hạng đạt được và không mất điểm để quy đổi như dưới đây
              </p>
            </div>

            {/* Membership Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
              {/* Member */}
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 text-center border border-green-300">
                <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold text-lg mb-4">
                  MEMBER
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-gray-700">Tổng tích lũy</p>
                    <p className="text-green-600 font-bold">Từ 0 đến dưới</p>
                    <p className="text-green-600 font-bold text-lg">30.000.000</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Điểm tương ứng</p>
                    <p className="text-green-600 font-bold text-lg">0 đến &lt;300</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Top Point</p>
                  </div>
                </div>
              </div>

              {/* Silver Partner */}
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl p-6 text-center border border-gray-400">
                <div className="bg-gray-500 text-white px-4 py-2 rounded-lg font-bold text-lg mb-4">
                  SILVER
                  <div className="text-xs">PARTNER</div>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-gray-700">Tổng tích lũy</p>
                    <p className="text-gray-600 font-bold">Từ 30.000.000 đến dưới</p>
                    <p className="text-gray-600 font-bold text-lg">80.000.000</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Điểm tương ứng</p>
                    <p className="text-gray-600 font-bold text-lg">300 đến &lt;800</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Top Point</p>
                  </div>
                </div>
              </div>

              {/* Gold Partner */}
              <div className="bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-2xl p-6 text-center border border-yellow-500">
                <div className="bg-yellow-600 text-white px-4 py-2 rounded-lg font-bold text-lg mb-4">
                  GOLD
                  <div className="text-xs">PARTNER</div>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-gray-700">Tổng tích lũy</p>
                    <p className="text-yellow-700 font-bold">Từ 80.000.000 đến dưới</p>
                    <p className="text-yellow-700 font-bold text-lg">150.000.000</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Điểm tương ứng</p>
                    <p className="text-yellow-700 font-bold text-lg">800 đến &lt;1500</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Top Point</p>
                  </div>
                </div>
              </div>

              {/* Platinum Partner */}
              <div className="bg-gradient-to-br from-blue-200 to-blue-400 rounded-2xl p-6 text-center border border-blue-500 relative">
                <div className="absolute -top-2 -left-2 text-white text-sm">✦</div>
                <div className="absolute -top-2 -right-2 text-white text-sm">✦</div>
                <div className="absolute -bottom-2 -left-2 text-white text-sm">✦</div>
                <div className="absolute -bottom-2 -right-2 text-white text-sm">✦</div>
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-lg mb-4">
                  PLATINUM
                  <div className="text-xs">PARTNER</div>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-gray-700">Tổng tích lũy</p>
                    <p className="text-blue-700 font-bold">Từ 150.000.000 đến dưới</p>
                    <p className="text-blue-700 font-bold text-lg">250.000.000</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Điểm tương ứng</p>
                    <p className="text-blue-700 font-bold text-lg">1500 đến &lt;2500</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Top Point</p>
                  </div>
                </div>
              </div>

              {/* Diamond Partner */}
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-6 text-center border border-green-700 relative">
                <div className="absolute -top-2 -left-2 text-white text-sm">✦</div>
                <div className="absolute -top-2 -right-2 text-white text-sm">✦</div>
                <div className="absolute -bottom-2 -left-2 text-white text-sm">✦</div>
                <div className="absolute -bottom-2 -right-2 text-white text-sm">✦</div>
                <div className="bg-green-700 text-white px-4 py-2 rounded-lg font-bold text-lg mb-4">
                  DIAMOND
                  <div className="text-xs">PARTNER</div>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-white">Tổng tích lũy</p>
                    <p className="text-white font-bold">Từ 250.000.000 trở lên</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Điểm tương ứng</p>
                    <p className="text-white font-bold text-lg">2500 Top Point</p>
                    <p className="text-white text-xs">trở lên</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h3 className="text-2xl font-bold text-green-600 text-center mb-8 uppercase">
                VOUCHER ưu đãi giảm giá và quyền lợi gia tăng riêng biệt
              </h3>
              
              {/* Benefits Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left p-4 font-semibold text-gray-700 w-1/4"></th>
                      <th className="text-center p-4 font-semibold text-gray-700">10%</th>
                      <th className="text-center p-4 font-semibold text-gray-700">20%</th>
                      <th className="text-center p-4 font-semibold text-gray-700">25%</th>
                      <th className="text-center p-4 font-semibold text-gray-700">30%</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-medium text-gray-700">Voucher <span className="font-bold">giảm giá</span></td>
                      <td className="text-center p-4">10%</td>
                      <td className="text-center p-4">20%</td>
                      <td className="text-center p-4">25%</td>
                      <td className="text-center p-4">30%</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 text-gray-700">Yêu cầu gia hạn <span className="font-bold">kích hoạt dịch vụ</span></td>
                      <td className="text-center p-4">1 lần</td>
                      <td className="text-center p-4">2 lần</td>
                      <td className="text-center p-4">3 lần</td>
                      <td className="text-center p-4">4 lần</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 text-gray-700">Logo Nhà tuyển dụng <span className="font-bold">nổi bật hiển thị</span> tại <span className="text-green-600 font-medium">trang chủ việc làm</span></td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">3 tháng</td>
                      <td className="text-center p-4">6 tháng</td>
                      <td className="text-center p-4">12 tháng</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 text-gray-700">Chuyên trang tuyển dụng cao cấp</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">3 tháng</td>
                      <td className="text-center p-4">6 tháng</td>
                      <td className="text-center p-4">12 tháng</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-green-600 text-center my-8 uppercase">
                Gia tăng hiệu quả tin tuyển dụng
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center mb-8">
                <div className="p-4">
                  <div className="text-gray-700">Tin đăng được thiết kế <span className="font-bold">huy hiệu nổi bật</span> với ứng viên trên website <span className="text-green-600 font-medium">Topcv.vn</span></div>
                  <div className="mt-2 text-green-600 text-2xl">✓</div>
                </div>
                <div className="p-4">
                  <div className="text-gray-700">Hiển thị tiêu đề tin cơ bản có tiêu chí tương đương tiêu đề tin trả phí/tin Top job</div>
                  <div className="mt-2 text-center text-sm">1 gói 3 tháng</div>
                </div>
                <div className="p-4">
                  <div className="text-gray-700">Hiển thị tiêu đề tin cơ bản có tiêu chí tương đương tiêu đề tin trả phí/tin Top job</div>
                  <div className="mt-2 text-center text-sm">1 gói 6 tháng</div>
                </div>
                <div className="p-4">
                  <div className="text-gray-700">Hiển thị tiêu đề tin cơ bản có tiêu chí tương đương tiêu đề tin trả phí/tin Top job</div>
                  <div className="mt-2 text-center text-sm">1 gói 9 tháng</div>
                </div>
                <div className="p-4">
                  <div className="text-gray-700">Hiển thị tiêu đề tin cơ bản có tiêu chí tương đương tiêu đề tin trả phí/tin Top job</div>
                  <div className="mt-2 text-center text-sm">1 gói 12 tháng</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-green-600 text-center my-8 uppercase">
                Hoạt động tri ân và về mời tham dự các chương trình sự kiện cùng TopCV
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center mb-8">
                <div className="p-4">
                  <div className="text-gray-700">Về mời VIP tham dự chương trình <span className="font-bold">HR TECH</span> - Sự kiện nhân sự lớn nhất trong năm</div>
                  <div className="mt-2 text-center text-sm">-</div>
                </div>
                <div className="p-4">
                  <div className="text-gray-700">Về mời VIP tham dự chương trình <span className="font-bold">HR TECH</span> - Sự kiện nhân sự lớn nhất trong năm</div>
                  <div className="mt-2 text-center text-sm">1 vé</div>
                </div>
                <div className="p-4">
                  <div className="text-gray-700">Về mời VIP tham dự chương trình <span className="font-bold">HR TECH</span> - Sự kiện nhân sự lớn nhất trong năm</div>
                  <div className="mt-2 text-center text-sm">1 vé</div>
                </div>
                <div className="p-4">
                  <div className="text-gray-700">Về mời VIP tham dự chương trình <span className="font-bold">HR TECH</span> - Sự kiện nhân sự lớn nhất trong năm</div>
                  <div className="mt-2 text-center text-sm">2 vé</div>
                </div>
                <div className="p-4">
                  <div className="text-gray-700">Về mời VIP tham dự chương trình <span className="font-bold">HR TECH</span> - Sự kiện nhân sự lớn nhất trong năm</div>
                  <div className="mt-2 text-center text-sm">2 vé</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center mb-8">
                <div className="p-4">
                  <div className="text-gray-700">Quyền lợi tham dự <span className="font-bold">Talkshow & Workshop</span> đào tạo, chia sẻ kiến thức chuyên môn</div>
                </div>
                <div className="p-4">
                  <div className="mt-2 text-green-600 text-2xl">✓</div>
                </div>
                <div className="p-4">
                  <div className="mt-2 text-green-600 text-2xl">✓</div>
                </div>
                <div className="p-4">
                  <div className="mt-2 text-green-600 text-2xl">✓</div>
                </div>
                <div className="p-4">
                  <div className="mt-2 text-green-600 text-2xl">✓</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center mb-8">
                <div className="p-4">
                  <div className="text-gray-700">Hoạt động chúc mừng, <span className="font-bold">tri ân</span> nhân dịp lễ tết/ ngày ký niệm</div>
                </div>
                <div className="p-4">
                  <div className="mt-2 text-green-600 text-2xl">✓</div>
                </div>
                <div className="p-4">
                  <div className="mt-2 text-green-600 text-2xl">✓</div>
                </div>
                <div className="p-4">
                  <div className="mt-2 text-green-600 text-2xl">✓</div>
                </div>
                <div className="p-4">
                  <div className="mt-2 text-green-600 text-2xl">✓</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-green-600 text-center my-8 uppercase">
                Ưu đãi từ hệ sinh thái sản phẩm HR Tech (HappyTime, TestCenter, SHiring)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
                <div className="p-4">
                  <div className="text-gray-700 text-sm leading-relaxed">
                    Gói quà tặng trải nghiệm miễn phí các sản phẩm trong hệ sinh thái số <span className="font-bold">HappyTime, TestCenter, SHiring</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-gray-700 text-sm leading-relaxed">
                    2 tháng trải nghiệm miễn phí các sản phẩm trong hệ sinh thái số <span className="font-bold">HappyTime, TestCenter, SHiring</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-gray-700 text-sm leading-relaxed">
                    2 tháng trải nghiệm miễn phí các sản phẩm trong hệ sinh thái số <span className="font-bold">HappyTime, TestCenter, SHiring</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-gray-700 text-sm leading-relaxed">
                    2 tháng trải nghiệm miễn phí các sản phẩm trong hệ sinh thái số <span className="font-bold">HappyTime, TestCenter, SHiring</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-gray-700 text-sm leading-relaxed">
                    2 tháng trải nghiệm miễn phí các sản phẩm trong hệ sinh thái số <span className="font-bold">HappyTime, TestCenter, SHiring</span>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <div className="flex gap-4 justify-center">
                  <button className="bg-white border border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50">
                    Tư vấn tuyển dụng
                  </button>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
                    Đăng tin ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              TopCV Việt Nam mong muốn được hợp tác cùng Doanh nghiệp
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Đội ngũ hỗ trợ của TopCV luôn sẵn sàng để tư vấn giải pháp tuyển dụng và đồng hành cùng các Quý nhà tuyển dụng
            </p>
            
            <div className="flex gap-4 justify-center">
              <button className="bg-white border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                Tư vấn tuyển dụng
              </button>
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Đăng tin ngay
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
