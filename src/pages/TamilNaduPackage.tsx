import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Star, CheckCircle2, HeadphonesIcon, ShieldCheck, Users, Map, Building2, ArrowRight, Filter } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { getPackageLink, packagesDatabase } from './PackageDetails';

// The 5 new Tamil Nadu packages with their starting city
const tamilNaduPackages = [
  {
    id: '2090',
    startingCity: 'Chennai',
    badge: 'Heritage Tour',
  },
  {
    id: '2091',
    startingCity: 'Chennai',
    badge: 'Most Popular',
  },
  {
    id: '2092',
    startingCity: 'Chennai',
    badge: 'Beach Tour',
  },
  {
    id: '2093',
    startingCity: 'Chennai',
    badge: 'Pilgrimage',
  },
  {
    id: '2094',
    startingCity: 'Chennai',
    badge: 'Cultural Tour',
  },
  {
    id: '2095',
    startingCity: 'Madurai',
    badge: 'Temple Tour',
  },
];

// Merge with packagesDatabase data
const enrichedPackages = tamilNaduPackages.map((p) => {
  const db = packagesDatabase[p.id] || {};
  return {
    ...p,
    title: db.title || '',
    image: db.image || '/assets/Tamil Nadu1.webp',
    heroImage: db.heroImage || '/assets/Tamil Nadu1.webp',
    duration: db.overview?.duration || '',
    destination: db.overview?.destination || '',
    themes: db.overview?.themes || '',
    price: db.priceDetails?.amount || 'On Request',
    seoTitle: db.seoTitle || db.title || '',
    seoDescription: db.seoDescription || '',
  };
});

// All unique starting cities
const allCities = ['All', ...Array.from(new Set(tamilNaduPackages.map((p) => p.startingCity)))];

// Badge color mapping
const badgeColors: Record<string, string> = {
  'Heritage Tour': 'bg-amber-100 text-amber-700',
  'Most Popular': 'bg-emerald-100 text-emerald-700',
  'Beach Tour': 'bg-blue-100 text-blue-700',
  'Pilgrimage': 'bg-purple-100 text-purple-700',
  'Cultural Tour': 'bg-rose-100 text-rose-700',
  'Temple Tour': 'bg-orange-100 text-orange-700',
};

