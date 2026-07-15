import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { Link } from 'react-router-dom'

export function BookTicketsBanner() {
 return (
 <section className="py-12 px-6 pb-32 bg-[var(--color-bg-luxury)]">
 <div className="max-w-7xl mx-auto">
 <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
 <h2 className="text-3xl md:text-4xl font-display font-bold text-[var(--color-neutral-black)]">
 Book tickets and go now!
 </h2>
 <Link to="/contact" className="px-8 py-3.5 text-sm font-bold text-white clay-btn-secondary whitespace-nowrap">
 Book now
 </Link>
 </div>

 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="relative w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden clay-card p-2 group cursor-pointer"
 >
 <img 
 src='/assets/Uttarakhand1.avif' 
 alt="Clear water kayaking" 
 className="w-full h-full object-cover rounded-[2.5rem] transition-transform duration-1000 group-hover:scale-105"
 />
 
 <div className="absolute inset-0 flex items-center justify-center">
 <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 transition-transform duration-300 group-hover:scale-110">
 <Play className="w-6 h-6 text-white fill-white ml-1" />
 </div>
 </div>
 </motion.div>
 </div>
 </section>
 )
}
