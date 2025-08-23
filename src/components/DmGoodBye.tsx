'use client';

import Image from "next/image";

export default function GoodbyeSection() {
  return (
    <section className="flex justify-center items-center py-10 px-4 bg-black">
      <div className="relative max-w-md w-full text-center rounded-2xl border-4  border-transparent bg-black p-6"
        style={{
          borderImage: "linear-gradient(to bottom right, #ff00cc, #3333ff) 1"
        }}
      >
        {/* Heading */}
        <h2 className="text-2xl font-bold text-blue-500">Goodbye</h2>
        <h3 className="text-3xl font-semibold italic text-white mt-1">
          Dear Students
        </h3>

        {/* Image Box */}
        <div className="relative my-2">
          {/* Left Arrow */}
          <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-3xl cursor-pointer">
            ←
          </span>

          {/* Student Image */}
          <div className="inline-block rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/dm-icons/Asset 29.svg" 
              alt="Goodbye Students"
              width={340}
              height={300}
              className="rounded-lg"
            />
          </div>

          {/* Right Arrow */}
          <span className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-3xl cursor-pointer">
            →
          </span>
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
