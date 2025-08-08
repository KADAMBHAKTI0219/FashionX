'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RefreshImagesSection = () => {
  return (
    <div className="w-full py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
          {/* Left side - Images */}
          <div className="w-full md:w-1/2 relative h-[400px] sm:h-[450px] md:h-[500px]">
            {/* Small images on left */}
            <div className="absolute left-0 top-0 w-[40%] z-10 space-y-2 sm:space-y-4">
              <div className="bg-white p-1 sm:p-1.5 rounded-lg shadow-md">
                <Image 
                  src="/assets/images/slider1.webp" 
                  alt="Fashion model portrait" 
                  width={300} 
                  height={300}
                  className="w-full h-auto rounded-md object-cover aspect-square"
                />
              </div>
              <div className="bg-white p-1 sm:p-1.5 rounded-lg shadow-md">
                <Image 
                  src="/assets/images/slider2.webp" 
                  alt="Fashion model portrait" 
                  width={300} 
                  height={300}
                  className="w-full h-auto rounded-md object-cover aspect-square"
                />
              </div>
            </div>
            
            {/* Large main image on right */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[70%] z-20">
              <div className="bg-white p-1 sm:p-1.5 rounded-lg shadow-xl">
                <Image 
                  src="/assets/images/slider3.webp" 
                  alt="Main fashion model" 
                  width={500} 
                  height={700}
                  className="w-full h-auto rounded-md object-cover aspect-[3/4]"
                  priority
                />
              </div>
            </div>
          </div>
          
          {/* Right side - Text */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Refresh images with top models
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0">
              Easily test different models and see what works best for your brand—stay within budget and keep your customers engaged.
            </p>
            <Link href="/try-now">
              <button className="w-full sm:w-auto bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-medium hover:bg-gray-800 transition-colors text-base sm:text-lg">
                Try it now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefreshImagesSection;