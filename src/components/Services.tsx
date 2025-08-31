import React from 'react';
import Image from 'next/image';

const Services = () => {
  const services = [
    {
      title: "Đăng tin tuyển dụng miễn phí",
      features: [
        "Đăng tin tuyển dụng miễn phí và không giới hạn số lượng.",
        "Đăng tin tuyển dụng dễ dàng, không quá 1 phút.",
        "Tiếp cận nguồn CV ứng viên khổng lồ, tìm kiếm ứng viên từ kho dữ liệu hơn 5 triệu hồ sơ.",
        "Dễ dàng kiểm duyệt và đăng tin trong 24h."
      ],
      image: "/images/service/Macbook Pro Flying Mockup.png",
      isMainService: true
    },
    {
      title: "Top Jobs & Top Standard - Đăng tin tuyển dụng",
      features: [
        "Tăng lượt tiếp cận người tìm việc thêm 300% khi đăng tuyển.",
        "Tin tuyển dụng hiển thị ở những vị trí nổi bật.",
        "Đẩy tin tuyển dụng lên vị trí đầu trong kết quả tìm kiếm việc làm trên trang web đăng tin tuyển dụng.",
        "Tự động gợi ý tin tuyển dụng với ứng viên phù hợp, giúp tuyển dụng hiệu quả hơn."
      ],
      image: "/images/service/1.png",
      isMainService: false
    },
    {
      title: "Top Credit - Linh hoạt sử dụng các tiện ích trên nền tảng",
      features: [
        "Sử dụng Credit để chủ động kích hoạt ngay các tiện ích trên nền tảng",
        "Linh hoạt lựa chọn tiện ích theo chiến lược và nhu cầu tuyển dụng riêng để tăng tốc hiệu quả tuyển dụng",
        "Dễ dàng lựa chọn và kết hợp các tiện ích cùng lúc theo chính sách sử dụng Credit trên từng tiện ích hiện hành",
        "Tăng cơ hội tiếp cận 6.900.000+ CV ứng viên với hơn 50% ứng viên có kinh nghiệm từ 3 năm trở lên"
      ],
      image: "/images/service/001.png",
      isMainService: false
    },
    {
      title: "CV đề xuất",
      features: [
        "Đa dạng hóa nguồn CV ứng viên mà không cần mất công tìm kiếm ứng viên.",
        "Tiết kiệm thời gian tuyển dụng nhân sự.",
        "Tỷ lệ ứng viên phù hợp lên đến 40%.",
        "Dịch vụ có cam kết CV đang tìm kiếm công việc."
      ],
      image: "/images/service/ThanhMinh.png",
      isMainService: false
    },
    {
      title: "Top Branding - Truyền thông thương hiệu hàng đầu",
      features: [
        "Giúp thương hiệu, sản phẩm, dịch vụ, chương trình của doanh nghiệp được tiếp cận với hơn 5 triệu ứng viên tiềm năng trên TopCV.",
        "Chi phí hợp lý hơn so với các dịch vụ quảng cáo banner tương tự.",
        "Hỗ trợ tư vấn, thiết kế banner chuyên nghiệp.",
        "Xây dựng trang tuyển dụng uy tín, giúp doanh nghiệp tìm kiếm ứng viên, tuyển dụng hiệu quả."
      ],
      image: "/images/service/iMac Pro Front View Mockup.png",
      isMainService: false
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm text-gray-600 mb-4">RECRUITMENT SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Dịch vụ đăng tin tuyển dụng
          </h2>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {service.title}
                </h3>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="relative flex md:gap-[12px] gap-[8px] items-center md:flex-row flex-col">
                  <a href="#" className="bg-white rounded text-green-600 text-center font-semibold md:px-[24px] md:py-[10px] px-[16px] py-[9px] border border-green-600 hover:bg-green-50 w-full md:w-fit">
                    Tư vấn tuyển dụng
                  </a>
                  <a href="#" className="bg-green-600 md:px-[24px] md:py-[10px] px-[16px] py-[9px] rounded text-white text-center border border-green-600 font-semibold hover:bg-green-500 w-full md:w-fit">
                    Đăng tin ngay
                  </a>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
