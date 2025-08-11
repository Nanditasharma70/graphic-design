'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const logos = [
  { name: 'job1', src: '/Job-01.webp' },
  { name: 'job2', src: '/Job-02.webp' },
  { name: 'job3', src: '/Job-03.webp' },
  { name: 'job4', src: '/Job-04.webp' },
  { name: 'job5', src: '/Job-05.webp' },
  { name: 'job6', src: '/Job-06.webp' },
  { name: 'job7', src: '/Job-07.webp' },
  { name: 'job8', src: '/Job-08.webp' },
  { name: 'job9', src: '/Job-09.webp' },
   { name: 'job10', src: '/Job-03.webp' },
  { name: 'job11', src: '/Job-04.webp' },
  { name: 'job12', src: '/Job-05.webp' },
  { name: 'job13', src: '/Job-06.webp' },
  { name: 'job14', src: '/Job-07.webp' },
  { name: 'job15', src: '/Job-08.webp' },
  { name: 'job16', src: '/Job-09.webp' },
];

export default function CompanyLogos() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardSize = 140 + 24;
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -cardSize : cardSize,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;

    const autoScroll = () => {
      if (!container) return;
      const maxScroll = isMobile
        ? container.scrollHeight - container.clientHeight
        : container.scrollWidth - container.clientWidth;

      if (isMobile) {
        if (container.scrollTop >= maxScroll) {
          container.scrollTop = 0;
        } else {
          container.scrollTop += 1;
        }
      } else {
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += 1;
        }
      }
    };

    const interval = setInterval(autoScroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 relative  border-4 border-purple-900 rounded-lg  md:border-none mx-1">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 relative">
          <h3 className="text-xl font-semibold text-gray-800 mb-10 text-center w-full">
            Some of Our <span className='text-2xl text-[#652f8e] font-bold'>Students</span> Got the
            <span className='text-2xl text-[#652f8e] font-bold'> Placement</span> in these
            <span className='text-2xl text-[#652f8e] font-bold'> Companies</span>
          </h3>

          {/* Arrows only on Desktop */}
          <div className="absolute right-0 top-0 gap-2 hidden md:flex">
            <button
              onClick={() => scroll('left')}
              className="bg-[#652f8e] hover:bg-[#501d6a] text-white p-2 rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="bg-[#652f8e] hover:bg-[#501d6a] text-white p-2 rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Logo Container */}
       <div className="overflow-hidden mx-auto md:w-[832px] h-[260px] md:h-auto">
  <div
    ref={scrollRef}
    className={`
     
      no-scrollbar
      h-[300px] md:h-auto
      overflow-auto
      grid grid-cols-2 gap-4
      md:flex md:gap-6 
      md:overflow-x-auto 
      md:overflow-y-hidden
    `}
  >
    {logos.map((logo, idx) => (
      <div
        key={idx}
        className="h-28 w-full md:w-[140px] flex-shrink-0 relative"
      >
        <Image
          src={logo.src}
          alt={logo.name}
          fill
          className="object-contain"
        />
      </div>
    ))}
  </div>
</div>


        {/* CTA (Desktop only) */}
        <div className="mt-10 text-center hidden md:block">
          <button className="px-6 py-2 bg-[#652f8e] hover:bg-[#501d6a] text-white rounded-full font-semibold transition">
            Enroll Now
          </button>
          <p className="mt-3 text-sm text-gray-600 font-medium">
            📧 info@example.com &nbsp; | &nbsp; 📞 +91 9876543210
          </p>
        </div>
      </div>
    </section>
  );
}
