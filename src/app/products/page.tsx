'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import BuildPopup from '@/components/BuildPopup';

const products = [
  {
    name: "RS STARTER",
    description: "GAMER ESSENTIAL PC",
    price: 999,
    specs: {
      cpu: "AMD Ryzen™ 5 5600X",
      gpu: "NVIDIA® GeForce RTX™ 3060",
      ram: "16GB DDR4-3200",
      storage: "1TB NVMe SSD",
      rating: 4.5,
      reviews: 28,
      fps: 240
    },
    image: "/products/RSStarter.png",
    savings: 100
  },
  {
    name: "RS ADVANCED",
    description: "AMD GAMING PC",
    price: 1299,
    specs: {
      cpu: "AMD Ryzen™ 7 5800X",
      gpu: "NVIDIA® GeForce RTX™ 4060",
      ram: "32GB DDR4-3600",
      storage: "2TB NVMe SSD",
      rating: 4.7,
      reviews: 42,
      fps: 260
    },
    image: "/products/RSAtlas.png",
    savings: 200
  },
  {
    name: "RS PRO",
    description: "INTEL GAMING PC",
    price: 1599,
    specs: {
      cpu: "Intel® Core™ i7-14700K",
      gpu: "NVIDIA® GeForce RTX™ 4070",
      ram: "32GB DDR5-6000",
      storage: "2TB NVMe SSD",
      rating: 4.8,
      reviews: 35,
      fps: 280
    },
    image: "/products/RSOptivance.png",
    savings: 150
  },
  {
    name: "RS ELITE",
    description: "PREMIUM GAMING PC",
    price: 1999,
    specs: {
      cpu: "Intel® Core™ i9-14900K",
      gpu: "NVIDIA® GeForce RTX™ 4080",
      ram: "64GB DDR5-6400",
      storage: "4TB NVMe SSD",
      rating: 4.9,
      reviews: 21,
      fps: 360
    },
    image: "/products/RSNovacore.png",
    savings: 300
  }
];

