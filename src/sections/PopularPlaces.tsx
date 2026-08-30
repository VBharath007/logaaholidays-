import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const popularPlaces = [
  { 
    id: 1, 
    name: 'Madurai Meenakshi Temple', 
    location: 'Madurai, Tamil Nadu, India', 
    price: 'On Request', 
    image: '/assets/meenakshi amman temple.png',
    link: '/place/tamilnadu/madurai/meenakshi-temple'
  },
  { 
    id: 2, 
    name: 'Thirumalai Nayakkar Mahal', 
    location: 'Madurai, Tamil Nadu, India', 
    price: 'On Request', 
    image: '/assets/madurai/mahal.webp',
    link: '/place/tamilnadu/madurai/thirumalai-nayak'
  },
  { 
    id: 3, 
    name: 'Alagar Kovil', 
    location: 'Madurai, Tamil Nadu, India', 
    price: 'On Request', 
    image: '/assets/madurai/alagarkovil.webp',
    link: '/place/tamilnadu/madurai/alagar-koyil'
  },
  { 
    id: 4, 
    name: 'Thiruparankundram Temple', 
    location: 'Madurai, Tamil Nadu, India', 
    price: 'On Request', 
    image: '/assets/madurai/thirupurakundaram.webp',
    link: '/place/tamilnadu/madurai/tirupparankundram'
  },
]

export function PopularPlaces() {
  return (
    <section className="py-24 px-6 bg-[var(--color-bg-luxury)]" aria-labelledby="popular-places-heading">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4 md:gap-6">
          <div>
            <h2 id="popular-places-heading" className="text-4xl md:text-5xl font-display font-bold text-[var(--color-neutral-black)] mb-2">
              Popular Places
            </h2>
            <p className="text-[var(--color-neutral-dark)] text-sm tracking-wide">Let's enjoy this heaven on earth</p>
          </div>
          <p className="text-[var(--color-neutral-medium)] text-sm max-w-sm text-left md:text-right">
            Explore handpicked destinations with Logaa Holidays, a trusted travel agency in Madurai. We offer customized tour packages featuring historic temple towns, tranquil backwaters, and misty hill stations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularPlaces.map((place, i) => (
            <Link 
              to={place.link} 
              key={place.id} 
              id={`popular-place-card-${place.id}`}
              className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-forest)] rounded-[2rem] transition-transform hover:-translate-y-1 duration-300"
              title={`Explore packages for ${place.name}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ delay: i * 0.1 }}
                className="clay-card p-3 rounded-[2rem] h-full"
              >
                <div className="relative h-64 rounded-3xl overflow-hidden mb-4">
                  <img 
                    src={place.image} 
                    alt={`${place.name} Tour Packages from Madurai - Logaa Holidays`} 
                    title={place.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[var(--color-primary-forest)] font-bold px-4 py-1.5 rounded-full text-xs shadow-sm">
                    {place.price}
                  </div>
                </div>
                <div className="px-2 pb-2">
                  <h3 className="font-bold text-[var(--color-neutral-black)] text-lg mb-1 group-hover:text-[var(--color-primary-forest)] transition-colors duration-300">
                    {place.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[var(--color-neutral-medium)] text-xs font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[var(--color-blue-ocean)]" />
                    {place.location}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
