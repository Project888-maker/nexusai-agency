import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Services from '../components/Services'
import Stats from '../components/Stats'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import About from '../components/About'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="bg-navy min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Stats />
      <Process />
      <Testimonials />
      <Pricing />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}