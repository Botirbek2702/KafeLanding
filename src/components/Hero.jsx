import { useEffect, useRef } from 'react'

const TG_BOT = 'https://t.me/abdullazizkafe_bot'

export default function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8 // Bir oz tezlashtirilgan, lekin baribir silliq
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-yellow-600/15"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/Abdulaziz Kafeda barchangizni kutib qolamiz.mp4"
          autoPlay
          muted
          loop
          playsInline
          onEnded={(e) => {
            e.target.currentTime = 0;
            e.target.play();
          }}
          className="w-full h-full object-cover object-center"
        />
        {/* Global dark overlay to ensure white text is always readable */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Gradients that fade into the site background at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0e0e10] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24 text-center flex flex-col items-center">
        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-5 sm:mb-6 leading-tight"
          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          <span className="text-gold-gradient block">Abdulaziz Kafe</span>
        </h1>

        {/* Subtitle */}
        <p className="text-stone-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-8 sm:mb-10">
          Turk mangal san'ati, Yevropa klassikal oshxonasi va o'zbek milliy taomlarining
          uyg'unligi — har bir taomda lazzat mujassam.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xl mb-12 sm:mb-14">
          <a
            href={TG_BOT}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-[#09090b] font-bold tracking-wider uppercase text-xs hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/30"
            style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f5c842 50%, #b89428 100%)', fontFamily: 'Cinzel, serif' }}
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
            </svg>
            Buyurtma berish
          </a>
          <button
            onClick={() => document.querySelector('#signature-menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-yellow-500/60 bg-[#0e0e10]/60 text-yellow-300 font-medium tracking-wider uppercase text-xs hover:bg-yellow-500/10 hover:border-yellow-400 transition-all duration-200 backdrop-blur-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            Menyuni ko'rish
          </button>
        </div>

        {/* Info Strip */}
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-yellow-600/20 text-xs tracking-widest uppercase text-stone-300 relative z-10">
          <div className="flex items-center justify-center gap-2 py-1">
            <svg className="w-4 h-4 text-yellow-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
              <polyline points="12 6 12 12 16 14" strokeWidth="1.5" />
            </svg>
            <span style={{ fontFamily: 'Cinzel, serif' }}>Har kuni: 10:00 – 23:00</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-1 sm:border-x border-yellow-600/20">
            <svg className="w-4 h-4 text-yellow-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
            <span style={{ fontFamily: 'Cinzel, serif' }}>Yangiariq, Xorazm</span>
          </div>
          <div className="flex items-center justify-center gap-4 py-1">
            <a href="https://www.instagram.com/abdulaziz_kafe_/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-yellow-400 transition-colors" title="Instagram">
              <svg className="w-4 h-4 text-yellow-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span style={{ fontFamily: 'Cinzel, serif' }}>Instagram</span>
            </a>
            <span className="text-stone-600">|</span>
            <a href="tel:+998556016868" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
              <svg className="w-4 h-4 text-yellow-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
              <span style={{ fontFamily: 'Cinzel, serif' }}>55 601 68 68</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
