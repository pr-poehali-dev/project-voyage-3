import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { ServicesSection } from "@/components/ServicesSection"
import { AboutSection } from "@/components/AboutSection"
import { ProcessSection } from "@/components/ProcessSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { PortfolioSection } from "@/components/PortfolioSection"
import { ContactBanner } from "@/components/PricingSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <TestimonialsSection />
      <PortfolioSection />
      <ContactBanner />
      <ContactSection />
      <Footer />
    </main>
  )
}