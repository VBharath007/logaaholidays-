import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const filterTabs = ['All Destinations', 'Tamil Nadu', 'Kerala', 'Maharashtra', 'Uttar Pradesh']

const allDestinations = [
  { 
    id: 1, 
    state: 'Tamil Nadu', 
    name: 'Madurai to Rameswaram 2D / 1N', 
    location: 'Rameshwaram, Dhanushkodi', 
    price: 'Explore Tour', 
    rating: '5.0', 
    image: '/assets/rameswaram/sm4.webp', 
    link: '/tour-packages/rameshwaram-tours/madurai-to-rameshwaram-2d-1n-tour' 
  },
  { 
    id: 2, 
    state: 'Tamil Nadu', 
    name: 'Madurai to Ooty 2 Days / 1 Night', 
    location: 'Ooty, Coonoor', 
    price: 'Explore Tour', 
    rating: '5.0', 
    image: '/assets/otty/ooty1(small).webp', 
    link: '/tour-packages/ooty-tours/madurai-to-ooty-2-days-1-night-tour-package' 
  },
  { 
    id: 3, 
    state: 'Tamil Nadu', 
    name: 'Madurai to Kodaikanal One Day', 
    location: 'Kodaikanal Lake, Pillar Rocks', 
    price: 'Explore Tour', 
    rating: '5.0', 
    image: '/assets/kodaikanal/card/kodalkanallake.webp', 
    link: '/tour-packages/kodaikanal-tours/madurai-to-kodaikanal-one-day-tour-package' 
  },
  { 
    id: 4, 
    state: 'Tamil Nadu', 
    name: 'Chennai Local Sightseeing', 
    location: 'Marina Beach, Mylapore', 
    price: 'Explore Tour', 
    rating: '5.0', 
    image: '/assets/chennai/chennai1(small).webp', 
    link: '/tour-packages/chennai-tours/chennai-local-sightseeing-tour-package-best-city-highlights' 
  },
  { 
    id: 5, 
    state: 'Tamil Nadu', 
    name: 'Madurai to Kanyakumari One Day', 
    location: 'Vivekananda Rock, Thiruvalluvar', 
    price: 'Explore Tour', 
    rating: '5.0', 
    image: '/assets/kaniyakumari/vivekandhar.webp', 
    link: '/tour-packages/kanyakumari-tours/madurai-to-kanyakumari-one-day-tour-package' 
  },
  { 
    id: 6, 
    state: 'Kerala', 
    name: 'Madurai to Munnar 2 Days / 1 Night', 
    location: 'Munnar, Mattupetty Dam', 
    price: 'Explore Tour', 
    rating: '5.0', 
    image: '/assets/KERALA/322x372/MUNNAR1.webp', 
    link: '/tour-packages/munnar-tours/madurai-to-munnar-2-days-1-night-tour-package' 
  },
  { 
    id: 7, 
    state: 'Maharashtra', 
    name: 'Chennai to Shirdi One Day Flight', 
    location: 'Samadhi Mandir, Dwarkamai', 
    price: 'Explore Tour', 
    rating: '5.0', 
    image: '/assets/varanasi and shiridi/Samadhi-Mandir-Sai-Baba-Photo-91-1320x880.webp', 
    link: '/tour-packages/shirdi-tours/chennai-to-shirdi-one-day-flight-tour-package' 
  },
  { 
    id: 8, 
    state: 'Uttar Pradesh', 
    name: 'Chennai to Varanasi 2 Days Flight', 
    location: 'Kashi Vishwanath, Ganga Aarti', 
    price: 'Explore Tour', 
    rating: '5.0', 
    image: '/assets/varanasi/cards/kasi1.webp', 
    link: '/tour-packages/varanasi-tours/chennai-to-varanasi-tour-package-2-days-1-night-kasi-flight-package' 
  },
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
            Browse our recently featured premium pilgrimage and holiday packages complete with verified ratings and detailed itineraries.
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
                      title={dest.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[var(--color-neutral-black)] font-bold px-3 py-1 rounded-full text-xs flex items-center gap-1 ">
                      <Star className="w-3 h-3 text-[var(--color-blue-ocean)] fill-current" />
                      {dest.rating}
                    </div>
                  </div>
                  <div className="px-3 pb-3 flex justify-between items-end">
                    <div>
                      <h3 className="font-bold text-[var(--color-neutral-black)] text-lg mb-1 group-hover:text-[var(--color-primary-forest)] transition-colors duration-300">
                        {dest.name}
                      </h3>
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
          <Link to="/tour-packages/madurai-tours" className="px-8 py-3 rounded-full border-2 border-[var(--color-neutral-light)] text-[var(--color-neutral-dark)] font-bold text-sm hover:border-[var(--color-neutral-medium)] transition-colors">
            Show more
          </Link>
        </div>
      </div>
    </section>
  )
}
