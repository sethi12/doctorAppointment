// app/contact/page.jsx
import React from 'react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-50">

      {/* Hero / Header Section */}
      <div className="bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Contact Naraina Dental Center
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 opacity-90">
              Expert dental care by Dr. Archana Sharma – We're here for your healthy, confident smile.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">

          {/* Clinic Information */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-zinc-800 mb-6">Visit Us</h2>
              <div className="space-y-6 text-zinc-700 text-lg leading-relaxed">
                <div>
                  <p className="font-semibold text-teal-700 text-xl mb-2">
                    Naraina Dental Center by Dr. Archana Sharma
                  </p>
                  <p>A-17, B-2,</p>
                  <p>Naraina Vihar,</p>
                  <p>New Delhi - 110028</p>
                </div>

                <div>
                  <p className="font-semibold text-teal-700 text-xl mb-2">Landmark</p>
                  <p>Near Naraina Vihar Market / Opposite DDA Sports Complex</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-zinc-800 mb-6">Get in Touch</h2>
              <div className="space-y-6 text-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 text-2xl">
                    📞
                  </div>
                  <div>
                    <p className="font-medium text-zinc-700">Phone / WhatsApp</p>
                    <a 
                      href="tel:+919811759289" 
                      className="text-teal-700 hover:text-teal-800 text-xl font-semibold"
                    >
                      +91 9811759289
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 text-2xl">
                    ⏰
                  </div>
                  <div>
                    <p className="font-medium text-zinc-700">Working Hours</p>
                    <p className="text-zinc-600">
                      Morning: 10:00 AM – 1:00 PM<br />
                      Evening: 4:00 PM – 8:00 PM<br />
                      <span className="text-amber-700 font-medium">Sunday Closed</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-zinc-800 mb-6">Find Us Easily</h2>
            
            {/* Google Maps Embed - replace with your actual embed code if you want */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-[400px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.234567890123!2d77.12345678901234!3d28.62345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDM3JzI0LjQiTiA3N8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Naraina Dental Center Location"
              ></iframe>
            </div>

            {/* Clickable Google Maps Link */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-zinc-100">
              <p className="text-zinc-600 leading-relaxed mb-4">
                <strong>Exact location:</strong> A-17, B-2, Naraina Vihar, New Delhi - 110028
              </p>
              <a
                href="https://share.google/rnTHrTQZSVXAauwad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-800 font-medium text-lg"
              >
                <span>🗺️ Open in Google Maps</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-teal-900 text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your Visit?
          </h2>
          <p className="text-lg md:text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Call us or message on WhatsApp — Dr. Archana Sharma and team are happy to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+919810012345"
              className="inline-block bg-white text-teal-900 font-semibold px-10 py-5 rounded-2xl text-lg hover:bg-teal-50 transition"
            >
              Call Now: +91 9811759289
            </a>
            <a
              href="https://wa.me/919811759289"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-10 py-5 rounded-2xl text-lg transition"
            >
              Message on WhatsApp →
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}