export function TamilNaduPackage() {
  useSEO(
    'Tamil Nadu Tour Packages | Best Tamil Nadu Holiday Packages | Logaa Holidays',
    'Explore the best Tamil Nadu tour packages covering Chennai, Mahabalipuram, Thanjavur, Trichy, Madurai, Rameswaram and Kanyakumari. Book your Tamil Nadu holiday with Logaa Holidays.',
    'Tamil Nadu tour packages, Tamil Nadu holiday packages, Chennai tour package, Madurai Rameswaram Kanyakumari package, Tamil Nadu pilgrimage tour, Tamil Nadu beach tour, Tamil Nadu cultural tour, Logaa Holidays Tamil Nadu'
  );

  const [activeCity, setActiveCity] = useState('All');

  const filteredPackages =
    activeCity === 'All'
      ? enrichedPackages
      : enrichedPackages.filter((p) => p.startingCity === activeCity);

  const clayCard = 'bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300';
  const clayBtn = 'bg-[var(--color-primary-forest)] text-white font-bold rounded-xl transition-all hover:scale-[1.02] active:scale-95';

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-24 font-sans text-slate-800">

      {/* ── Hero ── */}
      <div className="relative w-full h-[500px] sm:h-[600px] overflow-hidden rounded-b-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
        <img
          src="/assets/Tamil Nadu1.webp"
          alt="Tamil Nadu Tour Packages"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 h-full flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-5 border border-white/30">
            <Star className="w-4 h-4 text-yellow-300 fill-current" />
            <span className="text-sm font-semibold text-white tracking-wide">Logaa Holidays — Tamil Nadu Specialists</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
            Tamil Nadu Tour Packages
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 leading-relaxed drop-shadow">
            Temples · Heritage · Beaches · Pilgrimage · Culture
            <br />
            <span className="text-sm font-medium text-white/70">Chennai → Mahabalipuram → Thanjavur → Trichy → Madurai → Rameswaram → Kanyakumari</span>
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl px-5 py-3 text-white text-sm font-semibold flex items-center gap-2">
              <Calendar className="w-4 h-4" /> 6 to 11 Days
            </div>
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl px-5 py-3 text-white text-sm font-semibold flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Starts from Chennai
            </div>
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl px-5 py-3 text-white text-sm font-semibold flex items-center gap-2">
              <Users className="w-4 h-4" /> Family · Pilgrimage · Cultural
            </div>
          </div>
        </div>
      </div>

      {/* ── City Filter Tabs ── */}
      <div className="max-w-7xl mx-auto px-6 pt-12 mb-8">
        <div className="flex items-center gap-3 flex-wrap">
          <Filter className="w-5 h-5 text-slate-500" />
          <span className="text-sm font-semibold text-slate-600 mr-1">Filter by Starting City:</span>
          {allCities.map((city) => (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={`px-5 py-2 rounded-full text-sm font-bold border transition-all duration-200 ${
                activeCity === city
                  ? 'bg-[var(--color-primary-forest)] text-white border-[var(--color-primary-forest)] shadow-md'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-[var(--color-primary-forest)] hover:text-[var(--color-primary-forest)]'
              }`}
            >
              {city === 'All' ? '🗺️ All Packages' : `📍 ${city}`}
            </button>
          ))}
        </div>
      </div>

      {/* ── Package Cards ── */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-[var(--color-primary-forest)] fill-current" />
            <h2 className="text-2xl font-bold text-slate-800">
              {activeCity === 'All' ? 'All Tamil Nadu Tour Packages' : `Packages Starting from ${activeCity}`}
            </h2>
          </div>
          <span className="text-sm text-slate-500 font-medium">{filteredPackages.length} package{filteredPackages.length !== 1 ? 's' : ''} found</span>
        </div>

        {filteredPackages.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <MapPin className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p className="text-lg font-medium">No packages found for this starting city.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <div key={pkg.id} className={`${clayCard} overflow-hidden group flex flex-col`}>
                {/* Image */}
                <div className="relative h-56 overflow-hidden rounded-t-3xl">
                  <img
                    loading="lazy"
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${badgeColors[pkg.badge] || 'bg-white text-slate-700'}`}>
                    {pkg.badge}
                  </div>
                  {/* Starting City */}
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    From {pkg.startingCity}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-slate-800 mb-3 leading-snug line-clamp-2">{pkg.title}</h3>

                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
                    <Calendar className="w-4 h-4 text-[var(--color-primary-forest)] flex-shrink-0" />
                    <span>{pkg.duration}</span>
                  </div>

                  <div className="flex items-start gap-2 text-slate-500 text-sm mb-2">
                    <MapPin className="w-4 h-4 text-[var(--color-primary-forest)] flex-shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{pkg.destination}</span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                    <Users className="w-4 h-4 text-[var(--color-primary-forest)] flex-shrink-0" />
                    <span>{pkg.themes}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col gap-3">
                    <div className="flex flex-col sm:flex-row items-center gap-2">
                      <a
                        href={`https://wa.me/917397329776?text=Hi Logaa Holidays, I am interested in the ${pkg.title} package.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:flex-1 text-center bg-[#F2FBF5] text-[#0F6B46] border border-[#E2F5EA] text-[13px] font-bold py-2 rounded-xl hover:bg-[#0F6B46] hover:text-white transition-colors"
                      >
                        Enquire Now
                      </a>
                      <Link
                        to={getPackageLink({ id: pkg.id, title: pkg.title })}
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
        )}
      </div>

      {/* ── Why Choose Logaa ── */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-100">
          <div className="flex items-center gap-2 mb-8">
            <Star className="w-5 h-5 text-[var(--color-primary-forest)] fill-current" />
            <h2 className="text-2xl font-bold text-slate-800">Why Book with Logaa Holidays?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Customised Packages', desc: 'Itineraries tailored to your needs, budget and travel dates.' },
              { icon: <HeadphonesIcon className="w-6 h-6" />, title: '24/7 Travel Support', desc: 'Our team is always available before and during your journey.' },
              { icon: <ShieldCheck className="w-6 h-6" />, title: 'Private Transportation', desc: 'Comfortable, air-conditioned private vehicles throughout the tour.' },
              { icon: <Star className="w-6 h-6" />, title: 'Handpicked Hotels', desc: 'Carefully selected hotels for a comfortable and memorable stay.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-[#f8f9fa] border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-[#e8f5e9] text-[var(--color-primary-forest)] flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA Banner ── */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="bg-[var(--color-primary-forest)] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="w-96 h-96 bg-white rounded-full absolute -top-20 -right-20" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Plan Your Tamil Nadu Journey</h3>
            <p className="text-white/80 text-sm max-w-md">
              Temples, beaches, heritage and pilgrimage — all in one trip. Call or WhatsApp us to customise your perfect Tamil Nadu tour.
            </p>
          </div>
          <a
            href="https://wa.me/917397329776"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 bg-white text-[var(--color-primary-forest)] font-bold px-8 py-4 rounded-2xl flex items-center gap-2 hover:scale-105 transition-transform flex-shrink-0 shadow-lg"
          >
            📱 WhatsApp Us <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* ── FAQ Section ── */}
      <TamilNaduFAQ />

    </div>
  );
}

function TamilNaduFAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const faqs = [
    {
      q: 'Is this Tamil Nadu tour package suitable for families and couples?',
      a: 'Yes. The tour covers heritage temples and coastal beaches, with comfortable hotels and a relaxed pace, making it ideal for both family groups and honeymooners. We tailor activities for children, adults and senior citizens — such as easy walks and optional temple visits — so travellers of all ages can enjoy it.',
    },
    {
      q: 'Can we join the Tamil Nadu tour from Madurai or Chennai?',
      a: 'Absolutely. We offer pick-up from Madurai or Chennai and coordinate train and flight arrivals into those cities. Our driver or guide will meet you at the station or airport and begin the tour, so you can easily join from any major city in Tamil Nadu.',
    },
    {
      q: 'Which destinations are covered in the Tamil Nadu tour packages?',
      a: 'Our Tamil Nadu packages cover a wide range of destinations including Chennai, Mahabalipuram, Thanjavur, Trichy, Madurai, Rameswaram and Kanyakumari. Depending on the package you choose, you can explore ancient Dravidian temples, historic forts, scenic coastal beaches and vibrant cultural heritage sites.',
    },
    {
      q: 'Are Tamil Nadu tour packages available for pilgrimage groups?',
      a: 'Yes. We have dedicated pilgrimage-focused itineraries covering the Pancha Bhuta Stalas, Meenakshi Amman Temple, Ramanathaswamy Temple and Kanyakumari. Our guides provide detailed information at each sacred site, and we ensure a comfortable, well-paced experience for senior citizens and devotees.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 mb-16">
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
