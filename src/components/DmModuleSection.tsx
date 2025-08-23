"use client";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

export default function DigitalMarketingModules() {
  const cards = [
    {
      title: "Introduction of Digital Marketing",
      img: "/dm-icons/Introduction of Digital.svg",
      content:
        "Learn the basics of Digital Marketing, its importance, and how businesses use digital platforms to reach audiences effectively.",
    },
    {
      title: "Website Design & Development",
      img: "/dm-icons/Website Design.svg",
      content:
        "Understand the essentials of creating user-friendly, responsive, and optimized websites for better engagement.",
    },
    {
      title: "Search Engine Optimization (SEO)",
      img: "/dm-icons/Search Engine.svg",
      content:
        "Master on-page and off-page SEO strategies to improve search rankings, visibility, and organic traffic.",
    },
    {
      title: "Pay-Per-Click Advertising (PPC)",
      img: "/dm-icons/Pay per click.svg",
      content:
        "Learn how to create effective PPC campaigns, manage ad budgets, and optimize conversions.",
    },
    {
      title: "Social Media Marketing",
      img: "/dm-icons/Social Media Marketing.svg",
      content:
        "Develop social media strategies, manage campaigns, and grow brand presence across platforms like Facebook, Instagram, and LinkedIn.",
    },
    {
      title: "Email Marketing",
      img: "/dm-icons/E mail Marketing.svg",
      content:
        "Craft engaging emails, build automation workflows, and drive customer retention with personalized campaigns.",
    },
    {
      title: "Content Marketing",
      img: "/dm-icons/Content Marketing.svg",
      content:
        "Learn to create valuable content that attracts, engages, and converts your audience.",
    },
    {
      title: "Video Marketing",
      img: "/dm-icons/Video Marketing.svg",
      content:
        "Harness the power of video content on platforms like YouTube and TikTok for brand awareness and engagement.",
    },
    {
      title: "Mobile Marketing",
      img: "/dm-icons/Mobile Marketing.svg",
      content:
        "Understand mobile ad strategies, app promotions, and SMS marketing to connect with audiences on-the-go.",
    },
    {
      title: "Display Marketing",
      img: "/dm-icons/Display Advertising.svg",
      content:
        "Learn to design engaging display ads and target audiences through Google Display Network and other platforms.",
    },
    {
      title: "Analytics and Data Interpretion",
      img: "/dm-icons/Analytics and Data .svg",
      content:
        "Gain insights into web traffic, user behavior, and campaign performance using Google Analytics and other tools.",
    },
    {
      title: "Conversion Rate Optimization",
      img: "/dm-icons/Asset 19.svg",
      content:
        "Optimize landing pages, CTAs, and user experience to maximize conversions.",
    },
    {
      title: "Online Reputation Management",
      img: "/dm-icons/Asset 12.svg",
      content:
        "Learn how to monitor, manage, and improve brand reputation across digital platforms.",
    },
    {
      title: "Affiliate Marketing",
      img: "/dm-icons/Social Meida Marketing.svg",
      content:
        "Understand how affiliate programs work and how to drive revenue by partnering with affiliates.",
    },
    {
      title: "E-comerce Marketing",
      img: "/dm-icons/Display Advertising.svg",
      content:
        "Learn strategies to drive sales on e-commerce platforms through SEO, paid ads, and product marketing.",
    },
    {
      title: "Influencer Marketing",
      img: "/dm-icons/Mobile Marketing.svg",
      content:
        "Collaborate with influencers to promote products and enhance brand trust among target audiences.",
    },
    {
      title: "Digital Marketing Strategy & Planning",
      img: "/dm-icons/Digital Marketing Startegy and Planning.svg",
      content:
        "Develop complete digital strategies including budgeting, planning, and execution for campaigns.",
    },
    {
      title: "Interview Prepration",
      img: "/dm-icons/Asset 13.svg",
      content:
        "Prepare for digital marketing job interviews with commonly asked questions, case studies, and mock tests.",
    },
  ];

  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="bg-black py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">
          50+ Modules of{" "}
          <span className="text-purple-600">Digital Marketing</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          Master every aspect of digital marketing with our industry-leading
          curriculum. From SEO to AI-driven marketing, we’ve got it all covered.
        </p>

        {/* Modules Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 md:gap-4 gap-2 ">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg flex flex-col items-center justify-between py-2 px-1 hover:shadow-xl transition"
            >
              {/* Title */}
              <h3 className="text-lg font-bold text-center text-black">
                {card.title}
              </h3>

              {/* Icon/Image */}
              <div className="my-2 w-24 h-24 relative">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Button */}
              <button
                onClick={() => setActiveCard(i)}
                className="bg-black text-white px-4 py-1 text-sm rounded-md hover:bg-gray-800 transition"
              >
                Read More &raquo;
              </button>
            </div>
          ))}
        </div>

        {/* Download Button */}
        <Link
          href="/course-syllabus.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 my-6 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 bg-gradient-to-r from-black via-blue-700 to-purple-700 border-2 border-gray-200"
        >
          <FaDownload className="text-lg" />
          Download Course Syllabus
        </Link>
      </div>

      {/* Popup Modal */}
      {activeCard !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-70 z-50">
          <div className="bg-white max-w-sm w-full rounded-2xl shadow-xl p-6 relative m-4">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-black"
              onClick={() => setActiveCard(null)}
            >
              &times;
            </button>

            {/* Title */}
            <h3 className="text-xl font-bold mb-4 text-black">
              {cards[activeCard].title}
            </h3>

            {/* Content */}
            <p className="text-gray-700">{cards[activeCard].content}</p>
            <button
              className="bg-black text-white px-4 py-1 mt-2 text-sm rounded-md hover:bg-gray-800 transition"
            >
              Enroll Now &raquo;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
