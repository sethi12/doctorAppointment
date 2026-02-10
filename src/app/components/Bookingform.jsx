// // app/components/BookingForm.jsx
// 'use client'

// import { useState } from 'react'
// import SlotSelector from './SlotSelector'
// import { treatments } from '../constants/treatment'   // make sure file name & export match

// export default function BookingForm({
//   bookings,
//   setBookings,
//   setShowModal,
//   setNewBooking
// }) {
//   const [name, setName] = useState('')
//   const [phone, setPhone] = useState('')
//   const [email, setEmail] = useState('')
//   const [treatment, setTreatment] = useState('')
//   const [patientType, setPatientType] = useState('')   // 'new' or 'existing'
//   const [selectedDate, setSelectedDate] = useState('')
//   const [selectedTime, setSelectedTime] = useState('')
//   const [formError, setFormError] = useState('')

//   const today = new Date().toISOString().split('T')[0]

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setFormError('')

//     if (!name.trim() || !phone.trim() || !treatment || !patientType || !selectedDate || !selectedTime) {
//       setFormError('Please fill in all required fields')
//       return
//     }

//     const isAlreadyBooked = bookings.some(
//       (b) => b.date === selectedDate && b.time === selectedTime
//     )

//     if (isAlreadyBooked) {
//       setFormError('This time slot is already taken. Please choose another.')
//       return
//     }

//     const newBookingData = {
//       id: Date.now(),
//       date: selectedDate,
//       time: selectedTime,
//       name: name.trim(),
//       phone: phone.trim(),
//       email: email.trim(),
//       treatment,
//       patientType: patientType === 'new' ? 'New Patient' : 'Existing Patient'
//     }

//     setBookings((prev) => [...prev, newBookingData])
//     setNewBooking(newBookingData)
//     setShowModal(true)

//     // reset form
//     setName('')
//     setPhone('')
//     setEmail('')
//     setTreatment('')
//     setPatientType('')
//     setSelectedDate('')
//     setSelectedTime('')
//     setFormError('')
//   }

//   return (
//     <section id="book" className="py-16 md:py-24 bg-gradient-to-b from-zinc-50 to-white">
//       <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-12 md:mb-16">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
//             Book Your Appointment
//           </h2>
//           <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//             30-minute consultation slots • Morning: 10:00 AM – 1:00 PM • Evening: 4:00 PM – 8:00 PM
//           </p>
//         </div>

//         {/* Card */}
//         <div className="bg-white rounded-2xl shadow-xl border border-gray-100/80 overflow-hidden">
//           <div className="p-6 sm:p-8 md:p-10 lg:p-12">
//             <form onSubmit={handleSubmit} className="space-y-10">
//               <div className="grid md:grid-cols-2 gap-8 lg:gap-10">

//                 {/* ── Patient Information ── */}
//                 <div className="space-y-7">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">Patient Details</h3>

//                   {/* Name */}
//                   <div className="relative">
//                     <input
//                       type="text"
//                       id="name"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       className="peer w-full px-5 py-4 border border-gray-300 rounded-xl focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all text-gray-900 text-base font-medium"
//                       placeholder=" "
//                       required
//                     />
//                     <label
//                       htmlFor="name"
//                       className="absolute left-5 -top-2.5 px-2 bg-white text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-teal-600"
//                     >
//                       Full Name *
//                     </label>
//                   </div>

//                   {/* Phone */}
//                   <div className="relative">
//                     <input
//                       type="tel"
//                       id="phone"
//                       value={phone}
//                       onChange={(e) => setPhone(e.target.value)}
//                       className="peer w-full px-5 py-4 border border-gray-300 rounded-xl focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all text-gray-900 text-base font-medium"
//                       placeholder=" "
//                       required
//                     />
//                     <label
//                       htmlFor="phone"
//                       className="absolute left-5 -top-2.5 px-2 bg-white text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-teal-600"
//                     >
//                       WhatsApp Number *
//                     </label>
//                   </div>

//                   {/* Email */}
//                   <div className="relative">
//                     <input
//                       type="email"
//                       id="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="peer w-full px-5 py-4 border border-gray-300 rounded-xl focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all text-gray-900 text-base font-medium"
//                       placeholder=" "
//                     />
//                     <label
//                       htmlFor="email"
//                       className="absolute left-5 -top-2.5 px-2 bg-white text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-teal-600"
//                     >
//                       Email (optional)
//                     </label>
//                   </div>

//                   {/* New / Existing Patient */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-3">
//                       Are you a new patient or existing patient? *
//                     </label>
//                     <div className="flex flex-col sm:flex-row gap-4">
//                       <label className="flex items-center gap-3 cursor-pointer">
//                         <input
//                           type="radio"
//                           name="patientType"
//                           value="new"
//                           checked={patientType === 'new'}
//                           onChange={(e) => setPatientType(e.target.value)}
//                           className="w-5 h-5 text-teal-600 border-gray-300 focus:ring-teal-500"
//                           required
//                         />
//                         <span className="text-gray-800 font-medium">New Patient</span>
//                       </label>

