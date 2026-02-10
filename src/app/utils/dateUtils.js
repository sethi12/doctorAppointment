// app/utils/dateUtils.js

export function generateSlots() {
  const slots = []
  // Morning
  for (let h = 10; h < 13; h++) {
    slots.push(`${h.toString().padStart(2, '0')}:00`)
    slots.push(`${h.toString().padStart(2, '0')}:30`)
  }
  // Evening
  for (let h = 16; h < 20; h++) {
    slots.push(`${h.toString().padStart(2, '0')}:00`)
    slots.push(`${h.toString().padStart(2, '0')}:30`)
  }
  return slots
}

export function getBookedTimes(date, bookings) {
  return bookings
    .filter((b) => b.date === date)
    .map((b) => b.time)
}

export function formatTime12(time24) {
  const [h, m] = time24.split(':').map(Number)
  const period = h >= 12 ? 'PM' : 'AM'
  const hour12 = h % 12 || 12
  return `${hour12}:${m.toString().padStart(2, '0')} ${period}`
}

// ── NEW HELPERS ──

export function isToday(dateString) {
  const today = new Date().toISOString().split('T')[0]
  return dateString === today
}

export function getCurrentTimeHHMM() {
  const now = new Date()
  const h = now.getHours().toString().padStart(2, '0')
  const m = now.getMinutes().toString().padStart(2, '0')
  return `${h}:${m}`
}

export function isSlotInPast(slotHHMM, currentHHMM) {
  return slotHHMM < currentHHMM
}