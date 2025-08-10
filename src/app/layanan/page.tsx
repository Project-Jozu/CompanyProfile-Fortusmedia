'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Layanan() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const services = [
    { 
      id: 1, 
      description: 'Custom website solutions',
      image: '/img/l1.jpg'
    },
    { 
      id: 2, 
      description: 'Boost your online presence',
      image: '/img/l2.jpg'
    },
    { 
      id: 3, 
      description: 'Expert business advice',
      image: '/img/l3.jpg'
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
      
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-1 py-20 text-gray-900">Layanan Kami</h1>
          
          {/* Image Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <div 
                key={service.id}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(service.image)}
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.image}
                    width={800}
                    height={600}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                </div>
                <div className="absolute inset-0 rounded-lg bg-black/20 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
               
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/50 bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Full view"
              width={1920}
              height={1080}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button 
              className="absolute top-4 right-4 bg-white bg-opacity-20 text-black p-2 rounded-full hover:bg-opacity-40 transition"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}