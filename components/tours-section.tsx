"use client"

import { useEffect, useRef } from "react"

import { TourCard } from "./tour-card"

const tours = [
  {
    id: "5islas",
    title: "5 ISLAS VIP",
    description: "Vive una experiencia unica y completa con nuestro tour 5 Islas VIP! Realiza las actividades mas geniales e increibles durante tu viaje en las hermosas Islas del Rosario.",
    image: "/tour-5-islas-vip.jpeg",
    duration: "Tour de dia completo",
    includes: [
      "Recogida en zona hotelera",
      "Guia abordo",
      "Transporte en bote deportivo",
      "Actividad de snorkel",
      "Visita avioneta Pablo Escobar",
      "Almuerzo tipico (3 opciones)",
      "Plancton nocturno",
      "Snack incluido",
      "Retorno en bus climatizado",
      "Seguro de asistencia medica"
    ]
  },
  {
    id: "chiva",
    title: "CHIVA RUMBERA",
    description: "Visita los lugares mas emblematicos de Cartagena mientras te la pasas genial a bordo de nuestra increible chiva rumbera. Recorrido panoramico por Bocagrande, Laguito y la Bahia.",
    image: "/tour-chiva-rumbera.jpeg",
    duration: "2 horas (7-9 PM o 9-11 PM)",
    includes: [
      "Recorrido en Chiva Rumbera",
      "Ruta por Bocagrande y Laguito",
      "Torre del Reloj",
      "Castillo San Felipe",
      "India Catalina",
      "Muelle de los Pegasos",
      "Parada en Zapatos Viejos",
      "Letras de CARTAGENA",
      "Cover ingreso a discoteca"
    ]
  },
  {
    id: "getsemani",
    title: "TOUR GETSEMANI",
    description: "Recorre Getsemani, el barrio mas colorido de Cartagena y descubre su increible historia. Reconocido como el 4to mejor barrio del mundo por la revista Forbes.",
    image: "/tour-getsemani.jpeg",
    duration: "1-2 horas",
    includes: [
      "Guia local profesional",
      "Murales artisticos 📷🎨",
      "Calle de la Serpiente",
      "Plaza de la Trinidad",
      "Calle Lomba",
      "Callejon Angosto y Ancho",
      "Calle Tripita y Media",
      "Otras visitas especiales"
    ]
  },
  {
    id: "borabora",
    title: "BORA BORA BEACH CLUB",
    description: "Te mereces algo unico! Visita el mejor beach club de Cartagena y el Caribe. BORA BORA te espera con las mejores instalaciones y vistas al mar.",
    image: "/tour-bora-bora-beach-club.jpeg",
    duration: "Hasta las 3:00 PM",
    includes: [
      "Transporte en lancha deportiva",
      "Coctel de bienvenida 🍹🍸",
      "Cama de playa o asoleadora",
      "Almuerzo a la carta (12+ opciones)"
    ]
  }
]

const touristTripSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Tours Destacados — Bonita Cartagena',
  itemListElement: tours.map((tour, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'TouristTrip',
      name: tour.title,
      description: tour.description,
      url: `https://bonitacartagena.com/#${tour.id}`,
      provider: {
        '@type': 'LocalBusiness',
        name: 'Bonita Cartagena',
        telephone: '+573113410983',
      },
      touristType: 'Leisure',
      itinerary: {
        '@type': 'ItemList',
        itemListElement: tour.includes.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item,
        })),
      },
    },
  })),
}

export function ToursSection() {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carousel = carouselRef.current

    if (!carousel) {
      return
    }

    const mediaQuery = window.matchMedia("(max-width: 767px)")

    const startAutoplay = () => {
      if (!mediaQuery.matches) {
        return () => { }
      }

      const interval = window.setInterval(() => {
        const cards = Array.from(carousel.children) as HTMLElement[]

        if (cards.length === 0) {
          return
        }

        const currentIndex = cards.findIndex((card) => {
          const cardCenter = card.offsetLeft + card.offsetWidth / 2
          const viewportCenter = carousel.scrollLeft + carousel.clientWidth / 2

          return Math.abs(cardCenter - viewportCenter) < card.offsetWidth / 2
        })

        const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % cards.length : 0

        carousel.scrollTo({
          left: cards[nextIndex].offsetLeft,
          behavior: "smooth",
        })
      }, 3000)

      return () => window.clearInterval(interval)
    }

    let cleanup = startAutoplay()

    const handleChange = () => {
      cleanup()
      cleanup = startAutoplay()
    }

    mediaQuery.addEventListener("change", handleChange)

    return () => {
      cleanup()
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  return (
    <section id="tours" className="w-full py-8 md:py-16 px-4 md:px-8 lg:px-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }}
      />
      <h2 className="text-center text-2xl md:text-4xl font-bold text-foreground mb-8 md:mb-12">
        Tours Destacados
      </h2>
      <div
        ref={carouselRef}
        className="no-scrollbar mx-auto flex max-w-7xl snap-x snap-mandatory gap-6 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible lg:grid-cols-4"
      >
        {tours.map((tour) => (
          <div key={tour.id} className="min-w-[85vw] snap-center sm:min-w-[420px] md:min-w-0 md:snap-none">
            <TourCard {...tour} />
          </div>
        ))}
      </div>
    </section>
  )
}
