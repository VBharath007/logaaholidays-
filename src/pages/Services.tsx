import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Search, Calendar, Users, ShieldCheck, HeadphonesIcon, Globe, Map, CheckCircle2, ChevronRight, PhoneCall, Star, ChevronLeft } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// Torn Paper SVG Divider
const TornPaperTop = ({ fillClass = "fill-[var(--color-bg-luxury)]" }) => (
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20" style={{ transform: 'translateY(-1px)' }}>
    <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[70px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,0V46.29c47.79,22.2,103.59,32.15,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className={fillClass}></path>
      <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className={fillClass}></path>
      <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={fillClass}></path>
    </svg>
  </div>
)

const TornPaperBottom = ({ fillClass = "fill-[var(--color-bg-luxury)]" }) => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20" style={{ transform: 'translateY(1px)' }}>
    <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[70px] rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,0V46.29c47.79,22.2,103.59,32.15,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className={fillClass}></path>
      <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className={fillClass}></path>
      <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={fillClass}></path>
    </svg>
  </div>
)

const slides = [
  {
    image: '/assets/service/madurai banner size.webp',
    title: 'God\'s Own Country',
    subtitle: 'Experience the spiritual heart of South India with our exclusive packages.',
    cta: 'Explore Packages',
    link: '/tour-packages/madurai-tours'
  },
  {
    image: '/assets/service/allepey.webp',
    title: 'Discover Kerala',
    subtitle: 'Unwind in the serene backwaters and lush green landscapes of Kerala.',
    cta: 'View Itineraries',
    link: '/tour-packages/kerala-tours'
  },
  {
    image: '/assets/service/shirdi banner zize.webp',
    title: 'Spiritual Shirdi',
    subtitle: 'Seek blessings and find peace in the divine land of Sai Baba.',
    cta: 'Plan Your Trip',
    link: '/tour-packages/shirdi-tours'
  },
  {
    image: '/assets/service/kasi varanasai.webp',
    title: 'Holy Kasi',
    subtitle: 'Witness the eternal spiritual aura of Varanasi along the holy Ganges.',
    cta: 'Discover More',
    link: '/tour-packages/varanasi-tours'
  },
  {
    image: '/assets/service/chenni.webp',
    title: 'Vibrant Chennai',
    subtitle: 'Explore the cultural capital and its beautiful coastlines.',
    cta: 'Start Journey',
    link: '/tour-packages/chennai-tours'
  }
];

