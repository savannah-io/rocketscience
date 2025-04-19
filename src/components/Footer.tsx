'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PolicyPopup from './PolicyPopup';
import { Rubik_Glitch } from 'next/font/google';

const rubikGlitch = Rubik_Glitch({ weight: '400', subsets: ['latin'] });

export default function Footer() {
  const [policyType, setPolicyType] = useState<'terms' | 'privacy' | null>(null);

  return (
    <footer className="bg-black border-t border-white/10">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <span className={`text-white text-2xl font-bold ${rubikGlitch.className}`}>
                Rocket<span className="text-[#FF6B00]">Science</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Savannah's premier custom PC builder, delivering exceptional gaming and workstation solutions.
            </p>
            <div className="flex gap-4">
              <span className="text-gray-400 hover:text-[#FF6B00] transition-colors cursor-default">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </span>
              <span className="text-gray-400 hover:text-[#FF6B00] transition-colors cursor-default">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-gray-400 hover:text-[#FF6B00] transition-colors cursor-default">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#fd9547] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-[#fd9547] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/build" className="text-gray-400 hover:text-[#fd9547] transition-colors">
                  Build Your PC
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#fd9547] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-[#FF6B00] transition-colors">
                  PC Upgrades
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-[#FF6B00] transition-colors">
                  Custom PC Builds
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-[#FF6B00] transition-colors">
                  PC Repair
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">Hidden for privacy</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 <span className={rubikGlitch.className}>Rocket<span className="text-[#FF6B00]">Science</span></span> Customs. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button 
                onClick={() => setPolicyType('privacy')}
                className="text-gray-400 hover:text-[#fd9547] transition-colors text-sm"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setPolicyType('terms')}
                className="text-gray-400 hover:text-[#fd9547] transition-colors text-sm"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>

      <PolicyPopup 
        isOpen={policyType !== null}
        onClose={() => setPolicyType(null)}
        type={policyType || 'privacy'}
      />
    </footer>
  );
} 