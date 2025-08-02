'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const teamMembers = [
  {
    name: 'Priya Verma',
    role: 'UI/UX Designer',
    description: 'Expert in building clean, user-friendly designs that speak visually.',
    image: '/s1.jpg',
  },
  {
    name: 'Aman Sharma',
    role: 'Digital Marketer',
    description: 'Focused on lead generation, SEO, and building engaging campaigns.',
    image: '/s2.jpg',
  },
  {
    name: 'Neha Rawat',
    role: 'VFX Artist',
    description: 'Bringing cinematic effects and high-end video storytelling to life.',
    image: '/s3.jpg',
  },
  {
    name: 'Rahul Joshi',
    role: 'Content Strategist',
    description: 'Crafting compelling content and stories for digital platforms.',
    image: '/s4.jpg',
  },
   {
    name: 'Priya Verma',
    role: 'UI/UX Designer',
    description: 'Expert in building clean, user-friendly designs that speak visually.',
    image: '/s1.jpg',
  },
  {
    name: 'Aman Sharma',
    role: 'Digital Marketer',
    description: 'Focused on lead generation, SEO, and building engaging campaigns.',
    image: '/s2.jpg',
  },
  {
    name: 'Neha Rawat',
    role: 'VFX Artist',
    description: 'Bringing cinematic effects and high-end video storytelling to life.',
    image: '/s3.jpg',
  },
  {
    name: 'Rahul Joshi',
    role: 'Content Strategist',
    description: 'Crafting compelling content and stories for digital platforms.',
    image: '/s4.jpg',
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
    <section className="bg-white py-12">
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
              className="flex-shrink-0 w-[85%] sm:w-[65%] md:w-[30%] lg:w-[25%] snap-center bg-white rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
            >
              <div className="relative w-full h-72">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-t-2xl"
                />
              </div>

              <div className="bg-[#652f8e] p-5 text-white text-center rounded-b-2xl">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm italic mb-2">{member.role}</p>
                <p className="text-sm opacity-90">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
