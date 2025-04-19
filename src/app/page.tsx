'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import BuildPopup from '@/components/BuildPopup';

export default function Home() {
  const [isBuildPopupOpen, setIsBuildPopupOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show banner after scrolling down 100px
      if (window.scrollY > 100) {
        setShowPromo(true);
      } else {
        setShowPromo(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Promotional Banner */}
      <AnimatePresence>
        {showPromo && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="fixed top-0 left-0 right-0 bg-[#FF6B00] text-white py-1.5 text-center z-[9999]"
          >
            <div className="flex items-center justify-center gap-2 px-4 text-sm">
              <span className="hidden sm:inline">
                <svg className="w-5 h-5" fill="none" stroke="black" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <p className="font-medium">
                Get 10% OFF Your Custom PC Build!
              </p>
              <button
                onClick={() => setIsBuildPopupOpen(true)}
                className="bg-white/20 hover:bg-white/30 transition-colors px-4 py-0.5 rounded text-white font-medium"
              >
                Learn More
              </button>
              <button
                onClick={() => setShowPromo(false)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col min-h-screen bg-black">
        {/* Make margin-top conditional based on promo banner visibility */}
        <div className={`${showPromo ? 'mt-8' : ''} transition-spacing duration-300`}>
          <Navbar />
        </div>
        <BuildPopup isOpen={isBuildPopupOpen} onClose={() => setIsBuildPopupOpen(false)} />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Side Decorative Elements - Left */}
            <div className="absolute left-0 inset-y-0 w-32 hidden lg:flex flex-col items-center justify-center gap-24 z-20">
              <div className="w-px h-32 bg-gradient-to-b from-transparent via-[#FF6B00]/20 to-transparent"></div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col gap-8"
              >
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <div className="absolute inset-0 border border-[#FF6B00]/20 rounded-lg transform rotate-45"></div>
                  <svg className="w-6 h-6 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <div className="absolute inset-0 border border-[#FF6B00]/20 rounded-lg transform rotate-45"></div>
                  <svg className="w-6 h-6 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <div className="absolute inset-0 border border-[#FF6B00]/20 rounded-lg transform rotate-45"></div>
                  <svg className="w-6 h-6 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              </motion.div>
              <div className="w-px h-32 bg-gradient-to-b from-transparent via-[#FF6B00]/20 to-transparent"></div>
            </div>

            {/* Side Decorative Elements - Right */}
            <div className="absolute right-0 inset-y-0 w-32 hidden lg:flex flex-col items-center justify-center gap-24 z-20">
              <div className="w-px h-32 bg-gradient-to-b from-transparent via-[#FF6B00]/20 to-transparent"></div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col gap-8"
              >
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <div className="absolute inset-0 border border-[#FF6B00]/20 rounded-lg transform rotate-45"></div>
                  <svg className="w-6 h-6 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <div className="absolute inset-0 border border-[#FF6B00]/20 rounded-lg transform rotate-45"></div>
                  <svg className="w-6 h-6 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <div className="absolute inset-0 border border-[#FF6B00]/20 rounded-lg transform rotate-45"></div>
                  <svg className="w-6 h-6 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </motion.div>
              <div className="w-px h-32 bg-gradient-to-b from-transparent via-[#FF6B00]/20 to-transparent"></div>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-32 left-32 hidden lg:block z-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <div className="absolute -inset-4 border-t-2 border-l-2 border-[#FF6B00]/20 rounded-tl-3xl"></div>
                <div className="w-4 h-4 rounded-full bg-[#FF6B00]/20 animate-pulse-slow"></div>
              </motion.div>
            </div>
            <div className="absolute top-32 right-32 hidden lg:block z-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <div className="absolute -inset-4 border-t-2 border-r-2 border-[#FF6B00]/20 rounded-tr-3xl"></div>
                <div className="w-4 h-4 rounded-full bg-[#FF6B00]/20 animate-pulse-slow"></div>
              </motion.div>
            </div>
            <div className="absolute bottom-32 left-32 hidden lg:block z-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <div className="absolute -inset-4 border-b-2 border-l-2 border-[#FF6B00]/20 rounded-bl-3xl"></div>
                <div className="w-4 h-4 rounded-full bg-[#FF6B00]/20 animate-pulse-slow"></div>
              </motion.div>
            </div>
            <div className="absolute bottom-32 right-32 hidden lg:block z-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <div className="absolute -inset-4 border-b-2 border-r-2 border-[#FF6B00]/20 rounded-br-3xl"></div>
                <div className="w-4 h-4 rounded-full bg-[#FF6B00]/20 animate-pulse-slow"></div>
              </motion.div>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Base gradient with more dynamic colors */}
              <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/30 to-black z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-70"></div>
              </div>
              
              {/* Enhanced Circuit Pattern Overlay */}
              <div className="absolute inset-0 opacity-20 bg-[url('/images/circuit-pattern.png')] bg-repeat bg-[length:64px_64px] z-0 mix-blend-overlay animate-subtle-drift"></div>
              
              {/* Dynamic Grid Lines */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#FF6B0015_1px,transparent_1px),linear-gradient(to_bottom,#FF6B0015_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 animate-grid-pulse"></div>
              </motion.div>
              
              {/* Enhanced Glowing Orbs */}
              <div className="absolute -left-24 top-1/4 w-96 h-96 bg-gradient-radial from-[#FF6B00]/20 via-[#FF6B00]/5 to-transparent rounded-full filter blur-[96px] opacity-30 animate-float mix-blend-screen"></div>
              <div className="absolute -right-24 bottom-1/4 w-96 h-96 bg-gradient-radial from-[#FF6B00]/20 via-[#FF6B00]/5 to-transparent rounded-full filter blur-[96px] opacity-30 animate-float-delayed mix-blend-screen"></div>
              
              {/* Additional Ambient Light Effects */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-radial from-[#FF6B00]/5 to-transparent rounded-full filter blur-[120px] animate-pulse-slow"></div>
            </div>

            {/* Content Container with enhanced animations */}
            <div className="relative z-20 container mx-auto px-4 py-24 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#FF6B00] drop-shadow-[0_0_25px_rgba(255,107,0,0.2)] font-noto-sans">
                  Custom Power
                  <br />
                  <span className="relative inline-block">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FF6B00] font-noto-sans">
                      for Critical Wins
                    </span>
                    <motion.span
                      className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    ></motion.span>
                  </span>
                </h1>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-noto-sans">
                  Building purpose-built PC systems for Savannah's gamers, professionals, and enterprises locally
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center font-noto-sans"
              >
                <button 
                  onClick={() => setIsBuildPopupOpen(true)}
                  className="group relative px-8 py-4 bg-[#FF6B00] text-white rounded-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,107,0,0.3)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  <span className="relative z-10 text-lg font-bold tracking-wider">START YOUR BUILD</span>
                </button>

                <Link 
                  href="/products" 
                  className="group relative px-8 py-4 bg-transparent text-white border-2 border-white/10 rounded-lg transition-all duration-500 hover:border-[#FF6B00] hover:text-[#FF6B00] hover:shadow-[0_0_30px_rgba(255,107,0,0.15)] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[#FF6B00]/0 group-hover:bg-[#FF6B00]/5 transition-colors duration-500"></div>
                  <span className="relative z-10 text-lg font-bold tracking-wider">VIEW PRODUCTS</span>
                </Link>
              </motion.div>
            </div>

            {/* Enhanced Tech Decoration Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent z-20"></div>
            
            {/* Animated Tech Lines */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
              <motion.div 
                className="flex gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-glow"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-glow-delayed-1"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-glow-delayed-2"></div>
              </motion.div>
            </div>

            {/* Tech Accent Lines */}
            <div className="absolute bottom-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-[#FF6B00]/20 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-[#FF6B00]/20 to-transparent"></div>
          </section>

          {/* Local Savannah Section */}
          <section className="relative py-24 bg-gradient-to-b from-black to-zinc-900">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#FF6B0005_1px,transparent_1px),linear-gradient(to_bottom,#FF6B0005_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
            <div className="container mx-auto px-4 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-noto-sans">
                  <span className="text-white">Local Savannah</span>{" "}
                  <span className="text-[#FF6B00]">Expertise</span>
                </h2>
                <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-noto-sans">
                  Experience premium PC building right here in Savannah. Our local team of experts crafts
                  each system with precision and care, providing personalized service you can trust.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-7 space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5"
                  >
                    <div className="grid sm:grid-cols-2 divide-x divide-white/5">
                      <div className="p-8 group">
                        <div className="text-[#FF6B00] mb-4 flex items-center gap-3">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <h3 className="text-[#FF6B00] font-bold text-xl">Local Support</h3>
                        </div>
                        <div className="space-y-4">
                          <p className="text-gray-300">Direct access to our expert team in Savannah for:</p>
                          <ul className="text-gray-400 space-y-2">
                            <li className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]"></span>
                              In-person consultations
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]"></span>
                              Hardware troubleshooting
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]"></span>
                              System upgrades
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="p-8 group">
                        <div className="text-[#FF6B00] mb-4 flex items-center gap-3">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          <h3 className="text-[#FF6B00] font-bold text-xl">Quality Guarantee</h3>
                        </div>
                        <div className="space-y-4">
                          <p className="text-gray-300">Our commitment to excellence includes:</p>
                          <ul className="text-gray-400 space-y-2">
                            <li className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]"></span>
                              Rigorous testing
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]"></span>
                              Premium components
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]"></span>
                              Lifetime support
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-[#FF6B00]/10 to-transparent">
                      <div className="px-8 py-6 flex items-center justify-between">
                        <div className="text-white">
                          <span className="text-sm uppercase tracking-wider">Available Call Times</span>
                          <p className="text-lg font-medium">Mon-Thu: 6PM-10PM | Fri-Sat: 9AM-9PM</p>
                        </div>
                        <Link href="/contact" className="text-[#FF6B00] hover:text-white transition-colors">
                          Schedule Consultation →
                        </Link>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/5"
                  >
                    <h3 className="text-2xl font-bold text-white mb-4">Our Process</h3>
                    <div className="grid sm:grid-cols-3 gap-6">
                      <div className="relative pl-8">
                        <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-[#FF6B00] to-transparent"></div>
                        <span className="text-[#FF6B00] font-bold block mb-2">01. Consultation</span>
                        <p className="text-gray-400 text-sm">Discuss your needs and budget to create the perfect build plan</p>
                      </div>
                      <div className="relative pl-8">
                        <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-[#FF6B00] to-transparent"></div>
                        <span className="text-[#FF6B00] font-bold block mb-2">02. Assembly</span>
                        <p className="text-gray-400 text-sm">Expert assembly with premium components and careful cable management</p>
                      </div>
                      <div className="relative pl-8">
                        <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-[#FF6B00] to-transparent"></div>
                        <span className="text-[#FF6B00] font-bold block mb-2">03. Testing</span>
                        <p className="text-gray-400 text-sm">Comprehensive testing and benchmarking before delivery</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="lg:col-span-5 relative"
                >
                  <div className="sticky top-8">
                    <div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5">
                      <div className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-full bg-[#FF6B00] flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold text-white">Set Up Your Build Call</h3>
                        </div>
                        
                        <div className="space-y-6">
                          <div className="space-y-4">
                            <h4 className="text-[#FF6B00] font-semibold">During Your Build Call:</h4>
                            <ul className="space-y-3 text-gray-300">
                              <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 mt-1 text-[#FF6B00] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Discuss your needs and budget to create the perfect build plan</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 mt-1 text-[#FF6B00] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Review component options and performance targets</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 mt-1 text-[#FF6B00] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Get a detailed timeline and cost breakdown</span>
                              </li>
                            </ul>
                          </div>

                          <div className="space-y-4">
                            <h4 className="text-[#FF6B00] font-semibold">Available Call Times:</h4>
                            <div className="grid grid-cols-1 gap-4">
                              <div className="bg-white/5 p-4 rounded-lg">
                                <p className="text-white font-medium">Monday - Thursday</p>
                                <p className="text-gray-400">6:00 PM - 10:00 PM</p>
                              </div>
                              <div className="bg-white/5 p-4 rounded-lg">
                                <p className="text-white font-medium">Friday - Saturday</p>
                                <p className="text-gray-400">9:00 AM - 9:00 PM</p>
                              </div>
                              <div className="bg-white/5 p-4 rounded-lg">
                                <p className="text-white font-medium">Sunday</p>
                                <p className="text-gray-400">Closed</p>
                              </div>
                            </div>
                          </div>

                          <button
                            onClick={() => setIsBuildPopupOpen(true)}
                            className="w-full bg-[#FF6B00] text-white py-4 rounded-lg font-medium hover:bg-[#FF6B00]/90 transition-colors"
                          >
                            Schedule Your Build Call
                          </button>
                        </div>
                      </div>

                      <div className="border-t border-white/5 p-4 bg-white/5">
                        <p className="text-center text-sm text-gray-400">
                          Let's discuss your perfect PC build and make it happen
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-20 bg-zinc-900">
            <div className="container mx-auto px-4 font-noto-sans">
              <h2 className="text-4xl font-bold text-white text-center mb-16 font-noto-sans">Why Choose <span className="text-[#fd9547]">RocketScience</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="group p-8 border border-white/10 hover:border-[#fd9547]/50 transition-colors bg-black/50">
                    <div className="text-[#fd9547] mb-4 text-4xl">{feature.icon}</div>
                    <h3 className="text-white text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative py-20">
            <div className="absolute inset-0 bg-black">
              <div className="absolute inset-2 bg-[#FF6B00]">
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-[#FF6B00]"></div>
              </div>
            </div>
            <div className="relative container mx-auto px-4 text-center font-noto-sans">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Build Your Dream PC?</h2>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                Build your perfect PC system for gaming, professional work, or enterprise solutions right here in Savannah
              </p>
              <button 
                onClick={() => setIsBuildPopupOpen(true)}
                className="inline-block bg-black text-white px-12 py-4 text-lg font-medium uppercase tracking-wider hover:bg-black/80 transition-colors"
              >
                Start Your Build
              </button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

const features = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 4l5 5m0-5l-5 5M9 9l-2 2m0 4l2 2m4-2l2 2m0-4l-2 2" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Custom Built",
    description: "Every PC is meticulously assembled to your exact specifications by our expert team."
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12v5m0 5v-5" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Local Speed",
    description: "Being local means faster build times and immediate support when you need it."
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12c0 1.2-.3 2.4-.9 3.5l-1.8-1.8c.4-.5.7-1.1.7-1.7h2zm-9-9c4.4 0 8.1 3.1 8.9 7.2l-2 .3C18.3 7.4 15.4 5 12 5V3zm0 18c-2.2 0-4.2-.8-5.8-2.2l1.5-1.5c1.2 1 2.7 1.7 4.3 1.7v2zM4.5 19.5C3 17.9 2 15.6 2 13h2c0 1.9.7 3.6 2 4.9l-1.5 1.6zM2 11V5h6L5.5 7.5 8 10H2zm20 2v6h-6l2.5-2.5L16 14h6z" fill="#FF6B00"/>
      </svg>
    ),
    title: "Gaming Optimized",
    description: "Systems configured and tested for maximum gaming performance."
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 18a5 5 0 01-10 0M12 2a3 3 0 00-3 3v1h6V5a3 3 0 00-3-3zM9 6h6v2a3 3 0 11-6 0V6z" stroke="#FF6B00" strokeWidth="2"/>
        <path d="M12 11v4m-4 0h8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Lifetime Support",
    description: "Local technical support and maintenance for the lifetime of your system."
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 7H4a1 1 0 00-1 1v8a1 1 0 001 1h16a1 1 0 001-1V8a1 1 0 00-1-1z" stroke="#FF6B00" strokeWidth="2"/>
        <path d="M12 7v10M4 12h16" stroke="#FF6B00" strokeWidth="2"/>
        <rect x="7" y="9" width="2" height="2" fill="#FF6B00"/>
        <rect x="15" y="9" width="2" height="2" fill="#FF6B00"/>
      </svg>
    ),
    title: "Premium Components",
    description: "Only the highest quality, name-brand components in every build."
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#FF6B00"/>
        <circle cx="12" cy="12" r="3" fill="#FF6B00" fillOpacity="0.5"/>
      </svg>
    ),
    title: "Savannah's Best",
    description: "Trusted by local gamers and professionals for superior custom PCs."
  }
]; 