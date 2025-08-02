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
];

export default function CompanyLogos() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardWidth = 140 + 24;
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;

    const autoScroll = () => {
      if (!container) return;
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1;
      }
    };

    const interval = setInterval(() => {
      if (isMobile) autoScroll();
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 relative">
          <h3 className="text-2xl font-bold text-[#652f8e] mb-10 text-center w-full">
            Some of Our Students Got the Placement in these Companies
          </h3>

          {/* Chevron buttons (desktop only) */}
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

        {/* Logo Slider */}
        <div className="overflow-hidden mx-auto md:w-[832px]"> {/* 5 logos wide (140px + 24px gap * 4) */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
          >
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="h-28 w-[140px] flex-shrink-0 relative grayscale hover:grayscale-0 transition duration-300"
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
      </div>

      {/* CTA Section */}
      <div className="mt-10 text-center">
        <button className="px-6 py-2 bg-[#652f8e] hover:bg-[#501d6a] text-white rounded-full font-semibold transition">
          Enroll Now
        </button>
        <p className="mt-3 text-sm text-gray-600 font-medium">
          📧 info@example.com &nbsp; | &nbsp; 📞 +91 9876543210
        </p>
      </div>
    </section>
  );
}
