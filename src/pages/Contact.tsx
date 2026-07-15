import { motion } from 'framer-motion';
import { Star, MapPin, Mail, Phone, Plane, Globe, Compass, CheckCircle2, Send } from 'lucide-react';
import { useState } from 'react';

// Smooth Wave Divider SVG
const WaveDivider = ({ className = '', fill = '#072a33', flip = false }) => (
 <div className={`absolute -top-[1px] left-0 w-full overflow-hidden leading-none z-10 ${className}`} style={{ transform: flip ? 'rotate(180deg)' : 'none' }}>
 <svg className="relative block w-[calc(100%+1.3px)] h-[100px] md:h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
 <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current" style={{ fill }}></path>
 </svg>
 </div>
);

const WaveDividerBottom = ({ className = '', fill = '#072a33' }) => (
 <div className={`absolute -bottom-[1px] left-0 w-full overflow-hidden leading-none z-10 ${className}`}>
 <svg className="relative block w-[calc(100%+1.3px)] h-[100px] md:h-[150px] rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
 <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current" style={{ fill }}></path>
 </svg>
 </div>
);

export function Contact() {
 const [formData, setFormData] = useState({
 name: '', email: '', phone: '', subject: '', message: ''
 });

 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 console.log(formData);
 };

 return (
 <div className="bg-[var(--color-primary-forest)] min-h-screen text-white font-body overflow-x-hidden">
 
 {/* 1. Hero Header */}
 <section className="relative h-[60vh] min-h-[500px] w-full flex flex-col items-center justify-center text-center">
 <div className="absolute inset-0">
 <img 
 src='/assets/kerala1.avif' 
 alt="Travel Above Clouds" 
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-blue-ocean)] via-[var(--color-blue-ocean)]/60 to-[var(--color-neutral-black)]/30" />
 </div>
 
 <div className="relative z-10 px-6 mt-16 max-w-4xl mx-auto">
 <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
 <p className="font-display text-4xl md:text-5xl text-white/90 italic tracking-wide mb-4 text-shadow">We're Here For You</p>
 <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter uppercase mb-6 ">
 CONTACT US
 </h1>
 <p className="text-lg md:text-xl text-white/90 font-medium tracking-widest ">
 Let's craft the perfect itinerary for your next unforgettable journey.
 </p>
 </motion.div>
 </div>
 </section>

 {/* 2. GET SOCIAL SECTION */}
 <section className="relative w-full py-24 bg-[var(--color-blue-ocean)]">
 <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
 <div className="relative z-10 flex justify-center">
 <div className="w-80 h-80 bg-[var(--color-primary-emerald)] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] ,0,0,0.4),-10px_-10px_20px_rgba(255,255,255,0.05),inset_2px_2px_5px_rgba(255,255,255,0.1)] p-4 overflow-hidden animate-[spin_20s_linear_infinite]">
 <div className="w-full h-full rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden animate-[spin_20s_linear_infinite_reverse]">
 <img src='/assets/kerala1.avif' alt="Wanderlust" className="w-full h-full object-cover scale-125" />
 </div>
 </div>
 {/* Center Compass */}
 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[var(--color-primary-forest)] rounded-full border-4 border-[var(--color-accent-gold)] flex items-center justify-center z-20">
 <Compass className="w-10 h-10 text-white" />
 </div>
 </div>
 
 <div className="relative z-10">
 <h3 className="text-white/80 font-bold tracking-widest uppercase mb-2 text-sm">Join Our Community</h3>
 <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
 Follow Our <br/> <span className="text-white/90 italic normal-case">Global</span> Journeys
 </h2>
 <p className="text-white/70 mb-8 leading-relaxed max-w-lg text-sm">
 Connect with fellow travelers and get inspired by our latest expeditions, hidden gems, and exclusive luxury stays around the world. We share real stories from real adventurers.
 </p>
 <p className="text-white/70 mb-8 leading-relaxed max-w-lg text-sm">
 Subscribe to our newsletter for insider tips, exclusive package deals, and destination guides curated by our travel experts.
 </p>
 <button className="bg-white/10 border border-white/20 text-white backdrop-blur-md px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[var(--color-primary-forest)] transition-all">
 Sign Up Now
 </button>
 </div>
 </div>
 <WaveDividerBottom fill="var(--color-primary-forest)" />
 </section>

 {/* 3. OUR SERVICES */}
 <section className="relative w-full py-32 bg-[var(--color-primary-forest)]">
 <div className="max-w-6xl mx-auto px-6 text-center">
 <h3 className="text-white/80 font-bold tracking-widest uppercase mb-2 text-sm">What We Offer</h3>
 <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-12">Premium Services</h2>
 
 <div className="grid md:grid-cols-3 gap-8 mt-16 items-center">
 {/* Card 1 */}
 <div className="bg-[var(--color-blue-ocean)] rounded-3xl p-4 h-[400px] flex flex-col relative overflow-hidden group border border-white/10">
 <img src='/assets/kerala1.avif' alt="Luxury Stays" className="w-full h-full object-cover rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" />
 <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-forest)] via-[var(--color-primary-forest)]/50 to-transparent"></div>
 <div className="absolute bottom-8 left-0 right-0 text-center z-10">
 <div className="w-16 h-16 rounded-full border border-white/30 mx-auto mb-4 flex items-center justify-center backdrop-blur-md bg-white/10">
 <span className="text-white font-display italic text-2xl">01</span>
 </div>
 <h4 className="text-white font-bold text-xl uppercase tracking-wider">Luxury Stays</h4>
 </div>
 </div>

 {/* Card 2 - Active */}
 <div className="bg-[var(--color-primary-emerald)] rounded-3xl p-8 h-[400px] flex flex-col items-center justify-center relative overflow-hidden transform md:-translate-y-8 border border-white/10">
 <div className="w-20 h-20 rounded-full border border-white/20 mb-6 flex items-center justify-center">
 <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-md">
 <span className="text-white font-display italic text-2xl">02</span>
 </div>
 </div>
 <h4 className="text-white font-bold text-xl uppercase tracking-wider mb-4">Curated Tours</h4>
 <p className="text-white/70 text-sm text-center mb-8">
 Experience the world with our expertly crafted itineraries, featuring private guides and exclusive access to hidden gems.
 </p>
 <button className="bg-white/10 border border-white/20 text-white backdrop-blur-md px-6 py-2 rounded-full font-bold text-sm hover:bg-white hover:text-[var(--color-primary-forest)] transition-all">
 View Packages
 </button>
 </div>

 {/* Card 3 */}
 <div className="bg-[var(--color-blue-ocean)] rounded-3xl p-4 h-[400px] flex flex-col relative overflow-hidden group border border-white/10">
 <img src='/assets/himachal.avif' alt="Flight Booking" className="w-full h-full object-cover rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" />
 <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-forest)] via-[var(--color-primary-forest)]/50 to-transparent"></div>
 <div className="absolute bottom-8 left-0 right-0 text-center z-10">
 <div className="w-16 h-16 rounded-full border border-white/30 mx-auto mb-4 flex items-center justify-center backdrop-blur-md bg-white/10">
 <span className="text-white font-display italic text-2xl">03</span>
 </div>
 <h4 className="text-white font-bold text-xl uppercase tracking-wider">Flight Booking</h4>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* 4. TRAVEL GALLERY */}
 <section className="relative w-full py-20 bg-gradient-to-b from-[var(--color-primary-forest)] to-[var(--color-blue-ocean)]">
 <div className="max-w-6xl mx-auto px-6 text-center mb-16">
 <h3 className="text-white/80 font-bold tracking-widest uppercase mb-2 text-sm">Travel Gallery</h3>
 <div className="w-24 h-px bg-[var(--color-accent-gold)]/50 mx-auto mb-6"></div>
 <p className="text-white/70 text-sm max-w-xl mx-auto">Glimpses of paradise. Explore the stunning destinations waiting for you.</p>
 </div>

 <div className="max-w-6xl mx-auto px-6">
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px]">
 <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden ,0,0,0.5),-4px_-4px_10px_rgba(255,255,255,0.05)] border border-white/5 relative group">
 <img src='/assets/Uttar Pradesh1.avif' className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Paris" />
 </div>
 <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden ,0,0,0.5),-4px_-4px_10px_rgba(255,255,255,0.05)] border border-white/5 relative group">
 <img src='/assets/himachal.avif' className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Dubai" />
 </div>
 <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden ,0,0,0.5),-4px_-4px_10px_rgba(255,255,255,0.05)] border border-white/5 bg-[var(--color-primary-emerald)] flex items-center justify-center relative group">
 <img src='/assets/karnataka1.avif' className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" alt="Beach" />
 </div>
 <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden ,0,0,0.5),-4px_-4px_10px_rgba(255,255,255,0.05)] border border-white/5 relative group">
 <img src='/assets/kerala1.avif' className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Venice" />
 </div>
 <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden ,0,0,0.5),-4px_-4px_10px_rgba(255,255,255,0.05)] border border-white/5 relative group">
 <img src='/assets/Tripura1.avif' className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Mountains" />
 </div>
 <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden ,0,0,0.5),-4px_-4px_10px_rgba(255,255,255,0.05)] border border-white/5 bg-[var(--color-primary-forest)] p-2">
 <img src='/assets/himachal.avif' className="w-full h-full object-cover rounded-xl" alt="Maldives" />
 </div>
 <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden ,0,0,0.5),-4px_-4px_10px_rgba(255,255,255,0.05)] border border-white/5 relative group">
 <img src='/assets/Mizoram1.avif' className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Cityscape" />
 </div>
 </div>
 
 <div className="text-center mt-12">
 <button className="bg-white/10 border border-white/20 text-white backdrop-blur-md px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[var(--color-primary-forest)] transition-all uppercase tracking-wider text-sm">
 View All Destinations
 </button>
 </div>
 </div>

 </section>

 {/* 6. CONTACT SECTION (CONTACT US) */}
 <section className="relative w-full pt-32 pb-40 bg-[var(--color-blue-ocean)]">
 <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-16">
 
 {/* Contact Form (Claymorphism Inset) */}
 <div className="lg:col-span-2">
 <h3 className="text-white/90 font-bold tracking-widest uppercase mb-8 text-2xl">Plan Your Next Adventure</h3>
 <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="col-span-1">
 <input 
 type="text" 
 placeholder="Your Name *" 
 required
 className="w-full bg-[var(--color-primary-forest)] text-white placeholder-cyan-100/50 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-[var(--color-accent-gold)]/50 border border-white/10 transition-all"
 />
 </div>
 <div className="col-span-1">
 <input 
 type="email" 
 placeholder="Email Address *" 
 required
 className="w-full bg-[var(--color-primary-forest)] text-white placeholder-cyan-100/50 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-[var(--color-accent-gold)]/50 border border-white/10 transition-all"
 />
 </div>
 <div className="col-span-1">
 <select 
 required
 className="w-full bg-[var(--color-primary-forest)] text-white placeholder-cyan-100/50 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-[var(--color-accent-gold)]/50 border border-white/10 transition-all appearance-none"
 >
 <option value="" disabled selected>Select Country *</option>
 <option value="India">India</option>
 <option value="USA">USA</option>
 <option value="UK">UK</option>
 <option value="UAE">UAE</option>
 <option value="Other">Other</option>
 </select>
 </div>
 <div className="col-span-1">
 <select 
 required
 className="w-full bg-[var(--color-primary-forest)] text-white placeholder-cyan-100/50 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-[var(--color-accent-gold)]/50 border border-white/10 transition-all appearance-none"
 >
 <option value="" disabled selected>Select State *</option>
 <option value="Tamil Nadu">Tamil Nadu</option>
 <option value="Kerala">Kerala</option>
 <option value="Karnataka">Karnataka</option>
 <option value="Maharashtra">Maharashtra</option>
 <option value="Delhi">Delhi</option>
 <option value="Other">Other</option>
 </select>
 </div>
 <div className="col-span-1">
 <input 
 type="text" 
 placeholder="City" 
 className="w-full bg-[var(--color-primary-forest)] text-white placeholder-cyan-100/50 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-[var(--color-accent-gold)]/50 border border-white/10 transition-all"
 />
 </div>
 <div className="col-span-1">
 <input 
 type="tel" 
 placeholder="Phone / Mobile *" 
 required
 className="w-full bg-[var(--color-primary-forest)] text-white placeholder-cyan-100/50 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-[var(--color-accent-gold)]/50 border border-white/10 transition-all"
 />
 </div>
 <div className="col-span-1 md:col-span-2">
 <textarea 
 placeholder="Enquiry Details *" 
 required
 rows={5}
 className="w-full bg-[var(--color-primary-forest)] text-white placeholder-cyan-100/50 px-6 py-4 rounded-3xl outline-none focus:ring-2 focus:ring-[var(--color-accent-gold)]/50 border border-white/10 transition-all resize-none"
 ></textarea>
 </div>
 
 <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-6 mt-4">
 <label className="flex items-center gap-3 text-white/70 text-sm cursor-pointer group">
 <div className="w-5 h-5 rounded bg-[var(--color-primary-forest)] ,0,0,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.05)] flex items-center justify-center">
 <CheckCircle2 className="w-3 h-3 text-white opacity-0 group-hover:opacity-50 transition-opacity" />
 </div>
 I agree to the Terms & Conditions
 </label>
 
 <button type="submit" className="bg-white/10 border border-white/20 text-white backdrop-blur-md px-10 py-4 rounded-full font-bold hover:bg-white hover:text-[var(--color-primary-forest)] transition-all uppercase tracking-wider text-sm flex items-center gap-3 w-full sm:w-auto justify-center">
 Send Message <Send className="w-4 h-4" />
 </button>
 </div>
 </form>
 </div>

 {/* Contact Info */}
 <div className="lg:col-span-1 pt-16">
 <h3 className="text-white font-bold tracking-widest uppercase mb-8 text-xl border-b border-white/10 pb-4">Contact Info</h3>
 
 <div className="space-y-6 mb-10">
 <div className="flex items-start gap-4 group">
 <div className="w-10 h-10 rounded-full bg-[var(--color-primary-emerald)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
 <MapPin className="w-4 h-4 text-white" />
 </div>
 <div>
 <p className="text-white font-bold text-sm">Contact Person</p>
 <p className="text-white/70 text-sm">Mr. Loganathan</p>
 <p className="text-white font-bold text-sm mt-4">Address</p>
 <p className="text-white/70 text-sm">D No.T247, Ellis Nagar , Housing Board Sector T Type, Madurai, Tamil Nadu, India - 625016</p>
 </div>
 </div>
 
 <div className="flex items-start gap-4 group">
 <div className="w-10 h-10 rounded-full bg-[var(--color-primary-emerald)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
 <Phone className="w-4 h-4 text-white" />
 </div>
 <div>
 <p className="text-white font-bold text-sm">Call Us</p>
 <p className="text-white/70 text-sm cursor-pointer hover:text-white transition-colors">View Mobile Number</p>
 </div>
 </div>
 
 <div className="flex items-start gap-4 group">
 <div className="w-10 h-10 rounded-full bg-[var(--color-primary-emerald)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
 <Mail className="w-4 h-4 text-white" />
 </div>
 <div>
 <p className="text-white font-bold text-sm">Email</p>
 <p className="text-white/70 text-sm break-all">Logaaholidays@gmail.com</p>
 <p className="text-white font-bold text-sm mt-4">Alt. Email</p>
 <p className="text-white/70 text-sm break-all">bookinglogaaholidays@gmail.com</p>
 </div>
 </div>

 <div className="flex items-start gap-4 group">
 <div className="w-10 h-10 rounded-full bg-[var(--color-primary-emerald)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
 <Globe className="w-4 h-4 text-white" />
 </div>
 <div>
 <p className="text-white font-bold text-sm">Web Address</p>
 <a href="https://www.logaaholidays.in" className="text-white/70 text-sm break-all hover:text-[var(--color-accent-gold)] transition-colors" target="_blank" rel="noreferrer">https://www.logaaholidays.in</a>
 <p className="text-white font-bold text-sm mt-4">Web Pages</p>
 <div className="flex flex-col gap-1 mt-1">
 <a href="https://www.tourtravelworld.com/travel-agents/logaa-holidays-1987279/" className="text-white/70 text-xs break-all hover:text-[var(--color-accent-gold)] transition-colors" target="_blank" rel="noreferrer">Tour Travel World Profile</a>
 <a href="https://www.indianyellowpages.com/madurai/logaa-holidays-14465908/" className="text-white/70 text-xs break-all hover:text-[var(--color-accent-gold)] transition-colors" target="_blank" rel="noreferrer">Indian Yellow Pages Profile</a>
 </div>
 </div>
 </div>
 </div>

 <div className="w-full h-48 rounded-3xl overflow-hidden ,0,0,0.5),-4px_-4px_10px_rgba(255,255,255,0.05)] border border-white/5 relative group">
 <img src='/assets/Nagaland1.avif' alt="World Map" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
 <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
 <div className="w-12 h-12 rounded-full bg-[var(--color-accent-gold)] ,165,57,0.5)] flex items-center justify-center animate-bounce">
 <MapPin className="w-6 h-6 text-[var(--color-neutral-black)]" />
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 </div>
 );
}
