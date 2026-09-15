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
    id: '9201',
    title: 'Kerala Honeymoon Package',
    duration: '3 Nights / 4 Days',
    image: '/assets/bharath/kerala.webp',
    location: 'Tamilnadu'
  },
  {
    id: '3090',
    title: 'Tamil Nadu Tour Package',
    duration: 'On Request',
    image: '/assets/Tamil Nadu1.webp',
    location: 'Tamil Nadu + Karnataka'
  },
  {
    id: '9005',
    title: 'Kerala Popular Package',
    duration: '4 Nights / 5 Days',
    image: '/assets/bharath/kerala.webp',
    location: 'Kerala'
  },
  {
    id: '9006',
    title: 'Kerala Houseboat & Hills',
    duration: '5 Nights / 6 Days',
    image: '/assets/bharath/kerala hero.webp',
    location: 'Kerala'
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
            poster="/assets/south_india_hero.webp"
            className="w-full h-full object-cover object-center"
          >
            <source src="/assets/video/south india  (2).mp4" type="video/mp4" />
          </video>
          {/* Subtle gradient overlay to ensure text readability while keeping the video vibrant */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 md:pt-32 h-full flex flex-col items-center text-center justify-center md:justify-start">

          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full mb-6 shadow-sm border border-white/50">
            <Star className="w-4 h-4 text-[var(--color-primary-forest)] fill-current" />
            <span className="text-sm font-semibold text-[var(--color-primary-forest)] tracking-wide">Your Journey, Our Passion</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold text-[var(--color-primary-forest)] mb-3 leading-tight">
            Discover the Soul of <br />
            <span className="font-script text-4xl sm:text-6xl md:text-8xl font-normal text-[var(--color-primary-forest)] -ml-2 md:-ml-4" style={{ fontFamily: "'Great Vibes', cursive" }}>South India</span>
            <span className="text-[var(--color-primary-forest)]">♥</span>
          </h1>

          <p className="text-base md:text-xl font-bold text-slate-900 max-w-2xl mb-6 bg-white/60 backdrop-blur-md px-6 py-3 rounded-3xl shadow-sm border border-white/50 leading-relaxed">
            Temples, Traditions, Nature & More. Unforgettable journeys across Tamil Nadu & Kerala.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/917397329776?text=Hello%20Logaa%20Holidays%2C%20I%20would%20like%20to%20enquire%20about%20South%20India%20tour%20packages."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-90 shadow-lg text-white font-bold rounded-xl transition-transform hover:scale-[1.02] active:scale-95 px-8 py-4 flex items-center gap-2 text-lg"
            >
              Enquire Now <span className="text-xl">→</span>
            </a>
          </div>
        </div>

        {/* Floating Card (Right Side) */}
        <Link to="/destination/tamilnadu/madurai-tourism" className="absolute top-1/2 right-10 md:right-20 transform -translate-y-1/2 hidden lg:block animate-bounce-slow hover:scale-105 transition-transform cursor-pointer">
          <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4">
            <div className="w-12 h-12 bg-[var(--color-primary-forest)] rounded-full flex items-center justify-center text-white shadow-lg">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-slate-800 text-lg">Madurai</p>
              <p className="text-sm text-slate-600 flex items-center gap-1">The Heart of Tamil Nadu <span className="text-red-500 text-xs">♥</span></p>
            </div>
          </div>
        </Link>
      </div>

      {/* Explore South India by State Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16 pt-16 relative z-20">
        <div className="flex items-center gap-2 mb-8">
          <Star className="w-5 h-5 text-[var(--color-primary-forest)] fill-current" />
          <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-800">Explore South India by State</h2>
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
              <span className="text-xs font-black capitalize tracking-widest text-[#7fff00] mb-2 block">Land of Temples</span>
              <h3 className="text-3xl font-display font-bold mb-3">Tamil Nadu Overview</h3>
              <p className="text-white/80 text-sm leading-relaxed line-clamp-2">
                See big temples, beautiful hills, beaches, and many amazing places. </p>
              <div className="mt-4 flex items-center gap-2 font-bold text-sm text-[#7fff00]">
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
              <span className="text-xs font-black capitalize tracking-widest text-[#FFDF00] mb-2 block">Paradise of Nature</span>
              <h3 className="text-3xl font-display font-bold mb-3">Kerala Overview</h3>
              <p className="text-white/80 text-sm leading-relaxed line-clamp-2">
                Enjoy green nature, rivers, tea gardens, animals, and beautiful beaches.
              </p>
              <div className="mt-4 flex items-center gap-2 font-bold text-sm text-[#FFDF00]">
                Explore State <span>→</span>
              </div>
            </div>
          </Link>
        </div>
      </div>



      <SearchPackagesModal isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} />



      {/* Featured Packages Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-20">
        <div className="flex justify-between items-end mb-8">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-[var(--color-primary-forest)] fill-current" />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Featured South India Packages</h2>
          </div>
          <Link to="/tour-packages/madurai-tours" className="text-sm font-semibold text-[var(--color-primary-forest)] hover:underline flex items-center gap-1 whitespace-nowrap">
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
                {/* Action Buttons */}
                <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col gap-3">
                  <div className="flex flex-col sm:flex-row items-center gap-2">
                    <Link to="/contact" className="w-full sm:flex-1 text-center bg-[#0B2515] text-white text-[13px] font-bold py-2 rounded-xl hover:bg-[#3ba893] transition-colors"> Enquire Now </Link>
                    <Link
                      to={getPackageLink(pkg)}
                      className="w-full sm:flex-1 text-center bg-[#0B2515] text-white text-[13px] font-bold py-2 rounded-xl hover:bg-[#0c593a] transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience South India Video Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-20">
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
                playsInline
                preload="none"
                poster="/assets/Tamil Nadu1.webp"
                className="w-full h-full object-cover"
              >
                <source src="/assets/video/south india (1).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Info & Features Banner */}
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-20">
        <div
          className={`${clayCard} p-6 md:p-8 rounded-3xl grid grid-cols-1 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200/50`}
        >

          {/* Clear Pricing */}
          <div className="flex items-center gap-4 pt-4 md:pt-0">
            <div className="w-12 h-12 rounded-xl bg-[#e8f5e9] text-[var(--color-primary-forest)] flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-sm">
                Clear Pricing
              </h3>

              <p className="text-xs text-slate-500">
                Simple and transparent quotes
              </p>
            </div>
          </div>


          {/* Travel Assistance */}
          <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-xl bg-[#e8f5e9] text-[var(--color-primary-forest)] flex items-center justify-center flex-shrink-0">
              <HeadphonesIcon className="w-6 h-6" />
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-sm">
                Travel Assistance
              </h3>

              <p className="text-xs text-slate-500">
                We're here to help with your trip
              </p>
            </div>
          </div>


          {/* Secure Enquiry */}
          <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-xl bg-[#e8f5e9] text-[var(--color-primary-forest)] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-sm">
                Secure Enquiry
              </h3>

              <p className="text-xs text-slate-500">
                Your details are handled with care
              </p>
            </div>
          </div>


          {/* Trusted Travel */}
          <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-xl bg-[#e8f5e9] text-[var(--color-primary-forest)] flex items-center justify-center flex-shrink-0">
              <Star className="w-6 h-6" />
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-sm">
                Trusted Travel Experiences
              </h3>

              <p className="text-xs text-slate-500">
                Helping travelers explore India
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Why Book With Logaa Holidays */}
      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 max-w-sm">Why Book With<br />Logaa Holidays?</h2>
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              <div className="flex gap-3">
                <MapPin className="w-8 h-8 text-[var(--color-primary-forest)] flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">Local Expertise</h3>
                  <p className="text-xs text-slate-500">In-depth knowledge<br />of South India</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Map className="w-8 h-8 text-[var(--color-primary-forest)] flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">Customized Trips</h3>
                  <p className="text-xs text-slate-500">Tour Packages Made for You<br />just for you</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Building2 className="w-8 h-8 text-[var(--color-primary-forest)] flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">Handpicked Stays</h3>
                  <p className="text-xs text-slate-500">Quality stays for a<br />memorable trip</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Users className="w-8 h-8 text-[var(--color-primary-forest)] flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">Authentic Experiences</h3>
                  <p className="text-xs text-slate-500">Real experiences,<br />real connections</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[400px]">
            <a
              href="https://wa.me/917397329776?text=Hello%20Logaa%20Holidays%2C%20I%20would%20like%20to%20plan%20my%20perfect%20getaway%20for%20a%20South%20India%20tour%20package."
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[var(--color-primary-forest)] hover:bg-[#198450] rounded-3xl p-8 text-white h-full relative overflow-hidden shadow-2xl hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(11,37,21,0.4)] transition-all duration-300 group cursor-pointer"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Let's Plan Your<br />Perfect Getaway!</h3>
                <p className="text-white/80 text-sm max-w-[200px]">Amazing places are waiting for you.</p>
              </div>
              {/* Decorative Temple Outline / Sketch */}
              <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20 pointer-events-none group-hover:opacity-30 transition-opacity">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full transform translate-x-4 translate-y-4">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
            </a>
          </div>

        </div>
      </div>

      {/* ── FAQ Section ── */}
      <SouthIndiaFAQ />

    </div>
  );
}

function SouthIndiaFAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const faqs = [
    {
      q: 'Is this South India tour package suitable for families and couples?',
      a: 'Yes. South India offers a diverse mix of experiences — from the heritage temples of Tamil Nadu and the serene backwaters of Kerala to the misty coffee estates of Karnataka. Our packages are designed to suit families, honeymooners and senior citizens, with comfortable hotels, private transportation and a relaxed pace throughout.',
    },
    {
      q: 'Can we join the South India tour from Madurai or Chennai?',
      a: 'Absolutely. We offer pick-up from Madurai, Chennai, Coimbatore and other major Tamil Nadu cities. Our driver or guide will meet you at the station or airport and begin the tour, so you can easily join from any convenient location in South India.',
    },
    {
      q: 'Is a Kerala houseboat stay included in South India packages?',
      a: "Yes, several of our South India packages include a houseboat stay in Alleppey (Alleppey). You will experience Kerala's famous backwaters, drifting through coconut-lined canals with all meals served on board. It is a highlight that travellers of all ages enjoy.",
    },
    {
      q: 'Are South India tour packages available for senior citizens?',
      a: 'Yes. We design itineraries with senior citizens in mind — gentle sightseeing schedules, hotels with lifts and easy access, and private vehicles throughout. Destinations like Madurai, Rameswaram, Kanyakumari and Munnar are all accessible and enjoyable for older travellers.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 mb-16 relative z-20">
      <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-100">
        <div className="flex items-center gap-2 mb-8">
          <Star className="w-5 h-5 text-[var(--color-primary-forest)] fill-current" />
          <h2 className="text-2xl font-bold text-slate-800">Frequently Asked Questions</h2>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-[#f8f9fa] hover:bg-[#eef4ee] transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-semibold text-slate-800 leading-snug">{faq.q}</span>
                <span className={`text-[var(--color-primary-forest)] flex-shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 py-4 bg-white border-t border-slate-100">
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

