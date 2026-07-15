import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';
import { packagesDatabase } from '../pages/PackageDetails';

interface SearchPackagesModalProps {
 isOpen: boolean;
 onClose: () => void;
}


const ALL_LOCATIONS = {
  "Andaman & Nicobar Islands": ["Havelock", "Neil Island", "Port Blair"],
  "Andhra Pradesh": ["Tirupati"],
  "Assam": ["Dibrugarh", "Guwahati", "Jorhat", "Kaziranga", "Majuli", "Tinsukia"],
  "Bihar": ["Gaya"],
  "Delhi": ["New Delhi"],
  "Goa": ["Goa City", "North Goa", "South Goa"],
  "Himachal Pradesh": ["Kasol", "Kufri", "Kullu", "Manali", "Manikaran", "Shimla"],
  "Jammu & Kashmir": ["Gulmarg", "Pahalgam", "Sonamarg", "Srinagar"],
  "Karnataka": ["Bangalore", "Coorg", "Mysore"],
  "Kerala": ["Alleppey", "Kochi", "Kovalam", "Munnar", "Poovar", "Thekkady", "Thiruvananthapuram", "Trivandrum", "Varkala", "Wayanad"],
  "Maharashtra": ["Aurangabad", "Ganganapur", "Lonavala", "Mumbai", "Nashik", "Pandharpur", "Pune", "Shani Shingnapur", "Shirdi", "Trimbakeshwar"],
  "Manipur": ["Imphal", "Moirang"],
  "Meghalaya": ["Cherrapunji", "Dawki", "Shillong"],
  "Mizoram": ["Aizawl"],
  "Nagaland": ["Dimapur", "Kohima"],
  "Tamil Nadu": ["Chennai", "Chidambaram", "Kanchipuram", "Kanyakumari", "Karaikal", "Kodaikanal", "Kumbakonam", "Madurai", "Mahabalipuram", "Ooty", "Palani", "Pondicherry", "Rameshwaram", "Thanjavur", "Tiruvallur", "Tiruvannamalai", "Trichy", "Vellore"],
  "Tripura": ["Agartala"],
  "Uttar Pradesh": ["Ayodhya", "Prayagraj", "Varanasi"],
  "Uttarakhand": ["Haridwar", "Rishikesh"]
};

