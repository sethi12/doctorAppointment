'use client';

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Your Smile,<br />
            <span className="text-teal-300">Our Priority</span>
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Book your dental appointment in seconds. Expert care with Dr. Archana Sharma in a comfortable, modern clinic.
          </p>
          <a
            href="#book"
            className="inline-block bg-white text-teal-700 font-semibold px-8 py-4 rounded-2xl text-lg hover:bg-teal-50 transition"
          >
            Book Appointment Now →
          </a>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1606819717115-9159c900370b?w=800"
            alt="Happy dental patient"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}