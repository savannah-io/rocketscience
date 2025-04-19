'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">RocketScience</h1>
          <p className="mb-4">Testing deployment</p>
          <Link href="/test" className="text-[#FF6B00] hover:underline">
            Test Route
          </Link>
        </div>
      </main>
    </div>
  );
} 