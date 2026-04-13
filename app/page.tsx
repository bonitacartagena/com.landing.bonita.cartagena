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
    src: "/playa-cartagena-tropical.jpeg",
    alt: "Playa tropical de aguas cristalinas en Cartagena de Indias",
  },
  {
    src: "/experiencia-turistica-cartagena.jpeg",
    alt: "Turistas disfrutando una experiencia inolvidable en el Caribe colombiano",
  },
  {
    src: "/palenqueras-tradicionales-cartagena.png",
    alt: "Palenqueras con trajes tradicionales y frutas tipicas en el centro historico de Cartagena",
  },
] as const

const afterToursImages = [
  {
    src: "/cartagena-cultura-caribe.png",
    alt: "Cultura y arte del Caribe colombiano en Cartagena de Indias",
  },
  {
    src: "/vista-iconica-cartagena.png",
    alt: "Vista iconica de la muralla y bahia de Cartagena de Indias",
  },
  {
    src: "/experiencia-cartagena-2.jpeg",
    alt: "Visitantes explorando los atractivos turisticos de Cartagena",
  },
] as const

const afterVideoImages = [
  {
    src: "/snorkel-islas-cartagena.jpeg",
    alt: "Grupo de turistas haciendo snorkel en las aguas turquesas de las Islas del Rosario",
  },
  {
    src: "/familia-oceanario-cartagena.jpeg",
    alt: "Familia disfrutando del Oceanario en las Islas del Rosario, Cartagena",
  },
  {
    src: "/tour-murales-getsemani.jpeg",
    alt: "Tour por los famosos murales del barrio Getsemani, Cartagena",
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
