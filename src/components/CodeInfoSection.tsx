'use client';
import { ArrowRight } from 'lucide-react';


export default function CourseInfoSection() {
    return (
        <section className="py-10 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid gap-6 md:grid-cols-3">
                    {/* Card 1 */}
                    <div className="bg-white border border-pink-300 rounded-xl shadow-md p-6 text-center">
                        <h3 className="text-xl font-bold text-[#652f8e] mb-2">Class Duration: <span className="font-semibold">1.5 Hourss</span></h3>
                        <h3 className="text-xl font-bold text-[#652f8e] mb-2">  Practice Time: <span className="font-semibold"> Unlimited</span></h3>
                        <p className="text-sm text-gray-600 mb-2">100% Practical | Live Projects | Internship | Placement</p>
                        <h3 className="text-xl font-bold text-[#652f8e] mb-2">Fee Submit <span className="font-semibold"> One Time <span className='text-sm text-semibold'> (Extra Discount) </span> &  Monthly Installment 3-4 (EMI)</span></h3>

                        <button className="mt-4 mx-auto flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl font-semibold">
                            Get More Offer <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white border border-pink-300 rounded-xl shadow-md p-6 text-center">
                        <h3 className="text-xl font-semibold text-[#652f8e] mb-4"> 4 Tools & Software You’ll Learn</h3>
                        <div className="flex justify-center mb-4">
                            <img src="/tools.png" alt="Tools" className="w-32 h-auto" />
                        </div>

                        <p className="text-sm text-gray-600">Photoshop | Illustrator | InDesign | CorelDraw</p>
                        <h3 className="text-lg font-semibold text-[#652f8e] mb-2">Overall Course Duration: <span className="font-bold">5 - 6  Months</span></h3>

                        <p className="text-sm text-gray-600">Depends On Students Capability</p>

                        <button className="mt-4 mx-auto flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl font-semibold">
                            Get More Offer <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white border border-pink-300 rounded-xl shadow-md p-6 text-center">
                        <h3 className="text-xl font-bold text-[#652f8e] mb-4">Certifications With Course Completion</h3>
                        <div className=" flex text-sm text-gray-700 space-y-1">
                            <h3 className='text-bold text-xl text-gray-700 ms-4'> Eligibility:</h3>
                            <p className='text-sm ms-1'> Regular Attendance 8-10 Live Project Submit Portfolio Compulsory Good Communication</p>
                        </div>
                        <button className="mt-4 mx-auto flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl font-semibold">
                            Get More Offer <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
