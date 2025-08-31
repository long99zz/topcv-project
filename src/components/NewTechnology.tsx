import React from 'react';
import Image from 'next/image';

const NewTechnology = () => {
  return (
    <div className="bg-white py-10 md:py-20">
      <div className="max-w-screen-xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-8 md:mb-10">
          Công nghệ đăng tin tuyển dụng mới. Tính năng mới. Trải nghiệm mới
        </h2>
        <div className="bg-[#F4F5F5] rounded-lg p-4 md:flex md:items-center md:flex-row-reverse">
          <div className="md:w-1/2">
            <div className="text-primary uppercase mb-2.5">
              Ai in recruitment
            </div>
            <h2 className="text-lg md:text-2xl border-l-4 border-primary font-semibold mb-2.5 pl-2">
              Tương lai của tuyển dụng
            </h2>
            <p className="md:text-sm font-light text-gray-500">
              Toppy AI là &quot;trái tim” của bản cập nhật Smart Recruitment Platform. Toppy AI được phát triển bởi đội
              ngũ kỹ sư
              tài năng của TOPCV Việt Nam thông qua việc ứng dụng công nghệ Trí tuệ nhân tạo (AI) và Học máy
              (Machine
              Learning). Toppy AI có khả năng phân tích yêu cầu, thói quen, hành vi của nhà tuyển dụng và
              ứng viên, đồng
              thời khai thác tối đa lượng dữ liệu lớn của TopCV, từ đó đưa ra các phán đoán và đề xuất về những việc có thể làm để tuyển dụng hiệu quả hơn, kết nối đúng nhu cầu tuyển dụng của doanh nghiệp với các ứng viên phù hợp.
            </p>
            <div className="text-center md:text-left mt-6">
              <div className="relative flex md:gap-3 gap-2 items-center md:flex-row flex-col">
                <a href="#" className="bg-white rounded text-primary text-center font-semibold md:px-6 md:py-2.5 px-4 py-2.5 border border-primary hover:bg-green-50 w-full md:w-fit">
                  Tư vấn tuyển dụng
                </a>
                <a href="#" className="bg-primary md:px-6 md:py-2.5 px-4 py-2.5 rounded text-white text-center border border-primary font-semibold hover:bg-green-700 w-full md:w-fit">
                  Đăng tin ngay
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image src="/images/new-feed.png" width={600} height={400} title="Trang web đăng tin tuyển dụng miễn phí" alt="Trang web dang tin tuyen dung mien phi" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTechnology;
