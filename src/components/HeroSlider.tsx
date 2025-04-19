'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    image: '/cursor/android-chrome-512x512.png',
    title: 'SURPASS\nORDINARY\nPLAY\nEXTRAORDINARY',
    buttonText: 'LEARN MORE',
    buttonLink: '/about'
  },
  {
    image: '/cursor/apple-touch-icon.png',
    title: 'ELEVATE\nYOUR\nGAMING\nEXPERIENCE',
    buttonText: 'VIEW BUILDS',
    buttonLink: '/products'
  },
  {
    image: '/cursor/favicon-32x32.png',
    title: 'CUSTOM\nBUILT\nFOR\nPERFECTION',
    buttonText: 'START BUILD',
    buttonLink: '/build'
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Image Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              width={512}
              height={512}
              className="object-contain max-w-2xl w-full h-auto"
              priority={index === 0}
            />
          </div>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 whitespace-pre-line leading-tight">
                  {slide.title}
                </h1>
                <Link
                  href={slide.buttonLink}
                  className="inline-block bg-neon-orange text-white px-8 py-3 text-lg font-medium transition-transform hover:scale-105"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/75 hover:text-white transition-colors z-10"
        aria-label="Previous slide"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/75 hover:text-white transition-colors z-10"
        aria-label="Next slide"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-6'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 