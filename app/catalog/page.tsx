'use client';

import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import Footer from '@/components/Footer';
import productsData from '@/data/products.json';

interface Product {
  id: string;
  name: string;
  description: string;
  sku: string;
  material?: string;
  finish?: string;
}

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Flatten all products from the nested structure
  const allProducts = useMemo(() => {
    const products: Array<Product & { category: string; subcategory: string; subSubcategory: string }> = [];
    
    productsData.categories.forEach(category => {
      category.subcategories.forEach(subcategory => {
        subcategory.subcategories.forEach(subSubcategory => {
          subSubcategory.products.forEach(product => {
            products.push({
              ...product,
              category: category.name,
              subcategory: subcategory.name,
              subSubcategory: subSubcategory.name,
            });
          });
        });
      });
    });
    
    return products;
  }, []);

  // Filter products based on selections and search
  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSubcategory = selectedSubcategory === 'all' || product.subcategory === selectedSubcategory;
      const matchesSearch = searchQuery === '' || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSubcategory && matchesSearch;
    });
  }, [allProducts, selectedCategory, selectedSubcategory, searchQuery]);

  // Get unique subcategories for selected category
  const availableSubcategories = useMemo(() => {
    if (selectedCategory === 'all') return [];
    
    const subcats = new Set<string>();
    allProducts
      .filter(p => p.category === selectedCategory)
      .forEach(p => subcats.add(p.subcategory));
    
    return Array.from(subcats);
  }, [allProducts, selectedCategory]);

  const categories = ['all', ...productsData.categories.map(c => c.name)];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-32 pb-20">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Floating Elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-10"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              left: `${i * 20}%`,
              top: `${i * 12}%`,
            }}
          />
        ))}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-6 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-bold mb-6 backdrop-blur-sm"
            >
              COMPREHENSIVE PRODUCT RANGE
            </motion.span>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Product{' '}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Catalog
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Browse our extensive collection of precision surgical, dental, and beauty instruments
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
              {[
                { value: `${allProducts.length}+`, label: 'Products' },
                { value: `${productsData.categories.length}`, label: 'Categories' },
                { value: '100%', label: 'Quality' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
                >
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search Section */}
      <section className="sticky top-20 z-40 bg-white border-b border-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products by name, SKU, or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 bg-gray-100 p-1 rounded-xl">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  viewMode === 'grid'
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  viewMode === 'list'
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mt-6 flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedCategory(category);
                  setSelectedSubcategory('all');
                }}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Products' : category}
              </motion.button>
            ))}
          </div>

          {/* Subcategory Filters */}
          {availableSubcategories.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedSubcategory('all')}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  selectedSubcategory === 'all'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                All
              </button>
              {availableSubcategories.map((subcat) => (
                <button
                  key={subcat}
                  onClick={() => setSelectedSubcategory(subcat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    selectedSubcategory === subcat
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {subcat}
                </button>
              ))}
            </div>
          )}

          {/* Results Count */}
          <div className="mt-4 text-gray-600">
            Showing <span className="font-bold text-gray-900">{filteredProducts.length}</span> products
          </div>
        </div>
      </section>

      {/* Products Grid/List */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your filters or search query</p>
            </motion.div>
          ) : (
            <div
              className={
                viewMode === 'grid'
                  ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
                  : 'space-y-6'
              }
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 overflow-hidden ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {/* Product Image Placeholder */}
                  <div
                    className={`bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center ${
                      viewMode === 'grid' ? 'h-64' : 'w-48 flex-shrink-0'
                    }`}
                  >
                    <div className="text-center">
                      <span className="text-6xl">🔬</span>
                      <div className="mt-2 text-sm font-semibold text-blue-700">{product.sku}</div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    {/* Category Badge */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        {product.category}
                      </span>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">
                        {product.subcategory}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {product.description}
                    </p>

                    {/* Specifications */}
                    <div className="space-y-2 mb-4">
                      {product.material && (
                        <div className="flex items-center text-sm">
                          <span className="text-gray-500 w-24">Material:</span>
                          <span className="text-gray-900 font-medium">{product.material}</span>
                        </div>
                      )}
                      {product.finish && (
                        <div className="flex items-center text-sm">
                          <span className="text-gray-500 w-24">Finish:</span>
                          <span className="text-gray-900 font-medium">{product.finish}</span>
                        </div>
                      )}
                      <div className="flex items-center text-sm">
                        <span className="text-gray-500 w-24">SKU:</span>
                        <span className="text-gray-900 font-medium">{product.sku}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className={`flex gap-3 ${viewMode === 'list' ? 'mt-auto' : ''}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
                      >
                        Request Quote
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2.5 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all"
                      >
                        Details
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        {/* Animated Background Elements */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 bg-white rounded-full blur-3xl opacity-10"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              left: `${i * 30}%`,
              top: `${i * 20}%`,
            }}
          />
        ))}

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We offer custom manufacturing and OEM services. Let's discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all"
              >
                Contact Sales Team
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-500/20 backdrop-blur-lg border-2 border-white text-white font-bold rounded-xl hover:bg-blue-500/30 transition-all"
              >
                Download Full Catalog
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
