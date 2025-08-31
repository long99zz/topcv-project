import React from 'react';
import Image from 'next/image';

const Statistics = () => {
  const stats = [
    {
      number: "2.100.000+",
      description: "Ứng viên đang bật tìm việc trung bình/thời điểm"
    },
    {
      number: "200.000+",
      description: "Doanh nghiệp tuyển dụng sử dụng dịch vụ tuyển dụng hiệu quả của TopCV"
    },
    {
      number: "540.000+",
      description: "Nhà tuyển dụng sử dụng thường xuyên để đăng tin tuyển dụng, tìm kiếm ứng viên tiềm năng chỉ với những thao tác đơn giản, nhanh gọn"
    },
    {
      number: "200.000+",
      description: "Ứng viên tạo mới tài khoản trên TopCV mỗi tháng"
    },
    {
      number: "9.000.000+",
      description: "Lượt ứng viên truy cập hàng tháng, là một trong những trang tuyển dụng có lượng truy cập lớn nhất tại Việt Nam tại thời điểm này."
    },
    {
      number: "9.500.000+",
      description: "Hồ sơ ứng viên, trong đó có 50% là ứng viên có kinh nghiệm từ 3 năm trở lên"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm text-green-600 mb-4 font-semibold">FIGURES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Những con số của trang tuyển dụng TopCV
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-lg">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-4">
                {stat.number}
              </div>
              <p className="text-gray-700 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Consultation Banner Section */}
      <div className="bg-gradient-to-r from-slate-700 via-teal-600 to-green-500 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Đâu là giải pháp phù hợp cho doanh nghiệp của bạn?
            </h2>
            <p className="text-lg">
              Hãy để lại thông tin và các chuyên viên tư vấn tuyển dụng của TopCV sẽ liên hệ ngay với bạn
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left side - Consultation Banner */}
            <div className="relative">
              <div className="relative bg-green-500 rounded-2xl overflow-hidden shadow-2xl h-[580px]">
                {/* Banner background image */}
                <Image 
                  src="/images/banner_form_center.png" 
                  alt="TopCV Consultation Banner" 
                  width={600}
                  height={580}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right side - Consultation Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl h-[580px] flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-green-600 mb-2 text-center">
                Đăng ký nhận tư vấn
              </h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Họ và tên</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                    </span>
                    <input 
                      type="text" 
                      placeholder="Họ và tên" 
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                    </span>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Số điện thoại</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.759a11.03 11.03 0 004.28 4.28l.759-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                    </span>
                    <input 
                      type="tel" 
                      placeholder="Số điện thoại" 
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Tỉnh/Thành phố</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                    </span>
                    <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 text-gray-600 bg-white appearance-none">
                      <option>Hà Nội</option>
                      <option>Hồ Chí Minh</option>
                      <option>Đà Nẵng</option>
                      <option>Cần Thơ</option>
                    </select>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Nhu cầu tư vấn</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" /></svg>
                    </span>
                    <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 text-gray-600 bg-white appearance-none">
                      <option>Chọn nhu cầu tư vấn</option>
                      <option>Đăng tin tuyển dụng</option>
                      <option>Tìm kiếm ứng viên</option>
                      <option>Dịch vụ đánh giá năng lực</option>
                    </select>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </div>
                </div>

                <button type="submit" className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2 mt-6 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  <span>Gửi yêu cầu tư vấn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
