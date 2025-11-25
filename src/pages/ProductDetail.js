import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState('1kg');

  // Dữ liệu sản phẩm chi tiết
  const productData = {
    1: {
      title: 'Cu Đơ Truyền Thống',
      mainImage: '/images/products/cudo-truyen-thong.jpg',
      gallery: [
        '/images/products/cudo-truyen-thong.jpg',
        '/images/products/cudo-truyen-thong.jpg',
        '/images/products/cudo-truyen-thong.jpg',
      ],
      description: 'Kẹo cu đơ nguyên chất từ mật mía Hà Tĩnh, hương vị đậm đà truyền thống được giữ nguyên qua nhiều thế hệ.',
      longDescription: 'Cu đơ truyền thống Hà Tĩnh được làm từ mật mía nguyên chất 100%, không chất bảo quản, không phẩm màu. Quy trình sản xuất hoàn toàn thủ công, kế thừa bí quyết truyền thống hàng trăm năm của làng nghề. Mỗi viên kẹo đều được làm bằng tâm huyết và tình yêu với nghề.',
      price: 50000,
      originalPrice: 60000,
      unit: 'kg',
      inStock: true,
      rating: 4.8,
      reviews: 156,
      ingredients: ['Mật mía nguyên chất', 'Đường mía tự nhiên', 'Không chất bảo quản'],
      benefits: [
        'Cung cấp năng lượng nhanh chóng',
        'Bổ sung khoáng chất tự nhiên',
        'Giúp ấm cơ thể, tốt cho hệ hô hấp',
        'An toàn cho sức khỏe'
      ],
      preservation: 'Bảo quản nơi khô ráo, thoáng mát. Tránh ánh nắng trực tiếp.',
      origin: 'Hà Tĩnh, Việt Nam'
    },
    2: {
      title: 'Cu Đơ Sữa Dừa',
      mainImage: '/images/products/cudo-sua-dua.jpg',
      gallery: [
        '/images/products/cudo-sua-dua.jpg',
        '/images/products/cudo-sua-dua.jpg',
        '/images/products/cudo-sua-dua.jpg',
      ],
      description: 'Sự kết hợp hoàn hảo giữa mật mía thơm ngon và sữa dừa béo ngậy.',
      longDescription: 'Vị ngọt đậm đà của mật mía hòa quyện cùng vị béo ngậy của sữa dừa tạo nên một hương vị độc đáo, khó quên. Sản phẩm được làm từ 100% nguyên liệu tự nhiên, đảm bảo an toàn cho sức khỏe.',
      price: 60000,
      originalPrice: 70000,
      unit: 'kg',
      inStock: true,
      rating: 4.9,
      reviews: 203,
      ingredients: ['Mật mía nguyên chất', 'Sữa dừa tươi', 'Đường mía tự nhiên'],
      benefits: [
        'Giàu chất béo tốt từ dừa',
        'Cung cấp năng lượng dồi dào',
        'Hương vị thơm ngon độc đáo',
        'Phù hợp mọi lứa tuổi'
      ],
      preservation: 'Bảo quản nơi khô ráo, thoáng mát. Tránh ánh nắng trực tiếp.',
      origin: 'Hà Tĩnh, Việt Nam'
    },
    3: {
      title: 'Cu Đơ Gừng',
      mainImage: '/images/products/cudo-gung.jpg',
      gallery: [
        '/images/products/cudo-gung.jpg',
        '/images/products/cudo-gung.jpg',
        '/images/products/cudo-gung.jpg',
      ],
      description: 'Hương vị độc đáo với gừng tươi, ấm bụng, tốt cho sức khỏe.',
      longDescription: 'Cu đơ gừng kết hợp hoàn hảo giữa vị ngọt của mật mía và vị cay nồng của gừng tươi. Đây là sản phẩm đặc biệt tốt cho sức khỏe, giúp ấm cơ thể, tăng cường sức đề kháng.',
      price: 55000,
      originalPrice: 65000,
      unit: 'kg',
      inStock: true,
      rating: 4.7,
      reviews: 128,
      ingredients: ['Mật mía nguyên chất', 'Gừng tươi', 'Đường mía tự nhiên'],
      benefits: [
        'Ấm cơ thể, phòng chống cảm lạnh',
        'Tốt cho hệ tiêu hóa',
        'Giảm buồn nôn, say tàu xe',
        'Tăng cường miễn dịch'
      ],
      preservation: 'Bảo quản nơi khô ráo, thoáng mát.',
      origin: 'Hà Tĩnh, Việt Nam'
    },
    4: {
      title: 'Cu Đơ Lạc Rang',
      mainImage: '/images/products/cudo-lac-rang.jpg',
      gallery: [
        '/images/products/cudo-lac-rang.jpg',
        '/images/products/cudo-lac-rang.jpg',
        '/images/products/cudo-lac-rang.jpg',
      ],
      description: 'Kẹo cu đơ kết hợp với lạc rang thơm bùi, giòn rụm.',
      longDescription: 'Sự kết hợp độc đáo giữa độ ngọt của mật mía và độ bùi của lạc rang tạo nên một món ăn vặt tuyệt vời. Lạc rang giòn tan, thơm bùi hòa quyện với vị ngọt thanh của cu đơ.',
      price: 65000,
      originalPrice: 75000,
      unit: 'kg',
      inStock: true,
      rating: 4.9,
      reviews: 189,
      ingredients: ['Mật mía nguyên chất', 'Lạc rang nguyên chất', 'Đường mía tự nhiên'],
      benefits: [
        'Giàu protein từ đậu phộng',
        'Cung cấp năng lượng cao',
        'Giòn ngon, thơm bùi',
        'Bổ dưỡng cho mọi lứa tuổi'
      ],
      preservation: 'Bảo quản nơi khô ráo, thoáng mát.',
      origin: 'Hà Tĩnh, Việt Nam'
    },
    5: {
      title: 'Cu Đơ Mè Đen',
      mainImage: '/images/products/cudo-me-den.jpg',
      gallery: [
        '/images/products/cudo-me-den.jpg',
        '/images/products/cudo-me-den.jpg',
        '/images/products/cudo-me-den.jpg',
      ],
      description: 'Hương vị bổ dưỡng với mè đen rang thơm, giàu dinh dưỡng.',
      longDescription: 'Cu đơ mè đen là sự kết hợp tuyệt vời giữa mật mía ngọt ngào và mè đen bổ dưỡng. Mè đen giàu canxi, sắt và các vitamin tốt cho sức khỏe.',
      price: 58000,
      originalPrice: 68000,
      unit: 'kg',
      inStock: true,
      rating: 4.8,
      reviews: 167,
      ingredients: ['Mật mía nguyên chất', 'Mè đen rang', 'Đường mía tự nhiên'],
      benefits: [
        'Giàu canxi, tốt cho xương khớp',
        'Bổ máu, tốt cho phụ nữ',
        'Chứa nhiều chất chống oxi hóa',
        'Tốt cho tim mạch'
      ],
      preservation: 'Bảo quản nơi khô ráo, thoáng mát.',
      origin: 'Hà Tĩnh, Việt Nam'
    },
    6: {
      title: 'Combo Quà Tặng',
      mainImage: '/images/products/combo-qua-tang.jpg',
      gallery: [
        '/images/products/combo-qua-tang.jpg',
        '/images/products/combo-qua-tang.jpg',
        '/images/products/combo-qua-tang.jpg',
      ],
      description: 'Hộp quà cao cấp gồm 3 loại cu đơ đặc biệt, hoàn hảo làm quà tặng.',
      longDescription: 'Combo quà tặng cao cấp bao gồm 3 loại cu đơ đặc biệt: Truyền thống, Sữa dừa và Gừng. Được đóng gói trong hộp quà sang trọng, thích hợp làm quà biếu cho người thân, đối tác.',
      price: 150000,
      originalPrice: 180000,
      unit: 'hộp',
      inStock: true,
      rating: 5.0,
      reviews: 98,
      ingredients: ['3 loại cu đơ đặc biệt', 'Hộp quà cao cấp'],
      benefits: [
        'Đa dạng hương vị',
        'Đóng gói đẹp mắt, sang trọng',
        'Quà tặng ý nghĩa',
        'Giá trị dinh dưỡng cao'
      ],
      preservation: 'Bảo quản nơi khô ráo, thoáng mát.',
      origin: 'Hà Tĩnh, Việt Nam'
    }
  };

  const product = productData[id] || productData[1];
  const [mainImage, setMainImage] = useState(product.mainImage);

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const totalPrice = product.price * quantity * (selectedWeight === '0.5kg' ? 0.5 : selectedWeight === '2kg' ? 2 : 1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-brand-yellow/10 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm animate-fade-in">
          <button onClick={() => navigate('/')} className="text-brand-brown hover:text-brand-green transition-colors">
            Trang chủ
          </button>
          <span className="text-gray-400">/</span>
          <button onClick={() => navigate('/')} className="text-brand-brown hover:text-brand-green transition-colors">
            Sản phẩm
          </button>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">{product.title}</span>
        </div>

        {/* Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className="animate-slide-in-left">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-4 group">
              <img
                src={mainImage}
                alt={product.title}
                className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.gallery.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 hover:shadow-lg ${
                    mainImage === img ? 'border-brand-green scale-105' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-32 object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-slide-in-right">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-brand-green text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse-slow">
                  Bán chạy
                </span>
                {product.inStock && (
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Còn hàng
                  </span>
                )}
              </div>

              <h1 className="text-4xl font-bold text-brand-brown mb-4">{product.title}</h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  <span className="text-yellow-500 text-xl">{'★'.repeat(5)}</span>
                  <span className="ml-2 text-gray-600">({product.rating}/5)</span>
                </div>
                <span className="text-gray-500">|</span>
                <span className="text-gray-600">{product.reviews} đánh giá</span>
              </div>

              <p className="text-gray-600 mb-6 text-lg leading-relaxed">{product.description}</p>

              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-brand-green">
                    {totalPrice.toLocaleString('vi-VN')}đ
                  </span>
                  <span className="text-2xl text-gray-400 line-through">
                    {(product.originalPrice * quantity * (selectedWeight === '0.5kg' ? 0.5 : selectedWeight === '2kg' ? 2 : 1)).toLocaleString('vi-VN')}đ
                  </span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </span>
                </div>
              </div>

              {/* Weight Selection */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-3">Chọn khối lượng:</label>
                <div className="flex gap-3">
                  {['0.5kg', '1kg', '2kg'].map((weight) => (
                    <button
                      key={weight}
                      onClick={() => setSelectedWeight(weight)}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                        selectedWeight === weight
                          ? 'bg-brand-brown text-white shadow-lg scale-105'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {weight}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <label className="block text-gray-700 font-semibold mb-3">Số lượng:</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleQuantityChange('decrease')}
                    className="w-12 h-12 bg-gray-200 rounded-lg hover:bg-gray-300 transition-all duration-300 font-bold text-xl active:scale-95"
                  >
                    -
                  </button>
                  <span className="text-2xl font-bold w-16 text-center">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange('increase')}
                    className="w-12 h-12 bg-gray-200 rounded-lg hover:bg-gray-300 transition-all duration-300 font-bold text-xl active:scale-95"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 mb-6">
                <button className="flex-1 bg-brand-yellow hover:bg-yellow-400 text-brand-brown font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95">
                  Thêm vào giỏ 🛒
                </button>
                <button className="flex-1 bg-brand-brown hover:bg-brand-brown/90 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95">
                  Mua ngay
                </button>
              </div>

              {/* Additional Info */}
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-brand-green">✓</span>
                  <span>Miễn phí vận chuyển đơn hàng trên 200.000đ</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-green">✓</span>
                  <span>Đổi trả trong 7 ngày nếu có lỗi từ nhà sản xuất</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-green">✓</span>
                  <span>Xuất xứ: {product.origin}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description Tabs */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-brand-brown mb-4">Mô tả sản phẩm</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{product.longDescription}</p>
              
              <h3 className="text-xl font-bold text-brand-brown mb-3">Thành phần:</h3>
              <ul className="space-y-2 mb-6">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <span className="text-brand-green">•</span>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-brown mb-3">Công dụng:</h3>
              <ul className="space-y-2 mb-6">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <span className="text-brand-green">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-brand-brown mb-3">Bảo quản:</h3>
              <p className="text-gray-700 mb-6">{product.preservation}</p>

              <div className="bg-gradient-to-r from-brand-yellow/20 to-brand-green/20 p-6 rounded-lg">
                <h4 className="font-bold text-brand-brown mb-2">Cam kết chất lượng</h4>
                <p className="text-gray-700">
                  Sản phẩm được sản xuất theo quy trình nghiêm ngặt, đảm bảo vệ sinh an toàn thực phẩm.
                  100% nguyên liệu tự nhiên, không chất bảo quản.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="animate-fade-in">
          <h2 className="text-3xl font-bold text-brand-brown mb-8 text-center">Sản phẩm liên quan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].filter(i => i.toString() !== id).slice(0, 3).map((relatedId) => {
              const relatedProduct = productData[relatedId];
              return (
                <div
                  key={relatedId}
                  onClick={() => {
                    navigate(`/product/${relatedId}`);
                    window.scrollTo(0, 0);
                  }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <img src={relatedProduct.mainImage} alt={relatedProduct.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-bold text-brand-brown mb-2">{relatedProduct.title}</h3>
                    <p className="text-brand-green font-bold text-xl">{relatedProduct.price.toLocaleString('vi-VN')}đ/{relatedProduct.unit}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
