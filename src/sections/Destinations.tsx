import { MapPin } from 'lucide-react'
import { destinations } from '../theme/destinations'
import { useDestinationTheme } from '../theme/ThemeContext'
import { SectionHeading } from '../components/SectionHeading'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { motion } from 'framer-motion'

export function Destinations() {
 const { active, setActiveId } = useDestinationTheme()
 const headingRef = useScrollReveal<HTMLDivElement>()
 const detailRef = useScrollReveal<HTMLDivElement>({ delay: 0.15 })

 return (
 <section id="destinations" className="relative px-6 py-32 bg-transparent z-20">
 <div className="mx-auto max-w-7xl">
 <div ref={headingRef} className="mb-20">
 <SectionHeading
 eyebrow="Curated Collection"
 title="Choose Your Next Escape"
 description="Select a destination and watch the world reshape around it. Every color, every shadow, meticulously tuned to your next journey."
 />
 </div>

 <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
 {destinations.map((destination, i) => {
 const isActive = destination.id === active.id
 return (
 <motion.button
 initial={{ opacity: 0, y: 50 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: i * 0.1 }}
 whileHover={{ y: -10, scale: 1.02 }}
 key={destination.id}
 type="button"
 onClick={() => setActiveId(destination.id)}
 aria-pressed={isActive}
 className={`group relative flex h-[400px] cursor-pointer flex-col justify-end overflow-hidden rounded-[2rem] border transition-all duration-700 ${
 isActive ? 'border-white/40 scale-[1.02]' : 'border-white/10 hover:border-white/30'
 }`}
 style={isActive ? { boxShadow: `0 20px 40px -10px ${destination.accent}40` } : undefined}
 >
 <div
 className={`absolute inset-0 bg-gradient-to-t ${destination.gradient} opacity-90 transition-transform duration-1000 group-hover:scale-110`}
 />
 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent" />

 <div className="relative z-10 p-8">
 <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-md mb-4 transition-colors group-hover:bg-white/20">
 <MapPin className="h-3 w-3" aria-hidden="true" />
 {destination.region}
 </span>
 <h3 className="font-display text-4xl font-medium text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
 {destination.name}
 </h3>
 <div className={`overflow-hidden transition-all duration-500 ease-out ${isActive ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
 <p className="text-sm text-white/75 font-light leading-relaxed">{destination.tagline}</p>
 </div>
 </div>
 </motion.button>
 )
 })}
 </div>

 <div
 ref={detailRef}
 className="mt-16 grid gap-12 rounded-[2.5rem] glass-panel p-10 sm:p-14 md:grid-cols-[1.2fr_1fr] md:items-center relative overflow-hidden"
 >
 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
 
 <div className="relative z-10">
 <h3 className="font-display text-5xl font-semibold text-white ">{active.name} Experience</h3>
 <p className="mt-6 text-lg text-white/80 font-light leading-relaxed max-w-xl">{active.description}</p>
 </div>
 
 <ul className="grid gap-5 relative z-10">
 {active.highlights.map((highlight, idx) => (
 <motion.li 
 key={highlight} 
 initial={{ opacity: 0, x: 20 }}
 whileInView={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.5, delay: idx * 0.1 }}
 className="flex items-center gap-4 text-white/90 text-lg font-medium bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm"
 >
 <div
 className="flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-700 "
 style={{ backgroundColor: 'var(--theme-accent)' }}
 aria-hidden="true"
 >
 <MapPin className="h-4 w-4 text-white" />
 </div>
 {highlight}
 </motion.li>
 ))}
 </ul>
 </div>
 </div>
 </section>
 )
}
