import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plane, Building2, Car, Map, Palmtree, MapPin, Calendar, Users, Search, Heart, ChevronDown, CheckCircle2, HeadphonesIcon, ShieldCheck, Star, ArrowRight } from 'lucide-react';
import { generateSlug } from '../lib/utils'
import { useSEO } from '../hooks/useSEO';
import { SearchPackagesModal } from '../components/SearchPackagesModal';
import { getPackageLink, packagesDatabase } from './PackageDetails';

const destinations = [
  {
    id: 'meenakshi-temple',
    name: 'Madurai',
    state: 'Tamil Nadu',
    stateSlug: 'tamilnadu',
    citySlug: 'madurai-tourism',
    price: '₹1,499',
    image: '/assets/kerala1.webp',
  },
  {
    id: 'rameswaram',
    name: 'Rameswaram',
    state: 'Tamil Nadu',
    stateSlug: 'tamilnadu',
    citySlug: 'madurai-tourism', // Rameswaram can just link to Madurai tours or a new one
    price: '₹1,799',
    image: '/assets/rameshwaram.webp',
  },
  {
    id: 'munnar',
    name: 'Munnar',
    state: 'Kerala',
    stateSlug: 'kerala',
    citySlug: 'kerala-tourism',
    price: '₹2,299',
    image: '/assets/munnar.webp',
  },
  {
    id: 'alleppey',
    name: 'Alleppey',
    state: 'Kerala',
    stateSlug: 'kerala',
    citySlug: 'kerala-tourism',
    price: '₹2,499',
    image: '/assets/Uttar Pradesh1.webp',
  }
];

const featuredPackages = [
  {
    id: '43',
    title: '6 Day Trip from Bangalore | Madurai, Rameshwaram, Kanyakumari, Kovalam & Trivandrum',
    duration: '5 Nights / 6 Days',
    price: '₹19,500',
    image: '/assets/karnataka1.webp',
    location: 'Madurai & Beyond'
  },
  {
    id: '44',
    title: '4 Day Trip from Bangalore | Madurai, Rameshwaram & Kanyakumari',
    duration: '3 Nights / 4 Days',
    price: '₹12,700',
    image: '/assets/Bangalore.webp',
    location: 'Madurai & Beyond'
  },
  {
    id: '45',
    title: 'Chidambaram, Thanjavur & Kanchipuram Package for 5 days from Chennai',
    duration: '4 Nights / 5 Days',
    price: '₹15,500',
    image: '/assets/chennai/Chidambaram, Thanjavur & Kanchipuram Package for 5 days from Chennai card.webp',
    location: 'Chidambaram'
  },
  {
    id: '46',
    title: '9 Days Trip from Madurai | Madurai, Trichy, Thanjavur, Kumbakonam, Rameshwaram, Kanyakumari, Kovalam & Trivandrum',
    duration: '8 Nights / 9 Days',
    price: '₹34,495',
    image: '/assets/megalaya1.webp',
  }
];

featuredPackages.forEach(p => {
  p.duration = p.duration.replace(/(\d+)\s*Nights?\s*[\/\-–\s]*\s*(\d+)\s*Days?/gi, (match, n, d) => {
    const nights = parseInt(n, 10);
    const days = parseInt(d, 10);
    return `${days} Days / ${nights} Night${nights > 1 ? 's' : ''}`;
  });
});

