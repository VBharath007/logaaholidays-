import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Star, ShieldCheck, Heart, MapPin, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'

const TornPaperBottom = () => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20" style={{ transform: 'translateY(1px)' }}>
    <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[70px] rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,0V46.29c47.79,22.2,103.59,32.15,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-[var(--color-bg-luxury)]"></path>
      <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-[var(--color-bg-luxury)]"></path>
      <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-[var(--color-bg-luxury)]"></path>
    </svg>
  </div>
)



const featured = {
  name: 'Loganathan',
  location: 'Madurai, Tamil Nadu',
  quote: 'Logaa Holidays provided the most unforgettable pilgrimage experience for our entire family. The Shirdi trip was flawlessly organized — from the flight tickets to hotel, darshan slots, and cab arrangements. Everything was perfectly handled. I highly recommend Logaa Holidays for anyone planning a spiritual journey!',
}

export function TestimonialsPage() {
  const widgetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!widgetRef.current) return

    widgetRef.current.innerHTML = ''
    const script = document.createElement('script')
    script.src = 'https://cdn.trustindex.io/loader.js?12dd60a795cd35829506b31ef5b'
    script.defer = true
    script.async = true
    widgetRef.current.appendChild(script)

    return () => {
      if (widgetRef.current) {
        widgetRef.current.innerHTML = ''
      }
    }
  }, [])

  return (
    <div className="bg-[var(--color-bg-luxury)] min-h-screen">

      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex overflow-hidden">
        {/* Ooty background image */}
        <div className="absolute inset-0 z-0">
          <img loading="lazy" src="/assets/otty/otty1.avif" alt="Ooty" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-blue-ocean)]/90 via-[var(--color-blue-ocean)]/70 to-[var(--color-accent-gold)]/80" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col justify-center h-full pt-20">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display italic text-2xl text-white/90 mb-2">Our Community</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-bold font-display italic tracking-wider text-white mb-6">
            What Our <br /> Clients Say
          </motion.h1>
        </div>
        <TornPaperBottom />
      </section>

      {/* 2. FEATURED TESTIMONIAL */}
      <section className="pt-10 pb-8 px-6 text-center max-w-5xl mx-auto relative z-20">
        <h3 className="text-[var(--color-neutral-medium)] font-bold uppercase tracking-widest mb-2 relative z-20">Our Client Says!</h3>
        <h2 className="text-5xl md:text-7xl font-display font-bold text-[var(--color-blue-ocean)] italic tracking-wider opacity-10 relative z-20 pointer-events-none">TESTIMONIAL</h2>

        <div className="flex flex-col md:flex-row items-center gap-12 -mt-10 md:-mt-16 relative z-30">
          <div className="relative">
            <div className="w-64 h-64 rounded-3xl overflow-hidden clay-card border-8 border-white">
              <img loading="lazy" src='/assets/meeanksi amma.png' alt="madurai" className="w-full h-full object-cover" />
            </div>
            {/* Floating letter avatars */}
            <div className="absolute -top-4 -right-8 w-12 h-12 rounded-full border-4 border-white bg-[var(--color-primary-forest)] flex items-center justify-center text-white font-bold text-sm shadow-md">M</div>
            <div className="absolute top-1/2 -right-12 w-10 h-10 rounded-full border-4 border-white bg-amber-500 flex items-center justify-center text-white font-bold text-xs shadow-md">S</div>
            <div className="absolute -bottom-4 -right-4 w-14 h-14 rounded-full border-4 border-white bg-[var(--color-blue-ocean)] flex items-center justify-center text-white font-bold text-base shadow-md">K</div>
          </div>

          <div className="text-left max-w-md bg-white p-10 rounded-3xl clay-card relative z-30">
            <Quote className="w-10 h-10 text-[var(--color-primary-forest)] opacity-20 absolute top-6 right-6" />
            <h4 className="font-display text-2xl text-[var(--color-blue-ocean)] font-bold italic mb-1">{featured.name}</h4>
            <div className="flex items-center gap-1 text-xs text-[var(--color-neutral-medium)] font-bold mb-4">
              <MapPin className="w-3 h-3" /> {featured.location}
            </div>
            <p className="text-[var(--color-neutral-dark)] leading-relaxed italic mb-6">"{featured.quote}"</p>
            <div className="flex text-[var(--color-blue-ocean)]">
              <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIAL GRID */}
      <section className="py-10 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-[var(--color-blue-ocean)] mb-2">More <span className="text-[var(--color-blue-ocean)] italic font-normal">Success Stories</span></h2>
          <p className="text-[var(--color-neutral-medium)]">Read what thousands of happy travelers have experienced.</p>
        </div>

        <div className="w-full relative z-30 mt-8">
          <div className="bg-white/40 backdrop-blur-md border border-white/60 p-4 md:p-8 rounded-[3rem] shadow-[0_20px_40px_rgba(0,0,0,0.05)] w-full flex justify-center">
            <div ref={widgetRef} className="w-full min-h-[300px]"></div>
          </div>
        </div>
      </section>

      {/* 4. TRUST BANNER */}
      <section className="pt-10 pb-4 px-6 max-w-6xl mx-auto">
        <div className="p-12 md:p-16 text-white text-center relative overflow-hidden bg-[var(--color-primary-forest)] rounded-[3rem]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-blue-ocean)] rounded-full blur-[100px] opacity-10 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-primary-teal)] rounded-full blur-[100px] opacity-10 -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Join <span className="text-white/90 italic">1000+</span> Happy Travelers</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-12 text-lg">
              We have been organizing incredible journeys for over 2 years. Let us plan your next unforgettable adventure.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
              <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full border border-white/20">
                <ShieldCheck className="w-6 h-6 text-[#b5d536]" />
                <span className="font-bold text-sm tracking-wider uppercase">Verified Agency</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full border border-white/20">
                <Heart className="w-6 h-6 text-white" />
                <span className="font-bold text-sm tracking-wider uppercase">99% Satisfaction</span>
              </div>
            </div>

            <Link to="/south-india-package" className="inline-block bg-white/10 border border-white/20 text-white backdrop-blur-md px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-[var(--color-primary-forest)] transition-all">
              Plan Your Trip Now
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