//                       <label className="flex items-center gap-3 cursor-pointer">
//                         <input
//                           type="radio"
//                           name="patientType"
//                           value="existing"
//                           checked={patientType === 'existing'}
//                           onChange={(e) => setPatientType(e.target.value)}
//                           className="w-5 h-5 text-teal-600 border-gray-300 focus:ring-teal-500"
//                         />
//                         <span className="text-gray-800 font-medium">Existing Patient</span>
//                       </label>
//                     </div>
//                   </div>
//                 </div>

//                 {/* ── Appointment Details ── */}
//                 <div className="space-y-7">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">Appointment Details</h3>

//                   {/* Treatment */}
//                   <div className="relative">
//                     <select
//                       id="treatment"
//                       value={treatment}
//                       onChange={(e) => setTreatment(e.target.value)}
//                       className="peer w-full px-5 py-4 border border-gray-300 rounded-xl focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all bg-white text-gray-900 text-base font-medium"
//                       required
//                     >
//                       <option value="" disabled hidden></option>
//                       {treatments.map((t) => (
//                         <option key={t} value={t}>
//                           {t}
//                         </option>
//                       ))}
//                     </select>
//                     <label
//                       htmlFor="treatment"
//                       className="absolute left-5 -top-2.5 px-2 bg-white text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-teal-600"
//                     >
//                       Select Treatment *
//                     </label>
//                   </div>

//                   {/* Date */}
//                   <div className="relative">
//                     <input
//                       type="date"
//                       id="date"
//                       value={selectedDate}
//                       min={today}
//                       onChange={(e) => {
//                         setSelectedDate(e.target.value)
//                         setSelectedTime('')
//                       }}
//                       className="peer w-full px-5 py-4 border border-gray-300 rounded-xl focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all text-gray-900 text-base font-medium"
//                       required
//                     />
//                     <label
//                       htmlFor="date"
//                       className="absolute left-5 -top-2.5 px-2 bg-white text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-teal-600"
//                     >
//                       Preferred Date *
//                     </label>
//                   </div>

//                   {/* Slots */}
//                   {selectedDate && (
//                     <SlotSelector
//                       selectedDate={selectedDate}
//                       selectedTime={selectedTime}
//                       setSelectedTime={setSelectedTime}
//                       bookings={bookings}
//                     />
//                   )}
//                 </div>
//               </div>

//               {/* Error message */}
//               {formError && (
//                 <div className="text-center text-red-600 bg-red-50 border border-red-200 rounded-xl py-3 px-5">
//                   {formError}
//                 </div>
//               )}

//               {/* Submit Button */}
//               <div className="pt-4">
//                 <button
//                   type="submit"
//                   disabled={!selectedTime}
//                   className={`
//                     w-full py-5 px-8 rounded-2xl font-semibold text-lg transition-all duration-200
//                     ${
//                       selectedTime
//                         ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-lg hover:shadow-xl active:scale-[0.98]'
//                         : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                     }
//                   `}
//                 >
//                   Confirm Appointment
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>

//         {/* Trust signals */}
//         <p className="text-center text-sm text-gray-500 mt-8">
//           Your information is secure • Confirmation sent via WhatsApp
//         </p>
//       </div>
//     </section>
//   )
// }
// app/components/BookingForm.jsx
'use client'

import { useState, useEffect } from 'react'
import SlotSelector from './SlotSelector'
import { treatments } from '../constants/treatment'
import { db } from '../lib/firebase'
import { ref, onValue, push, set, get, query, orderByChild, equalTo } from 'firebase/database'

