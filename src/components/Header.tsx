import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white fixed w-full top-0 right-0 z-[100] md:border-b">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className="md:flex md:items-center md:h-[80px]">
          <div className="relative h-[68px] md:h-auto flex items-center justify-between md:justify-start md:pr-[30px]">
            <a href="#" className="business-image">
              <Image src="/images/topcv-logo.png" width={100} height={25} alt="topcv logo" className="md:mb-[-10px]" />
            </a>
            <button type="button" className="md:hidden h-[68px] w-[68px] flex items-center justify-center" id="mb-menu-btn">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          <nav id="mb-menu" className="hidden w-full md:flex">
            <ul className="p-0 m-0 list-none flex flex-col md:flex-row text-sm" id="navbar-menu">
              <li><a className="text-green-600 hover:text-green-600 block px-3 py-5 text-center font-medium" href="#">Giới thiệu</a></li>
              <li><a className="hover:text-green-600 block px-3 py-5 text-center font-medium" href="#">Dịch vụ</a></li>
              <li><a className="hover:text-green-600 block px-3 py-5 text-center font-medium" href="#">Báo giá</a></li>
              <li><a className="hover:text-green-600 block px-3 py-5 text-center font-medium" href="#">Hỗ trợ</a></li>
              <li><a className="hover:text-green-600 block px-3 py-5 text-center font-medium" href="#">Blog tuyển dụng</a></li>
            </ul>
            <div className="md:flex md:items-center md:justify-end md:py-0 md:ml-auto md:gap-[8px]">
              <div className="items-center gap-4 hidden md:flex">
                <div className="flex items-center gap-2">
                  <Image src="/images/flag-vn.svg" width={28} height={20} alt="flag" />
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                  </svg>
                </div>
                <a href="#" className="flex items-center gap-2 text-sm">
                  <i className="fa-solid fa-phone-volume text-primary"></i>
                  <span>Tư vấn tuyển dụng</span>
                </a>
              </div>
              <div className="md:flex hidden items-center justify-center gap-[12px]">
                <a href="#" className="bg-white border border-green-600 w-fit py-[9px] px-[16px] rounded block text-green-600 text-center whitespace-nowrap">Đăng nhập</a>
                <a href="#" className="bg-green-600 border border-green-600 py-[9px] px-[16px] rounded block text-white text-center whitespace-nowrap">Đăng tin ngay</a>
              </div>
              <div className="md:hidden flex flex-col items-center justify-center gap-[12px] w-full px-[16px] py-4">
                <a href="#" className="bg-green-600 border border-green-600 py-[9px] px-[16px] rounded block text-white text-center whitespace-nowrap w-full">Đăng tin ngay</a>
                <a href="#" className="bg-white border border-green-600 py-[9px] px-[16px] rounded block text-green-600 text-center whitespace-nowrap w-full">Đăng nhập</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
