import { motion } from 'framer-motion'
import { Target, Flag, Building2, User, Calendar, Briefcase, FileText, ChevronRight, MapPin, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useSEO } from '../hooks/useSEO'

export function About() {
    useSEO(
        'About Us | Logaa Holidays - Trusted Travel Agency in Madurai',
        'Learn about Logaa Holidays, a premier travel agency in Madurai offering customized tour packages, flight booking, car rentals, and complete travel assistance.',
        'About Logaa Holidays, Travel Agency in Madurai, Tour Operator in Madurai, Madurai Travel Services, Best Travel Agency'
    );

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[var(--color-bg-luxury)] min-h-screen pb-32">

            {/* 1. Hero Header */}
            <section className="relative h-[60vh] md:h-[100vh] min-h-[400px] w-full flex flex-col items-center justify-center text-center">
                <div className="absolute inset-0">
                    <img src="/assets/about/abouthero.png" alt="Logaa Holidays - Premium Travel Agency and Tour Operator in Madurai" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-[var(--color-bg-luxury)]" />
                </div>

                <div className="relative z-10 px-6 mt-16">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wide uppercase mb-6 font-display">
                            About Us
                        </h1>
                        <div className="flex items-center justify-center gap-2 text-sm font-medium text-white/90 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mx-auto w-fit ">
                            <Link to="/" className="hover:text-white transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-white font-bold">About Us</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Main Content */}
            <section className="relative z-20 -mt-14 max-w-7xl mx-auto px-6">
                <div className="bg-white rounded-[3rem] p-8 md:p-12 ,0,0,0.05),-10px_-10px_30px_rgba(255,255,255,0.8),inset_2px_2px_5px_rgba(255,255,255,1)] border border-white">

                    <div className="grid lg:grid-cols-12 gap-12 items-start">

                        <div className="lg:col-span-5">
                            <div className="rounded-3xl overflow-hidden ,0,0,0.2)] sticky top-32 border-4 border-white">
                                <img loading="lazy"
                                    src='/assets/about/certificate.jpg'
                                    alt="Logaa Holidays ISO Certificate - Trusted and Recognized Travel Agency in Madurai"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-forest)] mb-6 font-display">Logaa Holidays – Madurai, Tamil Nadu</h2>

                            <div className="prose prose-lg text-slate-600 space-y-6 leading-relaxed relative">
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="relative z-10 text-slate-700 leading-loose"
                                >
                                    <span className="float-left text-6xl font-display text-[var(--color-primary-forest)] leading-none mr-3 mt-2 font-bold">A</span>
                                    t Logaa Holidays, we believe every holiday should be a memorable experience filled with comfort, happiness, and unforgettable moments. Based in Madurai, we are a professional travel company dedicated to offering carefully planned itineraries and comprehensive travel services tailored to your specific needs and budget.
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="relative z-10 text-slate-700 leading-loose"
                                >
                                    Under the guidance of our CEO and Founder, <strong>Mr. Loganathan</strong>, our dedicated team takes care of every detail to make your journey smooth and stress-free. Whether you are planning a relaxing getaway or a detailed itinerary, we connect you with the right experiences and reliable services.
                                </motion.p>
                                
                                {/* Services List */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="pt-4"
                                >
                                    <h3 className="text-xl font-bold text-[var(--color-blue-ocean)] mb-4">Our Comprehensive Travel Services:</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                                        {[
                                            "Customized Tour Packages",
                                            "Domestic Tours",
                                            "International Tours",
                                            "Family Tours",
                                            "Honeymoon Packages",
                                            "Pilgrimage Tours",
                                            "Group / Student Tours",
                                            "Hotel Reservations",
                                            "Car & Coach Rental",
                                            "Flight Booking Assistance",
                                            "Railway Booking Assistance",
                                            "Travel Support"
                                        ].map((service, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary-forest)]"></div>
                                                <span className="text-sm font-medium text-slate-700">{service}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-4 py-4 mt-2"
                                >
                                    <div className="h-px bg-slate-200 flex-1"></div>
                                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200 shadow-sm">
                                        <div className="w-2 h-2 rounded-full bg-[var(--color-blue-ocean)]"></div>
                                    </div>
                                    <div className="h-px bg-slate-200 flex-1"></div>
                                </motion.div>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="bg-[var(--color-primary-forest)]/5 p-6 md:p-8 rounded-3xl shadow-sm border border-[var(--color-primary-forest)]/10 italic text-xl text-[var(--color-primary-forest)] font-semibold text-center mt-4"
                                >
                                    "Your dream holiday starts with Logaa Holidays — we plan it, you enjoy it."
                                </motion.p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            
            {/* 2.5 Core Values / Why Choose Us */}
            <section className="max-w-7xl mx-auto px-6 mt-16">
                <div className="grid md:grid-cols-3 gap-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow"
                    >
                        <div className="w-16 h-16 bg-[var(--color-primary-forest)]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary-forest)] transition-colors">
                            <MapPin className="w-8 h-8 text-[var(--color-primary-forest)] group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">Local Destination Expertise</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            We possess in-depth knowledge of our destinations, ensuring your itineraries include both iconic landmarks and hidden gems.
                        </p>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow"
                    >
                        <div className="w-16 h-16 bg-[var(--color-blue-ocean)]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-blue-ocean)] transition-colors">
                            <FileText className="w-8 h-8 text-[var(--color-blue-ocean)] group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">Customized Travel Planning</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Every trip is unique. We tailor your packages specifically to your preferences, schedule, and budgetary requirements.
                        </p>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow"
                    >
                        <div className="w-16 h-16 bg-[var(--color-deep-teal)]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-deep-teal)] transition-colors">
                            <ShieldCheck className="w-8 h-8 text-[var(--color-deep-teal)] group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">Reliable Travel Assistance</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            From booking your tickets to providing on-ground support, our team ensures a seamless and secure travel experience.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 3. Mission & Goal */}
            <section className="max-w-7xl mx-auto px-6 mt-12 grid md:grid-cols-2 gap-8">
                <div className="bg-[var(--color-primary-forest)] text-white rounded-[3rem] p-10 ,93,62,0.2),-10px_-10px_30px_rgba(255,255,255,0.8),inset_2px_2px_5px_rgba(255,255,255,0.1)] border border-white/10 relative overflow-hidden group">
                    <div className="absolute -right-10 -top-10 text-white/5 group-hover:scale-110 transition-transform duration-700">
                        <Target className="w-64 h-64" />
                    </div>
                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                            <Target className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold mb-4 font-display">Our Mission</h3>
                        <p className="text-white/90 text-lg leading-relaxed">
                            Our Mission is to Inspire, Educate and Fulfill Dreams by providing Best travel experiences.
                        </p>
                    </div>
                </div>

                <div className="bg-[var(--color-blue-ocean)] text-white rounded-[3rem] p-10 ,132,199,0.2),-10px_-10px_30px_rgba(255,255,255,0.8),inset_2px_2px_5px_rgba(255,255,255,0.1)] border border-white/10 relative overflow-hidden group">
                    <div className="absolute -right-10 -top-10 text-white/5 group-hover:scale-110 transition-transform duration-700">
                        <Flag className="w-64 h-64" />
                    </div>
                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                            <Flag className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold mb-4 font-display">Our Goal</h3>
                        <p className="text-white/90 text-lg leading-relaxed">
                            Our Goal is to Create an environmentally and socially conscious approach to tourism that brings forth a high quality of personality and trust, in turn creating an everlasting memory.
                        </p>
                    </div>
                </div>
            </section>



        </div>
    )
}
