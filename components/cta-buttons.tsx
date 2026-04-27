import { Palmtree, Star, MessageCircle, ShoppingBag } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/573113410983"
const TOURS_CATALOG_URL = "https://wa.me/c/573113410983"
const ISLAS_PRIVADAS_URL = "https://drive.google.com/file/d/1s9Gsx8_zXhJw_I2Y8jdCknhRxkDQdR97/view?usp=sharing"
const ENGLISH_CATALOG_URL = "https://drive.google.com/file/d/1Zxn4_B4cH9e-SstHSw7sxnc8KwWSwWuJ/view?usp=sharing"
const PORTUGUESE_CATALOG_URL = "https://drive.google.com/file/d/1jbEgGi-b-FPpv5z-uoXwuaExKj2ZNIIS/view?usp=sharing"

export function CTAButtons() {
  return (
    <section className="relative z-0 w-full max-w-sm md:max-w-4xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:flex-wrap gap-3 md:gap-4 md:justify-center">
        <a
          href={TOURS_CATALOG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-500 hover:to-emerald-600 text-white font-semibold py-4 px-6 md:px-8 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-teal-500/30 md:min-w-[200px]"
        >
          <span className="text-lg">Tours | Pasadias</span>
          <Palmtree className="w-6 h-6" />
        </a>

        <a
          href={ISLAS_PRIVADAS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-500 hover:to-emerald-600 text-white font-semibold py-4 px-6 md:px-8 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-teal-500/30 md:min-w-[200px]"
        >
          <span className="text-lg">Islas Privadas</span>
          <Star className="w-6 h-6 fill-current" />
        </a>

        <a
          href={ENGLISH_CATALOG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-500 hover:to-emerald-600 text-white font-semibold py-4 px-6 md:px-8 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-teal-500/30 md:min-w-[200px]"
        >
          <span className="text-lg">English Catalog</span>
          <ShoppingBag className="w-6 h-6" />
        </a>

        <a
          href={PORTUGUESE_CATALOG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-500 hover:to-emerald-600 text-white font-semibold py-4 px-6 md:px-8 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-teal-500/30 md:min-w-[200px]"
        >
          <span className="text-lg">Catálogo do Passeios</span>
          <ShoppingBag className="w-6 h-6" />
        </a>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-500 hover:to-emerald-600 text-white font-semibold py-4 px-6 md:px-8 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-teal-500/30 md:min-w-[200px]"
        >
          <span className="text-lg">Nuestro Whatsapp</span>
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </section>
  )
}
