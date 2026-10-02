import { useState } from 'react'

const timeOptions = [
  '12:00 (Lunch)', '13:00', '14:00', '15:00',
  '18:00 (Dinner)', '19:00', '20:00', '21:00', '22:00',
]
const guestOptions = [
  '2 Persons', '3 – 4 Persons', '5 – 6 Persons', '7 – 10 Persons', '10+ (Banquet Inquiry)',
]

export default function Reservations() {
  const [form, setForm] = useState({
    name: '',
    phone: '+998 ',
    date: '',
    time: '19:00',
    guests: '5 – 6 Persons',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const labelStyle = {
    fontFamily: 'Cinzel, serif',
  }
  const inputClass =
    'w-full bg-[#0e0e10] border border-yellow-600/25 rounded px-4 py-3 text-sm text-stone-100 placeholder-stone-600 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition'

  return (
    <section id="reservations" className="py-20 sm:py-28 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span
            className="text-xs uppercase tracking-[0.3em] text-yellow-400 block mb-3"
            style={labelStyle}
          >
            Your Evening Awaits
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Table Reservations
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-5" />
          <p className="text-stone-400 text-sm leading-relaxed">
            Reserve your table for lunch or dinner. For parties larger than 10 or bespoke private
            dining rooms, direct telephone inquiries are welcomed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-stretch">
          {/* Contact Card */}
          <div className="lg:col-span-5 bg-[#131315] rounded-lg p-6 sm:p-8 md:p-10 border border-yellow-500/25 flex flex-col justify-between">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3
                  className="text-xl sm:text-2xl text-white mb-1 font-medium"
                  style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                >
                  Abdulaziz Kafe
                </h3>
                <p className="text-xs text-yellow-400 tracking-widest uppercase" style={labelStyle}>
                  Yangiariq, Khorezm Region
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-stone-400 mb-1" style={labelStyle}>Location</h4>
                  <p className="text-sm text-stone-200 font-light leading-relaxed">
                    Yangiariq, Nalog ko'cha oxiri, Khorezm Region, Uzbekistan
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-stone-400 mb-1" style={labelStyle}>Direct Reservations</h4>
                  <a
                    href="tel:+998556016868"
                    className="text-2xl font-bold text-gold-gradient hover:opacity-90 transition-opacity block"
                    style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                  >
                    55 601 68 68
                  </a>
                  <p className="text-xs text-stone-400 mt-0.5">+998 55 601 68 68 (Voice & Telegram)</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                    <polyline points="12 6 12 12 16 14" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-stone-400 mb-1" style={labelStyle}>Hours of Service</h4>
                  <p className="text-sm text-stone-200 font-light">Monday – Sunday: 10:00 – 23:00</p>
                  <p className="text-xs text-yellow-400/80 mt-0.5">Continuous hot kitchen & mangal grill</p>
                </div>
              </div>
            </div>

            {/* VIP Badge */}
            <div className="mt-6 pt-5 border-t border-yellow-500/15">
              <div className="p-3 sm:p-4 rounded bg-[#0e0e10] border border-yellow-500/20 flex items-center justify-between text-xs">
                <span className="text-stone-400">VIP Halls & Private Banquet Halls</span>
                <span className="text-yellow-400 font-semibold uppercase tracking-wider" style={labelStyle}>Available</span>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="lg:col-span-7 bg-[#131315] rounded-lg p-6 sm:p-8 md:p-10 border border-yellow-500/25">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
                <h3
                  className="text-2xl text-white font-medium"
                  style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                >
                  Reservation Received!
                </h3>
                <p className="text-stone-400 text-sm max-w-sm">
                  Thank you, <span className="text-yellow-300 font-medium">{form.name}</span>. Our team will contact you at <span className="text-yellow-300">{form.phone}</span> to confirm your booking shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 border border-yellow-500/40 rounded text-yellow-400 text-xs uppercase tracking-wider hover:bg-yellow-500/10 transition cursor-pointer"
                  style={labelStyle}
                >
                  New Reservation
                </button>
              </div>
            ) : (
              <>
                <h3
                  className="text-xl sm:text-2xl text-white mb-2 font-medium"
                  style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                >
                  Request a Table
                </h3>
                <p className="text-xs text-stone-400 mb-6 sm:mb-8 font-light">
                  Fill in your reservation preferences. Our team will confirm your booking instantly.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-300 mb-2" style={labelStyle}>
                        Guest Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jasurbek Alimov"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-300 mb-2" style={labelStyle}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+998 90 123 45 67"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-300 mb-2" style={labelStyle}>
                        Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-300 mb-2" style={labelStyle}>
                        Time *
                      </label>
                      <select
                        value={form.time}
                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                        className={inputClass}
                      >
                        {timeOptions.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-300 mb-2" style={labelStyle}>
                        Guests
                      </label>
                      <select
                        value={form.guests}
                        onChange={(e) => setForm({ ...form, guests: e.target.value })}
                        className={inputClass}
                      >
                        {guestOptions.map((g) => (
                          <option key={g} value={g}>{g}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-300 mb-2" style={labelStyle}>
                      Culinary Preference & Special Requests
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about special dietary needs, table seating preferences (main hall or private VIP room), or advance dish pre-orders..."
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      className={inputClass + ' resize-none'}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 text-[#09090b] font-semibold tracking-widest uppercase text-xs hover:brightness-110 transition duration-200 shadow-lg shadow-yellow-500/20 cursor-pointer border-none"
                    style={labelStyle}
                  >
                    Confirm Reservation Inquiry
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
