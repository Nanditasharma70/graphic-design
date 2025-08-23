'use client';
import Image from "next/image";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";

export default function WhyChooseSection() {
    return (
        <section className="py-10 px-4 bg-black">

            <div className="max-w-4xl mx-auto items-center text-center">
                <Image
                    src="/dm-icons/Asset 30.svg"
                    alt="Placed Students"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-md mx-auto"
                />
            

            {/* Heading */}
            <span className="text-lg sm:text-2xl md:text-3xl font-extrabold text-blue-500 block mb-6">
                Anshika Digital Media
            </span>

            {/* Paragraphs */}
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed text-justify sm:text-center px-4">
                Professional Training Institute of Graphic Designing and Video Editing, Courses provided at an advanced level.
                We are not only conducting courses but along with the courses we also provide live projects for our students to practice.
                Training Institute of Graphic Designing and Video Editing, Courses provided at an advanced level.
                We are not only conducting courses but along with the courses we also provide live projects for our students to practice.
                We also provide 100% job placement to our students.
                After completion of the course, we also provide paid internships to our students.
                The entire preparation for the internship is done by our institute itself, in which we provide the resume, portfolio, and interview schedule to the students.
                During the internship, the starting salary package is 1,80,000/- to 3,00,000/- per annum.
            </p>
            {/* Gradient Button (Full Width) */}
      <Link
        href="/course-syllabus.pdf"
        download
        className="block md:hidden flex justify-center items-center gap-2 px-6 py-3 mx-4 mb-18 mt-6 md:mb-8 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 bg-gradient-to-r from-black via-blue-700 to-purple-700 border-2 border-gray-200"
      >
        <FaDownload className="text-lg" />
        Download Course Syllabus
      </Link>
        </div>
        </section >
    );
}
