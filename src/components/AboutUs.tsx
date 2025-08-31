import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <p className="text-sm text-green-600 mb-4 font-semibold">ABOUT US</p>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Về chúng tôi
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                TopCV Việt Nam là công ty hàng đầu trong lĩnh vực HR Tech tại Việt Nam, xoay quanh hệ sinh thái nhân sự với 4 sản phẩm chủ lực:
              </p>
              <p>
                Nền tảng tuyển dụng thông minh TopCV, Nền tảng thiết lập và đánh giá năng lực nhân viên TestCenter, Nền tảng quản lý và gia tăng trải nghiệm nhân viên HappyTime và Giải pháp quản trị tuyển dụng hiệu suất cao SHring.
              </p>
              <p>
                TopCV đang sở hữu hơn 6,9 triệu người dùng, 190.000 khách hàng lớn và đã kết nối thành công hàng triệu lượt ứng viên mỗi năm tới các doanh nghiệp phù hợp.
              </p>
              <p>
                Thông qua việc nghiên cứu và không ngừng phát triển năng lực công nghệ lõi vượt trội (đặc biệt là ứng dụng sâu Trí tuệ nhân tạo - AI), TopCV kỳ vọng mang tới các giải pháp nhân sự hiệu quả hơn nữa trong tương lai: tối ưu các trải nghiệm số cho ứng viên, từ đó giúp doanh nghiệp thu hút và giữ chân nhân tài, hướng tới một nền kinh tế Việt Nam phát triển bền vững.
              </p>
            </div>
            <div className="mt-8 flex flex-col md:flex-row gap-3">
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
          
          {/* Right side - Image */}
          <div>
            <Image 
              src="/images/about/about-mobile.png" 
              alt="Nhân sự của TopCV"
              width={500}
              height={400}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
