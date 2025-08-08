'use client';
import React from 'react';
import Link from 'next/link';

const BlogPagination = () => {
  // This would typically come from your API or state management
  const currentPage = 1;
  const totalPages = 5;
  
  const renderPageNumbers = () => {
    const pageNumbers = [];
    
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <Link 
          key={i} 
          href={`/blog?page=${i}`}
          className={`px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 mx-0.5 sm:mx-1 text-sm sm:text-base ${currentPage === i 
            ? 'text-white bg-black' 
            : 'text-gray-700 hover:bg-gray-100'} rounded-md transition-colors`}
        >
          {i}
        </Link>
      );
    }
    
    return pageNumbers;
  };
  
  return (
    <div className="flex justify-center items-center py-6 sm:py-8 md:py-10">
      <Link 
        href={currentPage > 1 ? `/blog?page=${currentPage - 1}` : '#'}
        className={`px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 mx-0.5 sm:mx-1 text-sm sm:text-base ${currentPage === 1 
          ? 'text-gray-400 cursor-not-allowed' 
          : 'text-gray-700 hover:bg-gray-100'} rounded-md transition-colors`}
        aria-disabled={currentPage === 1}
      >
        &lt;
      </Link>
      
      {renderPageNumbers()}
      
      <Link 
        href={currentPage < totalPages ? `/blog?page=${currentPage + 1}` : '#'}
        className={`px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 mx-0.5 sm:mx-1 text-sm sm:text-base ${currentPage === totalPages 
          ? 'text-gray-400 cursor-not-allowed' 
          : 'text-gray-700 hover:bg-gray-100'} rounded-md transition-colors`}
        aria-disabled={currentPage === totalPages}
      >
        &gt;
      </Link>
    </div>
  );
};

export default BlogPagination;