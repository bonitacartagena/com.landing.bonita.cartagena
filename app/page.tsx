import { Hero } from "@/components/hero"
import { CTAButtons } from "@/components/cta-buttons"
import { SocialLinks } from "@/components/social-links"
import { ImageStrip } from "@/components/image-strip"
import { ToursSection } from "@/components/tours-section"
import { ShortsVideoSection } from "@/components/shorts-video-section"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

const beforeToursImages = [
  {
    src: "/IMG_9943 (1).jpeg",
    alt: "Playa en Cartagena",
  },
  {
    src: "/IMG_5885.jpeg",
    alt: "Experiencia en Cartagena",
  },
  {
    src: "/017B7A3B-B756-4983-9878-78D8CD82C6BF.png",
    alt: "Palenqueras tradicionales en Cartagena",
  },
] as const

const afterToursImages = [
  {
    src: "/00FAE832-0BE7-43EE-B2F0-7283AC98AD6B (1).png",
    alt: "Cartagena cultural",
  },
  {
    src: "/81B641B0-501C-41B5-8E94-C09EBDAAAD7A (1).png",
    alt: "Vista iconica de Cartagena",
  },
  {
    src: "/IMG_9942 (1).jpeg",
    alt: "Experiencia turistica en Cartagena",
  },
] as const

const afterVideoImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5ACAE965-C2BA-45C8-8093-48B61A0A4685-KKgc3lPPfyxvF6kEiDY4xjVqj82hW3.jpeg",
    alt: "Grupo haciendo snorkel en las islas",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/66450248-ADE4-4458-8D7C-F8A4F49276CE-wZh7PS3LX0cEuiMCj8Zmr8pg39GJKN.jpeg",
    alt: "Familia disfrutando del Oceanario",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DEC8BEEB-92AF-4A1A-BAA0-E91529568A8B-9RUoE8cIJo9AmLjPbDPrEKzMyruT75.jpeg",
    alt: "Tour por los murales de Getsemani",
  },
] as const

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />

      <div className="py-8 md:py-12">
        <CTAButtons />
      </div>

      <SocialLinks />

      <ImageStrip images={beforeToursImages} className="py-8 md:py-12" />

      <ToursSection />

      <ImageStrip images={afterToursImages} className="pb-8 md:pb-12" />

      <ShortsVideoSection />

      <ImageStrip images={afterVideoImages} className="pb-8 md:pb-12" />

      <Testimonials />

      <Footer />

      <FloatingWhatsApp />
    </main>
  )
}
