const LOGO_URL =
  'https://instagram.ftas2-1.fna.fbcdn.net/v/t51.82787-19/645878776_17925923982239685_8188765961057178030_n.jpg?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=8xQMtg92z4QQ7kNvwEt0Msu&_nc_oc=Adp6UytcEnAT4lnQCY1fU9VelAo4Q7_s_OiW0qdVW9cm_vTksVl3Jt3El83LZWLm9sQ&_nc_zt=24&_nc_ht=instagram.ftas2-1.fna&_nc_gid=GQWN_2oCYw3y11IU7NZfyQ&_nc_ss=7baaf&oh=00_AQOr55wiIw8ATnHbFKoHUxPOot5R7iU8--2mC2feF5dk1Q&oe=6AC562C3'

const TG_BOT = 'https://t.me/abdullazizkafe_bot'

const footerLinks = [
  { label: 'Barcha Taomlar', href: '#signature-menu' },
  { label: 'Shashlik va Grill', href: '#signature-menu' },
  { label: 'Xorazm Milliy', href: '#signature-menu' },
  { label: 'Tovuq va Baliq', href: '#signature-menu' },
]

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#09090b] border-t border-yellow-500/20 pt-12 sm:pt-16 pb-8 sm:pb-12 text-stone-400 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-10 sm:mb-14">

          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <img
              src={LOGO_URL}
              alt="Abdulaziz Kafe"
              className="h-14 w-14 rounded-full object-cover border-2 border-yellow-500/50"
            />
            <p className="text-xs leading-relaxed font-light">
              Turk mangal san'ati, Yevropa klassikasi va o'zbek milliy taomlari —
              Yangiariq'ning markazida.
            </p>
            <div className="text-xs text-yellow-400" style={{ fontFamily: 'Cinzel, serif' }}>
              Yangiariq, Xorazm • O'zbekiston
            </div>
          </div>

          {/* Menu Links */}
          <div>
            <h5
              className="text-xs uppercase tracking-[0.2em] text-stone-200 mb-4 font-semibold"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Taomlar
            </h5>
            <ul className="space-y-2.5 text-xs">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="hover:text-yellow-400 transition-colors cursor-pointer bg-transparent border-none text-stone-400 p-0 text-left text-xs"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h5
              className="text-xs uppercase tracking-[0.2em] text-stone-200 mb-4 font-semibold"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Ish Vaqti
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <span className="text-stone-300 font-medium">Har kuni:</span> 10:00 – 23:00
              </li>
              <li>
                <span className="text-stone-300 font-medium">Buyurtma yakunlanishi:</span> 22:30
              </li>
              <li>
                <span className="text-stone-300 font-medium">VIP Xonalar:</span> Mavjud
              </li>
              <li>
                <span className="text-stone-300 font-medium">Banket:</span> 150 kishigacha
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h5
              className="text-xs uppercase tracking-[0.2em] text-stone-200 mb-4 font-semibold"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Bog'laning
            </h5>
            <p className="text-xs mb-3 font-light">
              Buyurtma, olib ketish va banket uchun:
            </p>
            <a
              href="tel:+998556016868"
              className="text-xl font-bold text-yellow-400 block mb-1 hover:text-yellow-500 transition-colors"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              55 601 68 68
            </a>
            <p className="text-xs mb-4">Yangiariq, Nalog ko'cha oxiri</p>
            <div className="flex items-center gap-3">
              {/* Telegram */}
              <a
                href={TG_BOT}
                target="_blank"
                rel="noopener noreferrer"
                title="Telegram Bot"
                className="w-9 h-9 rounded-full border border-yellow-500/30 flex items-center justify-center text-yellow-400 hover:bg-yellow-500 hover:text-[#09090b] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/abdulaziz_kafe_/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="w-9 h-9 rounded-full border border-yellow-500/30 flex items-center justify-center text-yellow-400 hover:bg-yellow-500 hover:text-[#09090b] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-3 text-center sm:text-left">
          <p>© 2025 Abdulaziz Kafe va Restoran. Barcha huquqlar himoyalangan. Yangiariq, O'zbekiston.</p>
          <p className="tracking-wider" style={{ fontFamily: 'Cinzel, serif' }}>
            O'zbek • Turk • Yevropa Oshxonasi
          </p>
        </div>
      </div>
    </footer>
  )
}
