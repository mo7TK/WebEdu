// src/components/Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, UserRound, House } from 'lucide-react';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null); // Reference to the dropdown container

  useEffect(() => {
    // Close menu if clicked outside
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="flex items-center justify-between bg-sky-900 p-2 shadow-md w-full">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/algeria-flag-with-grunge-texture-png.webp" alt="Logo" className="w-10 h-8 mr-2" />
        <span className="font-bold text-lg text-white">WebEdu</span>
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-1 max-w-md ml-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-5 mr-5 items-center relative">
        <Link to="/" className="text-white hover:text-cyan-400 font-medium ml-2">
          <House />
        </Link>

        {/* User Icon with dropdown */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-white hover:text-cyan-400"
          >
            <UserRound />
          </button>

          {/* Dropdown menu */}
          {showMenu && (
            <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-md z-10">
              <Link
                to="/profile"
                className="block px-4 py-2 text-gray-800 hover:bg-cyan-100 hover:rounded-t-lg"
                onClick={() => setShowMenu(false)}
              >
                Profile
              </Link>
              <Link
                to="/login"
                className="block px-4 py-2 text-gray-800 hover:bg-cyan-100 hover:rounded-b-lg"
                onClick={() => setShowMenu(false)}
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
