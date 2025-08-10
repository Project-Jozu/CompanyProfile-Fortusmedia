'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Visi from '@/components/visi';
import Service from '@/components/service';

export default function Home() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Your effect logic here
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
        ref={bgRef}
        className="min-h-screen w-full bg-[#0149AC] flex flex-col md:flex-row relative overflow-hidden pt-16 md:pt-0" // Added pt-16 for mobile
      >
        {/* Mobile-only decorative shapes */}
        <div className="md:hidden absolute inset-0 overflow-hidden">
          {/* Circle shape - moved down to account for navbar */}
          <div className="absolute top-20 -right-20 w-64 h-64 rounded-full bg-[#F2960B] opacity-10"></div>
          
          {/* Triangle shape */}
          <div className="absolute bottom-10 left-10 w-40 h-40">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon points="50,0 100,100 0,100" fill="#FFFFFF" fillOpacity="0.1" />
            </svg>
          </div>
          
          {/* Wave-like shape */}
          <div className="absolute bottom-0 right-0 w-full">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20">
              <path 
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                opacity=".25" 
                fill="#F2960B"
              ></path>
              <path 
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                opacity=".5" 
                fill="#F2960B"
              ></path>
              <path 
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                fill="#F2960B"
              ></path>
            </svg>
          </div>
        </div>

        {/* Left: Text Content - Added mt-8 for extra spacing on mobile */}
        <div className="text-[#F2960B] px-8 md:px-20 w-full md:w-1/2 flex flex-col justify-center py-16 md:py-0 z-10 mt-8 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight md:leading-snug">
            <span className='text-white'>Work</span> For
            <br />
            Deep Look
          </h1>
          <p className='mt-4 md:mt-6 text-white font-medium text-lg md:text-xl'>
            Dive deeper into your brand's story with our innovative touch
          </p>
        </div>

        {/* Right: Image - Hidden on mobile */}
        <div className="hidden md:block w-full md:w-1/2 h-auto relative">
          <Image
            src="/img/book2.png" 
            alt="Deep Look"
            fill
            style={{ 
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            priority
            sizes="50vw"
          />
        </div>
      </section>

      {/* Visi and Service Components */}
      <div className="w-full">
        <Visi />
        <Service />
      </div>
    </div>
  );
}