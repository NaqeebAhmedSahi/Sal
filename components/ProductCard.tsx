'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    sku: string;
    description: string;
    material?: string;
    finish?: string;
  };
  index?: number;
  viewMode?: 'grid' | 'list';
}

export default function ProductCard({ product, index = 0, viewMode = 'grid' }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 overflow-hidden ${
        viewMode === 'list' ? 'flex' : ''
      }`}
    >
      {/* Product Image */}
      <div
        className={`bg-gradient-to-br from-teal-100 to-cyan-100 overflow-hidden ${
          viewMode === 'grid' ? 'h-64' : 'w-48 flex-shrink-0'
        }`}
      >
        <img
          src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&h=400&fit=crop"
          alt={product.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Product Info */}
      <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
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
          <Link
            href={`/products/${product.id}`}
            className="flex-1"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-2.5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-cyan-700 transition-all shadow-md hover:shadow-lg"
            >
              View Details
            </motion.button>
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2.5 border-2 border-teal-600 text-teal-600 font-semibold rounded-xl hover:bg-teal-50 transition-all"
          >
            Quote
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
