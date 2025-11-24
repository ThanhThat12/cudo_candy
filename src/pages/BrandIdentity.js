import React, { useState, useEffect } from 'react';
import Merchandise from '../components/Merchandise';

const BrandIdentity = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // const brandColors = [
  //   { name: 'Brand Brown', color: '#8B4513', hex: '#8B4513', usage: 'Màu chủ đạo - Header, Footer, Buttons' },
  //   { name: 'Brand Yellow', color: '#FFD700', hex: '#FFD700', usage: 'Màu nhấn - CTA, Highlights' },
  //   { name: 'Brand Green', color: '#228B22', hex: '#228B22', usage: 'Màu phụ - Success, Badges' },
  // ];

  // const brandAssets = [
  //   {
  //     title: 'Logo Chính',
  //     description: 'Logo chính thức của Cu Đơ Hà Tĩnh',
  //     icon: '🍬',
  //     image: '%PUBLIC_URL%/logo.png',
  //     type: 'primary'
  //   },
  //   {
  //     title: 'Typography',
  //     description: 'Font chữ: Inter, Segoe UI',
  //     icon: 'Aa',
  //     type: 'typography'
  //   },
  //   {
  //     title: 'Iconography',
  //     description: 'Bộ icon thương hiệu',
  //     icon: '✨',
  //     type: 'icons'
  //   },
  //   {
  //     title: 'Pattern',
  //     description: 'Họa tiết đặc trưng',
  //     icon: '🎨',
  //     type: 'pattern'
  //   }
  // ];

  const brandValues = [
    {
      icon: '🌿',
      title: 'Tự Nhiên 100%',
      description: 'Cam kết sử dụng nguyên liệu tự nhiên, không chất bảo quản'
    },
    {
      icon: '🏆',
      title: 'Chất Lượng Hàng Đầu',
      description: 'Quy trình sản xuất nghiêm ngặt, đảm bảo chất lượng tốt nhất'
    },
    {
      icon: '❤️',
      title: 'Tình Yêu Quê Hương',
      description: 'Lưu giữ và phát huy hương vị truyền thống Hà Tĩnh'
    },
    {
      icon: '🤝',
      title: 'Uy Tín - Tin Cậy',
      description: 'Xây dựng niềm tin với khách hàng qua từng sản phẩm'
    }
  ];

  const packaging = [
    {
      name: 'Túi Zip Nhỏ',
      size: '500g',
      image: '/images/packaging/tui-zip-nho.jpg',
      description: 'Thiết kế tiện lợi, dễ bảo quản'
    },
    {
      name: 'Túi Zip Vừa',
      size: '1kg',
      image: '/images/packaging/tui-zip-vua.jpg',
      description: 'Kích thước phổ biến nhất'
    },
    {
      name: 'Hộp Quà Cao Cấp',
      size: 'Gift Box',
      image: '/images/packaging/hop-qua.jpg',
      description: 'Sang trọng, phù hợp làm quà tặng'
    }
  ];

  const brandStory = {
    timeline: [
      {
        year: '1950s',
        title: 'Khởi Nguồn',
        description: 'Nghề làm kẹo cu đơ bắt đầu phát triển tại Hà Tĩnh'
      },
      {
        year: '1980s',
        title: 'Phát Triển',
        description: 'Kẹo cu đơ trở thành đặc sản nổi tiếng của vùng đất Hà Tĩnh'
      },
      {
        year: '2010s',
        title: 'Hiện Đại Hóa',
        description: 'Ứng dụng công nghệ hiện đại, mở rộng thị trường'
      },
      {
        year: '2025',
        title: 'Toàn Quốc',
        description: 'Phát triển thương hiệu, đưa sản phẩm đi khắp Việt Nam'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-brand-yellow/5 to-brand-green/5">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="Brand Identity"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-brown/90 via-brand-brown/70 to-brand-brown/90"></div>
        </div>
        
        <div className={`relative z-10 text-center text-white px-4 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Nhận Diện Thương Hiệu
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Cu Đơ Hà Tĩnh - Nơi Truyền Thống Gặp Gỡ Hiện Đại
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-brand-brown mb-4">Câu Chuyện Thương Hiệu</h2>
            <div className="w-24 h-1 bg-brand-green mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Từ làng nghề truyền thống đến thương hiệu hiện đại, chúng tôi tự hào mang đến sản phẩm chất lượng,
              lưu giữ hương vị quê hương Hà Tĩnh.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-brand-honey via-brand-caramel to-brand-brown"></div>
            
            {brandStory.timeline.map((item, index) => (
              <div
                key={index}
                className={`relative mb-16 transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-4 border-brand-caramel">
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-brand-honey to-brand-amber text-white font-bold rounded-full mb-3 shadow-md">
                        {item.year}
                      </div>
                      <h4 className="text-2xl font-bold mb-3 bg-gradient-to-r from-brand-brown to-brand-caramel bg-clip-text text-transparent">
                        {item.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-brand-honey to-brand-amber rounded-full border-4 border-white shadow-xl"></div>
                  <div className="w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Colors
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-brand-brown mb-4">Bảng Màu Thương Hiệu</h2>
            <div className="w-24 h-1 bg-brand-green mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandColors.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="h-48" style={{ backgroundColor: item.color }}></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-brand-brown mb-2">{item.name}</h3>
                  <p className="text-gray-600 font-mono text-lg mb-2">{item.hex}</p>
                  <p className="text-gray-700">{item.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Brand Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-brand-brown mb-4">Giá Trị Cốt Lõi</h2>
            <div className="w-24 h-1 bg-brand-green mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandValues.map((value, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-xl text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl mb-4 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Assets
      <section className="py-20 px-4 bg-gradient-to-b from-brand-yellow/10 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-brand-brown mb-4">Tài Sản Thương Hiệu</h2>
            <div className="w-24 h-1 bg-brand-green mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandAssets.map((asset, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-xl text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl mb-4 font-bold text-brand-brown">{asset.icon}</div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">{asset.title}</h3>
                <p className="text-gray-700 text-sm">{asset.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Packaging */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-brand-brown mb-4">Bao Bì Sản Phẩm</h2>
            <div className="w-24 h-1 bg-brand-green mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packaging.map((pack, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pack.image}
                    alt={pack.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-brand-brown mb-2">{pack.name}</h3>
                  <p className="text-brand-green font-semibold text-lg mb-2">{pack.size}</p>
                  <p className="text-gray-700">{pack.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Merchandise Products - Using Component */}
      <Merchandise />

      {/* Download Brand Kit */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-brown to-brand-green text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-6">Tải Bộ Nhận Diện Thương Hiệu</h2>
            <p className="text-xl mb-8 opacity-90">
              Bao gồm logo, màu sắc, typography và hướng dẫn sử dụng đầy đủ
            </p>
            <button className="bg-brand-yellow hover:bg-yellow-400 text-brand-brown font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl active:scale-95">
              Tải Brand Kit 📦
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandIdentity;
