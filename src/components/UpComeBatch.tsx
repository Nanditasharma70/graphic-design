'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';


type CourseName = 'Graphic Designing' | 'Video Editing' | 'Digital Marketing';

type Batch = {
  day: string;
  title: string;
  start: string;
  time: string;
  mode: string;
};

const tabs: CourseName[] = ['Graphic Designing', 'Video Editing', 'Digital Marketing'];

const batchData: Record<CourseName, Batch[]> = {
  'Graphic Designing': [
    {
      day: 'Weekday',
      title: 'Graphic Design - Morning',
      start: '17 July, August',
      time: 'Morning 11:00',
      mode: 'Offline and Online (hybrid)',
    },
    {
      day: 'Weekend',
      title: 'Graphic Design - Weekend',
      start: '20 July, August',
      time: 'Evening 4:00 PM',
      mode: 'Online Only',
    },
    {
      day: 'Weekday',
      title: 'Graphic Design - Morning',
      start: '17 July, August',
      time: 'Morning 11:00',
      mode: 'Offline and Online (hybrid)',
    },
  ],
  'Video Editing': [
    {
      day: 'Weekday',
      title: 'Video Editing - Morning',
      start: '18 July, August',
      time: 'Morning 10:00',
      mode: 'Offline and Online (hybrid)',
    },
    {
      day: 'Weekend',
      title: 'Video Editing - Weekend',
      start: '22 July, August',
      time: 'Evening 5:00 PM',
      mode: 'Offline Only',
    },
    {
      day: 'Weekend',
      title: 'Video Editing - Weekend',
      start: '22 July, August',
      time: 'Evening 5:00 PM',
      mode: 'Offline Only',
    },
  ],
  'Digital Marketing': [
    {
      day: 'Weekday',
      title: 'Digital Marketing - Morning',
      start: '19 July, August',
      time: 'Morning 9:00 AM',
      mode: 'Online Only',
    },
    {
      day: 'Weekend',
      title: 'Digital Marketing - Weekend',
      start: '21 July, August',
      time: 'Evening 6:00 PM',
      mode: 'Offline and Online (hybrid)',
    },
    {
      day: 'Weekend',
      title: 'Digital Marketing - Weekend',
      start: '21 July, August',
      time: 'Evening 6:00 PM',
      mode: 'Offline and Online (hybrid)',
    },
  ],
};

export default function UpcomingBatches() {
  const [activeTab, setActiveTab] = useState<CourseName>('Graphic Designing');

  return (
    <section className="py-10 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-left mb-4 ps-4">
          <h2 className="text-3xl font-extrabold text-blue-500"> Upcoming Batches</h2>
          <p className="text-gray-300 mt-2">Choose the course and join our next batch</p>
        </div>

       <div className="relative mb-10">
  {/* Scrollable Tab Buttons */}
  <div
    className="flex gap-3 overflow-x-auto no-scrollbar px-2 py-2 scroll-smooth"
    id="tab-scroll-container"
  >
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`flex-shrink-0 px-5 py-2 rounded-xl text-sm font-medium transition  whitespace-nowrap ${
          activeTab === tab
            ? 'bg-gray-700 text-white shadow'
            : 'bg-black text-gray-200'
        }`}
      >
        {tab}
      </button>
    ))}
  </div>

  {/* Chevron Scroll Button */}
  <button
    onClick={() => {
      const container = document.getElementById('tab-scroll-container');
      if (container) container.scrollBy({ left: 150, behavior: 'smooth' });
    }}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-1 z-10 hidden sm:block"
  >
    <ChevronRight className="w-5 h-5 text-[#652f8e]" />
  </button>
</div>


        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {batchData[activeTab].map((batch, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition duration-300 relative overflow-hidden"
            >
              <span className="absolute top-2 right-4 text-xs font-semibold bg-[#652f8e] text-white px-3 py-1 rounded-full">
                {batch.day}
              </span>
              <h3 className="text-lg font-bold text-[#652f8e] mb-3">{batch.title}</h3>

              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  <span className="font-medium">📆 Batch Start:</span> {batch.start}
                </p>
                <p>
                  <span className="font-medium">⏰ Time:</span> {batch.time}
                </p>
                <p>
                  <span className="font-medium">🎓 Class Mode:</span> {batch.mode}
                </p>
              </div>

              <button className="mt-5 w-full bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition">
                Enroll Now →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  );
}
