import React from 'react';

const pressLogos = [
  { name: 'VTV', logo: '/images/press/vtv.svg' },
  { name: 'CafeF', logo: '/images/press/cafef.svg' },
  { name: 'Báo Đầu Tư', logo: '/images/press/baodautu.svg' },
  { name: 'CafeBiz', logo: '/images/press/cafebiz.svg' },
  { name: 'GenK', logo: '/images/press/genk.svg' },
  { name: 'VnExpress', logo: '/images/press/vnexpress.svg' },
];

const Press = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Báo chí nói về TopCV
          </h2>
          <p className="mt-4 text-gray-600">
            TopCV là nền tảng tuyển dụng được nhiều trang báo uy tín trong nước đưa tin
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {pressLogos.map((press, index) => (
            <div key={index} className="p-4">
               <div className="relative h-12 w-36 flex items-center justify-center">
                 {/* Using a placeholder div as we can't fetch external logos */}
                 <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-500 font-semibold">{press.name}</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Press;
