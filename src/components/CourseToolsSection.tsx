'use client';

import Image from 'next/image';

const tools = [
  {
    name: 'Adobe Illustrator',
    logo: '/icons/ai.png',
    bg: 'from-orange-500 to-purple-800',
  },
  {
    name: 'Adobe Photoshop',
    logo: '/icons/ps.jpeg',
    bg: 'from-blue-500 to-black',
  },
  {
    name: 'Adobe InDesign',
    logo: '/icons/id.jpeg',
    bg: 'from-pink-600 to-red-800',
  },
  {
    name: 'CorelDRAW',
    logo: '/icons/corel.jpeg',
    bg: 'from-green-400 to-green-800',
  },
];

export default function CourseToolsSection() {
  return (
    <section className="py-10 px-4 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#652f8e]">
        Become a Professional Graphic Designer in 4 Software
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {tools.map((tool, idx) => (
          <div
            key={idx}
            className={`flex items-center px-4 py-3 rounded-xl text-white shadow-md bg-gradient-to-r ${tool.bg}`}
          >
            <div className="w-10 h-10 relative mr-3">
              <Image
                src={tool.logo}
                alt={tool.name}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-base md:text-lg font-semibold">{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
