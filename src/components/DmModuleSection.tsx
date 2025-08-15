"use client";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";


export default function DigitalMarketingModules() {
    const modules = [
        "SEO (Search Engine Optimization)",
        "Google Ads (PPC)",
        "Social Media Marketing",
        "Email Marketing",
        "Content Marketing",
        "Affiliate Marketing",
        "Video Marketing",
        "YouTube Ads",
        "Instagram Growth",
        "Facebook Ads",
        "LinkedIn Marketing",
        "Twitter Marketing",
        "Pinterest Marketing",
        "Google Analytics",
        "E-commerce Marketing",
        "Mobile Marketing",
        "Local SEO",
        "Online Reputation Management",
        "Lead Generation",
        "Marketing Automation",
        "Copywriting",
        "Blogging for Business",
        "Voice Search Optimization",
        "Influencer Marketing",
        "Remarketing Strategies",
        "Google Tag Manager",
        "Conversion Rate Optimization",
        "Website Monetization",
        "Email Automation",
        "Landing Page Optimization",
        "Customer Retargeting",
        "Brand Building",
        "Digital Strategy Planning",
        "Search Engine Marketing",
        "Product Marketing",
        "Google My Business",
        "CRM for Marketing",
        "WhatsApp Marketing",
        "AI in Marketing",
        "Chatbot Marketing",
        "Web Analytics",
        "Display Advertising",
        "Marketing Funnels",
        "A/B Testing",
        "Customer Journey Mapping",
        "Online PR",
        "App Store Optimization",
        "Webinar Marketing",
        "Event Marketing",
        "Growth Hacking",
        "Advanced Digital Campaigns"
    ];

    return (
        <section className="bg-black py-12 px-6 md:px-12">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">
                    50+ Modules of <span className="text-purple-600">Digital Marketing</span>
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto mb-10">
                    Master every aspect of digital marketing with our industry-leading curriculum.
                    From SEO to AI-driven marketing, we’ve got it all covered.
                </p>

                {/* Modules Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                    {modules.map((module, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-3 bg-white p-4 rounded-lg shadow hover:shadow-md transition"
                        >
                            <FaCheckCircle className="text-purple-600 text-lg mt-1" />
                            <span className="text-gray-800 font-medium">{module}</span>
                        </div>
                    ))}
                </div>
                <Link
                    href="/course-syllabus.pdf"
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 my-6 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 bg-gradient-to-r from-black via-blue-700 to-purple-700 border-2 border-gray-200"
                >
                    <FaDownload className="text-lg" />
                    Download Course Syllabus
                </Link>

            </div>
        </section>
    );
}
