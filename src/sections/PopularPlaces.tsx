import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const popularPlaces = [
  { 
    id: 1, 
    name: 'Madurai Meenakshi Temple', 
    location: 'Madurai, Tamil Nadu, India', 
    price: 'View Details', 
    image: '/assets/meenakshi amman temple-732w.webp',
    srcSet: '/assets/meenakshi amman temple-732w.webp 732w, /assets/meenakshi amman temple-732w@2x.webp 1448w',
    link: '/tamilnadu-tourism/madurai/meenakshi-temple'
  },
  { 
    id: 2, 
    name: 'Thirumalai Nayakkar Mahal', 
    location: 'Madurai, Tamil Nadu, India', 
    price: 'View Details', 
    image: '/assets/madurai/mahal-587w.webp',
    srcSet: '/assets/madurai/mahal-587w.webp 587w, /assets/madurai/mahal-587w@2x.webp 1174w',
    link: '/tamilnadu-tourism/madurai/thirumalai-nayak'
  },
  { 
    id: 3, 
    name: 'Alagar Kovil', 
    location: 'Madurai, Tamil Nadu, India', 
    price: 'View Details', 
    image: '/assets/madurai/alagarkovil.webp',
    link: '/tamilnadu-tourism/madurai/alagar-koyil'
  },
  { 
    id: 4, 
    name: 'Thiruparankundram Temple', 
    location: 'Madurai, Tamil Nadu, India', 
    price: 'View Details', 
    image: '/assets/madurai/thirupurakundaram.webp',
    link: '/tamilnadu-tourism/madurai/tirupparankundram'
  },
]

export function PopularPlaces() {
  return (
    <section className="py-24 px-6 bg-[var(--color-bg-luxury)]" aria-labelledby="popular-places-heading">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-12 gap-2">
          <h2 id="popular-places-heading" className="text-4xl md:text-5xl font-display font-bold text-[var(--color-neutral-black)] mb-2">
            Popular Places in Madurai
          </h2>
          <p className="text-[var(--color-neutral-dark)] text-sm tracking-wide">Enjoy every moment of this beautiful journey</p>
          <p className="text-[var(--color-neutral-medium)] text-sm max-w-2xl text-left leading-relaxed mt-2">
            Explore Selected Destinations with Logaa Holidays, a trusted travel agency in Madurai. We offer customized tour packages featuring historic temple towns, beautiful places, peaceful surroundings and hill stations.
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
                <div className="relative h-64 rounded-3xl overflow-hidden mb-6">
                  <img 
                    src={place.image} 
                    srcSet={place.srcSet}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 290px"
                    alt={`${place.name} Tour Packages from Madurai - Logaa Holidays`} 
                    title={place.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="px-2 pb-2">
                  <h3 className="font-bold text-[var(--color-neutral-black)] text-lg mb-1 group-hover:text-[var(--color-primary-forest)] transition-colors duration-300">
                    {place.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[var(--color-neutral-medium)] text-xs font-medium mb-4">
                    <MapPin className="w-3.5 h-3.5 text-[var(--color-blue-ocean)]" />
                    {place.location}
                  </div>
                  <div className="w-full text-center py-2.5 rounded-full bg-[var(--color-primary-forest)] text-white text-sm font-bold group-hover:bg-emerald-800 transition-colors">
                    {place.price}
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
