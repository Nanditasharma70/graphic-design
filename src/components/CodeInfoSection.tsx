'use client';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';


export default function CourseInfoSection() {
    return (
        <section className="py-10 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid gap-6 md:grid-cols-3">
                    {/* Card 1 */}
                    <div className="p-[6px] rounded-xl  bg-gradient-to-t from-purple-900 to-pink-500 shadow-md">
  <div className="bg-white rounded-xl p-6 text-center">
    <h3 className="text-2xl font-bold text-gray-800 mb-2">
      Class Duration - <span className="font-semibold">1.5 Hours</span>
    </h3>
    <h3 className="text-2xl font-bold text-gray-800 mb-2">
      Practice Time - <span className="font-semibold">Unlimited</span>
    </h3>
    <p className="text-sm text-gray-600 mb-2">
      100% Practical | Live Projects | Placement
    </p>
    <h3 className="text-2xl font-bold text-gray-800 mb-2">
      Fee Submit <br />
      <span className="font-semibold">
        One Time{" "}
        <span className="text-sm font-semibold">(Extra Discount)</span> <br /> & <br />
        Monthly Installment 3-4 (EMI)
      </span>
    </h3>

    <button className="mt-4 mx-auto flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl font-semibold">
      Get More Offer <ArrowRight className="w-4 h-4" />
    </button>
  </div>
</div>


                    {/* Card 2 */}
                 <div className="p-[6px] rounded-xl bg-gradient-to-t from-purple-900 to-pink-500 shadow-md">
  <div className="bg-white rounded-xl p-6 text-center">
    <h3 className="text-2xl font-bold text-gray-800 mb-4">
      4 Tools & Software Learn
    </h3>

    <div className="flex justify-center items-center gap-4 mb-4 flex-wrap">
  <Image src="/icons/ps.webp" width={16} height={16} alt="Photoshop" className="w-16 h-auto" />
  <Image src="/icons/ai.webp" width={16} height={16} alt="Illustrator" className="w-16 h-auto" />
  <Image src="/icons/id.webp" width={16} height={16} alt="InDesign" className="w-16 h-auto" />
  <Image src="/icons/corel.webp" width={16} height={16} alt="CorelDraw" className="w-16 h-auto" />
</div>


    <p className="text-base text-gray-600 mb-3">
      Photoshop | Illustrator | InDesign | CorelDraw
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">
      Overall Course Duration :{" "}
      <br /><span className="font-semibold "> 5 - 6 Months</span>
    </h3>

    <p className="text-lg font-semibold text-gray-600 mb-4">
     ( Depends On Students Capability)
    </p>

    <button className="mt-4 mx-auto flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl font-semibold">
      Get More Offer <ArrowRight className="w-4 h-4" />
    </button>
  </div>
</div>


                    {/* Card 3 */}
                  <div className="p-[6px] rounded-xl bg-gradient-to-t from-purple-900 to-pink-500  shadow-md">
  <div className="bg-white rounded-xl p-6 text-center">
    <h3 className="text-2xl font-bold text-gray-800 mb-14">
      Job Placement <br /> 100% Placement Guarantee
    </h3>

    <div className="flex text-left items-start gap-2 mb-4">
      <h3 className="text-xl font-bold text-gray-700">Eligibility-</h3>
      <p className="text-lg font-semibold text-gray-700">
        Regular Attendance • 8-10 Live Projects • Submit Portfolio • Compulsory Good Communication
      </p>
    </div>

    <button className="mt-12 mx-auto flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl font-semibold">
      Get More Offer <ArrowRight className="w-4 h-4" />
    </button>
  </div>
</div>

                </div>
            </div>
        </section>
    );
}
