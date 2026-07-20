import { motion } from 'framer-motion'
import { Star, ShieldCheck, Heart, MapPin, Quote } from 'lucide-react'

const TornPaperBottom = () => (
 <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20" style={{ transform: 'translateY(1px)' }}>
 <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[70px] rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
 <path d="M0,0V46.29c47.79,22.2,103.59,32.15,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-[var(--color-bg-luxury)]"></path>
 <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-[var(--color-bg-luxury)]"></path>
 <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-[var(--color-bg-luxury)]"></path>
 </svg>
 </div>
)

// Avatar color palette
const avatarColors = [
  'bg-[var(--color-primary-forest)]',
  'bg-[var(--color-blue-ocean)]',
  'bg-amber-500',
  'bg-rose-500',
  'bg-violet-600',
  'bg-emerald-600',
  'bg-orange-500',
  'bg-teal-600',
]

const AvatarCircle = ({ name, size = 'md', colorIdx = 0 }: { name: string; size?: 'sm' | 'md' | 'lg'; colorIdx?: number }) => {
  const letter = name.charAt(0).toUpperCase()
  const sizeClass = size === 'sm' ? 'w-10 h-10 text-sm' : size === 'lg' ? 'w-16 h-16 text-2xl' : 'w-14 h-14 text-lg'
  return (
    <div className={`${sizeClass} ${avatarColors[colorIdx % avatarColors.length]} rounded-full flex items-center justify-center font-bold text-white border-2 border-white shadow-md flex-shrink-0`}>
      {letter}
    </div>
  )
}

const reviews = [
 { id: 1, name: 'Murugesan Rajan', location: 'Madurai, Tamil Nadu', quote: 'Logaa Holidays moolama enga family trip plan pannathu romba super experience aaguthu. Trip fulla ellame perfect ah arrange panni kuduthanga. Hotels and cab service ellame top class. Romba thanks team, definitely recommend pannuven!' },
 { id: 2, name: 'Selvi Annamalai', location: 'Coimbatore, Tamil Nadu', quote: 'Customer service romba nalla irunthuchu. Enga budget kula best package select panni thandhanga. Driver romba polite ah iruntharu, safety aana journey. Next trip kandipa Logaa Holidays la than book pannuven. Worth every single penny!' },
 { id: 3, name: 'Karthikeyan Subramani', location: 'Chennai, Tamil Nadu', quote: 'I was looking for a travel agent that can provide excellent packages. I found Logaa Holidays to be the best. They helped me get the best deal within my budget. I can assure that they offer the best service as I have experienced it myself.' },
 { id: 4, name: 'Kavitha Palaniswami', location: 'Trichy, Tamil Nadu', quote: 'Shirdi trip enga family ku life-time memory aaguthu. Logaa Holidays pakka professional ah handle panni kuduthanga. Hotel booking, darshan slot ellame ready ah irundhuchu. Nanbargalukku kandipa suggest pannuven!' },
 { id: 5, name: 'Sundaram Pillai', location: 'Tirunelveli, Tamil Nadu', quote: 'Varanasi trip plan pannathe oru dream aaga irundhuchu. Logaa Holidays andha dream ya reality aaguthu. Ganga Aarti paakanum nu oru desire irundhuchu, athai kandipa fulfill panni kuduthanga. Nandri!' },
 { id: 6, name: 'Meenakshi Govindarajan', location: 'Madurai, Tamil Nadu', quote: 'Romba nalla service. Enga Kerala tour la guide romba helpful ah iruntharu. Every spot ah proper explain panni kudutharu. Booking process simple ah irundhuchu. Romba satisfied with Logaa Holidays!' },
]

const featured = {
  name: 'Loganathan Pandi',
  location: 'Madurai, Tamil Nadu',
  quote: 'Logaa Holidays provided the most unforgettable pilgrimage experience for our entire family. The Shirdi trip was flawlessly organized — from the flight tickets to hotel, darshan slots, and cab arrangements. Everything was perfectly handled. I highly recommend Logaa Holidays for anyone planning a spiritual journey!',
}

export function TestimonialsPage() {
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
     <img loading="lazy" src='/assets/shiridi/hero/shirdi1.webp' alt="Shirdi" className="w-full h-full object-cover" />
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

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 {reviews.map((review, i) => (
 <motion.div
 key={review.id}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.1 }}
 className="clay-card bg-white p-8 rounded-3xl relative flex flex-col group transition-transform duration-300"
 >
 <div className="flex items-center gap-4 mb-6">
   <AvatarCircle name={review.name} colorIdx={i} />
   <div>
     <h4 className="font-bold text-[var(--color-blue-ocean)] text-lg leading-tight">{review.name}</h4>
     <div className="flex items-center text-xs text-[var(--color-neutral-medium)] font-bold mt-1">
       <MapPin className="w-3 h-3 mr-1" /> {review.location}
     </div>
   </div>
 </div>
 <p className="text-[var(--color-neutral-medium)] text-sm leading-relaxed mb-6 flex-1 italic">
 "{review.quote}"
 </p>
 <div className="flex text-[var(--color-blue-ocean)]">
 <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
 </div>
 </motion.div>
 ))}
 </div>
 </section>

 {/* 4. TRUST BANNER */}
 <section className="pt-10 pb-4 px-6 max-w-6xl mx-auto">
 <div className="p-12 md:p-16 text-white text-center relative overflow-hidden bg-[var(--color-primary-forest)] rounded-[3rem]">
 <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-blue-ocean)] rounded-full blur-[100px] opacity-10 translate-x-1/2 -translate-y-1/2"></div>
 <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-primary-teal)] rounded-full blur-[100px] opacity-10 -translate-x-1/2 translate-y-1/2"></div>

 <div className="relative z-10">
 <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Join <span className="text-white/90 italic">10,000+</span> Happy Travelers</h2>
 <p className="text-white/80 max-w-2xl mx-auto mb-12 text-lg">
 We have been organizing incredible journeys for over 25 years. Let us plan your next unforgettable adventure.
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

 <button className="bg-white/10 border border-white/20 text-white backdrop-blur-md px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-[var(--color-primary-forest)] transition-all">
 Plan Your Trip Now
 </button>
 </div>
 </div>
 </section>

 </div>
 )
}
