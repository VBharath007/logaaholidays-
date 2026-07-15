import React, { useState } from 'react';
import { 
 Send, User, Mail, MapPin, Phone, Calendar, 
 Globe2, Clock, Users2, CreditCard, MessageSquare, Compass
} from 'lucide-react';

export function ComprehensiveEnquiryForm() {
 const [focusedField, setFocusedField] = useState<string | null>(null);

 const submitHandler = (e: React.FormEvent) => {
 e.preventDefault();
 };

 const inputClasses = (fieldName: string) => `
 w-full bg-white/5 px-12 py-4 rounded-2xl border border-white/10 transition-all duration-300 outline-none font-medium text-white placeholder-white/40
 ${focusedField === fieldName 
 ? 'border-[var(--color-brand-orange)] bg-white/10 ,115,53,0.3)]' 
 : 'hover:border-white/20 hover:bg-white/10'}
 `;

 const iconClasses = (fieldName: string) => `
 absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-all duration-300
 ${focusedField === fieldName ? 'text-[var(--color-brand-orange)] scale-110' : 'text-white/40'}
 `;

 const labelClasses = (fieldName: string) => `
 block text-sm font-bold mb-2 transition-colors duration-300
 ${focusedField === fieldName ? 'text-[var(--color-brand-orange)]' : 'text-white/80'}
 `;

 return (
 <div className="mt-8 bg-white/5 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden relative animate-fade-up border border-white/10">
 {/* Decorative Orbs behind the glass */}
 <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-orange)]/10 rounded-full blur-[80px] pointer-events-none" />
 <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-leaf-green)]/10 rounded-full blur-[80px] pointer-events-none" />
 
 {/* Top Gradient Line */}
 <div className="h-1 w-full bg-gradient-to-r from-transparent via-[var(--color-brand-orange)] to-transparent opacity-50"></div>
 
 <div className="p-8 md:p-12 relative z-10">
 
 <form onSubmit={submitHandler} className="space-y-12">
 
 {/* SECTION 1: Trip Requirements */}
 <div className="relative">
 <div className="flex items-center gap-4 mb-8">
 <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md">
 <Compass className="w-6 h-6 text-[var(--color-brand-orange)]" />
 </div>
 <h4 className="text-2xl font-bold text-white font-display">01. Trip Requirements</h4>
 </div>
 
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 
 {/* Tour Country */}
 <div className="relative group">
 <label className={labelClasses('tourCountry')}>Tour Country <span className="text-red-400">*</span></label>
 <div className="relative">
 <Globe2 className={iconClasses('tourCountry')} />
 <select 
 className={inputClasses('tourCountry') + " appearance-none"} 
 onFocus={() => setFocusedField('tourCountry')}
 onBlur={() => setFocusedField(null)}
 required
 >
 <option value="" className="bg-[var(--color-deep-teal)] text-white">Select Country...</option>
 <option value="India" className="bg-[var(--color-deep-teal)] text-white">India</option>
 <option value="International" className="bg-[var(--color-deep-teal)] text-white">International</option>
 </select>
 </div>
 </div>

 {/* City to Travel */}
 <div className="relative group">
 <label className={labelClasses('cityToTravel')}>Destination City <span className="text-red-400">*</span></label>
 <div className="relative">
 <MapPin className={iconClasses('cityToTravel')} />
 <input 
 type="text" 
 placeholder="Where to?"
 className={inputClasses('cityToTravel')}
 onFocus={() => setFocusedField('cityToTravel')}
 onBlur={() => setFocusedField(null)}
 required 
 />
 </div>
 </div>

 {/* Start City */}
 <div className="relative group">
 <label className={labelClasses('startCity')}>Departure City</label>
 <div className="relative">
 <MapPin className={iconClasses('startCity')} />
 <input 
 type="text" 
 placeholder="Leaving from..."
 className={inputClasses('startCity')}
 onFocus={() => setFocusedField('startCity')}
 onBlur={() => setFocusedField(null)}
 />
 </div>
 </div>

 {/* Arrival Date */}
 <div className="relative group">
 <label className={labelClasses('arrivalDate')}>Expected Arrival <span className="text-red-400">*</span></label>
 <div className="relative">
 <Calendar className={iconClasses('arrivalDate')} />
 <input 
 type="date" 
 className={inputClasses('arrivalDate') + " [color-scheme:dark]"}
 onFocus={() => setFocusedField('arrivalDate')}
 onBlur={() => setFocusedField(null)}
 required 
 />
 </div>
 </div>

 {/* Duration */}
 <div className="relative group">
 <label className={labelClasses('duration')}>Duration <span className="text-red-400">*</span></label>
 <div className="relative">
 <Clock className={iconClasses('duration')} />
 <input 
 type="text" 
 placeholder="e.g. 5 Days, 4 Nights"
 className={inputClasses('duration')}
 onFocus={() => setFocusedField('duration')}
 onBlur={() => setFocusedField(null)}
 required 
 />
 </div>
 </div>

 {/* Budget */}
 <div className="relative group">
 <label className={labelClasses('budget')}>Budget Level <span className="text-red-400">*</span></label>
 <div className="relative">
 <CreditCard className={iconClasses('budget')} />
 <select 
 className={inputClasses('budget') + " appearance-none"}
 onFocus={() => setFocusedField('budget')}
 onBlur={() => setFocusedField(null)}
 required
 >
 <option value="" className="bg-[var(--color-deep-teal)] text-white">Select Level...</option>
 <option value="Economy" className="bg-[var(--color-deep-teal)] text-white">Economy</option>
 <option value="Standard" className="bg-[var(--color-deep-teal)] text-white">Standard</option>
 <option value="Luxury" className="bg-[var(--color-deep-teal)] text-white">Luxury</option>
 </select>
 </div>
 </div>

 {/* Travelers (Complex Field) */}
 <div className="relative group md:col-span-2 lg:col-span-3">
 <label className={labelClasses('travelers')}>Travelers <span className="text-red-400">*</span></label>
 <div className="flex flex-col sm:flex-row gap-4 bg-white/5 p-2 rounded-2xl border border-white/10 transition-all duration-300 hover:border-white/20 hover:bg-white/10 focus-within:border-[var(--color-brand-orange)] ,115,53,0.3)]">
 
 <div className="flex-1 relative flex items-center">
 <Users2 className="absolute left-4 w-5 h-5 text-white/40" />
 <select className="w-full bg-transparent px-12 py-3 outline-none font-medium text-white cursor-pointer appearance-none" required>
 <option value="" className="bg-[var(--color-deep-teal)] text-white">Adults...</option>
 {[1,2,3,4,5,6,7,8].map(n => <option key={`a${n}`} value={n} className="bg-[var(--color-deep-teal)] text-white">{n} Adults</option>)}
 </select>
 </div>
 
 <div className="hidden sm:block w-px bg-white/10 my-2"></div>
 
 <div className="flex-1 relative flex items-center">
 <select className="w-full bg-transparent px-6 py-3 outline-none font-medium text-white cursor-pointer appearance-none">
 <option value="" className="bg-[var(--color-deep-teal)] text-white">Children...</option>
 {[0,1,2,3,4].map(n => <option key={`c${n}`} value={n} className="bg-[var(--color-deep-teal)] text-white">{n} Children</option>)}
 </select>
 </div>

 <div className="hidden sm:block w-px bg-white/10 my-2"></div>
 
 <div className="flex-1 relative flex items-center">
 <select className="w-full bg-transparent px-6 py-3 outline-none font-medium text-white cursor-pointer appearance-none">
 <option value="" className="bg-[var(--color-deep-teal)] text-white">Infants...</option>
 {[0,1,2,3].map(n => <option key={`i${n}`} value={n} className="bg-[var(--color-deep-teal)] text-white">{n} Infants</option>)}
 </select>
 </div>

 </div>
 </div>

 {/* Description */}
 <div className="relative group md:col-span-2 lg:col-span-3">
 <label className={labelClasses('description')}>Special Requirements <span className="text-red-400">*</span></label>
 <div className="relative">
 <MessageSquare className={`absolute left-4 top-5 w-5 h-5 transition-all duration-300 ${focusedField === 'description' ? 'text-[var(--color-brand-orange)] scale-110' : 'text-white/40'}`} />
 <textarea 
 rows={4} 
 placeholder="Tell us about your specific requirements, preferred places to visit, or any special arrangements needed..." 
 className={`w-full bg-white/5 pl-12 pr-6 py-4 rounded-2xl border transition-all duration-300 outline-none font-medium resize-none text-white placeholder-white/40
 ${focusedField === 'description' 
 ? 'border-[var(--color-brand-orange)] bg-white/10 ,115,53,0.3)]' 
 : 'border-white/10 hover:border-white/20 hover:bg-white/10'}
 `}
 onFocus={() => setFocusedField('description')}
 onBlur={() => setFocusedField(null)}
 required
 ></textarea>
 </div>
 </div>

 </div>
 </div>

 <div className="w-full h-px bg-white/10" />

 {/* SECTION 2: Personal Details */}
 <div className="relative">
 <div className="flex items-center gap-4 mb-8">
 <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md">
 <User className="w-6 h-6 text-[var(--color-brand-orange)]" />
 </div>
 <h4 className="text-2xl font-bold text-white font-display">02. Personal Details</h4>
 </div>
 
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 
 {/* Name */}
 <div className="relative group">
 <label className={labelClasses('name')}>Full Name <span className="text-red-400">*</span></label>
 <div className="relative">
 <User className={iconClasses('name')} />
 <input 
 type="text" 
 placeholder="John Doe"
 className={inputClasses('name')}
 onFocus={() => setFocusedField('name')}
 onBlur={() => setFocusedField(null)}
 required 
 />
 </div>
 </div>

 {/* Email */}
 <div className="relative group">
 <label className={labelClasses('email')}>Email Address <span className="text-red-400">*</span></label>
 <div className="relative">
 <Mail className={iconClasses('email')} />
 <input 
 type="email" 
 placeholder="john@example.com"
 className={inputClasses('email')}
 onFocus={() => setFocusedField('email')}
 onBlur={() => setFocusedField(null)}
 required 
 />
 </div>
 </div>

 {/* Contact Number */}
 <div className="relative group">
 <label className={labelClasses('phone')}>Phone Number <span className="text-red-400">*</span></label>
 <div className="relative flex gap-3">
 <div className="relative w-28 shrink-0">
 <Globe2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
 <input 
 type="text" 
 defaultValue="+91"
 className="w-full bg-white/5 pl-9 pr-2 py-4 rounded-2xl border border-white/10 focus:border-[var(--color-brand-orange)] focus:bg-white/10 ,115,53,0.3)] transition-all outline-none font-medium text-white hover:border-white/20 hover:bg-white/10"
 />
 </div>
 <div className="relative flex-1">
 <Phone className={iconClasses('phone')} />
 <input 
 type="tel" 
 placeholder="98765 43210"
 className={inputClasses('phone')}
 onFocus={() => setFocusedField('phone')}
 onBlur={() => setFocusedField(null)}
 required 
 />
 </div>
 </div>
 </div>

 {/* Country & State */}
 <div className="relative group">
 <label className={labelClasses('location')}>Location <span className="text-red-400">*</span></label>
 <div className="flex gap-3 bg-white/5 p-2 rounded-2xl border border-white/10 transition-all duration-300 hover:border-white/20 hover:bg-white/10 focus-within:border-[var(--color-brand-orange)] ,115,53,0.3)]">
 <select className="flex-1 bg-transparent px-4 py-2 outline-none font-medium text-white cursor-pointer appearance-none" required>
 <option value="India" className="bg-[var(--color-deep-teal)] text-white">India</option>
 <option value="Other" className="bg-[var(--color-deep-teal)] text-white">Other</option>
 </select>
 <div className="w-px bg-white/10 my-2"></div>
 <select className="flex-1 bg-transparent px-4 py-2 outline-none font-medium text-white cursor-pointer appearance-none" required>
 <option value="" className="bg-[var(--color-deep-teal)] text-white">State...</option>
 <option value="TN" className="bg-[var(--color-deep-teal)] text-white">Tamil Nadu</option>
 <option value="KL" className="bg-[var(--color-deep-teal)] text-white">Kerala</option>
 <option value="KA" className="bg-[var(--color-deep-teal)] text-white">Karnataka</option>
 </select>
 </div>
 </div>

 </div>
 </div>

 {/* Submit Action */}
 <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
 <p className="text-sm text-white/50 font-medium">
 We respect your privacy. No spam, ever.
 </p>
 
 <button type="submit" className="group relative w-full sm:w-auto overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold py-4 px-10 transition-all duration-300">
 {/* Animated hover gradient */}
 <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-orange)] to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
 
 <div className="relative flex items-center justify-center gap-3">
 <Send className="w-5 h-5 group-hover:animate-bounce" />
 <span className="tracking-wide text-lg ">Submit Enquiry</span>
 </div>
 </button>
 </div>

 </form>
 </div>
 </div>
 );
}
