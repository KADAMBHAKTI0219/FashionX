'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Import components
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import PromotionBanner from '@/components/dashboard/PromotionBanner';
import FeatureSlider from '@/components/dashboard/FeatureSlider';
import FashionAIGrid from '@/components/dashboard/FashionAIGrid';
import ImageTools from '@/components/dashboard/ImageTools';
import AdvancedAITools from '@/components/dashboard/AdvancedAITools';
import VideoTool from '@/components/dashboard/VideoTool';
import FashionReels from '@/components/dashboard/FashionReels';
import Sidebar from '@/components/dashboard/Sidebar';

export default function Dashboard() {
  const router = useRouter();

  // Simulating authentication check
  const isAuthenticated = true;
  const user = { name: 'John Doe' };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Please log in to access your dashboard</h1>
          <Link href="/login" className="text-blue-600 hover:text-blue-800">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  // Feature cards data
  const features = [
    {
      id: 1,
      title: 'Fashion AI',
      description: 'Generate fashion images with AI technology',
      icon: '/src/components/dashboard/fashion_ai.svg',
      link: '/try-now',
      bgColor: 'bg-gradient-to-br from-purple-50 to-white'
    },
    {
      id: 2,
      title: 'Virtual Try-On',
      description: 'Try clothes on virtual models instantly',
      icon: '/src/components/dashboard/virtual_tryon.svg',
      link: '/try-now',
      bgColor: 'bg-gradient-to-br from-pink-50 to-white'
    },
    {
      id: 3,
      title: 'Model Swap',
      description: 'Change models while keeping the same outfit',
      icon: '/src/components/dashboard/model_swap.svg',
      link: '/try-now',
      bgColor: 'bg-gradient-to-br from-green-50 to-white'
    },
    {
      id: 4,
      title: 'Product AnyShoot',
      description: 'Create multiple product views from one image',
      icon: '/src/components/dashboard/product_anyshoot.svg',
      link: '/try-now',
      bgColor: 'bg-gradient-to-br from-blue-50 to-white'
    },
    {
      id: 5,
      title: 'Fashion Reels',
      description: 'Create engaging fashion content for social media',
      icon: '/src/components/dashboard/fashion_reels.svg',
      link: '/try-now',
      bgColor: 'bg-gradient-to-br from-amber-50 to-white'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 md:ml-64 transition-all duration-300">
        <DashboardHeader />
      
      <main className="container mx-auto px-2 xs:px-3 sm:px-4 py-3 xs:py-4 sm:py-6">
        <PromotionBanner />
        
        <FeatureSlider />
        
        <FashionAIGrid />
        
        <ImageTools />
        
        <AdvancedAITools />
        
        <VideoTool />
        
        <FashionReels />
        
        <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Social Media Integration */}
          {/* <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
                </svg>
              </button>
              <button className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 9.52A2.48 2.48 0 1 0 14.48 12 2.48 2.48 0 0 0 12 9.52Zm9.93-2.45a6.53 6.53 0 0 0-.42-2.26 4 4 0 0 0-2.32-2.32 6.53 6.53 0 0 0-2.26-.42C15.64 2 15.26 2 12 2s-3.64 0-4.93.07a6.53 6.53 0 0 0-2.26.42 4 4 0 0 0-2.32 2.32 6.53 6.53 0 0 0-.42 2.26C2 8.36 2 8.74 2 12s0 3.64.07 4.93a6.86 6.86 0 0 0 .42 2.27 3.94 3.94 0 0 0 .91 1.4 3.89 3.89 0 0 0 1.41.91 6.53 6.53 0 0 0 2.26.42C8.36 22 8.74 22 12 22s3.64 0 4.93-.07a6.53 6.53 0 0 0 2.26-.42 3.89 3.89 0 0 0 1.41-.91 3.94 3.94 0 0 0 .91-1.4 6.6 6.6 0 0 0 .42-2.27C22 15.64 22 15.26 22 12s0-3.64-.07-4.93Zm-2.54 8a5.73 5.73 0 0 1-.39 1.8A3.86 3.86 0 0 1 16.87 19a5.73 5.73 0 0 1-1.81.35H8.94A5.73 5.73 0 0 1 7.13 19a3.51 3.51 0 0 1-1.31-.86A3.51 3.51 0 0 1 5 16.87a5.49 5.49 0 0 1-.34-1.81V8.94A5.49 5.49 0 0 1 5 7.13a3.51 3.51 0 0 1 .86-1.31A3.59 3.59 0 0 1 7.13 5a5.73 5.73 0 0 1 1.81-.35h6.12a5.73 5.73 0 0 1 1.81.35 3.51 3.51 0 0 1 1.31.86A3.51 3.51 0 0 1 19 7.13a5.73 5.73 0 0 1 .35 1.81V12c0 2.06.07 2.27.04 3.06Zm-1.6-7.44a2.38 2.38 0 0 0-1.41-1.41A4 4 0 0 0 15 6H9a4 4 0 0 0-1.38.26 2.38 2.38 0 0 0-1.41 1.36A4.27 4.27 0 0 0 6 9v6a4.27 4.27 0 0 0 .26 1.38 2.38 2.38 0 0 0 1.41 1.41 4.27 4.27 0 0 0 1.33.26h6a4 4 0 0 0 1.38-.26 2.38 2.38 0 0 0 1.41-1.41 4 4 0 0 0 .26-1.38V9a3.78 3.78 0 0 0-.26-1.38ZM12 15.82A3.81 3.81 0 0 1 8.19 12 3.82 3.82 0 1 1 12 15.82Zm4-6.89a.9.9 0 0 1 0-1.79.9.9 0 0 1 0 1.79Z" />
                </svg>
              </button>
              <button className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.393-.111.804-.21 1.18-.315-.045-.63-.09-.957-.09-1.305 0-2.652.24-3.957.69-1.305.45-2.4 1.095-3.435 1.92-.93.75-1.71 1.63-2.25 2.6a7.17 7.17 0 0 0-.84 3.42c0 1.86.63 3.42 1.86 4.59 1.29 1.17 2.97 1.8 4.92 1.8.315 0 .63-.015.945-.045-.075.12-.135.24-.18.375-.165.57-.045 1.155.36 1.62.39.465.975.69 1.62.69.975 0 1.935-.405 2.655-1.14.72-.735 1.38-1.665 1.875-2.76.495-1.095.9-2.31 1.17-3.615.27-1.305.405-2.55.405-3.75 0-1.29-.3-2.4-.9-3.39-.6-.96-1.5-1.62-2.7-2.04Zm-10.14 9.09c-.51-.51-.765-1.08-.765-1.695 0-.615.255-1.17.765-1.68.51-.51 1.095-.765 1.71-.765.615 0 1.185.255 1.695.765.51.51.765 1.065.765 1.68 0 .615-.255 1.185-.765 1.695-.51.51-1.08.765-1.695.765-.615 0-1.2-.255-1.71-.765Zm8.79-2.535c-.225 1.02-.51 2.055-.87 3.105-.36 1.05-.87 1.95-1.53 2.7-.66.75-1.44 1.125-2.34 1.125-.45 0-.81-.15-1.035-.435-.225-.285-.3-.645-.225-1.05.075-.42.225-.87.45-1.38.225-.51.42-.93.57-1.26l.705-1.485c.03-.09.015-.18-.03-.27-.045-.09-.12-.165-.21-.21-.09-.045-.195-.06-.285-.03-.09.03-.18.09-.225.18-.3.525-.585 1.05-.87 1.56-.285.51-.54.975-.765 1.41-.225.435-.42.78-.57 1.02-.15.24-.255.36-.3.36-.12 0-.135-.09-.135-.27v-.3c0-.21.015-.435.045-.675.03-.24.075-.495.135-.75.06-.255.12-.495.18-.72.06-.225.12-.42.165-.57l.9-3.12c.03-.09.015-.18-.045-.27-.06-.09-.135-.165-.225-.21-.09-.045-.195-.06-.285-.03-.09.03-.165.09-.21.18l-.9 3.12c-.03.09-.075.225-.135.42-.06.195-.12.39-.18.6-.06.21-.12.42-.165.63-.045.21-.09.39-.12.54-.03.15-.045.27-.045.33 0 .33.09.6.27.795.18.195.45.3.78.3.285 0 .57-.075.84-.225.27-.15.54-.375.795-.675.255-.3.495-.63.705-.99.21-.36.39-.735.54-1.125.015.345.09.63.225.855.135.225.3.405.51.54.21.135.45.225.72.27.27.045.54.045.81 0 .39-.075.78-.24 1.155-.495.375-.255.72-.57 1.035-.945.315-.375.585-.795.81-1.26.225-.465.39-.93.495-1.38.045-.195 0-.345-.135-.435-.135-.09-.3-.105-.465-.045Z" />
                </svg>
              </button>
            </div>
          </div> */}
          
          {/* Quick Stats */}
          {/* <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Images Generated</span>
                <span className="font-bold">1,234</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Projects Created</span>
                <span className="font-bold">56</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Storage Used</span>
                <span className="font-bold">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div> */}
          
          {/* Recent Activity */}
          {/* <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Created a new fashion reel</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Completed model swap project</p>
                  <p className="text-xs text-gray-500">Yesterday</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Added items to wishlist</p>
                  <p className="text-xs text-gray-500">2 days ago</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </main>
      
      {/* Footer removed from dashboard */}
      </div>
    </div>
  );
}