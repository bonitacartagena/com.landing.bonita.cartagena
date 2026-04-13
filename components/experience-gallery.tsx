"use client"

import Image from "next/image"

const experiences = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5ACAE965-C2BA-45C8-8093-48B61A0A4685-KKgc3lPPfyxvF6kEiDY4xjVqj82hW3.jpeg",
    alt: "Grupo haciendo snorkel en las islas",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8714-WKTbquNHY4kNyfHFLOXtd7baMGVKsf.jpeg",
    alt: "Turistas disfrutando del snorkel",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5F976797-4747-4B96-AB2A-044B4EF2BB9B-Qt4Pi3ZtZXw0kMnPtJmqTfTZ4jjqZ9.jpeg",
    alt: "Amigas en el mar cristalino",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/66450248-ADE4-4458-8D7C-F8A4F49276CE-wZh7PS3LX0cEuiMCj8Zmr8pg39GJKN.jpeg",
    alt: "Familia en el Oceanario Islas del Rosario",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DDD7A1DC-7A1E-40A2-93E4-C3490E240A27-HniIQpOJZMqIhBp1oU7lCcaRzpBYUp.jpeg",
    alt: "Amigas en la playa turquesa",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/F59CEA04-4B84-433D-802F-F803E8781970-deOjo5qOvAnlGcOY4XcCTz2uJKT1m5.jpeg",
    alt: "Turistas en las islas del Rosario",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DEC8BEEB-92AF-4A1A-BAA0-E91529568A8B-9RUoE8cIJo9AmLjPbDPrEKzMyruT75.jpeg",
    alt: "Tour por los murales de Getsemani",
  },
]

export function ExperienceGallery() {
  return (
    <section className="w-full py-6 md:py-12">
      <h2 className="text-center text-xl md:text-3xl font-bold text-foreground mb-4 md:mb-8">
        Vive la Experiencia
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-1 md:gap-2 md:px-4 lg:px-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative aspect-square overflow-hidden md:rounded-lg group">
            <Image
              src={exp.src}
              alt={exp.alt}
              fill
              className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </section>
  )
}
