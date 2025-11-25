import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-brown mb-4">
            Về Chúng Tôi
          </h2>
          <div className="w-24 h-1 bg-brand-green mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/about/about-us.jpg"
                alt="Cu Đơ Hà Tĩnh - Về chúng tôi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-2xl font-bold">Hơn 30 năm kinh nghiệm</p>
                <p className="text-lg">Sản xuất kẹo cu đơ truyền thống</p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-3xl font-bold text-brand-brown">
              Câu Chuyện Của Chúng Tôi
            </h3>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              <span className="font-semibold text-brand-brown">Cu Đơ Hà Tĩnh</span> là thương hiệu kẹo mía truyền thống 
              được thành lập từ năm 1990, mang trong mình sứ mệnh bảo tồn và phát triển 
              hương vị đặc trưng của quê hương Hà Tĩnh.
            </p>

            <div className="bg-brand-yellow/20 border-l-4 border-brand-green p-4 rounded">
              <p className="text-gray-700 italic">
                "Mỗi viên kẹo cu đơ là kết tinh từ tình yêu quê hương và sự tận tâm 
                của người thợ làng nghề truyền thống."
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-brand-green text-2xl">🌾</span>
                <div>
                  <h4 className="font-semibold text-brand-brown text-lg">Nguyên Liệu Tự Nhiên</h4>
                  <p className="text-gray-600">
                    100% mật mía nguyên chất từ vùng trồng mía nổi tiếng Hà Tĩnh, 
                    không chất bảo quản, không hương liệu tổng hợp.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-brand-green text-2xl">👨‍🍳</span>
                <div>
                  <h4 className="font-semibold text-brand-brown text-lg">Công Thức Truyền Thống</h4>
                  <p className="text-gray-600">
                    Giữ gìn công thức nấu kẹo gia truyền hơn 30 năm, kết hợp 
                    công nghệ hiện đại đảm bảo vệ sinh an toàn thực phẩm.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-brand-green text-2xl">❤️</span>
                <div>
                  <h4 className="font-semibold text-brand-brown text-lg">Tâm Huyết & Chất Lượng</h4>
                  <p className="text-gray-600">
                    Mỗi sản phẩm được kiểm tra kỹ lưỡng, đảm bảo chất lượng 
                    tốt nhất đến tay người tiêu dùng.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button className="bg-brand-brown hover:bg-brand-brown/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
                Tìm Hiểu Thêm →
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-brand-yellow/10 rounded-lg">
            <p className="text-4xl font-bold text-brand-brown mb-2">30+</p>
            <p className="text-gray-600">Năm Kinh Nghiệm</p>
          </div>
          <div className="text-center p-6 bg-brand-yellow/10 rounded-lg">
            <p className="text-4xl font-bold text-brand-brown mb-2">10k+</p>
            <p className="text-gray-600">Khách Hàng</p>
          </div>
          <div className="text-center p-6 bg-brand-yellow/10 rounded-lg">
            <p className="text-4xl font-bold text-brand-brown mb-2">15+</p>
            <p className="text-gray-600">Sản Phẩm</p>
          </div>
          <div className="text-center p-6 bg-brand-yellow/10 rounded-lg">
            <p className="text-4xl font-bold text-brand-brown mb-2">100%</p>
            <p className="text-gray-600">Tự Nhiên</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
