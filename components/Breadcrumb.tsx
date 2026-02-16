'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm mb-8">
      <Link 
        href="/" 
        className="text-gray-500 hover:text-teal-600 transition-colors"
      >
        Home
      </Link>
      
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center space-x-2">
          <svg 
            className="w-4 h-4 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
          
          {index === items.length - 1 ? (
            <span className="text-gray-900 font-semibold">
              {item.label}
            </span>
          ) : (
            <Link 
              href={item.href}
              className="text-gray-500 hover:text-teal-600 transition-colors"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
