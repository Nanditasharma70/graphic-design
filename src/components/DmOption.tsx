"use client";
import { BookOpen, Layers, Award, FileText } from "lucide-react";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";

const items = [
  { title: "Client based Live Projects", icon: "/dm-icons/about-icon/Client Base .svg" },
  { title: "Every Months 10+ Students Placement", icon: "/dm-icons/about-icon/Every Months.svg" },
  { title: "Individual Doubt Clearing session", icon: "/dm-icons/about-icon/Individual Doubt.svg" },
  { title: "Advertising and Marketing Industry Expert Trainer", icon: "/dm-icons/about-icon/Advertisig and Marketing.svg" },
];

export default function DarkListSection() {
  return (
    <section className="bg-black min-h-screen flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, idx) => {
          return (
            <div
              key={idx}
              className="flex items-center justify-between  rounded-xl px-4 py-6 cursor-pointer  border-2 border-gray-900 transition"
            >
              <div className="flex items-center gap-6">
                <span className="text-white text-xl px-8 font-medium">
                  {item.title}
                </span>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={100}
                  height={100}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Gradient Button (Full Width) */}
      <Link
        href="/course-syllabus.pdf"
        download
        className="flex justify-center items-center gap-2 px-6 py-3 mb-18 mt-6 md:mb-8 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 bg-gradient-to-r from-black via-blue-700 to-purple-700 border-2 border-gray-200"
      >
        <FaDownload className="text-lg" />
        Download Course Syllabus
      </Link>
    </section>
  );
}
