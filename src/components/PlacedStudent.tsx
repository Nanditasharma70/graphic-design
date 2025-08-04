'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const students = [
  { name: 'Abhishek', title: 'Graphic Designer', company: 'Ashvmegh Moter Pvt. Ltd.', img: '/abhishek.webp' },
  { name: 'Akil', title: 'Graphic Designer', company: 'Ashvmegh Moter Pvt. Ltd.', img: '/Akil.webp' },
  { name: 'Aman', title: 'Graphic Designer', company: 'Ashvmegh Moter Pvt. Ltd.', img: '/Aman.webp' },
  { name: 'Amit', title: 'Graphic Designer', company: 'Ashvmegh Moter Pvt. Ltd.', img: '/Amit.webp' },
  { name: 'Arjun', title: 'Graphic Designer', company: 'Ashvmegh Moter Pvt. Ltd.', img: '/arjun.webp' },
  { name: 'Bhavna', title: 'Graphic Designer', company: 'Ashvmegh Moter Pvt. Ltd.', img: '/Bhavna.webp' },
  { name: 'Deepika', title: 'Graphic Designer', company: 'Ashvmegh Moter Pvt. Ltd.', img: '/deepika.webp' },
  { name: 'Diksha', title: 'Graphic Designer', company: 'Ashvmegh Moter Pvt. Ltd.', img: '/diksha.webp' },
  { name: 'Gautam', title: 'Graphic Designer', company: 'Ashvmegh Moter Pvt. Ltd.', img: '/gautam.webp' },
  { name: 'Karan', title: 'Graphic Designer', company: 'Ashvmegh Moter Pvt. Ltd.', img: '/karan.webp' },
  { name: 'Manish', title: 'Graphic Designer', company: 'Ashvmegh Moter Pvt. Ltd.', img: '/Manish.webp' },
  { name: 'Mansi', title: 'Graphic Designer', company: 'Ashvmegh Moter Pvt. Ltd.', img: '/mansi.webp' },
  { name: 'Rajnish', title: 'Graphic Designer', company: 'Ashvmegh Moter Pvt. Ltd.', img: '/Rajnish.webp' },
  { name: 'Sunil', title: 'Graphic Designer', company: 'Ashvmegh Moter Pvt. Ltd.', img: '/Sunil.webp' },
  { name: 'Sushmita', title: 'Graphic Designer', company: 'Ashvmegh Moter Pvt. Ltd.', img: '/sushmita.webp' },
];

export default function PlacedStudentsGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [tappedIndex, setTappedIndex] = useState<number | null>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;
    const scrollAmount = 1;

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

  const handleCardClick = (index: number) => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setTappedIndex((prev) => (prev === index ? null : index));
    }
  };

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#652f8e] mb-10">
          Recently Placed Students
        </h2>

        <div
          ref={scrollRef}
          className="
            no-scrollbar
            overflow-auto
            h-[500px] md:h-auto
            md:flex md:gap-6 md:overflow-x-auto md:overflow-y-hidden
          "
        >
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:flex md:gap-6">
            {students.map((student, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(index)}
                className="relative group overflow-hidden rounded-xl shadow-md w-full md:w-[240px] h-[240px] flex-shrink-0 cursor-pointer"
              >
                <Image
                  src={student.img}
                  alt={student.name}
                  fill
                  className="object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div
                  className={`
                    absolute inset-0 bg-[#652f8e] bg-opacity-40 
                    transition duration-500 flex flex-col items-center justify-center text-center px-2
                    ${
                      tappedIndex === index
                        ? 'opacity-100'
                        : 'opacity-0 group-hover:opacity-100 md:opacity-0'
                    }
                  `}
                >
                  <p className="text-white text-lg font-semibold">{student.name}</p>
                  <p className="text-gray-200 italic">{student.title}</p>
                  <p className="text-gray-100">{student.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
