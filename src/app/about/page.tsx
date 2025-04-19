'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function About() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      
      <main className="flex-grow relative">
        {/* Subtle gradient background */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#FF6B00]/5 to-black"></div>
        </div>

        {/* Mission Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <motion.div 
            style={{ opacity, scale }}
            className="absolute inset-0 bg-gradient-to-b from-[#FF6B00]/10 to-transparent"
          />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-7xl md:text-8xl font-bold text-white text-center mb-16"
              >
                Our Mission
              </motion.h1>
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="space-y-6"
                  >
                    <h2 className="text-3xl font-bold text-[#FF6B00]">
                      Empowering Excellence
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      Through cutting-edge technology and innovative solutions, we elevate the computing experience for:
                    </p>
                    <ul className="space-y-4">
                      {['Corporate Teams', 'Creative Professionals', 'Passionate Gamers'].map((item, index) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                          className="flex items-center space-x-3 text-lg text-gray-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="space-y-6"
                  >
                    <h2 className="text-3xl font-bold text-[#FF6B00]">
                      Crafting Performance
                    </h2>
                    <div className="space-y-6">
                      <div className="relative">
                        <div className="h-1 w-full bg-gradient-to-r from-[#FF6B00] to-transparent rounded"></div>
                        <p className="mt-4 text-xl text-gray-300">Custom Solutions</p>
                      </div>
                      <div className="relative">
                        <div className="h-1 w-full bg-gradient-to-r from-[#FF6B00] to-transparent rounded"></div>
                        <p className="mt-4 text-xl text-gray-300">Precision Engineering</p>
                      </div>
                      <div className="relative">
                        <div className="h-1 w-full bg-gradient-to-r from-[#FF6B00] to-transparent rounded"></div>
                        <p className="mt-4 text-xl text-gray-300">Performance Optimization</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-center mt-16"
                >
                  <p className="text-2xl text-[#FF6B00] font-bold">
                    Transform Potential into Performance
                  </p>
                  <p className="text-lg text-gray-400 mt-2">
                    Whether conquering virtual worlds or business challenges
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  viewport={{ once: true }}
                  className="group p-8 rounded-lg bg-gradient-to-br from-black via-zinc-900/50 to-black border border-white/10 hover:border-[#FF6B00]/50 transition-all duration-300"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="text-[#FF6B00] mb-4 text-4xl"
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-white text-xl font-bold mb-4 group-hover:text-[#FF6B00] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder's Message */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-bold text-white mb-16 text-center"
              >
                Message from the Founder
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                <motion.div 
                  className="md:col-span-12"
                  initial={{ x: 0, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative">
                    <motion.div 
                      whileHover={{ scale: 1.01 }}
                      className="bg-gradient-to-br from-black via-zinc-900/50 to-black border border-[#FF6B00]/20 p-8 rounded-lg"
                    >
                      <svg className="w-12 h-12 text-[#FF6B00]/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        At RocketScience, we believe in pushing the boundaries of what's possible. Every system we build is a testament to our commitment to excellence, innovation, and the relentless pursuit of performance. We're not just building computers; we're crafting experiences that empower our clients to achieve their dreams.
                      </p>
                      <motion.div 
                        className="flex items-center"
                        whileHover={{ x: 10 }}
                      >
                        <div>
                          <p className="text-[#FF6B00] font-bold text-xl">Founder & CEO</p>
                          <p className="text-gray-400">RocketScience Customs</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

const values = [
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Innovation",
    description: "Constantly pushing the boundaries of what's possible in custom PC building and performance optimization."
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Performance",
    description: "Delivering systems that exceed expectations and provide unmatched power for any task."
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Community",
    description: "Building lasting relationships with our clients and the Savannah tech community through exceptional service."
  }
]; 