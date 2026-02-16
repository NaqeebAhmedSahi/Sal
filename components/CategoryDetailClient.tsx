'use client';

import { motion } from 'framer-motion';
import CategoryCard from './CategoryCard';

interface Subcategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  subcategories: any[];
}

interface CategoryDetailClientProps {
  categoryName: string;
  categoryDescription: string;
  subcategories: Subcategory[];
  categorySlug: string;
  subcategoryIcons: Record<string, string>;
  subcategoryGradients: Record<string, string>;
}

export default function CategoryDetailClient({
  categoryName,
  categoryDescription,
  subcategories,
  categorySlug,
  subcategoryIcons,
  subcategoryGradients,
}: CategoryDetailClientProps) {
  return (
    <>
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
        {[...Array(4)].map((_, i) => (
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
              left: `${i * 25}%`,
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
              className="inline-block px-6 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-bold mb-6 backdrop-blur-sm"
            >
              {categoryName.toUpperCase()}
            </motion.span>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {categoryName}
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {categoryDescription}
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl px-8 py-4 border border-white/20"
              >
                <div className="text-3xl font-bold text-white">{subcategories.length}</div>
                <div className="text-blue-200 text-sm">Subcategories</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl px-8 py-4 border border-white/20"
              >
                <div className="text-3xl font-bold text-white">
                  {subcategories.reduce((acc, sub) => acc + sub.subcategories.length, 0)}
                </div>
                <div className="text-blue-200 text-sm">Product Lines</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subcategories Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Browse Our Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of {categoryName.toLowerCase()} products
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subcategories.map((subcategory, index) => (
              <CategoryCard
                key={subcategory.id}
                title={subcategory.name}
                description={subcategory.description}
                icon={subcategoryIcons[subcategory.slug] || '📦'}
                href={`/category/${categorySlug}/${subcategory.slug}`}
                gradient={subcategoryGradients[subcategory.slug] || 'from-gray-500 to-gray-600'}
                delay={index * 0.1}
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
                icon: '🏆',
                title: 'Premium Quality',
                description: 'All products meet international quality standards',
              },
              {
                icon: '🌍',
                title: 'Global Shipping',
                description: 'Worldwide delivery with tracking',
              },
              {
                icon: '💼',
                title: 'Bulk Orders',
                description: 'Special pricing for large quantities',
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
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
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
              Need Help Choosing?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our experts are here to guide you to the perfect products
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all"
              >
                Contact Us
              </motion.a>
              <motion.a
                href="/catalog"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-500/20 backdrop-blur-lg border-2 border-white text-white font-bold rounded-xl hover:bg-blue-500/30 transition-all"
              >
                View Catalog
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
