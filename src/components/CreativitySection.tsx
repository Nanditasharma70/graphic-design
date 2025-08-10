'use client';

import Image from 'next/image';

export default function CreativitySection() {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#652f8e]">
Best Graphic Designing Institute in SAKET,  Delhi        </h2>

        {/* Paragraph 1 */}
        <p className="text-gray-700 text-base md:text-lg">
         Advanced Diploma in Graphic Designing (ADGD) is the best Professional Course for a student who wants to build their career in the Graphic Designing field. This is a 6 Months Diploma Course in the Advertising and Marketing Fields for any stream stud specially an Art stream student who completed his/her 12th can join the Gr Designing Course.
        </p>

        {/* Center Image */}
        <div className="w-full flex justify-center">
          <div className="w-48 h-auto relative">
            <Image
              src="/Creative-Mindset.jpg" 
              alt="Creative Brain"
              width={250}
              height={250}
              className="object-contain"
            />
          </div>
        </div>

        {/* Paragraph 2 */}
        <p className="text-gray-700 text-base md:text-lg">
          ☆ This  Diploma course helps to provide information related to Software technologies of the Advertising and Marketing world and Creativity in the field of Graphic Design. We provide accurate knowledge of Graphic designing Software, which demands a skilled person to handle Live projects of Graphic design. All Stream Students can join the Graphic Designing Course. It has 6 Stages with a Duration of 6 Months to become a Graphic Designer in our Anshika Digital Media Institute. Anshika Digital Media Institute.
        </p>

       
      </div>
    </section>
  );
}
