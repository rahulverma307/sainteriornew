import Navbar from "@/components/layout/navbar"
import Hero from "@/components/home/Hero"
import About from "@/components/home/About"
import Services from "@/components/home/Services"
import Projects from "@/components/home/Projects"
import Process from "@/components/home/Process"
import WhyChoose from "@/components/home/WhyChoose"
import Testimonials from "@/components/home/Testimonials"
import FAQ from "@/components/home/FAQ"
import Contact from "@/components/home/Contact"
import Footer from "@/components/layout/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-foreground bg-background">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Process />
        <WhyChoose />
        {/* <Testimonials /> */}
        {/* <FAQ /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

