import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const popularPlaces = [
 { id: 1, name: 'Alleppey Backwaters', location: 'Kerala, India', price: 'On Request', image: '/assets/kerala1.avif' },
 { id: 2, name: 'Varanasi Ghats', location: 'Uttar Pradesh, India', price: 'On Request', image: '/assets/Uttar Pradesh1.avif' },
 { id: 3, name: 'Munnar Tea Estates', location: 'Kerala, India', price: 'On Request', image: '/assets/munnar.avif' },
 { id: 4, name: 'Kedarnath Temple', location: 'Uttarakhand, India', price: 'On Request', image: '/assets/Uttarakhand1.avif' },
]

export function PopularPlaces() {
 return (
 <section className="py-24 px-6 bg-[var(--color-bg-luxury)]">
 <div className="max-w-7xl mx-auto">
 <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
 <div>
 <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-neutral-black)] mb-2">Popular Place</h2>
 <p className="text-[var(--color-neutral-dark)] text-sm tracking-wide">Let's enjoy this heaven on earth</p>
 </div>
 <p className="text-[var(--color-neutral-medium)] text-sm max-w-sm">
 Many places are very famous, beautiful, clean, and will give a very deep impression to visitors and animate them to come back.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
 {popularPlaces.map((place, i) => (
 <motion.div
 key={place.id}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.1 }}
 className="clay-card p-3 rounded-[2rem] group cursor-pointer"
 >
 <div className="relative h-64 rounded-3xl overflow-hidden mb-4">
 <img 
 src={place.image} 
 alt={place.name} 
 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
 />
 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[var(--color-primary-forest)] font-bold px-4 py-1.5 rounded-full text-xs ">
 {place.price}
 </div>
 </div>
 <div className="px-2 pb-2">
 <h3 className="font-bold text-[var(--color-neutral-black)] text-lg mb-1">{place.name}</h3>
 <div className="flex items-center gap-1.5 text-[var(--color-neutral-medium)] text-xs font-medium">
 <MapPin className="w-3.5 h-3.5 text-[var(--color-blue-ocean)]" />
 {place.location}
 </div>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 )
}
