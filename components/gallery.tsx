"use client"

import Image from "next/image"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9880-ooCl3SSoVLM3AtaocymMElMaF2wibf.jpeg",
    alt: "Mariposas amarillas - Arte de Gabriel Garcia Marquez",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/81B641B0-501C-41B5-8E94-C09EBDAAAD7A-DEW0VF9bgOxqnnLJQA4zKcIrJLlnjq.png",
    alt: "Castillo San Felipe de Barajas - Vista aerea",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9925-k7uGipdIDTFU17j99YrzmsMMYbel8a.jpeg",
    alt: "Escultura de la palenquera - Arte de Cartagena",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/017B7A3B-B756-4983-9878-78D8CD82C6BF-WpR3qGT9YXbV7jPQgY1T65ZHsnrTMB.png",
    alt: "Flamingos en el manglar",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9943-19dkocLnYBqOrT0aMjA1K7tdOswP6I.jpeg",
    alt: "Paseo en bote por aguas cristalinas",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/00FAE832-0BE7-43EE-B2F0-7283AC98AD6B-v6hceX6Hum9dPBAVBLXe54tf8Ql1VS.png",
    alt: "Nado con delfines",
  },
]

export function Gallery() {
  return (
    <section className="w-full py-6 md:py-12">
      <h2 className="text-center text-xl md:text-3xl font-bold text-foreground mb-4 md:mb-8">
        Descubre Cartagena
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-1 md:gap-2 md:px-4 lg:px-8">
        {galleryImages.map((image, index) => (
          <div key={index} className="relative aspect-square overflow-hidden md:rounded-lg">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
