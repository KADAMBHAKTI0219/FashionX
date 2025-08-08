'use client';
import React from 'react';
import { StickyScroll } from '../ui/sticky-scroll-reveal';
import RefreshImagesSection from './RefreshImagesSection';
import DiversityHeroSection from './DiversityHeroSection';
import TestimonialSection from './TestimonialSection';
import DiversityFeatureSection from './DiversityFeatureSection';
import DiversityStatsSection from './DiversityStatsSection';
import CaseStudyBanner from './CaseStudyBanner';
import ExploreMoreSection from './ExploreMoreSection';
import FAQ from '../home/faq';

const UseCasesContent = () => {
  // Content for the sticky scroll component with grid images
  const content = [
    {
      title: "E-commerce Product Photography",
      description:
        "Transform your online store with AI-generated product photos. Showcase your products from multiple angles without expensive photoshoots. Perfect for clothing, accessories, and home goods retailers looking to scale their visual content.",
      content: (
        <div className="grid grid-cols-2 gap-2 h-full w-full">
          <div className="rounded-md overflow-hidden">
            <img src="/assets/images/ai1.webp" alt="E-commerce product" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-md overflow-hidden">
            <img src="/assets/images/ai2.webp" alt="E-commerce product" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-md overflow-hidden">
            <img src="/assets/images/ai3.webp" alt="E-commerce product" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-md overflow-hidden">
            <img src="/assets/images/ai4.webp" alt="E-commerce product" className="w-full h-full object-cover" />
          </div>
        </div>
      ),
    },
    {
      title: "Fashion Lookbooks & Catalogs",
      description:
        "Create stunning fashion lookbooks and seasonal catalogs with diverse models and consistent styling. Reduce production time from weeks to days while maintaining complete creative control over every visual aspect.",
      content: (
        <div className="grid grid-cols-2 gap-2 h-full w-full">
          <div className="rounded-md overflow-hidden">
            <img src="/assets/images/ai5.webp" alt="Fashion lookbook" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-md overflow-hidden">
            <img src="/assets/images/slider1.webp" alt="Fashion lookbook" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-md overflow-hidden">
            <img src="/assets/images/slider2.webp" alt="Fashion lookbook" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-md overflow-hidden">
            <img src="/assets/images/slider3.webp" alt="Fashion lookbook" className="w-full h-full object-cover" />
          </div>
        </div>
      ),
    },
    {
      title: "Social Media Content",
      description:
        "Keep your social feeds fresh with on-brand imagery that engages your audience. Create consistent, high-quality content for Instagram, Facebook, and TikTok without hiring photographers or models for every campaign.",
      content: (
        <div className="grid grid-cols-2 gap-2 h-full w-full">
          <div className="rounded-md overflow-hidden">
            <img src="/assets/images/slider4.webp" alt="Social media content" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-md overflow-hidden">
            <img src="/assets/images/slider5.webp" alt="Social media content" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-md overflow-hidden">
            <img src="/assets/images/banner1.webp" alt="Social media content" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-md overflow-hidden">
            <img src="/assets/images/banner2.webp" alt="Social media content" className="w-full h-full object-cover" />
          </div>
        </div>
      ),
    },
    {
      title: "Marketing Campaigns",
      description:
        "Launch marketing campaigns faster with AI-generated visuals that perfectly match your brand guidelines. Test different concepts quickly and scale successful campaigns with consistent imagery across all channels.",
      content: (
        <div className="grid grid-cols-2 gap-2 h-full w-full">
          <div className="rounded-md overflow-hidden">
            <img src="/assets/images/banner3.webp" alt="Marketing campaign" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-md overflow-hidden">
            <img src="/assets/images/banner4.webp" alt="Marketing campaign" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-md overflow-hidden">
            <img src="/assets/images/grid1.webp" alt="Marketing campaign" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-md overflow-hidden">
            <img src="/assets/images/grid3.webp" alt="Marketing campaign" className="w-full h-full object-cover" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section with Diversity Grid */}
      <DiversityHeroSection />
      
      <div className="w-full py-20 bg-white">
        <div className=" mx-auto px-4 sm:px-6 lg:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Use Cases</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how FashionX can transform your visual content strategy with AI-generated fashion photography
            </p>
          </div>
          
          <StickyScroll content={content} />
        </div>
      </div>
      
      {/* Add the new Refresh Images section */}
      <RefreshImagesSection />
      
      {/* Add the Diversity Feature section */}
      <DiversityFeatureSection />
      
      {/* Add the Diversity Stats section */}
      <DiversityStatsSection />
      
      {/* Add the Case Study Banner section */}
      <CaseStudyBanner />
      
      {/* Add the Explore More section */}
      <ExploreMoreSection />
      
      {/* Add the Testimonial section */}
      <TestimonialSection />
      <FAQ/>
    </>
  );
};

export default UseCasesContent;