import React from 'react';

const Banner = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=1200&q=80"
          alt="Cu Đơ Hà Tĩnh Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-brown/80 via-brand-brown/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg animate-fade-in">
            Cu Đơ Hà Tĩnh
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-brand-yellow font-semibold mb-8 drop-shadow-lg">
            Đậm Vị Mật Mía – Chuẩn Hương Vị Hà Tĩnh
          </p>
          <p className="text-lg md:text-xl text-white mb-8 drop-shadow-lg max-w-2xl">
            Trải nghiệm hương vị truyền thống đậm đà từ mật mía nguyên chất Hà Tĩnh. 
            Mỗi viên kẹo là một câu chuyện về tình yêu quê hương.
          </p>
          <button
            onClick={scrollToProducts}
            className="bg-brand-yellow hover:bg-yellow-400 text-brand-brown font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Order Now 🛒
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Banner;
