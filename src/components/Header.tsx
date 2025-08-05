'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search } from 'lucide-react';
import { PhoneCall } from 'lucide-react';

import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#652f8e] shadow-md fixed top-0 left-0 right-0 z-50 transition-all">


      <div className="max-w-7xl mx-auto px-1 md:px-4  flex items-center justify-between">
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-8 h-8 font-bold text-white" strokeWidth={3} />
            ) : (
              <Menu className="w-10 h-10 text-white" strokeWidth={3} />

            )}
          </button>
        </div>

        {/* Left Side: Logo */}
        <Link
          href="/"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={200}
            height={80}
            className="w-46 md:w-30 md:ms-5 object-contain"
          />



        </Link>

        {/* Middle: Search (Desktop Only) */}
        <div className="hidden md:block relative w-full max-w-sm mx-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Search className="absolute right-3 top-2.5 text-gray-100 w-4 h-4" />
        </div>

        {/* Right: Menu Links + Sign In (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-white hover:text-gray-50">About</Link>
          <Link href="#courses" className="text-white hover:text-gray-50">Courses</Link>
          <Link href="#contact" className="text-white hover:text-gray-50">Contact</Link>

          <button className="bg-white text-[#652f8e] px-5 py-2 rounded-full shadow-md hover:bg-gray-50 transition">
            Sign In
          </button>
        </div>

        {/* Mobile Toggle & Actions */}
        <div className="md:hidden flex items-center gap-2">
          <a href="tel:9958890093" className="h-10 gap-2 px-3 bg-white text-[#652f8e] rounded-full shadow hover:bg-gray-50 flex items-center justify-center">
            <PhoneCall className="w-5 h-5" />
            <span>9958890093</span>
          </a>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-[#652f8e] px-2   shadow-md transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
          }`}
      >
        <Link href="#about" className="block py-2 text-white hover:text-gray-50">About</Link>
        <Link href="#courses" className="block py-2 text-white hover:text-gray-50">Courses</Link>
        <Link href="#contact" className="block py-2 text-white hover:text-gray-50">Contact</Link>


      </div>
    </header>
  );
}
