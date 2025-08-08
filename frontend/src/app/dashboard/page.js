'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  // This is a placeholder for authentication check
  // In a real app, you would check if the user is logged in
  useEffect(() => {
    // Simulating auth check
    const isLoggedIn = true; // This would be a real auth check in production
    
    if (!isLoggedIn) {
      router.push('/');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gray-900 text-white py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">FashionX Dashboard</h1>
          <button 
            onClick={() => router.push('/')}
            className="px-4 py-2 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Welcome to your Dashboard</h2>
          <p className="text-gray-600">
            You have successfully logged in to your FashionX account. This is where you can manage your profile, orders, and preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Your Profile</h3>
            <p className="text-gray-600 mb-4">Update your personal information and preferences</p>
            <button className="text-gray-900 font-medium hover:underline">Edit Profile</button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Your Orders</h3>
            <p className="text-gray-600 mb-4">View and track your recent orders</p>
            <button className="text-gray-900 font-medium hover:underline">View Orders</button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Your Wishlist</h3>
            <p className="text-gray-600 mb-4">Products you've saved for later</p>
            <button className="text-gray-900 font-medium hover:underline">View Wishlist</button>
          </div>
        </div>
      </main>
    </div>
  );
}