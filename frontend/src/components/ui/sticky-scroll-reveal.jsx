"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const cardLength = content.length;

  // Manual implementation of scroll tracking since we're not using motion library
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const container = ref.current;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const progress = scrollTop / scrollHeight;
      
      setScrollProgress(progress);
      
      // Set hasScrolled to true once user starts scrolling
      if (scrollTop > 10 && !hasScrolled) {
        setHasScrolled(true);
      }
      
      // Calculate which card should be active based on scroll position
      const cardsBreakpoints = content.map((_, index) => index / cardLength);
      const closestBreakpointIndex = cardsBreakpoints.reduce(
        (acc, breakpoint, index) => {
          const distance = Math.abs(progress - breakpoint);
          if (distance < Math.abs(progress - cardsBreakpoints[acc])) {
            return index;
          }
          return acc;
        },
        0
      );
      
      setActiveCard(closestBreakpointIndex);
    };

    const containerRef = ref.current;
    if (containerRef) {
      containerRef.addEventListener("scroll", handleScroll);
      
      // Initial scroll check
      handleScroll();
      
      // Auto-hide scroll indicator after 3 seconds if user hasn't scrolled
      const timer = setTimeout(() => {
        if (!hasScrolled && containerRef.scrollTop <= 10) {
          // Add a small initial scroll to trigger content visibility
          containerRef.scrollTo({
            top: 15,
            behavior: 'smooth'
          });
        }
      }, 3000);
      
      return () => {
        clearTimeout(timer);
        containerRef.removeEventListener("scroll", handleScroll);
      };
    }
    
    return () => {
      if (containerRef) {
        containerRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, [cardLength, content, hasScrolled]);

  // Using white background for fashion theme
  const backgroundColors = [
    "#ffffff", // white
    "#ffffff", // white
    "#ffffff", // white
    "#ffffff", // white
  ];

  // No background gradients needed as we'll use grid images instead
  const [activeBackground, setActiveBackground] = useState(backgroundColors[0]);

  useEffect(() => {
    setActiveBackground(backgroundColors[activeCard % backgroundColors.length]);
  }, [activeCard, backgroundColors]);

  return (
    <div
      className="relative flex h-[40rem] md:h-[50rem] justify-center overflow-y-auto rounded-md p-4 md:p-10"
      ref={ref}
      style={{ backgroundColor: activeBackground }}
    >
      {/* Initial scroll indicator that shows only when user hasn't scrolled */}
      {!hasScrolled && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-white bg-opacity-90">
          <p className="text-lg text-gray-600 mb-4">स्क्रॉल करें जारी रखने के लिए</p>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8 text-gray-500 animate-bounce" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      )}
      
      {/* Main content that becomes visible after scrolling */}
      <div 
        className={`w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 px-4 transition-opacity duration-500 ${hasScrolled ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="relative flex items-start">
          <div className="max-w-xl">
            {content.map((item, index) => (
              <div 
                key={item.title + index} 
                className={`my-20 transition-all duration-500 ${hasScrolled ? '' : 'translate-y-10'}`}
              >
                <h2
                  className={`text-2xl md:text-3xl font-bold text-gray-900 transition-opacity duration-300 ${activeCard === index ? 'opacity-100' : 'opacity-30'}`}
                >
                  {item.title}
                </h2>
                <p
                  className={`text-base md:text-lg mt-6 max-w-md text-gray-600 transition-opacity duration-300 ${activeCard === index ? 'opacity-100' : 'opacity-30'}`}
                >
                  {item.description}
                </p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <div
          className={cn(
            "sticky top-10 h-80 md:h-96 w-full overflow-hidden rounded-lg shadow-xl transition-all duration-500",
            contentClassName,
            hasScrolled ? '' : 'translate-y-10 opacity-0'
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </div>
    </div>
  );
};