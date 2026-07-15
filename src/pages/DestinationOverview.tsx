import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Phone, Clock, MapPin, Search, Calendar, Filter } from 'lucide-react';
import { destinationsData } from '../data/destinationsData';
import { packagesDatabase, getPackageLink } from './PackageDetails';
import { generateSlug } from '../lib/utils';
import { ComprehensiveEnquiryForm } from '../components/ComprehensiveEnquiryForm';

export function DestinationOverview() {
  const { state, city } = useParams();
  const dest = city && destinationsData[city] ? destinationsData[city] : null;
  const [placeFilter, setPlaceFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [city]);

  if (!dest) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-luxury)] pb-24 font-sans text-slate-800">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Destination not found</h2>
          <Link to="/south-india-package" className="text-[var(--color-primary-forest)] hover:underline">
            Return to Destinations
          </Link>
        </div>
      </div>
    );
  }

  const destNameLower = dest.name.toLowerCase();
  const relatedKeywords = [destNameLower, ...dest.placesToVisit.map((p: any) => p.name.toLowerCase())];

  const allRelatedPackages = Object.values(packagesDatabase).filter((p: any) => {
    const titleLower = (p.title || '').toLowerCase();
    const destLower = (p.overview?.destination || '').toLowerCase();
    
    return relatedKeywords.some(keyword => 
      titleLower.includes(keyword) || destLower.includes(keyword)
    );
  });
  
  const totalPackagesCount = allRelatedPackages.length;

  let featuredPackages = dest.popularPackages
    .map((id: string) => packagesDatabase[id])
    .filter(Boolean);

  if (featuredPackages.length < 4) {
    const existingIds = new Set(featuredPackages.map((p: any) => p.id));
    for (const pkg of allRelatedPackages) {
      if (featuredPackages.length >= 4) break;
      if (!existingIds.has(pkg.id)) {
        featuredPackages.push(pkg);
        existingIds.add(pkg.id);
      }
    }
  }

  // Common UI styles
  const clayCard = "bg-white rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.05),-10px_-10px_30px_rgba(255,255,255,0.8),inset_2px_2px_5px_rgba(255,255,255,1)] border border-white";
  const clayBtn = "bg-[var(--color-primary-forest)] text-white font-bold rounded-2xl shadow-[0_10px_20px_rgba(20,93,62,0.3),inset_2px_2px_5px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_30px_rgba(20,93,62,0.4)] transition-all hover:-translate-y-1";

  // Filter Places to Visit
  const placeTypes = ['All', ...Array.from(new Set(dest.placesToVisit.map((p: any) => p.type)))];
  const filteredPlaces = dest.placesToVisit.filter((place: any) =>
    placeFilter === 'All' || place.type === placeFilter
  );

  return (
    <div className="bg-[var(--color-bg-luxury)] min-h-screen pb-24 font-sans text-slate-800">

      {/* Hero Banner Section */}
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-slate-900 mb-12">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src={dest.image}
          alt={dest.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-end pt-32 pb-16 px-6 max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 text-white/80 text-sm font-medium mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/south-india-package" className="hover:text-white transition-colors">Destinations</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{dest.name}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white max-w-4xl leading-tight">
            {dest.name}
          </h1>
          <p className="text-white/90 text-lg mt-4 max-w-2xl">
            {dest.state}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Main Content Area (Left - 2/3) */}
        <div className="lg:col-span-2 flex flex-col gap-10">


          {/* Overview Section */}
          <div className="prose prose-slate max-w-none">
            <h2 className="text-3xl font-display font-bold text-slate-800 mb-6">{dest.overview.title}</h2>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">{dest.overview.description}</p>

            <h2 className="text-3xl font-display font-bold text-slate-800 mb-6">{dest.history.title}</h2>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">{dest.history.description}</p>

            <h2 className="text-3xl font-display font-bold text-[var(--color-blue-ocean)] mb-6">Major Attractions</h2>
            <div className="flex flex-col gap-6">
              {dest.majorAttractions.map((attr: any, idx: number) => (
                <div key={idx} className={`${clayCard} p-6 border-l-4 border-l-[var(--color-primary-forest)]`}>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{attr.title}</h3>
                  <p className="text-slate-600">{attr.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Top Places to Visit Grid */}
          <div className="mt-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <h2 className="text-3xl font-display font-bold text-slate-800 mb-4">Top Places to Visit in {dest.name}</h2>
                <div className="flex flex-wrap gap-2">
                  {placeTypes.map((type: any) => (
                    <button
                      key={type}
                      onClick={() => setPlaceFilter(type)}
                      className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${placeFilter === type
                          ? 'bg-[var(--color-primary-forest)] text-white shadow-md'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              <Link to={`/places-to-visit/${state}/${city}`} className="text-[var(--color-primary-forest)] font-semibold hover:underline text-sm shrink-0 flex items-center gap-1">
                View all <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {filteredPlaces.length === 0 ? (
              <div className="text-center py-12 text-slate-500 bg-white rounded-3xl border border-slate-100">
                <p>No places found for this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {filteredPlaces.slice(0, 4).map((place: any) => (
                  <Link key={place.id} to={`/place/${state}/${city}/${place.id}`} className={`${clayCard} overflow-hidden group flex flex-col md:flex-row cursor-pointer`}>
                    <div className="relative h-56 md:h-auto md:w-2/5 m-2 md:m-3 rounded-[2rem] overflow-hidden shrink-0 min-h-[200px]">
                      <img src={place.image} alt={place.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 absolute inset-0" />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[var(--color-primary-forest)] z-10 shadow-sm">
                        {place.type}
                      </div>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col flex-1 justify-center">
                      <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-[var(--color-primary-forest)] transition-colors">{place.name}</h3>
                      <p className="text-slate-600 text-base line-clamp-3 mb-6 leading-relaxed">{place.description}</p>
                      <span className="text-[var(--color-primary-forest)] font-bold text-sm mt-auto flex items-center gap-1 w-max group-hover:underline">
                        View details <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Tour Packages Section */}
          <div className="mt-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-neutral-black)]">Popular Packages</h2>
                <p className="text-slate-500 text-sm mt-1">{totalPackagesCount} packages available</p>
              </div>
              <Link to="/tour-packages" className="text-[var(--color-blue-ocean)] text-sm font-bold hover:underline flex items-center gap-1 w-fit">
                View all <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPackages.slice(0, 4).map((pkg: any) => (
                <Link key={pkg.id} to={getPackageLink(pkg)} className={`${clayCard} overflow-hidden group flex flex-col block cursor-pointer`}>
                  <div className="relative h-48 m-2 rounded-[2rem] overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5 pb-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-[var(--color-blue-ocean)] mb-3 leading-tight group-hover:text-[var(--color-primary-forest)] transition-colors" title={pkg.title}>{pkg.title}</h3>
                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-6 mt-auto">
                      <Clock className="w-4 h-4" />
                      <span>{pkg.duration || pkg.overview?.duration}</span>
                    </div>
                    <div className={`${clayBtn} w-full py-3 flex justify-center text-sm`}>
                      View Details
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Sidebar (Right - 1/3) */}
        <div className="w-full flex-col flex gap-8">

          {/* Other Info Card */}
          <div className={`${clayCard} p-6 sticky top-32`}>
            <h3 className="text-xl font-bold text-[var(--color-blue-ocean)] mb-6 pb-4 border-b border-slate-100">Other Info</h3>

            <ul className="flex flex-col gap-4">
              <li className="flex justify-between items-start gap-4">
                <span className="text-slate-500 font-medium whitespace-nowrap">Internet:</span>
                <span className="text-slate-800 text-right font-medium">{dest.info.internet}</span>
              </li>
              <li className="flex justify-between items-start gap-4">
                <span className="text-slate-500 font-medium whitespace-nowrap">STD Code:</span>
                <span className="text-slate-800 text-right font-medium">{dest.info.stdCode}</span>
              </li>
              <li className="flex justify-between items-start gap-4">
                <span className="text-slate-500 font-medium whitespace-nowrap">Languages:</span>
                <span className="text-slate-800 text-right font-medium">{dest.info.languages}</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-slate-500 font-medium">Major Festivals:</span>
                <span className="text-slate-800 font-medium">{dest.info.festivals}</span>
              </li>
              <li className="flex flex-col gap-1 mt-2 p-3 bg-amber-50 rounded-xl border border-amber-100">
                <span className="text-amber-800 font-bold text-sm">Notes/Tips:</span>
                <span className="text-amber-700 text-sm leading-snug">{dest.info.tips}</span>
              </li>
            </ul>
          </div>

          {/* Quick Contact */}
          <div className={`${clayCard} p-6 bg-gradient-to-br from-[var(--color-primary-forest)] to-emerald-800 border-none`}>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Get our assistance</h3>
            <p className="text-emerald-100 mb-6 text-sm">Want us to call you for easy booking?</p>
            <p className="text-white/70 text-xs uppercase tracking-wider mb-1">Or call us at</p>
            <p className="text-2xl font-bold text-white">+91 98865 25253</p>
          </div>

        </div>

      </div>


    </div>
  );
}
