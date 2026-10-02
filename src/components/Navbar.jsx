import { useState, useEffect } from 'react'

const LOGO_URL =
  'https://instagram.ftas2-1.fna.fbcdn.net/v/t51.82787-19/645878776_17925923982239685_8188765961057178030_n.jpg?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=8xQMtg92z4QQ7kNvwEt0Msu&_nc_oc=Adp6UytcEnAT4lnQCY1fU9VelAo4Q7_s_OiW0qdVW9cm_vTksVl3Jt3El83LZWLm9sQ&_nc_zt=24&_nc_ht=instagram.ftas2-1.fna&_nc_gid=GQWN_2oCYw3y11IU7NZfyQ&_nc_ss=7baaf&oh=00_AQOr55wiIw8ATnHbFKoHUxPOot5R7iU8--2mC2feF5dk1Q&oe=6AC562C3'

const navLinks = [
  { label: 'Bosh sahifa', href: '#hero' },
  { label: 'Menyu', href: '#signature-menu' },
  { label: 'Biz haqimizda', href: '#heritage' },
  { label: 'Atmosfera', href: '#features' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setIsOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-yellow-600/15 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0e0e10]/95 backdrop-blur-lg shadow-lg shadow-black/30'
          : 'bg-[#0e0e10]/85 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
          <img
            src={LOGO_URL}
            alt="Abdulaziz Kafe"
            className="h-12 w-12 rounded-full object-cover border-2 border-yellow-500/50 transition-transform duration-300 group-hover:scale-105"
          />
          <span
            className="hidden sm:block text-sm font-semibold text-stone-100 tracking-wide"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Abdulaziz Kafe
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-xs font-medium uppercase tracking-[0.2em] text-stone-300 hover:text-yellow-400 transition-colors duration-200 cursor-pointer bg-transparent border-none"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/abdulaziz_kafe_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full border border-yellow-600/40 text-yellow-400 hover:bg-yellow-500 hover:text-[#0e0e10] transition-all duration-300"
            aria-label="Instagram"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          {/* CTA Phone */}
          <a
            href="tel:+998556016868"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-yellow-400 border border-yellow-600/40 rounded-full hover:bg-yellow-500 hover:text-[#0e0e10] transition-all duration-300"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            55 601 68 68
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menyuni ochish"
          >
            <span className={`menu-line ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`menu-line ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`menu-line ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 border-t border-yellow-600/20 bg-[#0e0e10]/98 backdrop-blur-xl ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium uppercase tracking-[0.2em] text-stone-300 hover:text-yellow-400 transition-colors py-3 border-b border-yellow-600/10 text-left cursor-pointer bg-transparent border-x-0 border-t-0 last:border-b-0"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+998556016868"
            className="mt-5 flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-[#0e0e10] bg-yellow-500 rounded-full hover:bg-yellow-400 transition-all"
            onClick={() => setIsOpen(false)}
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Qo'ng'iroq: 55 601 68 68
          </a>
        </nav>
      </div>
    </header>
  )
}
