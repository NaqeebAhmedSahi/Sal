'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ProductCard from './ProductCard';
import ProductDetailClient from './ProductDetailClient';

interface ProductImage {
  id: number;
  alt: string;
  url: string;
}

interface ProductType {
  id: string;
  name: string;
  sku: string;
  description: string;
  material: string;
  finish: string;
}

interface ProductPageClientProps {
  productImages: ProductImage[];
  categoryName: string;
  categorySlug: string;
  subcategoryName: string;
  subcategorySlug: string;
  subSubcategoryName: string;
  subSubcategorySlug: string;
  product: ProductType;
  relatedProducts: ProductType[];
}

export default function ProductPageClient({
  productImages,
  categoryName,
  categorySlug,
  subcategoryName,
  subcategorySlug,
  subSubcategoryName,
  subSubcategorySlug,
  product,
  relatedProducts,
}: ProductPageClientProps) {
  return (
    <>
      {/* Product Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <ProductDetailClient productImages={productImages} />

            {/* Product Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Category Badge */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-4 py-2 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full">
                  {categoryName}
                </span>
                <span className="px-4 py-2 bg-cyan-100 text-cyan-700 text-sm font-semibold rounded-full">
                  {subSubcategoryName}
                </span>
              </div>

              {/* Product Title */}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* SKU */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-gray-600">SKU:</span>
                <span className="text-xl font-bold text-teal-600">{product.sku}</span>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Specifications Table */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Specifications
                </h3>
                <div className="space-y-3">
                  {product.material && (
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-medium">Material</span>
                      <span className="text-gray-900 font-semibold">{product.material}</span>
                    </div>
                  )}
                  {product.finish && (
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-medium">Finish</span>
                      <span className="text-gray-900 font-semibold">{product.finish}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Category</span>
                    <span className="text-gray-900 font-semibold">{categoryName}</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-gray-600 font-medium">Quality Standard</span>
                    <span className="text-gray-900 font-semibold">ISO 13485</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl hover:from-teal-700 hover:to-cyan-700 transition-all text-center"
                >
                  Request Quote
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border-2 border-teal-600 text-teal-600 font-bold text-lg rounded-xl hover:bg-teal-50 transition-all"
                >
                  Add to Inquiry
                </motion.button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '✓', text: 'ISO Certified' },
                  { icon: '🚚', text: 'Fast Shipping' },
                  { icon: '🔄', text: 'Quality Guaranteed' },
                  { icon: '💼', text: 'Bulk Discounts' },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <span className="text-teal-600 font-bold text-xl">{feature.icon}</span>
                    <span className="font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Product Details',
                icon: '📋',
                content: 'Precision-engineered medical instrument crafted from premium stainless steel. Designed for durability and optimal performance in professional settings.',
              },
              {
                title: 'Quality Assurance',
                icon: '🏆',
                content: 'Every instrument undergoes rigorous quality control testing. ISO 13485 certified manufacturing ensures the highest standards are met.',
              },
              {
                title: 'Care Instructions',
                icon: '🧼',
                content: 'Sterilization compatible. Clean with approved medical disinfectants. Store in a dry environment. Regular maintenance recommended for longevity.',
              },
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="text-4xl mb-4">{section.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {section.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Related Products
              </h2>
              <p className="text-gray-600 text-lg">
                You may also be interested in these products
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct, index) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                  index={index}
                  viewMode="grid"
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link
                href={`/category/${categorySlug}/${subcategorySlug}/${subSubcategorySlug}`}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:from-teal-700 hover:to-cyan-700 transition-all"
              >
                <span>View All {subSubcategoryName}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

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
              Have Questions About This Product?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Our expert team is ready to provide detailed information and pricing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-teal-600 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all"
              >
                Contact Sales Team
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-teal-500/20 backdrop-blur-lg border-2 border-white text-white font-bold rounded-xl hover:bg-teal-500/30 transition-all"
              >
                Download Spec Sheet
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