export default function Products() {
  const [selectedFps, setSelectedFps] = useState(120);
  const [isBuildPopupOpen, setIsBuildPopupOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      
      <main className="flex-grow">
        <BuildPopup isOpen={isBuildPopupOpen} onClose={() => setIsBuildPopupOpen(false)} />
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Circuit board pattern background */}
          <div className="absolute inset-0 bg-[url('/patterns/circuit.png')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-transparent"></div>
          
          {/* Animated tech lines */}
          <div className="absolute inset-0">
            {/* Horizontal lines */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`h-line-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-[#fd9547]/30 to-transparent w-full"
                style={{ top: `${20 * (i + 1)}%` }}
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
            {/* Vertical lines */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`v-line-${i}`}
                className="absolute w-px bg-gradient-to-b from-transparent via-[#fd9547]/20 to-transparent h-full"
                style={{ left: `${33.33 * (i + 1)}%` }}
                initial={{ y: "-100%" }}
                animate={{ y: "100%" }}
                transition={{
                  duration: 5,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="mb-8"
              >
                <div className="inline-block relative">
                  <h1 className="text-7xl font-bold text-white mb-2 relative z-10">
                    CUSTOM <span className="text-[#fd9547] glow">PCS</span>
                  </h1>
                  <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-[#fd9547]/10 to-transparent blur-xl"></div>
                </div>
                <div className="flex items-center justify-center gap-4 text-2xl text-gray-400 font-light tracking-widest">
                  <span className="text-[#fd9547]">/</span>
                  <span>GAMING</span>
                  <span className="text-[#fd9547]">/</span>
                  <span>ENTERPRISE</span>
                  <span className="text-[#fd9547]">/</span>
                  <span>PROFESSIONAL</span>
                  <span className="text-[#fd9547]">/</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex justify-center gap-6"
              >
                <button 
                  onClick={() => setIsBuildPopupOpen(true)}
                  className="group relative px-12 py-4 bg-black text-white text-lg font-bold overflow-hidden border border-[#fd9547] hover:border-[#fd9547]/0 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-[#fd9547] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[url('/patterns/circuit.png')] bg-opacity-10"></div>
                  <span className="relative z-10 inline-flex items-center">
                    START BUILD
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Disclaimer Banner */}
        <section className="relative py-6 overflow-hidden">
          <div className="absolute inset-0 bg-[#fd9547]/15"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#fd9547]/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#fd9547]/30 to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="flex items-center justify-center gap-4">
              <div className="hidden md:block h-px w-24 bg-gradient-to-r from-transparent to-[#fd9547]/50"></div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#fd9547]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-center font-mono text-[#fd9547] tracking-wide flex items-center gap-3">
                  BUILD CALLS NECESSARY FOR ALL PURCHASES TO ENSURE YOUR EXACT NEEDS ARE MET
                  <svg className="w-5 h-5 text-[#fd9547]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </p>
              </div>
              <div className="hidden md:block h-px w-24 bg-gradient-to-l from-transparent to-[#fd9547]/50"></div>
            </div>
          </div>
        </section>

        {/* Products Grid Section */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-[url('/patterns/circuit.png')] opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <div className="inline-block">
                <h2 className="text-5xl font-bold text-white mb-4 relative">
                  <span className="relative z-10">BASE MODELS</span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-[#fd9547]/10 to-transparent blur-lg"></div>
                </h2>
                <div className="flex items-center justify-center gap-2 text-sm tracking-widest">
                  <span className="text-[#fd9547]">01</span>
                  <div className="h-px w-12 bg-gradient-to-r from-[#fd9547] to-transparent"></div>
                  <span className="text-gray-400">SELECT YOUR BASE</span>
                  <div className="h-px w-12 bg-gradient-to-l from-[#fd9547] to-transparent"></div>
                  <span className="text-[#fd9547]">04</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-black rounded overflow-hidden"
                >
                  {/* Tech border effect */}
                  <div className="absolute inset-0 p-px bg-gradient-to-b from-[#fd9547]/50 via-[#fd9547]/0 to-[#fd9547]/30">
                    <div className="absolute inset-0 bg-black"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    {/* Product Image */}
                    <div className="relative aspect-square overflow-hidden bg-black">
                      <div className="absolute inset-0 bg-[url('/patterns/circuit.png')] opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {product.savings > 0 && (
                        <div className="absolute top-4 right-4">
                          <div className="relative">
                            <div className="absolute -inset-1 bg-[#fd9547] blur-sm"></div>
                            <div className="relative bg-[#fd9547] px-4 py-1 text-sm font-bold text-white">
                              Save ${product.savings}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-8 relative">
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[#fd9547] text-sm font-mono">[{String(index + 1).padStart(2, '0')}]</span>
                          <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                        </div>
                        <p className="text-[#fd9547] font-bold tracking-wider">{product.description}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <div>
                            <p className="text-3xl font-bold text-white">${product.price}</p>
                          </div>
                          <div className="flex items-center bg-black/30 px-3 py-1 rounded border border-white/10">
                            <span className="text-[#fd9547] mr-2">★</span>
                            <span className="text-white font-medium">{product.specs.rating}</span>
                            <span className="text-gray-400 text-sm ml-2 font-mono">({product.specs.reviews})</span>
                          </div>
                        </div>
                      </div>

                      {/* Specs */}
                      <div className="space-y-3 mb-8 bg-zinc-950 p-4 rounded border border-white/5 relative">
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#fd9547]/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#fd9547]/20 to-transparent"></div>
                        {Object.entries(product.specs).slice(0, 4).map(([key, value], i) => (
                          <div key={key} className="flex justify-between text-sm items-center">
                            <span className="text-gray-500 font-mono uppercase">{key}</span>
                            <span className="text-white font-medium font-mono">{value}</span>
                          </div>
                        ))}
                        <div className="flex justify-between text-sm pt-3 border-t border-white/5">
                          <span className="text-[#fd9547] font-mono uppercase">SCORE</span>
                          <div className="flex items-center">
                            <span className="text-[#fd9547] font-bold font-mono">{product.specs.fps}</span>
                            <span className="text-[#fd9547]/50 ml-1 text-xs font-mono">/ 400</span>
                          </div>
                        </div>
                      </div>

                      {/* Call to Action */}
                      <div className="flex flex-col gap-3">
                        <button 
                          onClick={() => setIsBuildPopupOpen(true)}
                          className="group relative w-full py-3 bg-[#fd9547]/10 text-[#fd9547] text-center font-bold font-mono border border-[#fd9547] hover:bg-[#fd9547] hover:text-white transition-all duration-300"
                        >
                          <span className="relative z-10 inline-flex items-center justify-center">
                            CUSTOMIZE
                            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        .glow {
          text-shadow: 0 0 20px #fd954780;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
} 