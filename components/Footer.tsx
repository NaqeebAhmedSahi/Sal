'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
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
    </>
  );
}
