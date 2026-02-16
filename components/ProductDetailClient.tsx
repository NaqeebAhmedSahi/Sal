'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ProductImage {
  id: number;
  alt: string;
  url: string;
}

interface ProductDetailClientProps {
  productImages: ProductImage[];
}

export default function ProductDetailClient({ productImages }: ProductDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      {/* Image Gallery */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Main Image */}
        <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl overflow-hidden mb-4 h-[500px] flex items-center justify-center">
          <motion.img
            key={selectedImage}
            src={productImages[selectedImage].url}
            alt={productImages[selectedImage].alt}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Thumbnail Gallery */}
        <div className="grid grid-cols-4 gap-4">
          {productImages.map((img, index) => (
            <motion.button
              key={img.id}
              onClick={() => setSelectedImage(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl overflow-hidden h-24 transition-all ${
                selectedImage === index
                  ? 'ring-4 ring-teal-500 shadow-lg'
                  : 'hover:shadow-md'
              }`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Quantity Selector */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Quantity
        </label>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-12 h-12 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors font-bold text-xl"
          >
            −
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-24 h-12 text-center border-2 border-gray-200 rounded-xl font-bold text-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
          />
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-12 h-12 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors font-bold text-xl"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}
