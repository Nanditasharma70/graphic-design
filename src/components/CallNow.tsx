'use client';

import { Phone } from 'lucide-react';

export default function NewsletterCTA() {
  return (
    <section className="relative py-6 px-6 bg-gray-900  overflow-hidden">
      <div className="max-w-6xl mx-auto rounded-3xl shadow-xl p-1">
        <div className="bg-gradient-to-r from-purple-700 via-[#652f8e] to-[#652f8e] text-white rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Text Content */}
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Let&apos; Talk for <span className="text-black">Career</span>
            </h2>
            <p className="mt-3 text-lg text-purple-100">
              Speak with our career counsellors and unlock your path to becoming a creative professional.
            </p>
          </div>

          {/* Call Now Button */}
          <a
            href="tel:+919999999999"
            className="inline-flex items-center gap-2 bg-white text-[#652f8e] font-semibold text-lg px-6 py-3 rounded-full shadow-md hover:bg-purple-50 transition"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