export function SearchPackagesModal({ isOpen, onClose }: SearchPackagesModalProps) {
 
  // Extract all available destinations from packagesDatabase
  const availableCities = React.useMemo(() => {
    const cities = new Set<string>();
    Object.values(packagesDatabase).forEach(pkg => {
      if (pkg.overview?.destination) {
        const destStr = pkg.overview.destination.toLowerCase();
        Object.values(ALL_LOCATIONS).flat().forEach(city => {
          if (destStr.includes(city.toLowerCase())) {
            cities.add(city);
          }
        });
      }
    });
    return cities;
  }, []);

  const filteredLocations = React.useMemo(() => {
    return Object.entries(ALL_LOCATIONS).map(([state, cities]) => {
      return {
        state,
        cities: cities.filter(c => availableCities.has(c))
      };
    }).filter(group => group.cities.length > 0);
  }, [availableCities]);

 const [formData, setFormData] = useState({
 packageFor: '',
 budget: '',
 nights: '',
 theme: ''
 });

 const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
 setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 console.log('Search Filters:', formData);
 // Execute search logic here
 onClose();
 };

 return (
 <AnimatePresence>
 {isOpen && (
 <>
 {/* Backdrop */}
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 onClick={onClose}
 className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
 />

 {/* Modal Content */}
 <motion.div
 initial={{ opacity: 0, scale: 0.95, y: 20 }}
 animate={{ opacity: 1, scale: 1, y: 0 }}
 exit={{ opacity: 0, scale: 0.95, y: 20 }}
 transition={{ type: "spring", duration: 0.5 }}
 className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-3xl bg-white rounded-3xl z-[101] overflow-hidden"
 >
 {/* Header */}
 <div className="bg-[var(--color-blue-ocean)] p-6 md:p-8 flex items-center justify-between relative overflow-hidden">
 <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
 <h2 className="text-2xl md:text-3xl font-display font-bold text-white relative z-10 flex items-center gap-3">
 <Search className="w-8 h-8" />
 Search Packages
 </h2>
 <button
 onClick={onClose}
 className="relative z-10 bg-white/20 hover:bg-white/30 p-2 rounded-full text-white transition-colors"
 >
 <X className="w-6 h-6" />
 </button>
 </div>

 {/* Form Body */}
 <div className="p-6 md:p-8 bg-slate-50">
 <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
 
 {/* Packages For */}
 <div className="flex flex-col gap-2">
 <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Packages for</label>
 <div className="relative">
 <select 
 name="packageFor"
 value={formData.packageFor}
 onChange={handleChange}
 className="w-full bg-white border-2 border-slate-200 rounded-xl px-4 py-3.5 text-slate-700 font-medium focus:border-[var(--color-blue-ocean)] focus:ring-4 focus:ring-[var(--color-blue-ocean)]/10 outline-none transition-all appearance-none cursor-pointer"
 >
 <option value="">--Select--</option>
 {filteredLocations.map((group) => (
   <optgroup key={group.state} label={group.state}>
     {group.cities.map((city) => (
       <option key={city} value={city}>{city}</option>
     ))}
   </optgroup>
 ))}
 </select>
 {/* Custom Arrow */}
 <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
 <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
 </div>
 </div>
 </div>

 {/* Budget */}
 <div className="flex flex-col gap-2">
 <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Budget <span className="text-slate-400 normal-case font-normal">(Optional)</span></label>
 <div className="relative">
 <select 
 name="budget"
 value={formData.budget}
 onChange={handleChange}
 className="w-full bg-white border-2 border-slate-200 rounded-xl px-4 py-3.5 text-slate-700 font-medium focus:border-[var(--color-blue-ocean)] focus:ring-4 focus:ring-[var(--color-blue-ocean)]/10 outline-none transition-all appearance-none cursor-pointer"
 >
 <option value="">--Select--</option>
 <option value="Below 1500">Below 1500</option>
 <option value="1501 to 3000">1501 to 3000</option>
 <option value="3001 to 5000">3001 to 5000</option>
 <option value="5001 to 10000">5001 to 10000</option>
 <option value="10001 to 15000">10001 to 15000</option>
 <option value="15001 to 25000">15001 to 25000</option>
 <option value="Above 25000">Above 25000</option>
 </select>
 {/* Custom Arrow */}
 <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
 <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
 </div>
 </div>
 </div>

 {/* No. of Nights */}
 <div className="flex flex-col gap-2">
 <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">No. of Nights <span className="text-slate-400 normal-case font-normal">(Optional)</span></label>
 <div className="relative">
 <select 
 name="nights"
 value={formData.nights}
 onChange={handleChange}
 className="w-full bg-white border-2 border-slate-200 rounded-xl px-4 py-3.5 text-slate-700 font-medium focus:border-[var(--color-blue-ocean)] focus:ring-4 focus:ring-[var(--color-blue-ocean)]/10 outline-none transition-all appearance-none cursor-pointer"
 >
 <option value="">--Select--</option>
 <option value="1 Night & 2 Days">1 Night & 2 Days</option>
 <option value="2 Nights & 3 Days">2 Nights & 3 Days</option>
 <option value="3 Nights & 4 Days">3 Nights & 4 Days</option>
 <option value="4 Nights & 5 Days">4 Nights & 5 Days</option>
 <option value="5 Nights & 6 Days">5 Nights & 6 Days</option>
 <option value="6 Nights & 7 Days">6 Nights & 7 Days</option>
 <option value="More than 7 nights">More than 7 nights</option>
 </select>
 {/* Custom Arrow */}
 <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
 <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
 </div>
 </div>
 </div>

 {/* Tour Theme */}
 <div className="flex flex-col gap-2">
 <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Tour Theme <span className="text-slate-400 normal-case font-normal">(Optional)</span></label>
 <div className="relative">
 <select 
 name="theme"
 value={formData.theme}
 onChange={handleChange}
 className="w-full bg-white border-2 border-slate-200 rounded-xl px-4 py-3.5 text-slate-700 font-medium focus:border-[var(--color-blue-ocean)] focus:ring-4 focus:ring-[var(--color-blue-ocean)]/10 outline-none transition-all appearance-none cursor-pointer"
 >
 <option value="">--Select--</option>
 <option value="Beaches Sightseeing">Beaches Sightseeing</option>
 <option value="Boating">Boating</option>
 <option value="Caving">Caving</option>
 <option value="Elephant Safari">Elephant Safari</option>
 <option value="Forts and Palaces">Forts and Palaces</option>
 <option value="House Boat">House Boat</option>
 <option value="Jeep Safari">Jeep Safari</option>
 <option value="Jungle Safari">Jungle Safari</option>
 <option value="Mountaineering">Mountaineering</option>
 <option value="Museums">Museums</option>
 <option value="Sightseeing">Sightseeing</option>
 </select>
 {/* Custom Arrow */}
 <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
 <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
 </div>
 </div>
 </div>

 {/* Search Button */}
 <div className="md:col-span-2 pt-4 flex justify-end">
 <button
 type="submit"
 className="bg-[var(--color-primary-forest)] hover:bg-[var(--color-primary-emerald)] text-white font-bold text-lg px-12 py-4 rounded-xl transition-all flex items-center gap-2"
 >
 <Search className="w-5 h-5" />
 Search Packages
 </button>
 </div>

 </form>
 </div>
 </motion.div>
 </>
 )}
 </AnimatePresence>
 );
}
