'use client';
import React, { useState } from 'react';
import LoginModal from './login';
import { motion } from 'framer-motion';

const RegisterButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.button
        onClick={openModal}
        className="bg-white text-gray-900 border border-gray-300 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base font-medium shadow-sm hover:shadow-md relative overflow-hidden group"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10">Sign Up</span>
        <span className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
      </motion.button>
      <LoginModal isOpen={isModalOpen} onClose={closeModal} initialMode="signup" />
    </>
  );
};

export default RegisterButton;