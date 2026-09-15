import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Sparkles,
  MapPin,
  Calendar,
  Clock,
  ShieldCheck,
  ArrowRight,
  Phone,
  Utensils,
  Camera,
  Compass,
  CheckCircle2,
  Star,
  Gift,
  Car,
  Palmtree,
  Mountain,
  Waves
} from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

interface HoneymoonDestination {
  id: string;
  name: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  image: string;
  route: string;
  featured?: boolean;
  tag?: string;
  rating?: string;
  startingPrice?: string;
}

const honeymoonDestinations: HoneymoonDestination[] = [
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    title: 'Tamil Nadu Honeymoon Packages',
    category: 'Hill Stations & Heritage Romance',
    description: 'Enjoy a lovely honeymoon in Tamil Nadu. Visit hills, lakes, beautiful places and enjoy peaceful time together.',
    highlights: ['Ooty & Coonoor', 'Kodaikanal Lake', 'Private Cab Sightseeing'],
    image: '/assets/TKK hero/Tamilnadu1.webp',
    route: '/tour-packages/tamil-nadu-honeymoon-packages',
    featured: true,
    tag: 'Popular Hill Station Escape',
    rating: '4.9',
    startingPrice: '₹14,500'
  },
  {
    id: 'kerala',
    name: 'Kerala',
    title: 'Kerala Honeymoon Packages',
    category: 'Backwaters & Misty Hills',
    description: 'Enjoy your honeymoon in Kerala with your partner. Visit green hills, stay in a houseboat and spend peaceful time in beautiful places together.',
    highlights: ['Munnar Tea Hills', 'Alleppey Houseboat', 'Thekkady Forests', 'Kovalam Beach'],
    image: '/assets/TKK hero/kerala1.webp',
    route: '/tour-packages/kerala-honeymoon-packages',
    featured: false,
    tag: 'God’s Own Country',
    rating: '5.0',
    startingPrice: '₹14,500'
  },
  {
    id: 'karnataka',

    name: 'Karnataka',

    title: 'Karnataka Honeymoon Packages',

    category: 'Hills, Coffee & Nature',

    description: 'Enjoy your honeymoon in Karnataka with your partner. Visit green hills, coffee farms, waterfalls and beautiful places together.',

    highlights: [
      'Coorg Coffee Country',
      'Chikmagalur Hills',
      'Mysore Palace',
      'Abbey Falls'
    ],

    image: '/assets/TKK hero/karnataka1.webp',

    route: '/tour-packages/karnataka-honeymoon-packages',

    featured: false,

    tag: 'Coffee & Nature',

    rating: '4.9',

    startingPrice: '₹15,000'
  },

  {
    id: 'kashmir',

    name: 'Kashmir',

    title: 'Kashmir Honeymoon Packages',

    category: 'Snow, Mountains & Valleys',

    description: 'Enjoy your honeymoon in Kashmir with your partner. See snow mountains, beautiful valleys and take a boat ride on Dal Lake.',

    highlights: [
      'Dal Lake Boat Ride',
      'Gulmarg Cable Car',
      'Pahalgam Valley',
      'Sonmarg Glacier'
    ],

    image: '/assets/AKS hero/Kashmir1.webp',

    route: '/tour-packages/kashmir-honeymoon-packages',

    featured: true,

    tag: 'Snow & Mountains',

    rating: '5.0',

    startingPrice: '₹18,500'
  },

  {
    id: 'goa',

    name: 'Goa',

    title: 'Goa Honeymoon Packages',

    category: 'Beaches, Sunsets & Fun',

    description: 'Enjoy your honeymoon in Goa with your partner. Visit beautiful beaches, watch the sunset and enjoy a relaxing time together.',

    highlights: [
      'North Goa Beaches',
      'South Goa Beaches',
      'Sunset',
      'Beach Dinner'
    ],

    image: '/assets/MG hero/goa1.webp',

    route: '/tour-packages/goa-honeymoon-packages',

    featured: false,

    tag: 'Beaches & Sunsets',

    rating: '4.8',

    startingPrice: '₹12,500'
  },

  {
    id: 'himachal',

    name: 'Himachal Pradesh',

    title: 'Himachal Pradesh Honeymoon Packages',

    category: 'Mountains, Snow & Hills',

    description: 'Enjoy your honeymoon in Himachal Pradesh with your partner. See beautiful mountains, snow places and enjoy a peaceful stay together.',

    highlights: [
      'Manali & Solang Valley',
      'Shimla & Kufri',
      'Atal Tunnel',
      'Mountain Stays'
    ],

    image: '/assets/AKS hero/Himachal 1.webp',

    route: '/tour-packages/himachal-honeymoon-packages',

    featured: false,

    tag: 'Mountains & Snow',

    rating: '4.9',

    startingPrice: '₹16,500'
  },

  {
    id: 'sikkim-darjeeling',

    name: 'Sikkim & Darjeeling',

    title: 'Sikkim and Darjeeling Honeymoon Packages',

    category: 'Mountains, Tea Gardens & Lakes',

    description: 'Enjoy your honeymoon in Sikkim and Darjeeling. See beautiful mountains, green tea gardens, lakes and peaceful places with your partner.',

    highlights: [
      'Gangtok MG Marg',
      'Tsomgo Lake',
      'Tiger Hill Sunrise',
      'Toy Train Ride'
    ],

    image: '/assets/AKS hero/sikim 1.webp',

    route: '/tour-packages/sikkim-darjeeling-honeymoon-packages',

    featured: false,

    tag: 'Mountains & Tea Gardens',

    rating: '4.9',

    startingPrice: '₹19,500'
  },

  {
    id: 'andaman',

    name: 'Andaman',

    title: 'Andaman Honeymoon Packages',

    category: 'Beaches, Islands &  Water',

    description: 'Enjoy your honeymoon in Andaman with your partner. Visit beautiful islands, clear beaches and enjoy peaceful time by the sea.',

    highlights: [
      'Havelock Island',
      'Radhanagar Beach',
      'Neil Island',
      'Elephant Beach'
    ],

    image: '/assets/AKS hero/Andaman1.webp',

    route: '/tour-packages/andaman-honeymoon-packages',

    featured: false,

    tag: 'Beaches & Islands',

    rating: '5.0',

    startingPrice: '₹22,500'
  },

  {
    id: 'maldives',

    name: 'Maldives',

    title: 'Maldives Honeymoon Packages',

    category: ' Water & Beautiful Islands',

    description: 'Enjoy your honeymoon in the Maldives with your partner. Stay near the  ocean, relax on beautiful islands and spend time together.',

    highlights: [
      'Water Villa Stay',
      'Boat or Seaplane Ride',
      'Dinner by the Sea',
      'Snorkeling'
    ],

    image: '/assets/MG hero/maldives1.webp',

    route: '/tour-packages/maldives-honeymoon-packages',

    featured: true,

    tag: 'Beautiful Island Stay',

    rating: '5.0',

    startingPrice: '₹45,000'
  }
];

