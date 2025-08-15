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
    <section className="bg-[#652f8e] py-6 px-4 mx-2  rounded-xl">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-white"> Online & Offline Classes</h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Left: Form & Offer */}
        <div className="flex flex-col items-center md:items-center">

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md w-full max-w-md mx-auto">
  <h3 className="text-xl font-semibold text-center text-[#652f8e] mb-4">
    Book Free Demo Session
  </h3>

  {step === 1 ? (
    <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
      />
      <input
        type="tel"
        placeholder="Mobile No."
        value={formData.mobile}
        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
        className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
      />
      <input
        type="email"
        placeholder="Email ID"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
      />
      <select
        value={formData.course}
        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
        className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
      >
        <option value="">Select Course</option>
        <option>Graphic Designing</option>
        <option>Video Editing</option>
        <option>Digital Marketing</option>
      </select>

      <button
        type="button"
        onClick={handleSendOtp}
        className="w-full bg-[#652f8e] text-white py-2 rounded-md text-sm font-medium hover:bg-[#582673]"
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
        className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
      />
      <button
        onClick={handleVerifyOtp}
        className="w-full bg-[#652f8e] text-white py-2 rounded-md text-sm font-medium hover:bg-[#582673]"
      >
        Verify OTP
      </button>
    </div>
  )}
</div>

        </div>

        {/* Right: Certification Info */}
<div className="hidden md:flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-2">
            Become a professional <span className="font-light">and Certified</span>
          </h3>
          <p className="text-gray-200 font-medium mb-2">
            Verified to Multi-Factor<br />
            Approved with 100% Authenticated
          </p>

          <div className="grid grid-cols-2 gap-2 w-full max-w-lg">
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
