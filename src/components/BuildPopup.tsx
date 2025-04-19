'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import CalendlyEmbed from './CalendlyEmbed';

interface BuildPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Service {
  id: string;
  name: string;
  icon: (props: any) => JSX.Element;
  description: string;
  includes: string[];
}

interface BuildStep {
  title: string;
  description: string;
}

export default function BuildPopup({ isOpen, onClose }: BuildPopupProps) {
  const [selectedService, setSelectedService] = useState('gaming');
  const [showCalendly, setShowCalendly] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-8"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-full max-w-[90vw] h-[85vh] bg-zinc-900 rounded-xl overflow-hidden border border-[#fd9547]/20 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="h-full grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Section - Header and Service Selection */}
                <div className="bg-black p-8 lg:p-12">
                  <button 
                    onClick={onClose}
                    className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <h2 className="text-4xl font-bold mb-8">
                    <span className="text-white">RS </span>
                    <span className="text-[#fd9547]">Custom PCs</span>
                  </h2>
                  <div className="space-y-6">
                    <p className="text-white text-lg">Select the service you're interested in:</p>
                    <div className="space-y-4">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => setSelectedService(service.id)}
                          className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-300 ${
                            selectedService === service.id
                              ? 'bg-[#fd9547] text-white shadow-lg shadow-[#fd9547]/20'
                              : 'bg-zinc-900 text-white hover:bg-zinc-800'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <service.icon className="w-6 h-6" />
                            <span className="text-lg font-medium">{service.name}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Middle Section - Service Details */}
                <div className="bg-zinc-900 p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-zinc-800">
                  <h3 className="text-3xl font-bold text-white mb-8">Service Details</h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-[#fd9547] font-bold text-xl mb-4">Description</h4>
                      <p className="text-white text-lg leading-relaxed">
                        {services.find(s => s.id === selectedService)?.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[#fd9547] font-bold text-xl mb-4">Includes</h4>
                      <ul className="space-y-4">
                        {services.find(s => s.id === selectedService)?.includes.map((item, index) => (
                          <li key={index} className="flex items-center gap-4 text-lg text-white">
                            <span className="w-2 h-2 rounded-full bg-[#fd9547]"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-8 border-t border-zinc-800">
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <span className="text-[#fd9547] font-medium block mb-2">Location</span>
                          <span className="text-white text-lg">Savannah, GA</span>
                        </div>
                        <div>
                          <span className="text-[#fd9547] font-medium block mb-2">Hours</span>
                          <span className="text-white text-lg">Mon-Fri 9AM-6PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Section - Process and CTA */}
                <div className="bg-zinc-900 p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-zinc-800">
                  <h3 className="text-3xl font-bold text-white mb-8">Our Process</h3>
                  <div className="space-y-8 mb-12">
                    {buildSteps.map((step, index) => (
                      <div key={index} className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#fd9547]/10 flex items-center justify-center border border-[#fd9547]">
                          <span className="text-[#fd9547] font-bold text-lg">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="text-[#fd9547] font-bold text-xl mb-2">{step.title}</h4>
                          <p className="text-white text-lg leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <button
                      onClick={() => setShowCalendly(true)}
                      className="w-2/3 bg-[#fd9547] text-white text-center py-6 rounded-lg text-2xl font-bold hover:bg-[#fd9547]/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#fd9547]/20"
                    >
                      Schedule Build Call
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {showCalendly && (
          <CalendlyEmbed isOpen={showCalendly} onClose={() => setShowCalendly(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

const services: Service[] = [
  {
    id: 'gaming',
    name: 'Gaming PC',
    icon: (props: any) => (
      <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    ),
    description: 'High-performance gaming PCs built for competitive gaming and immersive experiences.',
    includes: [
      'Latest gaming processors',
      'High-end graphics cards',
      'Fast RAM and storage',
      'RGB lighting options',
      'Gaming-optimized cooling'
    ]
  },
  {
    id: 'server',
    name: 'Server PC',
    icon: (props: any) => (
      <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    description: 'Reliable server builds for hosting, data storage, and enterprise applications.',
    includes: [
      'Server-grade processors',
      'ECC memory support',
      'RAID configuration',
      'Redundant power options',
      'Enterprise-level cooling'
    ]
  },
  {
    id: 'professional',
    name: 'Professional Use PC',
    icon: (props: any) => (
      <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    description: 'Workstation PCs optimized for professional applications and content creation.',
    includes: [
      'Professional graphics cards',
      'Multi-core processors',
      'High-capacity storage',
      'Quiet operation design',
      'Professional software optimization'
    ]
  }
];

const buildSteps: BuildStep[] = [
  {
    title: "Initial Consultation",
    description: "Discuss your specific needs and requirements to create the perfect solution."
  },
  {
    title: "Custom Planning",
    description: "Detailed planning and component selection based on your requirements."
  },
  {
    title: "Professional Build",
    description: "Expert assembly and configuration by our experienced team."
  },
  {
    title: "Quality Assurance",
    description: "Thorough testing and optimization before delivery."
  }
]; 