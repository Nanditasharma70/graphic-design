'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-white py-14 px-4 mt-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col items-center text-center"
      >
        {/* Heading */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold text-black leading-snug">
          Best <span className="text-gray-800 text-3xl sm:text-4xl md:text-5xl font-bold">Institute</span> for<br />
          <span className="text-[#652f8e] font-bold text-lg sm:text-xl md:text-3xl">Graphic Designing,</span>{' '}
          <span className="text-pink-500 font-bold text-lg sm:text-xl md:text-3xl">Digital Marketing</span> &<br />
          <span className="text-blue-500 font-bold text-lg sm:text-xl md:text-3xl">Video Editing</span> Courses in Delhi
        </h1>

        <p className="text-gray-600 mt-4 text-lg max-w-2xl">
          Television, Gaming, Media, Advertising<br />
          & Marketing Agency and Corporate Sector
        </p>

        {/* CTA Button */}
        <Link href="/enroll-form">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 inline-flex items-center px-6 py-3 bg-black text-white  rounded-full transition"
          >
            Get Free Career Counselling <ArrowRight className="ml-2 w-4 h-4" />
          </motion.button>
        </Link>
      </motion.div>

      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute left-20 top-1/3 transform -translate-y-1/2 hidden md:block"
      >
        <Image
          src="/v2-top-left.webp"
          alt="Left Decoration"
          width={240}
          height={160}
          className="rounded-2xl shadow-lg"
        />
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute right-0  top-1/3 transform -translate-y-1/2 hidden md:block"
      >
        <Image
          src="/v2-right.avif"
          alt="Right Decoration"
          width={240}
          height={160}
          className="rounded-2xl shadow-lg"
        />
      </motion.div>

      {/* Center Video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className=" mt-12 mx-auto max-w-3xl"
      >
        <video
          src="/v2-home-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className=" rounded-2xl mx-auto shadow-lg w-full"
        />
      </motion.div>

      {/* Bottom Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-1/2 left-6  hidden md:block"
      >
        <Image
          src="/v2-bottom-left.avif"
          alt="Bottom Left Decoration"
          width={200}
          height={120}
          className="rounded-2xl shadow-lg"
        />
      </motion.div>


    </section>
  );
}