const mappedFeaturedPackages = featuredPackages.map((p: any) => {
  const dbPkg = packagesDatabase[p.id];
  if (dbPkg) {
    return {
      ...p,
      title: dbPkg.title || p.title,
      image: dbPkg.image || p.image,
      duration: dbPkg.overview?.duration || p.duration,
      price: dbPkg.priceDetails?.amount || p.price
    };
  }
  return p;
});

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
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          >
            <source src="/assets/video/south india  (2).mp4" type="video/mp4" />
          </video>
          {/* Subtle gradient overlay to ensure text readability while keeping the video vibrant */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 h-full flex flex-col items-center text-center">

          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full mb-6 shadow-sm border border-white/50">
            <Star className="w-4 h-4 text-[var(--color-primary-forest)] fill-current" />
            <span className="text-sm font-semibold text-[var(--color-primary-forest)] tracking-wide">Your Journey, Our Passion</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-[var(--color-primary-forest)] mb-4 leading-tight">
            Discover the Soul of <br />
            <span className="font-script text-6xl md:text-8xl font-normal text-[var(--color-primary-forest)] -ml-4" style={{ fontFamily: "'Great Vibes', cursive" }}>South India</span>
            <span className="text-[var(--color-primary-forest)]">♥</span>
          </h1>

          <p className="text-lg md:text-xl font-bold text-slate-900 max-w-2xl mb-10 bg-white/60 backdrop-blur-md px-8 py-4 rounded-3xl shadow-sm border border-white/50 leading-relaxed">
            Temples, Traditions, Nature & More.<br />
            Unforgettable journeys across Tamil Nadu, <br />
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

      {/* Explore South India by State Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16 pt-16">
        <div className="flex items-center gap-2 mb-8">
          <Star className="w-5 h-5 text-[var(--color-primary-forest)] fill-current" />
          <h2 className="text-3xl font-display font-bold text-slate-800">Explore South India by State</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tamil Nadu Card */}
          <Link
            to="/destination/tamilnadu/tamilnadu-tourism"
            className="relative h-[300px] rounded-[2.5rem] overflow-hidden group shadow-lg border-4 border-white block cursor-pointer"
          >
            <img loading="lazy"
              src="/assets/Tamil Nadu1.webp"
              alt="Tamil Nadu Tourism"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-6 left-8 right-8 text-white z-10">
              <span className="text-xs font-black uppercase tracking-widest text-[var(--color-primary-emerald)] mb-2 block">Land of Temples</span>
              <h3 className="text-3xl font-display font-bold mb-3">Tamil Nadu Overview</h3>
              <p className="text-white/80 text-sm leading-relaxed line-clamp-2">
                Discover ancient Dravidian architecture, towering temple gopurams, misty Nilgiri hills, and rich cultural heritage.
              </p>
              <div className="mt-4 flex items-center gap-2 font-bold text-sm text-[var(--color-primary-emerald)]">
                Explore State <span>→</span>
              </div>
            </div>
          </Link>

          {/* Kerala Card */}
          <Link
            to="/destination/kerala/kerala-tourism"
            className="relative h-[300px] rounded-[2.5rem] overflow-hidden group shadow-lg border-4 border-white block cursor-pointer"
          >
            <img loading="lazy"
              src="/assets/bharath/kerala.webp"
              alt="Kerala Tourism"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-6 left-8 right-8 text-white z-10">
              <span className="text-xs font-black uppercase tracking-widest text-[var(--color-primary-emerald)] mb-2 block">God's Own Country</span>
              <h3 className="text-3xl font-display font-bold mb-3">Kerala Overview</h3>
              <p className="text-white/80 text-sm leading-relaxed line-clamp-2">
                Immerse yourself in tranquil backwaters, green tea valleys, wildlife sanctuaries, and palm-lined beaches.
              </p>
              <div className="mt-4 flex items-center gap-2 font-bold text-sm text-[var(--color-primary-emerald)]">
                Explore State <span>→</span>
              </div>
            </div>
          </Link>
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
            <Link key={dest.id} to={`/place/${dest.stateSlug}/${dest.id}`} className="relative rounded-2xl overflow-hidden group cursor-pointer h-64 lg:h-48 shadow-lg block">
              <img loading="lazy"
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
          {mappedFeaturedPackages.map((pkg) => (
            <div key={pkg.id} className={`${clayCard} overflow-hidden group flex flex-col`}>
              <div className="relative h-48 overflow-hidden rounded-t-3xl">
                <img loading="lazy"
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

      {/* Experience South India Video Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-[35%] flex flex-col justify-center">
            <span className="text-xs font-black uppercase tracking-widest text-[var(--color-primary-forest)] mb-3">Visual Journey</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-800 mb-6 leading-tight">
              Experience the Magic of South India
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Take a virtual tour through the mist-laden hills of Munnar, the serene backwaters of Kerala, and the majestic, towering gopurams of Tamil Nadu’s ancient temples. South India is a feast for the senses, offering a perfect blend of spirituality, nature, and rich cultural heritage.
            </p>
          </div>
          <div className="w-full lg:w-[65%] relative">
            <div className="absolute inset-0 bg-[var(--color-primary-forest)] rounded-[2.5rem] translate-x-3 translate-y-3 opacity-10" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-video">
              <video
                controls
                loop
                muted
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/assets/video/south india  (1).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
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
            <h2 className="text-3xl font-bold text-slate-800 mb-8 max-w-sm">Why Book With<br />Logaa Holidays?</h2>
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              <div className="flex gap-3">
                <MapPin className="w-8 h-8 text-[var(--color-primary-forest)] flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">Local Expertise</h4>
                  <p className="text-xs text-slate-500">In-depth knowledge<br />of South India</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Map className="w-8 h-8 text-[var(--color-primary-forest)] flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">Customized Trips</h4>
                  <p className="text-xs text-slate-500">Tailor-made itineraries<br />just for you</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Building2 className="w-8 h-8 text-[var(--color-primary-forest)] flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">Handpicked Stays</h4>
                  <p className="text-xs text-slate-500">Quality stays for a<br />memorable trip</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Users className="w-8 h-8 text-[var(--color-primary-forest)] flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">Authentic Experiences</h4>
                  <p className="text-xs text-slate-500">Real experiences,<br />real connections</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[400px]">
            <div className="bg-[var(--color-primary-forest)] rounded-3xl p-8 text-white h-full relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Let's Plan Your<br />Perfect Getaway!</h3>
                <p className="text-white/80 text-sm max-w-[200px]">Amazing places are waiting for you.</p>
              </div>
              {/* Decorative Temple Outline / Sketch */}
              <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20 pointer-events-none">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full transform translate-x-4 translate-y-4">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
