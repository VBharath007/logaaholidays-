import { motion } from 'framer-motion'
import { Star, ShieldCheck, Heart, MapPin, Quote } from 'lucide-react'

// Torn Paper SVG Divider (Matched to Services Page)
const TornPaperBottom = () => (
 <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20" style={{ transform: 'translateY(1px)' }}>
 <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[70px] rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
 <path d="M0,0V46.29c47.79,22.2,103.59,32.15,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-[var(--color-bg-luxury)]"></path>
 <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-[var(--color-bg-luxury)]"></path>
 <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-[var(--color-bg-luxury)]"></path>
 </svg>
 </div>
)

const reviews = [
 { id: 1, name: 'Babu Moorthi', location: 'Madurai, Tamil Nadu', img: 'https://i.pravatar.cc/150?img=11', quote: 'Being a travel enthusiast, I was searching for a travel agency that can provide exciting travel packages across exotic locations. I tried many travel websites but I found this company to be the best. And, trust me, it was one of the best decisions I have ever made. I got numerous exciting deals on every package I chose. I believe this company is one of the most trusted travel agents.' },
 { id: 2, name: 'Manoshi Chowdhury', location: 'Kolkata, West Bengal', img: 'https://i.pravatar.cc/150?img=32', quote: 'My friend suggested contacting this company as I was looking for a travel agent that can provide the best tour package for my preferred destination. It offered complete solution to my travel requirements and the best part is that its customer care executives handle every query with patience and provide apt suggestions.' },
 { id: 3, name: 'Karthik Subramanian', location: 'Chennai, Tamil Nadu', img: 'https://i.pravatar.cc/150?img=12', quote: 'I was ardently looking for a travel agent that can provide excellent travel packages in the travel industry. I tried many travel websites but I found this company as the best. It helped me in getting the best deal that too within my budget. So, I can assure that they offer the best service as I have experienced it by myself.' },
 { id: 4, name: 'Anjali Krishnan', location: 'Kochi, Kerala', img: 'https://i.pravatar.cc/150?img=43', quote: 'Logaa Holidays moolama enga family trip plan pannathu romba super experience. Trip fulla ellame perfect ah arrange panni kuduthanga. Hotels and cab service ellame top class. Romba thanks team, definitely recommend pannuven!' },
 { id: 5, name: 'Dinesh Kumar', location: 'Coimbatore, Tamil Nadu', img: 'https://i.pravatar.cc/150?img=52', quote: 'Customer service romba nalla irunthuchu. Enga budget kula best package select panni thandhanga. Driver romba polite ah iruntharu, safety aana journey. Next trip kandipa Logaa Holidays la than book pannuven. Worth every single penny!' },
 { id: 6, name: 'Nithya Ramesh', location: 'Bangalore, Karnataka', img: 'https://i.pravatar.cc/150?img=21', quote: 'Logaa Holidays transformed our dream vacation into reality. Their local knowledge is simply unmatched. Every single detail of our trip was handled with pure professionalism and care.' },
]

