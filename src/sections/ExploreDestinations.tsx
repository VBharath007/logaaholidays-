import { motion } from 'framer-motion'
import { Plane } from 'lucide-react'
import { Link } from 'react-router-dom'

const destinations = [
 { id: 1, name: 'Italy', listings: 5, image: '/assets/himachal.avif' },
 { id: 2, name: 'France', listings: 3, image: '/assets/manipur1.avif' },
 { id: 3, name: 'Maldives', listings: 7, image: '/assets/Tamil Nadu1.avif' },
]

export function ExploreDestinations() {
 return (
 <section className="py-24 px-6 bg-[#f8fafc] text-slate-900 relative overflow-hidden">
 <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
 
 {/* Left Content */}
 <motion.div 
 initial={{ opacity: 0, x: -50 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 className="max-w-md"
 >
 <div className="flex items-center gap-2 text-blue-600 font-semibold tracking-wider text-sm mb-4 uppercase">
 <Plane className="w-4 h-4" />
 Destination List
 </div>
 <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
 Explore the Beautiful Places Around World
 </h2>
 <p className="text-slate-500 mb-10 leading-relaxed">
 Flexible classes refers to the process of acquiring knowledge free from the constraints of traditional learning.
 </p>
 <Link to="/tour-packages" className="inline-flex px-8 py-4 font-semibold text-white clay-btn-orange">
 Discover More
 </Link>
 </motion.div>

 {/* Right Gallery (Pills) */}
 <div className="flex gap-6 justify-center lg:justify-end items-end h-[500px]">
 {destinations.map((dest, i) => (
 <motion.div
 key={dest.id}
 initial={{ opacity: 0, y: 50 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, delay: i * 0.2 }}
 className={`relative flex flex-col items-center w-32 md:w-48 clay-card p-2 ${i === 1 ? 'mb-12' : ''}`}
 >
 {/* Image top half */}
 <div className="w-full h-48 md:h-64 rounded-t-[2rem] overflow-hidden">
 <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
 </div>
 
 {/* Floating Badge */}
 <div className="absolute top-[60%] md:top-[65%] -translate-y-1/2 w-16 h-16 rounded-full bg-blue-600 text-white flex flex-col items-center justify-center text-[10px] font-bold border-4 border-[#f8fafc] z-10">
 <span className="text-lg">{dest.listings}</span>
 Listings
 </div>
 
 {/* White bottom section */}
 <div className="w-full h-24 md:h-32 bg-white rounded-b-[2rem] flex flex-col items-center justify-end pb-6">
 <span className="text-xs text-slate-400 font-semibold uppercase tracking-widest mb-1">Places In</span>
 <h3 className="text-xl font-bold text-slate-800">{dest.name}</h3>
 </div>
 </motion.div>
 ))}
 </div>
 
 </div>
 </section>
 )
}
