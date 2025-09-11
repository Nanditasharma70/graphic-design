'use client';

import Image from "next/image";
import { useState } from "react";

const images = [
  "/dm-icons/Asset 29.svg",
  "/dm-icons/Asset 30.svg",
  "/dm-icons/Asset 31.svg",
  "/dm-icons/Asset 32.svg"
];
export default function GoodbyeSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
     const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };


  return (
     <section className="flex justify-center items-center py-10 px-2 bg-black">
      <div
        className="relative max-w-lg w-full text-center rounded-2xl border-4 border-transparent bg-black p-4"
        style={{
          borderImage: "linear-gradient(to bottom right, #ff00cc, #3333ff) 1"
        }}
      >
        {/* Heading */}
        <h2 className="text-2xl font-bold text-blue-500">Goodbye</h2>
        <h3 className="text-3xl font-semibold italic text-white mt-1">
          Dear Students
        </h3>

        {/* Image Slider */}
        <div className="relative my-6">
          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl p-2 hover:text-blue-400"
          >
            ←
          </button>

          {/* Image */}
          <div className="inline-block rounded-lg overflow-hidden shadow-lg">
            <Image
              src={images[currentIndex]}
              alt="Goodbye Students"
              width={340}
              height={300}
              className="rounded-lg object-contain bg-white"
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-3xl p-2 hover:text-blue-400"
          >
            →
          </button>
        </div>

        <p className="text-md text-white">.......................</p>

        {/* Footer Text */}
        <p className="text-lg italic text-white mt-4">
          Connection Forever!
        </p>
      </div>
    </section>

  );
}
