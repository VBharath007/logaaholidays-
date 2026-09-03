import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Clock, Star, MapPin, IndianRupee, Car, Info, ArrowLeft, ShieldCheck, Flame, User } from 'lucide-react';
import { destinationsData } from '../data/destinationsData';
import { packagesDatabase, getPackageLink } from './PackageDetails';
import { generateSlug } from '../lib/utils';
import { ComprehensiveEnquiryForm } from '../components/ComprehensiveEnquiryForm';

import { useSEO } from '../hooks/useSEO';

export function PlaceDetails() {
  const { state, city: cityParam, placeId } = useParams();
  const navigate = useNavigate();

  // Support both old /place/:state/:city/:placeId and new /place/:state/:placeId
  // When city is absent, find which destination contains this placeId
  const resolvedCity = (() => {
    if (cityParam && destinationsData[cityParam]) return cityParam;
    // Search all destinations for the placeId
    if (placeId) {
      const found = Object.keys(destinationsData).find(key =>
        destinationsData[key].placesToVisit?.some((p: any) => p.id === placeId)
      );
      if (found) return found;
    }
    return cityParam;
  })();

  const city = resolvedCity;
  const dest = city && destinationsData[city] ? destinationsData[city] : null;
  const place = dest?.placesToVisit.find((p: any) => p.id === placeId);

  useSEO(
    place ? `${place.name} | Places to Visit in ${dest.name} | Logaa Holidays` : 'Place Details | Logaa Holidays',
    place ? `Discover ${place.name} in ${dest.name}. Explore entry fees, timings, distance, and sightseeing packages with Logaa Holidays.` : 'Explore top tourist attractions and sightseeing spots with Logaa Holidays.',
    place ? `${place.name}, ${dest.name} sightseeing, Places to visit in ${dest.name}, ${place.name} timings, ${place.name} entry fee` : 'Sightseeing, Tourist Attractions'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [placeId]);

  if (!dest || !place) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-luxury)] pb-24 font-sans text-slate-800">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Place not found</h2>
          <button onClick={() => navigate(-1)} className="text-[var(--color-primary-forest)] hover:underline">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Smart package matching: use explicit IDs if available, else keyword-match from packagesDatabase
  const getAllPackages = () => Object.values(packagesDatabase) as any[];

  // Helper to parse duration string to days for sorting
  const getDurationDays = (durationStr: string) => {
    if (!durationStr) return 999;
    const lower = durationStr.toLowerCase();
    if (lower.includes('one day') || lower.includes('single day') || lower.includes('1 day') || lower === 'one') return 1;
    const daysMatch = lower.match(/(\d+)\s*day/);
    if (daysMatch) return parseInt(daysMatch[1], 10);
    const nightsMatch = lower.match(/(\d+)\s*night/);
    if (nightsMatch) return parseInt(nightsMatch[1], 10) + 1;
    return 999;
  };

  const targetCityName = (dest.id === 'tamilnadu-tourism' || dest.id === 'kerala-tourism') && placeId ? place.name : dest.name;

  // Find all packages that match this city/attraction for count and list
  const matchedPackages = (() => {
    const isSouthState = dest.state === 'Tamil Nadu' || dest.state === 'Kerala' || state === 'tamilnadu' || state === 'kerala';
    const northKeywords = ['shirdi', 'shiridi', 'varanasi', 'kasi', 'kashi', 'ayodhya', 'pune', 'mumbai', 'nashik', 'nasik', 'pandharpur', 'mantralayam', 'delhi', 'agra', 'jaipur', 'guwahati', 'shillong', 'cherrapunji', 'sarnath', 'gaya', 'prayagraj'];

    // 1. If the place has explicit popularPackages IDs, use them (unless it's Madurai, where we want to prioritize 1-day and other local packages dynamically)
    if (place.details?.popularPackages?.length && targetCityName.toLowerCase() !== 'madurai') {
      return place.details.popularPackages
        .map((id: string) => packagesDatabase[id])
        .filter(Boolean);
    }
    
    // 2. Otherwise, keyword-match against the place name in all package titles
    const keywords = place.name
      .replace(/Temple|Kovil|Koil|Mahal|Museum|Falls|Dam|Beach|City/gi, '')
      .split(/[\s–-]+/)
      .filter((w: string) => w.length > 3)
      .map((w: string) => w.toLowerCase());
    
    const cityName = targetCityName.toLowerCase();
    const allPkgs = getAllPackages();
    
    // Step 1: Find packages that explicitly match the place keywords
    const keywordMatches = allPkgs.filter((pkg: any) => {
      const titleLower = (pkg.title || '').toLowerCase();
      const destLower = (pkg.overview?.destination || '').toLowerCase();
      if (isSouthState) {
        const isNorthPackage = northKeywords.some(kw => titleLower.includes(kw) || destLower.includes(kw));
        if (isNorthPackage) return false;
      }
      return keywords.length > 0 && keywords.some((kw: string) => titleLower.includes(kw));
    });

    if (keywordMatches.length > 0) {
      return keywordMatches;
    }
    
    // Step 2: Fallback to general city packages if no exact place matches exist
    return allPkgs.filter((pkg: any) => {
      const titleLower = (pkg.title || '').toLowerCase();
      const destLower = (pkg.overview?.destination || '').toLowerCase();
      if (isSouthState) {
        const isNorthPackage = northKeywords.some(kw => titleLower.includes(kw) || destLower.includes(kw));
        if (isNorthPackage) return false;
      }
      const isOutbound = titleLower.includes('flight package') || titleLower.includes('from ' + cityName) || titleLower.includes(cityName + ' to ');
      return titleLower.includes(cityName) && !isOutbound;
    });
  })();

  // Sort matched packages by duration (ascending: 1 Day first)
  const featuredPackages = [...matchedPackages].sort((a: any, b: any) => {
    return getDurationDays(a.overview?.duration) - getDurationDays(b.overview?.duration);
  });

  // Calculate dynamic total count matching the city categories
  const totalPackagesCount = (() => {
    const searchName = targetCityName.toLowerCase();
    return getAllPackages().filter((pkg: any) => {
      const titleLower = (pkg.title || '').toLowerCase();
      const destLower = (pkg.overview?.destination || '').toLowerCase();
      return titleLower.includes(searchName) || destLower.includes(searchName);
    }).length;
  })();

  const clayCard = "bg-white rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.05),-10px_-10px_30px_rgba(255,255,255,0.8),inset_2px_2px_5px_rgba(255,255,255,1)] border border-white";
  const clayBtn = "bg-[var(--color-primary-forest)] text-white font-bold rounded-2xl shadow-[0_10px_20px_rgba(20,93,62,0.3),inset_2px_2px_5px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_30px_rgba(20,93,62,0.4)] transition-all hover:-translate-y-1";

  // Other places in the same destination (excluding current)
  const otherPlaces = dest.placesToVisit.filter((p: any) => p.id !== placeId);

  const getCategoryLink = () => {
    const specificTours = ['madurai', 'kanyakumari', 'kerala', 'rameswaram', 'varanasi', 'shirdi', 'ayodhya', 'guwahati', 'shillong', 'cherrapunji', 'pune', 'chennai', 'munnar', 'thekkady', 'alleppey', 'vagamon', 'ooty', 'kodaikanal'];
    
    // Check placeId first if it is a major city
    if (placeId && specificTours.includes(placeId.toLowerCase())) {
      return `/tour-packages/${placeId.toLowerCase()}-tours`;
    }
    
    if (!city) return "/tour-packages";
    const cityBase = city.replace('-tourism', '').toLowerCase();
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
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-slate-900 mb-12">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img loading="lazy" 
          src={place.image} 
          alt={place.name} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-end pt-32 pb-16 px-6 max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 text-white/80 text-base md:text-lg font-medium mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/60">{state === 'tamilnadu' ? 'Tamil Nadu' : state}</span>
            <ChevronRight className="w-4 h-4" />
            <Link to={`/destination/${state}/${city}`} className="hover:text-white transition-colors">{dest.name}</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to={`/places-to-visit/${state}/${city}`} className="hover:text-white transition-colors">Places to Visit in {dest.name}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{place.name}</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white max-w-4xl leading-tight mb-4">
            {place.name}
          </h1>
          
          {place.rating && (
            <div className="flex items-center gap-2 text-amber-400 font-bold text-lg bg-black/40 w-max px-4 py-2 rounded-full backdrop-blur-md">
              <Star className="w-5 h-5 fill-current" />
              {place.rating} / 5
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Main Content Area (Left - 2/3) */}
        <div className="lg:col-span-2 flex flex-col gap-10">
          
          {/* Detailed Sections */}
          {place.details?.sections ? (
            <div className="prose prose-slate max-w-none">
              {place.details.sections.map((section: any, idx: number) => (
                <div key={idx} className="mb-10">
                  <h2 className="text-3xl font-display font-bold text-[var(--color-blue-ocean)] mb-6">
                    {section.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-lg whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="prose prose-slate max-w-none min-h-[300px]">
              <h2 className="text-3xl font-display font-bold text-[var(--color-blue-ocean)] mb-6">About {place.name}</h2>
              <p className="text-slate-600 leading-relaxed text-lg">{place.description}</p>
              <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-100 text-amber-800">
                <p>Full details for {place.name} are being updated. Please check back later or contact us for more information.</p>
              </div>
            </div>
          )}

          {/* Sub-Attractions of the City */}
          {(() => {
            const subDestKey = `${placeId}-tourism`;
            const subDest = destinationsData[subDestKey];
            if (!subDest || !subDest.placesToVisit || subDest.placesToVisit.length === 0) return null;

            // Filter out places that are far away (like Theni/Virudhunagar districts which are 70+ km away)
            const localPlaces = subDest.placesToVisit.filter((subPlace: any) => {
              const dist = subPlace.details?.distance || '';
              if (dist.toLowerCase().includes('kilometer')) {
                const match = dist.match(/(\d+)/);
                if (match && parseInt(match[1], 10) > 30) {
                  return false;
                }
              }
              return true;
            });

            // Sort by rating desc to show the most iconic/highest-rated local attractions first
            const sortedLocalPlaces = [...localPlaces].sort((a: any, b: any) => (b.rating || 0) - (a.rating || 0));

            return (
              <div className="mt-12 pt-12 border-t border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                  <div>
                    <h2 className="text-3xl font-display font-bold text-slate-800">Top Places to Visit in {place.name}</h2>
                    <p className="text-slate-500 text-sm mt-1">{localPlaces.length} attractions available</p>
                  </div>
                  <Link
                    to={`/places-to-visit/${state}/${subDestKey}`}
                    className="shrink-0 text-sm font-bold text-[var(--color-primary-forest)] hover:underline flex items-center gap-1 w-fit"
                  >
                    View All Places <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sortedLocalPlaces.slice(0, 4).map((subPlace: any) => (
                    <Link
                      key={subPlace.id}
                      to={`/place/${state}/${placeId}/${subPlace.id}`}
                      className="bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col group hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img loading="lazy"
                          src={subPlace.image}
                          alt={subPlace.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {subPlace.type && (
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[var(--color-primary-forest)] z-10 shadow-sm">
                            {subPlace.type}
                          </div>
                        )}
                        {subPlace.rating && (
                          <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
                            {subPlace.rating}
                          </div>
                        )}
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[var(--color-primary-forest)] transition-colors">
                          {subPlace.name}
                        </h3>
                        <p className="text-slate-500 text-sm line-clamp-3 leading-relaxed mb-4">
                          {subPlace.description}
                        </p>
                        <span className="text-[var(--color-primary-forest)] font-bold text-sm mt-auto flex items-center gap-1">
                          View details <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })()}



        </div>

        {/* Sidebar (Right - 1/3) */}
        <div className="w-full flex-col flex gap-8">
          
          {/* Quick Info Card */}
          {place.details && (
            <div className={`${clayCard} p-6`}>
              <h3 className="text-xl font-bold text-[var(--color-blue-ocean)] mb-6 pb-4 border-b border-slate-100">Plan your visit</h3>
              
              <ul className="flex flex-col gap-5">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[var(--color-primary-forest)]" />
                  </div>
                  <div>
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-wider block mb-1">Timings</span>
                    <span className="text-slate-800 font-medium">{place.details.timings}</span>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                    <IndianRupee className="w-5 h-5 text-[var(--color-primary-forest)]" />
                  </div>
                  <div>
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-wider block mb-1">Entry Fee</span>
                    <span className="text-slate-800 font-medium">{place.details.entryFee}</span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[var(--color-primary-forest)]" />
                  </div>
                  <div>
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-wider block mb-1">Distance</span>
                    <span className="text-slate-800 font-medium">{place.details.distance}</span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[var(--color-primary-forest)]" />
                  </div>
                  <div>
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-wider block mb-1">Trip Duration</span>
                    <span className="text-slate-800 font-medium">{place.details.duration}</span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                    <Car className="w-5 h-5 text-[var(--color-primary-forest)]" />
                  </div>
                  <div>
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-wider block mb-1">Transportation Options</span>
                    <span className="text-slate-800 font-medium text-sm leading-snug">{place.details.transport}</span>
                  </div>
                </li>
              </ul>

              {place.details.tips && (
                <div className="mt-8 p-4 bg-amber-50 rounded-2xl border border-amber-100 flex gap-3 items-start">
                  <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-amber-800 font-bold text-sm block mb-1">Travel Tips</span>
                    <span className="text-amber-700 text-sm leading-snug">{place.details.tips}</span>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

      </div>

      {/* Other Places Carousel/Grid Section */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-16 border-t border-slate-200">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-display font-bold text-slate-800">
            {otherPlaces.length} places to visit & things to do in {dest.name}
          </h2>
          <Link to={`/places-to-visit/${state}/${city}`} className="text-[var(--color-primary-forest)] font-semibold hover:underline flex items-center gap-1">
            View all <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-8 snap-x hide-scrollbar">
          {otherPlaces.map((otherPlace: any) => {
            const cityBase = resolvedCity ? resolvedCity.replace('-tourism', '') : '';
            return (
            <Link 
              key={otherPlace.id} 
              to={`/place/${state}/${cityBase}/${otherPlace.id}`}
              className={`${clayCard} min-w-[280px] md:min-w-[320px] max-w-[320px] flex flex-col overflow-hidden group snap-start shrink-0 block cursor-pointer`}
            >
              <div className="relative h-48 m-2 rounded-[2rem] overflow-hidden">
                <img loading="lazy" 
                  src={otherPlace.image} 
                  alt={otherPlace.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5 pb-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-slate-800 mb-2 truncate group-hover:text-[var(--color-primary-forest)] transition-colors" title={otherPlace.name}>{otherPlace.name}</h3>
                <span className="text-[var(--color-primary-forest)] font-bold text-sm flex items-center gap-1 group-hover:underline mt-auto">
                  View details <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          );
          })}
        </div>
      </div>
      
      {/* Comprehensive Enquiry Form Section */}
      <div className="bg-[var(--color-deep-teal)] w-full mt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <ComprehensiveEnquiryForm />
        </div>
      </div>
      
    </div>
  );
}
