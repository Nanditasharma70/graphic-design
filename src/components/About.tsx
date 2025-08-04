'use client';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-6  bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Images */}
          <div className="relative flex justify-end">
            <div className="w-3/4 border-4 border-[#652f8e] bg-[#652f8e] p-2 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/Ankit.webp"
                alt="Anshika Digital Training"
                width={400}
                height={300}
                className="rounded-xl w-full object-cover"
              />
            </div>
            <div className="absolute top-[55%] left-0 w-1/2 border-4 border-[#652f8e]  bg-[#652f8e] p-2 rounded-xl shadow-lg">
              <Image
                src="/Sulekha.webp"
                alt="Students in Class"
                width={300}
                height={200}
                className="rounded-xl w-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <span className="inline-block bg-purple-100 border-1 border-[#652f8e] text-[#652f8e] text-sm font-semibold px-4 py-1 rounded-full mt-5 mb-4">
              About Us
            </span>
            
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-snug mb-6">
              Building Creative Careers Since <span className="text-[#652f8e]">2018</span>
            </h2>

            <p className="text-base text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
              <strong className="text-gray-900 dark:text-white">Anshika Digital Media</strong> is a Pvt. Ltd. company and a leading training institute for Digital Marketing, Graphic Designing, UI/UX, and Video Editing. Established in 2018 by <strong className="text-gray-900 dark:text-white">Ankit KK</strong>, the company has grown to become a hub for creative professionals.
            </p>

            <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              <strong className="text-gray-900 dark:text-white">Ankit Kumar Kushwaha</strong> brings over 12 years of hands-on experience in Graphic Design and Video Editing. Prior to founding Anshika Digital Media, he worked with top-tier advertising agencies.
            </p>

            <ul className="space-y-3 text-base text-gray-700 dark:text-gray-300 mb-6">
              <li className="flex items-start">
                <span className="text-[#652f8e] mr-3">✔</span>
                Worked with Indian Oil, GAIL, ONGC, NHPC, Income Tax, and PNB
              </li>
              <li className="flex items-start">
                <span className="text-[#652f8e] mr-3">✔</span>
                Designed campaigns for Maruti, Campus Shoes, Delhi Metro, IRCTC
              </li>
              <li className="flex items-start">
                <span className="text-[#652f8e] mr-3">✔</span>
                12+ Years of Excellence in Design & Education
              </li>
            </ul>

            <a
              href="#"
              className="inline-block bg-[#652f8e] text-white px-6 py-3 rounded-full text-sm font-semibold shadow hover:bg-[#652f8e] transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
