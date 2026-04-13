import { Hero } from "@/components/hero"
import { CTAButtons } from "@/components/cta-buttons"
import { SocialLinks } from "@/components/social-links"
import { ImageStrip } from "@/components/image-strip"
import { ToursSection } from "@/components/tours-section"
import { ShortsVideoSection } from "@/components/shorts-video-section"
import { Testimonials } from "@/components/testimonials"
import { TestimonialPhotoSlider } from "@/components/testimonial-photo-slider"
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
    src: "/IMG_2549.jpeg",
    alt: "Pareja disfrutando una parada junto al mar durante un tour en Cartagena",
  },
  {
    src: "/0676FCE8-A742-4209-BF2F-0D00D95B93A2.jpeg",
    alt: "Pareja disfrutando la playa en Cartagena",
  },
  {
    src: "/IMG_8720.jpeg",
    alt: "Viajeros disfrutando una experiencia de playa en las Islas del Rosario",
  },
  {
    src: "/IMG_8715.jpeg",
    alt: "Grupo de turistas haciendo snorkel en aguas cristalinas en Cartagena",
  },
  {
    src: "/IMG_8714.jpeg",
    alt: "Pareja disfrutando un dia de playa en Cartagena",
  },
  {
    src: "/IMG_8711.jpeg",
    alt: "Familia viviendo una experiencia de snorkel en Cartagena",
  },
  {
    src: "/IMG_8710.jpeg",
    alt: "Grupo de amigos posando durante un tour en bote por Cartagena",
  },
  {
    src: "/F59CEA04-4B84-433D-802F-F803E8781970.jpeg",
    alt: "Visitantes compartiendo un momento en beach club en Cartagena",
  },
  {
    src: "/F24C4B02-9B90-4D3C-B33B-D56D49C7E1D0.jpeg",
    alt: "Viajeros disfrutando la piscina de un beach club en Cartagena",
  },
  {
    src: "/DDD7A1DC-7A1E-40A2-93E4-C3490E240A27.jpeg",
    alt: "Grupo de amigos frente al mar turquesa en las Islas del Rosario",
  },
  {
    src: "/471093FE-565D-4D19-AB30-2217079F3226.jpeg",
    alt: "Grupo de viajeras en el ingreso de un beach club en Cartagena",
  },
  {
    src: "/138950D4-DCD0-45BA-A552-DF9C9E5B2F27.jpeg",
    alt: "Viajeras posando frente al mar durante un tour por Cartagena",
  },
  {
    src: "/81605B92-3435-4A0B-8FF0-D76D623B2D30.jpeg",
    alt: "Pareja disfrutando de un beach club en Cartagena",
  },
  {
    src: "/1702A55E-76FE-478F-92C8-C231A6DA2C3B.jpeg",
    alt: "Viajeras disfrutando una parada frente al mar en Cartagena",
  },
  {
    src: "/454D1A8A-D090-4F33-AA5E-311756EC9940.jpeg",
    alt: "Familia haciendo snorkel en aguas cristalinas de Cartagena",
  },
  {
    src: "/43FAFA4A-9372-4891-BFC6-072615F50C15.jpeg",
    alt: "Grupo de amigas haciendo snorkel en Cartagena",
  },
  {
    src: "/5B12063B-10C8-44BB-86FA-5E017EE9CF11.jpeg",
    alt: "Familia disfrutando del mar durante una actividad de snorkel",
  },
  {
    src: "/5ACAE965-C2BA-45C8-8093-48B61A0A4685.jpeg",
    alt: "Pareja haciendo snorkel en aguas transparentes en Cartagena",
  },
  {
    src: "/4F456C16-6E5C-4317-8949-33BE4899C314.jpeg",
    alt: "Grupo de viajeros sonriendo durante una experiencia de snorkel en Cartagena",
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


      <TestimonialPhotoSlider images={afterVideoImages} className="pb-8 md:pb-12" />

      <Testimonials />

      <Footer />

      <FloatingWhatsApp />
    </main>
  )
}
