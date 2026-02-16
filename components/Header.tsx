'use client';

import { useState } from 'react';
import Link from 'next/link';
import productsData from '@/data/products.json';

interface Product {
  id: string;
  name: string;
}

interface SubCategory {
  id: string;
  name: string;
  slug: string;
  products?: Product[];
  subcategories?: SubCategory[];
}

interface Category {
  id: string;
  name: string;
  slug: string;
  subcategories: SubCategory[];
}

export default function Header() {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredSubCategory, setHoveredSubCategory] = useState<string | null>(null);

  const categories: Category[] = productsData.categories;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-white font-bold text-xl">SI</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Saluvia
              </span>
              <span className="text-xs text-gray-500 font-medium tracking-wide">
                INDUSTRIES
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 text-gray-700 hover:text-teal-600 font-medium transition-colors rounded-lg hover:bg-teal-50"
            >
              Home
            </Link>

            {/* Product Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductDropdownOpen(true)}
              onMouseLeave={() => {
                setIsProductDropdownOpen(false);
                setHoveredCategory(null);
                setHoveredSubCategory(null);
              }}
            >
              <button className="px-4 py-2 text-gray-700 hover:text-teal-600 font-medium transition-colors rounded-lg hover:bg-teal-50 flex items-center space-x-1">
                <span>Products</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isProductDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Mega Dropdown Menu */}
              {isProductDropdownOpen && (
                <div className="absolute left-0 mt-2 w-[900px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                  <div className="flex">
                    {/* Categories Column (3 columns) */}
                    <div className="w-2/3 p-6 grid grid-cols-3 gap-4 border-r border-gray-100">
                      {categories.map((category) => (
                        <div
                          key={category.id}
                          className={`p-3 rounded-lg cursor-pointer transition-all ${
                            hoveredCategory === category.id
                              ? 'bg-teal-50 shadow-md'
                              : 'hover:bg-gray-50'
                          }`}
                          onMouseEnter={() => {
                            setHoveredCategory(category.id);
                            setHoveredSubCategory(null);
                          }}
                        >
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-xs font-bold">
                                {category.name.charAt(0)}
                              </span>
                            </div>
                            <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                              {category.name}
                            </h3>
                          </div>
                          <p className="text-xs text-gray-500 mt-2 ml-10">
                            {category.subcategories.length} categories
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Subcategories Column */}
                    <div className="w-1/3 p-6 bg-gray-50">
                      {hoveredCategory && (
                        <div className="space-y-2">
                          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                            Categories
                          </h4>
                          {categories
                            .find((cat) => cat.id === hoveredCategory)
                            ?.subcategories.map((subcat) => (
                              <div
                                key={subcat.id}
                                className={`p-2 rounded-lg cursor-pointer transition-colors ${
                                  hoveredSubCategory === subcat.id
                                    ? 'bg-white shadow-sm'
                                    : 'hover:bg-white'
                                }`}
                                onMouseEnter={() => setHoveredSubCategory(subcat.id)}
                              >
                                <Link
                                  href={`/category/${subcat.slug}`}
                                  className="block text-sm font-medium text-gray-700 hover:text-teal-600"
                                >
                                  {subcat.name}
                                </Link>
                                {subcat.subcategories && (
                                  <span className="text-xs text-gray-400 ml-1">
                                    →
                                  </span>
                                )}
                              </div>
                            ))}
                        </div>
                      )}

                      {/* Third Level - Show when hovering subcategory */}
                      {hoveredSubCategory && (
                        <div className="mt-6 pt-6 border-t border-gray-200 space-y-2">
                          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                            Sub Categories
                          </h4>
                          {categories
                            .find((cat) => cat.id === hoveredCategory)
                            ?.subcategories.find((sub) => sub.id === hoveredSubCategory)
                            ?.subcategories?.map((subsubcat) => (
                              <Link
                                key={subsubcat.id}
                                href={`/category/${subsubcat.slug}`}
                                className="block p-2 text-sm text-gray-600 hover:text-teal-600 hover:bg-white rounded-lg transition-colors"
                              >
                                {subsubcat.name}
                                {subsubcat.products && (
                                  <span className="text-xs text-gray-400 ml-1">
                                    ({subsubcat.products.length})
                                  </span>
                                )}
                              </Link>
                            ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/category"
              className="px-4 py-2 text-gray-700 hover:text-teal-600 font-medium transition-colors rounded-lg hover:bg-teal-50"
            >
              Category
            </Link>
            <Link
              href="/catalog"
              className="px-4 py-2 text-gray-700 hover:text-teal-600 font-medium transition-colors rounded-lg hover:bg-teal-50"
            >
              Catalog
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-gray-700 hover:text-teal-600 font-medium transition-colors rounded-lg hover:bg-teal-50"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-gray-700 hover:text-teal-600 font-medium transition-colors rounded-lg hover:bg-teal-50"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-teal-600 hover:to-cyan-700 transition-all"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
