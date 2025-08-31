import React from 'react';
import Image from 'next/image';

const awards = [
  {
    image: '/images/about/top-100.png',
    category: 'BRAND',
    title: 'Top 100 Thương hiệu hàng đầu Việt Nam 2020 tại Vietnam Top Brands do HTV tổ chức',
    link: 'https://topcv.com.vn/blogs/3706/'
  },
  {
    image: '/images/about/startup.png',
    category: 'STARTUP',
    title: 'Top 15 Startups được Google lựa chọn tham gia Google for Startups Accelerator: Southeast Asia',
    link: 'https://topcv.com.vn/blogs/topcv-thuoc-top-15-startups-duoc-google-lua-chon-tham-gia-google-for-startups-accelerator-southeast-asia/'
  },
  {
    image: '/images/about/technology-product.png',
    category: 'TECH',
    title: 'Bộ đôi giải thưởng Sản phẩm công nghệ số Make in Viet Nam 2022',
    link: 'https://topcv.com.vn/blogs/topcv-viet-nam-nhan-bo-doi-giai-thuong-san-pham-cong-nghe-so-make-in-viet-nam-2022-2/'
  },
  {
    image: '/images/about/top-10.png',
    category: 'BRAND',
    title: 'Cú đúp giải thưởng tại Lễ vinh danh Top 10 doanh nghiệp CNTT Việt Nam 2022',
    link: 'https://topcv.com.vn/blogs/topcv-nhan-cu-dup-giai-thuong-tai-le-vinh-danh-top-10-doanh-nghiep-cntt-viet-nam-2022/'
  }
];

const Awards = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm text-green-600 mb-4 font-semibold">OUR AWARDS</p>
          <h2 className="text-3xl font-bold text-gray-800">
            Giải thưởng tiêu biểu
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="flex items-start gap-6 p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0">
                <Image 
                  src={award.image}
                  alt={award.title}
                  width={100}
                  height={100}
                  objectFit="contain"
                />
              </div>
              <div className="flex-1">
                <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {award.category}
                </span>
                <p className="text-gray-800 mb-4 leading-relaxed">
                  {award.title}
                </p>
                <a 
                  href={award.link}
                  className="text-primary font-semibold hover:underline flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Đọc thêm</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
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

export default Awards;
