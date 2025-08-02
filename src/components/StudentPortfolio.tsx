'use client';

import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';
import { ArrowDownToLine } from 'lucide-react';


const slides = [
  { src: '/v2-home-video.mp4' },
  { src: '/v2-home-video.mp4' },
  { src: '/v2-home-video.mp4' },
  { src: '/v2-home-video.mp4' },
  { src: '/v2-home-video.mp4' },
  { src: '/v2-home-video.mp4' },
];

export default function CreativeCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [centerIndex, setCenterIndex] = useState(1);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;

    const cardWidth = window.innerWidth < 768 ? window.innerWidth * 0.8 + 16 : 384 + 24; // mobile vs desktop
    const visibleCards = 3;
    const centerOffset = Math.floor(visibleCards / 2);

    const index = Math.round(scrollLeft / cardWidth);
    setCenterIndex(index + centerOffset);
  };

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardWidth = window.innerWidth < 768 ? window.innerWidth * 0.8 + 16 : 384 + 24;
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    });
  };

  return (
    <section className="bg-purple-100 py-10 text-[#652f8e] relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 relative">
          <h2 className="text-2xl md:text-3xl font-semibold text-center w-full">
            Student — <span className="font-bold">work showcase</span>
          </h2>

          {/* Chevron Buttons (Only on Desktop) */}
          <div className="absolute right-4 top-1 md:flex gap-2 hidden">
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

        {/* Carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-6 px-4 scroll-smooth no-scrollbar snap-x snap-mandatory"
        >
          {slides.map((item, idx) => (
            <div
              key={idx}
              className={`
                relative flex-shrink-0 snap-center overflow-hidden bg-black group
                rounded-2xl h-80
                w-[80%] sm:w-96
                mx-auto sm:mx-0

                
              `}
            >
              <video
                src={item.src}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
              {/* Show video icon only for center card */}
              {idx === centerIndex && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition">
                  <PlayCircle className="w-16 h-16 text-white opacity-90 hover:scale-105 transition-transform" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex  justify-center ">
  <a
    href="/brochure.pdf" 
    download
    className="inline-flex items-center gap-2 mt-6 px-6 py-2 bg-[#652f8e] text-white rounded-full font-medium hover:bg-[#501d6a] transition"
  >
    Download Brochure
    <ArrowDownToLine size={18} />
  </a>
</div>

    </section>
  );
}
