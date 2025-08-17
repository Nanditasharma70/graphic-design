"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = ['/banners/banner1.jpg', '/banners/banner2.jpg', '/banners/banner3.jpg'];

export default function BannerCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % images.length), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-[400px] overflow-hidden relative">
      <Image
        src={images[index]}
        alt="Banner"
        className="w-full h-full object-cover transition-all duration-700 ease-in-out"
      />
    </div>
  );
}
