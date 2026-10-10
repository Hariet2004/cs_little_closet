import './App.css'
import Ticker from './components/Ticker'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import HowToOrder from './components/HowToOrder'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingDoll from './components/FloatingDoll'

export default function App() {
  return (
    <>
      <FloatingDoll />
      <Ticker />
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <HowToOrder />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
