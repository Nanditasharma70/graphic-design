'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 transition-all">
         
      
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
         <div className="md:hidden flex items-center gap-2">
           <button
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
          </div>
        
        {/* Left Side: Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-purple-700 tracking-wide flex flex-col"
        >
          <span className="font-black">De<span>sign</span>ifiy</span>
          <p className="ms-6 text-[8px] text-gray-500">Digital Media Pvt. Ltd</p>
        </Link>

        {/* Middle: Search (Desktop Only) */}
        <div className="hidden md:block relative w-full max-w-sm mx-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Search className="absolute right-3 top-2.5 text-gray-400 w-4 h-4" />
        </div>

        {/* Right: Menu Links + Sign In (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-gray-700 hover:text-purple-600">About</Link>
          <Link href="#courses" className="text-gray-700 hover:text-purple-600">Courses</Link>
          <Link href="#contact" className="text-gray-700 hover:text-purple-600">Contact</Link>

          <button className="bg-purple-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-purple-700 transition">
            Sign In
          </button>
        </div>

        {/* Mobile Toggle & Actions */}
        <div className="md:hidden flex items-center gap-2">
        
          <button>
            <Search className="w-5 h-5 text-gray-600" />
          </button>
         
           <button className="mt-4 w-full bg-purple-600 text-white px-4 py-2 rounded-full shadow hover:bg-purple-700">
          Sign In
        </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-white px-2 pt-4  shadow-md transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
        }`}
      >
        <Link href="#about" className="block py-2 text-gray-700 hover:text-purple-600">About</Link>
        <Link href="#courses" className="block py-2 text-gray-700 hover:text-purple-600">Courses</Link>
        <Link href="#contact" className="block py-2 text-gray-700 hover:text-purple-600">Contact</Link>

       
      </div>
    </header>
  );
}