export function TestimonialsPage() {
 return (
 <div className="bg-[var(--color-bg-luxury)] min-h-screen">

 {/* 1. HERO SECTION */}
 <section className="relative w-full h-[50vh] min-h-[400px] flex overflow-hidden">
 <div className="absolute inset-0 bg-[var(--color-blue-ocean)] z-0" />
 <div className="absolute inset-0 w-[40%] right-0 bg-[var(--color-accent-gold)] skew-x-[-15deg] translate-x-[20%] origin-bottom-right z-0" />

 <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col justify-center h-full pt-20">
 <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display italic text-2xl text-white/90 mb-2">Our Community</motion.p>
 <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-bold font-display italic tracking-wider text-white mb-6">
 What Our <br /> Clients Say
 </motion.h1>
 </div>
 <TornPaperBottom />
 </section>

 {/* 2. FEATURED TESTIMONIAL (Exact UI Match) */}
 <section className="pt-10 pb-8 px-6 text-center max-w-5xl mx-auto relative z-20">
 <h3 className="text-[var(--color-neutral-medium)] font-bold uppercase tracking-widest mb-2 relative z-20">Our Client Says!</h3>
 <h2 className="text-5xl md:text-7xl font-display font-bold text-[var(--color-blue-ocean)] italic tracking-wider opacity-10 relative z-20 pointer-events-none">TESTIMONIAL</h2>

 <div className="flex flex-col md:flex-row items-center gap-12 -mt-10 md:-mt-16 relative z-30">
 <div className="relative">
 <div className="w-64 h-64 rounded-3xl overflow-hidden clay-card border-8 border-white">
 <img src='/assets/Uttar Pradesh1.avif' alt="Client" className="w-full h-full object-cover" />
 </div>
 {/* Floating avatars exactly like the UI */}
 <img src="https://i.pravatar.cc/150?img=11" className="absolute -top-4 -right-8 w-12 h-12 rounded-full border-4 border-white " alt="Avatar" />
 <img src="https://i.pravatar.cc/150?img=12" className="absolute top-1/2 -right-12 w-10 h-10 rounded-full border-4 border-white " alt="Avatar" />
 <img src="https://i.pravatar.cc/150?img=13" className="absolute -bottom-4 -right-4 w-14 h-14 rounded-full border-4 border-white " alt="Avatar" />
 </div>

 <div className="text-left max-w-md bg-white p-10 rounded-3xl clay-card relative z-30">
 <Quote className="w-10 h-10 text-[var(--color-primary-forest)] opacity-20 absolute top-6 right-6" />
 <h4 className="font-display text-2xl text-[var(--color-blue-ocean)] font-bold italic mb-4">James Smith</h4>
 <p className="text-[var(--color-neutral-dark)] leading-relaxed italic mb-8">"This travel agency provided the most unforgettable experience. Everything was perfectly planned and executed. I highly recommend them for your next journey! The attention to detail was simply incredible."</p>
 <div className="flex text-[var(--color-blue-ocean)]">
 <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
 </div>
 </div>
 </div>
 </section>

 {/* 3. TESTIMONIAL GRID */}
 <section className="py-10 px-6 max-w-7xl mx-auto">
 <div className="text-center mb-12">
 <h2 className="text-3xl font-display font-bold text-[var(--color-blue-ocean)] mb-2">More <span className="text-[var(--color-blue-ocean)] italic font-normal">Success Stories</span></h2>
 <p className="text-[var(--color-neutral-medium)]">Read what thousands of happy travelers have experienced.</p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 {reviews.map((review, i) => (
 <motion.div
 key={review.id}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.1 }}
 className="clay-card bg-white p-8 rounded-3xl relative flex flex-col group transition-transform duration-300"
 >
 <div className="flex items-center gap-4 mb-6">
 <img src={review.img} className="w-14 h-14 rounded-full border-2 border-[var(--color-blue-ocean)]" alt={review.name} />
 <div>
 <h4 className="font-bold text-[var(--color-blue-ocean)] text-lg leading-tight">{review.name}</h4>
 <div className="flex items-center text-xs text-[var(--color-neutral-medium)] font-bold mt-1">
 <MapPin className="w-3 h-3 mr-1" /> {review.location}
 </div>
 </div>
 </div>
 <p className="text-[var(--color-neutral-medium)] text-sm leading-relaxed mb-6 flex-1 italic">
 "{review.quote}"
 </p>
 <div className="flex text-[var(--color-blue-ocean)]">
 <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
 </div>
 </motion.div>
 ))}
 </div>
 </section>

 {/* 4. TRUST BANNER */}
 <section className="pt-10 pb-4 px-6 max-w-6xl mx-auto">
 <div className="p-12 md:p-16 text-white text-center relative overflow-hidden bg-[var(--color-primary-forest)] rounded-[3rem] ">
 {/* Decorative Background Elements */}
 <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-blue-ocean)] rounded-full blur-[100px] opacity-10 translate-x-1/2 -translate-y-1/2"></div>
 <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-primary-teal)] rounded-full blur-[100px] opacity-10 -translate-x-1/2 translate-y-1/2"></div>

 <div className="relative z-10">
 <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Join <span className="text-white/90 italic">10,000+</span> Happy Travelers</h2>
 <p className="text-white/80 max-w-2xl mx-auto mb-12 text-lg">
 We have been organizing incredible journeys for over 25 years. Let us plan your next unforgettable adventure.
 </p>

 <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
 <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full border border-white/20">
 <ShieldCheck className="w-6 h-6 text-[#b5d536]" />
 <span className="font-bold text-sm tracking-wider uppercase">Verified Agency</span>
 </div>
 <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full border border-white/20">
 <Heart className="w-6 h-6 text-white" />
 <span className="font-bold text-sm tracking-wider uppercase">99% Satisfaction</span>
 </div>
 </div>

 <button className="bg-white/10 border border-white/20 text-white backdrop-blur-md px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-[var(--color-primary-forest)] transition-all ">
 Plan Your Trip Now
 </button>
 </div>
 </div>
 </section>

 </div>
 )
}
