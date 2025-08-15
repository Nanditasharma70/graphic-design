'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EnrollForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    course: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted successfully!');
  };

  return (
    <section className="py-12 px-4" id="enroll">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg relative">
        
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="absolute -top-4 left-5 text-4xl  text-gray-800 px-4 py-2  mb-4 transition"
        >
          ←
        </button>

        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
          Enroll Now
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-1">Full Name</label>
            <input
              type="text"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="John Doe"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="john@example.com"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Mobile No.</label>
              <input
                type="tel"
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="9876543210"
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Select Course</label>
            <select
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
            >
              <option value="">-- Select a Course --</option>
              <option>Graphic Designing</option>
              <option>Video Editing</option>
              <option>Digital Marketing</option>
              <option>UI/UX Designing</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Message (Optional)</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows={4}
              placeholder="Your message..."
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
    
  );
}
