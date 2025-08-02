'use client';

import { useState } from 'react';

export default function EnrollSection() {
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    course: '',
  });

  const handleSendOtp = async () => {
    if (!formData.mobile) {
      alert('Please enter your mobile number');
      return;
    }

    try {
      await fetch('/api/send-otp', {
        method: 'POST',
        body: JSON.stringify({ mobile: formData.mobile }),
      });
      setStep(2);
    } catch (error) {
      console.error('Failed to send OTP:', error);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const res = await fetch('/api/verify-otp', {
        method: 'POST',
        body: JSON.stringify({ mobile: formData.mobile, otp }),
      });
      const data = await res.json();
      if (data.success) {
        alert('Form submitted successfully!');
        setStep(1);
        setOtp('');
        setFormData({ name: '', mobile: '', email: '', course: '' });
      } else {
        alert('OTP verification failed');
      }
    } catch (error) {
      console.error('OTP verification error:', error);
    }
  };

  return (
    <section className="bg-white py-10 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-[#652f8e]"> Online & Offline Classes</h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Left: Form & Offer */}
        <div className="flex flex-col items-center md:items-center">
          <div className="text-center md:text-left mb-6">
            <p className="mt-3 text-gray-600 text-base font-medium">
              Get <span className="text-pink-600 font-bold">50% Off</span> on Video Editing<br />
              If you Enroll for <span className="text-pink-600 font-bold">Graphic Designing</span>
            </p>
          </div>

          <div className="bg-[#652f8e] text-white rounded-2xl p-6 shadow-md w-full max-w-md">
            <h3 className="text-lg font-bold text-center mb-4">BOOK FREE DEMO SESSION</h3>

            {step === 1 ? (
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Mobile No."
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full px-4 py-2 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email ID"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none"
                />
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-4 py-2 rounded-md bg-white text-gray-800 focus:outline-none"
                >
                  <option value="">Select Course</option>
                  <option>Graphic Designing</option>
                  <option>Video Editing</option>
                  <option>Digital Marketing</option>
                </select>

                <button
                  type="button"
                  onClick={handleSendOtp}
                  className="w-full bg-gradient-to-r from-purple-500 to-[#652f8e] hover:from-[#652f8e] hover:to-purple-500 text-white py-2 rounded-full font-bold transition-opacity duration-300 hover:opacity-90"
                >
                  Send OTP
                </button>
              </form>
            ) : (
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none"
                />
                <button
                  onClick={handleVerifyOtp}
                  className="w-full bg-gradient-to-r from-purple-500 to-[#652f8e] hover:from-[#652f8e] hover:to-purple-500 text-white py-2 rounded-full font-bold transition-opacity duration-300 hover:opacity-90"
                >
                  Verify OTP
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right: Certification Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-bold text-[#652f8e] mb-2">
            Become a professional <span className="font-light">and Certified</span>
          </h3>
          <p className="text-gray-700 font-medium mb-6">
            Verified to Multi-Factor<br />
            Approved with 100% Authenticated
          </p>

          <div className="grid grid-cols-2 gap-8 w-full max-w-lg">
            {[
              '11 Years of excellency in computer education',
              'Institute registered Ministry of MSME Govt.of India',
              '11 Years of excellency in computer education',
              'ISO Certified',
            ].map((text, index) => (
              <div
                key={index}
                className="border-2 border-[#652f8e] p-4 rounded-xl text-center text-sm font-medium text-gray-700 bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-purple-200 text-[#652f8e] font-bold flex items-center justify-center">
                  {index + 1}
                </div>
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
