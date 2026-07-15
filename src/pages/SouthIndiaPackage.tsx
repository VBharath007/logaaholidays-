import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plane, Building2, Car, Map, Palmtree, MapPin, Calendar, Users, Search, Heart, ChevronDown, CheckCircle2, HeadphonesIcon, ShieldCheck, Star, ArrowRight } from 'lucide-react';
import { generateSlug } from '../lib/utils'
import { useSEO } from '../hooks/useSEO';
import { SearchPackagesModal } from '../components/SearchPackagesModal';
import { getPackageLink } from './PackageDetails';

const destinations = [
  {
    id: 'meenakshi-temple',
    name: 'Madurai',
    state: 'Tamil Nadu',
    stateSlug: 'tamilnadu',
    citySlug: 'madurai-tourism',
    price: '₹1,499',
    image: '/assets/kerala1.avif',
  },
  {
    id: 'rameswaram',
    name: 'Rameswaram',
    state: 'Tamil Nadu',
    stateSlug: 'tamilnadu',
    citySlug: 'madurai-tourism', // Rameswaram can just link to Madurai tours or a new one
    price: '₹1,799',
    image: '/assets/rameshwaram.avif',
  },
  {
    id: 'munnar',
    name: 'Munnar',
    state: 'Kerala',
    stateSlug: 'kerala',
    citySlug: 'kerala-tourism',
    price: '₹2,299',
    image: '/assets/munnar.avif',
  },
  {
    id: 'alleppey',
    name: 'Alleppey',
    state: 'Kerala',
    stateSlug: 'kerala',
    citySlug: 'kerala-tourism',
    price: '₹2,499',
    image: '/assets/Uttar Pradesh1.avif',
  }
];

const featuredPackages = [
  {
    id: '43',
    title: '6 Day Trip from Bangalore | Madurai, Rameshwaram, Kanyakumari, Kovalam & Trivandrum',
    duration: '5 Nights / 6 Days',
    price: '₹19,500',
    image: '/assets/karnataka1.avif',
    location: 'Madurai & Beyond'
  },
  {
    id: '44',
    title: '4 Day Trip from Bangalore | Madurai, Rameshwaram & Kanyakumari',
    duration: '3 Nights / 4 Days',
    price: '₹12,700',
    image: '/assets/Bangalore.avif',
    location: 'Madurai & Beyond'
  },
  {
    id: '45',
    title: 'Chidambaram, Thanjavur & Kanchipuram Package for 5 days from Chennai',
    duration: '4 Nights / 5 Days',
    price: '₹15,500',
    image: '/assets/chennai/Chidambaram, Thanjavur & Kanchipuram Package for 5 days from Chennai card.png',
    location: 'Chidambaram'
  },
  {
    id: '46',
    title: '9 Days Trip from Madurai | Madurai, Trichy, Thanjavur, Kumbakonam, Rameshwaram, Kanyakumari, Kovalam & Trivandrum',
    duration: '8 Nights / 9 Days',
    price: '₹34,495',
    image: '/assets/megalaya1.avif',
    location: 'Madurai & Beyond'
  }
];

