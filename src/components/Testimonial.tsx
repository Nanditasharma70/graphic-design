'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const teamMembers = [
  {
    name: 'Ankit KK',
    role: 'Founder',
    image: '/Ankit.webp',
  },
  {
    name: 'Sulekha',
    role: 'Founder',
       image: '/Sulekha.webp',
  },
  {
    name: 'Pooja',
    role: 'Admin Deptt.',
    image: '/Pooja.webp',
  },
  {
    name: 'Ananya Mukhi',
    role: 'HR.',
 image: '/ananya.webp',
  },
   {
    name: 'Anjali',
    role: 'SEO Expert',
    image: '/Anjali.webp',
  },
  {
    name: 'Aarti',
    role: 'Sales Team',
       image: '/Aarti.webp',
  },
];

export default function OurTeam() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll for desktop
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const isDesktop = window.innerWidth >= 768;

    if (!isDesktop) return;

    const scrollFn = () => {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1;
      }
    };

    const interval = setInterval(scrollFn, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl text-[#652f8e] font-bold text-center mb-10">
          Meet Our Creative Team
        </h2>

        {/* Shared scrollable flex container for all views */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory px-2"
        >
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[85%] sm:w-[65%] md:w-[30%] lg:w-[25%] snap-center bg-white rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105"
            >
              <div className="relative w-full h-72">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-t-2xl"
                />
              </div>

              <div className="bg-white  p-2 text-[#652f8e] text-center rounded-b-2xl">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm italic mb-2">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
