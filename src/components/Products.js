import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
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

    const element = document.getElementById('products');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const products = [
    {
      id: 1,
      image: '/images/products/cudo-truyen-thong.jpg',
      title: 'Cu Đơ Truyền Thống',
      description: 'Kẹo cu đơ nguyên chất từ mật mía Hà Tĩnh, hương vị đậm đà truyền thống.',
      price: '50.000đ/kg'
    },
    {
      id: 2,
      image: '/images/products/cudo-sua-dua.jpg',
      title: 'Cu Đơ Sữa Dừa',
      description: 'Sự kết hợp hoàn hảo giữa mật mía thơm ngon và sữa dừa béo ngậy.',
      price: '60.000đ/kg'
    },
    {
      id: 3,
      image: '/images/products/cudo-gung.jpg',
      title: 'Cu Đơ Gừng',
      description: 'Hương vị độc đáo với gừng tươi, ấm bụng, tốt cho sức khỏe.',
      price: '55.000đ/kg'
    },
    {
      id: 4,
      image: '/images/products/cudo-lac-rang.jpg',
      title: 'Cu Đơ Lạc Rang',
      description: 'Kẹo cu đơ kết hợp với lạc rang thơm bùi, giòn rụm.',
      price: '65.000đ/kg'
    },
    {
      id: 5,
      image: '/images/products/cudo-me-den.jpg',
      title: 'Cu Đơ Mè Đen',
      description: 'Hương vị bổ dưỡng với mè đen rang thơm, giàu dinh dưỡng.',
      price: '58.000đ/kg'
    },
    {
      id: 6,
      image: '/images/products/combo-qua-tang.jpg',
      title: 'Combo Quà Tặng',
      description: 'Hộp quà cao cấp gồm 3 loại cu đơ đặc biệt, hoàn hảo làm quà tặng.',
      price: '150.000đ/hộp'
    }
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-gradient-to-b from-white via-brand-light/30 to-brand-amber/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-brown to-brand-caramel bg-clip-text text-transparent mb-4">
            Sản Phẩm Của Chúng Tôi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-honey via-brand-caramel to-brand-brown mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá bộ sưu tập kẹo cu đơ đa dạng, được làm từ nguyên liệu tự nhiên 100%
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: isVisible ? 1 : 0
              }}
            >
              <ProductCard
                id={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`mt-12 text-center transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
          <p className="text-gray-600 mb-4 animate-pulse-slow">
            💝 Miễn phí vận chuyển cho đơn hàng trên 200.000đ
          </p>
          <button className="bg-gradient-to-r from-brand-brown to-brand-caramel hover:from-brand-caramel hover:to-brand-honey text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Xem Tất Cả Sản Phẩm →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
