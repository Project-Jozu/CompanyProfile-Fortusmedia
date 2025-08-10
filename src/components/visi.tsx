import React from 'react';
import Image from 'next/image';

export default function Choose() {
  return (
    <section className="py-40 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mb-20 mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* left Side - Image */}
        <div className="lg:w-1/2 relative">
          <Image 
            src="/img/fortus.png" 
            alt="Choose Jozu Illustration" 
            width={300}
            height={300}
            className=" object-cover "
          />
          
        
        </div>        
        
{/* Right Side - Stats */}
<div className="lg:w-full">
  {/* Text Content */}
  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-6">
    <span className='font-light'>Mari wujudkan</span> visi Anda dan <br/>tumbuhkan bisnis bersama Fortus Media
  </h2>
  <p className="text-lg text-gray-600">
    Fortus Media adalah mitra terpercaya untuk membawa ide 
    Anda ke level berikutnya. Kami tidak hanya membantu Anda 
    tampil Stand out, tapi juga memberikan strategi kreatif yang 
    berdampak nyata untuk bisnis Anda.          
  </p>
  
  {/* Horizontal Stats */}
  <div className="flex flex-col sm:flex-row justify-between gap-6 mt-10">
    <button className="
      px-8 py-3 
      border-2 border-black
      text-black font-medium 
      rounded-full 
      hover:bg-black hover:text-white 
      transition-all duration-300
      focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50
    ">
      Hubungi 
    </button>
  </div>
</div>


      </div>
    </section>
  );
}