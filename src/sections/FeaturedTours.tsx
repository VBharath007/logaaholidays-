import { motion } from 'framer-motion'
import { Plane, Star, Clock, Users, MapPin } from 'lucide-react'

const tours = [
 {
 id: 1,
 title: 'Goa Beach Weekend',
 location: 'Goa, India',
 price: 'On Request',
 rating: 4.8,
 duration: '3 Days',
 people: '2 - 4 Person',
 image: '/assets/maharashtra1.avif'
 },
 {
 id: 2,
 title: 'Meenakshi Temple Tour',
 location: 'Madurai, India',
 price: 'On Request',
 rating: 4.9,
 duration: '5 Days',
 people: '1 - 3 Person',
 image: '/assets/Tamil Nadu1.avif'
 },
 {
 id: 3,
 title: 'Himalayan Adventure',
 location: 'Rishikesh, Uttarakhand',
 price: 'On Request',
 rating: 5.0,
 duration: '7 Days',
 people: '2 - 6 Person',
 image: '/assets/Uttarakhand1.avif'
 },
]

export function FeaturedTours() {
 return (
 <section className="py-24 px-6 bg-[#f8fafc] text-slate-900">
 <div className="max-w-7xl mx-auto">
 
 <div className="text-center mb-16">
 <div className="flex justify-center items-center gap-2 text-blue-600 font-semibold tracking-wider text-sm mb-4 uppercase">
 <Plane className="w-4 h-4" />
 Featured Tours
 </div>
 <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-slate-900">
 Most Favorite Tour Place
 </h2>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 {tours.map((tour, i) => (
 <motion.div
 key={tour.id}
 initial={{ opacity: 0, y: 50 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: i * 0.15 }}
 className="clay-card flex flex-col overflow-hidden group"
 >
 <div className="relative h-64 overflow-hidden rounded-t-[2rem] m-2">
 <img 
 src={tour.image} 
 alt={tour.title} 
 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
 />
 <div className="absolute top-4 right-4 bg-orange-500 text-white font-bold px-4 py-1 rounded-full ">
 {tour.price}
 </div>
 </div>

 <div className="p-8 flex-grow flex flex-col bg-white rounded-b-[2rem]">
 <div className="flex items-center gap-1 mb-3 text-orange-400">
 <Star className="w-4 h-4 fill-current" />
 <span className="text-slate-600 font-medium text-sm ml-1">{tour.rating}</span>
 </div>
 
 <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
 {tour.title}
 </h3>
 
 <div className="flex items-center gap-2 text-slate-500 mb-6 text-sm font-medium">
 <MapPin className="w-4 h-4 text-blue-500" />
 {tour.location}
 </div>

 <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between text-slate-500 text-sm font-semibold">
 <div className="flex items-center gap-2">
 <Clock className="w-4 h-4 text-orange-500" />
 {tour.duration}
 </div>
 <div className="flex items-center gap-2">
 <Users className="w-4 h-4 text-blue-500" />
 {tour.people}
 </div>
 </div>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 )
}