'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiDownload, FiShare2, FiEye } from 'react-icons/fi';

// Import components
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import Sidebar from '@/components/dashboard/Sidebar';

export default function ProjectPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  // Handle click outside to close dropdown
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (activeDropdown !== null && !event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    }
    
    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Clean up event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  // Simulating authentication check
  const isAuthenticated = true;
  const user = { name: 'John Doe' };

  // Simulate loading
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Please log in to access your projects</h1>
          <Link href="/login" className="text-blue-600 hover:text-blue-800">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: 'Summer Collection',
      date: '2023-06-15',
      thumbnail: '/assets/projects/project1.jpg',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Winter Fashion',
      date: '2023-09-22',
      thumbnail: '/assets/projects/project2.jpg',
      status: 'In Progress'
    },
    {
      id: 3,
      title: 'Casual Wear',
      date: '2023-10-05',
      thumbnail: '/assets/projects/project3.jpg',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Formal Collection',
      date: '2023-11-12',
      thumbnail: '/assets/projects/project4.jpg',
      status: 'Draft'
    }
  ];

  return (
    <div className="min-h-screen  flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <DashboardHeader />
        
        <main className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Projects</h1>
            <button 
              onClick={() => setShowUploadModal(true)}
              className="bg-coffee text-white px-4 py-2 rounded-lg flex items-center transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Upload assets
            </button>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-coffee"></div>
              <span className="ml-3">Loading...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-200 relative">
                    {/* Placeholder for project thumbnail */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="absolute top-2 right-2 dropdown-container z-10">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent event bubbling
                          // Toggle dropdown menu
                          setActiveDropdown(activeDropdown === project.id ? null : project.id);
                        }}
                        className="text-[#6F4E37] hover:text-[#8B4513] p-2 rounded-full hover:bg-[#EFDECD] transition-colors shadow-sm bg-white/80"
                        aria-label="More options"
                        aria-expanded={activeDropdown === project.id}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                      <div 
                        className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 transition-all duration-200 border-2 border-[#EFDECD] ${activeDropdown === project.id ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95 pointer-events-none'}`}
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <button 
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent event bubbling
                            // Download functionality
                            console.log(`Downloading project: ${project.title}`);
                            alert(`Downloading ${project.title}...`);
                            // Close dropdown after action
                            setActiveDropdown(null);
                          }} 
                          className="block w-full text-left px-4 py-3 text-sm text-[#6F4E37] hover:bg-[#EFDECD] transition-colors font-medium border-b border-[#EFDECD]"
                        >
                          <span className="flex items-center">
                            <FiDownload className="mr-3 h-5 w-5 text-[#8B4513]" />
                            Download
                          </span>
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent event bubbling
                            // Share functionality
                            console.log(`Sharing project: ${project.title}`);
                            alert(`Sharing ${project.title}...`);
                            // Close dropdown after action
                            setActiveDropdown(null);
                          }} 
                          className="block w-full text-left px-4 py-3 text-sm text-[#6F4E37] hover:bg-[#EFDECD] transition-colors font-medium border-b border-[#EFDECD]"
                        >
                          <span className="flex items-center">
                            <FiShare2 className="mr-3 h-5 w-5 text-[#8B4513]" />
                            Share
                          </span>
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent event bubbling
                            // View functionality - navigate to project detail page
                            console.log(`Viewing project: ${project.title}`);
                            alert(`Opening ${project.title}...`);
                            router.push(`/dashboard/project/${project.id}`);
                            // Close dropdown after action
                            setActiveDropdown(null);
                          }} 
                          className="block w-full text-left px-4 py-3 text-sm text-[#6F4E37] hover:bg-[#EFDECD] transition-colors font-medium"
                        >
                          <span className="flex items-center">
                            <FiEye className="mr-3 h-5 w-5 text-[#8B4513]" />
                            View
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        project.status === 'Completed' ? 'bg-[#EFDECD] text-[#6F4E37]' :
                        project.status === 'In Progress' ? 'bg-[#F3E5AB] text-[#8B4513]' :
                        'bg-[#F5DEB3] text-[#6F4E37]'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Created on {new Date(project.date).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
            </div>
          )
        }
        </main>
      </div>

      {/* Upload Assets Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
            <button 
              onClick={() => setShowUploadModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-xl font-bold mb-4">Upload Assets</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-4">
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-gray-700 mb-2">Drag and drop your files here</p>
                <p className="text-gray-500 text-sm mb-4">Supported formats: JPG, PNG, SVG</p>
                <button className="bg-coffee text-white px-4 py-2 rounded-lg hover:bg-almond transition-colors">
                  Browse Files
                </button>
              </div>
            </div>
            <div className="flex justify-end space-x-3">
              <button 
                onClick={() => setShowUploadModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                Cancel
              </button>
              <button className="bg-coffee text-white px-4 py-2 rounded-lg hover:bg-almond transition-colors">
                Upload
              </button>
            </div>
          </div>
        </div>
      )}

   
    </div>
  );
}