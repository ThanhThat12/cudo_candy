import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Trang chủ', action: () => location.pathname !== '/' ? navigate('/') : scrollToSection('home') },
    { name: 'Sản phẩm', action: () => location.pathname !== '/' ? (navigate('/'), setTimeout(() => scrollToSection('products'), 100)) : scrollToSection('products') },
    { name: 'Thương hiệu', action: () => navigate('/brand') },
    { name: 'Blog', action: () => navigate('/blog') },
    { name: 'Về chúng tôi', action: () => location.pathname !== '/' ? (navigate('/'), setTimeout(() => scrollToSection('about'), 100)) : scrollToSection('about') },
    { name: 'Liên hệ', action: () => location.pathname !== '/' ? (navigate('/'), setTimeout(() => scrollToSection('contact'), 100)) : scrollToSection('contact') }
  ];

  return (
    <header className={`bg-gradient-to-r from-brand-dark via-brand-brown to-brand-caramel text-white sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'shadow-2xl py-2 backdrop-blur-md bg-opacity-95' : 'shadow-lg py-4 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div 
            onClick={() => navigate('/')}
            className="cursor-pointer group flex items-center gap-3 md:gap-4"
          >
            <div className="relative">
              <Logo size={scrolled ? "small" : "medium"} className="transition-all duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-brand-honey/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="hidden sm:block">
              <span className={`font-bold bg-gradient-to-r from-brand-honey via-brand-amber to-brand-light bg-clip-text text-transparent transition-all duration-500 ${scrolled ? 'text-xl' : 'text-2xl md:text-3xl'}`}>
                Mật Lam Hồng
              </span>
              <p className="text-xs text-brand-light/80 font-medium">Cu Đơ Hà Tĩnh</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-brand-dark/30 rounded-full px-2 py-2 backdrop-blur-sm border border-brand-amber/20">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  item.action();
                  setIsMenuOpen(false);
                }}
                className="relative px-4 lg:px-5 py-2 rounded-full font-semibold text-sm lg:text-base transition-all duration-300 hover:bg-gradient-to-r hover:from-brand-honey/20 hover:to-brand-amber/20 hover:text-brand-honey group overflow-hidden"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-honey to-brand-amber opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-3">
            <button className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-brand-honey to-brand-amber text-brand-dark font-bold px-5 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-brand-honey/50 active:scale-95">
              <span>Đặt hàng</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative w-10 h-10 flex items-center justify-center bg-brand-dark/40 rounded-lg border border-brand-amber/30 hover:bg-brand-amber/20 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-4 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2 border-t border-brand-amber/30 pt-4 animate-slide-up">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  item.action();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-brand-honey/20 hover:to-brand-amber/20 hover:text-brand-honey transition-all duration-300 font-semibold"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {item.name}
              </button>
            ))}
            <button className="w-full mt-3 flex items-center justify-center gap-2 bg-gradient-to-r from-brand-honey to-brand-amber text-brand-dark font-bold px-5 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95">
              <span>Đặt hàng ngay</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
