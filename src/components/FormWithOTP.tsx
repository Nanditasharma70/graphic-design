'use client';

import { useEffect, useState } from 'react';

export default function EnquiryPopup() {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    course: '',
    otp: '',
  });

  // Show modal on first page load
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 500); // open after 0.5s
    return () => clearTimeout(timer);
  }, []);

  const sendOTP = async () => {
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
      alert('Form submitted successfully!');
      setShowModal(false);
    } else {
      alert('OTP verification failed');
    }
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-purple-200 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white max-w-md w-full p-6 rounded-xl shadow-lg relative animate-fadeIn">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-600 hover:text-gray-800 text-lg"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-purple-700 text-center mb-4">Enquiry Form</h2>

            {step === 1 && (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="tel"
                  placeholder="Mobile No."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                />
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                >
                  <option value="">Select Course</option>
                  <option>Graphic Designing</option>
                  <option>Video Editing</option>
                  <option>Digital Marketing</option>
                </select>
                <button
                  onClick={sendOTP}
                  className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
                >
                  Send OTP
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                />
                <button
                  onClick={verifyOTP}
                  className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
                >
                  Verify OTP
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
