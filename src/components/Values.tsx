import React from 'react';
import Image from 'next/image';

const Values = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm text-green-600 mb-4 font-semibold">VALUES</p>
          <h2 className="text-3xl font-bold text-gray-800">
            Giá trị khi sử dụng TopCV Smart Recruitment Platform
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - For Business */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Đối với Doanh nghiệp</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Đưa tuyển dụng trở thành lợi thế cạnh tranh của doanh nghiệp: gia tăng cơ hội tuyển đúng người, giúp thúc đẩy hoạt động kinh doanh hiệu quả, hướng đến chuyển đổi số thành công.
              </p>
              <p>
                Chuẩn hóa toàn bộ quy trình tuyển dụng thống nhất và bài bản với Talent Acquisition Funnel.
              </p>
              <p>
                Xây dựng thương hiệu tuyển dụng uy tín, chuyên nghiệp.
              </p>
              <p>
                Tiết kiệm thời gian, chi phí cho hoạt động tuyển dụng.
              </p>
            </div>
            <div className="mt-8">
              <Image 
                src="/images/service/17732.png" 
                alt="Doanh nghiệp sử dụng TopCV Smart Recruitment Platform"
                width={400}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
          
          {/* Right side - For Recruiters */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Đối với Nhà tuyển dụng</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Quản lý tập trung tất cả các hoạt động tạo ra hiệu quả cho mỗi vị trí tuyển dụng theo chiến dịch tuyển dụng.
              </p>
              <p>
                Đăng tin tuyển dụng, tạo & quản lý nguồn ứng viên hiệu quả.
              </p>
              <p>
                Đánh giá ứng viên toàn diện dựa trên dữ liệu cụ thể, giúp định tuyển đưa ra quyết dụng chính xác, giảm tỷ lệ tuyển sai người.
              </p>
              <p>
                Có tư duy ứng dụng công nghệ trong tuyển dụng, xử lý nghiệp vụ tuyển dụng nhanh chóng, thông minh, tổ chức công việc hiệu quả.
              </p>
              <p>
                Chủ động lên kế hoạch & tối ưu chi phí tuyển dụng theo các số liệu đo lường.
              </p>
            </div>
            <div className="mt-8">
              <Image 
                src="/images/service/92836.png" 
                alt="Nhà tuyển dụng sử dụng TopCV Smart Recruitment Platform"
                width={400}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="flex flex-col md:flex-row justify-center gap-3">
            <a
              href="#"
              className="bg-white rounded text-green-600 text-center font-semibold px-6 py-2.5 border border-green-600 hover:bg-green-50"
            >
              Tư vấn tuyển dụng
            </a>
            <a
              href="#"
              className="bg-green-600 px-6 py-2.5 rounded text-white text-center border border-green-600 font-semibold hover:bg-green-500"
            >
              Đăng tin ngay
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
