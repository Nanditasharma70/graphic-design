'use client';

import { useState } from 'react';

const tabs = ['Graphic Designing', 'Video Editing', 'Digital Marketing'];

const batchData = {
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
  const [activeTab, setActiveTab] = useState('Graphic Designing');

  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-purple-600"> Upcoming Batches</h2>
          <p className="text-gray-500 mt-2">Choose the course and join our next batch</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition border ${
                activeTab === tab
                  ? 'bg-purple-600 text-white border-purple-600 shadow'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-purple-50 hover:text-purple-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {batchData[activeTab].map((batch, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition duration-300 relative overflow-hidden"
            >
              <span className="absolute top-4 right-4 text-xs font-semibold bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                {batch.day}
              </span>
              <h3 className="text-lg font-bold text-purple-700 mb-3">{batch.title}</h3>

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

              <button className="mt-5 w-full bg-purple-600 text-white py-2 rounded-full text-sm font-semibold hover:bg-purple-700 transition">
                Enroll Now →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
