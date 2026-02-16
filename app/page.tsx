'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const products = [
  { name: 'Surgical Scissors', category: 'Surgical' },
  { name: 'Dental Forceps', category: 'Dental' },
  { name: 'Scalpel Blades', category: 'Surgical' },
  { name: 'Extraction Tools', category: 'Dental' },
  { name: 'Laser Devices', category: 'Beauty' },
  { name: 'Orthopedic Implants', category: 'Surgical' },
  { name: 'Dermal Fillers', category: 'Beauty' },
  { name: 'Periodontal Instruments', category: 'Dental' },
];

const stats = [
  { value: '20+', label: 'Years of Excellence' },
  { value: '5000+', label: 'Products Manufactured' },
  { value: '80+', label: 'Countries Served' },
  { value: '99.9%', label: 'Quality Assurance' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-900 min-h-[90vh] flex items-center">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
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
              left: `${i * 25}%`,
              top: `${i * 20}%`,
            }}
          />
        ))}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block mb-6"
              >
                <span className="px-4 py-2 bg-teal-500/20 border border-teal-400/30 rounded-full text-teal-300 text-sm font-semibold backdrop-blur-sm">
                  Premium Manufacturing Since 2006
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Crafted for <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Precision.</span>
                <br />
                Trusted <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Worldwide.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
              >
                <span className="text-white font-semibold">Saluvia Industries</span> is a distinguished manufacturer and exporter of premium{' '}
                <span className="text-teal-300">Surgical</span>,{' '}
                <span className="text-cyan-300">Dental</span>, and{' '}
                <span className="text-blue-300">Electrosurgical</span> instruments—engineered with uncompromising quality and refined craftsmanship.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg text-gray-400 mb-10 italic"
              >
                From concept to completion, every instrument reflects precision, durability, and professional excellence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/products"
                  className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold rounded-lg overflow-hidden shadow-2xl hover:shadow-teal-500/50 transition-all"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    EXPLORE COLLECTION
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>

                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all shadow-xl"
                >
                  REQUEST A PRIVATE QUOTE
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/20"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-teal-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Product Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-[600px] hidden lg:block"
            >
              {/* Floating Product Cards */}
              <div className="relative w-full h-full">
                {products.map((product, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-72 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl"
                    initial={{ 
                      x: Math.cos((index / products.length) * Math.PI * 2) * 200,
                      y: Math.sin((index / products.length) * Math.PI * 2) * 200,
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{ 
                      x: Math.cos((index / products.length) * Math.PI * 2) * 180,
                      y: Math.sin((index / products.length) * Math.PI * 2) * 180,
                      opacity: 0.9,
                      scale: 1,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: index * 0.5,
                    }}
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {product.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">
                          {product.name}
                        </div>
                        <div className="text-teal-300 text-xs">
                          {product.category}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Center Circle */}
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center shadow-2xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold">SI</div>
                    <div className="text-xs">Quality</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full">
            <motion.path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="#ffffff"
              animate={{
                d: [
                  "M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z",
                  "M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,64C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z",
                  "M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z",
                ],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Card */}
              <motion.div
                className="relative bg-gradient-to-br from-slate-900 to-teal-900 rounded-3xl p-12 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-grid-pattern opacity-10 rounded-3xl" />
                
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="text-teal-400 text-6xl mb-6">🏆</div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    World-Class Manufacturing
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Based in Sialkot, Pakistan — the global epicenter of surgical instrument excellence
                  </p>
                </motion.div>

                {/* Floating Stats Cards */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { icon: '🎯', label: 'Precision', value: '100%' },
                    { icon: '🔬', label: 'Quality', value: 'A++' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                    >
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <div className="text-2xl font-bold text-teal-400">{item.value}</div>
                      <div className="text-sm text-gray-300">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full p-8 shadow-2xl"
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <div className="text-white text-center">
                  <div className="text-3xl font-bold">ISO</div>
                  <div className="text-xs">Certified</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-6">
                  🔵 ABOUT SECTION
                </span>
                
                <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Excellence in Instrument{' '}
                  <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    Craftsmanship
                  </span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6 text-lg text-gray-700 leading-relaxed"
              >
                <p>
                  Located in <span className="font-semibold text-teal-700">Sialkot</span>, the world-renowned center of surgical manufacturing, 
                  <span className="font-semibold text-gray-900"> Saluvia Industries</span> represents a legacy of precision engineering 
                  combined with modern manufacturing innovation.
                </p>

                <p>
                  We specialize in producing <span className="font-semibold text-gray-900">high-performance instruments</span> using 
                  superior-grade stainless steel, advanced machining, and meticulous hand-finishing techniques. 
                  Every piece undergoes rigorous quality inspection to ensure flawless movement, corrosion resistance, 
                  and enduring performance.
                </p>

                <p>
                  Our commitment extends beyond manufacturing — we build <span className="font-semibold text-teal-700">long-term partnerships</span> with 
                  global distributors, medical brands, and private-label companies seeking reliability, exclusivity, 
                  and refined quality.
                </p>
              </motion.div>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-10 grid grid-cols-2 gap-4"
              >
                {[
                  { icon: '⚙️', text: 'Advanced Machining' },
                  { icon: '✋', text: 'Hand-Finished' },
                  { icon: '🔍', text: 'Quality Inspected' },
                  { icon: '🌍', text: 'Global Partnerships' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-md border border-gray-100"
                  >
                    <span className="text-2xl">{feature.icon}</span>
                    <span className="font-medium text-gray-800">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <Link
                  href="/about"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:from-teal-700 hover:to-cyan-700 transition-all"
                >
                  <span>DISCOVER OUR STORY</span>
                  <motion.svg
                    className="ml-3 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </Link>
              </motion.div>

              {/* Decorative Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-12 h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-transparent rounded-full origin-left"
              />
            </div>
          </div>
        </div>

        {/* Animated Background Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-px">
          <motion.div
            className="h-full bg-gradient-to-r from-transparent via-teal-500 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M50 0v100M0 50h100' stroke='%2314b8a6' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px',
            }}
          />
        </div>

        {/* Floating Orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{
              background: `radial-gradient(circle, ${
                i === 0 ? '#14b8a6' : i === 1 ? '#06b6d4' : '#8b5cf6'
              } 0%, transparent 70%)`,
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 bg-teal-500/20 border border-teal-400/30 rounded-full text-teal-300 text-sm font-bold mb-6 backdrop-blur-sm"
            >
              🔵 PRODUCT CATEGORIES
            </motion.span>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
              Our Premium Instrument{' '}
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Collections
              </span>
            </h2>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Surgical Instruments */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative bg-gradient-to-br from-teal-900/50 to-cyan-900/50 backdrop-blur-xl rounded-3xl p-8 border border-teal-500/20 shadow-2xl overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-4xl">🔬</span>
                </motion.div>

                <h3 className="text-3xl font-bold text-white mb-3">
                  Surgical Instruments
                </h3>
                
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Designed for accuracy in the most demanding surgical environments.
                  <br />
                  <span className="text-teal-300 font-semibold">
                    Balanced weight. Smooth articulation. Impeccable finishing.
                  </span>
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {[
                    'Precision Scissors',
                    'Needle Holders',
                    'Tissue & Hemostatic Forceps',
                    'Retractors & Probes',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-gray-200"
                    >
                      <span className="w-2 h-2 bg-teal-400 rounded-full mr-3" />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href="/category/surgical-instruments"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold rounded-xl hover:from-teal-600 hover:to-cyan-700 transition-all shadow-lg hover:shadow-teal-500/50"
                >
                  VIEW SURGICAL COLLECTION
                  <motion.svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </Link>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/20 to-transparent rounded-bl-full" />
            </motion.div>

            {/* Dental Instruments */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/20 shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 transition-all duration-500" />
              
              <div className="relative z-10">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-4xl">🦷</span>
                </motion.div>

                <h3 className="text-3xl font-bold text-white mb-3">
                  Dental Instruments
                </h3>
                
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Engineered for control, comfort, and clinical performance.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    'Extraction Forceps',
                    'Elevators',
                    'Scalers & Curettes',
                    'Orthodontic Pliers',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-gray-200"
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                <Link
                  href="/category/dental-equipment"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-blue-500/50"
                >
                  VIEW DENTAL COLLECTION
                  <motion.svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </Link>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full" />
            </motion.div>

            {/* Electrosurgical Instruments */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" />
              
              <div className="relative z-10">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-4xl">⚡</span>
                </motion.div>

                <h3 className="text-3xl font-bold text-white mb-3">
                  Electrosurgical Instruments
                </h3>
                
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Advanced instruments designed for precision energy control and surgical efficiency.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    'Bipolar Forceps',
                    'Monopolar Electrodes',
                    'Electrosurgical Accessories',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-gray-200"
                    >
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                <Link
                  href="/category/electrosurgical"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-500/50"
                >
                  EXPLORE ELECTROSURGICAL
                  <motion.svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </Link>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full" />
            </motion.div>

            {/* Beauty Instruments */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative bg-gradient-to-br from-rose-900/50 to-orange-900/50 backdrop-blur-xl rounded-3xl p-8 border border-rose-500/20 shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/0 to-orange-500/0 group-hover:from-rose-500/10 group-hover:to-orange-500/10 transition-all duration-500" />
              
              <div className="relative z-10">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-rose-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-4xl">✨</span>
                </motion.div>

                <h3 className="text-3xl font-bold text-white mb-3">
                  Beauty Instruments
                </h3>
                
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Refined tools crafted for precision grooming and professional results.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    'Nail Nippers',
                    'Cuticle Scissors',
                    'Precision Tweezers',
                    'Manicure & Pedicure Sets',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-gray-200"
                    >
                      <span className="w-2 h-2 bg-rose-400 rounded-full mr-3" />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                <Link
                  href="/category/beauty-instruments"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-500 to-orange-600 text-white font-bold rounded-xl hover:from-rose-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-rose-500/50"
                >
                  VIEW BEAUTY COLLECTION
                  <motion.svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </Link>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-500/20 to-transparent rounded-bl-full" />
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <p className="text-gray-400 text-lg mb-6">
              Need a custom solution or bulk order?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-2xl"
            >
              GET IN TOUCH WITH OUR TEAM
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Saluvia Industries Section */}
      <section className="relative py-32 bg-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-50 to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-6">
                  🔵 WHY SALUVIA INDUSTRIES
                </span>
                
                <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  The Standard of{' '}
                  <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    Distinction
                  </span>
                </h2>
              </motion.div>

              {/* Features List */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-5 mb-10"
              >
                {[
                  { icon: '🔹', text: 'Superior Stainless Steel Selection' },
                  { icon: '🔹', text: 'Precision Forging & Fine Grinding' },
                  { icon: '🔹', text: 'Seamless Joint Movement' },
                  { icon: '🔹', text: 'Mirror & Satin Professional Finishing' },
                  { icon: '🔹', text: 'Custom OEM & Private Branding' },
                  { icon: '🔹', text: 'Global Export Expertise' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center space-x-4 group"
                  >
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <span className="text-lg font-semibold text-gray-800 group-hover:text-teal-700 transition-colors">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Quote Box */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-slate-900 to-teal-900 rounded-2xl p-8 text-white shadow-2xl"
              >
                <div className="absolute top-4 left-4 text-6xl text-teal-400 opacity-20">"</div>
                <p className="relative text-xl font-light italic leading-relaxed mb-2">
                  We do not manufacture volume alone —
                </p>
                <p className="text-2xl font-bold bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
                  we manufacture reputation.
                </p>
                <div className="absolute bottom-4 right-4 text-6xl text-teal-400 opacity-20 rotate-180">"</div>
              </motion.div>
            </div>

            {/* Right Side - Visual Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Image Placeholder / Visual Element */}
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { icon: '⚙️', title: 'Premium Materials', color: 'from-teal-500 to-cyan-600' },
                  { icon: '🔧', title: 'Expert Crafting', color: 'from-blue-500 to-indigo-600' },
                  { icon: '✨', title: 'Perfect Finish', color: 'from-purple-500 to-pink-600' },
                  { icon: '🌍', title: 'Global Reach', color: 'from-cyan-500 to-teal-600' },
                ].map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className={`relative bg-gradient-to-br ${card.color} rounded-2xl p-8 text-white shadow-xl cursor-pointer`}
                  >
                    <div className="text-5xl mb-4">{card.icon}</div>
                    <h4 className="text-lg font-bold">{card.title}</h4>
                    <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 rounded-2xl transition-opacity" />
                  </motion.div>
                ))}
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl border-4 border-teal-500"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-600">20+</div>
                  <div className="text-sm text-gray-600 font-semibold">Years Excellence</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314b8a6' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-6">
              🔵 QUALITY COMMITMENT
            </span>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Where Precision Meets{' '}
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Perfection
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each instrument is produced under carefully controlled manufacturing processes
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-teal-200 via-cyan-300 to-teal-200 transform -translate-y-1/2 rounded-full" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { 
                  icon: '🔬', 
                  title: 'Raw Material Verification',
                  step: '01',
                  color: 'from-teal-500 to-cyan-600'
                },
                { 
                  icon: '⚒️', 
                  title: 'Forging & Shaping Accuracy',
                  step: '02',
                  color: 'from-cyan-500 to-blue-600'
                },
                { 
                  icon: '⚙️', 
                  title: 'Precision Grinding & Alignment',
                  step: '03',
                  color: 'from-blue-500 to-indigo-600'
                },
                { 
                  icon: '🔧', 
                  title: 'Joint Calibration & Smoothness Testing',
                  step: '04',
                  color: 'from-indigo-500 to-purple-600'
                },
                { 
                  icon: '✨', 
                  title: 'Final Inspection & Professional Polishing',
                  step: '05',
                  color: 'from-purple-500 to-pink-600'
                },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Step Card */}
                  <motion.div
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                  >
                    {/* Step Number */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">{process.step}</span>
                    </div>

                    {/* Icon */}
                    <motion.div
                      className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${process.color} rounded-2xl flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <span className="text-4xl">{process.icon}</span>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-center text-gray-800 font-bold text-base leading-tight min-h-[3rem]">
                      {process.title}
                    </h3>

                    {/* Decorative Bottom Bar */}
                    <motion.div
                      className={`mt-4 h-1 bg-gradient-to-r ${process.color} rounded-full`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>

                  {/* Arrow (hidden on mobile and last item) */}
                  {index < 4 && (
                    <motion.div
                      className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      <svg className="w-8 h-8 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 shadow-2xl">
              <p className="text-2xl font-bold text-white">
                Our instruments are designed to perform consistently —<br />
                <span className="text-teal-200">procedure after procedure.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OEM & Private Label Services Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%236366f1' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Glowing Orbs */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-20"
            style={{
              width: `${300 + i * 50}px`,
              height: `${300 + i * 50}px`,
              background: `radial-gradient(circle, ${
                ['#6366f1', '#8b5cf6', '#06b6d4', '#14b8a6'][i]
              } 0%, transparent 70%)`,
              left: `${i * 25}%`,
              top: `${i * 15}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -80, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-indigo-300 text-sm font-semibold mb-6 backdrop-blur-sm">
                  🔵 OEM & PRIVATE LABEL SERVICES
                </span>
                
                <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Build Your Brand with{' '}
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Confidence
                  </span>
                </h2>

                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                  Saluvia Industries offers discreet and professional OEM solutions:
                </p>
              </motion.div>

              {/* Services List */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6 mb-12"
              >
                {[
                  { icon: '🏷️', title: 'Custom Logo Engraving', desc: 'Precision laser etching on instruments' },
                  { icon: '📦', title: 'Private Label Packaging', desc: 'Branded boxes and presentation cases' },
                  { icon: '✏️', title: 'Custom Design Development', desc: 'Tailored instrument specifications' },
                  { icon: '🏭', title: 'Bulk Production with Consistent Quality', desc: 'Scalable manufacturing capacity' },
                  { icon: '🤝', title: 'Long-Term Supply Partnerships', desc: 'Reliable delivery schedules' },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="group flex items-start space-x-4 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-indigo-400/50 transition-all"
                  >
                    <motion.div
                      className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/50 transition-shadow"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-2xl">{service.icon}</span>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-400">{service.desc}</p>
                    </div>
                    <motion.svg
                      className="w-5 h-5 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </motion.div>
                ))}
              </motion.div>

              {/* Bottom Statement */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full" />
                <p className="relative text-xl font-bold text-white leading-relaxed">
                  We empower global brands with{' '}
                  <span className="text-indigo-200">dependable manufacturing excellence.</span>
                </p>
              </motion.div>
            </div>

            {/* Right Side - Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Card Stack */}
              <div className="relative">
                {/* Card 1 - Front */}
                <motion.div
                  className="relative bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-10 shadow-2xl"
                  whileHover={{ scale: 1.02, rotate: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <div className="text-white/80 text-sm font-semibold mb-2">YOUR BRAND</div>
                      <div className="text-3xl font-bold text-white">Premium Instruments</div>
                    </div>
                    <div className="w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                      <span className="text-4xl">🏆</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {['Custom Branding', 'Private Label', 'OEM Solutions'].map((text, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center text-white"
                      >
                        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {text}
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-white/20">
                    <div className="text-white/80 text-sm">Manufactured by</div>
                    <div className="text-white font-bold text-lg">Saluvia Industries</div>
                  </div>
                </motion.div>

                {/* Card 2 - Background (slightly offset) */}
                <motion.div
                  className="absolute top-4 -right-4 w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl -z-10"
                  animate={{ 
                    rotate: [0, 2, 0],
                    y: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />

                {/* Card 3 - Background (more offset) */}
                <motion.div
                  className="absolute top-8 -right-8 w-full h-full bg-gradient-to-br from-cyan-600 to-blue-600 rounded-3xl -z-20"
                  animate={{ 
                    rotate: [0, -2, 0],
                    y: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    500+
                  </div>
                  <div className="text-sm text-gray-600 font-semibold">Global Partners</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="text-center mt-24"
          >
            <Link
              href="/oem-services"
              className="inline-flex items-center px-10 py-5 bg-white text-slate-900 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all shadow-2xl hover:shadow-white/20"
            >
              START YOUR PRIVATE LABEL PROJECT
              <motion.svg
                className="ml-3 w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-24 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
            animate={{ x: [0, 60, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Floating Elements */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full blur-3xl opacity-20"
            style={{
              background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)',
              left: `${20 + i * 30}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
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
            <span className="inline-block px-4 py-2 bg-white/20 border border-white/30 rounded-full text-white text-sm font-semibold mb-6 backdrop-blur-sm">
              🔵 NEWSLETTER SECTION
            </span>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Join Our Global Network
            </h2>
            
            <p className="text-xl text-teal-50 mb-10">
              Receive exclusive updates, new product releases, and catalog access.
            </p>
          </motion.div>

          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4 bg-white/10 backdrop-blur-lg rounded-2xl p-3 border border-white/20 shadow-2xl">
              <motion.input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 px-6 py-4 bg-white rounded-xl text-gray-900 placeholder-gray-500 font-medium focus:outline-none focus:ring-4 focus:ring-white/30 transition-all"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-slate-900 to-gray-900 text-white font-bold rounded-xl hover:from-slate-800 hover:to-gray-800 transition-all shadow-lg flex items-center justify-center space-x-2"
              >
                <span>SUBSCRIBE</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-4 text-sm text-teal-100"
            >
              🔒 We respect your privacy. Unsubscribe at any time.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20"
          >
            {[
              { value: '10K+', label: 'Subscribers' },
              { value: '50+', label: 'Countries' },
              { value: 'Weekly', label: 'Updates' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-teal-100">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center space-x-2 mb-6 group">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">SI</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white">Saluvia</span>
                  <span className="text-xs text-gray-400 font-medium tracking-wide">INDUSTRIES</span>
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Premium manufacturer of surgical, dental, and beauty instruments. Delivering excellence since 2006.
              </p>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((social, i) => (
                  <motion.a
                    key={social}
                    href={`#${social}`}
                    whileHover={{ scale: 1.2, y: -3 }}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors"
                  >
                    <span className="text-xl">{['📘', '🐦', '💼', '📷'][i]}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-bold text-lg mb-6">Products</h3>
              <ul className="space-y-3">
                {[
                  { name: 'Surgical Instruments', href: '/category/surgical-instruments' },
                  { name: 'Dental Equipment', href: '/category/dental-equipment' },
                  { name: 'Electrosurgical', href: '/category/electrosurgical' },
                  { name: 'Beauty Instruments', href: '/category/beauty-instruments' },
                  { name: 'All Products', href: '/products' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-teal-400 transition-colors flex items-center group"
                    >
                      <motion.span
                        className="mr-2 opacity-0 group-hover:opacity-100"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-bold text-lg mb-6">Company</h3>
              <ul className="space-y-3">
                {[
                  { name: 'About Us', href: '/about' },
                  { name: 'Our Story', href: '/about#story' },
                  { name: 'Quality Standards', href: '/quality' },
                  { name: 'OEM Services', href: '/oem-services' },
                  { name: 'Certifications', href: '/certifications' },
                  { name: 'Careers', href: '/careers' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-teal-400 transition-colors flex items-center group"
                    >
                      <motion.span
                        className="mr-2 opacity-0 group-hover:opacity-100"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-bold text-lg mb-6">Support</h3>
              <ul className="space-y-3">
                {[
                  { name: 'Contact Us', href: '/contact' },
                  { name: 'Catalog Download', href: '/catalog' },
                  { name: 'Request Quote', href: '/contact#quote' },
                  { name: 'Shipping Info', href: '/shipping' },
                  { name: 'FAQ', href: '/faq' },
                  { name: 'Privacy Policy', href: '/privacy' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-teal-400 transition-colors flex items-center group"
                    >
                      <motion.span
                        className="mr-2 opacity-0 group-hover:opacity-100"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Footer Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-slate-800"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-white font-bold text-lg mb-1 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Saluvia Industries — Precision Without Compromise.
                </p>
                <p className="text-gray-500 text-sm">
                  © 2026 Saluvia Industries. All Rights Reserved.
                </p>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <Link href="/terms" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Terms of Service
                </Link>
                <span className="text-gray-700">|</span>
                <Link href="/privacy" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-gray-700">|</span>
                <Link href="/sitemap" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Bottom Bar */}
        <div className="h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500" />
      </footer>
    </div>
  );
}
