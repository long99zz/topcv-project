import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600">
      <div className="border-t border-gray-200 p-5 md:p-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="md:flex md:items-start md:justify-between">
            <div className="md:w-1/3 md:mr-28">
              <a className="flex py-5 justify-center md:justify-start" href="#">
                <Image width={150} height={40} src="/images/topcv-logo-cropped.png" alt="topcv logo" />
              </a>
              <div className="flex flex-row justify-between mb-9">
                {/* Logos can be added here */}
              </div>
              <h5 className="font-medium text-gray-800 mb-6 text-lg">Ứng dụng tải xuống</h5>
              <p className="flex items-center justify-start mb-9">
                <a className="block mr-4" target="_blank" href="#">
                  <Image width={150} height={50} className="max-h-[50px]" src="/images/appstore.jpg" alt="app store" />
                </a>
                <a className="block" target="_blank" href="#">
                  <Image width={150} height={50} className="max-h-[50px]" src="/images/googleplay.jpg" alt="google play store" />
                </a>
              </p>
            </div>

            <div className="md:w-2/3 md:flex md:flex-nowrap">
              <div className="grid grid-cols-2 gap-4 md:w-2/3">
                <div>
                  <h5 className="font-semibold text-lg text-gray-800 mb-4">Về TopCV</h5>
                  <ul>
                    <li className="mb-2 text-base text-gray-500 hover:text-green-600"><a href="#">Giới thiệu</a></li>
                    <li className="mb-2 text-base text-gray-500 hover:text-green-600"><a href="#">Tuyển dụng</a></li>
                    <li className="mb-2 text-base text-gray-500 hover:text-green-600"><a href="#">Liên hệ</a></li>
                    <li className="mb-2 text-base text-gray-500 hover:text-green-600"><a href="#">Góc báo chí</a></li>
                    <li className="mb-2 text-base text-gray-500 hover:text-green-600"><a href="#">Chính sách bảo mật</a></li>
                    <li className="mb-2 text-base text-gray-500 hover:text-green-600"><a href="#">Điều khoản dịch vụ</a></li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-lg text-gray-800 mb-4">Ứng viên</h5>
                  <ul>
                    <li className="mb-2 text-base text-gray-500 hover:text-green-600"><a href="#">Tìm việc làm</a></li>
                    <li className="mb-2 text-base text-gray-500 hover:text-green-600"><a href="#">Khoá học</a></li>
                    <li className="mb-2 text-base text-gray-500 hover:text-green-600"><a href="#">Trắc nghiệm MBTI</a></li>
                    <li className="mb-2 text-base text-gray-500 hover:text-green-600"><a href="#">Hướng dẫn viết CV</a></li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-1 mt-8 md:mt-0 md:w-1/3">
                 <div>
                    <h5 className="font-semibold text-lg text-gray-800 mb-4">Đối tác</h5>
                     <ul>
                        <li className="mb-2 text-base text-gray-500 hover:text-green-600"><a href="#">Doanh nghiệp</a></li>
                        <li className="mb-2 text-base text-gray-500 hover:text-green-600"><a href="#">Trường đại học</a></li>
                     </ul>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 bg-white p-5">
        <div className="max-w-screen-xl mx-auto text-center text-sm text-gray-500">
          © 2014 - 2025 TopCV Vietnam JSC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
