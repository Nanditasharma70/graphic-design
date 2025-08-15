'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const reviews = [
  { id: 1, image: '/B.webp', alt: 'Google Review 1' },
  { id: 2, image: '/C.webp', alt: 'Google Review 2' },
  { id: 3, image: '/E.webp', alt: 'Google Review 3' },
  { id: 4, image: '/F.webp', alt: 'Google Review 4' },
  { id: 1, image: '/K.webp', alt: 'Google Review 5' },
  { id: 2, image: '/J.webp', alt: 'Google Review 6' },
  { id: 3, image: '/H.webp', alt: 'Google Review 7' },
  { id: 4, image: '/G.webp', alt: 'Google Review 8' },
];

export default function StudentReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth / 1.5; // responsive scroll
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(scrollNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-200 mb-4">
          What Our Students Say
        </h2>

         <div
      ref={scrollRef}
      className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory px-4 py-2"
    >
      {reviews.map((review, index) => (
        <div
          key={`${review.id}-${index}`} // ensures uniqueness even if IDs repeat
          className="snap-start flex-shrink-0 w-[80%] sm:w-[300px] rounded-2xl bg-white shadow-md border border-gray-200 overflow-hidden hover:scale-[1.03] transition"
        >
          <Image
            src={review.image}
            alt={review.alt}
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
         
        </div>
      ))}
    </div>
      </div>
    </section>
  );
}
