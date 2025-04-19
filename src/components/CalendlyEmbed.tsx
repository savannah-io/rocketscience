'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface CalendlyEmbedProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendlyEmbed({ isOpen, onClose }: CalendlyEmbedProps) {
  // Check if user has already entered email
  useEffect(() => {
    const hasEnteredEmail = localStorage.getItem('hasEnteredEmail');
    if (hasEnteredEmail === 'true' && isOpen) {
      onClose(); // Close the popup if user has already entered email
    }
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Check again before rendering to prevent flash
  if (typeof window !== 'undefined' && localStorage.getItem('hasEnteredEmail') === 'true') {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/95 backdrop-blur-md z-[60] overflow-y-auto"
    >
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Animated Background Elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#fd9547]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#fd9547]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-64 h-64 bg-[#fd9547]/5 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-64 h-64 bg-[#fd9547]/5 rounded-full blur-3xl animate-blob delay-2000"></div>

          {/* Main Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-gradient-to-b from-zinc-900/90 to-black/90 rounded-2xl overflow-hidden border border-[#fd9547]/20 shadow-[0_0_50px_rgba(253,149,71,0.1)]"
          >
            {/* Header */}
            <div className="relative p-8 pb-4">
              <div className="flex items-center justify-between">
                <div className="relative">
                  <motion.h2 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl font-bold mb-3"
                  >
                    <span className="text-white">Schedule Your </span>
                    <span className="text-[#fd9547] relative">
                      Build Call
                      <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-[#fd9547]/0 via-[#fd9547]/50 to-[#fd9547]/0"></div>
                    </span>
                  </motion.h2>
                  <motion.p 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-300 text-xl"
                  >
                    Let's create your perfect custom PC build together
                  </motion.p>
                </div>
                <motion.button 
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  onClick={onClose}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-[#fd9547]/20 rounded-full blur-md transform group-hover:scale-110 transition-transform"></div>
                  <div className="relative bg-black/50 p-2 rounded-full border border-[#fd9547]/30 hover:border-[#fd9547] transition-colors">
                    <svg className="w-8 h-8 text-white/60 group-hover:text-[#fd9547] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </motion.button>
              </div>
            </div>

            {/* Calendly Container */}
            <div className="relative h-[700px] mx-8 mb-8 rounded-xl overflow-hidden bg-white/5 border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 pointer-events-none"></div>
              <iframe
                src="https://calendly.com/rocketscience-customs/30min"
                width="100%"
                height="100%"
                frameBorder="0"
                className="relative z-10"
              ></iframe>
            </div>

            {/* Footer Info */}
            <div className="relative px-8 pb-8">
              <div className="p-6 rounded-xl bg-black/50 border border-white/5">
                <div className="grid grid-cols-3 gap-6">
                  <div className="space-y-1">
                    <span className="block text-[#fd9547] text-sm font-medium">Duration</span>
                    <span className="text-white text-lg">15-30 minutes</span>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[#fd9547] text-sm font-medium">Location</span>
                    <span className="text-white text-lg">Phone Call</span>
                  </div>
                  <div className="space-y-1 text-right">
                    <span className="block text-[#fd9547] text-sm font-medium">Need Help?</span>
                    <span className="text-white text-lg">rocketscience.customs@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, -50%) scale(1); }
          50% { transform: translate(0, -50%) scale(1.1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </motion.div>
  );
} 