const romanticExperiences = [
  {
    icon: Palmtree,
    title: 'Comfortable Places to Stay',
    description:
      'Stay in good hotels, resorts, villas and houseboats. Enjoy your time together in a comfortable place.'
  },
  {
    icon: Sparkles,
    title: 'Trip Made for You',
    description:
      'Tell Logaa Holidays what you like, and we will help plan a honeymoon trip that suits you. Travel without any rush.'
  },
  {
    icon: Heart,
    title: 'Beautiful Moments Together',
    description:
      'Enjoy a candlelight dinner, flower decoration, a cake and other lovely moments with your partner.'
  }
];



export function HoneymoonPackages() {
  useSEO(
    'Honeymoon Packages | Romantic Holiday Packages | Logaa Holidays',
    'Discover romantic honeymoon packages from Logaa Holidays. Explore Kerala, Kashmir, Goa, Himachal, Andaman, Maldives and more with customized honeymoon travel packages.',
    'honeymoon packages, romantic holiday packages, luxury honeymoon tours, kerala honeymoon, kashmir honeymoon, goa honeymoon, maldives honeymoon, andaman honeymoon, logaa holidays'
  );

  const scrollToDestinations = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('honeymoon-destinations');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const whatsappMessage = encodeURIComponent(
    'Hi Logaa Holidays, I would like to plan a romantic honeymoon package. Please share the details and customized options.'
  );

  return (
    <div className="w-full bg-[var(--color-bg-luxury)] text-slate-800 font-body overflow-x-hidden">

      {/* ════════════════════════════════════════════════════════════════════
          1. HERO SECTION
      ════════════════════════════════════════════════════════════════════ */}
      <header className="relative w-full min-h-[92vh] sm:min-h-[95vh] flex items-center justify-center overflow-hidden rounded-b-[2.5rem] sm:rounded-b-[4rem] bg-slate-950 pt-28 pb-16 px-6">
        {/* Background Image with Parallax / Scale feel */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/home hero/honeymoon.webp"
            alt="Romantic Honeymoon Escapes by Logaa Holidays"
            className="w-full h-full object-cover object-center scale-105 animate-fade-in filter brightness-[0.78]"
          />
          {/* Subtle multi-layer gradient overlays: deep forest green ambiance and dark vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[var(--color-primary-forest)]/25 to-slate-950/80" />
        </div>

        {/* Ambient mandala / decorative glow */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-96 h-96 bg-[var(--color--ocean)]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">

          {/* Romantic Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-md px-5 py-2.5 rounded-full mb-6 border border-white/20 shadow-lg text-white transition-all duration-300">
            <Heart className="w-4 h-4 text-emerald-400 fill-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-emerald-200">
              Made for Your Special Journey
            </span>
          </div>

          {/* Main H1 Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white tracking-tight leading-[1.08] mb-6 drop-shadow-md">
            Start Your Beautiful <br />
            <span className="italic font-normal text-emerald-300 font-display">
              Journey Together
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed mb-10 font-normal drop-shadow">
            Choose the perfect honeymoon package and enjoy beautiful places, comfortable stays, private travel and happy memories together.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-14">
            <button
              onClick={scrollToDestinations}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-base bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_10px_30px_rgba(16,185,129,0.35)] hover:shadow-[0_15px_35px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <span>Explore Packages</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <a
              href={`https://wa.me/917397329776?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              <span>Plan Your Honeymoon</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>



        </div>
      </header>


      {/* ════════════════════════════════════════════════════════════════════
          2. INTRODUCTION SECTION
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-widest bg-emerald-50 px-4 py-1.5 rounded-full mb-4 border border-emerald-200/60">
            <Heart className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
            Enjoy Your Trip Together
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight mb-6">
            Discover Your Dream <span className="text-[var(--color-primary-forest)] italic">Honeymoon</span> Destination
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Your honeymoon is a special trip to enjoy together. Choose beautiful places, comfortable stays and memorable experiences with Logaa Holidays.
          </p>
        </div>

        {/* 3 Romance Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 group hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[var(--color-primary-forest)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Utensils className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Candlelit Dining & Cakes</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Enjoy a special dinner with your partner. Room decoration, welcome drinks and celebration cakes can also be arranged.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 group hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg--50 text-[var(--color--ocean)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Car className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Private Dedicated AC Cab</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Travel comfortably in your own private AC car with a driver. No crowded buses and no rushing.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 group hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Gift className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Customized To Your Style</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Love mountains, beaches or peaceful resorts? Tell us what you like, and we will help plan the right honeymoon for you.
            </p>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════════
          3. HONEYMOON DESTINATION CARDS (THE MAIN HIGHLIGHT)
      ════════════════════════════════════════════════════════════════════ */}
      <section id="honeymoon-destinations" className="py-16 md:py-24 px-6 max-w-7xl mx-auto scroll-mt-24">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-widest bg-emerald-50 px-4 py-1.5 rounded-full mb-3 border border-emerald-200/60">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              Pick Your Favourite
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
              Find Your Perfect <span className="text-[var(--color-primary-forest)] italic">Honeymoon Place</span>
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm sm:text-base">
            Choose the place you want to visit with your partner. See the trip plan, hotel details and package information.
          </p>
        </div>

        {/* Asymmetric Editorial Grid:
            Desktop: 3 columns with featured cards spanning 2 columns
            Row 1: Tamil Nadu (span 2) + Kerala (span 1) = 3 cols
            Row 2: Karnataka (span 1) + Kashmir (span 2) = 3 cols
            Row 3: Goa (span 1) + Himachal (span 1) + Sikkim & Darjeeling (span 1) = 3 cols
            Row 4: Andaman (span 1) + Maldives (span 2) = 3 cols
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {honeymoonDestinations.map((dest) => {
            const isFeatured = dest.featured;

            return (
              <article
                key={dest.id}
                className={`relative group rounded-[2rem] overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_22px_50px_rgba(0,0,0,0.16)] transition-all duration-500 flex flex-col justify-between min-h-[500px] sm:min-h-[540px]`}
              >
                {/* Background Image with Hover Zoom */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
                  <img
                    loading="lazy"
                    src={dest.image}
                    alt={`${dest.title} - Logaa Holidays`}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-[0.88]"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/20 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-emerald-950/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                {/* Top Pill Badges - In normal flow so they never collide with bottom content on mobile */}
                <div className="relative z-10 p-5 sm:p-6 pb-2 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-sm max-w-[70%]">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                    <span className="truncate">{dest.tag || dest.category}</span>
                  </span>

                  {dest.rating && (
                    <span className="inline-flex items-center gap-1 bg-slate-950/70 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1.5 rounded-full border border-white/20 shrink-0">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      {dest.rating}
                    </span>
                  )}
                </div>

                {/* Card Bottom Content */}
                <div className="relative z-10 p-5 sm:p-8 pt-4 flex flex-col justify-end">

                  {/* Destination Super-title */}
                  <p className="text-emerald-300 font-semibold text-xs tracking-widest mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {dest.name}
                  </p>

                  {/* Title */}
                  <h3 className={`font-display font-bold text-white mb-2.5 leading-tight group-hover:text-emerald-200 transition-colors duration-300 ${isFeatured ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-2xl sm:text-3xl'
                    }`}>
                    {dest.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-white/90 text-sm sm:text-base leading-relaxed mb-4 ${isFeatured ? 'max-w-2xl' : ''
                    }`}>
                    {dest.description}
                  </p>

                  {/* Highlights Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    {dest.highlights.slice(0, 3).map((item, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium bg-white/10 backdrop-blur-sm text-white/90 px-2.5 py-1 rounded-lg border border-white/15"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Action Link / Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <Link
                      to={dest.route}
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold bg-white text-slate-900 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-md group-hover:shadow-lg"
                      aria-label={`Explore packages for ${dest.title}`}
                    >
                      <span>Explore Packages</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>


                  </div>

                </div>

                {/* Clickable Overlay Link for Entire Card */}
                <Link
                  to={dest.route}
                  className="absolute inset-0 z-20 cursor-pointer"
                  aria-hidden="true"
                  tabIndex={-1}
                />
              </article>
            );
          })}
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════════
          4. FEATURED ROMANTIC EXPERIENCES SECTION
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 bg-[#EDF3EE] rounded-[3rem] max-w-7xl mx-auto my-12 relative overflow-hidden border border-emerald-950/5">

        {/* Subtle decorative background circles */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center mb-16">

          <div className="inline-flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-widest bg-emerald-100/80 px-4 py-1.5 rounded-full mb-4 border border-emerald-300/60">
            <Heart className="w-3.5 h-3.5 fill-emerald-700 text-emerald-700" />
            Made for Your Honeymoon
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight mb-5">
            Make Your Honeymoon <span className="text-[var(--color-primary-forest)] italic">More Beautiful</span>
          </h2>

          <p className="text-slate-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Enjoy comfortable stays, private travel and beautiful moments
            with your partner during your honeymoon.
          </p>

        </div>


        {/* 3 Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 mb-16">

          {romanticExperiences.map((exp, idx) => {
            const IconComponent = exp.icon;

            return (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-emerald-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(11,93,62,0.1)] transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary-forest)] text-white flex items-center justify-center mb-6 shadow-md">
                  <IconComponent className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {exp.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {exp.description}
                </p>

              </div>
            );
          })}

        </div>


        {/* Honeymoon Extras Banner */}
        <div className="relative z-10 bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex items-center gap-4 text-left">

            <div className="w-12 h-12 rounded-full bg-emerald-50 text-[var(--color-primary-forest)] flex items-center justify-center shrink-0">
              <Gift className="w-6 h-6" />
            </div>

            <div>
              <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                More Things for Your Honeymoon
              </h4>

              <p className="text-xs sm:text-sm text-slate-600">
                These can be arranged for your honeymoon trip.
              </p>
            </div>

          </div>


          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 text-xs sm:text-sm font-semibold text-slate-800">

            <span className="flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-2 rounded-full border border-emerald-100">
              <CheckCircle2 className="w-4 h-4" /> Flower Bed Decoration
            </span>

            <span className="flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-2 rounded-full border border-emerald-100">
              <CheckCircle2 className="w-4 h-4" /> Honeymoon Cake
            </span>

            <span className="flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-2 rounded-full border border-emerald-100">
              <CheckCircle2 className="w-4 h-4" /> Candlelight Dinner
            </span>

            <span className="flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-2 rounded-full border border-emerald-100">
              <CheckCircle2 className="w-4 h-4" /> Private AC Car
            </span>

          </div>

        </div>

      </section>


      {/* ════════════════════════════════════════════════════════════════════
          5. WHY CHOOSE LOGAA HOLIDAYS
      ════════════════════════════════════════════════════════════════════ */}
      {/* <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

      
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <img
                loading="lazy"
                src="/assets/home hero/homefirst.webp"
                alt="Happy Honeymoon Couple with Logaa Holidays"
                className="w-full h-[450px] sm:h-[520px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <p className="text-sm font-medium italic text-emerald-200 mb-1">
                  "Logaa Holidays arranged our Kerala honeymoon seamlessly. The houseboat and Munnar private resort were pure magic."
                </p>
                <p className="text-xs font-bold text-white uppercase tracking-wider">
                  — Priya & Karthik, Madurai
                </p>
              </div>
            </div>

          
            <div className="absolute -bottom-6 -right-6 sm:right-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
                4.9★
              </div>
              <div className="text-left">
                <p className="font-bold text-slate-900 text-sm">500+ Couple Reviews</p>
                <p className="text-xs text-slate-500">Certified Honeymoon Planner</p>
              </div>
            </div>
          </div>

         
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-widest bg-emerald-50 px-4 py-1.5 rounded-full mb-4 border border-emerald-200/60">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Your Trusted Holiday Partner
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight mb-6">
              Why Couples Choose <span className="text-[var(--color-primary-forest)] italic">Logaa Holidays</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-8">
              We specialize in honeymoon packages that remove stress and uncertainty, giving you
              peace of mind to celebrate and soak in every single moment together.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChooseUsPillars.map((pillar, idx) => (
                <div key={idx} className="flex items-start gap-3.5 text-left">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{pillar.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200/80 flex flex-wrap items-center gap-6">
              <a
                href={`https://wa.me/917397329776?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm bg-[var(--color-primary-forest)] text-white hover:bg-emerald-700 transition-colors shadow-md"
              >
                <span>Chat with Honeymoon Specialist</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+917397329776"
                className="inline-flex items-center gap-2 text-slate-800 font-bold text-sm hover:text-emerald-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>+91 73973 29776</span>
              </a>
            </div>

          </div>

        </div>
      </section> */}


      {/* ════════════════════════════════════════════════════════════════════
          6. CALL TO ACTION SECTION
      ════════════════════════════════════════════════════════════════════ */}
      <section className="pt-6 pb-16 px-6 max-w-6xl mx-auto">
        <div className="p-10 sm:p-14 md:p-20 text-white text-center relative overflow-hidden bg-[var(--color-primary-forest)] rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl">

          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--color--ocean)] rounded-full blur-[120px] opacity-20 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400 rounded-full blur-[120px] opacity-20 -translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 max-w-3xl mx-auto">

            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20 text-emerald-200 text-xs font-bold uppercase tracking-widest">
              <Heart className="w-3.5 h-3.5 fill-emerald-300 text-emerald-300" />
              Your Honeymoon Starts Here
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Ready to Plan Your <br className="hidden sm:inline" />
              <span className="italic text-emerald-200 font-display">Honeymoon?</span>
            </h2>

            <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Tell Logaa Holidays where you want to go. We will help you plan your
              trip, choose a comfortable place to stay and enjoy your time together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

              <a
                href={`https://wa.me/917397329776?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base bg-white text-emerald-900 hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
              >
                <span>Plan Your Honeymoon</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/25 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Contact Us</span>
              </Link>

            </div>

            <div className="mt-8 text-xs text-white/70">
              Made for You • Easy to Plan • Clear Prices
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
