import React from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&q=80',
      title: 'Cu Đơ Truyền Thống',
      description: 'Kẹo cu đơ nguyên chất từ mật mía Hà Tĩnh, hương vị đậm đà truyền thống.',
      price: '50.000đ/kg'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1514517521153-1be72277b32f?w=400&q=80',
      title: 'Cu Đơ Sữa Dừa',
      description: 'Sự kết hợp hoàn hảo giữa mật mía thơm ngon và sữa dừa béo ngậy.',
      price: '60.000đ/kg'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=400&q=80',
      title: 'Cu Đơ Gừng',
      description: 'Hương vị độc đáo với gừng tươi, ấm bụng, tốt cho sức khỏe.',
      price: '55.000đ/kg'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400&q=80',
      title: 'Cu Đơ Lạc Rang',
      description: 'Kẹo cu đơ kết hợp với lạc rang thơm bùi, giòn rụm.',
      price: '65.000đ/kg'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1595475207225-428b62bda831?w=400&q=80',
      title: 'Cu Đơ Mè Đen',
      description: 'Hương vị bổ dưỡng với mè đen rang thơm, giàu dinh dưỡng.',
      price: '58.000đ/kg'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1571506165871-ee72a35f85b4?w=400&q=80',
      title: 'Combo Quà Tặng',
      description: 'Hộp quà cao cấp gồm 3 loại cu đơ đặc biệt, hoàn hảo làm quà tặng.',
      price: '150.000đ/hộp'
    }
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-gradient-to-b from-white to-brand-yellow/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-brown mb-4">
            Sản Phẩm Của Chúng Tôi
          </h2>
          <div className="w-24 h-1 bg-brand-green mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá bộ sưu tập kẹo cu đơ đa dạng, được làm từ nguyên liệu tự nhiên 100%
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            💝 Miễn phí vận chuyển cho đơn hàng trên 200.000đ
          </p>
          <button className="bg-brand-green hover:bg-brand-green/90 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Xem Tất Cả Sản Phẩm →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
