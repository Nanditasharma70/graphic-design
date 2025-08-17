'use client';

import Link from 'next/link';
import { FaDownload } from 'react-icons/fa';

export default function CreativitySection() {
    return (
        <section className=" -mt-22 mb-10 px-4">
           <div className="max-w-4xl mx-auto text-center space-y-6 border-2 border-gray-300 rounded-2xl px-4 py-4">
  {/* Heading */}
  <h2 className="text-2xl md:text-3xl font-bold text-gray-200">
    Advance <br />
    <span className="text-blue-600 font-bold text-3xl">
      Digital Marketing Course
    </span>
    <br /> Module 2025 with AI
  </h2>

  {/* Paragraph 1 */}
  <p className="text-gray-300 text-base md:text-lg">
    Digital marketing is a dynamic and essential discipline in today&apos;s digital
    age, encompassing a wide range of strategies and techniques to promote
    businesses, build brand presence, and drive customer engagement and
    conversions. In our digital marketing institute, students will gain a
    comprehensive understanding of key digital marketing concepts and tools.
  </p>

  {/* Paragraph 2 */}
  <p className="text-gray-300 text-base md:text-lg">
    ☆ From website design and search engine optimization (SEO) to social media
    marketing, email marketing, content creation, and analytics, our modules
    cover all essential areas. Students will learn to develop effective digital
    marketing strategies, leverage various platforms and channels, and measure
    and optimize their campaigns for maximum impact. Our institute provides
    hands-on training, industry insights, and practical skills to equip
    aspiring marketers with the knowledge and expertise needed to thrive in the
    ever-evolving digital landscape.
  </p>

  {/* Button Centered */}
  <div className="flex justify-center">
    <Link
      href="/course-syllabus.pdf"
      download
      className="max-w-xs w-full flex justify-center items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 bg-gradient-to-r from-black via-blue-700 to-purple-700 border-2 border-gray-200"
    >
      Book Free Demo Class
      <FaDownload className="text-lg" />
    </Link>
  </div>
</div>

        </section>
    );
}
