import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <header className="bg-brand-brown text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="text-2xl md:text-3xl font-bold cursor-pointer hover:text-brand-yellow transition-colors duration-300">
            <span className="flex items-center">
              🍬 Cu Mỹ Haha để test deloy 45666ppk
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-brand-yellow transition-colors duration-300 font-semibold"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="hover:text-brand-yellow transition-colors duration-300 font-semibold"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-brand-yellow transition-colors duration-300 font-semibold"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-brand-yellow transition-colors duration-300 font-semibold"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow rounded p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3 border-t border-brand-yellow pt-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left hover:text-brand-yellow transition-colors duration-300 font-semibold py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="block w-full text-left hover:text-brand-yellow transition-colors duration-300 font-semibold py-2"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left hover:text-brand-yellow transition-colors duration-300 font-semibold py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left hover:text-brand-yellow transition-colors duration-300 font-semibold py-2"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
