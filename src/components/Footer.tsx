'use client';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Branding */}
        <div>
          <Link
            href="/"
          >
            <Image
              src="/logo.png"
              width={100}
              height={100}
              alt="logo"
              className="w-46 md:w-36 strokeWidth={5}  h-auto object-contain"
            />


          </Link>     
               <p className="text-sm text-gray-400">
            Empowering creative careers in digital media, graphic design, marketing & more since 2018.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-[#652f8e]">About Us</a></li>
            <li><a href="#courses" className="hover:text-[#652f8e]">Courses</a></li>
            <li><a href="#contact" className="hover:text-[#652f8e]">Contact</a></li>
            <li><a href="#" className="hover:text-[#652f8e]">Careers</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-white">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#652f8e]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#652f8e]">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-[#652f8e]">Support</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-white">Connect With Us</h4>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-[#652f8e]"><Facebook size={20} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[#652f8e]"><Instagram size={20} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#652f8e]"><Linkedin size={20} /></a>
            <a href="mailto:info@designifiy.com" aria-label="Email" className="hover:text-[#652f8e]"><Mail size={20} /></a>
          </div>
        </div>

      </div>

      <hr className="my-6 border-gray-700" />

      {/* Bottom Footer */}
      <div className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Designifiy Digital Media Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
