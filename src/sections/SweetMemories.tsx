import { motion } from 'framer-motion'
import { Calendar, Compass, UserCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export function SweetMemories() {
 return (
 <section className="py-24 px-6 bg-[var(--color-bg-white)] overflow-hidden">
 <div className="max-w-7xl mx-auto">
 <div className="text-left md:text-center mb-12 md:mb-20">
 <h2 className="text-3xl md:text-5xl font-display font-bold text-[var(--color-neutral-black)] mb-3">Experience the Soul of Tamil Nadu</h2>
 <p className="text-[var(--color-neutral-medium)] font-medium tracking-wide">Discover the magic of Madurai with journeys crafted for unforgettable memories</p>
 </div>

 <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
 {/* Left Content */}
 <div className="space-y-12">
 {[
 { icon: Compass, title: 'Immerse in Ancient Heritage', desc: 'Walk through the historic temple streets of Madurai and feel the vibrant culture that has thrived for centuries.' },
 { icon: Calendar, title: 'Authentic Local Experiences', desc: 'From the majestic Meenakshi Amman Temple to hidden local spots, explore Tamil Nadu like a true local.' },
 { icon: UserCircle, title: 'Unmatched South Indian Hospitality', desc: 'Every trip is thoughtfully designed to bring you the warmth, tradition, and culinary delights of Madurai.' },
 ].map((item, i) => (
 <motion.div 
 key={i}
 initial={{ opacity: 0, x: -30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: "100px" }}
 transition={{ delay: i * 0.15 }}
 className="flex gap-6"
 >
 <div className="w-12 h-12 rounded-xl bg-[var(--color-blue-aqua)] flex items-center justify-center flex-shrink-0 text-[var(--color-primary-teal)] ">
 <item.icon className="w-6 h-6" />
 </div>
 <div>
 <h3 className="text-xl font-bold text-[var(--color-neutral-black)] mb-2">{item.title}</h3>
 <p className="text-[var(--color-neutral-medium)] leading-relaxed text-sm max-w-md">{item.desc}</p>
 </div>
 </motion.div>
 ))}

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "100px" }}
 transition={{ delay: 0.5 }}
 className="pt-4"
 >
 <Link to="/about" className="inline-flex px-8 py-3.5 text-sm font-bold text-white clay-btn-secondary">
 Discover Madurai
 </Link>
 </motion.div>
 </div>

 {/* Right Image with Floating Badges */}
 <div className="relative flex justify-center lg:justify-end">
 <motion.div 
 initial={{ opacity: 0, scale: 0.95 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true, margin: "100px" }}
 className="relative w-full max-w-[400px] aspect-[4/5] rounded-[3rem] overflow-hidden clay-card p-2"
 >
 <img loading="lazy" 
 src='/assets/meenakshi amman temple.png' 
 alt="Madurai Meenakshi Amman Temple Tour Packages - Logaa Holidays" 
 className="w-full h-full object-cover rounded-[2.5rem]"
 />
 </motion.div>

 {/* Floating Badge 1 */}
 <motion.div 
 initial={{ opacity: 0, x: -20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: "100px" }}
 transition={{ delay: 0.6 }}
 className="absolute top-[20%] left-0 lg:-left-12 clay-badge bg-white p-3 rounded-2xl flex items-center gap-3 z-10"
 >
 <img loading="lazy" src="https://i.pravatar.cc/150?img=32" alt="User" className="w-10 h-10 rounded-full object-cover" />
 <div>
 <p className="text-xs font-bold text-[var(--color-neutral-black)] mb-0.5">Karthik Surya</p>
 <div className="flex text-[var(--color-blue-ocean)] text-[10px]">★★★★★</div>
 </div>
 </motion.div>

 {/* Floating Badge 2 */}
 <motion.div 
 initial={{ opacity: 0, x: 20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: "100px" }}
 transition={{ delay: 0.7 }}
 className="absolute top-[50%] right-0 lg:-right-12 clay-badge bg-white p-3 rounded-2xl flex items-center gap-3 z-10"
 >
 <img loading="lazy" src="https://i.pravatar.cc/150?img=44" alt="User" className="w-10 h-10 rounded-full object-cover" />
 <div>
 <p className="text-xs font-bold text-[var(--color-neutral-black)] mb-0.5">Priya Sharma</p>
 <div className="flex text-[var(--color-blue-ocean)] text-[10px]">★★★★★</div>
 </div>
 </motion.div>

 {/* Floating Badge 3 */}
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "100px" }}
 transition={{ delay: 0.8 }}
 className="absolute bottom-[20%] left-4 lg:left-0 clay-badge bg-white p-3 rounded-2xl flex items-center gap-3 z-10"
 >
 <img loading="lazy" src="https://i.pravatar.cc/150?img=12" alt="User" className="w-10 h-10 rounded-full object-cover" />
 <div>
 <p className="text-xs font-bold text-[var(--color-neutral-black)] mb-0.5">Ramesh Kumar</p>
 <div className="flex text-[var(--color-blue-ocean)] text-[10px]">★★★★☆</div>
 </div>
 </motion.div>
 </div>
 </div>
 </div>
 </section>
 )
}
