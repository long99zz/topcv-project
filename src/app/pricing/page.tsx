import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

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

const topCreditPackages = [
  {
    name: 'Flexible Basic',
    price: '6,000,000 VNĐ / 12 tuần',
    badge: null,
    features: [
      'Sử dụng linh hoạt nhiều tiện ích',
      'Hỗ trợ quá trình tuyển dụng',
      'Nhiều sự lựa chọn phù hợp với nhu cầu',
    ],
    popular: false,
  }
];

const addOnServices = [
  {
    name: 'Add-on Value',
    price: '2,000,000 VNĐ',
    features: [
      'Hiển thị 3 lý do để apply vào job trên box tin của khách hàng tại trang tìm kiếm việc làm',
      'Hiển thị trên đầu trang chi tiết việc làm',
    ],
  },
  {
    name: 'Add-on Label: Gấp',
    price: '1,000,000 VNĐ',
    features: [
      'Tin tuyển dụng được gắn nhãn GẤP vào tiêu đề tin',
    ],
  },
  {
    name: 'Add-on Label: Hot',
    price: '1,000,000 VNĐ',
    features: [
      'Tin tuyển dụng được gắn nhãn HOT vào tiêu đề tin',
    ],
  },
  {
    name: 'Add-on Title: Red',
    price: '1,000,000 VNĐ',
    features: [
      'Tin tuyển dụng hiển thị ở tất cả các trang sẽ có tiêu đề tin MÀU ĐỎ',
    ],
  },
  {
    name: 'Box Remarketing',
    price: '6,250,000 VNĐ',
    features: [
      'Tin tuyển dụng được hiển thị lại cho ứng viên đã lưu tin hoặc từng xem tin',
      'Top add-on này cần phải gắn với tin tuyển dụng chạy dịch vụ Top Jobs',
      'Thời hạn sử dụng: tối đa 2 tuần / tin tuyển dụng',
    ],
  },
];

const employerBrandingPackages = [
  {
    name: 'Banner T1',
    price: '30,000,000 VNĐ / 04 tuần',
    features: [
      'Banner trên đầu trang chủ việc làm',
    ],
  },
  {
    name: 'Banner C1',
    price: '11,000,000 VNĐ / 04 tuần',
    features: [
      'Banner phía dưới Box Việc làm tốt nhất',
    ],
  },
  {
    name: 'Banner B1',
    price: '8,000,000 VNĐ / 04 tuần',
    features: [
      'Banner dọc bên trái của Popup Tải CV',
    ],
  },
  {
    name: 'Chuyên trang tuyển dụng - EBP',
    price: '5,000,000 VNĐ / 53 tuần',
    features: [
      'Giao diện hiển thị riêng khác biệt',
    ],
  },
];

const developerApiPackages = [
  {
    name: 'Dịch vụ API',
    price: '3,000,000 VNĐ / 6 Tháng',
    features: [
      'Tích hợp các nền tảng quản trị tuyển dụng phổ biến tại Việt Nam',
    ],
  },
];

interface PricingPackage {
  name: string;
  price: string;
  badge?: string | null;
  features: string[];
  popular?: boolean;
}

