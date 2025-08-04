'use client';

import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';
import { ArrowDownToLine } from 'lucide-react';

const slides = [
  { src: '/vivek-video.mp4' },
  { src: '/video.mp4' },
  { src: '/sumit.mp4' },
  { src: '/Adm.mp4' },
   { src: '/vivek-video.mp4' },
  { src: '/video.mp4' },
  { src: '/sumit.mp4' },
  { src: '/Adm.mp4' },
];

export default function CreativeCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [centerIndex, setCenterIndex] = useState(1);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;

    const cardWidth =
      window.innerWidth < 768 ? window.innerWidth * 0.8 + 16 : 384 + 24;
    const visibleCards = 3;
    const centerOffset = Math.floor(visibleCards / 2);

    const index = Math.round(scrollLeft / cardWidth);
    setCenterIndex(index + centerOffset);
  };

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardWidth =
      window.innerWidth < 768 ? window.innerWidth * 0.8 + 16 : 384 + 24;
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    });
  };

  const handlePlayClick = (index: number) => {
    videoRefs.current.forEach((video, i) => {
      if (video) {
        if (i === index) {
          video.muted = false;
          video.play();
          setPlayingIndex(index);
        } else {
          video.pause();
        }
      }
    });
  };

  // Pause all videos on unmount
  useEffect(() => {
    return () => {
      videoRefs.current.forEach((video) => video?.pause());
    };
  }, []);

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
          key={idx}
          ref={(el) => {
            if (el) videoRefs.current[idx] = el;
          }}
          src={item.src}
          className="w-full h-full object-cover"
          controls={idx === playingIndex}
          muted
        />

             {idx === centerIndex && playingIndex !== idx && (
  <button
    onClick={() => handlePlayClick(idx)}
    className="absolute inset-0 flex items-center justify-center bg-black/30 transition"
  >
    <PlayCircle className="w-16 h-16 text-white opacity-90 hover:scale-105 transition-transform" />
  </button>
)}

            </div>
          ))}
        </div>
      </div>

      {/* Brochure Button */}
      <div className="flex justify-center">
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
