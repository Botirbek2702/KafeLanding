const TG_BOT = 'https://t.me/abdullazizkafe_bot'

export default function FloatingOrder() {
  return (
    <a
      href={TG_BOT}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-4 sm:right-6 z-50 flex items-center gap-2.5 px-4 sm:px-5 py-3 sm:py-3.5 rounded-full shadow-2xl shadow-yellow-500/30 transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/50 group"
      style={{
        background: 'linear-gradient(135deg, #d4af37 0%, #f5c842 50%, #b89428 100%)',
      }}
    >
      {/* Telegram icon */}
      <svg
        className="w-5 h-5 text-[#09090b] fill-current shrink-0"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
      </svg>
      <span
        className="text-[#09090b] font-bold text-xs sm:text-sm uppercase tracking-wider"
        style={{ fontFamily: 'Cinzel, serif' }}
      >
        Buyurtma berish
      </span>
      {/* Ping animation */}
      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400 border-2 border-[#09090b]">
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
      </span>
    </a>
  )
}
