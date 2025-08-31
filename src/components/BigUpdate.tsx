import React from 'react';
import Image from 'next/image';

const BigUpdate = () => {
  return (
    <div className="bg-[#F4F5F5] py-10 md:py-20">
      <div className="max-w-screen-xl mx-auto flex items-center flex-col px-5 md:flex-row md:px-0">
        <div className="md:w-1/2">
          <div className="uppercase text-primary mb-2.5">
            Big Update
          </div>
          <h2 className="md:text-2xl text-lg leading-tight border-l-4 border-primary font-semibold mb-2.5 pl-2">
            TopCV Smart Recruitment Platform
          </h2>
          <p className="md:text-sm font-light text-gray-500">
            Nền tảng công nghệ ứng dụng sâu trí tuệ nhân tạo (AI) và Recruitment
            Marketing, mang
            đến các giải pháp toàn diện giúp doanh nghiệp giải quyết đồng thời các bài toán xoay quanh vấn
            đề tuyển
            dụng, từ việc tạo nguồn CV, sàng lọc hồ sơ ứng viên cho đến đánh giá ứng viên và đo lường hiệu quả.
          </p>
          <div className="pt-6">
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
          <Image className="mt-4 md:mt-0" src="/images/bg-big-update.png" width={685} height={350}
            title="Cập nhật mới của trang đăng tin tuyển dụng miễn phí"
            alt="Cap nhat moi cua trang dang tin tuyen dung mien phi" />
        </div>
      </div>
    </div>
  );
};

export default BigUpdate;
