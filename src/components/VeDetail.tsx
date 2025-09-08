export default function AdvanceCourseSection() {
  return (
    <div className="bg-black text-white py-8 px-4 md:px-20">
      <div className="max-w-4xl mx-auto space-y-8 border p-8 rounded-lg">

        {/* Heading Section */}
        <div className="text-center md:text-left space-y-3">
          <h1 className="text-xl font-bold uppercase">ADVANCE</h1>
          <p className="text-sm text-blue-500">VIDEO EDITING INSTITUTE IN SAKET, DELHI</p>
          <p className="text-sm">
            Be a <span className="text-blue-500">Professional</span> Video Editor in <span className="text-blue-500">3-4 Months</span>
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-300">
          Advanced Diploma in Video Editing (ADVE) is the best Professional Course for a student who wants to build their career in the Video Editing field. This is a 2-3 Months Diploma Course in the Advertising and Marketing Fields for any stream student specially an Art stream student who has completed his/her 12th can join the Video Editing Course.
        </p>


        {/* Image with overlay */}
        <div className="relative">
          <img
            src="/ve-icons/ve-detail.svg"


            alt="Video Editing"
            className="w-full rounded-lg shadow-lg"
          />
          <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded">
            100% Job Placement
          </div>
        </div>

        {/* Final Description */}
        <p className="text-sm text-gray-300 border p-8 rounded-lg ">
          Read more button here. This Diploma course helps to provide information related to Software technologies of the Advertising and Video Marketing world and Creativity in the field of Video Editing. We provide accurate knowledge of Video Editing Software, which demands a skilled person to handle live projects of Video Editing. All Stream Students can join the Video Editing Course. It has 3 Stages with a Duration of 3 Months to become a Video Editor in our Anshika Digital Media Institute, Anshika Digital Media Institute.
        </p>

      </div>
    </div>
  );
}
