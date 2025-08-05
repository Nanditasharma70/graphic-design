
'use client';
import Image from 'next/image';
import { ArrowDownToLine, Info } from 'lucide-react';

const courses = [
  {
    title: 'Graphic Designing',
    img: '/courses.jpg',
    brochure: '/brochure.pdf',
  },
  {
    title: 'Video Editing',
    img: '/courses.jpg',
    brochure: '/video-brochure.pdf',
  },
  {
    title: 'Digital Marketing',
    img: '/courses.jpg',
    brochure: '/marketing-brochure.pdf',
  },
  {
    title: 'UI/UX Designing',
    img: '/courses.jpg',
    brochure: '/uiux-brochure.pdf',
  },
  {
    title: 'Video Editing',
    img: '/courses.jpg',
    brochure: '/video-brochure.pdf',
  },
  {
    title: 'Digital Marketing',
    img: '/courses.jpg',
    brochure: '/marketing-brochure.pdf',
  },
  {
    title: 'UI/UX Designing',
    img: '/courses.jpg',
    brochure: '/uiux-brochure.pdf',
  },
];

export default function CourseCardSlider() {
  return (
   <section className="pb-6 px-4 bg-white">
  <h2 className="text-center text-2xl font-semibold mb-6">Select Your Course</h2>

  <div className="flex overflow-x-auto gap-4 px-2 scroll-smooth snap-x snap-mandatory no-scrollbar">
    {courses.map((course, index) => (
      <div
        key={index}
        className="snap-start flex-shrink-0 w-[266px] h-[400px] bg-purple-500 rounded-xl shadow-md relative"
      >
       <div className="relative w-full h-full rounded-xl overflow-hidden">
  <Image
    src={course.img}
    alt={course.title}
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 270px"
  />

  {/* Overlay Color Effect */}
  <div className="absolute inset-0 bg-[#652f8e]/50 mix-blend-multiply transition duration-300 hover:bg-[#652f8e]/40" />
</div>

        {/* Overlay Text */}
        <div className="absolute top-5 left-4 text-white leading-tight drop-shadow-md">
          <div className=" md:text-2xl text-3xl">{course.title}</div>
          <div className="text-3xl font-bold">Course</div>
        </div>

        {/* Buttons */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
          <a
            href={course.brochure}
            download
            className="text-[#652f8e] border border-[#652f8e] bg-white px-3 py-1 rounded-lg flex items-center gap-1 transition"
          >
            Download Brochure <ArrowDownToLine size={14} />
          </a>

          <button className="text-[#652f8e] bg-white rounded-full">
            <Info size={20} />
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

  );
}
