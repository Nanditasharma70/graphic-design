import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function InstituteInfoSection() {
  return (
    <div className="bg-black text-white py-10 px-4 md:px-20 min-h-screen flex flex-col justify-center items-center">

      {/* Download Button */}
      <div className="flex justify-center my-8">
        <button className="border border-green-400 text-green-400 px-4 py-2 rounded hover:bg-green-500 hover:text-black transition">
          Download Course PDF
        </button>
      </div>

    {/* Card Container with equal border thickness */}
<div className="w-full max-w-3xl border-x-2 border-b-2 border-gray-700 rounded-lg relative bg-black">

  {/* Heading with equal border lines touching left and right borders */}
  <div className="relative">
    {/* Top border */}
    <div className="absolute top-0 left-0 w-full border-t-2 border-gray-700"></div>

    {/* Heading text */}
    <h1 className="relative mx-auto w-max px-4 bg-black text-2xl font-bold text-white whitespace-nowrap">
      Anshika Digital Media
    </h1>
  </div>

  {/* Description Content */}
  <div className="p-6 space-y-6 text-sm text-gray-300">
    <p>
      <span className="font-bold text-white">Anshika Digital Media</span> Professional Training Institute of Graphic Designing, Video Editing and Digital Marketing, Courses provided at an advanced level.
    </p>

    <p>
      We are not only conducting courses but along with the courses, we also provide live projects for our students to practice. We provide 100% job placement to our students as well.
    </p>

    <p>
      After completion of the course, we also provide paid internships to our students.
    </p>

    <p>
      The entire preparation for the internship is done by our institute itself, in which we provide the resume, portfolio, and interview schedule to the students. During the internship, the starting salary package is <span className="font-bold text-white">1,80,000/- to 3,00,000/- per annum.</span>
    </p>
  </div>

</div>
    </div>
  );
}
