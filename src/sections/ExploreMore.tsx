import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const filterTabs = ['All Destinations', 'South India', 'North India', 'Honeymoon Package']

const allDestinations = [
  // SOUTH INDIA - TAMIL NADU
  { 
    id: 1, 
    state: 'South India', 
    name: 'Madurai Local Sightseeing One Day', 
    location: 'Madurai', 
    price: 'Explore Package', 
    rating: '5.0', 
    image: '/assets/meenakshi amman temple-732w.webp', 
    srcSet: '/assets/meenakshi amman temple-732w.webp 732w, /assets/meenakshi amman temple-732w@2x.webp 1448w',
    link: '/tour-packages/madurai-tours/madurai-one-day-tour-package-best-local-sightseeing' 
  },
  { 
    id: 2, 
    state: 'South India', 
    name: 'Madurai to Kodaikanal One Day', 
    location: 'Kodaikanal', 
    price: 'Explore Package', 
    rating: '5.0', 
    image: '/assets/kodaikanal/card/kodalkanallake.webp', 
    link: '/tour-packages/kodaikanal-tours/madurai-to-kodaikanal-one-day-tour-package' 
  },
  // SOUTH INDIA - KERALA
  { 
    id: 3, 
    state: 'South India', 
    name: 'Madurai to Munnar 2 Days / 1 Night', 
    location: 'Munnar', 
    price: 'Explore Package', 
    rating: '5.0', 
    image: '/assets/KERALA/322x372/MUNNAR1.webp', 
    link: '/tour-packages/munnar-tours/madurai-to-munnar-2-days-1-night-tour-package' 
  },
  { 
    id: 4, 
    state: 'South India', 
    name: 'Madurai to Munnar & Alleppey 3 Days / 2 Nights', 
    location: 'Kerala ', 
    price: 'Explore Package', 
    rating: '5.0', 
    image: '/assets/kerala1.webp', 
    link: '/tour-packages/madurai-tours/madurai-to-munnar-alleppey-3-days-2-nights-tour-package' 
  },
  // SOUTH INDIA - KARNATAKA
  { 
    id: 5, 
    state: 'South India', 
    name: 'Mysore & Coorg Package - 4 Days / 3 Nights', 
    location: 'Mysore', 
    price: 'Explore Package', 
    rating: '5.0', 
    image: '/assets/karnataka/mysore1.webp', 
    link: '/tour-packages/tours/mysore-and-coorg-tour-package-4-days-3-nights' 
  },
  { 
    id: 6, 
    state: 'South India', 
    name: 'Karnataka & Ooty Special - 5 Days / 4 Nights', 
    location: 'Karnataka and Tamil Nadu', 
    price: 'Explore Package', 
    rating: '5.0', 
    image: '/assets/karnataka/bangalore 12.webp', 
    link: '/tour-packages/karnataka-tours/karnataka-ooty-special-tour-package' 
  },
  // NORTH INDIA
  { 
    id: 7, 
    state: 'North India', 
    name: 'Chennai to Shirdi One Day Flight', 
    location: 'Shirdi', 
    price: 'Explore Package', 
    rating: '5.0', 
    image: '/assets/varanasi and shiridi/Samadhi-Mandir-Sai-Baba-Photo-91-1320x880.webp', 
    link: '/tour-packages/shirdi-tours/chennai-to-shirdi-one-day-flight-tour-package' 
  },
  { 
    id: 8, 
    state: 'North India', 
    name: 'Chennai to Varanasi Flight Package 2 Days / 1 Nights', 
    location: 'Kashi/Varanasi', 
    price: 'Explore Package', 
    rating: '5.0', 
    image: '/assets/varanasi/cards/kasi1.webp', 
    link: '/tour-packages/varanasi-tours/chennai-to-varanasi-tour-package-2-days-1-night-kasi-flight-package' 
  },
  // HONEYMOON PACKAGE
  { 
    id: 9, 
    state: 'Honeymoon Package', 
    name: 'Ooty and Coonoor Honeymoon 4 Days / 3 Nights', 
    location: 'Ooty', 
    price: 'Explore Package', 
    rating: '5.0', 
    image: '/assets/otty/ooty1(small).webp', 
    link: '/tour-packages/tamil-nadu-honeymoon-packages/enchanting-romantic-ooty-and-coonoor-honeymoon-package-4-days-3-nights' 
  },
  { 
    id: 10, 
    state: 'Honeymoon Package', 
    name: 'Munnar Honeymoon 3 Days / 2 Nights', 
    location: 'Munnar', 
    price: 'Explore Package', 
    rating: '5.0', 
    image: '/assets/KERALA/322x372/MUNNAR1.webp', 
    link: '/tour-packages/kerala-honeymoon-packages/kerala-honeymoon-package-3-days-2-nights' 
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4 md:gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-neutral-black)] mb-2">Explore More</h2>
            <p className="text-[var(--color-neutral-medium)] text-sm tracking-wide">Let's discover new places</p>
          </div>
          <p className="text-[var(--color-neutral-medium)] text-sm max-w-md text-left md:text-right">
            Explore our best holiday and pilgrimage packages for your next memorable journey.
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
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence mode="popLayout">
            {filteredDestinations.map((dest) => (
              <motion.div
                layout
                key={dest.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Link to={dest.link} className="clay-card p-3 rounded-[2rem] group block h-full">
                  <div className="relative h-56 rounded-3xl overflow-hidden mb-5">
                    <img 
                      src={dest.image} 
                      srcSet={(dest as any).srcSet}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                      alt={dest.name} 
                      title={dest.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="px-3 pb-3 flex flex-col gap-4">
                    <div>
                      <h3 className="font-bold text-[var(--color-neutral-black)] text-lg mb-1 group-hover:text-[var(--color-primary-forest)] transition-colors duration-300">
                        {dest.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-[var(--color-neutral-medium)] text-xs font-medium">
                        <MapPin className="w-3.5 h-3.5 text-[var(--color-blue-ocean)]" />
                        {dest.location}
                      </div>
                    </div>
                    <div className="w-full text-center py-2.5 rounded-full bg-[var(--color-primary-forest)] text-white text-sm font-bold group-hover:bg-emerald-800 transition-colors">
                      {dest.price}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-4">
          <Link to="/tour-packages/madurai-tours" className="px-6 py-2.5 rounded-full border border-[var(--color-neutral-light)] bg-white text-[var(--color-neutral-medium)] hover:bg-[var(--color-bg-soft)] hover:text-[var(--color-neutral-dark)] font-bold text-sm transition-all shadow-sm">
            Show more
          </Link>
        </div>
      </div>
    </section>
  )
}
