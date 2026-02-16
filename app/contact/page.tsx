'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              GET IN TOUCH
            </motion.span>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Let's Start a{' '}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Conversation
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Have questions about our products or services? Our team is here to help you find the perfect solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 -mt-32 relative z-10">
            {[
              {
                icon: '📧',
                title: 'Email Us',
                content: 'info@saluviaindustries.com',
                subContent: 'sales@saluviaindustries.com',
                color: 'from-teal-500 to-cyan-600',
              },
              {
                icon: '📞',
                title: 'Call Us',
                content: '+92 300 1234567',
                subContent: '+92 300 7654321',
                color: 'from-blue-500 to-indigo-600',
              },
              {
                icon: '📍',
                title: 'Visit Us',
                content: 'Sialkot, Punjab',
                subContent: 'Pakistan',
                color: 'from-purple-500 to-pink-600',
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100"
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${card.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-3xl">{card.icon}</span>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-teal-600 font-semibold text-lg mb-1">{card.content}</p>
                <p className="text-gray-600">{card.subContent}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-6">
                SEND US A MESSAGE
              </span>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Request a Quote or Ask a Question
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-teal-100 focus:border-teal-500 transition-all"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-teal-100 focus:border-teal-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-teal-100 focus:border-teal-500 transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-teal-100 focus:border-teal-500 transition-all"
                      placeholder="Your Company"
                    />
                  </motion.div>
                </div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-teal-100 focus:border-teal-500 transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="quote">Request a Quote</option>
                    <option value="product">Product Inquiry</option>
                    <option value="oem">OEM/Private Label</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-teal-100 focus:border-teal-500 transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl hover:from-teal-700 hover:to-cyan-700 transition-all flex items-center justify-center space-x-2"
                >
                  <span>SEND MESSAGE</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our Privacy Policy.
                </p>
              </form>
            </motion.div>

            {/* Right Side - Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Business Hours */}
              <div className="bg-gradient-to-br from-teal-600 to-cyan-700 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="text-3xl mr-3">🕐</span>
                  Business Hours
                </h3>
                <div className="space-y-4">
                  {[
                    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
                    { day: 'Saturday', time: '9:00 AM - 2:00 PM' },
                    { day: 'Sunday', time: 'Closed' },
                  ].map((schedule, index) => (
                    <motion.div
                      key={schedule.day}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex justify-between items-center pb-4 border-b border-white/20 last:border-0"
                    >
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-teal-100">{schedule.time}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-teal-100">
                  📧 24/7 Email support available
                </p>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Quick Links
                </h3>
                <div className="space-y-4">
                  {[
                    { name: 'Download Catalog', href: '/catalog', icon: '📥' },
                    { name: 'Product Range', href: '/products', icon: '🔬' },
                    { name: 'OEM Services', href: '/oem-services', icon: '🏭' },
                    { name: 'Quality Standards', href: '/quality', icon: '✓' },
                  ].map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      whileHover={{ x: 10 }}
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-teal-50 transition-colors group"
                    >
                      <span className="text-2xl">{link.icon}</span>
                      <span className="font-semibold text-gray-700 group-hover:text-teal-700">
                        {link.name}
                      </span>
                      <svg className="w-5 h-5 ml-auto text-gray-400 group-hover:text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl h-64 flex items-center justify-center overflow-hidden shadow-lg"
              >
                <div className="text-center">
                  <span className="text-6xl mb-4 block">🗺️</span>
                  <p className="text-gray-600 font-semibold">Sialkot, Pakistan</p>
                  <p className="text-sm text-gray-500">Global Surgical Hub</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-6">
              FREQUENTLY ASKED
            </span>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'What is your minimum order quantity?',
                a: 'Our MOQ varies by product. For standard items, we typically require a minimum of 50-100 pieces. For custom OEM orders, please contact us for specific requirements.',
              },
              {
                q: 'Do you offer samples before bulk orders?',
                a: 'Yes, we provide samples for quality evaluation. Sample costs are refundable upon placing a bulk order.',
              },
              {
                q: 'What certifications do your products have?',
                a: 'Our products are ISO 13485 certified, CE marked, and FDA registered. We also provide individual product certifications upon request.',
              },
              {
                q: 'What is the typical lead time for orders?',
                a: 'Standard products: 2-3 weeks. Custom/OEM orders: 4-6 weeks. Rush orders can be accommodated based on availability.',
              },
              {
                q: 'Do you ship internationally?',
                a: 'Yes, we ship worldwide to over 80 countries. We work with reliable logistics partners to ensure safe and timely delivery.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-start">
                  <span className="text-teal-600 mr-3 text-xl">Q:</span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 ml-8">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
