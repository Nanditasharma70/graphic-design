"use client";
import { ChevronRight, BookOpen, Layers, Award, FileText } from "lucide-react";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";

const items = [
    { title: "Client based Live Projects", icon: BookOpen },
    { title: "Every Months 10+ Students Placement", icon: Layers },
    { title: "Individual Doubt Clearing session", icon: Award },
    { title: "Advertising and Marketing Industry Expert Trainer", icon: FileText },
];

export default function DarkListSection() {
    return (
        <section className="bg-black min-h-screen flex flex-col items-center py-8 px-4">
            <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4">
                {items.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={idx}
                            className="flex items-center justify-between bg-[#1C1C1E] rounded-xl px-4 py-6 cursor-pointer hover:bg-[#2A2A2C] border-2 border-gray-300 transition"
                        >
                            <div className="flex items-center gap-6 ">

                                <span className="text-white text-xl px-8 font-medium">
                                    {item.title}
                                </span>
                                <Icon className="w-10 h-10 text-purple-400" />
                            </div>

                        </div>
                        
                    );
                })}

               
            </div>
             {/* Gradient Button (Full Width) */}
                <Link
                    href="/course-syllabus.pdf"
                    download
                    className="flex justify-center items-center gap-2 px-6 py-3 my-6 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 bg-gradient-to-r from-black via-blue-700 to-purple-700 border-2 border-gray-200"
                >
                    <FaDownload className="text-lg" />
                    Download Course Syllabus
                </Link>
        </section>
    );
}
