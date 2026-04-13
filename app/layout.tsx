import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: 'Bonita Cartagena | Tours y Pasadias a Islas del Caribe',
  description: 'Vive una experiencia inolvidable en las islas del Caribe colombiano. Tours a Bora Bora Beach Club, Volcan del Totumo, Nado con Delfines y mas. Reserva ahora por WhatsApp. RNT: 232342',
  keywords: ['tours cartagena', 'bora bora beach club', 'islas del rosario', 'pasadias cartagena', 'turismo cartagena', 'volcan totumo', 'nado con delfines'],
  openGraph: {
    title: 'Bonita Cartagena | Tours y Pasadias',
    description: 'Escapate al paraiso caribeno. Tours exclusivos a las mejores islas de Colombia.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
