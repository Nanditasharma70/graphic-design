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


function Page() {
    // const scrollRef = useRef<HTMLDivElement>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);


    // const scroll = (dir: 'left' | 'right') => {
    //     if (!scrollRef.current) return;
    //     const cardWidth =
    //         window.innerWidth < 768 ? window.innerWidth * 0.8 + 16 : 384 + 24;
    //     scrollRef.current.scrollBy({
    //         left: dir === 'left' ? -cardWidth : cardWidth,
    //         behavior: 'smooth',
    //     });
    // };



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
                        <span className="text-purple-400 font-bold text-lg sm:text-xl md:text-3xl">Digital Marketing </span>
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

                    <div className="overflow-hidden py-8 bg-black">
                        <div className="flex animate-slide">
                            {/* Repeat logos twice for smooth loop */}
                            {[
                                "/Youtube logo.svg",
                                "/Googel Logo.svg",
                                "/amazon.png",
                                "/spotify.png",
                                "/bing logo.svg",
                                "/Instagram Logo.svg",
                                "/Yahoo.svg",
                                "/Facebok Logo.svg"
                            ].map((logo, index) => (
                                <Image
                                    key={index}
                                    src={logo}
                                    width={100}
                                    height={100}
                                    alt={`Company ${index + 1}`}
                                    className="h-14 w-auto mx-4"
                                />
                            ))}
                            {[
                                 "/Youtube logo.svg",
                                "/Googel Logo.svg",
                                "/amazon.png",
                                "/spotify.png",
                                "/bing logo.svg",
                                "/Instagram Logo.svg",
                                "/Yahoo.svg",
                                "/Facebok Logo.svg"
                            ].map((logo, index) => (
                                <Image
                                    key={`repeat-${index}`}
                                    src={logo}
                                    width={100}
                                    height={100}
                                    alt={`Company ${index + 1}`}
                                    className="h-14 w-auto mx-2"
                                />
                            ))}
                        </div>
                    </div>

                    <style jsx>{`
  @keyframes slide {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-slide {
    animation: slide 20s linear infinite;
  }
`}</style>

                    {/* CTA Button */}
                    <div className="flex justify-center">
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
                        Digital Marketing Training
                    </span>{" "}
                    in Delhi
                </h3>

                <EnrollSection />
                <div className="relative flex flex-col md:flex-row items-center justify-between py-14 px-6 md:px-18">
                    {/* Left: Images */}
                    <div className=" md:block hidden relative w-full md:w-[60%] flex justify-center">
                        {/* Big Blob Image */}
                        <div className=" w-[300px] h-[300px] md:w-[400px] md:h-[400px] overflow-hidden">
                            <Image
                                src="/dm-image.webp" // replace with your image
                                alt="Big Classroom"
                                width={500}
                                height={500}
                                className="w-full h-full object-cover"
                                style={{
                                    clipPath:
                                        "ellipse(50% 50% at 50% 50%)", // you can replace with custom blob path
                                }}
                            />
                        </div>

                        {/* Small Blob Image */}
                        <div className=" absolute -left-8 -top-2 w-[200px] h-[200px] overflow-hidden shadow-lg">
                            <Image
                                src="/dm2.webp" // replace with your image
                                alt="Small Classroom"
                                width={150}
                                height={150}
                                className="w-full h-full object-cover"
                                style={{
                                    clipPath: "circle(50% at 50% 50%)", // circular mask
                                }}
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="mt-8 md:mt-0  w-full md:w-[75%] ">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-400">
                            Anshika Digital Media <span className='text-gray-200 font-semibod text-xl'>is not just an </span> Ordinary Training Institute

                            <span className='text-gray-200 font-semibod text-xl'> we are also a leading, full-scale </span>

                            Advertising Agency in the digital Market.
                        </h2>
                        <p className="text-gray-200 mt-4 leading-relaxed">
                            This unique position allows us to training our students with a hands-on, Industry-Level approach, working directly on real client projects. By giving our learners exposure to actual market demands and professional workflows, we ensure they gain practical skills that employers value. As a result, we <span className='text-blue-400 text-xl font-semibold'> have a 100% job placement success rate, </span> making our training not only educational but truly career-focused.   </p>
                        <button className="mt-6 bg-purple-500 hover:bg-purple-600 text-white font-semibold px-8 py-3 rounded-2xl flex items-center gap-2">
                            Enroll Now →
                        </button>
                    </div>

                </div>
                <DmModuleSection />
                <DmFeedback />
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

                {/* Highlight Section */}
                <div className="flex justify-center items-center py-8 px-4 bg-black">
                    <p className="text-center text-gray-200 text-lg sm:text-xl md:text-2xl font-semibold border-4 border-gray-200 rounded-2xl px-6 sm:px-8 md:px-16 py-6 leading-relaxed shadow-lg">
                        100% Job Placement <br />
                        Learn{" "}
                        <span className="font-bold text-2xl sm:text-3xl md:text-4xl text-yellow-500">
                            50+ Modules
                        </span>{" "}
                        with AI <br />
                        and Your Convenient Batch Slot
                    </p>
                </div>

                <UpComeBatch />
                <StuReview />
                <DmOption />
                <DmCreativitySection />
                <DmRecentlyPlace />
                <DmAnshikaDigital />
                <DmPlacedCompany />
                <DmGoodBye />
                <CallNow />
                <Footer />
            </section>

        </div>
    )
}

export default Page