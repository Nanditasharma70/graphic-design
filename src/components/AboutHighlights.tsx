'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function AboutHighlights() {
  const highlights = [
    {
      title: 'Empowering Creativity Since 2018',
      content:
        'Industry-focused Graphic Design education that transforms passion into profession.',
    },
    {
      title: 'Where Imagination Meets Innovation',
      content:
        'Our expert-led curriculum helps you turn ideas into high-impact visuals.',
    },
    {
      title: 'Career-Oriented Practical Learning',
      content:
        'Master tools and techniques with hands-on experience and real-world projects.',
    },
    {
      title: 'Leaders in Creative Education',
      content:
        'Join 1000+ successful designers shaped by Anshika Digital Media.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#652f8e] mb-10">
          Why Choose Our Institute?
        </h2>

        <div className="space-y-4">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-purple-200 rounded-xl shadow-sm"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-600 font-semibold text-lg hover:bg-purple-50 rounded-t-xl"
              >
                <span>{item.title}</span>
                {activeIndex === index ? (
                  <Minus className="w-5 h-5 text-[#652f8e]" />
                ) : (
                  <Plus className="w-5 h-5 text-[#652f8e]" />
                )}
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-4 text-gray-700 text-base">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
