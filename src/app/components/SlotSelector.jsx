// app/components/SlotSelector.jsx
'use client'

import {
  formatTime12,
  generateSlots,
  getBookedTimes,
  isToday,
  getCurrentTimeHHMM,
  isSlotInPast
} from '../utils/dateUtils'

export default function SlotSelector({
  selectedDate,
  selectedTime,
  setSelectedTime,
  bookings
}) {
  const allSlots = generateSlots()
  const booked = getBookedTimes(selectedDate, bookings)

  let available = allSlots.filter((slot) => !booked.includes(slot))

// If today → allow ONLY evening slots (4 PM – 8 PM)
if (isToday(selectedDate)) {
  available = available.filter((slot) => slot >= '16:00')
}


  const isCurrentDay = isToday(selectedDate)

  // ── No slots available ──
  if (available.length === 0) {
    return (
      <div className="mt-2">
        <label className="block text-base font-medium text-gray-700 mb-3">
          Available Slots
        </label>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-center">
          <p className="text-amber-700 font-medium">
            {isCurrentDay
              ? "No more available slots today — all remaining times have passed."
              : "No appointment slots available on this date."}
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Please select a different date.
          </p>
        </div>
      </div>
    )
  }

  // ── Slots available ──
  return (
    <div className="mt-2">
      <label className="block text-base font-medium text-gray-700 mb-3">
        Available Slots
      </label>

      {/* Today's message (only when relevant) */}
      {isCurrentDay && (
        <div className="mb-5 p-4 bg-teal-50 border border-teal-100 rounded-xl text-teal-800 text-sm">
          <strong>Today ({new Date().toLocaleDateString('en-IN')})</strong> — 
          showing only remaining available slots from now until 8:00 PM.
        </div>
      )}

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
        {available.map((slot) => {
          const isSelected = selectedTime === slot

          return (
            <button
              key={slot}
              type="button"
              onClick={() => setSelectedTime(slot)}
              className={`
                py-3 px-2 rounded-xl text-sm sm:text-base font-medium
                border transition-all duration-200
                shadow-sm hover:shadow
                ${isSelected 
                  ? 'bg-teal-600 text-white border-teal-700 shadow-md ring-2 ring-teal-300/50' 
                  : 'bg-white text-gray-800 border-gray-300 hover:border-teal-400 hover:bg-teal-50/60 active:bg-teal-100'
                }
              `}
            >
              {formatTime12(slot)}
            </button>
          )
        })}
      </div>

      <p className="mt-5 text-xs text-gray-500 text-center">
        Click a time slot to select • 30-minute appointments
      </p>
    </div>
  )
}