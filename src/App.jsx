import './App.css'
import Ticker from './components/Ticker'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import HowToOrder from './components/HowToOrder'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Ticker />
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <HowToOrder />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