export default function BookingForm({ setShowModal, setNewBooking }) {
  const [bookings, setBookings] = useState([])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [treatment, setTreatment] = useState('')
  const [patientType, setPatientType] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [formError, setFormError] = useState('')
  const [loading, setLoading] = useState(false)

  const today = new Date().toISOString().split('T')[0]

  // Real-time listener for all bookings
  useEffect(() => {
    const bookingsRef = ref(db, 'bookings')

    const unsubscribe = onValue(bookingsRef, (snapshot) => {
      const data = snapshot.val()
      const loadedBookings = data ? Object.values(data) : []
      setBookings(loadedBookings)
    }, (error) => {
      console.error('Firebase listener error:', error)
      setFormError('Unable to load available slots. Please refresh.')
    })

    return () => unsubscribe()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError('')
    setLoading(true)

    // Basic client validation
    if (!name.trim() || !phone.trim() || !treatment || !patientType || !selectedDate || !selectedTime) {
      setFormError('Please fill in all required fields')
      setLoading(false)
      return
    }

    try {
      // Server-side check (prevent race condition)
      const dateQuery = query(
        ref(db, 'bookings'),
        orderByChild('date'),
        equalTo(selectedDate)
      )

      const snapshot = await get(dateQuery)
      let slotTaken = false

      if (snapshot.exists()) {
        const existingBookings = Object.values(snapshot.val())
        slotTaken = existingBookings.some(b => b.time === selectedTime)
      }

      if (slotTaken) {
        setFormError('This time slot was just taken by someone else. Please choose another.')
        setLoading(false)
        return
      }

      // Create new booking
      const newBookingData = {
        createdAt: new Date().toISOString(),
        date: selectedDate,
        time: selectedTime,
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim() || null,
        treatment,
        patientType: patientType === 'new' ? 'New Patient' : 'Existing Patient'
      }

      // Save to Firebase
      const newBookingRef = push(ref(db, 'bookings'))
      await set(newBookingRef, newBookingData)

      // Success
      setNewBooking(newBookingData)
      setShowModal(true)

      // Reset form
      setName('')
      setPhone('')
      setEmail('')
      setTreatment('')
      setPatientType('')
      setSelectedDate('')
      setSelectedTime('')
      setFormError('')
    } catch (err) {
      console.error('Booking error:', err)
      setFormError('Failed to book appointment. Please try again or check your connection.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="book" className="py-16 md:py-24 bg-gradient-to-b from-zinc-50 to-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Book Your Appointment
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            30-minute consultation slots • Morning: 10:00 AM – 1:00 PM • Evening: 4:00 PM – 8:00 PM
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100/80 overflow-hidden">
          <div className="p-6 sm:p-8 md:p-10 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                {/* Patient Information */}
                <div className="space-y-7">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Patient Details</h3>

                  {/* Name */}
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="peer w-full px-5 py-4 border border-gray-300 rounded-xl focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all text-gray-900 text-base font-medium"
                      placeholder=" "
                      required
                    />
                    <label htmlFor="name" className="absolute left-5 -top-2.5 px-2 bg-white text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-teal-600">
                      Full Name *
                    </label>
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="peer w-full px-5 py-4 border border-gray-300 rounded-xl focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all text-gray-900 text-base font-medium"
                      placeholder=" "
                      required
                    />
                    <label htmlFor="phone" className="absolute left-5 -top-2.5 px-2 bg-white text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-teal-600">
                      WhatsApp Number *
                    </label>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="peer w-full px-5 py-4 border border-gray-300 rounded-xl focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all text-gray-900 text-base font-medium"
                      placeholder=" "
                    />
                    <label htmlFor="email" className="absolute left-5 -top-2.5 px-2 bg-white text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-teal-600">
                      Email (optional)
                    </label>
                  </div>

                  {/* Patient Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Are you a new patient or existing patient? *
                    </label>
                    <div className="flex flex-col sm:flex-row gap-6">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="patientType"
                          value="new"
                          checked={patientType === 'new'}
                          onChange={(e) => setPatientType(e.target.value)}
                          className="w-5 h-5 text-teal-600 border-gray-300 focus:ring-teal-500"
                          required
                        />
                        <span className="text-gray-800">New Patient</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="patientType"
                          value="existing"
                          checked={patientType === 'existing'}
                          onChange={(e) => setPatientType(e.target.value)}
                          className="w-5 h-5 text-teal-600 border-gray-300 focus:ring-teal-500"
                        />
                        <span className="text-gray-800">Existing Patient</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Appointment Details */}
                <div className="space-y-7">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Appointment Details</h3>

                  <div className="relative">
                    <select
                      id="treatment"
                      value={treatment}
                      onChange={(e) => setTreatment(e.target.value)}
                      className="peer w-full px-5 py-4 border border-gray-300 rounded-xl focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all bg-white text-gray-900 text-base font-medium"
                      required
                    >
                      <option value="" disabled hidden></option>
                      {treatments.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    <label htmlFor="treatment" className="absolute left-5 -top-2.5 px-2 bg-white text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-teal-600">
                      Select Treatment *
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="date"
                      id="date"
                      value={selectedDate}
                      min={today}
                      onChange={(e) => {
                        setSelectedDate(e.target.value)
                        setSelectedTime('')
                      }}
                      className="peer w-full px-5 py-4 border border-gray-300 rounded-xl focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all text-gray-900 text-base font-medium"
                      required
                    />
                    <label htmlFor="date" className="absolute left-5 -top-2.5 px-2 bg-white text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-teal-600">
                      Preferred Date *
                    </label>
                  </div>

                  {selectedDate && (
                    <SlotSelector
                      selectedDate={selectedDate}
                      selectedTime={selectedTime}
                      setSelectedTime={setSelectedTime}
                      bookings={bookings}
                    />
                  )}
                </div>
              </div>

              {formError && (
                <div className="text-center text-red-600 bg-red-50 border border-red-200 rounded-xl py-3 px-5">
                  {formError}
                </div>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading || !selectedTime}
                  className={`w-full py-5 px-8 rounded-2xl font-semibold text-lg transition-all duration-200
                    ${loading || !selectedTime
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-teal-600 hover:bg-teal-700 text-white shadow-lg hover:shadow-xl active:scale-[0.98]'}
                  `}
                >
                  {loading ? 'Booking...' : 'Confirm Appointment'}
                </button>
              </div>
            </form>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Your information is secure • Confirmation sent via WhatsApp
        </p>
      </div>
    </section>
  )
}