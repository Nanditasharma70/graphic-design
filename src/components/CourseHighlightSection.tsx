import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const highlights = [
  {
    title: "100% Job Placement",
    subtitle: "Assistance after Course Completion",
    bgGradient: "bg-gradient-to-r from-blue-600 via-blue-700 to-purple-800",
  },
  {
    title: "Duration: 3-4 Months",
    subtitle: "Learn at your own pace",
    bgGradient: "bg-gradient-to-r from-purple-600 via-blue-700 to-indigo-800",
  },
  {
    title: "Expert Mentors",
    subtitle: "Learn from industry experts",
    bgGradient: "bg-gradient-to-r from-green-600 via-teal-700 to-cyan-800",
  },
  // Add more cards as needed
];

export default function CourseHighlightSection() {
  return (
    <section className="bg-black text-white py-8 px-4 md:px-10">
      {/* Heading */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Course Highlight</h2>
        <div className="flex space-x-2">
          <button className="p-2 bg-gray-800 rounded hover:bg-gray-700 transition">
            <FaChevronLeft />
          </button>
          <button className="p-2 bg-gray-800 rounded hover:bg-gray-700 transition">
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="flex overflow-x-auto space-x-4 no-scrollbar">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className={`min-w-[250px] flex-shrink-0 rounded-lg p-6 ${highlight.bgGradient}`}
          >
            <h3 className="text-white text-lg font-bold mb-2">{highlight.title}</h3>
            <p className="text-white text-sm">{highlight.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
