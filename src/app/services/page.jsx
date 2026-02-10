// app/services/page.jsx
import React from 'react'

const services = [
  {
    title: "Routine Dental Check-up",
    description: "Comprehensive oral examination, X-rays if needed, and professional advice to maintain optimal oral health.",
    icon: "🦷",

  },
  {
    title: "Professional Teeth Cleaning (Scaling & Polishing)",
    description: "Remove plaque, tartar, and surface stains for a brighter, healthier smile.",
    icon: "✨",

  },
  {
    title: "Tooth Filling & Restoration",
    description: "Composite (tooth-colored) fillings, inlays, onlays to restore decayed or damaged teeth.",
    icon: "🛠️",

  },
  {
    title: "Root Canal Treatment",
    description: "Painless single-visit or multi-visit root canal therapy with advanced rotary instruments.",
    icon: "🔬",

  },
  {
    title: "Teeth Whitening",
    description: "In-office Zoom / laser whitening or take-home kits for noticeably brighter teeth.",
    icon: "🌟",

  },
  {
    title: "Tooth Extraction",
    description: "Simple extractions and surgical extractions including wisdom teeth removal.",
    icon: "⚡",

  },
  {
    title: "Dental Crowns & Bridges",
    description: "Zirconia, E-max, metal-ceramic crowns and fixed bridges for long-lasting restoration.",
    icon: "👑",

  },
  {
    title: "Braces / Invisalign Consultation",
    description: "Orthodontic evaluation and treatment planning – metal, ceramic, or clear aligners.",
    icon: "🦷📏",

  },
  {
    title: "Pediatric Dentistry",
    description: "Child-friendly dental care, fluoride application, sealants, habit-breaking appliances.",
    icon: "👶",

  },
  {
    title: "Dental Implants",
    description: "Single / multiple tooth implants with premium implant systems and crowns.",
    icon: "🔩",

  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-zinc-50">

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Our Dental Services
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 opacity-90 leading-relaxed">
              Comprehensive, gentle, and modern dental care tailored to your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-zinc-100 flex flex-col h-full"
            >
              <div className="bg-teal-50/70 px-6 py-8 text-center border-b border-teal-100">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-zinc-800">
                  {service.title}
                </h3>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <p className="text-zinc-600 mb-6 flex-grow">
                  {service.description}
                </p>

                <div className="pt-6 border-t border-zinc-100 mt-auto">
                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <span className="text-zinc-500">Duration:</span><br />
                      <span className="font-medium text-zinc-800">{service.duration}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-zinc-500">Starting from</span><br />
                      <span className="font-bold text-teal-700 text-lg">{service.price}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6">
                <a
                  href="/#book"
                  className="block w-full text-center bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-xl transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-teal-900 text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for a Healthier Smile?
          </h2>
          <p className="text-lg md:text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Schedule your appointment today and experience modern, pain-free dental care.
          </p>
          <a
            href="/#book"
            className="inline-block bg-white text-teal-900 font-semibold px-10 py-5 rounded-2xl text-lg hover:bg-teal-50 transition transform hover:-translate-y-1"
          >
            Book Your Appointment →
          </a>
        </div>
      </div>

    </div>
  )
}