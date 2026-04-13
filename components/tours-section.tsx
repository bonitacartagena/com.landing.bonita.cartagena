import { TourCard } from "./tour-card"

const tours = [
  {
    id: "5islas",
    title: "5 ISLAS VIP",
    description: "Vive una experiencia unica y completa con nuestro tour 5 Islas VIP! Realiza las actividades mas geniales e increibles durante tu viaje en las hermosas Islas del Rosario.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-21%20at%2011.10.17%20AM-GQ16lAynhygnKVhJskOZm6W483HPkX.jpeg",
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
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-21%20at%2011.10.17%20AM%20%281%29-Rdp8ifaZUbMyvIAbbCjcOqMY4fNdOk.jpeg",
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
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-21%20at%2011.11.55%20AM-gyg0EnbNSUcdSVpnW4DIW7lMpoGhrH.jpeg",
    duration: "2-3 horas",
    includes: [
      "Guia local profesional",
      "Murales artisticos",
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
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-21%20at%2011.10.17%20AM%20%282%29-SkLxUqwxZ6Hf4A7eStyH6SkizC7fPb.jpeg",
    duration: "Tour de dia completo",
    includes: [
      "Transporte en lancha deportiva",
      "Coctel de bienvenida",
      "Cama de playa o asoleadora",
      "Almuerzo a la carta (12+ opciones)"
    ]
  }
]

export function ToursSection() {
  return (
    <section id="tours" className="w-full py-8 md:py-16 px-4 md:px-8 lg:px-16">
      <h2 className="text-center text-2xl md:text-4xl font-bold text-foreground mb-8 md:mb-12">
        Tours Destacados
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
        {tours.map((tour) => (
          <TourCard key={tour.id} {...tour} />
        ))}
      </div>
    </section>
  )
}