export function SouthIndiaPackage() {
  useSEO(
    'Best South India Tour Packages | South India Tourism Places',
    'Discover the best South India tour packages with a highly trustable travel agent. Explore beautiful destinations across Tamil Nadu, Kerala, and more.',
    'south india tour packages, best south india tour packages, south india tourism, trustable travel agent south india, tamil nadu tours, kerala tours'
  );
  const [activeTab, setActiveTab] = useState('flights');
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  
  // Custom classes without heavy box shadows
  const clayCard = "bg-[#f8f9fa] rounded-3xl border border-slate-200";
  const clayInput = "w-full bg-[#f8f9fa] border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[var(--color-primary-forest)]/50 text-sm";
  const clayBtn = "bg-[var(--color-primary-forest)] text-white font-bold rounded-xl transition-transform hover:scale-[1.02] active:scale-95";
  const clayBtnSecondary = "bg-[#f8f9fa] text-slate-700 font-bold rounded-full border border-slate-200 hover:text-[var(--color-primary-forest)] transition-all";

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-24 font-sans text-slate-800">
      
      {/* Hero Section */}
      <div className="relative w-full h-[600px] sm:h-[700px] md:h-[800px] overflow-hidden rounded-b-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
        {/* Background Image (Using the generated composite image) */}
        <div className="absolute inset-0">
          <img 
            src="/assets/south_india_hero.png" 
            alt="South India Landscapes" 
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle gradient overlay to ensure text readability while keeping the image vibrant */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 h-full flex flex-col items-center text-center">
          
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full mb-6 shadow-sm border border-white/50">
            <Star className="w-4 h-4 text-[var(--color-primary-forest)] fill-current" />
            <span className="text-sm font-semibold text-[var(--color-primary-forest)] tracking-wide">Your Journey, Our Passion</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-[var(--color-primary-forest)] mb-4 leading-tight">
            Discover the Soul of <br/>
            <span className="font-script text-6xl md:text-8xl font-normal text-[var(--color-primary-forest)] -ml-4" style={{ fontFamily: "'Great Vibes', cursive" }}>South India</span>
            <span className="text-[var(--color-primary-forest)]">♥</span>
          </h1>

          <p className="text-lg md:text-xl font-bold text-slate-900 max-w-2xl mb-10 bg-white/60 backdrop-blur-md px-8 py-4 rounded-3xl shadow-sm border border-white/50 leading-relaxed">
            Temples, Traditions, Nature & More.<br/>
            Unforgettable journeys across Tamil Nadu, <br/>
            Kerala & beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className={`${clayBtn} px-8 py-4 flex items-center gap-2 text-lg`}>
              Start Your Journey <span className="text-xl">→</span>
            </button>
            <button className={`${clayBtnSecondary} px-8 py-4 flex items-center gap-2 text-lg`}>
              <MapPin className="w-5 h-5" /> Explore Destinations
            </button>
          </div>
        </div>

        {/* Floating Card (Right Side) */}
        <div className="absolute top-1/2 right-10 md:right-20 transform -translate-y-1/2 hidden lg:block animate-bounce-slow">
          <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4">
            <div className="w-12 h-12 bg-[var(--color-primary-forest)] rounded-full flex items-center justify-center text-white shadow-lg">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800">Madurai</h4>
              <p className="text-sm text-slate-600 flex items-center gap-1">The Heart of Tamil Nadu <span className="text-red-500 text-xs">♥</span></p>
            </div>
          </div>
        </div>
      </div>



      <SearchPackagesModal isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} />

      {/* Popular Destinations Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16 pt-16">
        <div className="flex justify-between items-end mb-8">
          <div className="flex items-center gap-2">
             <Star className="w-5 h-5 text-[var(--color-primary-forest)] fill-current" />
            <h2 className="text-2xl font-bold text-slate-800">Popular Destinations in South India</h2>
          </div>
          <Link to="/tour-packages" className="text-sm font-semibold text-[var(--color-primary-forest)] hover:underline flex items-center gap-1">
            View all destinations <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {destinations.map((dest) => (
            <Link key={dest.id} to={`/place/${dest.stateSlug}/${dest.citySlug}/${dest.id}`} className="relative rounded-2xl overflow-hidden group cursor-pointer h-64 lg:h-48 shadow-lg block">
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              <button className="absolute top-3 right-3 text-white hover:text-red-500 transition-colors z-10" onClick={(e) => e.preventDefault()}>
                <Heart className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-4 z-10 text-white">
                <h3 className="text-xl font-bold mb-1">{dest.name}</h3>
                <p className="text-xs text-white/90 mb-2">{dest.state}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Packages Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex justify-between items-end mb-8">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-[var(--color-primary-forest)] fill-current" />
            <h2 className="text-3xl font-bold text-slate-800">Featured South India Packages</h2>
          </div>
          <Link to="/tour-packages/madurai-tours" className="text-sm font-semibold text-[var(--color-primary-forest)] hover:underline flex items-center gap-1">
            View all packages <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPackages.map((pkg) => (
            <div key={pkg.id} className={`${clayCard} overflow-hidden group flex flex-col`}>
              <div className="relative h-48 overflow-hidden rounded-t-3xl">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-slate-800 mb-2" title={pkg.title}>{pkg.title}</h3>
                <div className="flex items-center gap-1 text-slate-500 text-sm mb-2">
                  <MapPin className="w-4 h-4 text-[#48c9b0]" />
                  <span>{pkg.location}</span>
                </div>
                <div className="flex items-center gap-1 text-slate-500 text-sm mb-4">
                  <Calendar className="w-4 h-4 text-[#48c9b0]" />
                  <span>{pkg.duration}</span>
                </div>
                <div className="mt-auto">
                  <Link 
                    to={getPackageLink(pkg)}
                    className={`${clayBtn} w-full py-2.5 flex justify-center text-sm`}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info & Features Banner */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className={`${clayCard} p-6 md:p-8 rounded-3xl grid grid-cols-1 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200/50`}>
          <div className="flex items-center gap-4 pt-4 md:pt-0">
            <div className="w-12 h-12 rounded-xl bg-[#e8f5e9] text-[var(--color-primary-forest)] flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Best Price Guarantee</h4>
              <p className="text-xs text-slate-500">We match the best prices</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-xl bg-[#e8f5e9] text-[var(--color-primary-forest)] flex items-center justify-center flex-shrink-0">
              <HeadphonesIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">24/7 Travel Support</h4>
              <p className="text-xs text-slate-500">Always here when you need us</p>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-xl bg-[#e8f5e9] text-[var(--color-primary-forest)] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Secure Bookings</h4>
              <p className="text-xs text-slate-500">Your data is 100% protected</p>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-xl bg-[#e8f5e9] text-[var(--color-primary-forest)] flex items-center justify-center flex-shrink-0">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Trusted by Millions</h4>
              <p className="text-xs text-slate-500">10M+ happy travelers worldwide</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Book With Logaa Holidays */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 max-w-sm">Why Book With<br/>Logaa Holidays?</h2>
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              <div className="flex gap-3">
                <MapPin className="w-8 h-8 text-[var(--color-primary-forest)] flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">Local Expertise</h4>
                  <p className="text-xs text-slate-500">In-depth knowledge<br/>of South India</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Map className="w-8 h-8 text-[var(--color-primary-forest)] flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">Customized Trips</h4>
                  <p className="text-xs text-slate-500">Tailor-made itineraries<br/>just for you</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Building2 className="w-8 h-8 text-[var(--color-primary-forest)] flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">Handpicked Stays</h4>
                  <p className="text-xs text-slate-500">Quality stays for a<br/>memorable trip</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Users className="w-8 h-8 text-[var(--color-primary-forest)] flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">Authentic Experiences</h4>
                  <p className="text-xs text-slate-500">Real experiences,<br/>real connections</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[400px]">
            <div className="bg-[var(--color-primary-forest)] rounded-3xl p-8 text-white h-full relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Let's Plan Your<br/>Perfect Getaway!</h3>
                <p className="text-white/80 text-sm max-w-[200px]">Amazing places are waiting for you.</p>
              </div>
              {/* Decorative Temple Outline / Sketch */}
              <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20 pointer-events-none">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full transform translate-x-4 translate-y-4">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
