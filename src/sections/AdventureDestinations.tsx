import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const adventures = [
 { id: 1, city: 'MUMBAI', image: '/assets/maharashtra1.avif' },
 { id: 2, city: 'KEDARNATH', image: '/assets/Uttarakhand1.avif' },
 { id: 3, city: 'VARANASI', image: '/assets/Uttar Pradesh1.avif' },
 { id: 4, city: 'MADURAI', image: '/assets/Tamil Nadu1.avif' },
]

export function AdventureDestinations() {
 return (
 <section className="py-24 px-6 bg-[var(--color-bg-white)] overflow-hidden">
 <div className="max-w-7xl mx-auto">
 <div className="text-center mb-16">
 <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-neutral-black)] mb-3">Let's go on an adventure</h2>
 <p className="text-[var(--color-neutral-medium)] text-sm tracking-wide">Find out and travel to great experiences</p>
 </div>

 <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
 {adventures.map((adv, i) => (
 <motion.div
 key={adv.id}
 initial={{ opacity: 0, scale: 0.9 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.1 }}
 className="flex flex-col items-center"
 >
 <div className="relative w-full aspect-square mb-6">
 <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[var(--color-primary-teal)] text-white flex items-center justify-center z-10 ">
 <Check className="w-4 h-4" strokeWidth={3} />
 </div>
 <div className="w-full h-full rounded-2xl overflow-hidden clay-card p-1.5">
 <img 
 src={adv.image} 
 alt={adv.city} 
 className="w-full h-full object-cover rounded-xl"
 />
 </div>
 </div>
 
 <div className="px-6 py-2 border-b-2 border-dashed border-[var(--color-neutral-light)] w-full text-center">
 <span className="text-[var(--color-neutral-black)] font-bold tracking-widest uppercase text-sm">
 {adv.city}
 </span>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 )
}