export function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const desktopVariants = {
    main: {
      left: '0%', top: '0%', width: '100%', height: '100%',
      marginTop: '0px', marginLeft: '0px', borderRadius: '0px',
      opacity: 1, zIndex: 0, scale: 1,
    },
    thumb1: {
      left: '100%', top: '50%', width: '240px', height: '360px',
      marginTop: '-180px', marginLeft: '-600px', borderRadius: '24px',
      opacity: 1, zIndex: 10, scale: 1,
    },
    thumb2: {
      left: '100%', top: '50%', width: '240px', height: '360px',
      marginTop: '-180px', marginLeft: '-320px', borderRadius: '24px',
      opacity: 1, zIndex: 9, scale: 1,
    },
    thumb3: {
      left: '100%', top: '50%', width: '240px', height: '360px',
      marginTop: '-180px', marginLeft: '-40px', borderRadius: '24px',
      opacity: 0, zIndex: 8, scale: 0.9,
    },
    hiddenOffLeft: {
      left: '0%', top: '0%', width: '100%', height: '100%',
      marginTop: '0px', marginLeft: '-20%', borderRadius: '0px',
      opacity: 0, zIndex: 0, scale: 1.05,
    }
  };

  const mobileVariants = {
    main: {
      left: '0%', top: '0%', width: '100%', height: '100%',
      marginTop: '0px', marginLeft: '0px', borderRadius: '0px',
      opacity: 1, zIndex: 0, scale: 1,
    },
    thumb1: {
      left: '50%', top: '100%', width: '140px', height: '200px',
      marginTop: '-240px', marginLeft: '-150px', borderRadius: '16px',
      opacity: 1, zIndex: 10, scale: 1,
    },
    thumb2: {
      left: '50%', top: '100%', width: '140px', height: '200px',
      marginTop: '-240px', marginLeft: '10px', borderRadius: '16px',
      opacity: 1, zIndex: 9, scale: 1,
    },
    thumb3: {
      left: '50%', top: '100%', width: '140px', height: '200px',
      marginTop: '-240px', marginLeft: '170px', borderRadius: '16px',
      opacity: 0, zIndex: 8, scale: 0.9,
    },
    hiddenOffLeft: {
      left: '0%', top: '0%', width: '100%', height: '100%',
      marginTop: '0px', marginLeft: '-20%', borderRadius: '0px',
      opacity: 0, zIndex: 0, scale: 1.05,
    }
  };

  const getSlideState = (offset: number) => {
    if (offset === 0) return 'main';
    if (offset === 1) return 'thumb1';
    if (offset === 2) return 'thumb2';
    if (offset === 3) return 'thumb3';
    return 'hiddenOffLeft';
  };

  return (
    <div className="bg-[var(--color-bg-luxury)] min-h-screen overflow-x-hidden">

      {/* 1. DYNAMIC HERO SECTION (Stack Slider) */}
      <section className="relative w-full h-[100vh] min-h-[700px] bg-black overflow-hidden">
        {slides.map((slide, index) => {
          const offset = (index - currentSlide + slides.length) % slides.length;
          const variantName = getSlideState(offset);
          const v = isMobile ? mobileVariants : desktopVariants;

          return (
            <motion.div
              key={index}
              variants={v}
              initial={false}
              animate={variantName}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)] cursor-pointer"
              onClick={() => {
                if (offset === 1) nextSlide();
                if (offset === 2) { nextSlide(); setTimeout(nextSlide, 100); }
              }}
            >
              <img loading="lazy" src={slide.image} className="w-full h-full object-cover pointer-events-none select-none" alt={slide.title} />

              {/* Main slide gradient */}
              <motion.div
                initial={false}
                animate={{ opacity: offset === 0 ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none"
              />

              {/* Thumbnail frosted glass info */}
              <motion.div
                initial={false}
                animate={{ opacity: offset > 0 ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-white/10 backdrop-blur-md border-t border-white/20 flex flex-col justify-end pointer-events-none"
              >
                <p className="text-white font-bold text-sm md:text-xl truncate drop-shadow-md">{slide.title}</p>
                <p className="text-white/80 text-xs md:text-sm truncate hidden md:block">{slide.subtitle}</p>
              </motion.div>
            </motion.div>
          );
        })}

        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="max-w-7xl mx-auto px-6 h-full relative flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: -60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 60 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-xl text-white pointer-events-auto"
              >
                <motion.p
                  className="font-display italic text-2xl text-[var(--color-accent-gold)] mb-4 inline-block drop-shadow-md"
                >
                  Premium Destinations
                </motion.p>
                <h1 className="text-6xl md:text-8xl font-bold font-display tracking-tight mb-6 leading-tight drop-shadow-2xl">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-xl text-white/90 mb-10 max-w-lg leading-relaxed font-light drop-shadow-lg">
                  {slides[currentSlide].subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to={slides[currentSlide].link}
                    className="bg-[var(--color-blue-ocean)] hover:bg-[var(--color-primary-emerald)] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_40px_rgba(38,166,154,0.4)] flex items-center gap-2 group"
                  >
                    {slides[currentSlide].cta}
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="absolute bottom-12 left-6 md:left-[max(1.5rem,calc((100vw-80rem)/2))] z-30 flex gap-4 pointer-events-auto">
          <button onClick={prevSlide} className="w-14 h-14 rounded-full border border-white/40 bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextSlide} className="w-14 h-14 rounded-full border border-white/40 bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Vertical Progress Indicators on Right */}
        <div className="absolute top-1/2 right-6 md:right-12 -translate-y-1/2 z-30 flex flex-col gap-3 pointer-events-auto items-center hidden lg:flex">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 rounded-full transition-all duration-500 ${currentSlide === idx ? 'h-10 bg-[var(--color-blue-ocean)]' : 'h-2 bg-white/40 hover:bg-white/80'}`}
            />
          ))}
        </div>

        <TornPaperBottom />
      </section>

      {/* 2. EASY STEPS FOR BOOKINGS */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-[var(--color-primary-forest)] mb-2">Easy Steps <span className="text-[var(--color-blue-ocean)] italic font-normal">For Bookings</span></h2>
        <p className="text-[var(--color-neutral-medium)] mb-16 max-w-xl mx-auto">Discover the most beautiful places with our premium packages.</p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { id: 1, title: 'Choose Your Destination', icon: Map, desc: 'Find your dream location from our vast selection.' },
            { id: 2, title: 'Make Your Payment', icon: ShieldCheck, desc: 'Secure and easy payment processing system.' },
            { id: 3, title: 'Enjoy Your Trip', icon: CheckCircle2, desc: 'Relax and enjoy the perfectly planned journey.' }
          ].map((step, i) => (
            <div key={step.id} className="clay-card p-8 rounded-3xl relative bg-white group transition-transform">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-[var(--color-primary-forest)] text-white flex items-center justify-center font-bold text-xl ">
                {step.id}
              </div>
              <step.icon className="w-12 h-12 text-[var(--color-blue-ocean)] mx-auto mb-4 mt-4" />
              <h3 className="font-bold text-[var(--color-primary-forest)] mb-2">{step.title}</h3>
              <p className="text-[var(--color-neutral-medium)] text-sm">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Wide Banner */}
        <div className="bg-[var(--color-primary-forest)] border border-white/20 backdrop-blur-md rounded-full p-4 pl-12 pr-4 flex items-center justify-between text-white mt-12">
          <div className="flex items-center gap-4">
            <span className="text-5xl font-bold italic text-white">48+</span>
            <div className="text-left leading-tight">
              <p className="text-sm font-bold opacity-80 uppercase tracking-widest text-white">Tours and Trip Packages</p>
              <p className="text-2xl font-display italic text-white">Globally</p>
            </div>
          </div>
          <button className="bg-[var(--color-blue-ocean)] text-white font-bold px-8 py-4 rounded-full text-sm hover:bg-[var(--color-primary-emerald)] transition-colors ">
            Discover More
          </button>
        </div>
      </section>

      {/* 3. TRENDING DESTINATION (Mountain Background) */}
      <section className="relative py-32 bg-[var(--color-bg-soft)] overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <img loading="lazy" src='/assets/Tamil Nadu1.webp' alt="Mountain" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-soft)] via-slate-900/40 to-slate-900" />
        </div>
        <TornPaperTop />

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12 pt-20">
          <div className="flex-1 bg-white/90 backdrop-blur-md p-10 rounded-[3rem] clay-card border border-white">
            <h2 className="text-4xl font-display font-bold text-[var(--color-primary-forest)] mb-2"><span className="text-[var(--color-primary-forest)] italic font-normal opacity-80">Trending</span> Destination</h2>
            <p className="text-[var(--color-neutral-medium)] mb-8 max-w-md text-sm">Discover the most trending places with secure travel and professional guidance.</p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { icon: ShieldCheck, title: 'Safety First' },
                { icon: HeadphonesIcon, title: '24/7 Support' },
                { icon: Globe, title: 'Global Coverage' },
                { icon: Map, title: 'Expert Guides' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-bg-soft)] flex items-center justify-center text-[var(--color-primary-forest)]">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-[var(--color-neutral-dark)] text-sm">{item.title}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <img loading="lazy" src='/assets/Tamil Nadu1.webp' className="w-40 h-24 object-cover rounded-2xl " alt="Preview" />
              <img loading="lazy" src='/assets/Uttarakhand1.webp' className="w-40 h-24 object-cover rounded-2xl " alt="Preview" />
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center relative">
            <img loading="lazy" src='/assets/maharashtra1.webp' className="rounded-[3rem] border-[6px] border-white h-[400px] lg:h-[480px] w-full object-cover shadow-2xl" alt="Traveler view" />
          </div>
        </div>
      </section>

      {/* 4. PRICE FOR TRAVEL THE WORLD (Pills) */}
      <section className="relative py-40 bg-[var(--color-neutral-black)] overflow-hidden">
        <div className="absolute inset-0 opacity-40 z-0">
          <img loading="lazy" src='/assets/Mizoram2.webp' alt="Hot air balloon" className="w-full h-full object-cover" />
        </div>
        <TornPaperTop fillClass="fill-slate-900" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 mt-10">
          <div className="text-center mb-16 bg-white/10 backdrop-blur-md p-6 rounded-3xl inline-block mx-auto left-1/2 -translate-x-1/2 relative border border-white/20">
            <h2 className="text-4xl font-display font-bold text-white"><span className="text-white/80 italic font-normal">Prices For</span> Travel The World</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Basic Travel', price: 499, img: '/assets/madurai/coutralam.png', duration: '1 Day Trip', hotel: '2 Star Hotel' },
              { name: 'Standard Travel', price: 899, img: '/assets/madurai 63 package/3days/madurai-kumbakonam-navagrahatemple 3days tour.webp', popular: true, duration: '3 Days / 2 Nights', hotel: '3 Star Hotel' },
              { name: 'Premium Travel', price: 1499, img: '/assets/madurai 63 package/5days/Madurai → Munnar → Thekkady → Alleppey → Kochi 5 Days  4 Nights Tour Package.webp', duration: '5 Days / 4 Nights', hotel: '4 Star Hotel' }
            ].map((plan, i) => (
              <div key={i} className={`clay-card rounded-full p-4 flex flex-col items-center bg-white ${plan.popular ? 'scale-105 border-4 border-[var(--color-accent-gold)]' : ''}`}>
                <div className="w-full h-48 rounded-full overflow-hidden mb-6 relative">
                  <img loading="lazy" src={plan.img} className="w-full h-full object-cover" alt={plan.name} />
                  {plan.popular && <div className="absolute top-6 right-0 bg-[var(--color-accent-gold)] text-white px-4 py-1 rounded-l-full font-bold text-xs uppercase">Popular</div>}
                </div>
                <div className="text-center px-4 mb-8">
                  <h3 className="font-bold text-[var(--color-primary-forest)] text-xl mb-4">{plan.name}</h3>
                  <ul className="text-[var(--color-neutral-medium)] text-sm space-y-3 font-medium">
                    <li>{plan.duration}</li>
                    <li>{plan.hotel}</li>
                    <li>Breakfast included</li>
                    <li>Guided Tour</li>
                  </ul>
                </div>
                <button className="mt-auto mb-4 bg-[var(--color-blue-ocean)] text-white font-bold px-8 py-4 rounded-full hover:bg-[var(--color-primary-emerald)] transition-colors w-full ">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
        <TornPaperBottom />
      </section>

      {/* 5. RECOMMENDATION COLLAGE */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 overflow-hidden">
        <div className="flex-1 relative w-full min-h-[450px] md:min-h-[550px] flex items-center justify-center">
          <div className="w-40 h-56 md:w-64 md:h-80 rounded-[2rem] md:rounded-[3rem] overflow-hidden absolute left-0 top-0 shadow-lg">
            <img loading="lazy" src='/assets/Uttarakhand1.webp' className="w-full h-full object-cover" alt="Travel" />
          </div>
          <div className="w-40 h-56 md:w-64 md:h-80 rounded-[2rem] md:rounded-[3rem] overflow-hidden absolute right-0 bottom-0 shadow-lg">
            <img loading="lazy" src='/assets/himachal.webp' className="w-full h-full object-cover" alt="Travel" />
          </div>
          <div className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-[6px] md:border-8 border-white relative z-10 shadow-2xl">
            <img loading="lazy" src='/assets/manipur2.webp' className="w-full h-full object-cover" alt="Travel" />
          </div>
        </div>

        <div className="flex-1 flex flex-col sm:flex-row gap-6 md:gap-8 w-full">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[var(--color-primary-forest)] mb-6">
              We Recommend <span className="text-[var(--color-blue-ocean)] italic font-normal">Beautiful Destinations Every Month</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <ShieldCheck className="w-8 h-8 text-[var(--color-primary-forest)] shrink-0" />
                <div>
                  <h4 className="font-bold text-[var(--color-primary-forest)]">Trusted Travel Guide</h4>
                  <p className="text-[var(--color-neutral-medium)] text-sm">We provide the best guides for your journey.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-8 h-8 text-[var(--color-primary-forest)] shrink-0" />
                <div>
                  <h4 className="font-bold text-[var(--color-primary-forest)]">Verified Stays</h4>
                  <p className="text-[var(--color-neutral-medium)] text-sm">All accommodations are fully verified.</p>
                </div>
              </div>
            </div>
            <button className="mt-8 bg-[var(--color-blue-ocean)] text-white font-bold px-8 py-3 rounded-full hover:bg-[var(--color-primary-emerald)] transition-colors ">
              Discover More
            </button>
          </div>
          <div className="hidden sm:flex items-center justify-center">
            <div className="writing-vertical-rl text-3xl md:text-4xl font-display font-bold text-[var(--color-neutral-medium)] whitespace-nowrap opacity-20 rotate-180">
              12 Years of Experience
            </div>
          </div>
        </div>
      </section>

      {/* 6. EASY STEPS FOR BOOK (Vertical) */}
      <section className="py-16 md:py-24 px-6 bg-white max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 rounded-[2rem] md:rounded-[4rem] clay-card overflow-hidden">
        <div className="flex-1 px-4 md:pl-12 md:pr-0">
          <h2 className="text-4xl font-display font-bold text-[var(--color-primary-forest)] mb-2">3 Easy Steps <span className="text-[var(--color-primary-forest)] opacity-80 italic font-normal">for Book Your Next Trip</span></h2>
          <p className="text-[var(--color-neutral-medium)] mb-10">Follow these simple steps and get ready for adventure.</p>

          <div className="space-y-8 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-[var(--color-neutral-light)]">
            {[
              { id: 1, title: 'Choose Destination', desc: 'Pick your favorite place' },
              { id: 2, title: 'Book & Pay', desc: 'Secure online payment' },
              { id: 3, title: 'Ready for Traveling', desc: 'Pack your bags and go' },
            ].map((step) => (
              <div key={step.id} className="flex gap-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary-forest)] text-white flex items-center justify-center font-bold flex-shrink-0 ">
                  {step.id}
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-primary-forest)] text-lg">{step.title}</h4>
                  <p className="text-[var(--color-neutral-medium)] text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[var(--color-blue-ocean)]/80 backdrop-blur-md rounded-2xl p-6 text-white inline-block border border-white/10">
            <span className="text-4xl font-display font-bold">48+</span>
            <p className="text-sm font-bold uppercase tracking-wider">Packages globally</p>
          </div>
        </div>

        <div className="flex-1 relative">
          <img loading="lazy" src='/assets/Tripura2.webp' className="w-full max-w-[500px] h-[600px] object-cover rounded-[4rem] border-8 border-white" alt="Traveler" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 writing-vertical-rl text-7xl font-display font-bold text-white opacity-90">
            Summer!
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US / CALL US BANNER */}
      {/* <section className="py-20 px-6 max-w-6xl mx-auto relative mt-10">
        <div className="clay-card !bg-[var(--color-primary-forest)] rounded-[3rem] p-12 !text-white flex flex-col md:flex-row justify-between items-center gap-10 overflow-hidden relative">
          
          <svg className="absolute top-0 left-0 w-full text-white/10 h-16" preserveAspectRatio="none" viewBox="0 0 1440 320" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

          <div className="relative z-10 flex-1">
            <h2 className="text-3xl font-display font-bold mb-6 text-white">Why Choose Us?</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-white/90"><CheckCircle2 className="w-5 h-5 text-[var(--color-blue-ocean)]" /> Best Deals</div>
              <div className="flex items-center gap-2 text-white/90"><CheckCircle2 className="w-5 h-5 text-[var(--color-blue-ocean)]" /> Fast Booking</div>
              <div className="flex items-center gap-2 text-white/90"><CheckCircle2 className="w-5 h-5 text-[var(--color-blue-ocean)]" /> 24/7 Support</div>
              <div className="flex items-center gap-2 text-white/90"><CheckCircle2 className="w-5 h-5 text-[var(--color-blue-ocean)]" /> Secure Pay</div>
            </div>
          </div>

          <div className="relative z-10 text-center md:text-right border-t md:border-t-0 md:border-l border-white/20 pt-8 md:pt-0 md:pl-12">
            <div className="flex items-center justify-center md:justify-end gap-4 mb-2 text-[var(--color-blue-ocean)]">
              <PhoneCall className="w-8 h-8" />
              <span className="text-xl font-bold tracking-widest uppercase">24/7 Service</span>
            </div>
            <p className="text-lg opacity-80 mb-1 text-[var(--color-neutral-medium)]">CALL US</p>
            <p className="text-4xl md:text-5xl font-display font-bold text-slate-900">205-352-1110</p>
          </div>
        </div>
      </section> */}

      {/* 8. TESTIMONIALS */}
      {/* <section className="py-24 px-6 text-center max-w-5xl mx-auto relative z-20">
        <h3 className="text-[var(--color-neutral-medium)] font-bold uppercase tracking-widest mb-2 relative z-20">Our Client Says!</h3>
        <h2 className="text-5xl md:text-7xl font-display font-bold text-[var(--color-primary-forest)] italic tracking-wider mb-16 opacity-10 relative z-20">TESTIMONIAL</h2>

        <div className="flex flex-col md:flex-row items-center gap-12 -mt-24 relative z-30">
          <div className="relative">
            <div className="w-64 h-64 rounded-3xl overflow-hidden clay-card border-8 border-white">
              <img loading="lazy" src='/assets/megalaya1.webp' alt="Client" className="w-full h-full object-cover" />
            </div>
            
            <img loading="lazy" src="https://i.pravatar.cc/150?img=11" className="absolute -top-4 -right-8 w-12 h-12 rounded-full border-4 border-white " alt="Avatar" />
            <img loading="lazy" src="https://i.pravatar.cc/150?img=12" className="absolute top-1/2 -right-12 w-10 h-10 rounded-full border-4 border-white " alt="Avatar" />
            <img loading="lazy" src="https://i.pravatar.cc/150?img=13" className="absolute -bottom-4 -right-4 w-14 h-14 rounded-full border-4 border-white " alt="Avatar" />
          </div>

          <div className="text-left max-w-md bg-white p-8 rounded-3xl clay-card relative z-30">
            <h4 className="font-display text-2xl text-[var(--color-primary-forest)] font-bold italic mb-4">James Smith</h4>
            <p className="text-[var(--color-neutral-dark)] leading-relaxed italic mb-6">"This travel agency provided the most unforgettable experience. Everything was perfectly planned and executed. I highly recommend them for your next journey!"</p>
            <div className="flex text-[var(--color-blue-ocean)]">
              <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
            </div>
          </div>
        </div>
      </section> */}

      {/* 9. CONTACT FORM */}
      {/* <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="clay-card rounded-[3rem] overflow-hidden flex flex-col md:flex-row bg-white relative z-20">
          <div className="flex-1 relative min-h-[400px]">
            <img loading="lazy" src='/assets/Mizoram2.webp' className="absolute inset-0 w-full h-full object-cover" alt="Contact" />
            <div className="absolute inset-0 bg-[var(--color-primary-forest)]/40 flex flex-col justify-end p-10">
              <p className="text-white/90 font-display italic text-3xl mb-2">Hi there!</p>
              <h3 className="text-white font-bold text-4xl font-display">What can I do for you today?</h3>
            </div>
          </div>
          <div className="flex-1 p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[var(--color-primary-forest)] mb-8">Reach & Get in Touch With Us!</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full bg-[var(--color-bg-soft)] border border-[var(--color-neutral-light)] p-4 rounded-xl outline-none focus:border-[var(--color-primary-forest)] transition-colors placeholder:text-slate-400 text-[var(--color-neutral-black)]" />
              <input type="email" placeholder="Email Address" className="w-full bg-[var(--color-bg-soft)] border border-[var(--color-neutral-light)] p-4 rounded-xl outline-none focus:border-[var(--color-primary-forest)] transition-colors placeholder:text-slate-400 text-[var(--color-neutral-black)]" />
              <textarea placeholder="Message" rows={4} className="w-full bg-[var(--color-bg-soft)] border border-[var(--color-neutral-light)] p-4 rounded-xl outline-none focus:border-[var(--color-primary-forest)] transition-colors resize-none placeholder:text-slate-400 text-[var(--color-neutral-black)]"></textarea>
              <button className="bg-[var(--color-blue-ocean)] text-white font-bold px-8 py-4 rounded-xl hover:bg-[var(--color-primary-emerald)] transition-colors w-full ">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section> */}

      {/* 10. LATEST NEWS */}
      {/* <section className="py-24 px-6 bg-[var(--color-primary-forest)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-white mb-2 text-center">Explore Latest News</h2>
          <p className="text-white/70 text-center mb-16">Read our latest stories and travel tips.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white/10 p-4 rounded-3xl backdrop-blur-sm border border-white/20 group cursor-pointer ">
                <div className="h-48 rounded-2xl overflow-hidden mb-4 relative">
                  <img loading="lazy" src={`/assets/kerala1.webp`} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt="Blog" />
                </div>
                <h4 className="text-white font-bold text-lg mb-2 line-clamp-2 group-hover:text-white/80 transition-colors">Top 10 International Destinations to Visit in 2026</h4>
                <div className="flex items-center text-white/50 text-sm">
                  <Calendar className="w-4 h-4 mr-2" /> Oct 24, 2026
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* 11. CUSTOM FOOTER */}
      {/* <footer className="bg-[var(--color-primary-forest)] py-24 px-6 border-t border-white/10 pt-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white/10 border border-white/20 backdrop-blur-md !text-white rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-6 mb-16 relative -mt-20">
            <div>
              <h3 className="text-3xl font-display font-bold text-white italic mb-2">Subscribe Now!</h3>
              <p className="text-white/90 text-sm font-medium">Get our latest news and special offers.</p>
            </div>
            <div className="flex w-full md:w-auto bg-white/20 p-2 rounded-full backdrop-blur-sm border border-white/30 ">
              <input type="email" placeholder="Your Email" className="px-6 py-3 outline-none w-full md:w-72 bg-white rounded-l-full placeholder:text-slate-400 text-[var(--color-neutral-black)]" />
              <button className="bg-[var(--color-blue-ocean)] text-white px-8 py-3 rounded-full font-bold hover:bg-[var(--color-primary-emerald)] transition-all">Subscribe</button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center pb-10">
            <div className="flex gap-6 mb-6">
              <span className="text-white/70 hover:text-white cursor-pointer transition-colors font-bold text-sm">Destinations</span>
              <span className="text-white/70 hover:text-white cursor-pointer transition-colors font-bold text-sm">Tour Packages</span>
              <span className="text-white/70 hover:text-white cursor-pointer transition-colors font-bold text-sm">Services</span>
              <span className="text-white/70 hover:text-white cursor-pointer transition-colors font-bold text-sm">Contact</span>
            </div>
            <p className="text-white/40 text-sm">© 2026 Logaa Holiday. All Rights Reserved.</p>
          </div>
        </div>
      </footer> */}

    </div>
  )
}
