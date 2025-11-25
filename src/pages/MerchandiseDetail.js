import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MerchandiseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Trắng');
  const [mainImage, setMainImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, [id]);

  const merchandiseData = {
    '1': {
      id: 1,
      name: 'Áo Thun Brand',
      price: '299.000đ',
      originalPrice: '399.000đ',
      images: [
        '/images/merchandise/ao-thun.png',
        '/images/merchandise/ao-thun.png',
        '/images/merchandise/ao-thun.png',
        '/images/merchandise/ao-thun.png'
      ],
      description: 'Áo thun cotton cao cấp với logo Cu Đơ Hà Tĩnh được in/thêu tinh tế. Chất liệu cotton 100% thoáng mát, form áo vừa vặn, phù hợp với mọi lứa tuổi.',
      badge: 'Mới',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Trắng', 'Đen', 'Nâu', 'Xanh Navy'],
      features: [
        'Chất liệu cotton 100% cao cấp',
        'Logo thương hiệu in/thêu sắc nét',
        'Form áo regular fit thoải mái',
        'Độ bền cao, không phai màu',
        'Dễ dàng giặt và bảo quản'
      ],
      specifications: {
        'Chất liệu': 'Cotton 100%',
        'Xuất xứ': 'Việt Nam',
        'Màu sắc': 'Trắng, Đen, Nâu, Xanh Navy',
        'Size': 'S, M, L, XL, XXL',
        'Bảo quản': 'Giặt máy, không dùng nước nóng'
      }
    },
    '2': {
      id: 2,
      name: 'Túi Vải Canvas',
      price: '149.000đ',
      originalPrice: '199.000đ',
      images: [
        '/images/merchandise/tui-vai.png',
        '/images/merchandise/tui-vai.png',
        '/images/merchandise/tui-vai.png',
        '/images/merchandise/tui-vai.png'
      ],
      description: 'Túi vải canvas bền đẹp, thân thiện với môi trường. Thiết kế đơn giản nhưng tinh tế với logo Cu Đơ Hà Tĩnh. Dung tích lớn, phù hợp cho mọi hoạt động hàng ngày.',
      badge: 'Hot',
      sizes: ['One Size'],
      colors: ['Be', 'Xanh Lá', 'Nâu'],
      features: [
        'Chất liệu canvas dày dặn, bền chắc',
        'Thân thiện với môi trường',
        'Dung tích lớn, nhiều ngăn tiện dụng',
        'Quai xách chắc chắn, thoải mái',
        'Dễ dàng vệ sinh và bảo quản'
      ],
      specifications: {
        'Chất liệu': 'Canvas cao cấp',
        'Kích thước': '40cm x 35cm x 10cm',
        'Dung tích': 'Khoảng 14L',
        'Màu sắc': 'Be, Xanh Lá, Nâu',
        'Bảo quản': 'Giặt tay, phơi khô tự nhiên'
      }
    },
    '3': {
      id: 3,
      name: 'Ly Sứ',
      price: '199.000đ',
      originalPrice: null,
      images: [
        '/images/merchandise/ly-su.png',
        '/images/merchandise/ly-su.png',
        '/images/merchandise/ly-su.png',
        '/images/merchandise/ly-su.png'
      ],
      description: 'Ly sứ cao cấp in logo thương hiệu Cu Đơ Hà Tĩnh. Thiết kế tinh tế, chất lượng bền đẹp, phù hợp làm quà tặng hoặc sử dụng hàng ngày.',
      badge: null,
      sizes: ['350ml', '500ml'],
      colors: ['Trắng'],
      features: [
        'Sứ cao cấp an toàn cho sức khỏe',
        'In logo sắc nét, không phai màu',
        'Giữ nhiệt tốt',
        'Thiết kế sang trọng, tinh tế',
        'Dễ dàng vệ sinh'
      ],
      specifications: {
        'Chất liệu': 'Sứ cao cấp',
        'Dung tích': '350ml, 500ml',
        'Xuất xứ': 'Việt Nam',
        'Màu sắc': 'Trắng với logo màu',
        'Bảo quản': 'Rửa tay hoặc máy rửa bát'
      }
    },
    '4': {
      id: 4,
      name: 'Móc Khóa',
      price: '49.000đ',
      originalPrice: '79.000đ',
      images: [
        '/images/merchandise/moc-khoa.png',
        '/images/merchandise/moc-khoa.png',
        '/images/merchandise/moc-khoa.png',
        '/images/merchandise/moc-khoa.png'
      ],
      description: 'Móc khóa kim loại thiết kế độc đáo với logo Cu Đơ Hà Tĩnh. Nhỏ gọn, bền đẹp, là món quà lưu niệm ý nghĩa.',
      badge: 'Sale',
      sizes: ['One Size'],
      colors: ['Vàng Đồng', 'Bạc'],
      features: [
        'Chất liệu kim loại cao cấp',
        'Thiết kế độc đáo, tinh xảo',
        'Logo nổi bật',
        'Bền bỉ theo thời gian',
        'Quà tặng ý nghĩa'
      ],
      specifications: {
        'Chất liệu': 'Kim loại mạ',
        'Kích thước': '5cm x 3cm',
        'Trọng lượng': '20g',
        'Màu sắc': 'Vàng Đồng, Bạc',
        'Bảo quản': 'Tránh ẩm ướt'
      }
    },
    '5': {
      id: 5,
      name: 'Nón Lưỡi Trai',
      price: '179.000đ',
      originalPrice: null,
      images: [
        '/images/merchandise/non.png',
        '/images/merchandise/non.png',
        '/images/merchandise/non.png',
        '/images/merchandise/non.png'
      ],
      description: 'Nón lưỡi trai thời trang với logo thêu tinh tế. Chất liệu thoáng khí, form nón đẹp, phù hợp với mọi phong cách.',
      badge: 'Mới',
      sizes: ['Free Size'],
      colors: ['Đen', 'Nâu', 'Be', 'Xanh Navy'],
      features: [
        'Chất liệu vải cao cấp thoáng khí',
        'Logo thêu sắc nét',
        'Dây điều chỉnh linh hoạt',
        'Form nón đẹp, chuẩn streetwear',
        'Chống nắng hiệu quả'
      ],
      specifications: {
        'Chất liệu': 'Vải kaki/cotton',
        'Kích thước': 'Free Size (có dây điều chỉnh)',
        'Màu sắc': 'Đen, Nâu, Be, Xanh Navy',
        'Xuất xứ': 'Việt Nam',
        'Bảo quản': 'Giặt tay, không vắt mạnh'
      }
    },
    '6': {
      id: 6,
      name: 'Sổ Tay',
      price: '89.000đ',
      originalPrice: null,
      images: [
        '/images/merchandise/so-tay.png',
        '/images/merchandise/so-tay.png',
        '/images/merchandise/so-tay.png',
        '/images/merchandise/so-tay.png'
      ],
      description: 'Sổ tay bìa cứng chất lượng cao với logo Cu Đơ Hà Tĩnh. Giấy mịn, thiết kế sang trọng, phù hợp cho ghi chú hoặc làm quà tặng.',
      badge: null,
      sizes: ['A5', 'A6'],
      colors: ['Nâu', 'Đen', 'Xanh'],
      features: [
        'Bìa cứng cao cấp, bền đẹp',
        'Giấy chất lượng, mượt mà',
        'Thiết kế tinh tế với logo',
        'Kẻ dòng hoặc trơn tùy chọn',
        'Phù hợp nhiều mục đích sử dụng'
      ],
      specifications: {
        'Chất liệu bìa': 'Bìa cứng da tổng hợp',
        'Chất liệu giấy': 'Giấy Woodfree 80gsm',
        'Số trang': '200 trang',
        'Kích thước': 'A5 (14.8x21cm), A6 (10.5x14.8cm)',
        'Màu sắc': 'Nâu, Đen, Xanh'
      }
    }
  };

  const product = merchandiseData[id];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-brand-brown mb-4">Sản phẩm không tồn tại</h2>
          <button
            onClick={() => navigate('/brand')}
            className="bg-brand-brown text-white px-6 py-3 rounded-full hover:bg-brand-green transition-colors duration-300"
          >
            Quay lại trang thương hiệu
          </button>
        </div>
      </div>
    );
  }

  const relatedProducts = Object.values(merchandiseData)
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-brand-yellow/5">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <button onClick={() => navigate('/')} className="hover:text-brand-brown transition-colors">
              Trang chủ
            </button>
            <span className="mx-2">/</span>
            <button onClick={() => navigate('/brand')} className="hover:text-brand-brown transition-colors">
              Nhận dạng thương hiệu
            </button>
            <span className="mx-2">/</span>
            <span className="text-brand-brown font-semibold">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-4">
              <img
                src={product.images[mainImage]}
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
              {product.badge && (
                <div className={`absolute top-6 right-6 px-4 py-2 rounded-full font-bold text-sm shadow-xl ${
                  product.badge === 'Mới' ? 'bg-gradient-to-r from-brand-green to-green-500 text-white' :
                  product.badge === 'Hot' ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white' :
                  product.badge === 'Sale' ? 'bg-gradient-to-r from-brand-yellow to-orange-400 text-brand-brown' :
                  'bg-brand-brown text-white'
                }`}>
                  {product.badge}
                </div>
              )}
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setMainImage(index)}
                  className={`cursor-pointer rounded-lg overflow-hidden border-4 transition-all duration-300 ${
                    mainImage === index ? 'border-brand-brown shadow-lg scale-105' : 'border-transparent hover:border-brand-yellow'
                  }`}
                >
                  <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-24 object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <h1 className="text-4xl font-bold text-brand-brown mb-4">{product.name}</h1>
            
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-4xl font-bold text-brand-green">{product.price}</span>
              {product.originalPrice && (
                <span className="text-2xl text-gray-400 line-through">{product.originalPrice}</span>
              )}
            </div>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            {product.sizes.length > 1 && (
              <div className="mb-6">
                <label className="block text-lg font-bold text-brand-brown mb-3">
                  Kích thước:
                </label>
                <div className="flex gap-3 flex-wrap">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                        selectedSize === size
                          ? 'bg-brand-brown text-white shadow-lg scale-105'
                          : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-brand-brown'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            <div className="mb-6">
              <label className="block text-lg font-bold text-brand-brown mb-3">
                Màu sắc:
              </label>
              <div className="flex gap-3 flex-wrap">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedColor === color
                        ? 'bg-brand-brown text-white shadow-lg scale-105'
                        : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-brand-brown'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-lg font-bold text-brand-brown mb-3">
                Số lượng:
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 rounded-lg bg-gray-200 hover:bg-brand-brown hover:text-white font-bold text-xl transition-all duration-300"
                >
                  -
                </button>
                <span className="text-2xl font-bold text-brand-brown w-16 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 rounded-lg bg-gray-200 hover:bg-brand-brown hover:text-white font-bold text-xl transition-all duration-300"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <button className="flex-1 bg-gradient-to-r from-brand-brown to-brand-green hover:from-brand-green hover:to-brand-brown text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                Thêm Vào Giỏ 🛒
              </button>
              <button className="flex-1 bg-brand-yellow hover:bg-yellow-400 text-brand-brown font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                Mua Ngay ⚡
              </button>
            </div>

            {/* Features */}
            <div className="bg-gradient-to-br from-brand-yellow/10 to-brand-green/10 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-bold text-brand-brown mb-4">✨ Đặc điểm nổi bật</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-brand-green mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className={`bg-white rounded-2xl shadow-xl p-8 mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-3xl font-bold text-brand-brown mb-6">📋 Thông Số Kỹ Thuật</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(product.specifications).map(([key, value], index) => (
              <div key={index} className="flex border-b border-gray-200 pb-4">
                <span className="font-bold text-brand-brown w-1/3">{key}:</span>
                <span className="text-gray-700 w-2/3">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl font-bold text-brand-brown mb-8 text-center">Sản Phẩm Liên Quan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct, index) => (
              <div
                key={relatedProduct.id}
                onClick={() => navigate(`/merchandise/${relatedProduct.id}`)}
                className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={relatedProduct.images[0]}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-brown mb-2">{relatedProduct.name}</h3>
                  <p className="text-brand-green font-bold text-lg">{relatedProduct.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchandiseDetail;
