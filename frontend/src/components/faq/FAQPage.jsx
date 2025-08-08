'use client';
import React, { useState, useEffect, useRef } from 'react';
import FAQSidebar from './FAQSidebar';
import GeneralFAQs from './GeneralFAQs';
import ProductFAQs from './ProductFAQs';
import PricingFAQs from './PricingFAQs';
import { FiMenu } from 'react-icons/fi';

const FAQPage = () => {
  const [activeSection, setActiveSection] = useState('general');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const generalRef = useRef(null);
  const productRef = useRef(null);
  const pricingRef = useRef(null);
  
  // Handle scroll to section when sidebar link is clicked
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false); // Close mobile menu when a section is selected
    
    const sectionRefs = {
      general: generalRef,
      product: productRef,
      pricing: pricingRef
    };
    
    const ref = sectionRefs[sectionId];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adding offset
      
      const sections = [
        { id: 'general', ref: generalRef },
        { id: 'product', ref: productRef },
        { id: 'pricing', ref: pricingRef }
      ];
      
      for (const section of sections) {
        if (section.ref.current) {
          const offsetTop = section.ref.current.offsetTop;
          const offsetHeight = section.ref.current.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <div className="bg-white min-h-screen overflow-auto">
      {/* FAQ Header */}
      <div className="bg-coffee text-white py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">Frequently Asked Questions</h1>
          <p className="text-center mt-1 sm:mt-2 text-sm sm:text-base lg:text-lg text-gray-300">Find answers to common questions about our products and services</p>
        </div>
      </div>
      
      {/* Mobile menu toggle - only visible on mobile */}
      <div className="md:hidden sticky top-0 bg-white z-10 border-b p-3 sm:p-4">
        <button 
          onClick={toggleMobileMenu}
          className="flex items-center text-gray-700 focus:outline-none w-full justify-between"
        >
          <div className="flex items-center">
            <FiMenu className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
            <span className="text-sm sm:text-base">FAQ Sections</span>
          </div>
          <span className="text-xs text-gray-500">{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</span>
        </button>
        
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md border-b z-20">
            <FAQSidebar activeSection={activeSection} onSectionClick={scrollToSection} />
          </div>
        )}
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative">
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 lg:gap-8 relative min-h-screen">
          {/* Sidebar - Fixed on desktop */}
          <div className="hidden md:block md:w-1/4 lg:w-1/5 h-full">
            <div className="sticky" style={{ position: 'sticky', top: '20px', height: 'fit-content', paddingRight: '20px' }}>
              <FAQSidebar activeSection={activeSection} onSectionClick={scrollToSection} />
            </div>
          </div>

          
          {/* FAQ Content - Scrollable */}
          <div className="md:w-3/4 lg:w-4/5 pb-4 sm:pb-6 lg:pb-8 md:pl-2 lg:pl-4 overflow-auto" style={{ 
            height: 'auto', 
            minHeight: 'calc(100vh - 200px)',
            scrollbarWidth: 'none', /* Firefox */
            msOverflowStyle: 'none',  /* IE and Edge */
            WebkitOverflowScrolling: 'touch', /* Enable smooth scrolling on iOS */
          }}>
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none; /* Chrome, Safari and Opera */
              }
            `}</style>
            <div ref={generalRef} id="general" className="mb-8 sm:mb-12 lg:mb-16">
              <GeneralFAQs />
            </div>
            
            <div ref={productRef} id="product" className="mb-8 sm:mb-12 lg:mb-16">
              <ProductFAQs />
            </div>
            
            <div ref={pricingRef} id="pricing" className="mb-8 sm:mb-12 lg:mb-16">
              <PricingFAQs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;