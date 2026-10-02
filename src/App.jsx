import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import OrderBanner from './components/OrderBanner'
import Heritage from './components/Heritage'
import Footer from './components/Footer'
import FloatingOrder from './components/FloatingOrder'

export default function App() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <FloatingOrder />
      <div className="bg-[#0e0e10] text-stone-200 antialiased">
        <Navbar />
        <main>
          <Hero />
          <Menu />
          <OrderBanner />
          <Heritage />
        </main>
        <Footer />
      </div>
    </>
  )
}
