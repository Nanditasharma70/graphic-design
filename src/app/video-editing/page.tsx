"use client"
import Header from '@/components/Header'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import EnrollSection from '@/components/EnrollSection'
import DmModuleSection from '@/components/DmModuleSection'
import { useRef, useEffect } from 'react';
import UpComeBatch from '@/components/UpComeBatch'
import StuReview from '@/components/StuReview'
import DmOption from '@/components/DmOption'
import DmCreativitySection from '@/components/DmCreativitySection'
import DmRecentlyPlace from '@/components/DmRecentlyPlace'
import Footer from '@/components/Footer'
import CallNow from '@/components/CallNow'
import DmFeedback from '@/components/DmFeedback'
import DmAnshikaDigital from '@/components/DmAnshikaDigital'
import DmGoodBye from '@/components/DmGoodBye'
import DmPlacedCompany from '@/components/DmPlacedCompany'
import { FaDownload } from 'react-icons/fa'
import VeDetail from '@/components/VeDetail'
import EVmoduleSection from '@/components/EVmoduleSection'
import VeAboutCourse from '@/components/VeAboutCourse'
import CourseHighlightSection from '@/components/CourseHighlightSection'


function Page() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  // Pause all videos on unmount
  useEffect(() => {
    return () => {
      videoRefs.current.forEach((video) => video?.pause());
    };
  }, []);
  return (
    <div>
      <Header />
      <section className="relative bg-black py-14 px-4 mt-16 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto flex flex-col items-center text-center"
        >
          {/* Heading */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold text-gray-200 leading-snug">
            Best <span className="text-gray-300 text-3xl sm:text-4xl md:text-5xl font-bold">Institute</span> for<br />
            <span className="text-purple-400 font-bold text-lg sm:text-xl md:text-3xl">Video Editing </span>
            Courses in Delhi
          </h1>

          <p className="text-gray-200 mt-4 text-lg max-w-2xl">
            Television, Gaming, Media, Advertising<br />
            & Marketing Agency and Corporate Sector
          </p>


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
          className="mt-12 mx-auto max-w-3xl items-center"
        >
          <video
            src="/v2-home-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="rounded-2xl mx-auto shadow-lg w-full"
          />

          {/* CTA Button */}
          <div className="flex justify-center mt-8">
            <Link href="/enroll-form">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className=" inline-flex items-center px-6 py-3 bg-white text-gray-800 rounded-full transition"
              >
                Get Free Career Counselling <ArrowRight className="ml-2 w-4 h-4" />
              </motion.button>
            </Link>
          </div>
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
      <section className="bg-black">
        <h3 className="text-center block md:hidden text-lg font-semibold text-gray-100 px-4 pb-2">
          Advance{" "}
          <span className="text-purple-400 font-bold text-2xl">
            Video Editing Training
          </span>{" "}
          in Delhi
        </h3>

        <EnrollSection />
        {/* Reviews Heading */}
        <div className="flex justify-center items-center mt-10 -mb-10 relative">
          <h2 className="text-xl text-gray-200 md:text-2xl font-semibold text-center">
            Reviews
          </h2>
        </div>

        {/* Reviews Row - Single Line */}
        <div className="flex justify-center items-center gap-32 sm:gap-2  px-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {/* Google Review */}
          <div className="flex items-center gap-2">
            <Image
              src="/google.png"
              alt="Google review"
              width={100}
              height={80}
              className="w-20 sm:w-[100px] h-auto"
            />
            <Image
              src="/rating.png"
              alt="Google rating"
              width={130}
              height={80}
              className="w-28 sm:w-[130px] h-auto"
            />
            <p className="text-lg sm:text-xl font-semibold text-gray-200">
              5.0 <span className="text-xl sm:text-2xl font-bold px-2"> | </span>
            </p>
          </div>

          {/* JustDial Review */}
          <div className="flex items-center">
            <Image
              src="/justdial.png"
              alt="JustDial review"
              width={100}
              height={80}
              className="w-20 sm:w-[100px] h-auto"
            />
            <Image
              src="/rating.png"
              alt="JustDial rating"
              width={130}
              height={80}
              className="w-28 sm:w-[130px] h-auto"
            />
            <p className="text-lg sm:text-xl font-semibold text-gray-200">4.9</p>
          </div>
        </div>
        <div className="bg-gray-900 text-white py-10 px-4 md:px-20">

          <h2 className="text-center text-2xl font-bold mb-8">Software Covered</h2>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/ve-icons/software-cover.svg"
                alt="AI Video Generator"
                className="rounded-lg shadow-lg w-full max-w-sm"
              />
            </div>

            {/* Cards Section */}
            <div className="w-full md:w-1/2 flex flex-col gap-6">

              {/* Photoshop Card */}
              <div className="bg-white text-black rounded-lg shadow-md p-4 flex items-center gap-4 hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 p-2 rounded">
                  <img src="/ve-icons/ps.svg" alt="Photoshop" className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Photoshop</h3>
                  <button className="text-sm bg-blue-400 px-[6px] rounded-md text-white hover:underline">Read More</button>
                </div>
              </div>
              <div className="bg-white text-black rounded-lg shadow-md p-4 flex items-center gap-4 hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 p-2 rounded">
                  <img src="/ve-icons/pr.svg" alt="Photoshop" className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Premiere Pro </h3>
                  <button className="text-sm bg-violet-400 px-[6px] rounded-md text-white hover:underline">Read More</button>
                </div>
              </div>  <div className="bg-white text-black rounded-lg shadow-md p-4 flex items-center gap-4 hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 p-2 rounded">
                  <img src="/ve-icons/ae.svg" alt="Photoshop" className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">After Effects</h3>
                  <button className="text-sm bg-purple-400 px-[6px] rounded-md text-white hover:underline">Read More</button>
                </div>
              </div>
              {/* Premiere Pro Card */}
              <div className="bg-white text-black rounded-lg shadow-md p-4 flex items-center gap-4 hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 p-2 rounded">
                  <img src="/ve-icons/au.svg" alt="Premiere Pro" className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Audition</h3>
                  <button className="text-sm bg-blue-400 px-[6px] rounded-md text-white hover:underline">Read More</button>
                </div>
              </div>

            </div>
          </div>

        </div>
        {/* Gradient Button (Full Width) */}
        <div className="flex justify-center items-center my-8">
          <Link
            href="/course-syllabus.pdf"
            download
            className="flex justify-center items-center gap-2 w-full max-w-xs px-6 py-3 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 bg-gradient-to-r from-black via-blue-700 to-purple-700 border-2 border-gray-200 hover:scale-105"
          >
            <FaDownload className="text-lg" />
            Download Course Syllabus
          </Link>
        </div>
        <DmFeedback />
        {/* <CourseHighlightSection/> */}
        <VeAboutCourse />
        <VeDetail />
        <UpComeBatch />
        <StuReview />
        <DmRecentlyPlace />
        <EVmoduleSection />
        <DmPlacedCompany />
        <DmGoodBye />
        <CallNow />
        <Footer />
      </section>

    </div>
  )
}

export default Page