const PricingPage = () => {
  const renderPackageCard = (pkg: PricingPackage, index: number) => (
    <div
      key={index}
      className={`bg-white rounded-2xl shadow-lg p-6 flex flex-col ${pkg.popular ? 'border-4 border-green-500' : 'border'}`}
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
        {pkg.badge && (
          <Image src={`/images/badge/${pkg.badge}`} alt="badge" width={30} height={24} className="mx-auto my-2" />
        )}
        <p className="text-3xl font-extrabold text-green-600 mt-2">{pkg.price}</p>
        <p className="text-sm text-gray-500">* Giá trên chưa bao gồm VAT</p>
      </div>
      <ul className="space-y-4 text-gray-700 mb-8 flex-grow">
        {pkg.features.map((feature: string, i: number) => (
          <li key={i} className="flex items-start">
            <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link href="/register" className="block w-full text-center bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-colors">
          Liên hệ tư vấn
      </Link>
    </div>
  );

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
              <button className="bg-white border border-green-600 text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-green-50">
                So sánh quyền lợi ▼
              </button>
            </div>
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
          </div>
        </section>

        {/* Top Credit Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Top Credit - Linh hoạt sử dụng các tiện ích
              </h2>
              <p className="text-gray-600 mb-6">
                Sử dụng linh hoạt nhiều tiện ích, hỗ trợ quá trình tuyển dụng, giúp Doanh nghiệp có nhiều sự lựa chọn phù hợp với nhu cầu
              </p>
              <div className="flex justify-center mb-6">
                <Image src="/images/credit.png" alt="Top Credit" width={200} height={150} className="mx-auto" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topCreditPackages.map((pkg, index) => renderPackageCard(pkg, index))}
            </div>
          </div>
        </section>

        {/* Add-on Services Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              Top Add-on - Dịch vụ cộng thêm
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Thêm tùy chọn giúp tin tuyển dụng nổi bật hơn với ứng viên
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {addOnServices.map((pkg, index) => renderPackageCard(pkg, index))}
            </div>
          </div>
        </section>

        {/* Employer Branding Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              Top Employer Branding - Truyền thông thương hiệu tuyển dụng
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Xây dựng hình ảnh thương hiệu tuyển dụng uy tín, nâng cao hiệu quả hoạt động tuyển dụng
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {employerBrandingPackages.map((pkg, index) => renderPackageCard(pkg, index))}
            </div>
          </div>
        </section>

        {/* Developer API Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Top Developer API - Dịch vụ dành cho nhà phát triển
              </h2>
              <p className="text-gray-600 mb-6">
                Tích hợp các nền tảng quản trị tuyển dụng phổ biến tại Việt Nam
              </p>
              <div className="flex justify-center mb-6">
                <Image src="/images/top-developer-api.png" alt="Top Developer API" width={300} height={200} className="mx-auto" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {developerApiPackages.map((pkg, index) => renderPackageCard(pkg, index))}
            </div>
          </div>
        </section>

        {/* TopCV Rewards Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                TOP REWARDS
              </h2>
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                Chương trình TopCV Rewards
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Điều kiện & quà tặng khi đạt hạng khách hàng
              </p>
              <p className="text-gray-600 mb-8 max-w-4xl mx-auto">
                Khi tham gia chương trình TopCV Rewards và đạt hạng khách hàng Bạc trở lên, khách hàng sẽ nhận được bộ quà tặng tương ứng dựa trên thứ hạng đạt được và không mất điểm để quy đổi như dưới đây
              </p>
              <div className="flex justify-center mb-8">
                <Image src="/images/arrow-4.png" alt="Arrow" width={200} height={50} className="mx-auto" />
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-6 uppercase">
                    VOUCHER ưu đãi giảm giá và quyền lợi gia tăng riêng biệt
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <Image src="/images/icons/check.png" alt="check" width={20} height={20} className="mr-2 mt-1" />
                      <span>Voucher giảm giá</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/images/icons/check.png" alt="check" width={20} height={20} className="mr-2 mt-1" />
                      <span>Yêu cầu gia hạn kích hoạt dịch vụ</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/images/icons/check.png" alt="check" width={20} height={20} className="mr-2 mt-1" />
                      <span>Logo Nhà tuyển dụng nổi bật hiển thị tại <Link href="https://topcv.vn/viec-lam" className="text-blue-600 underline">trang chủ việc làm</Link></span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/images/icons/check.png" alt="check" width={20} height={20} className="mr-2 mt-1" />
                      <span>Chuyên trang tuyển dụng cao cấp</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-6 uppercase">
                    Gia tăng hiệu quả tin tuyển dụng
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <Image src="/images/icons/check.png" alt="check" width={20} height={20} className="mr-2 mt-1" />
                      <span>Tin đăng được thiết kế huy hiệu nổi bật với ứng viên trên website <Link href="https://topcv.vn/" className="text-blue-600 underline">Topcv.vn</Link></span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/images/icons/check.png" alt="check" width={20} height={20} className="mr-2 mt-1" />
                      <span>Hiển thị tiêu đề tin cơ bản có tiêu chí tương đương tiêu đề tin trả phí/ tin Top job</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/images/icons/check.png" alt="check" width={20} height={20} className="mr-2 mt-1" />
                      <span>Hoạt động tri ân</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <div className="bg-gray-50 rounded-lg p-6 inline-block">
                  <Image src="/images/rewards/member.png" alt="Member Card" width={200} height={120} className="mx-auto mb-4" />
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex justify-between items-center">
                      <span><strong>Tổng tích lũy:</strong></span>
                      <span>Từ 0 đến dưới 30.000.000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span><strong>Điểm tương ứng:</strong></span>
                      <span>0 đến &lt;300</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span><strong>Top Point:</strong></span>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <span key={num} className="w-6 h-6 bg-blue-500 text-white rounded-full text-xs flex items-center justify-center">
                            {num}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              TopCV Việt Nam mong muốn được hợp tác cùng Doanh nghiệp
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Đội ngũ hỗ trợ của TopCV luôn sẵn sàng để tư vấn giải pháp tuyển dụng và đồng hành cùng các Quý nhà tuyển dụng
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Hotline Tư vấn Tuyển dụng miền Bắc</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Lê Thị Thùy Linh: <a href="tel:0373332614" className="text-green-600 font-semibold">0373 332 614</a></p>
                  <p>Nguyễn Thị Huyền: <a href="tel:0378379398" className="text-green-600 font-semibold">0378 379 398</a></p>
                  <p>Nguyễn Thị Ngọc Châm: <a href="tel:0981408887" className="text-green-600 font-semibold">0981 408 887</a></p>
                  <p>Phạm Thu Hằng: <a href="tel:0966852693" className="text-green-600 font-semibold">0966 852 693</a></p>
                  <p>Bùi Anh Sơn: <a href="tel:0977568186" className="text-green-600 font-semibold">0977 568 186</a></p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Hotline Tư vấn Tuyển dụng miền Nam</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Võ Thị Danh Phương: <a href="tel:0767574637" className="text-green-600 font-semibold">0767 574 637</a></p>
                  <p>Nguyễn Thị Phương Toan: <a href="tel:0983441069" className="text-green-600 font-semibold">0983 441 069</a></p>
                  <p>Nguyễn Cao Kỳ Duyên: <a href="tel:0933755452" className="text-green-600 font-semibold">0933 755 452</a></p>
                  <p>Nguyễn Thị Phi Yến: <a href="tel:0326569542" className="text-green-600 font-semibold">0326 569 542</a></p>
                  <p>Bùi Thị Ngọc Hân: <a href="tel:0765055167" className="text-green-600 font-semibold">0765 055 167</a></p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-2">🔥 KHUYẾN MÃI ĐẶC BIỆT 🔥</h3>
                <p className="text-white mb-4">Đăng ký ngay hôm nay để nhận ưu đãi tốt nhất!</p>
                <Link 
                  href="/register" 
                  className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  Đăng tin ngay
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Company Info Section */}
        <section className="py-16 px-4 bg-gray-800 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              Công ty Cổ phần TopCV Việt Nam
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Image src="/images/icons/tax.svg" alt="tax" width={20} height={20} className="mr-3 mt-1" />
                  <span>Giấy phép đăng ký kinh doanh số: 0107307178</span>
                </div>
                <div className="flex items-start">
                  <Image src="/images/icons/paper.svg" alt="paper" width={20} height={20} className="mr-3 mt-1" />
                  <span>Giấy phép hoạt động dịch vụ việc làm số: 18/SLĐTBXH-GP</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Image src="/images/icons/location.svg" alt="location" width={20} height={20} className="mr-3 mt-1" />
                  <span>Trụ sở HN: Tòa FS - GoldSeason số 47 Nguyễn Tuân, P.Thanh Xuân, TP Hà Nội</span>
                </div>
                <div className="flex items-start">
                  <Image src="/images/icons/location.svg" alt="location" width={20} height={20} className="mr-3 mt-1" />
                  <span>Chi nhánh HCM: Tòa nhà Dali, 24C Phan Đăng Lưu, P.Gia Định, TP HCM</span>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <h3 className="text-xl font-bold mb-4">Hệ sinh thái HR Tech của TopCV</h3>
              <div className="flex justify-center space-x-8 text-blue-400">
                <Link href="https://www.topcv.vn/" className="hover:underline">TopCV</Link>
                <Link href="https://www.happytime.vn/" className="hover:underline">Happy Time</Link>
                <Link href="https://www.testcenter.vn/" className="hover:underline">Test Center</Link>
                <Link href="https://shiring.ai/" className="hover:underline">S-Hiring</Link>
              </div>
              <p className="text-xs text-gray-400 mt-4">© 2014 - 2025 TopCV Vietnam JSC. All rights reserved.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
              Câu hỏi thường gặp
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg text-gray-900">Làm thế nào để đăng tin tuyển dụng?</h3>
                <p className="text-gray-600 mt-2">
                  Bạn có thể đăng ký tài khoản nhà tuyển dụng và chọn gói dịch vụ phù hợp. Sau đó, bạn có thể tạo và quản lý tin tuyển dụng của mình một cách dễ dàng.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">Các gói dịch vụ có gì khác biệt?</h3>
                <p className="text-gray-600 mt-2">
                  Mỗi gói dịch vụ cung cấp các quyền lợi khác nhau về mức độ ưu tiên hiển thị, số lần đẩy tin, và các tính năng hỗ trợ từ AI. Gói cao cấp hơn sẽ giúp tin tuyển dụng của bạn tiếp cận được nhiều ứng viên tiềm năng hơn.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">Làm sao để liên hệ hỗ trợ?</h3>
                <p className="text-gray-600 mt-2">
                  Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ. Bạn có thể liên hệ qua hotline hoặc email được cung cấp ở cuối trang để được tư vấn chi tiết.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
