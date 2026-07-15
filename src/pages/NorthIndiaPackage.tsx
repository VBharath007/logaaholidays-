import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, MapPin, Star, Clock, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { generateSlug } from '../lib/utils'
import { SearchPackagesModal } from '../components/SearchPackagesModal'
import { useSEO } from '../hooks/useSEO'
import { getPackageLink, packagesDatabase } from './PackageDetails'

const places = [
  { id: 'shirdi', name: 'Shirdi', images: ['/assets/shiridi/hero/shirdi1.jpg', '/assets/shiridi/hero/shirdi2.jpg', '/assets/shiridi/hero/shirdi3.jpg'] },
  { id: 'varanasi', name: 'Varanasi', images: ['/assets/Uttar Pradesh1.avif', '/assets/Uttar Pradesh3.avif', '/assets/Uttar Pradesh4.avif'] },
  { id: 'agra', name: 'Agra', images: ['/assets/Uttar Pradesh2.avif', '/assets/dehli/dehli.avif', '/assets/dehli/dehli2.avif'] },
  { id: 'goldentriangle', name: 'Golden Triangle', images: ['/assets/dehli/dehli.avif', '/assets/dehli/dehli2.avif', '/assets/dehli/dehli3.jpg'] },
]

export function NorthIndiaPackage() {
  useSEO(
    'Top 5 North India Tourism Places | Best North India Tour Packages',
    'Explore the top 5 North India tourism places with the most trustable travel agent in North India. Book Shirdi, Varanasi, and Golden Triangle tour packages today!',
    'north india tour packages, top 5 north india tourism places, trustable travel agent north india, shirdi tour, varanasi tour, golden triangle tour package india, delhi agra jaipur tour'
  );

  const [activePlace, setActivePlace] = useState('shirdi')
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)

  const allPkgs = Object.entries(packagesDatabase).map(([id, val]) => ({ id, ...val }));
  const filteredPackages = allPkgs.filter(pkg => {
    const title = pkg.title.toLowerCase();
    const category = pkg.category?.toLowerCase() || '';
    const dests = pkg.destinations?.map((d: string) => d.toLowerCase()) || [];

    if (activePlace === 'shirdi') return title.includes('shirdi') || category === 'shirdi' || dests.includes('shirdi');
    if (activePlace === 'varanasi') return title.includes('kasi') || title.includes('varanasi') || category === 'varanasi' || dests.includes('varanasi');
    if (activePlace === 'agra') return title.includes('agra') || dests.includes('agra') || title.includes('taj mahal');
    if (activePlace === 'goldentriangle') return title.includes('golden triangle') || category === 'golden-triangle';
    return false;
  }).map(pkg => {
    const getDuration = () => {
      if (pkg.duration) return pkg.duration;
      if (pkg.overview?.duration) return pkg.overview.duration;
      const match = pkg.title.match(/(\d+\s*Days?\s*\/?\s*\d*\s*Nights?|\d+\s*Nights?\s*\/?\s*\d*\s*Days?)/i);
      return match ? match[0] : 'Contact for Duration';
    };
    return { ...pkg, duration: getDuration() };
  });

  const activePlaceData = places.find(p => p.id === activePlace)

  return (
    <div className="bg-[#eff3f5] min-h-screen pb-32">

      {/* 1. Hero Header & Search Bar */}
      <section className="relative h-[80vh] min-h-[600px] w-full bg-slate-900 rounded-b-[4rem]">
        {/* Background Aerial Image */}
        <div className="absolute inset-0 overflow-hidden rounded-b-[4rem]">
          <img
            src='/assets/megalaya1.avif'
            alt="North India Heritage"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-white/90 text-sm md:text-base font-medium tracking-wide mb-4 max-w-2xl mx-auto ">
            Discover the spiritual heart and historical wonders of India with our premium packages.
          </p>
          <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-10 ">
            North India <br /> Tours
          </h1>
          <Link to="/contact" className="bg-[#48c9b0] text-white px-8 py-3 rounded-full font-bold hover:bg-[#3ba893] transition-colors tracking-wide text-lg">
            Enquire Now
          </Link>
        </div>

        {/* Floating Clay Search Bar (Click to open Modal) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-4xl px-6 z-30">
          <div
            className="bg-white rounded-full p-2 flex items-center justify-between ,0,0,0.3)] border-4 border-white/80 cursor-pointer ,0,0,0.4)] transition-all"
            onClick={() => setIsSearchModalOpen(true)}
          >
            <div className="flex-1 flex items-center px-4 md:px-6 gap-2 md:gap-4 overflow-hidden">
              <Search className="w-5 h-5 md:w-6 md:h-6 text-slate-400 shrink-0" />
              <div className="text-slate-400 text-sm md:text-lg font-medium w-full text-left truncate">
                Search destinations (e.g. Shirdi, Varanasi)...
              </div>
            </div>

            <div className="flex items-center gap-4 pr-1 md:pr-2 shrink-0">
              <button className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full bg-[var(--color-blue-ocean)] text-white hover:bg-[var(--color-primary-emerald)] transition-colors font-bold text-sm md:text-base" onClick={(e) => { e.stopPropagation(); setIsSearchModalOpen(true); }}>
                Search
                <span className="hidden sm:inline">Packages</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <SearchPackagesModal isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} />

      {/* 2. Interactive Destination Filter (Pill Layout) */}
      <section className="pt-32 pb-16 px-6 max-w-[1400px] mx-auto overflow-hidden">
        <div className="flex flex-col xl:flex-row items-center gap-8 justify-center">

          {/* Left Oval Image */}
          <div className="hidden lg:block w-72 h-[450px] rounded-[100px] overflow-hidden flex-shrink-0 relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={activePlaceData?.images[0]}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                src={activePlaceData?.images[0]}
                alt="Destination preview"
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Center Text & Pill Tags */}
          <div className="flex flex-col items-center justify-center min-w-[300px] max-w-lg text-center px-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8 uppercase tracking-wide">
              Choose Your<br />Destination
            </h2>

            <div className="flex flex-wrap justify-center gap-3">
              {places.map((place) => (
                <button
                  key={place.id}
                  onClick={() => setActivePlace(place.id)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border-2 ${activePlace === place.id
                      ? 'bg-[#89d4cf] border-[#89d4cf] text-slate-900 transform scale-105'
                      : 'bg-transparent border-slate-300 text-slate-600 hover:border-slate-400'
                    }`}
                >
                  {place.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Oval Images (Two smaller ones) */}
          <div className="hidden lg:flex gap-6 flex-shrink-0">
            <div className="w-56 h-[350px] rounded-[100px] overflow-hidden relative mt-12">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activePlaceData?.images[1]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  src={activePlaceData?.images[1]}
                  alt="Destination preview"
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
            <div className="hidden xl:block w-56 h-[350px] rounded-[100px] overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activePlaceData?.images[2] || activePlaceData?.images[0]}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  src={activePlaceData?.images[2] || activePlaceData?.images[0]}
                  alt="Destination preview"
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Category Cards Section */}
      <section className="px-6 py-16 max-w-[1000px] mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4 uppercase tracking-wide">
            Explore North India
          </h2>
          <p className="text-slate-600 font-medium">Choose your spiritual journey</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Shirdi Card */}
          <div className="group relative rounded-[2.5rem] overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col h-[450px]">
            <div className="absolute inset-0">
              <img src="/assets/maharashtra2.avif" alt="Shirdi Tour Packages" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            </div>

            <div className="relative z-10 p-8 flex flex-col h-full justify-end text-center items-center">
              <h3 className="text-3xl font-display font-bold text-white mb-3 drop-shadow-md">Shirdi Tours</h3>
              <p className="text-white/90 text-sm mb-8 drop-shadow-md max-w-sm">Experience the divine presence of Sai Baba with our exclusive packages.</p>
              <Link to="/north-india-tour-packages/shirdi-tours" className="inline-flex items-center justify-center w-full bg-[#89d4cf] text-slate-900 font-bold py-4 rounded-xl hover:bg-[#72c2bd] transition-colors shadow-lg">
                Explore Tour
              </Link>
            </div>
          </div>

          {/* Varanasi Card */}
          <div className="group relative rounded-[2.5rem] overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col h-[450px]">
            <div className="absolute inset-0">
              <img src="/assets/Uttar Pradesh1.avif" alt="Varanasi Tour Packages" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            </div>

            <div className="relative z-10 p-8 flex flex-col h-full justify-end text-center items-center">
              <h3 className="text-3xl font-display font-bold text-white mb-3 drop-shadow-md">Varanasi Tours</h3>
              <p className="text-white/90 text-sm mb-8 drop-shadow-md max-w-sm">Discover the spiritual heart of India with our premium Kasi packages.</p>
              <Link to="/north-india-tour-packages/varanasi-tours" className="inline-flex items-center justify-center w-full bg-[#89d4cf] text-slate-900 font-bold py-4 rounded-xl hover:bg-[#72c2bd] transition-colors shadow-lg">
                Explore Tour
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
