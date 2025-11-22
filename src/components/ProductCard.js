import React from 'react';

const ProductCard = ({ image, title, description, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-brand-green text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
          Bán chạy
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-brand-brown mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm line-clamp-2">{description}</p>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-brand-green">{price}</span>
          <div className="flex items-center text-yellow-500">
            {'★'.repeat(5)}
          </div>
        </div>
        
        <button className="w-full bg-brand-brown hover:bg-brand-brown/90 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 transform hover:translate-y-[-2px] shadow-md hover:shadow-lg">
          Order Now 🛒
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
