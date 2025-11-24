import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Merchandise = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('merchandise');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const merchandise = [
    {
      id: 1,
      name: 'Áo Thun Brand',
      price: '299.000đ',
      image: '/images/merchandise/ao-thun.jpg',
      description: 'Áo thun cotton cao cấp với logo Cu Đơ Hà Tĩnh',
      badge: 'Mới'
    },
    {
      id: 2,
      name: 'Túi Vải Canvas',
      price: '149.000đ',
      image: '/images/merchandise/tui-vai.jpg',
      description: 'Túi vải bền đẹp, thân thiện môi trường',
      badge: 'Hot'
    },
    {
      id: 3,
      name: 'Ly Sứ',
      price: '199.000đ',
      image: '/images/merchandise/ly-su.jpg',
      description: 'Ly sứ cao cấp in logo thương hiệu',
      badge: null
    },
    {
      id: 4,
      name: 'Móc Khóa',
      price: '49.000đ',
      image: '/images/merchandise/moc-khoa.jpg',
      description: 'Móc khóa kim loại thiết kế độc đáo',
      badge: 'Sale'
    },
    {
      id: 5,
      name: 'Nón Lưỡi Trai',
      price: '179.000đ',
      image: '/images/merchandise/non.jpg',
      description: 'Nón thời trang với logo thêu tinh tế',
      badge: 'Mới'
    },
    {
      id: 6,
      name: 'Sổ Tay',
      price: '89.000đ',
      image: '/images/merchandise/so-tay.jpg',
      description: 'Sổ tay bìa cứng chất lượng cao',
      badge: null
    }
  ];

  return (
    <section id="merchandise" className="py-16 md:py-24 bg-gradient-to-b from-brand-amber/20 via-white to-brand-light/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-brown to-brand-caramel bg-clip-text text-transparent mb-4">
            Sản Phẩm Nhận Dạng Thương Hiệu
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-honey via-brand-caramel to-brand-brown mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bộ sưu tập sản phẩm mang đậm dấu ấn thương hiệu Cu Đơ Hà Tĩnh
          </p>
        </div>

        {/* Merchandise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {merchandise.map((item, index) => (
            <div
              key={item.id}
              onClick={() => navigate(`/merchandise/${item.id}`)}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group cursor-pointer h-full flex flex-col ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: isVisible ? 1 : 0
              }}
            >
              <div className="relative h-72 overflow-hidden flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {item.badge && (
                  <div className={`absolute top-4 right-4 px-4 py-2 rounded-full font-bold text-sm shadow-lg ${
                    item.badge === 'Mới' ? 'bg-gradient-to-r from-brand-green to-green-500 text-white' :
                    item.badge === 'Hot' ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white' :
                    item.badge === 'Sale' ? 'bg-gradient-to-r from-brand-yellow to-orange-400 text-brand-brown' :
                    'bg-brand-brown text-white'
                  }`}>
                    {item.badge}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-brand-brown mb-2">{item.name}</h3>
                <p className="text-brand-green font-bold text-xl mb-3">{item.price}</p>
                <p className="text-gray-700 mb-4 flex-grow">{item.description}</p>
                <button className="w-full bg-gradient-to-r from-brand-brown to-brand-green hover:from-brand-green hover:to-brand-brown text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg">
                  Đặt Hàng Ngay 🛒
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className={`mt-12 text-center transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
          <button 
            onClick={() => navigate('/brand')}
            className="bg-gradient-to-r from-brand-brown to-brand-caramel hover:from-brand-caramel hover:to-brand-honey text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Xem Thêm Tại Trang Thương Hiệu →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Merchandise;
