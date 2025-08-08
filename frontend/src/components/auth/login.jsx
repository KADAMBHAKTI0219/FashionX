'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

const LoginModal = ({ isOpen, onClose, initialMode = 'login' }) => {
  const router = useRouter();
  const [isLoginMode, setIsLoginMode] = useState(initialMode === 'login');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-black/80 to-black/95  p-4">x

      <div className="relative bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-sm sm:max-w-md md:max-w-4xl flex flex-col md:flex-row">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <IoMdClose size={20} className="sm:w-6 sm:h-6" />
        </button>

        {/* Image section */}
        <div className="hidden md:block md:w-1/2 relative">
          <div className="h-full min-h-[400px]">
            <Image
              src="/assets/images/login-image.jpg"
              alt="Fashion model"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>

        {/* Login form section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-white shadow-lg">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="text-4xl font-bold text-gray-900">FX</div>
            </div>
            <h2 className="text-2xl font-bold mb-2 text-gray-900">
              {isLoginMode ? 'Sign in to FashionX' : 'Create your FashionX account'}
            </h2>
            <p className="text-gray-800 font-medium">
              {isLoginMode 
                ? 'Continue with your account to access exclusive features' 
                : 'Join FashionX to transform your fashion experience'}
            </p>
          </div>

          {!isEmailSent ? (
            <div className="space-y-4">
              <button
                onClick={handleGoogleAuth}
                className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-full py-3 px-4 hover:bg-gray-50 transition-colors text-gray-900 font-medium"
              >
                <FcGoogle size={20} />
                <span>Continue with Google</span>
              </button>
              
              <button
                onClick={handleAppleAuth}
                className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-full py-3 px-4 hover:bg-gray-50 transition-colors text-gray-900 font-medium"
              >
                <FaApple size={20} />
                <span>Continue with Apple</span>
              </button>
              
              <button
                onClick={() => setIsEmailSent(true)}
                className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-full py-3 px-4 hover:bg-gray-50 transition-colors text-gray-900 font-medium"
              >
                <MdEmail size={20} />
                <span>Continue with Email</span>
              </button>
            </div>
          ) : !isVerifying ? (
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              {!isLoginMode && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-900 bg-white"
                    required
                  />
                </div>
              )}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-900 bg-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white rounded-full py-3 px-4 hover:bg-gray-800 transition-colors font-medium"
              >
                Send Verification Link
              </button>
              <p className="text-center text-sm text-gray-900 font-medium mt-4">
                We'll send you a verification link to your email.
              </p>
            </form>
          ) : (
            <form onSubmit={handleVerification} className="space-y-4">
              <div>
                <label htmlFor="verification" className="block text-sm font-medium text-gray-900 mb-1">
                  Verification Code
                </label>
                <input
                  type="text"
                  id="verification"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  placeholder="Enter verification code"
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-900 bg-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white rounded-full py-3 px-4 hover:bg-gray-800 transition-colors font-medium"
              >
                {isLoginMode ? 'Verify & Sign In' : 'Verify & Create Account'}
              </button>
              <p className="text-center text-sm text-gray-900 font-medium mt-4">
                Check your email for the verification code we sent to {email}
              </p>
            </form>
          )}

          <div className="mt-6 text-center text-sm text-gray-900">
            <p>
              {isLoginMode ? "Don't have an account? " : "Already have an account? "}
              <button 
                onClick={toggleAuthMode} 
                className="text-gray-900 font-bold underline"
              >
                {isLoginMode ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>

          <div className="mt-4 text-center text-sm text-gray-900">
            <p>
              By continuing, you agree to our{' '}
              <a href="#" className="text-gray-900 font-bold underline">
                Terms
              </a>{' '}
              and{' '}
              <a href="#" className="text-gray-900 font-bold underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;