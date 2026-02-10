// 'use client';

// import { useState } from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import BookingForm from './components/Bookingform';
// import SuccessModal from './components/SuccessModal';
// import Footer from './components/Footer';

// export default function Home() {
//   const [bookings, setBookings] = useState([
//     // demo data
//     { id: 1, date: '2026-02-15', time: '10:30', name: 'Rahul Sharma', treatment: 'Teeth Cleaning' },
//     { id: 2, date: '2026-02-15', time: '16:00', name: 'Priya Patel', treatment: 'Root Canal' },
//   ]);

//   const [showModal, setShowModal] = useState(false);
//   const [newBooking, setNewBooking] = useState(null);

//   return (
//     <div className="min-h-screen bg-zinc-50 font-sans">
 
//       <Hero />

//       <BookingForm
//         bookings={bookings}
//         setBookings={setBookings}
//         setShowModal={setShowModal}
//         setNewBooking={setNewBooking}
//       />

//       <SuccessModal
//         showModal={showModal}
//         setShowModal={setShowModal}
//         newBooking={newBooking}
//         setNewBooking={setNewBooking}
//       />

//       <Footer />
//     </div>
//   );
// }

// app/page.js   (or wherever your home page is)
'use client'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BookingForm from './components/Bookingform'   // ← updated name (no capital F)
import SuccessModal from './components/SuccessModal'
import Footer from './components/Footer'
import { useState } from 'react'
export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [newBooking, setNewBooking] = useState(null)

  return (
    <div className="min-h-screen bg-zinc-50 font-sans">

      <Hero />

      <BookingForm
        setShowModal={setShowModal}
        setNewBooking={setNewBooking}
      />

      <SuccessModal
        showModal={showModal}
        setShowModal={setShowModal}
        newBooking={newBooking}
        setNewBooking={setNewBooking}
      />

      <Footer />
    </div>
  )
}