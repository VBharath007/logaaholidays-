import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ChevronDown, List, Grid, MapPin } from 'lucide-react';
import { destinationsData } from '../data/destinationsData';
import { generateSlug } from '../lib/utils';

export function PlacesToVisit() {
  const { city, state } = useParams();
  const dest = city && destinationsData[city] ? destinationsData[city] : null;

  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [filterType, setFilterType] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [city]);

  if (!dest) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-luxury)] pb-24 font-sans text-slate-800">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Places not found</h2>
          <Link to="/" className="text-[var(--color-primary-forest)] hover:underline">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  // Get unique types for filter
  const placeTypes = ['All', ...Array.from(new Set(dest.placesToVisit.map((p: any) => p.type)))];

  const filteredPlaces = dest.placesToVisit.filter((place: any) => 
    filterType === 'All' || place.type === filterType
  );

  const clayCard = "bg-white rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.05),-10px_-10px_30px_rgba(255,255,255,0.8),inset_2px_2px_5px_rgba(255,255,255,1)] border border-white";

  return (
    <div className="bg-[var(--color-bg-luxury)] min-h-screen pb-24 font-sans text-slate-800">
      
      {/* Hero Header */}
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-slate-900 mb-12">
        <div className="absolute inset-0 bg-black/50 z-10" />
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
            <Link to={`/destination/${state}/${city}`} className="hover:text-white transition-colors">{dest.name}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Places to Visit</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white max-w-4xl leading-tight mb-2">
            Top {dest.placesToVisit.length} Places to Visit in {dest.name}
          </h1>
          <p className="text-white/80 text-lg">
            Discover the most beautiful and historical locations in {dest.name}.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Toolbar Section */}
        <div className="flex justify-end items-center mb-12">

          {/* Filter Dropdown */}
          <div className="relative w-full md:w-64">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full flex items-center justify-between bg-slate-50 px-6 py-3.5 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-100 transition-colors"
            >
              <span className="text-sm">Type: {filterType}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {isFilterOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-100 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] z-30 overflow-hidden py-2">
                {placeTypes.map((type: any) => (
                  <button
                    key={type}
                    onClick={() => {
                      setFilterType(type);
                      setIsFilterOpen(false);
                    }}
                    className={`w-full text-left px-6 py-3 text-sm transition-colors ${filterType === type ? 'bg-[var(--color-primary-forest)]/10 text-[var(--color-primary-forest)] font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Places Render */}
        <div className="mb-16">
          {filteredPlaces.length === 0 ? (
            <div className="text-center py-20 text-slate-500">
              <p>No places found for this category.</p>
            </div>
          ) : viewMode === 'list' ? (
            // LIST VIEW (Editorial Alternating Layout)
            <div className="flex flex-col gap-16">
              {filteredPlaces.map((place: any, idx: number) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={place.id} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10`}>
                    
                    {/* Image Block */}
                    <Link to={`/place/${state}/${city}/${place.id}`} className="w-full md:w-1/2 relative group block cursor-pointer">
                      <div className="absolute inset-0 bg-[var(--color-primary-forest)] rounded-[3rem] translate-x-4 translate-y-4 opacity-20 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
                      <div className="relative h-[350px] lg:h-[450px] w-full rounded-[3rem] overflow-hidden shadow-2xl z-10 border-8 border-white">
                        <img 
                          src={place.image} 
                          alt={place.name} 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-[var(--color-primary-forest)] uppercase tracking-wider">
                          {place.type}
                        </div>
                      </div>
                    </Link>

                    {/* Text Block */}
                    <div className={`w-full md:w-1/2 flex flex-col ${isEven ? 'md:pl-6' : 'md:pr-6'}`}>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="w-8 h-8 rounded-full bg-[var(--color-blue-ocean)]/10 text-[var(--color-blue-ocean)] flex items-center justify-center font-bold text-sm">
                          {idx + 1}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-800 leading-tight">
                          {place.name}
                        </h2>
                      </div>
                      <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        {place.description}
                      </p>
                      
                      <Link 
                        to={`/place/${state}/${city}/${place.id}`} 
                        className="inline-flex items-center gap-2 text-[var(--color-primary-forest)] font-bold hover:gap-4 transition-all"
                      >
                        Explore Tour Packages <ChevronRight className="w-5 h-5" />
                      </Link>
                    </div>

                  </div>
                )
              })}
            </div>
          ) : (
            // GRID VIEW (Masonry style cards)
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPlaces.map((place: any, idx: number) => (
                <Link key={place.id} to={`/place/${state}/${city}/${place.id}`} className={`${clayCard} flex flex-col overflow-hidden group block cursor-pointer`}>
                  <div className="relative h-56 m-3 rounded-[2rem] overflow-hidden">
                    <img 
                      src={place.image} 
                      alt={place.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold text-[var(--color-primary-forest)] uppercase tracking-wider shadow-sm">
                      {place.type}
                    </div>
                  </div>
                  <div className="p-6 pt-4 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[var(--color-blue-ocean)] transition-colors">{idx + 1}. {place.name}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                      {place.description}
                    </p>
                    <span className="text-[var(--color-blue-ocean)] font-bold text-sm flex items-center gap-1 mt-auto group-hover:underline">
                      View details <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
