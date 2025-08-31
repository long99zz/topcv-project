import React from 'react';
import Image from 'next/image';

const Partners = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm text-green-600 mb-4 font-semibold">OUR PARTNERS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Khách hàng tiêu biểu và đối tác truyền thông của TopCV
          </h2>
        </div>
        
        {/* Two columns layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Khách hàng tiêu biểu */}
          <div>
            <div className="border-l-4 border-green-500 pl-4 mb-8">
              <h3 className="text-2xl font-bold text-gray-800">Khách hàng tiêu biểu</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <Image
                  src="/images/partner/edupia.png"
                  alt="Edupia"
                  width={100}
                  height={50}
                  className="max-w-full h-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <Image
                  src="/images/partner/teky.png"
                  alt="Teky"
                  width={100}
                  height={50}
                  className="max-w-full h-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <Image
                  src="/images/partner/shinhan-bank.png"
                  alt="Shinhan Bank"
                  width={100}
                  height={50}
                  className="max-w-full h-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <Image
                  src="/images/partner/viettel.png"
                  alt="Viettel"
                  width={100}
                  height={50}
                  className="max-w-full h-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <Image
                  src="/images/partner/techcombank.png"
                  alt="Techcombank"
                  width={100}
                  height={50}
                  className="max-w-full h-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <Image
                  src="/images/partner/fpt-software.png"
                  alt="FPT Software"
                  width={100}
                  height={50}
                  className="max-w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Đối tác truyền thông */}
          <div>
            <div className="border-l-4 border-green-500 pl-4 mb-8">
              <h3 className="text-2xl font-bold text-gray-800">Đối tác truyền thông</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <Image
                  src="/images/partner/genk.png"
                  alt="Genk"
                  width={100}
                  height={50}
                  className="max-w-full h-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <Image
                  src="/images/partner/vtc10.png"
                  alt="VTC10"
                  width={100}
                  height={50}
                  className="max-w-full h-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <Image
                  src="/images/partner/vtv1.png"
                  alt="VTV1"
                  width={100}
                  height={50}
                  className="max-w-full h-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <Image
                  src="/images/partner/cafebiz.png"
                  alt="CafeBiz"
                  width={100}
                  height={50}
                  className="max-w-full h-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <Image
                  src="/images/partner/vtv2.png"
                  alt="VTV2"
                  width={100}
                  height={50}
                  className="max-w-full h-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <Image
                  src="/images/partner/vtv6.png"
                  alt="VTV6"
                  width={100}
                  height={50}
                  className="max-w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
