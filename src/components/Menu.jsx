import { useState } from 'react'

const TG_BOT = 'https://t.me/abdullazizkafe_bot'

const categories = [
  'Barcha Taomlar',
  'Shashlik va Grill',
  'Xorazm Milliy',
  'Tovuq va Baliq',
]

const dishes = [
  { id: 1, title: 'Dumba shashlik', category: 'Shashlik va Grill', badge: 'Grill', tag: "Ko'mirda", desc: "Maxsus marinadlangan dumba shashlik, ko'mir olovida pishirilgan.", price: '', img: '/Dumba shashlik.png' },
  { id: 2, title: "G'ijduvon shashlik", category: 'Shashlik va Grill', badge: 'Grill', tag: 'Mashhur', desc: "Haqiqiy G'ijduvon uslubida tayyorlangan sersuv qiyma shashlik.", price: '', img: '/Gijduvon shashlik.png' },
  { id: 3, title: 'Ijjan shashlik', category: 'Shashlik va Grill', badge: 'Xorazm', tag: 'Maxsus', desc: "Xorazmning mashhur ijjan shashligi.", price: '', img: '/Ijjan shashlik.png' },
  { id: 4, title: 'Jigar shashlik', category: 'Shashlik va Grill', badge: 'Grill', tag: "Ko'mirda", desc: "Yumshoq pishgan jigar shashlik dumba bilan.", price: '', img: '/Jigar shashlik.png' },
  { id: 5, title: 'Kareyka', category: 'Shashlik va Grill', badge: 'Grill', tag: 'Premium', desc: "Yumshoq qo'y go'shtidan tayyorlangan kareyka kabobi.", price: '', img: '/Kareyka.png' },
  { id: 6, title: 'Mangal assorti', category: 'Shashlik va Grill', badge: 'Assorti', tag: "To'yimli", desc: "Turli xil shashliklar jamlanmasi, katta davralar uchun.", price: '', img: '/Mangal assorti.png' },
  { id: 7, title: 'Qozon kabob', category: 'Shashlik va Grill', badge: 'Milliy', tag: "Go'shtli", desc: "Qozonda qovurilgan lahm go'sht va kartoshka.", price: '', img: '/Qazon kabob.png' },

  { id: 8, title: 'Kadi barak', category: 'Xorazm Milliy', badge: 'Xorazm', tag: 'Milliy', desc: "Qovoqli maxsus xorazmcha barak.", price: '', img: '/Kadi barak.png' },
  { id: 9, title: 'Tuxum barak', category: 'Xorazm Milliy', badge: 'Xorazm', tag: 'Mashhur', desc: "Xorazmning o'ziga xos tuxum baragi.", price: '', img: '/Tuxum barak.png' },
  { id: 10, title: 'Un oshi', category: 'Xorazm Milliy', badge: 'Xorazm', tag: 'Milliy', desc: "Xorazmcha an'anaviy un oshi.", price: '', img: '/Unashi.png' },
  
  { id: 11, title: 'Qorin tuyoq', category: 'Xorazm Milliy', badge: 'Milliy', tag: 'Lazzatli', desc: "Qorin va tuyoqdan tayyorlangan maxsus taom.", price: '', img: '/Qarin tuyoq.png' },
  { id: 12, title: 'Qo\'y qusqavoy', category: 'Xorazm Milliy', badge: 'Milliy', tag: 'Maxsus', desc: "Qo'y go'shtidan lazzatli an'anaviy taom.", price: '', img: '/Qoy qusqavoy.png' },
  { id: 13, title: 'Tushonka', category: 'Xorazm Milliy', badge: 'Milliy', tag: 'Mazali', desc: "Uzoq vaqt dimlab pishirilgan yumshoq go'sht.", price: '', img: '/Tushonka.png' },
  
  { id: 14, title: 'Sariyog\'da tovuq', category: 'Tovuq va Baliq', badge: 'Tovuq', tag: 'Yumshoq', desc: "Sariyog'da qizartirib pishirilgan tovuq go'shti.", price: '', img: '/Saryog\'a tovuq.png' },
  { id: 15, title: 'Tandirda tovuq', category: 'Tovuq va Baliq', badge: 'Tovuq', tag: 'Tandir', desc: "Tandirda o'z bug'ida pishgan tovuq.", price: '', img: '/Tandira tovuq.png' },
  { id: 16, title: 'Setka baliq', category: 'Tovuq va Baliq', badge: 'Baliq', tag: 'Grill', desc: "Maxsus to'rda ko'mir olovida pishirilgan baliq.", price: '', img: '/Setka baliq.png' },
]

function DishCard({ dish }) {
  return (
    <article className="bg-[#131315] rounded-lg overflow-hidden border border-yellow-600/20 hover:border-yellow-500/50 transition-all duration-300 group flex flex-col">
      <div className="relative h-60 sm:h-72 overflow-hidden flex items-center justify-center">
        <img
          src={dish.img}
          alt={dish.title}
          className="w-full h-full object-cover scale-[1.35] group-hover:scale-[1.45] transition-transform duration-700"
        />
      </div>
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3
          className="text-xl sm:text-2xl text-white font-medium group-hover:text-yellow-300 transition-colors mb-3"
          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          {dish.title}
        </h3>
        <p className="text-stone-400 text-xs leading-relaxed font-light flex-1">
          {dish.desc}
        </p>
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-yellow-600/10">
          <span
            className="text-yellow-400 font-semibold text-lg tracking-wider"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            {dish.price ? (
              <>{dish.price} <span className="text-xs text-stone-400">UZS</span></>
            ) : (
              <span className="text-sm">Menyudan ko'ring</span>
            )}
          </span>
          <a
            href={TG_BOT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider border border-yellow-500/40 rounded text-stone-200 hover:bg-yellow-500 hover:text-[#09090b] hover:border-yellow-500 transition-colors"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            <svg className="w-3 h-3 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
            </svg>
            Buyurtma
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('Barcha Taomlar')

  const filtered =
    activeCategory === 'Barcha Taomlar'
      ? dishes
      : dishes.filter((d) => d.category === activeCategory)

  return (
    <section id="signature-menu" className="py-20 sm:py-28 bg-[#09090b] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span
            className="text-xs uppercase tracking-[0.3em] text-yellow-400 block mb-3"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Premium Taomlar
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight mb-5"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Maxsus Taomlarimiz
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-5" />
          <p className="text-stone-400 text-sm md:text-base leading-relaxed">
            Har bir taom avloddan-avlodga o'tib kelgan milliy an'analar va
            zamonaviy oshpazlik mahoratining uyg'unligi.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 sm:gap-3 mb-10 sm:mb-16 overflow-x-auto pb-2 sm:justify-center scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 text-xs whitespace-nowrap rounded-full transition-all cursor-pointer border ${
                activeCategory === cat
                  ? 'bg-yellow-500 text-[#09090b] font-semibold border-yellow-500 shadow-md'
                  : 'bg-[#131315] text-stone-300 border-yellow-600/20 hover:border-yellow-400 hover:text-yellow-400'
              }`}
              style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.1em' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.length > 0 ? (
            filtered.map((dish) => <DishCard key={dish.id} dish={dish} />)
          ) : (
            <div className="col-span-full text-center py-16 text-stone-400 text-sm">
              Bu kategoriyada taomlar tez orada qo'shiladi...
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
