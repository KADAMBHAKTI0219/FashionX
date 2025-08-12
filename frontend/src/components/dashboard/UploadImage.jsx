import React, { useState, useRef } from 'react';
import Image from 'next/image';

const UploadImage = ({ onClose }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('Tops');
  const dropdownRef = useRef(null);
  const fileInputRef = useRef(null);

  const clothingTypes = ['Tops', 'Bottoms', 'Full Outfits', 'One-Pieces'];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    // Handle file upload logic here
    console.log('Files selected:', files);
  };

  // Add event listener for clicks outside dropdown
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-[#FFFBF2] rounded-xl w-full max-w-3xl relative overflow-hidden shadow-lg transform transition-all duration-300 ease-in-out hover:scale-[1.01] animate-slideUp">
        {/* Close button */}
        <button 
          className="absolute top-3 right-3 text-[#5D4037] hover:text-black bg-[#EFEBE9] hover:bg-[#D7CCC8] rounded-full p-1.5 transition-all duration-300 focus:outline-none transform hover:rotate-90"
          onClick={onClose}
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>


        <div className="p-6">
          <h2 className="text-xl font-bold mb-4 text-[#3E2723] flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-[#795548]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            Upload clothing images
          </h2>
          
          {/* Clothing type dropdown */}
          <div className="mb-5 relative" ref={dropdownRef}>
            <div className="flex items-center mb-2">
              <span className="text-sm font-medium text-gray-700 mr-3">Clothing Types</span>
              <div className="relative inline-block text-left">
                <button 
                  type="button" 
                  className="inline-flex justify-between items-center w-40 rounded-md border border-[#D7CCC8] shadow-sm px-3 py-2 bg-white text-sm font-medium text-[#5D4037] hover:bg-[#FFF8E1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8D6E63] transition-all duration-300"
                  onClick={toggleDropdown}
                >
                  {selectedType}
                  <svg className="-mr-1 ml-2 h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="origin-top-right absolute left-0 mt-1 w-40 rounded-md shadow-md bg-white ring-1 ring-[#D7CCC8] focus:outline-none z-10 overflow-hidden animate-fadeIn">
                    <div className="py-1">
                      {clothingTypes.map((type) => (
                        <button
                          key={type}
                          className={`${selectedType === type ? 'bg-[#EFEBE9] text-[#5D4037]' : ''} block w-full text-left px-3 py-1.5 text-sm text-[#795548] hover:bg-[#FFF8E1] transition-all duration-300 hover:translate-x-1`}
                          onClick={() => handleTypeSelect(type)}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Upload area */}
          <div className="border-2 border-dashed border-[#BCAAA4] rounded-lg p-6 mb-5 z-40 bg-[#FFF8E1]/50 transition-all duration-300 hover:bg-[#FFF8E1] hover:border-[#8D6E63] transform hover:scale-[1.01]">
            <div className="flex flex-col items-center justify-center">
              <div className="mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#795548] animate-pulse">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
              <p className="text-sm text-gray-600 mb-4">Drag images here or click to upload</p>
              <div className="flex space-x-3">
                <button
                  onClick={handleUploadClick}
                  className="flex items-center px-4 py-2 bg-[#795548] text-white rounded-md hover:bg-[#5D4037] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8D6E63] transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                  Upload
                </button>
                <button
                  className="flex items-center px-4 py-2 border border-[#D7CCC8] rounded-md text-[#5D4037] bg-white hover:bg-[#FFF8E1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8D6E63] transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
                  </svg>
                  Batch upload
                  <span className="ml-1 text-xs bg-[#3E2723] text-white px-1.5 py-0.5 rounded animate-pulse">Pro</span>
                </button>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                multiple
                accept="image/*"
              />
            </div>
          </div>

          {/* Sample images section */}
          <div className="mb-5">
            <p className="text-sm text-gray-600 mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1 text-[#795548]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              Try samples or pick from Projects
            </p>
            <div className="grid grid-cols-4 gap-3 bg-[#FFFBF2] p-4 rounded-lg border border-[#D7CCC8] shadow-sm hover:shadow-md transition-all duration-300">
              {/* Sample images */}
              <div className="relative rounded-lg overflow-hidden shadow-sm group hover:shadow-md transition-all duration-300 transform hover:scale-105">
                <div className="aspect-square relative">
                  <Image src="/assets/images/ai1.webp" alt="Sample" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end justify-center pb-2 group-hover:bg-opacity-30 transition-all duration-300">
                    <span className="text-white text-xs font-medium px-2 py-0.5 bg-[#5D4037]/80 rounded group-hover:bg-[#3E2723] transition-all duration-300">Sample</span>
                  </div>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-sm group hover:shadow-md transition-shadow duration-300">
                <div className="aspect-square relative">
                  <Image src="/assets/images/ai2.webp" alt="Sample" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end justify-center pb-2">
                    <span className="text-white text-xs font-medium px-2 py-0.5 bg-blue-600/80 rounded">Sample</span>
                  </div>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-sm group hover:shadow-md transition-shadow duration-300">
                <div className="aspect-square relative">
                  <Image src="/assets/images/ai3.webp" alt="Sample" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end justify-center pb-2">
                    <span className="text-white text-xs font-medium px-2 py-0.5 bg-blue-600/80 rounded">Sample</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button className="text-[#795548] hover:text-[#5D4037] flex flex-col items-center transition-all duration-300 transform hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 mb-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                  <span className="text-xs">View more</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;