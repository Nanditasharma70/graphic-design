'use client';

import { useEffect, useState } from 'react';

export default function EnquiryPopup() {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    course: '',
    otp: '',
  });

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 2000); // show after 0.5s
    return () => clearTimeout(timer);
  }, []);

  const sendOTP = async () => {
    // Validate mobile before sending
    if (!formData.mobile) return alert("Enter mobile number");
    await fetch('/api/send-otp', {
      method: 'POST',
      body: JSON.stringify({ mobile: formData.mobile }),
    });
    setStep(2);
  };

  const verifyOTP = async () => {
    const res = await fetch('/api/verify-otp', {
      method: 'POST',
      body: JSON.stringify({ mobile: formData.mobile, otp: formData.otp }),
    });
    const data = await res.json();
    if (data.success) {
      alert('Enrollment successful!');
      setShowModal(false);
    } else {
      alert('OTP verification failed');
    }
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-opacity-40 z-50 flex justify-center items-center">
          <div className="bg-[#652f8e] text-white rounded-2xl p-6 md:m-0 m-4 shadow-md w-full max-w-md relative animate-fadeIn">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-4 text-white text-xl hover:text-gray-300"
            >
              ✕
            </button>
            <h3 className="text-lg font-bold text-center mb-4">BOOK FREE DEMO SESSION</h3>

            <form className="space-y-3">
              {step === 1 && (
                <>
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
                    onClick={sendOTP}
                    className="w-full bg-gradient-to-r from-purple-500 to-[#652f8e] hover:from-[#652f8e] hover:to-purple-500 text-white py-2 rounded-full font-bold transition-opacity duration-300 hover:opacity-90"
                  >
                    Send OTP
                  </button>
                </>
              )}

              {step === 2 && (
                <>
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={formData.otp}
                    onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                    className="w-full px-4 py-2 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={verifyOTP}
                    className="w-full bg-gradient-to-r from-purple-500 to-[#652f8e] hover:from-[#652f8e] hover:to-purple-500 text-white py-2 rounded-full font-bold transition-opacity duration-300 hover:opacity-90"
                  >
                    Verify & Enroll
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
