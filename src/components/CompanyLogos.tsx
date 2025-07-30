'use client';

import Image from 'next/image';

const logos = [
  { name: 'Google', src: '/google.png' },
  { name: 'Meta', src: '/meta.png' },
  { name: 'Netflix', src: '/netflix.png' },
  { name: 'Amazon', src: '/amazon.png' },
  { name: 'Spotify', src: '/spotify.png' },
];

export default function CompanyLogos() {
  return (
    <section className="py-12 bg-gray-50">
      <h3 className="text-center text-lg text-gray-600 mb-6">Trusted by teams at</h3>

      <div className="flex justify-center flex-wrap gap-8 max-w-5xl mx-auto px-4">
        {logos.map((logo, idx) => (
          <div key={idx} className="h-10 w-32 relative grayscale hover:grayscale-0 transition duration-300">
            <Image
              src={logo.src}
              alt={logo.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
