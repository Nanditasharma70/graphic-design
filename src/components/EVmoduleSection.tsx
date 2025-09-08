import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function EditVideoSection() {
  const videoTypes = [
    "YouTube Video Editing",
    "Instagram Reels & Short Video Editing",
    "Movie Editing",
    "Song Editing",
    "Motion Graphics Video",
    "Wedding Video Editing",
    "Audio Editing",
    "Commercial Video Editing",
    "Advanced Effects & Techniques",
    "Background Removal & Replacement",
    "Color Correction & Color Grading",
  ];

  return (
    <div className="bg-black text-white py-8 px-4 md:px-20 min-h-screen">
      
      {/* Heading */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">
          Edit Every Type of <span className="text-blue-500">Video</span> <br />
          Once You <span className="text-blue-500">Complete</span> Your Course
        </h2>

        {/* Arrows */}
        <div className="flex space-x-2">
          <button className="p-2 bg-gray-800 rounded hover:bg-gray-700">
            <FaChevronLeft />
          </button>
          <button className="p-2 bg-gray-800 rounded hover:bg-gray-700">
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* List of Video Types */}
      <div className="space-y-3">
        {videoTypes.map((type, index) => (
          <button
            key={index}
            className="w-full text-left px-4 py-3 bg-gray-800 rounded hover:bg-gray-700 transition"
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}
