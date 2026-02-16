'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import CategoryCard from '@/components/CategoryCard';
import productsData from '@/data/products.json';

const categoryIcons: Record<string, string> = {
  'surgical-instruments': '🔪',
  'dental-equipment': '🦷',
  'beauty-aesthetics': '💄',
};

const categoryGradients: Record<string, string> = {
  'surgical-instruments': 'from-teal-500 to-cyan-600',
  'dental-equipment': 'from-blue-500 to-indigo-600',
  'beauty-aesthetics': 'from-purple-500 to-pink-600',
};

export default function CategoryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-900 pt-32 pb-20">
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
            className="absolute w-64 h-64 bg-teal-500 rounded-full blur-3xl opacity-10"
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
              top: `${i * 15}%`,
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
              className="inline-block px-6 py-2 bg-teal-500/20 border border-teal-400/30 rounded-full text-teal-300 text-sm font-bold mb-6 backdrop-blur-sm"
            >
              PRODUCT CATEGORIES
            </motion.span>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Explore Our{' '}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Collections
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover precision-engineered instruments across surgical, dental, and beauty categories
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb 
            items={[
              { label: 'Categories', href: '/category' }
            ]} 
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-600 text-lg">
              Select a category to explore our comprehensive range of professional instruments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.categories.map((category, index) => (
              <CategoryCard
                key={category.id}
                title={category.name}
                description={category.description}
                href={`/category/${category.slug}`}
                itemCount={category.subcategories.length}
                itemLabel="subcategories"
                icon={categoryIcons[category.slug] || '📦'}
                gradient={categoryGradients[category.slug] || 'from-teal-500 to-cyan-600'}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Precision Engineering',
                description: 'Every instrument is crafted with micrometer-level accuracy',
              },
              {
                icon: '✅',
                title: 'Quality Certified',
                description: 'ISO 13485, CE marked, and FDA registered products',
              },
              {
                icon: '🌍',
                title: 'Global Shipping',
                description: 'Reliable delivery to over 80 countries worldwide',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-lg"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700 relative overflow-hidden">
        {/* Animated Background */}
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
              Need Help Finding the Right Products?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Our expert team is ready to assist you with product selection and custom requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-teal-600 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all"
              >
                Contact Our Team
              </motion.a>
              <motion.a
                href="/catalog"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-teal-500/20 backdrop-blur-lg border-2 border-white text-white font-bold rounded-xl hover:bg-teal-500/30 transition-all"
              >
                View Full Catalog
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
