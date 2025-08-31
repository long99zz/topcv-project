import React from 'react';
import Image from 'next/image';

const Features = () => {
  const features = [
    {
      title: "Đề xuất bởi Toppy AI",
      description: "Toppy AI sẽ tiến hành phân tích dữ liệu doanh nghiệp, nhu cầu tuyển dụng và hành vi tìm việc của ứng viên để đề xuất những hoạt động, giải pháp tuyển dụng giúp nhà tuyển dụng gia tăng hiệu quả tuyển dụng.",
      image: "/images/feature/suggestion.png",
      link: "https://tuyendung.topcv.vn/help/dinh-nghia/de-xuat-boi-toppy-ai/"
    },
    {
      title: "Chiến dịch Tuyển dụng",
      description: "Giúp doanh nghiệp hoàn thiện được cấu trúc cơ bản của quá trình tuyển dụng và quản lý được các nguồn mang lại hiệu quả cho hoạt động tuyển dụng đó. Từ đó, nhà tuyển dụng có thể tối ưu các phương pháp tìm nguồn ứng viên và tuyển dụng hiệu quả hơn.",
      image: "/images/feature/header_campaign.png",
      link: "https://tuyendung.topcv.vn/help/dinh-nghia/chien-dich-tuyen-dung/"
    },
    {
      title: "Tính năng quản lý CV",
      description: "Giúp nhà tuyển dụng quản lý kho CV ứng viên của mình một cách đầy đủ, có tính hệ thống và không bị mất mát dữ liệu.",
      image: "/images/feature/cvs-management.png",
      link: "https://tuyendung.topcv.vn/help/huong-dan-su-dung/quan-ly-ho-so-ung-vien/"
    },
    {
      title: "Hệ thống báo cáo tuyển dụng",
      description: "Giúp nhà tuyển dụng biết được chính xác số lượng CV ứng viên qua từng vòng từ vòng nhận CV đến đi làm. Đồng thời cũng đo lường chi phí tuyển dụng theo giá trị thực tế mà doanh nghiệp đã chi trả để tìm kiếm ứng viên.",
      image: "/images/feature/report-system.png",
      link: "https://tuyendung.topcv.vn/help/dinh-nghia/bao-cao-tuyen-dung/"
    },
    {
      title: "Hệ thống đánh giá ứng viên",
      description: "Với nền tảng TestCenter.vn, TopCV Smart Recruitment Platform giúp nhà tuyển dụng đánh giá ứng viên toàn diện và khách quan thông qua bài test online, từ đó tối ưu tỷ lệ chuyển đổi, tìm kiếm ứng viên tài năng từ nguồn CV ứng viên thu được từ Chiến dịch tuyển dụng.",
      image: "/images/feature/testcenter-on-phone.png",
      link: "https://tuyendung.topcv.vn/help/huong-dan-su-dung/danh-gia-cv-ung-vien/"
    },
    {
      title: "Gia tăng hiệu quả tuyển dụng thông qua hình thức trả phí",
      description: "Nhà tuyển dụng hoàn toàn chủ động trong việc lựa chọn và kích hoạt dịch vụ phù hợp để gia tăng số lượng CV ứng viên ứng tuyển và tìm kiếm ứng viên tài năng. Với các phương pháp tìm nguồn ứng viên thông minh, hiệu quả, nhà tuyển dụng sẽ dễ dàng tìm kiếm ứng viên cho Chiến dịch tuyển dụng của mình khi sử dụng TopCV Smart Recruitment Platform.",
      image: "/images/feature/service.png",
      link: "https://tuyendung.topcv.vn/help/dinh-nghia/dich-vu-tuyen-dung/"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm text-gray-600 mb-4">CORE FUNCTIONS OF TOPCV SMART RECRUITMENT PLATFORM</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Các tính năng chỉ có trên TopCV Smart Recruitment Platform
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Với sức mạnh công nghệ, TopCV Smart Recruitment Platform kế thừa những hiệu quả 
            hiện tại và mang đến trải nghiệm một cách hoàn toàn khác biệt, giúp doanh nghiệp 
            tuyển dụng hiệu quả trong thời đại số.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 text-center flex flex-col">
              <h3 className="text-xl font-bold text-gray-800 mb-4 h-16 flex items-center justify-center">
                {feature.title}
              </h3>
              <div className="mb-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={350}
                  height={200}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                {feature.description}
              </p>
              <a 
                href={feature.link} 
                className="text-sm inline-flex items-center justify-center text-primary hover:text-green-700 font-medium mt-auto"
              >
                Tìm hiểu thêm
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="relative flex md:gap-[12px] gap-[8px] items-center md:flex-row flex-col justify-center">
            <a href="#" className="bg-white rounded text-green-600 text-center font-semibold md:px-[24px] md:py-[10px] px-[16px] py-[9px] border border-green-600 hover:bg-green-50 w-full md:w-fit">
              Tư vấn tuyển dụng
            </a>
            <a href="#" className="bg-green-600 md:px-[24px] md:py-[10px] px-[16px] py-[9px] rounded text-white text-center border border-green-600 font-semibold hover:bg-green-500 w-full md:w-fit">
              Đăng tin ngay
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
