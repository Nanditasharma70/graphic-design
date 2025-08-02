'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const students = [
  { name: 'Anjali Sharma', img: '/s1.jpg' },
  { name: 'Ravi Mehra', img: '/s2.jpg' },
  { name: 'Sneha Gupta', img: '/s3.jpg' },
  { name: 'Amit Raj', img: '/s4.jpg' },
  { name: 'Pooja Yadav', img: '/s5.jpg' },
  { name: 'Vikram Singh', img: '/s6.jpg' },
  { name: 'Neha Verma', img: '/s7.jpg' },
  { name: 'Rohit Saini', img: '/s8.jpg' },
];

export default function PlacedStudentsGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;

    let scrollAmount = 1;
    const scrollFn = () => {
      if (!container) return;
      if (isMobile) {
        if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
          container.scrollTop = 0;
        } else {
          container.scrollTop += scrollAmount;
        }
      } else {
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += scrollAmount;
        }
      }
    };

    const interval = setInterval(scrollFn, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#652f8e] mb-10">
          Recently Placed Students
        </h2>

        {/* Auto-scroll Container */}
        <div
          ref={scrollRef}
          className={`
            no-scrollbar
            overflow-auto
            h-[500px] md:h-auto
            ${/* mobile: vertical scroll */ ''}
            md:flex md:gap-6 md:overflow-x-auto md:overflow-y-hidden
          `}
        >
          <div
            className={`
              grid grid-cols-2 gap-6
              sm:grid-cols-3
              md:flex md:gap-6
            `}
          >
            {students.map((student, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-md w-full md:w-[240px] h-[240px] flex-shrink-0"
              >
                <Image
                  src={student.img}
                  alt={student.name}
                  fill
                  className="object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-[#652f8e] bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500">
                  <p className="text-white text-lg font-semibold">{student.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
