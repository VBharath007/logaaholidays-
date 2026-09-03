import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Phone, Clock, MapPin, Search, Calendar, Filter } from 'lucide-react';
import { destinationsData } from '../data/destinationsData';
import { packagesDatabase, getPackageLink } from './PackageDetails';
import { generateSlug } from '../lib/utils';
import { useSEO } from '../hooks/useSEO';
import { ComprehensiveEnquiryForm } from '../components/ComprehensiveEnquiryForm';

export function DestinationOverview() {
  const { state, city } = useParams();
  const dest = city && destinationsData[city] ? destinationsData[city] : null;
  const [placeFilter, setPlaceFilter] = useState('All');

  useSEO(
    dest?.seoTitle || (dest ? `${dest.name} Tour Packages | Logaa Holidays` : 'Destinations | Logaa Holidays'),
    dest?.seoDescription || dest?.overview?.description || 'Explore our amazing destinations and tour packages.',
    dest?.seoKeywords || ''
  );

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

  const isSouthState = dest.state === 'Tamil Nadu' || dest.state === 'Kerala';
  const northKeywords = ['shirdi', 'shiridi', 'varanasi', 'kasi', 'kashi', 'ayodhya', 'pune', 'mumbai', 'nashik', 'nasik', 'pandharpur', 'mantralayam', 'delhi', 'agra', 'jaipur', 'guwahati', 'shillong', 'cherrapunji', 'sarnath', 'gaya', 'prayagraj'];

  const allRelatedPackages = Object.values(packagesDatabase).filter((p: any) => {
    const titleLower = (p.title || '').toLowerCase();
    const destLower = (p.overview?.destination || '').toLowerCase();
    const idNum = parseInt(p.id);

    if (dest.popularPackages?.includes(p.id)) {
      return true;
    }

    if (isSouthState) {
      const isNorthPackage = northKeywords.some(kw => titleLower.includes(kw) || destLower.includes(kw));
      if (isNorthPackage) return false;
    }

    if (dest.state === 'Karnataka') {
      const karnatakaIds = ['3090', '3091', '3092', '3093', '3094', '3095', '3096'];
      if (karnatakaIds.includes(p.id)) return true;
    }

    if (dest.state === 'International' || dest.state === 'Honeymoon') {
      return dest.popularPackages?.includes(p.id) || false;
    }

    return relatedKeywords.some(keyword =>
      titleLower.includes(keyword) || destLower.includes(keyword)
    );
  });

  const totalPackagesCount = useMemo(() => {
    if (!city) return allRelatedPackages.length;
    const cityBase = city.replace('-tourism', '');
    
    if (cityBase === 'tamilnadu') {
      return Object.values(packagesDatabase).filter((p: any) => {
        const titleLower = (p.title || '').toLowerCase();
        const destLower = (p.overview?.destination || '').toLowerCase();
        return titleLower.includes('madurai') || destLower.includes('madurai');
      }).length;
    }
    
    if (cityBase === 'kanyakumari') return 6;
    if (cityBase === 'madurai') {
      return Object.values(packagesDatabase).filter((p: any) => {
        const titleLower = (p.title || '').toLowerCase();
        const destLower = (p.overview?.destination || '').toLowerCase();
        const idNum = parseInt(p.id);
        const maduraiKeywords = ['madurai', 'kumbakonam', 'trichy', 'thiruchendur', 'megamalai', 'thanjavur'];
        return (idNum >= 2025 && idNum <= 2099) || maduraiKeywords.some(kw => titleLower.includes(kw) || destLower.includes(kw));
      }).length;
    }
    if (cityBase === 'rameswaram') return 5;
    if (cityBase === 'shirdi') return 8;
    if (cityBase === 'pune') return 5;
    if (cityBase === 'varanasi') return 7;
    
    if (cityBase === 'kerala') {
      return Object.values(packagesDatabase).filter((p: any) => {
        const titleLower = (p.title || '').toLowerCase();
        return ['munnar', 'thekkady', 'alleppey', 'vagamon', 'valparai', 'kumarakom', 'marayoor', 'kerala'].some(kw => titleLower.includes(kw));
      }).length;
    }
    
    if (cityBase === 'cochin') {
      return Object.values(packagesDatabase).filter((p: any) => {
        const titleLower = (p.title || '').toLowerCase();
        const destLower = (p.overview?.destination || '').toLowerCase();
        return titleLower.includes('cochin') || destLower.includes('cochin') || titleLower.includes('kochi') || destLower.includes('kochi');
      }).length;
    }

    if (['munnar', 'alleppey', 'thekkady', 'vagamon'].includes(cityBase)) {
      return Object.values(packagesDatabase).filter((p: any) => {
        const titleLower = (p.title || '').toLowerCase();
        const destLower = (p.overview?.destination || '').toLowerCase();
        return titleLower.includes(cityBase) || destLower.includes(cityBase);
      }).length;
    }
    
    return allRelatedPackages.length;
  }, [city, allRelatedPackages]);

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

  const getCategoryLink = () => {
    if (!city) return "/tour-packages";
    const cityBase = city.replace('-tourism', '');
    if (cityBase === 'tamilnadu') {
      return "/tour-packages/madurai-tours";
    }
    const specificTours = ['madurai', 'kanyakumari', 'kerala', 'rameswaram', 'varanasi', 'shirdi', 'ayodhya', 'guwahati', 'shillong', 'cherrapunji', 'pune', 'karnataka', 'andaman', 'chennai', 'munnar', 'alleppey', 'thekkady', 'vagamon', 'cochin', 'ooty', 'kodaikanal'];
    if (specificTours.includes(cityBase)) {
      return `/tour-packages/${cityBase}-tours`;
    }
    // Fallbacks
    const northIndia = ['varanasi', 'shirdi', 'ayodhya', 'prayagraj', 'gaya', 'kasi', 'guwahati', 'shillong', 'cherrapunji'];
    if (northIndia.some(keyword => cityBase.includes(keyword))) {
      return "/north-india-tour-packages";
    }
    return "/south-india-package";
  };

  return (
    <div className="bg-[var(--color-bg-luxury)] min-h-screen pb-24 font-sans text-slate-800">

      {/* Hero Banner Section */}
      <div className="relative h-[85vh] md:h-[100vh] w-full overflow-hidden bg-slate-900 mb-12">
        <div className="absolute inset-0 bg-black/40 z-10" />
        {dest.heroVideo ? (
          <video
            key={dest.heroVideo}
            autoPlay
            loop
            muted
            playsInline
            poster={dest.image}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={dest.heroVideo} type="video/mp4" />
          </video>
        ) : (
          <img loading="lazy"
            src={dest.image}
            alt={dest.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 z-20 flex flex-col justify-end pt-32 pb-16 px-6 max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 text-white/80 text-base md:text-lg font-medium mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to={(() => {
              const northCities = ['shirdi', 'varanasi', 'ayodhya', 'guwahati', 'shillong', 'cherrapunji', 'kasi', 'prayagraj'];
              return northCities.some(k => (city || '').includes(k)) ? '/north-india-tour-packages' : '/south-india-package';
            })()} className="hover:text-white transition-colors">Destinations</Link>
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

            {dest.majorAttractions?.length > 0 && 
             !destNameLower.includes('madurai') && 
             !(dest.placesToVisit?.length > 0) && (
              <>
                <h2 className="text-3xl font-display font-bold text-[var(--color-blue-ocean)] mb-6">Major Attractions</h2>
                <div className="flex flex-col gap-10 mt-8">
                  {dest.majorAttractions.map((attr: any, idx: number) => {
                    const isEven = idx % 2 === 0;
                    return (
                      <div 
                        key={idx} 
                        className={`group relative flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-500 border border-slate-100/50`}
                      >
                        {/* Image Section */}
                        {attr.image && (
                          <div className="w-full md:w-2/5 lg:w-1/2 relative h-72 md:h-auto overflow-hidden bg-slate-100 shrink-0">
                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                            <img 
                              src={attr.image} 
                              alt={attr.title} 
                              loading="lazy" 
                              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                            />
                            {/* Gradient Overlay for seamless blend on Desktop */}
                            <div className={`hidden md:block absolute inset-0 z-10 bg-gradient-to-${isEven ? 'r' : 'l'} from-transparent via-transparent to-white w-[101%] ${isEven ? '-right-[1%]' : '-left-[1%]'}`} />
                          </div>
                        )}
                        
                        {/* Content Section */}
                        <div className={`w-full ${attr.image ? 'md:w-3/5 lg:w-1/2' : 'w-full'} p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-20 bg-white`}>
                          <div className="mb-4 inline-flex items-center gap-3">
                            <span className="w-10 h-[2px] bg-teal-500 rounded-full" />
                            <span className="text-teal-600 font-bold tracking-widest text-xs uppercase">Attraction {String(idx + 1).padStart(2, '0')}</span>
                          </div>
                          <h3 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 mb-6 leading-tight group-hover:text-teal-600 transition-colors duration-300">
                            {attr.title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed text-lg text-justify font-medium">
                            {attr.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          {/* Top Places to Visit Grid */}
          {dest.placesToVisit && dest.placesToVisit.length > 0 && (
          <div className="mt-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <h2 className="text-3xl font-display font-bold text-slate-800 mb-4">Top Places to Visit in {dest.name}</h2>
                <div className="flex flex-wrap gap-2">
                  {placeTypes.map((type: any) => (
                    <button
                      key={type}
                      onClick={() => setPlaceFilter(type)}
                      className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${placeFilter === type
                        ? 'bg-[var(--color-primary-forest)] text-white shadow-md'
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                        }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              <Link
                to={`/places-to-visit/${state}/${city}`}
                className="hidden md:flex text-sm font-bold bg-[var(--color-primary-forest)]/10 text-[var(--color-primary-forest)] hover:bg-[var(--color-primary-forest)] hover:text-white px-5 py-2.5 rounded-full transition-all hover:scale-105 shadow-sm border border-[var(--color-primary-forest)]/25 items-center gap-1.5 w-fit"
              >
                <span>View all</span> <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {filteredPlaces.length === 0 ? (
              <div className="text-center py-12 text-slate-500 bg-white rounded-3xl border border-slate-100">
                <p>No places found for this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {filteredPlaces.slice(0, 4).map((place: any) => {
                  const cityBase = city ? city.replace('-tourism', '') : '';
                  return (
                  <Link key={place.id} to={`/place/${state}/${cityBase}/${place.id}`} className={`${clayCard} overflow-hidden group flex flex-col md:flex-row cursor-pointer`}>
                    <div className="relative h-56 md:h-auto md:w-2/5 m-2 md:m-3 rounded-[2rem] overflow-hidden shrink-0 min-h-[200px]">
                      <img loading="lazy" src={place.image} alt={place.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 absolute inset-0" />
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
                );
              })}
              </div>
            )}
            
            {/* Mobile View All Button for Places */}
            {filteredPlaces.length > 0 && (
              <div className="mt-6 flex md:hidden justify-center w-full">
                <Link
                  to={`/places-to-visit/${state}/${city}`}
                  className="w-full text-center justify-center text-sm font-bold bg-[var(--color-primary-forest)]/10 text-[var(--color-primary-forest)] hover:bg-[var(--color-primary-forest)] hover:text-white px-5 py-3.5 rounded-2xl transition-all shadow-sm border border-[var(--color-primary-forest)]/25 flex items-center gap-1.5"
                >
                  <span>View all places</span> <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
          )}

          {/* Promo Video Showcase Section */}
          {dest.promoVideo && (
            <div className="mt-12 mb-8">
              <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col lg:flex-row items-center gap-8">
                <div className="w-full lg:w-[35%] flex flex-col justify-center">
                  <span className="text-xs font-black uppercase tracking-widest text-[var(--color-primary-forest)] mb-2 block">Experience {dest.name}</span>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-800 mb-4 leading-tight">
                    Watch the Magic of {dest.name} Unfold
                  </h2>
                  <p className="text-slate-600 text-base leading-relaxed mb-6">
                    Immerse yourself in a visual journey. Get a glimpse of the spectacular sights, rich culture, and breathtaking landscapes waiting for you.
                  </p>
                </div>
                <div className="w-full lg:w-[65%] relative">
                  <div className="absolute inset-0 bg-[var(--color-primary-forest)] rounded-[2.5rem] translate-x-3 translate-y-3 opacity-10" />
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white aspect-video">
                    <video
                      key={dest.promoVideo}
                      controls
                      loop
                      muted
                      playsInline
                      preload="none"
                      poster={dest.image}
                      className="w-full h-full object-cover"
                    >
                      <source src={dest.promoVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tour Packages Section */}
          {totalPackagesCount > 0 ? (
            <div className="mt-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
                <div>
                  <h2 className="text-2xl font-bold text-[var(--color-neutral-black)]">Popular Packages</h2>
                </div>
                <Link
                  to={getCategoryLink()}
                  className="hidden md:flex text-sm font-bold bg-[var(--color-primary-forest)]/10 text-[var(--color-primary-forest)] hover:bg-[var(--color-primary-forest)] hover:text-white px-5 py-2.5 rounded-full transition-all hover:scale-105 shadow-sm border border-[var(--color-primary-forest)]/25 items-center gap-1.5 w-fit"
                >
                  <span>View all</span> <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredPackages.slice(0, 4).map((pkg: any) => (
                  <div key={pkg.id} className={`${clayCard} overflow-hidden group flex flex-col block`}>
                    <div 
                      className={`relative m-2 rounded-[2rem] overflow-hidden ${pkg.image?.includes('/assets/shiridi/') ? 'aspect-[322/372]' : 'h-48'}`}
                      style={pkg.image?.includes('/assets/shiridi/') ? { aspectRatio: '322/372' } : {}}
                    >
                      <Link to={getPackageLink(pkg)}>
                        <img loading="lazy"
                          src={pkg.image}
                          alt={pkg.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </Link>
                    </div>
                    <div className="p-5 pb-6 flex flex-col flex-1">
                      <Link to={getPackageLink(pkg)}>
                        <h3 className="text-lg font-bold text-[#0B2515] mb-3 leading-tight group-hover:text-[#0F6B46] transition-colors" title={pkg.title}>{pkg.title}</h3>
                      </Link>
                      <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                        <Clock className="w-4 h-4 text-[#0F6B46]" />
                        <span>{pkg.duration || pkg.overview?.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
                        <MapPin className="w-4 h-4 text-[#0F6B46]" />
                        <span className="line-clamp-1">{pkg.destination || pkg.overview?.destination || city}</span>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col gap-3">
                        <div className="flex flex-col sm:flex-row items-center gap-2">
                          <a
                            href={`https://wa.me/917397329776?text=Hi Logaa Holidays, I am interested in the ${pkg.title} package.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:flex-1 text-center bg-[#F2FBF5] text-[#0F6B46] border border-[#E2F5EA] text-[13px] font-bold py-2.5 rounded-xl hover:bg-[#0F6B46] hover:text-white transition-colors"
                          >
                            Enquire Now
                          </a>
                          <Link
                            to={getPackageLink(pkg)}
                            className="w-full sm:flex-1 text-center bg-[#0B2515] text-white text-[13px] font-bold py-2.5 rounded-xl hover:bg-[#0c593a] transition-colors"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile View All Button for Packages */}
              <div className="mt-6 flex md:hidden justify-center w-full">
                <Link
                  to={getCategoryLink()}
                  className="w-full text-center justify-center text-sm font-bold bg-[var(--color-primary-forest)]/10 text-[var(--color-primary-forest)] hover:bg-[var(--color-primary-forest)] hover:text-white px-5 py-3.5 rounded-2xl transition-all shadow-sm border border-[var(--color-primary-forest)]/25 flex items-center gap-1.5"
                >
                  <span>View all packages</span> <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="mt-8 bg-[var(--color-deep-teal)] rounded-[2.5rem] p-6 shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-center mb-6 pt-4">
                    <h3 className="text-3xl font-display font-bold text-white mb-3">Custom {dest.name} Packages Available</h3>
                    <p className="text-white/80 max-w-2xl mx-auto">Our travel experts can design a personalized {dest.name} itinerary perfectly tailored to your requirements. Get a free quote today!</p>
                  </div>
                  <ComprehensiveEnquiryForm />
                </div>
            </div>
          )}

        </div>

        {/* Sidebar (Right - 1/3) */}
        <div className="w-full flex-col flex gap-8">

          {/* Other Info Card */}
          <div className={`${clayCard} p-6`}>
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
            <a href="tel:+917397329776" className="text-2xl font-bold text-white hover:underline">+91 73973 29776</a>
          </div>

        </div>

      </div>


    </div>
  );
}
