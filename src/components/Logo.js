import React from 'react';

const Logo = ({ className = '', size = 'medium' }) => {
  const sizes = {
    small: 'w-10 h-10',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
    xlarge: 'w-24 h-24'
  };

  return (
    <img 
      src="/logo.png" 
      alt="Mật Lam Hồng - Cu Đơ Hà Tĩnh" 
      className={`${sizes[size]} object-contain ${className}`}
    />
  );
};

export default Logo;
