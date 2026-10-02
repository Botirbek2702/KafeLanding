const TG_BOT = 'https://t.me/abdullazizkafe_bot'

export default function OrderBanner() {
  return (
    <section
      className="py-14 sm:py-16 relative overflow-hidden border-t border-b border-yellow-600/20 bg-[#1b1500]/80 transition-colors duration-300"
    >
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(ellipse, #d4af37 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-5 sm:mb-6">
          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-400 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
          </svg>
        </div>

        <span
          className="text-xs uppercase tracking-[0.3em] text-yellow-400 block mb-3"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          Online Buyurtma
        </span>
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight"
          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          Telegram orqali buyurtma bering —{' '}
          <span className="text-gold-gradient">tez va oson!</span>
        </h2>
        <p className="text-stone-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
          Bizning Telegram botimizga o'ting, menyuni ko'ring va bir necha daqiqada
          buyurtma bering. Olib ketish yoki stolga xizmat — siz tanlaysiz!
        </p>

        {/* CTA */}
        <a
          href={TG_BOT}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full text-[#09090b] font-bold uppercase tracking-widest text-sm hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-xl shadow-yellow-500/25"
          style={{
            background: 'linear-gradient(135deg, #d4af37 0%, #f5c842 50%, #b89428 100%)',
            fontFamily: 'Cinzel, serif',
          }}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
          </svg>
          Botga o'tish — @abdullazizkafe_bot
        </a>

        {/* Sub info */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs text-stone-500">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
            Bot doim ishlaydi — 24/7
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 inline-block" />
            To'liq menyu botda mavjud
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
            Tezkor javob kafolatlangan
          </span>
        </div>
      </div>
    </section>
  )
}
