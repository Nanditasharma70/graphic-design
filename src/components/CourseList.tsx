'use client';

import Image from 'next/image';
import { Download } from 'lucide-react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const courses = [
  {
    title: 'Graphic Designing',
    subtitle: 'Course',
    image: '/course1.jpg',
  },
  {
    title: 'Video Editing',
    subtitle: 'Course',
    image: '/course2.jpg',
  },
  {
    title: 'Digital Marketing',
    subtitle: 'Course',
    image: '/course3.jpg',
  },
  {
    title: 'UI/UX Designing',
    subtitle: 'Course',
    image: '/course1.jpg',
  },
  {
    title: 'Animation & Motion Graphics',
    subtitle: 'Course',
    image: '/course2.jpg',
  },
  {
    title: 'Advertising and Branding',
    subtitle: 'Course',
    image: '/course3.jpg',
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1536 },
    items: 4,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 1536, min: 1024 },
    items: 3,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    partialVisibilityGutter: 20,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    partialVisibilityGutter: 60, // Left & right peek
  },
};

export default function CourseSlider() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
          Select Your Course
        </h2>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          partialVisible={true}
          arrows={false}
          showDots={false}
          itemClass="px-2"
          containerClass="pb-4"
        >
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-[#652f8e] rounded-xl pb-4 shadow-lg hover:shadow-xl transition duration-300"
            >
              <Image
                src={course.image}
                alt={course.title}
                width={400}
                height={300}
                className="rounded-t-xl object-cover"
              />
              <h3 className="ms-4 text-white font-bold text-lg leading-tight mt-3">
                {course.title}
                <br />
                <span className="text-sm font-medium">{course.subtitle}</span>
              </h3>
              <button className="mt-4 ms-4 text-sm bg-white text-[#652f8e] px-4 py-2 rounded-full flex items-center gap-2 hover:bg-purple-100 transition">
                Download Brochure <Download size={14} />
              </button>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
