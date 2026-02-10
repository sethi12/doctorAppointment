// app/components/Navbar.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link'; // ← recommended instead of <a> for better Next.js routing

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo + Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-600 rounded-2xl flex items-center justify-center text-white text-2xl flex-shrink-0">
              🦷
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-bold text-zinc-900">
                Naraina Dental Center
              </h1>
              <p className="text-xs text-teal-600 -mt-1">Smile with Confidence</p>
            </div>

            {/* Mobile brand name (shorter version) */}
            <div className="sm:hidden">
              <h1 className="text-lg font-bold text-zinc-900">Naraina Dental</h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#book"
              className="text-sm font-medium text-zinc-700 hover:text-teal-600 transition-colors"
            >
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-zinc-700 hover:text-teal-600 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-zinc-700 hover:text-teal-600 transition-colors"
            >
              Contact
            </Link>

            <Link
              href="/#book"
              className="bg-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors text-sm"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-zinc-700 hover:text-teal-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                // X icon
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <Link
              href="/#book"
              onClick={closeMenu}
              className="block py-3 px-4 text-base font-medium text-zinc-700 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors"
            >
              Book Appointment
            </Link>
            <Link
              href="/services"
              onClick={closeMenu}
              className="block py-3 px-4 text-base font-medium text-zinc-700 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors"
            >
              Services
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block py-3 px-4 text-base font-medium text-zinc-700 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors"
            >
              Contact
            </Link>

            <div className="pt-3">
              <Link
                href="/#book"
                onClick={closeMenu}
                className="block w-full bg-teal-600 text-white text-center py-4 px-6 rounded-xl font-semibold hover:bg-teal-700 transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}