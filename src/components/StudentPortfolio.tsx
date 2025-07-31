'use client';

import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';

const slides = [
    { src: '/course1.jpg', isVideo: false },
    { src: '/course2.jpg', isVideo: true },
    { src: '/course3.jpg', isVideo: false },
    { src: '/course1.jpg', isVideo: false },
    { src: '/course2.jpg', isVideo: true },
    { src: '/course3.jpg', isVideo: false },
    { src: '/course1.jpg', isVideo: false },
    { src: '/course2.jpg', isVideo: true },
    { src: '/course3.jpg', isVideo: false },
];

export default function CreativeCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [visibleStart, setVisibleStart] = useState(0);

    const cardWidth = 384 + 24; // w-96 (384px) + gap (24px)

    const scroll = (dir: 'left' | 'right') => {
        if (!scrollRef.current) return;

        const scrollBy = cardWidth * 3;
        const container = scrollRef.current;

        container.scrollBy({
            left: dir === 'left' ? -scrollBy : scrollBy,
            behavior: 'smooth',
        });

        // Update index for center card (optional for animation)
        const next = visibleStart + (dir === 'left' ? -3 : 3);
        setVisibleStart(Math.max(0, Math.min(slides.length - 3, next)));
    };

    return (
        <section className="bg-purple-200 py-10 text-purple-700 relative">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-semibold text-center w-full">
                        Empowering Creativity — <span className="font-bold">Real Skills, Real Portfolios</span>

                    </h2>

                    {/* Right top corner scroll buttons */}
                    <div className="absolute right-4 top-4 flex gap-2">
                        <button
                            onClick={() => scroll('left')}
                            className="bg-purple-700 hover:bg-purple-800 text-white p-2 rounded-full"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="bg-purple-700 hover:bg-purple-800 text-white p-2 rounded-full"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-6 px-2 scroll-smooth no-scrollbar"
                >
                    {slides.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 w-96 h-96 rounded-2xl overflow-hidden relative group"
                        >
                            <img
                                src={item.src}
                                alt={`Slide ${idx}`}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Show video icon only for center card */}
                            {item.isVideo && idx === visibleStart + 1 && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition">
                                    <PlayCircle className="w-18 h-18 text-white  opacity-90 hover:scale-105 transition-transform" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
