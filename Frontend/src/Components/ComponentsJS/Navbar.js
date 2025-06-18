import React from "react";  
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow-md">
      {/* Logo on the left */}
      <div className="flex items-center">
        <img src="/logo192.png" alt="Logo" className="w-10 h-10 mr-2" />
        <span className="font-bold text-lg text-gray-800">WebEdu</span>
      </div>

      {/* Search bar in the middle */}
      <div className="flex-1 mx-4 max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Navigation links on the right */}
      <div className="flex items-center space-x-4">
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 font-medium transition"
        >
          Home
        </Link>
        <Link
          to="/profile"
          className="text-gray-700 hover:text-blue-600 font-medium transition"
        >
          Profile
        </Link>
      </div>
    </nav>
  );
}
