'use client';
import React, { useState } from 'react';
import LoginModal from './login';

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
      <button
        onClick={openModal}
        className=" text-coffee px-6 py-2 rounded-full transition-colors"
      >
        Sign In
      </button>
      <LoginModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default LoginButton;