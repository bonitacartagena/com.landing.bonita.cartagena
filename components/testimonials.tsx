"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria Garcia",
    location: "Bogota, Colombia",
    rating: 5,
    text: "Increible experiencia! El tour a Bora Bora fue espectacular. Todo muy bien organizado y el servicio excelente. 100% recomendado!",
    avatar: "M"
  },
  {
    name: "Carlos Rodriguez",
    location: "Medellin, Colombia", 
    rating: 5,
    text: "El volcan del Totumo fue una experiencia unica. El lodo deja la piel increible y el equipo de Bonita Cartagena nos hizo sentir muy bien atendidos.",
    avatar: "C"
  },
  {
    name: "Ana Martinez",
    location: "Ciudad de Mexico",
    rating: 5,
    text: "Nadar con delfines fue un sueno hecho realidad! Gracias Bonita Cartagena por hacer de nuestras vacaciones algo inolvidable.",
    avatar: "A"
  },
  {
    name: "Juan Pablo Mendez",
    location: "Buenos Aires, Argentina",
    rating: 5,
    text: "Las islas son un paraiso! El servicio fue de primera desde la reserva por WhatsApp hasta el regreso. Volvere pronto!",
    avatar: "J"
  }
]

export function Testimonials() {
  return (
    <section className="w-full py-8 md:py-16 px-4 md:px-8 lg:px-16 bg-secondary/30">
      <h2 className="text-center text-2xl md:text-4xl font-bold text-foreground mb-6 md:mb-12">
        Lo Que Dicen Nuestros Viajeros
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-card backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-border/50 hover:border-amber-400/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
                {testimonial.avatar}
              </div>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm">{testimonial.location}</p>
              </div>
            </div>
            <div className="flex gap-1 mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-foreground/90 text-sm leading-relaxed">
              {`"${testimonial.text}"`}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
