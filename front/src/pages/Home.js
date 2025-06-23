// src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-gray-700">Welcome to WebEdu!</h1>
        <p className="text-gray-600 mt-2">This is the home page.</p>
      </div>
    </div>
  );
}
