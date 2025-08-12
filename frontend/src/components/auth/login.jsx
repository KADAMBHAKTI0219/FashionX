'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';

const LoginModal = ({ isOpen, onClose, initialMode = 'login' }) => {
  const router = useRouter();
  const [isLoginMode, setIsLoginMode] = useState(initialMode === 'login');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isOpen) return null;

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    if (!isLoginMode && !name) return;
    
    // Simulate sending verification email
    setTimeout(() => {
      setIsEmailSent(true);
    }, 1000);
  };

  const handleVerification = (e) => {
    e.preventDefault();
    if (!verificationCode) return;
    
    // Simulate verification process
    setIsVerifying(true);
    setTimeout(() => {
      // Redirect to dashboard after successful verification
      router.push('/dashboard');
    }, 1500);
  };

  const handleGoogleAuth = () => {
    // Simulate Google auth and redirect
    setTimeout(() => {
      router.push('/dashboard');
    }, 1000);
  };

  const handleAppleAuth = () => {
    // Simulate Apple auth and redirect
    setTimeout(() => {
      router.push('/dashboard');
    }, 1000);
  };
  
  const toggleAuthMode = () => {
    setIsLoginMode(!isLoginMode);
    setIsEmailSent(false);
    setIsVerifying(false);
    setEmail('');
    setName('');
    setVerificationCode('');
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
  };

  const slideUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } }
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-black/80 to-black/95 p-4 overflow-y-auto"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <motion.div 
        className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-[90%] xs:max-w-sm sm:max-w-md md:max-w-4xl flex flex-col md:flex-row my-8 md:my-0"
        variants={slideUp}
      >
        {/* Close button */}
        <motion.button
          onClick={onClose}
          className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-500 hover:text-gray-700 z-10 p-2 rounded-full hover:bg-gray-100 transition-all duration-300"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <IoMdClose size={isMobile ? 20 : 24} />
        </motion.button>

        {/* Image section */}
        <div className="hidden md:block md:w-1/2 relative overflow-hidden">
          <div className="h-full min-h-[450px] lg:min-h-[500px]">
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              className="h-full w-full relative"
            >
              <Image
                src="/assets/images/login-image.jpg"
                alt="Fashion model"
                fill
                style={{ objectFit: 'cover' }}
                priority
                className="hover:scale-105 transition-transform duration-3000"
              />
            </motion.div>
          </div>
        </div>

        {/* Login form section */}
        <div className="w-full md:w-1/2 p-5 sm:p-6 md:p-8 flex flex-col justify-center bg-white shadow-lg">
          <motion.div 
            className="text-center mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex justify-center mb-3 sm:mb-4">
              <motion.div 
                className="text-3xl sm:text-4xl font-bold text-gray-900 bg-gray-100 p-2 sm:p-3 rounded-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                FX
              </motion.div>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">
              {isLoginMode ? 'Sign in to FashionX' : 'Create your FashionX account'}
            </h2>
            <p className="text-sm sm:text-base text-gray-800 font-medium px-2">
              {isLoginMode 
                ? 'Continue with your account to access exclusive features' 
                : 'Join FashionX to transform your fashion experience'}
            </p>
          </motion.div>

          {!isEmailSent ? (
            <motion.div 
              className="space-y-3 sm:space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                onClick={handleGoogleAuth}
                className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-full py-2.5 sm:py-3 px-4 hover:bg-gray-50 transition-all duration-300 text-gray-900 font-medium shadow-sm hover:shadow-md"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <FcGoogle size={isMobile ? 18 : 20} />
                <span className="text-sm sm:text-base">Continue with Google</span>
              </motion.button>
              
              <motion.button
                onClick={handleAppleAuth}
                className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-full py-2.5 sm:py-3 px-4 hover:bg-gray-50 transition-all duration-300 text-gray-900 font-medium shadow-sm hover:shadow-md"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaApple size={isMobile ? 18 : 20} />
                <span className="text-sm sm:text-base">Continue with Apple</span>
              </motion.button>
              
              <motion.button
                onClick={() => setIsEmailSent(true)}
                className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-full py-2.5 sm:py-3 px-4 hover:bg-gray-50 transition-all duration-300 text-gray-900 font-medium shadow-sm hover:shadow-md"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <MdEmail size={isMobile ? 18 : 20} />
                <span className="text-sm sm:text-base">Continue with Email</span>
              </motion.button>
            </motion.div>
          ) : !isVerifying ? (
            <motion.form 
              onSubmit={handleEmailSubmit} 
              className="space-y-3 sm:space-y-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {!isLoginMode && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1 ml-1">
                    Full Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-900 bg-white shadow-sm"
                    required
                    whileFocus={{ scale: 1.01, boxShadow: '0 0 0 2px rgba(0,0,0,0.1)' }}
                  />
                </div>
              )}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1 ml-1">
                  Email Address
                </label>
                <motion.input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-900 bg-white shadow-sm"
                  required
                  whileFocus={{ scale: 1.01, boxShadow: '0 0 0 2px rgba(0,0,0,0.1)' }}
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gray-900 text-white rounded-full py-2.5 sm:py-3 px-4 hover:bg-gray-800 transition-all duration-300 font-medium shadow-md hover:shadow-lg mt-2"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Verification Link
              </motion.button>
              <p className="text-center text-xs sm:text-sm text-gray-900 font-medium mt-3 sm:mt-4">
                We'll send you a verification link to your email.
              </p>
            </motion.form>
          ) : (
            <motion.form 
              onSubmit={handleVerification} 
              className="space-y-3 sm:space-y-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <label htmlFor="verification" className="block text-sm font-medium text-gray-900 mb-1 ml-1">
                  Verification Code
                </label>
                <motion.input
                  type="text"
                  id="verification"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  placeholder="Enter verification code"
                  className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-900 bg-white shadow-sm"
                  required
                  whileFocus={{ scale: 1.01, boxShadow: '0 0 0 2px rgba(0,0,0,0.1)' }}
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gray-900 text-white rounded-full py-2.5 sm:py-3 px-4 hover:bg-gray-800 transition-all duration-300 font-medium shadow-md hover:shadow-lg mt-2"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoginMode ? 'Verify & Sign In' : 'Verify & Create Account'}
              </motion.button>
              <p className="text-center text-xs sm:text-sm text-gray-900 font-medium mt-3 sm:mt-4">
                Check your email for the verification code we sent to <span className="font-bold">{email}</span>
              </p>
            </motion.form>
          )}

          <motion.div 
            className="mt-5 sm:mt-6 text-center text-xs sm:text-sm text-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p>
              {isLoginMode ? "Don't have an account? " : "Already have an account? "}
              <motion.button 
                onClick={toggleAuthMode} 
                className="text-gray-900 font-bold underline hover:text-gray-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isLoginMode ? 'Sign up' : 'Sign in'}
              </motion.button>
            </p>
          </motion.div>

          <motion.div 
            className="mt-3 sm:mt-4 text-center text-xs sm:text-sm text-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p>
              By continuing, you agree to our{' '}
              <motion.a 
                href="#" 
                className="text-gray-900 font-bold underline hover:text-gray-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Terms
              </motion.a>{' '}
              and{' '}
              <motion.a 
                href="#" 
                className="text-gray-900 font-bold underline hover:text-gray-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Privacy Policy
              </motion.a>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoginModal;