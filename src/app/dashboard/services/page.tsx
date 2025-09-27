"use client";

import React, { useState } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import Sidebar from '@/components/dashboard/Sidebar';
import { ShoppingCart } from 'lucide-react';

const ServicesPage = () => {
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
        
        <main className={`flex-1 transition-all duration-300 ${
          sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'
        }`}>
          <div className="px-4 py-6">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Mua dịch vụ</h1>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  💰 Báo giá dịch vụ
                </button>
              </div>

              {/* Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">i</div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-blue-900 font-medium">Lưu ý quan trọng</h3>
                    <p className="text-blue-700 text-sm mt-1">
                      Nhằm tránh rủi ro mạo danh và lừa đảo, TopCV khuyến nghị Quý khách hàng không chuyển khoản vào bất cứ tài khoản cá nhân nào và chỉ thực hiện thanh toán vào các tài khoản chính thức của chúng tôi
                    </p>
                  </div>
                </div>
              </div>

              {/* TOP JOBS TRIAL */}
              <div className="mb-12">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    <span className="text-green-600">TOP JOBS TRIAL</span> | ĐĂNG TIN TUYỂN DỤNG
                  </h2>
                  <p className="text-gray-600">Trải nghiệm công nghệ tiên phong công nghệ tạo ra hiệu quả đột phá cho tin tuyển dụng của Doanh nghiệp với chi phí tối ưu</p>
                  <p className="text-red-600 text-sm mt-1">Nhà tuyển dụng sẽ chỉ được mua và kích hoạt duy nhất 1 gói Top Jobs Trial</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {/* TOP MAX TRIAL */}
                  <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">TOP MAX TRIAL</h3>
                    <div className="text-2xl font-bold text-green-600 mb-2">2.887.500 VNĐ*</div>
                    <p className="text-gray-600 text-sm mb-4">
                      Trải nghiệm đăng tin tuyển dụng hiệu quả với vị trí nổi bật trong Việc làm tốt nhất kết hợp cùng các dịch vụ cao cấp, giá đồng thời hấp dẫn.
                    </p>
                    <div className="flex space-x-2 mb-4">
                      <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50 transition-colors">
                        <ShoppingCart className="inline w-4 h-4 mr-1" />
                        Thêm vào giỏ
                      </button>
                      <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors">
                        Mua ngay
                      </button>
                    </div>
                  </div>

                  {/* TOP PRO TRIAL */}
                  <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">TOP PRO TRIAL</h3>
                    <div className="text-2xl font-bold text-green-600 mb-2">2.448.000 VNĐ*</div>
                    <p className="text-gray-600 text-sm mb-4">
                      Trải nghiệm đăng tin tuyển dụng tối ưu với vị trí ưu tiên trong Việc làm hấp dẫn kết hợp cùng các dịch vụ cao cấp, giá đồng thời hấp dẫn.
                    </p>
                    <div className="flex space-x-2 mb-4">
                      <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50 transition-colors">
                        <ShoppingCart className="inline w-4 h-4 mr-1" />
                        Thêm vào giỏ
                      </button>
                      <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors">
                        Mua ngay
                      </button>
                    </div>
                  </div>

                  {/* TOP ECO PLUS TRIAL */}
                  <div className="bg-white rounded-lg border-2 border-green-500 p-6 relative">
                    <div className="absolute -top-3 left-4 bg-green-500 text-white px-3 py-1 rounded text-xs font-medium">
                      Được đề xuất
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">TOP ECO PLUS TRIAL</h3>
                    <div className="text-2xl font-bold text-green-600 mb-2">2.112.000 VNĐ*</div>
                    <p className="text-gray-600 text-sm mb-4">
                      Trải nghiệm đăng tin tuyển dụng tiết kiệm với vị trí hiển thị trong Đề xuất việc làm liên quan kết hợp cùng các dịch vụ khác, giá đồng thời hấp dẫn.
                    </p>
                    <div className="flex space-x-2 mb-4">
                      <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50 transition-colors">
                        <ShoppingCart className="inline w-4 h-4 mr-1" />
                        Thêm vào giỏ
                      </button>
                      <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors">
                        Mua ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* TOP JOBS */}
              <div className="mb-12">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    <span className="text-green-600">TOP JOBS</span> | ĐĂNG TIN TUYỂN DỤNG HIỆU SUẤT CAO
                  </h2>
                  <p className="text-gray-600">Công nghệ sức mạnh công nghệ tạo ra hiệu quả đột phá cho tin tuyển dụng của Doanh nghiệp</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {/* TOP MAX PLUS */}
                  <div className="bg-white rounded-lg border-2 border-gray-200 p-6 relative">
                    <div className="absolute top-4 right-4">
                      <div className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-bold transform rotate-12">VIP</div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">TOP MAX PLUS</h3>
                    <div className="text-2xl font-bold text-green-600 mb-2">9.650.000 VNĐ*</div>
                    <p className="text-gray-600 text-sm mb-4">
                      Đăng tin tuyển dụng hiệu quả với vị trí nổi bật trong Việc làm tốt nhất, x2 lượt đây Top, được sử dụng tính năng CV để xuất kết hợp các dịch vụ cao cấp và được bảo hành với nhiều quyền lợi ưu tiên.
                    </p>
                    <div className="flex space-x-2 mb-4">
                      <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50 transition-colors">
                        <ShoppingCart className="inline w-4 h-4 mr-1" />
                        Thêm vào giỏ
                      </button>
                      <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors">
                        Mua ngay
                      </button>
                    </div>
                  </div>

                  {/* TOP MAX */}
                  <div className="bg-white rounded-lg border-2 border-green-500 p-6 relative">
                    <div className="absolute top-4 right-4">
                      <div className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-bold transform rotate-12">VIP</div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">TOP MAX</h3>
                    <div className="text-2xl font-bold text-green-600 mb-2">7.500.000 VNĐ*</div>
                    <p className="text-gray-600 text-sm mb-4">
                      Đăng tin tuyển dụng hiệu quả với vị trí nổi bật trong Việc làm tốt nhất, được sử dụng tính năng CV để xuất kết hợp các dịch vụ cao cấp và được bảo hành với nhiều quyền lợi ưu tiên.
                    </p>
                    <div className="flex space-x-2 mb-4">
                      <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50 transition-colors">
                        <ShoppingCart className="inline w-4 h-4 mr-1" />
                        Thêm vào giỏ
                      </button>
                      <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors">
                        Mua ngay
                      </button>
                    </div>
                  </div>

                  {/* TOP PRO */}
                  <div className="bg-white rounded-lg border-2 border-blue-500 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">TOP PRO</h3>
                    <div className="text-2xl font-bold text-green-600 mb-2">5.440.000 VNĐ*</div>
                    <p className="text-gray-600 text-sm mb-4">
                      Đăng tin tuyển dụng tối ưu với vị trí ưu tiên trong Việc làm hấp dẫn, được sử dụng tính năng CV để xuất kết hợp các dịch vụ cao cấp và được bảo hành.
                    </p>
                    <div className="flex space-x-2 mb-4">
                      <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50 transition-colors">
                        <ShoppingCart className="inline w-4 h-4 mr-1" />
                        Thêm vào giỏ
                      </button>
                      <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors">
                        Mua ngay
                      </button>
                    </div>
                  </div>
                </div>

                {/* TOP ECO PLUS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg border-2 border-orange-500 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">TOP ECO PLUS</h3>
                    <div className="text-2xl font-bold text-green-600 mb-2">4.400.000 VNĐ*</div>
                    <p className="text-gray-600 text-sm mb-4">
                      Đăng tin tuyển dụng tiết kiệm với vị trí hiển thị trong Đề xuất việc làm liên quan, được sử dụng tính năng CV để xuất kết hợp các dịch vụ khác và được bảo hành.
                    </p>
                    <div className="flex space-x-2 mb-4">
                      <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50 transition-colors">
                        <ShoppingCart className="inline w-4 h-4 mr-1" />
                        Thêm vào giỏ
                      </button>
                      <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors">
                        Mua ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* TOP STANDARD */}
              <div className="mb-12">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    <span className="text-green-600">TOP STANDARD</span> | ĐĂNG TIN TUYỂN DỤNG TIẾT KIỆM
                  </h2>
                  <p className="text-gray-600">Tối ưu chi phí - Tiếp cận thể cho Nhà tuyển dụng</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg border-2 border-gray-200 p-6 relative">
                    <div className="absolute top-4 right-4">
                      <div className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">MỚI</div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">STANDARD EXTRA COMBO</h3>
                    <div className="text-2xl font-bold text-green-600 mb-2">2.550.000 VNĐ*</div>
                    <p className="text-gray-600 text-sm mb-4">
                      Đăng tin tuyển dụng tiết kiệm với vị trí ưu tiên so với Tin có bản trên Danh sách tìm kiếm việc làm, được sử dụng tiêu đề tin nâng cao.
                    </p>
                    <p className="text-sm text-gray-500 mb-4">* Áp dụng cho 03 tin</p>
                    <div className="flex space-x-2 mb-4">
                      <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50 transition-colors">
                        <ShoppingCart className="inline w-4 h-4 mr-1" />
                        Thêm vào giỏ
                      </button>
                      <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors">
                        Mua ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* TOP CREDIT */}
              <div className="mb-12">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    <span className="text-green-600">TOP CREDIT</span> | LINH HOẠT SỬ DỤNG CÁC TIỆN ÍCH TRÊN NỀN TẢNG
                  </h2>
                  <p className="text-gray-600">Sử dụng linh hoạt nhiều tiện ích, hỗ trợ quy trình tuyển dụng, giúp Doanh nghiệp có nhiều sự lựa chọn phù hợp với nhu cầu</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">FLEXIBLE BASIC</h3>
                    <div className="text-2xl font-bold text-green-600 mb-2">6.000.000 VNĐ*</div>
                    <p className="text-gray-600 text-sm mb-4">
                      Linh hoạt sử dụng các tiện ích khác nhau trên nền tảng, từng bước tiếp cận ứng viên phù hợp một cách nhanh chóng nhất
                    </p>
                    <div className="flex space-x-2 mb-4">
                      <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50 transition-colors">
                        <ShoppingCart className="inline w-4 h-4 mr-1" />
                        Thêm vào giỏ
                      </button>
                      <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors">
                        Mua ngay
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">FLEXIBLE PRO</h3>
                    <div className="text-2xl font-bold text-green-600 mb-2">8.000.000 VNĐ*</div>
                    <p className="text-gray-600 text-sm mb-4">
                      Linh hoạt sử dụng các tiện ích khác nhau trên nền tảng, từng bước tiếp cận ứng viên phù hợp một cách nhanh chóng nhất
                    </p>
                    <div className="flex space-x-2 mb-4">
                      <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50 transition-colors">
                        <ShoppingCart className="inline w-4 h-4 mr-1" />
                        Thêm vào giỏ
                      </button>
                      <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors">
                        Mua ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* TOP ADD-ON */}
              <div className="mb-12">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    <span className="text-green-600">TOP ADD - ON</span> | DỊCH VỤ CÔNG THÊM
                    <span className="ml-2 text-blue-500">
                      <svg className="inline w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </h2>
                  <p className="text-gray-600">Thêm tùy chọn giúp tin tuyển dụng nổi bật hơn với ứng viên. Dịch vụ chỉ được áp dụng cho tin đăng chạy dịch vụ Top Jobs</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">ADD-ON VALUE</h3>
                    <div className="text-2xl font-bold text-green-600 mb-2">2.000.000 VNĐ*</div>
                    <p className="text-gray-600 text-sm mb-4">
                      Hiển thị 3 lý do để apply vào job trên box tin của khách hàng tại trang tìm kiếm việc làm và trên đầu trang chi tiết việc làm.
                    </p>
                    <div className="flex space-x-2 mb-4">
                      <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50 transition-colors">
                        <ShoppingCart className="inline w-4 h-4 mr-1" />
                        Thêm vào giỏ
                      </button>
                      <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors">
                        Mua ngay
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">ADD-ON LABEL: GẤP</h3>
                    <div className="text-2xl font-bold text-green-600 mb-2">1.000.000 VNĐ*</div>
                    <p className="text-gray-600 text-sm mb-4">
                      Tin tuyển dụng được gắn nhãn <span className="font-bold text-red-600">GẤP</span> vào tiêu đề tin.
                    </p>
                    <div className="flex space-x-2 mb-4">
                      <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50 transition-colors">
                        <ShoppingCart className="inline w-4 h-4 mr-1" />
                        Thêm vào giỏ
                      </button>
                      <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors">
                        Mua ngay
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">ADD-ON LABEL: HOT</h3>
                    <div className="text-2xl font-bold text-green-600 mb-2">1.000.000 VNĐ*</div>
                    <p className="text-gray-600 text-sm mb-4">
                      Tin tuyển dụng được gắn nhãn <span className="font-bold text-orange-600">HOT</span> vào tiêu đề tin.
                    </p>
                    <div className="flex space-x-2 mb-4">
                      <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50 transition-colors">
                        <ShoppingCart className="inline w-4 h-4 mr-1" />
                        Thêm vào giỏ
                      </button>
                      <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors">
                        Mua ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* TOP EMPLOYER BRANDING */}
              <div className="mb-12">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    <span className="text-green-600">TOP EMPLOYER BRANDING</span> | TRUYỀN THÔNG THƯƠNG HIỆU TUYỂN DỤNG
                  </h2>
                  <p className="text-gray-600">Xây dựng hình ảnh thương hiệu tuyển dụng uy tín, nâng cao hiệu quả hoạt động tuyển dụng</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">BANNER TOP - BANNER T1</h3>
                    <div className="text-2xl font-bold text-green-600 mb-2">30.000.000 VNĐ*</div>
                    <p className="text-gray-600 text-sm mb-4">
                      Banner trên đầu Trang chủ việc làm, giúp doanh nghiệp và thương hiệu tổ chức nổi bật, nhanh chóng tiếp cận hàng triệu ứng viên tiềm năng.
                    </p>
                    <div className="flex space-x-2 mb-4">
                      <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50 transition-colors">
                        <ShoppingCart className="inline w-4 h-4 mr-1" />
                        Thêm vào giỏ
                      </button>
                      <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors">
                        Mua ngay
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border-2 border-green-500 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">BANNER CENTER - BANNER C1</h3>
                    <div className="text-2xl font-bold text-green-600 mb-2">11.000.000 VNĐ*</div>
                    <p className="text-gray-600 text-sm mb-4">
                      Banner phía dưới Box Việc làm tốt nhất, giúp doanh nghiệp tiếp cận đối tượng ứng viên mục tiêu và truyền tải thông tin tuyển dụng.
                    </p>
                    <div className="flex space-x-2 mb-4">
                      <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50 transition-colors">
                        <ShoppingCart className="inline w-4 h-4 mr-1" />
                        Thêm vào giỏ
                      </button>
                      <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors">
                        Mua ngay
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">BANNER B1</h3>
                    <div className="text-2xl font-bold text-green-600 mb-2">8.000.000 VNĐ*</div>
                    <p className="text-gray-600 text-sm mb-4">
                      Banner độc bên trái của Popup Tại CV, giúp doanh nghiệp tiếp cận ứng viên mục tiêu và truyền tải thông tin tuyển dụng.
                    </p>
                    <div className="flex space-x-2 mb-4">
                      <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50 transition-colors">
                        <ShoppingCart className="inline w-4 h-4 mr-1" />
                        Thêm vào giỏ
                      </button>
                      <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors">
                        Mua ngay
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">CHUYỂN TRANG TUYỂN DỤNG - EBP</h3>
                    <div className="text-2xl font-bold text-green-600 mb-2">5.000.000 VNĐ*</div>
                    <p className="text-gray-600 text-sm mb-4">
                      Trang tuyển dụng thiết kế riêng cho doanh nghiệp quảng bá thương hiệu, tăng uy tín, thu hút nhân tài, tuyển dụng hiệu quả.
                    </p>
                    <div className="flex space-x-2 mb-4">
                      <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50 transition-colors">
                        <ShoppingCart className="inline w-4 h-4 mr-1" />
                        Thêm vào giỏ
                      </button>
                      <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors">
                        Mua ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* TOP DEVELOPER API */}
              <div className="mb-12">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    <span className="text-green-600">TOP DEVELOPER API</span> | DỊCH VỤ DÀNH CHO NHÀ PHÁT TRIỂN
                  </h2>
                  <p className="text-gray-600">Tích hợp các nền tảng quản lý tuyển dụng phổ biến tại Việt Nam</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">DỊCH VỤ API</h3>
                    <div className="text-2xl font-bold text-green-600 mb-2">3.000.000 VNĐ*</div>
                    <p className="text-gray-600 text-sm mb-4">
                      Phù hợp với các doanh nghiệp lớn, chủ động quản lý quy trình tuyển dụng nhanh chóng, dễ dàng và hiệu quả
                    </p>
                    <div className="flex space-x-2 mb-4">
                      <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50 transition-colors">
                        <ShoppingCart className="inline w-4 h-4 mr-1" />
                        Thêm vào giỏ
                      </button>
                      <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors">
                        Mua ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="text-center text-sm text-gray-500 mt-12">
                * Giá dịch vụ chưa bao gồm VAT
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ServicesPage;