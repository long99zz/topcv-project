import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      id="introduction-hero"
      style={{ backgroundImage: "url('/images/landing_background_header.png')" }}
      className="relative bg-center bg-no-repeat bg-cover md:min-h-[800px] md:p-[10px] pt-[80px]"
    >
      <div
        className="md:block hidden content-wrapper absolute top-0 left-0 right-0 bottom-0 max-w-[1500px] mx-auto leading-tight bg-no-repeat bg-contain bg-center h-[100%] md:z-[1]"
        style={{ backgroundImage: "url('/images/fixed_landing_header_campaign.png')" }}
      ></div>
      <div className="w-full max-w-screen-xl mx-auto px-4 relative leading-tight md:z-[2] md:bg-transparent bg-white">
        <div className="flex flex-col md:w-[60%] w-full md:pt-[180px] md:p-0 p-[20px] mb-[20px] md:mb-0">
          <h1 className="md:text-[48px] text-[24px] font-semibold text-gray-800">
            Đăng tin tuyển dụng,
          </h1>
          <h1 className="md:text-[48px] text-[24px] font-semibold text-gray-800 mb-[24px]">
            tìm kiếm ứng viên
            <div className="inline-block relative ml-2">
              <span className="relative z-10 bg-gradient-to-r from-green-500 to-teal-700 text-transparent bg-clip-text">hiệu quả</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-200 to-transparent opacity-50 transform -skew-y-3 z-0"></div>
            </div>
          </h1>
          <ul className="max-w-[620px] flex flex-col gap-[20px] justify-start text-gray-600">
            <li className="flex items-center">
              <span className="inline-block rounded-full w-5 h-5 bg-green-200 text-green-600 text-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-auto mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </span>
              <span>Đăng tin tuyển dụng miễn phí, đơn giản và nhanh chóng</span>
            </li>
            <li className="flex items-center">
              <span className="inline-block rounded-full w-5 h-5 bg-green-200 text-green-600 text-center mr-3">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-auto mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </span>
              <span>Nguồn ứng viên khổng lồ từ nhiều ngành nghề, lĩnh vực khác nhau</span>
            </li>
            <li className="flex items-center">
              <span className="inline-block rounded-full w-5 h-5 bg-green-200 text-green-600 text-center mr-3">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-auto mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </span>
              <span>Toppy AI đề xuất ứng viên tiềm năng, lọc thông tin nổi bật và tự động sắp xếp theo điểm phù hợp</span>
            </li>
          </ul>
          <div className="mt-[48px]">
            <div className="relative flex md:gap-[12px] gap-[8px] items-center md:flex-row flex-col">
              <a href="#" className="bg-white rounded text-green-600 text-center font-semibold md:px-[24px] md:py-[10px] px-[16px] py-[9px] border border-green-600 hover:bg-green-50 w-full md:w-fit">
                Tư vấn tuyển dụng
              </a>
              <a href="#" className="bg-green-600 md:px-[24px] md:py-[10px] px-[16px] py-[9px] rounded text-white text-center border border-green-600 font-semibold hover:bg-green-500 w-full md:w-fit">
                Đăng tin ngay
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="md:max-w-[40%] h-fit w-full md:pt-[100px]">
          <Image
            className="md:hidden block"
            src="/images/mobile_hero.png"
            width={500}
            height={500}
            alt="He thong dang tin tuyen dung mien phi"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
