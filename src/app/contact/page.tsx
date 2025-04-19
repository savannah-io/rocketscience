'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiry: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    // Clear error message when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      if (!supabase) {
        throw new Error('Supabase client is not initialized');
      }

      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            inquiry_type: formData.inquiry,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        console.error('Supabase error:', error);
        throw new Error(error.message);
      }

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        inquiry: '',
        message: ''
      });
    } catch (error: unknown) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black">
      <Navbar />

      <main className="flex-grow">
        <div className="container mx-auto px-4 pt-32 pb-20">
          {/* Header Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How Can We Help You?
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Whether you need a repair, want to discuss pricing, or have questions about our services, we're here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-lg border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#fd9547] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#fd9547] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 mb-2 text-sm" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#fd9547] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2 text-sm" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#fd9547] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2 text-sm" htmlFor="inquiry">
                    What can we help you with?
                  </label>
                  <select
                    id="inquiry"
                    value={formData.inquiry}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#fd9547] transition-colors"
                  >
                    <option value="">Select your inquiry type</option>
                    <option value="new-build">New Custom PC Build</option>
                    <option value="repair">PC Repair Service</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="purchase">Ready to Purchase</option>
                    <option value="support">Technical Support</option>
                    <option value="question">General Question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 mb-2 text-sm" htmlFor="message">
                    Tell us more about your needs
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    placeholder="Please provide any specific details about your inquiry..."
                    className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#fd9547] transition-colors"
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-500/10 border border-green-500/20 text-green-500 p-4 rounded">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded">
                    {errorMessage || 'There was an error sending your message. Please try again.'}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#fd9547] text-white py-4 rounded hover:bg-[#fd9547]/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-[#fd9547]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Address</h3>
                      <p className="text-gray-400">123 E River St, Savannah GA, 31404</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-[#fd9547]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Phone</h3>
                      <p className="text-gray-400">(470) 350-3601</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-[#fd9547]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Email</h3>
                      <p className="text-gray-400">support@rscustoms.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-[#fd9547]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Business Hours</h3>
                      <p className="text-gray-400">Monday – Saturday: 7:00 AM – 5:00 PM EST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white font-medium mb-2">How does the custom PC building process work?</h3>
                    <p className="text-gray-400">
                      We work with you to design and build your perfect PC. Choose from our pre-configured builds or customize every component. Our expert team handles assembly, testing, and quality control.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">What is your warranty policy?</h3>
                    <p className="text-gray-400">
                      All our custom PCs come with lifetime technical support and a comprehensive warranty covering parts and labor. Individual components maintain their manufacturer warranties.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 