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
    <section className="py-10 bg-white relative border-4 border-purple-900 rounded-lg  md:border-none mx-1">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font- semibold text-center text-gray-800 mb-10">
          Our Recently <span className='text-3xl font-bold'> Placed Students</span>
        </h2>

        <div
          ref={scrollRef}
          className="
            no-scrollbar
            overflow-auto
            h-[350px] md:h-auto
            md:flex md:gap-6 md:overflow-x-auto md:overflow-y-hidden
          "
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:flex md:gap-6">
            {students.map((student, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(index)}
                className={`bg-white rounded-xl shadow-md overflow-hidden w-full md:w-[240px] flex-shrink-0 cursor-pointer
      ${tappedIndex === index ? 'ring-2 ring-purple-600' : ''}`}
              >      {/* Student Image */}
                <div className="relative w-full h-[220px]">
                  <Image
                    src={student.img}
                    alt={student.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Student Details */}
                <div className="p-4 text-center">
                  <p className="text-[#652f8e] font-semibold text-lg">{student.name}</p>
                  <p className="text-gray-600 text-sm italic">{student.title}</p>
                  <p className="text-gray-700 text-sm">{student.company}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
