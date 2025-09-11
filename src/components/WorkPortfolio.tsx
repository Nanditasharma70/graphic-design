'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Eye, Share2 } from 'lucide-react';

const students = [
  {
    name: 'Sunil Kumar',
    software: 'Photoshop, Illustrator, CorelDraw,',
    image: '/Sunil.webp',
    portfolioUrl: '#',
  },
  {
    name: 'Raj Mehra',
    software: 'Photoshop, Illustrator, XD, After Effects',
    image: '/Rajnish.webp',
    portfolioUrl: '#',
  },
  {
    name: 'Pooja Singh',
    software: 'CorelDraw, Photoshop, Illustrator',
    image: '/Pooja.webp',
    portfolioUrl: '#',
  },
  {
    name: 'Aman ',
    software: 'Illustrator, After Effects, Premiere Pro',
    image: '/Aman.webp',
    portfolioUrl: '#',
  },
  {
    name: 'Mansi ',
    software: 'After Effects, Figma, Photoshop',
    image: '/mansi.webp',
    portfolioUrl: '#',
  },
  {
    name: 'Hemant',
    software: 'Premiere Pro, XD, Illustrator',
    image: '/Hemant.webp',
    portfolioUrl: '#',
  },
];

export default function StudentPortfolioCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollValue = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -scrollValue : scrollValue,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-6 md:ms-0 ms-6 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center ">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center w-full">
            Our Student Works Portfolio
          </h2>
        </div>

        {/* Arrows for Desktop */}
        <div className="hidden md:flex justify-end gap-2 mb-4">
          <button
            onClick={() => scroll('left')}
            className="bg-[#652f8e] text-white p-2 rounded-full hover:bg-[#501d6a]"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="bg-[#652f8e] text-white p-2 rounded-full hover:bg-[#501d6a]"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-4 py-6">
          {students.map((student, index) => (
            <div
              key={index}
              className="snap-start flex-shrink-0 w-[80%] sm:w-[calc(44%-1rem)] md:w-[calc(25.333%-1rem)] bg-[#f3e8ff] text-[#4c0574] rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition-transform"
            >
              <div className="flex justify-center mt-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <Image
                    src={student.image}
                    alt={student.name}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-md mb-2">{student.name}</h3>
                <p className="text-xs mb-4">{student.software}</p>
                <a
                  href={student.portfolioUrl}
                  className="inline-block bg-[#652f8e] text-white text-xs font-semibold px-4 py-2 rounded-full transition hover:bg-[#4a2160]"
                >
                  Portfolio
                </a>
                <div className="mt-4 flex justify-center items-center gap-4 text-[11px] text-gray-600">
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" /> 345 views
                  </span>
                  <Share2 className="w-4 h-4 cursor-pointer hover:text-[#652f8e]" />
                </div>
              </div>
            </div>
          ))}
        </div>  
        </div> 
         </section>
  );
}
