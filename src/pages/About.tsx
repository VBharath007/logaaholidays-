import { motion } from 'framer-motion'
import { Target, Flag, Building2, User, Calendar, Briefcase, FileText, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export function About() {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[var(--color-bg-luxury)] min-h-screen pb-32">

            {/* 1. Hero Header */}
            <section className="relative h-[60vh] md:h-[70vh] min-h-[400px] w-full flex flex-col items-center justify-center text-center">
                <div className="absolute inset-0">
                    <img loading="lazy"
                        src='/assets/madurai/mahal.webp'
                        alt="About Logaa Holidays - Madurai"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary-forest)]/90 via-[var(--color-primary-forest)]/70 to-[var(--color-bg-luxury)]" />
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
            <section className="relative z-20 -mt-20 max-w-7xl mx-auto px-6">
                <div className="bg-white rounded-[3rem] p-8 md:p-12 ,0,0,0.05),-10px_-10px_30px_rgba(255,255,255,0.8),inset_2px_2px_5px_rgba(255,255,255,1)] border border-white">

                    <div className="grid lg:grid-cols-12 gap-12 items-start">

                        <div className="lg:col-span-5">
                            <div className="rounded-3xl overflow-hidden ,0,0,0.2)] sticky top-32 border-4 border-white">
                                <img loading="lazy"
                                    src='/assets/madurai/theppakulam.webp'
                                    alt="Event Management in Madurai Tamil Nadu"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-forest)] mb-6 font-display">Logaa Holidays – Madurai, Tamil Nadu</h2>

                            <div className="prose prose-lg text-slate-600 space-y-8 text-justify leading-relaxed relative">
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="relative z-10 text-slate-700 leading-loose"
                                >
                                    <span className="float-left text-6xl font-display text-[var(--color-primary-forest)] leading-none mr-3 mt-2 font-bold">A</span>
                                     Logaa Holidays, we believe every holiday should be a memorable experience filled with comfort, happiness, and unforgettable moments. Established in 2025 in Madurai, we are a professional travel company offering carefully planned domestic and international tour packages, honeymoon packages, family tours, hotel bookings, flight and train ticket bookings, car and coach rentals, and passport assistance.
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="relative z-10 text-slate-700 leading-loose"
                                >
                                    Under the guidance of our CEO and Founder, <strong>Mr. Loganathan</strong>, our experienced team provides personalized travel solutions designed around your needs, budget, and destination preferences. From family vacations and honeymoon trips to customized tours and adventure experiences, we take care of every detail to make your journey smooth and stress-free.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-4 py-4"
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
                                    transition={{ delay: 0.2 }}
                                    className="pl-6 border-l-4 border-[var(--color-blue-ocean)]/50 rounded-l text-slate-700 leading-relaxed font-medium"
                                >
                                    Our goal is simple — to make every rupee you spend on your holiday worthwhile. With 24×7 support and destination expertise, Logaa Holidays connects you with the right experiences, reliable services, and unforgettable journeys.
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="bg-[var(--color-primary-forest)]/5 p-6 md:p-8 rounded-3xl shadow-sm border border-[var(--color-primary-forest)]/10 italic text-xl text-[var(--color-primary-forest)] font-semibold text-center mt-8"
                                >
                                    "Your dream holiday starts with Logaa Holidays — we plan it, you enjoy it."
                                </motion.p>
                            </div>
                        </div>

                    </div>
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
                            Our Mission is to Inspire, Educate and Fullfill Dreams by providing Best travel experiences.
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
                            Our Goal is to Creat an environmentally and Socially conscious approach to tourism that Brings forth a high Quality of personality and trust, in turn Creating an everlasting memory
                        </p>
                    </div>
                </div>
            </section>



        </div>
    )
}
