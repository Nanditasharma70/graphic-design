'use client';

const testimonials = [
  {
    name: 'Priya Verma',
    role: 'Designer',
    testimonial: 'The design tools helped me build a stunning portfolio and land my dream job!',
    image: '/s1.jpg',
  },
  {
    name: 'Aman Sharma',
    role: 'Marketer',
    testimonial: 'The skills I gained here skyrocketed my ad campaign success rate.',
    image: '/s2.jpg',
  },
  {
    name: 'Neha Rawat',
    role: 'VFX Filmmaker',
    testimonial: 'I transformed my video editing skills into cinematic storytelling.',
    image: '/s3.jpg',
  },
  {
    name: 'Rahul Joshi',
    role: 'Content Creator',
    testimonial: 'This platform made my reels more engaging and professional.',
    image: '/s4.jpg',
  },
];

export default function TestimonialCards() {
  return (
    <section className="bg-white  py-14">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl text-purple-600 font-semibold text-center mb-10">
          Boost your professional workflow and productivity
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="relative h-96 w-full bg-purple-700 rounded-2xl overflow-hidden group transition-all duration-500 cursor-pointer transform group-hover:scale-[1.05]"
            >
              {/* Image Full by default */}
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
              />

              {/* On hover: Split View */}
              <div className="absolute  inset-0 flex opacity-0 group-hover:opacity-100 transition duration-500">
                {/* Left side with text */}
                <div className="w-1/2 p-5 flex flex-col justify-center bg-purple-900">
                  <p className="text-lg text-white font-bold">{item.name}</p>
                  <p className="text-sm italic text-white">{item.role}</p>
                  <p className="text-sm text-white mt-2">{item.testimonial}</p>
                </div>

                {/* Right side with image again */}
                <div className="w-1/2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
