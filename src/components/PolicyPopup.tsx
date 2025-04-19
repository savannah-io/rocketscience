import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PolicyPopupProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'terms' | 'privacy';
}

export default function PolicyPopup({ isOpen, onClose, type }: PolicyPopupProps) {
  const title = type === 'terms' ? 'Terms of Service' : 'Privacy Policy';
  const content = type === 'terms' ? termsContent : privacyContent;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl max-h-[80vh] overflow-hidden bg-gradient-to-b from-zinc-900 to-black border-2 border-[#FF6B00] rounded-lg shadow-2xl shadow-[#FF6B00]/20"
            >
              {/* Header */}
              <div className="relative border-b border-[#FF6B00]/20 bg-black/50 p-6">
                <h2 className="text-3xl font-bold text-white text-center">{title}</h2>
                <button
                  onClick={onClose}
                  className="absolute right-6 top-6 text-white/60 hover:text-[#FF6B00] transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="p-8 overflow-y-auto max-h-[60vh] custom-scrollbar">
                <div className="prose prose-invert prose-orange max-w-none">
                  {content}
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-[#FF6B00]/20 bg-black/50 p-6 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-8 py-2.5 bg-[#FF6B00] text-white rounded hover:bg-[#FF6B00]/80 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/50 focus:ring-offset-2 focus:ring-offset-black"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

const termsContent = (
  <div className="space-y-8">
    <section className="space-y-4">
      <h3 className="text-2xl font-bold text-[#FF6B00]">1. Acceptance of Terms</h3>
      <p className="text-gray-300 leading-relaxed">By accessing and using RS Customs services, you agree to be bound by these Terms of Service.</p>
    </section>

    <section className="space-y-4">
      <h3 className="text-2xl font-bold text-[#FF6B00]">2. Custom PC Building Services</h3>
      <p className="text-gray-300 leading-relaxed">We provide custom PC building services with carefully selected components. All builds are tested and verified before delivery.</p>
    </section>

    <section className="space-y-4">
      <h3 className="text-2xl font-bold text-[#FF6B00]">3. Warranty and Support</h3>
      <p className="text-gray-300 leading-relaxed">Our custom builds come with lifetime support and varying warranty periods depending on components used.</p>
    </section>

    <section className="space-y-4">
      <h3 className="text-2xl font-bold text-[#FF6B00]">4. Build Process</h3>
      <p className="text-gray-300 leading-relaxed">The build process typically takes 5-7 business days. Rush orders may be available upon request.</p>
    </section>

    <section className="space-y-4">
      <h3 className="text-2xl font-bold text-[#FF6B00]">5. Payment Terms</h3>
      <p className="text-gray-300 leading-relaxed">We require a 50% deposit to begin your build, with the remaining balance due upon completion.</p>
    </section>

    <section className="space-y-4">
      <h3 className="text-2xl font-bold text-[#FF6B00]">6. Shipping and Local Pickup</h3>
      <p className="text-gray-300 leading-relaxed">We offer secure shipping options and free local pickup in Savannah, GA.</p>
    </section>

    <section className="space-y-4">
      <h3 className="text-2xl font-bold text-[#FF6B00]">7. Modifications and Cancellations</h3>
      <p className="text-gray-300 leading-relaxed">Build modifications can be made before assembly begins. Cancellation fees may apply.</p>
    </section>
  </div>
);

const privacyContent = (
  <div className="space-y-8">
    <section className="space-y-4">
      <h3 className="text-2xl font-bold text-[#FF6B00]">1. Information Collection</h3>
      <p className="text-gray-300 leading-relaxed">We collect information necessary to process your order and provide the best possible service.</p>
    </section>

    <section className="space-y-4">
      <h3 className="text-2xl font-bold text-[#FF6B00]">2. Use of Information</h3>
      <p className="text-gray-300 leading-relaxed">Your information is used solely for order processing, support, and communication regarding your build.</p>
    </section>

    <section className="space-y-4">
      <h3 className="text-2xl font-bold text-[#FF6B00]">3. Data Security</h3>
      <p className="text-gray-300 leading-relaxed">We implement industry-standard security measures to protect your personal information.</p>
    </section>

    <section className="space-y-4">
      <h3 className="text-2xl font-bold text-[#FF6B00]">4. Customer Communication</h3>
      <p className="text-gray-300 leading-relaxed">We may contact you regarding your build status, support inquiries, and relevant updates.</p>
    </section>

    <section className="space-y-4">
      <h3 className="text-2xl font-bold text-[#FF6B00]">5. Third-Party Services</h3>
      <p className="text-gray-300 leading-relaxed">We use trusted third-party services for payment processing and shipping.</p>
    </section>

    <section className="space-y-4">
      <h3 className="text-2xl font-bold text-[#FF6B00]">6. Data Retention</h3>
      <p className="text-gray-300 leading-relaxed">We retain your information for as long as necessary to provide support and maintain records.</p>
    </section>

    <section className="space-y-4">
      <h3 className="text-2xl font-bold text-[#FF6B00]">7. Your Rights</h3>
      <p className="text-gray-300 leading-relaxed">You have the right to access, modify, or request deletion of your personal information.</p>
    </section>
  </div>
); 