import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const filterTabs = ['All Destinations', 'Tamil Nadu', 'Kerala', 'Maharashtra', 'Uttar Pradesh', 'North East']

const allDestinations = [
 { id: 1, state: 'Kerala', name: 'Kerala Tour Package', location: 'Kochi, Alleppey', price: 'Explore Tour', rating: '4.9', image: '/assets/kerala1.avif', link: '/tour-packages/kerala-tours' },
 { id: 2, state: 'Tamil Nadu', name: 'Madurai - Rameshwaram', location: 'Madurai, Kanyakumari', price: 'Explore Tour', rating: '4.8', image: '/assets/rameshwaram.avif', link: '/tour-packages/rameshwaram-tours' },
 { id: 3, state: 'Maharashtra', name: 'Shirdi Flight Package', location: 'Shirdi', price: 'Explore Tour', rating: '5.0', image: '/assets/shiridi/hero/chennaiatoshirdi1dayflight.png', link: '/tour-packages/shirdi-tours' },
 { id: 4, state: 'Maharashtra', name: 'Nashik & Ajanta Ellora', location: 'Aurangabad', price: 'Explore Tour', rating: '4.7', image: '/assets/maharashtra1.avif', link: '/tour-packages/shirdi-tours' },
 { id: 5, state: 'Uttar Pradesh', name: 'Kasi Flight Package', location: 'Varanasi', price: 'Explore Tour', rating: '4.8', image: '/assets/Uttar Pradesh1.avif', link: '/tour-packages/varanasi-tours' },
 { id: 6, state: 'Uttar Pradesh', name: 'Ayodhya & Kasi Tour', location: 'Ayodhya', price: 'Explore Tour', rating: '4.9', image: '/assets/Uttar Pradesh2.avif', link: '/tour-packages/ayodhya-tours' },
 { id: 7, state: 'North East', name: 'Shillong & Cherrapunji', location: 'Meghalaya', price: 'Explore Tour', rating: '4.9', image: '/assets/megalaya1.avif', link: '/tour-packages/shillong-tours' },
]

export function ExploreMore() {
 const [activeTab, setActiveTab] = useState('All Destinations')

 const filteredDestinations = activeTab === 'All Destinations' 
 ? allDestinations 
 : allDestinations.filter(dest => dest.state === activeTab)

 return (
 <section className="py-24 px-6 bg-[var(--color-bg-luxury)]">
 <div className="max-w-7xl mx-auto">
 <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
 <div>
 <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-neutral-black)] mb-2">Explore more</h2>
 <p className="text-[var(--color-neutral-medium)] text-sm tracking-wide">Let's go on an adventure</p>
 </div>
 <p className="text-[var(--color-neutral-medium)] text-sm max-w-md text-right">
 All accommodations and destinations are fully managed, guaranteed, and reliable for your next memorable journey. Let's explore now.
 </p>
 </div>

 {/* Filter Tabs */}
 <div className="flex flex-wrap gap-3 mb-12">
 {filterTabs.map((tab) => (
 <button 
 key={tab}
 onClick={() => setActiveTab(tab)}
 className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
 activeTab === tab 
 ? 'bg-[var(--color-neutral-black)] text-white ' 
 : 'bg-white text-[var(--color-neutral-medium)] hover:bg-[var(--color-bg-soft)] border border-[var(--color-neutral-light)]'
 }`}
 >
 {tab}
 </button>
 ))}
 <button className="px-5 py-2 rounded-full text-xs font-bold bg-white text-[var(--color-neutral-black)] border border-[var(--color-neutral-light)] ml-auto flex items-center gap-2 hover:bg-[var(--color-bg-soft)]">
 Filter <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
 </button>
 </div>

 {/* Grid */}
 <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
 <AnimatePresence mode="popLayout">
 {filteredDestinations.map((dest) => (
 <motion.div
 layout
 key={dest.id}
 initial={{ opacity: 0, scale: 0.9 }}
 animate={{ opacity: 1, scale: 1 }}
 exit={{ opacity: 0, scale: 0.9 }}
 transition={{ duration: 0.3 }}
 >
 <Link to={dest.link} className="clay-card p-3 rounded-[2rem] group block h-full">
 <div className="relative h-56 rounded-3xl overflow-hidden mb-5">
 <img 
 src={dest.image} 
 alt={dest.name} 
 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
 />
 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[var(--color-neutral-black)] font-bold px-3 py-1 rounded-full text-xs flex items-center gap-1 ">
 <Star className="w-3 h-3 text-[var(--color-blue-ocean)] fill-current" />
 {dest.rating}
 </div>
 </div>
 <div className="px-3 pb-3 flex justify-between items-end">
 <div>
 <h3 className="font-bold text-[var(--color-neutral-black)] text-lg mb-1">{dest.name}</h3>
 <div className="flex items-center gap-1.5 text-[var(--color-neutral-medium)] text-xs font-medium">
 <MapPin className="w-3.5 h-3.5 text-[var(--color-blue-ocean)]" />
 {dest.location}
 </div>
 </div>
 <div className="text-lg font-bold text-[var(--color-primary-forest)] hover:underline">
 {dest.price}
 </div>
 </div>
 </Link>
 </motion.div>
 ))}
 </AnimatePresence>
 </motion.div>

 <div className="flex justify-center">
 <Link to="/tour-packages" className="px-8 py-3 rounded-full border-2 border-[var(--color-neutral-light)] text-[var(--color-neutral-dark)] font-bold text-sm hover:border-[var(--color-neutral-medium)] transition-colors">
 Show more
 </Link>
 </div>
 </div>
 </section>
 )
}
