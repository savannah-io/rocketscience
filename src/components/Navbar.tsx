'use client';

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { Rubik_Glitch } from "next/font/google";
import Image from 'next/image';
import BuildPopup from '@/components/BuildPopup';

const rubikGlitch = Rubik_Glitch({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBuildPopupOpen, setIsBuildPopupOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50">
      <BuildPopup isOpen={isBuildPopupOpen} onClose={() => setIsBuildPopupOpen(false)} />
      {/* Mirror effect top section */}
      <div className="bg-gradient-to-b from-black/95 to-black/80 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className={`text-white text-2xl flex items-center gap-2`}>
                <span className={rubikGlitch.className}>Rocket<span className="text-[#FF6B00]">Science</span></span>
              </Link>
            </div>

            {/* Center Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              <Link 
                href="/about" 
                className={`text-white/90 hover:text-neon-orange transition-colors duration-200 text-sm uppercase tracking-wider ${rubikGlitch.className}`}
              >
                About Us
              </Link>
              <Link 
                href="/products" 
                className={`text-white/90 hover:text-neon-orange transition-colors duration-200 text-sm uppercase tracking-wider ${rubikGlitch.className}`}
              >
                Products
              </Link>
              <Link 
                href="/contact" 
                className={`text-white/90 hover:text-neon-orange transition-colors duration-200 text-sm uppercase tracking-wider ${rubikGlitch.className}`}
              >
                Contact
              </Link>
            </div>

            {/* Build Now Button */}
            <div>
              <button 
                onClick={() => setIsBuildPopupOpen(true)}
                className="relative group overflow-hidden"
              >
                <span className={`block border border-white/30 text-white/90 group-hover:border-neon-orange group-hover:text-neon-orange transition-all duration-200 px-7 py-2.5 text-base uppercase tracking-wider bg-gradient-to-b from-transparent to-black/20 ${rubikGlitch.className}`}>
                  Build Now
                </span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white/90 hover:text-neon-orange transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mirror effect bottom section - reflection */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      <div className="h-4 bg-gradient-to-b from-black/40 to-transparent backdrop-blur-[2px] transform scale-y-[-1] opacity-30"></div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden py-4 border-t border-white/10 bg-black/95 backdrop-blur-sm">
          <div className="flex flex-col space-y-4 px-2">
            <Link 
              href="/about" 
              className={`text-white/90 hover:text-neon-orange transition-colors duration-200 text-sm uppercase tracking-wider ${rubikGlitch.className}`}
            >
              About Us
            </Link>
            <Link 
              href="/products" 
              className={`text-white/90 hover:text-neon-orange transition-colors duration-200 text-sm uppercase tracking-wider ${rubikGlitch.className}`}
            >
              Products
            </Link>
            <Link 
              href="/contact" 
              className={`text-white/90 hover:text-neon-orange transition-colors duration-200 text-sm uppercase tracking-wider ${rubikGlitch.className}`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 