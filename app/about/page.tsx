'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function AboutPage() {
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
        {[...Array(4)].map((_, i) => (
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
              ABOUT SALUVIA INDUSTRIES
            </motion.span>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Precision Crafted.{' '}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Globally Trusted.
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              For over two decades, we've been manufacturing world-class surgical, dental, and beauty instruments 
              from the heart of Sialkot—delivering excellence to professionals in over 80 countries.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {[
              { value: '20+', label: 'Years Experience' },
              { value: '5000+', label: 'Products' },
              { value: '80+', label: 'Countries' },
              { value: '99.9%', label: 'Quality Rate' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center"
              >
                <div className="text-4xl font-bold text-teal-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-6">
                OUR STORY
              </span>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                A Legacy of{' '}
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h2>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in <span className="font-bold text-teal-700">2006</span> in Sialkot, Pakistan—
                  the global capital of surgical instrument manufacturing—Saluvia Industries began with a 
                  clear mission: to craft instruments that meet the highest standards of precision and reliability.
                </p>

                <p>
                  What started as a small workshop has grown into a <span className="font-semibold text-gray-900">
                  state-of-the-art manufacturing facility</span>, serving medical professionals, distributors, 
                  and brands worldwide. Our growth is rooted in our unwavering commitment to quality, 
                  innovation, and customer satisfaction.
                </p>

                <p>
                  Today, Saluvia Industries stands as a trusted name in the industry, known for our 
                  <span className="font-semibold text-teal-700"> superior craftsmanship</span>, 
                  ethical business practices, and ability to deliver custom solutions that empower our partners.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8 flex flex-wrap gap-4"
              >
                {['ISO Certified', 'CE Approved', 'FDA Registered'].map((badge, i) => (
                  <motion.div
                    key={badge}
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-lg shadow-lg"
                  >
                    ✓ {badge}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline */}
              <div className="space-y-8">
                {[
                  { year: '2006', title: 'Foundation', desc: 'Saluvia Industries established in Sialkot' },
                  { year: '2010', title: 'Global Expansion', desc: 'Exporting to 20+ countries' },
                  { year: '2015', title: 'ISO Certification', desc: 'Achieved international quality standards' },
                  { year: '2020', title: 'Innovation Hub', desc: 'Advanced R&D facility launched' },
                  { year: '2026', title: 'Industry Leader', desc: 'Serving 80+ countries worldwide' },
                ].map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow">
                      <span className="text-white font-bold text-lg">{milestone.year}</span>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-xl p-6 group-hover:bg-teal-50 transition-colors">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-6">
              MISSION & VISION
            </span>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Drives Us Forward
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative bg-gradient-to-br from-teal-600 to-cyan-700 rounded-3xl p-12 text-white shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-4xl">🎯</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                <p className="text-teal-50 text-lg leading-relaxed">
                  To manufacture surgical, dental, and beauty instruments of uncompromising quality that 
                  empower medical professionals worldwide. We are committed to precision, innovation, 
                  and building lasting partnerships through reliability and excellence.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-12 text-white shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-4xl">🌟</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                <p className="text-indigo-50 text-lg leading-relaxed">
                  To be recognized globally as the premier manufacturer of precision instruments—
                  setting industry benchmarks for quality, craftsmanship, and customer service. 
                  We envision a future where Saluvia Industries is synonymous with trust and excellence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-6">
              CORE VALUES
            </span>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The Principles We Live By
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Excellence',
                desc: 'We pursue perfection in every instrument we craft, never compromising on quality.',
                color: 'from-yellow-500 to-orange-600'
              },
              {
                icon: '🤝',
                title: 'Integrity',
                desc: 'Honesty and transparency guide every interaction with our partners and customers.',
                color: 'from-blue-500 to-indigo-600'
              },
              {
                icon: '🔬',
                title: 'Innovation',
                desc: 'Continuous improvement and modern techniques keep us at the forefront of our industry.',
                color: 'from-teal-500 to-cyan-600'
              },
              {
                icon: '🌍',
                title: 'Global Reach',
                desc: 'We serve customers worldwide with the same dedication and precision.',
                color: 'from-green-500 to-emerald-600'
              },
              {
                icon: '👥',
                title: 'Customer Focus',
                desc: 'Your success is our success. We build products and relationships that last.',
                color: 'from-purple-500 to-pink-600'
              },
              {
                icon: '🏆',
                title: 'Reliability',
                desc: 'Consistent quality, on-time delivery, and dependable service—every single time.',
                color: 'from-red-500 to-rose-600'
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-3xl">{value.icon}</span>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-teal-500/20 border border-teal-400/30 rounded-full text-teal-300 text-sm font-semibold mb-6">
              MANUFACTURING EXCELLENCE
            </span>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              State-of-the-Art Facility
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our modern facility in Sialkot combines traditional craftsmanship with cutting-edge technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🏭', number: '25,000', label: 'Sq. Ft. Facility', color: 'from-teal-500 to-cyan-600' },
              { icon: '👨‍🔧', number: '150+', label: 'Skilled Workers', color: 'from-blue-500 to-indigo-600' },
              { icon: '⚙️', number: '50+', label: 'CNC Machines', color: 'from-purple-500 to-pink-600' },
              { icon: '📦', number: '10K+', label: 'Units/Month', color: 'from-orange-500 to-red-600' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20"
              >
                <motion.div
                  className={`w-20 h-20 mx-auto bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-4xl">{stat.icon}</span>
                </motion.div>
                <div className="text-4xl font-bold text-teal-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-teal-50 mb-10">
              Join hundreds of satisfied clients worldwide who trust Saluvia Industries for their instrument needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-teal-700 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-2xl"
              >
                GET IN TOUCH
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/catalog"
                className="inline-flex items-center px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-2xl"
              >
                DOWNLOAD CATALOG
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
