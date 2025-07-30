'use client';
import Image from 'next/image';

const students = [
  { name: 'Anjali Sharma', img: '/s1.jpg' },
  { name: 'Ravi Mehra', img: '/s2.jpg' },
  { name: 'Sneha Gupta', img: '/s3.jpg' },
  { name: 'Amit Raj', img: '/s4.jpg' },
  { name: 'Pooja Yadav', img: '/s5.jpg' },
  { name: 'Vikram Singh', img: '/s6.jpg' },
  { name: 'Neha Verma', img: '/s7.jpg' },
  { name: 'Rohit Saini', img: '/s8.jpg' },
];

export default function PlacedStudentsGallery() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-700 mb-10">
          Recently Placed Students
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {students.map((student, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src={student.img}
                alt={student.name}
                width={300}
                height={300}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500">
                <p className="text-white text-lg font-semibold">{student.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
