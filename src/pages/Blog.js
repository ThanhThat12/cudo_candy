import React, { useState } from 'react';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogData';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  
  const categories = ['Tất cả', 'Văn hóa', 'Kiến thức', 'Quà tặng', 'Bảo quản', 'Sức khỏe', 'Công thức'];
  
  const filteredBlogs = selectedCategory === 'Tất cả' 
    ? blogPosts 
    : blogPosts.filter(blog => blog.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-brand-dark via-brand-brown to-brand-caramel text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-brand-honey rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-amber rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-honey via-brand-amber to-brand-light bg-clip-text text-transparent">
              Blog Cu Đơ Hà Tĩnh
            </h1>
            <p className="text-lg md:text-xl text-brand-light/90 mb-8">
              Khám phá những câu chuyện, kiến thức và bí quyết về đặc sản Cu đơ Hà Tĩnh
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-brand-honey to-transparent"></div>
              <svg className="w-6 h-6 text-brand-honey" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-brand-honey to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md shadow-md py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <span className="text-brand-dark font-semibold whitespace-nowrap">Danh mục:</span>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-brand-honey to-brand-amber text-brand-dark shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-brand-dark">
            {selectedCategory === 'Tất cả' 
              ? `Tất cả bài viết (${filteredBlogs.length})`
              : `${selectedCategory} (${filteredBlogs.length})`
            }
          </h2>
        </div>

        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-xl text-gray-500">Chưa có bài viết nào trong danh mục này</p>
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-brand-dark via-brand-brown to-brand-caramel py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Đăng ký nhận tin mới nhất
            </h3>
            <p className="text-brand-light/80 mb-8">
              Nhận thông tin về các bài viết mới, công thức độc đáo và ưu đãi đặc biệt
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Nhập email của bạn..."
                className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-honey"
              />
              <button className="bg-gradient-to-r from-brand-honey to-brand-amber text-brand-dark font-bold px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
