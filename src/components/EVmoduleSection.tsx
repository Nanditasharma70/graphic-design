import { useState } from "react";
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

  const itemsPerPage = 4;
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = Math.ceil(videoTypes.length / itemsPerPage) - 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  // Get current slice of items
  const currentItems = videoTypes.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <div className="bg-black text-white py-12 px-4 md:px-20 ">

      {/* Heading */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">
          Edit Every Type of <span className="text-blue-500">Video</span> <br />
          Once You <span className="text-blue-500">Complete</span> Your Course
        </h2>

        {/* Arrows */}
        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            className="p-2 bg-gray-800 rounded hover:bg-gray-700"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-gray-800 rounded hover:bg-gray-700"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="space-y-3"> {currentItems.map((type, index) => (<button key={index} className="w-full text-left px-4 py-3 bg-gray-800 rounded hover:bg-gray-700 transition" > {type} </button>))} </div>
    </div>
  );
}
