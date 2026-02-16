'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
  itemCount?: number;
  itemLabel?: string;
  icon?: string;
  index?: number;
  gradient?: string;
}

export default function CategoryCard({
  title,
  description,
  href,
  itemCount,
  itemLabel = 'items',
  icon = '📦',
  index = 0,
  gradient = 'from-teal-500 to-cyan-600',
}: CategoryCardProps) {
  return (
    <Link href={href}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -10, scale: 1.02 }}
        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 overflow-hidden h-full"
      >
        {/* Icon Header */}
        <div className={`h-32 bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}>
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
          
          <motion.div
            className="text-6xl relative z-10"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
            {description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            {itemCount !== undefined && (
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-teal-600">{itemCount}</span>
                <span className="text-gray-500 text-sm">{itemLabel}</span>
              </div>
            )}
            
            <motion.div
              className="flex items-center space-x-2 text-teal-600 font-semibold"
              whileHover={{ x: 5 }}
            >
              <span>Explore</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
