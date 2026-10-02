const INTERIOR_IMG =
  'https://lh3.googleusercontent.com/aida/AEtjO1XEogErEGi4ykSWR-qGYy3vgN8ZTDrx8oPNRni-9l_PIsTOpbdV-Kb1km05A0VeFE1WAz1CbactYfkW12T26I4u6PtgVr81ITlDhlVFbNEIZfdERff54JXjsuzzen8Pbf0duzQ50srUbOr9cOD6-BxkYqo3DxMw6B7S1k2wXhWMgzS763zQaOqc3WBDbCAPKi8U8zkC4t9lS0pPzXxZnE8CVMRz-TUhCRGv59kymleKyrefh3EHaysZjS9i'

const features = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
    title: 'Olovda va Tandir',
    desc: "Ko'mir mangal va loy tandirda pishirilgan taomlar — haqiqiy o'zbek va turk ta'mi.",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
    title: 'Tabiatdan Dasturxonga',
    desc: "Xorazm vohasidan keltirilgan organik mahsulotlar va sertifikatlangan halol go'sht.",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
    title: 'Maxfiy VIP Xonalar',
    desc: "Maxsus tadbirlar, oilaviy ziyofatlar va korporativ uchrashuv uchun alohida xonalar.",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V4a2 2 0 10-2 2h2zm0 13c-3 0-6-1.5-6-4.5V11a2 2 0 012-2h8a2 2 0 012 2v5.5c0 3-3 4.5-6 4.5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
    title: 'Maxsus Mehmondo\'stlik',
    desc: "To'ylar, yubiliylar va korporativ tadbirlar uchun individual yondashuv.",
  },
]

export default function Heritage() {
  return (
    <section
      id="heritage"
      className="py-20 sm:py-28 bg-[#0e0e10] border-t border-b border-yellow-600/15 relative transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Text Column */}
          <div className="space-y-6">
            <span
              className="text-xs uppercase tracking-[0.3em] text-yellow-400 block"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Oshxona San'ati
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Uch Lazzat:{' '}
              <br className="hidden sm:block" />
              <span className="text-gold-subtle italic">An'ana va Zamonaviylik</span>
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
              Xorazm viloyatining tarixi qalbida joylashgan{' '}
              <span className="text-yellow-300 font-medium">Abdulaziz Kafe</span>{' '}
              — qadimiy Ipak Yo'li vohasining loy qozoni an'analari, Istanbul'ning
              alangali mangallari va Yevropa oshpazlik mahorati birlashgan go'zal makon.
            </p>
            <p className="text-stone-400 text-sm leading-relaxed font-light">
              Oshpazlarimiz Amudaryo bo'yidagi bog'lardan yangi mahsulotlar, yuqori
              sifatli go'sht va O'rta Osiyo hamda O'rtayer dengizi bo'ylaridan
              yig'ilgan ziravorlardan foydalanib, xotirangizda qoluvchi taomlar tayyorlaydi.
            </p>

            {/* Feature Badges */}
            <div id="features" className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((feat) => (
                <div
                  key={feat.title}
                  className="p-4 rounded bg-[#131315]/80 border border-yellow-600/20 hover:border-yellow-500/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-400 mb-3">
                    {feat.icon}
                  </div>
                  <h4
                    className="text-stone-100 text-sm sm:text-base font-semibold mb-1"
                    style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                  >
                    {feat.title}
                  </h4>
                  <p className="text-xs text-stone-400 leading-normal">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <div className="absolute -inset-4 border border-yellow-500/30 rounded-xl transform -rotate-1 hidden sm:block pointer-events-none" />
            <div className="relative rounded-lg overflow-hidden gold-border-glow shadow-2xl">
              <img
                src={INTERIOR_IMG}
                alt="Abdulaziz Kafe ichki ko'rinishi"
                className="w-full h-72 sm:h-[420px] lg:h-[520px] object-cover object-center"
              />
              {/* Floating Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded bg-[#09090b]/90 border border-yellow-500/30 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-full bg-yellow-500 text-[#09090b] font-bold shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-white font-medium text-sm sm:text-base"
                      style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                    >
                      Shamsharakdagi Shom Kechalari
                    </p>
                    <p className="text-xs text-stone-400">
                      Oilaviy ziyofatlar, bayram kechalari va maxsus tadbirlar uchun.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
