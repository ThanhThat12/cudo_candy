import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ id, image, title, description, price }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/product/${id}`)}
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer h-full flex flex-col"
    >
      <div className="relative overflow-hidden h-64 group flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
        />
        <div className="absolute top-4 right-4 bg-gradient-to-r from-brand-honey to-brand-amber text-brand-dark px-3 py-1 rounded-full text-sm font-semibold shadow-md animate-pulse-slow">
          Bán chạy
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-brand-brown mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm line-clamp-2 flex-grow">{description}</p>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold bg-gradient-to-r from-brand-brown to-brand-caramel bg-clip-text text-transparent">{price}</span>
          <div className="flex items-center text-yellow-500">
            {'★'.repeat(5)}
          </div>
        </div>
        
        <button className="w-full bg-gradient-to-r from-brand-brown to-brand-caramel hover:from-brand-caramel hover:to-brand-honey text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg active:scale-95">
          Đặt Hàng Ngay 🛒
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
