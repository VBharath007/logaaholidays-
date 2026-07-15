import { AtSign, Compass, Globe, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'Destinations',
    links: [
      { label: 'Kerala', href: '/destination/kerala/kerala-tourism' },
      { label: 'Madurai', href: '/destination/tamilnadu/madurai-tourism' },
      { label: 'Shirdi', href: '/tour-packages/shirdi-tours' },
      { label: 'Varanasi', href: '/tour-packages/varanasi-tours' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Services', href: '/services' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Contact', href: '/contact-us' }
    ]
  },
  {
    title: 'Support',
    links: [
      { label: 'Flight Booking', href: '/services/flight-booking' },
      { label: 'Travel Insurance', href: '/services/travel-insurance-service' },
      { label: 'Visa Services', href: '/services/passport-visa-service' }
    ]
  },
]

export function Footer() {
  return (
    <footer className="px-4 md:px-8 pb-8 pt-16 bg-[var(--color-bg-luxury)] relative z-10">
      <div className="mx-auto max-w-7xl clay-card-dark bg-gradient-to-br from-[var(--color-primary-forest)] to-[var(--color-blue-ocean)] text-white rounded-[4rem] p-16 md:p-24 relative overflow-hidden">

        <div className="relative z-10 grid gap-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center">
              <img src="/logo.png" alt="Logaa Holiday" className="h-16 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="mt-8 max-w-sm text-base text-[var(--color-blue-aqua)] leading-relaxed font-medium opacity-80">
              Cinematic, handcrafted journeys across the world's most unforgettable landscapes.
            </p>
            <div className="mt-10 flex gap-5">
              <a href="mailto:Logaaholidays@gmail.com" aria-label="Email us" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[var(--color-primary-forest)] transition-all backdrop-blur-sm">
                <AtSign className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Chat with us" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[var(--color-primary-forest)] transition-all backdrop-blur-sm">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Our website" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[var(--color-primary-forest)] transition-all backdrop-blur-sm">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-bold uppercase tracking-widest text-white/90 mb-6">{column.title}</h4>
              <ul className="flex flex-col gap-4 text-sm font-medium">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-white/80 transition-colors hover:text-white relative group">
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-accent-gold)] transition-all group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/20 pt-8 text-xs font-bold text-white/60 sm:flex-row sm:items-center sm:justify-between relative z-10">
          <span>&copy; {new Date().getFullYear()} Logaa Holiday. All rights reserved.</span>
          <span>Crafted for travelers who want more than a checklist.</span>
        </div>
      </div>
    </footer>
  )
}
