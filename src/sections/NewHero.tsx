import { useState, useRef, useEffect } from 'react';
import { MapPin, Compass, Calendar, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollFlyIn } from '../components/ScrollFlyIn';

interface CustomSelectProps {
  label: string;
  icon: any;
  options: string[];
  value: string;
  onChange: (val: string) => void;
}

function CustomSelect({ label, icon: Icon, options, value, onChange }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex-1 w-full px-4 md:px-6 py-2 flex flex-col group border-b md:border-b-0 border-slate-200 relative" ref={dropdownRef}>
      <span className="text-slate-900 font-bold text-sm tracking-wide mb-1 flex items-center gap-2">
        {label}
      </span>
      <div 
        className="flex items-center justify-between gap-2 cursor-pointer w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-[#F28C28]" />
          <span className="text-slate-500 font-medium text-sm md:text-base select-none truncate">
            {value}
          </span>
        </div>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-[110%] left-0 w-full min-w-[220px] bg-white rounded-2xl shadow-[0_-10px_50px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden z-[100]"
          >
            <ul className="py-2 max-h-60 overflow-y-auto custom-scrollbar">
              {options.map((opt) => (
                <li 
                  key={opt}
                  className={`px-4 py-3 text-sm md:text-base cursor-pointer transition-colors flex items-center justify-between ${
                    value === opt 
                      ? 'bg-orange-50 text-[#F28C28] font-bold' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                  onClick={() => {
                    onChange(opt);
                    setIsOpen(false);
                  }}
                >
                  {opt}
                  {value === opt && <div className="w-1.5 h-1.5 rounded-full bg-[#F28C28]" />}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function NewHero() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('All Destinations');
  const [tourType, setTourType] = useState('Any Type');
  const [duration, setDuration] = useState('Any Duration');

  const handleSearch = () => {
    if (destination.toLowerCase().includes('kerala')) {
      navigate('/destination/kerala/kerala-tourism');
    } else if (destination.toLowerCase().includes('karnataka')) {
      navigate('/karnataka-tour-packages');
    } else if (destination.toLowerCase().includes('north')) {
      navigate('/north-india-tour-packages');
    } else {
      navigate('/south-india-package');
    }
  };

  const premiumBackground = (
    <div className="absolute inset-0">
      <img 
        src="/assets/home.jpeg"
        alt="Logaa Holidays Background" 
        className="w-full h-full object-cover scale-105"
      />
      {/* Luxury Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/60 to-[#050505]/95 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-luxury)] via-transparent to-[#050505]/50" />
      
      {/* Subtle Glow Orbs for modern feel */}
      <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-[#F28C28]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
    </div>
  );

  const firstText = (
    <div className="flex flex-col items-center justify-center text-center">
      <span className="text-sm md:text-base font-bold tracking-[0.3em] text-[#F28C28] uppercase mb-4 md:mb-6">
        Welcome to Logaa Holidays
      </span>
      <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-display font-extrabold text-white leading-[1.05] tracking-tight">
        Madurai <br className="md:hidden" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F28C28] to-[#fde047]">No. 1</span> <br />
        Travel Agent
      </h1>
    </div>
  );

  const secondText = (
    <div className="flex flex-col items-center justify-center text-center w-full max-w-5xl">
      <span className="text-sm md:text-base font-bold tracking-[0.3em] text-teal-400 uppercase mb-4 md:mb-6">
        Expert Travel Planners
      </span>
      <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-display font-extrabold text-white leading-[1.1] tracking-tight">
        Tailor-Made <br className="md:hidden" /> Tour Packages <br />
        <span className="block mt-4 md:mt-6 text-3xl md:text-5xl lg:text-[3.5rem] text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300 font-medium">
          "Like it's for our own family"
        </span>
      </h1>
    </div>
  );

  const searchBar = (
    <div className="w-full max-w-5xl mx-auto pb-4">
      <div className="bg-white/95 backdrop-blur-xl p-2 md:p-3 rounded-[2rem] md:rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-4 w-full border border-white/20">
        
        <CustomSelect 
          label="Destination"
          icon={MapPin}
          value={destination}
          onChange={setDestination}
          options={['All Destinations', 'Kerala', 'Karnataka', 'Tamil Nadu', 'North India']}
        />

        <div className="hidden md:block w-px h-12 bg-slate-200"></div>

        <CustomSelect 
          label="Tour Type"
          icon={Compass}
          value={tourType}
          onChange={setTourType}
          options={['Any Type', 'Honeymoon', 'Family', 'Adventure', 'Pilgrimage']}
        />

        <div className="hidden md:block w-px h-12 bg-slate-200"></div>

        <CustomSelect 
          label="Duration"
          icon={Calendar}
          value={duration}
          onChange={setDuration}
          options={['Any Duration', '2-3 Days', '4-5 Days', '6+ Days']}
        />

        {/* Search Button */}
        <button 
          onClick={handleSearch}
          className="w-full md:w-auto mt-4 md:mt-0 bg-[#F28C28] hover:bg-[#e07b22] text-white font-bold px-10 py-4 md:py-5 rounded-full transition-all shadow-md hover:shadow-lg flex-shrink-0"
        >
          Search now
        </button>
      </div>
    </div>
  );

  return (
    <ScrollFlyIn
      imageUrl="assets/home hero/eroplanine.webp"
      imageAlt="Airplane flying"
      background={premiumBackground}
      secondText={secondText}
      bottomContent={searchBar}
      className="bg-[var(--color-bg-luxury)] w-full"
    >
      {firstText}
    </ScrollFlyIn>
  );
}
