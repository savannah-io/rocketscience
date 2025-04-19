'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/lib/supabase';

interface DiscountPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DiscountPopup({ isOpen, onClose }: DiscountPopupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [timeLeft, setTimeLeft] = useState({ minutes: 15, seconds: 0 });
  const [discountCode, setDiscountCode] = useState('');

  const validateEmail = (email: string) => {
    // RFC 5322 compliant email regex with properly escaped characters
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer);
          return prev;
        }
        
        if (prev.seconds === 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validate email
    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setStatus('submitting');

    try {
      const discountCode = `RS10-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
      
      // Save to Supabase
      const supabaseResponse = await supabase
        .from('promo_subscribers')
        .insert([{ email, discount_code: discountCode }]);

      if (supabaseResponse.error) throw supabaseResponse.error;

      setStatus('success');
      setEmail('');
      setDiscountCode(discountCode);
      // Set localStorage flag to indicate user has entered email
      localStorage.setItem('hasEnteredEmail', 'true');

    } catch (error: unknown) {
      console.error('Error submitting email:', error);
      setStatus('error');
      setErrorMessage(
        error instanceof Error 
          ? error.message 
          : typeof error === 'object' && error !== null && 'message' in error && typeof (error as { message: unknown }).message === 'string'
            ? (error as { message: string }).message 
            : 'An unexpected error occurred'
      );
    }
  };

  const handleTest = async () => {
    try {
      console.log('Sending test request to webhook...');
      const response = await fetch('http://localhost:5678/webhook-test/discount-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        mode: 'cors',
        credentials: 'omit',
        body: JSON.stringify({
          email: "test@example.com",
          discount_code: "RS10-pc123",
          timestamp: new Date().toISOString()
        })
      });
      
      console.log('Response status:', response.status);
      let data;
      try {
        data = await response.json();
        console.log('Response data:', data);
      } catch (e) {
        console.log('Could not parse response as JSON:', e);
        const text = await response.text();
        console.log('Raw response:', text);
      }
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      alert(`Test completed! Status: ${response.status}. Check console for full details.`);
    } catch (error: unknown) {
      console.error('Test error:', error);
      alert(`Test failed! Error: ${error instanceof Error ? error.message : 'An unexpected error occurred'}\nCheck console for details.`);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-lg rounded-3xl overflow-hidden"
          >
            {/* Main Content */}
            <div className="bg-gradient-to-br from-[#fd9547] to-orange-700 p-8 text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0">
                {/* Circuit Board Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" />
                </div>
                {/* Animated Tech Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                  <div className="absolute -left-16 -top-16 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse" />
                  <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse delay-1000" />
                  <svg className="absolute left-0 top-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="circuit" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                      <path d="M10 10h30v30h-30z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                      <circle cx="25" cy="25" r="3" fill="currentColor"/>
                      <path d="M25 10v12M10 25h12" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit)"/>
                  </svg>
                </div>
              </div>
              
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Content */}
              <div className="relative">
                <motion.h2
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-7xl font-bold text-white mb-4"
                >
                  10% OFF
                </motion.h2>
                
                <motion.p
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-white/90 text-lg mb-8"
                >
                  Plus Early Access to Our Upcoming Tech Blog
                </motion.p>

                {/* Timer */}
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex justify-center items-center gap-4 mb-8"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-28 h-28 flex items-center justify-center relative overflow-hidden group">
                    {/* Animated Border */}
                    <div className="absolute inset-0 border-2 border-white/20 rounded-xl group-hover:border-white/40 transition-colors" />
                    {/* Tech Corner Accents */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/40" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/40" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/40" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/40" />
                    <span className="text-5xl font-bold text-white tabular-nums">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="text-5xl font-bold text-white flex items-center animate-pulse">:</div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-28 h-28 flex items-center justify-center relative overflow-hidden group">
                    {/* Animated Border */}
                    <div className="absolute inset-0 border-2 border-white/20 rounded-xl group-hover:border-white/40 transition-colors" />
                    {/* Tech Corner Accents */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/40" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/40" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/40" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/40" />
                    <span className="text-5xl font-bold text-white tabular-nums">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                  </div>
                </motion.div>

                {/* Form */}
                <motion.form
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') {
                          setStatus('idle');
                          setErrorMessage('');
                        }
                      }}
                      placeholder="Enter your email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      required
                      className={`w-full bg-white/10 backdrop-blur-sm border-2 ${
                        status === 'error' ? 'border-red-500' : 'border-white/20'
                      } rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors`}
                    />
                    {status === 'error' && (
                      <div className="absolute -bottom-6 left-0 text-red-500 text-sm">
                        {errorMessage}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-white text-[#fd9547] py-3 rounded-lg font-bold text-lg hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <div className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Processing...
                      </div>
                    ) : (
                      'GET MY 10% OFF!'
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={onClose}
                    className="text-white/80 hover:text-white text-sm transition-colors"
                  >
                    No, thanks. I'll rather pay full price!
                  </button>
                </motion.form>
              </div>
            </div>

            {/* Success State */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-br from-[#fd9547] to-orange-700 flex items-center justify-center p-8"
                >
                  <div className="text-center">
                    <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full p-6 mb-6">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Welcome to RS Customs!
                    </h3>
                    <div className="mb-6">
                      <p className="text-white/90 mb-4">
                        Here's your exclusive discount code:
                      </p>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 font-mono text-xl text-white mb-2">
                        {discountCode}
                      </div>
                      <p className="text-white/70 text-sm">
                        Save this code - you'll need it at checkout!
                      </p>
                    </div>
                    <button
                      onClick={onClose}
                      className="bg-white text-[#fd9547] px-8 py-3 rounded-lg font-bold"
                    >
                      Start Shopping
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 