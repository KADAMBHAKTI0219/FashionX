'use client';
import React, { useState } from 'react';
import LoginModal from './login';
import { motion } from 'framer-motion';

const LoginButton = () => {
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
        className="text-coffee px-4 sm:px-6 py-1.5 sm:py-2 rounded-full transition-all duration-300 hover:bg-coffee/10 text-sm sm:text-base font-medium relative overflow-hidden group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10">Sign In</span>
        <span className="absolute inset-0 bg-gradient-to-r from-coffee/5 to-coffee/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
      </motion.button>
      <LoginModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default LoginButton;