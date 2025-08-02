'use client';

import { useRef } from 'react';
import Image from 'next/image';
import {  Eye, Share2 } from 'lucide-react';

const students = [
  {
    name: 'Suraj Kumar',
    software: 'Photoshop, Illustrator, CorelDraw,',
    image: '/s1.jpg',
    portfolioUrl: '#',
  },
  {
    name: 'Raj Mehra',
    software: 'Photoshop, Illustrator, XD, After Effects',
    image: '/s2.jpg',
    portfolioUrl: '#',
  },
  {
    name: 'Pooja Singh',
    software: 'CorelDraw, Photoshop, Illustrator',
    image: '/s3.jpg',
    portfolioUrl: '#',
  },
  {
    name: 'Ankit Rana',
    software: 'Illustrator, After Effects, Premiere Pro',
    image: '/s4.jpg',
    portfolioUrl: '#',
  },
  {
    name: 'Rekha Sharma',
    software: 'After Effects, Figma, Photoshop',
    image: '/s5.jpg',
    portfolioUrl: '#',
  },
  {
    name: 'Mohit Rawat',
    software: 'Premiere Pro, XD, Illustrator',
    image: '/s6.jpg',
    portfolioUrl: '#',
  },
];

export default function StudentPortfolioCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollValue = scrollRef.current.offsetWidth; // scroll by one screen (3 cards)
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -scrollValue : scrollValue,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-6 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-[#652f8e]">
          Our Student Works Portfolio
        </h2>


        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-4 sm:px-6"
        >
          {students.map((student, index) => (
            <div
              key={index}
              className="snap-start flex-shrink-0 w-[90%] sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] bg-[#652f8e] text-white rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition"
            >
              <Image
                src={student.image}
                alt={student.name}
                width={300}
                height={180}
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <h3 className="font-bold text-md mb-1">Student Name : {student.name}</h3>
                <p className="text-xs mb-3">Software : {student.software}</p>

                <a
                  href={student.portfolioUrl}
                  className="inline-block bg-white text-[#652f8e] text-xs font-semibold px-3 py-1 rounded-full  transition"
                >
                  <Eye className="inline w-4 h-4 mr-1" /> Portfolio
                </a>

                <div className="mt-2 flex justify-between items-center text-[11px] text-white">
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" /> 345
                  </span>
                  <Share2 className="w-4 h-4 hover:text-white transition" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
