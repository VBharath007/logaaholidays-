import { useParams, Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { destinationsData } from '../data/destinationsData';
import { generateSlug } from '../lib/utils';
import { Calendar, MapPin, Clock, CheckCircle2, XCircle, Info, ChevronRight, Phone, Home, Star, MessageSquare, ShieldCheck, User, Mail, Globe2, CreditCard, Users2, Send, Compass, Car } from 'lucide-react';
import { useEffect, useState } from 'react';

// For now, we hardcode the sample Shirdi package data to serve as the template.
// In the future, this can be fetched from an API or a central data store based on the packageId.

// Build the placeLinkMap at module level once
const placeLinkMap: Record<string, string> = {};
const lowerPlaceMap: Record<string, string> = {};

Object.keys(destinationsData).forEach(destId => {
  const dest = destinationsData[destId];
  if (dest.placesToVisit) {
    dest.placesToVisit.forEach((place: any) => {
      const stateSlug = dest.state?.toLowerCase() === 'tamil nadu' ? 'tamilnadu' : 'kerala';
      const url = `/place/${stateSlug}/${destId}/${place.id}`;
      placeLinkMap[place.name] = url;
      lowerPlaceMap[place.name.toLowerCase()] = url;
      
      if (place.name.endsWith(' Temple')) {
         const shortName = place.name.replace(' Temple', '');
         lowerPlaceMap[shortName.toLowerCase()] = url;
      }
      if (place.name.endsWith(' Mandir')) {
         const shortName = place.name.replace(' Mandir', '');
         lowerPlaceMap[shortName.toLowerCase()] = url;
      }
      
      // Special aliases
      if (place.id === 'koodal-algar') {
         lowerPlaceMap['koodal algar temple'] = url;
         lowerPlaceMap['koodal algar'] = url;
         lowerPlaceMap['koodal azhagar'] = url;
      }
      if (place.id === 'meenakshi-temple') {
         lowerPlaceMap['madurai meenakshi amman temple'] = url;
         lowerPlaceMap['meenakshi amman temple'] = url;
      }
      if (place.id === 'suchindram-temple') {
         lowerPlaceMap['thanumalayan'] = url;
         lowerPlaceMap['thanumalayan temple'] = url;
         lowerPlaceMap['suchindram'] = url;
      }
      if (place.id === 'padmanabhaswamy-temple') {
         lowerPlaceMap['anantha padmanabha temple'] = url;
      }
    });
  }
});

const sortedPlaceNames = Object.keys(lowerPlaceMap).sort((a, b) => b.length - a.length);

function renderClickableText(text: string) {
  if (!text) return text;
  
  let result: React.ReactNode[] = [text];
  
  sortedPlaceNames.forEach(placeName => {
    const url = lowerPlaceMap[placeName];
    // Create regex that matches placeName with word boundaries, case-insensitive
    // Note: escape special regex characters in placeName just in case
    const escapedPlaceName = placeName.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\export const packagesDatabase');
    const regex = new RegExp(`\\b(${escapedPlaceName})\\b`, 'gi');
    
    const newResult: React.ReactNode[] = [];
    result.forEach((item, index) => {
      if (typeof item === 'string') {
        const parts = item.split(regex);
        parts.forEach((part, i) => {
          if (part.toLowerCase() === placeName) {
            newResult.push(
              <Link key={`${placeName}-${index}-${i}`} to={url} className="text-[var(--color-blue-ocean)] font-bold hover:underline">
                {part}
              </Link>
            );
          } else if (part) {
            newResult.push(part);
          }
        });
      } else {
        newResult.push(item);
      }
    });
    result = newResult;
  });
  
  return result;
}

const PackageInquiryForm = ({ packageTitle }: { packageTitle: string }) => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[var(--color-deep-teal)] rounded-[2rem] p-8 text-center shadow-[0_10px_40px_rgba(0,0,0,0.15)] relative overflow-hidden border border-white/10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-orange)]/10 rounded-full blur-[40px]" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--color-leaf-green)]/10 rounded-full blur-[40px]" />
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/20">
          <CheckCircle2 className="w-8 h-8 text-[var(--color-brand-orange)]" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Inquiry Sent!</h3>
        <p className="text-sm text-white/70">Our experts will contact you shortly regarding the <strong>{packageTitle}</strong>.</p>
        <button onClick={() => setSubmitted(false)} className="mt-6 text-[var(--color-brand-orange)] font-bold text-sm hover:underline">Submit another inquiry</button>
      </div>
    );
  }

  const inputClasses = (fieldName: string) => `
    w-full bg-white/5 px-4 py-3.5 pl-11 rounded-xl border transition-all duration-300 outline-none text-sm font-medium text-white placeholder-white/40
    ${focusedField === fieldName 
      ? 'border-[var(--color-brand-orange)] bg-white/10' 
      : 'border-white/10 hover:border-white/20 hover:bg-white/10'}
  `;

  const iconClasses = (fieldName: string) => `
    absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-all duration-300
    ${focusedField === fieldName ? 'text-[var(--color-brand-orange)] scale-110' : 'text-white/40'}
  `;

  return (
    <div className="bg-[var(--color-deep-teal)] rounded-[2.5rem] overflow-hidden relative shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-white/10">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--color-brand-orange)]/10 rounded-full blur-[50px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--color-leaf-green)]/10 rounded-full blur-[50px] pointer-events-none" />
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[var(--color-brand-orange)] to-transparent opacity-50"></div>
      
      <div className="p-7 relative z-10">
        <h3 className="text-2xl font-display font-bold text-white mb-1">Plan Your Trip</h3>
        <p className="text-xs text-white/60 mb-6">Customize your {packageTitle} experience.</p>
        
        <form onSubmit={handleSubmit} className="space-y-3.5">
          
          <div className="space-y-3.5">
            {/* Departure */}
            <div className="relative group">
              <MapPin className={iconClasses('departure')} />
              <input type="text" placeholder="Departure City" className={inputClasses('departure')} onFocus={() => setFocusedField('departure')} onBlur={() => setFocusedField(null)} required />
            </div>

            {/* Travel Date */}
            <div className="relative group">
              <Calendar className={iconClasses('date')} />
              <input type="date" className={inputClasses('date') + " [color-scheme:dark]"} onFocus={() => setFocusedField('date')} onBlur={() => setFocusedField(null)} required />
            </div>

            {/* Budget */}
            <div className="relative group">
              <CreditCard className={iconClasses('budget')} />
              <select className={inputClasses('budget') + " appearance-none"} onFocus={() => setFocusedField('budget')} onBlur={() => setFocusedField(null)} required>
                <option value="" className="bg-[var(--color-deep-teal)] text-white">Budget Level...</option>
                <option value="Economy" className="bg-[var(--color-deep-teal)] text-white">Economy</option>
                <option value="Standard" className="bg-[var(--color-deep-teal)] text-white">Standard</option>
                <option value="Luxury" className="bg-[var(--color-deep-teal)] text-white">Luxury</option>
              </select>
            </div>
            
            {/* Travelers Row */}
            <div className="flex gap-2">
              <div className="relative flex-1 group">
                <Users2 className={iconClasses('adults')} />
                <select className={inputClasses('adults') + " appearance-none"} onFocus={() => setFocusedField('adults')} onBlur={() => setFocusedField(null)} required>
                  <option value="" className="bg-[var(--color-deep-teal)] text-white">Adults</option>
                  {[1,2,3,4,5,6].map(n => <option key={n} value={n} className="bg-[var(--color-deep-teal)] text-white">{n}</option>)}
                </select>
              </div>
              <div className="relative flex-1">
                <select className="w-full bg-white/5 px-3 py-3.5 rounded-xl border border-white/10 outline-none text-sm font-medium text-white appearance-none hover:bg-white/10 transition-colors">
                  <option value="" className="bg-[var(--color-deep-teal)] text-white">Child</option>
                  {[0,1,2,3,4].map(n => <option key={n} value={n} className="bg-[var(--color-deep-teal)] text-white">{n}</option>)}
                </select>
              </div>
              <div className="relative flex-1">
                <select className="w-full bg-white/5 px-3 py-3.5 rounded-xl border border-white/10 outline-none text-sm font-medium text-white appearance-none hover:bg-white/10 transition-colors">
                  <option value="" className="bg-[var(--color-deep-teal)] text-white">Infant</option>
                  {[0,1,2,3].map(n => <option key={n} value={n} className="bg-[var(--color-deep-teal)] text-white">{n}</option>)}
                </select>
              </div>
            </div>

            {/* Name */}
            <div className="relative group">
              <User className={iconClasses('name')} />
              <input type="text" placeholder="Full Name" className={inputClasses('name')} onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)} required />
            </div>

            {/* Email */}
            <div className="relative group">
              <Mail className={iconClasses('email')} />
              <input type="email" placeholder="Email Address" className={inputClasses('email')} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} required />
            </div>

            {/* Phone */}
            <div className="relative flex gap-2 group">
              <div className="relative w-20 shrink-0">
                <Globe2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input type="text" defaultValue="+91" className="w-full bg-white/5 pl-8 pr-2 py-3.5 rounded-xl border border-white/10 outline-none text-sm font-medium text-white text-center" />
              </div>
              <div className="relative flex-1">
                <Phone className={iconClasses('phone')} />
                <input type="tel" placeholder="Phone Number" className={inputClasses('phone')} onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField(null)} required />
              </div>
            </div>

            {/* Requirements */}
            <div className="relative mt-2 group">
              <MessageSquare className={`absolute left-4 top-4 w-4 h-4 transition-all duration-300 ${focusedField === 'req' ? 'text-[var(--color-brand-orange)] scale-110' : 'text-white/40'}`} />
              <textarea rows={3} placeholder="Special Requirements..." className={`w-full bg-white/5 pl-11 pr-4 py-3.5 rounded-xl border transition-all duration-300 outline-none text-sm font-medium text-white placeholder-white/40 resize-none ${focusedField === 'req' ? 'border-[var(--color-brand-orange)] bg-white/10' : 'border-white/10 hover:border-white/20 hover:bg-white/10'}`} onFocus={() => setFocusedField('req')} onBlur={() => setFocusedField(null)}></textarea>
            </div>
          </div>
          
          <button type="submit" className="group relative w-full overflow-hidden rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold py-4 mt-4 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-orange)] to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex items-center justify-center gap-2">
              <Send className="w-4 h-4 group-hover:animate-bounce" />
              <span>Submit Enquiry</span>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export const packagesDatabase: Record<string, any> = {
  '2000': {
    "title": "Chennai to Varanasi Tour Package | 2 Days / 1 Night Kasi Flight Package",
    "image": "/assets/varanasi/cards/kasi1.png",
    "heroImage": "/assets/varanasi/hero/kasibanner1.png",
    "overview": {
        "duration": "2 Days / 1 Night",
        "destination": "Varanasi",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "18,500",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Chennai → Varanasi",
            "activities": [
                "✈️ Departure from Chennai Airport",
                "🛬 Arrival at Varanasi Airport",
                "🚗 Transfer to Hotel & Check-in",
                "Temple Darshan",
                "🛕 Shri Kashi Vishwanath Temple",
                "🛕 Kashi Vishalakshi Amman Temple",
                "🛕 Annapoorani Temple",
                "Evening Activities",
                "🚤 Boat Ride on the Holy River Ganga",
                "🔥 Witness the Famous Ganga Aarti",
                "⚱️ Visit Manikarnika Ghat",
                "⚱️ Visit Harishchandra Ghat",
                "🌙 Sayana Aarti at Kashi Vishwanath Temple",
                "🏨 Overnight Stay in Varanasi"
            ]
        },
        {
            "day": "Day 02",
            "title": "Varanasi → Chennai",
            "activities": [
                "Early Morning",
                "🌊 Holy Bath in River Ganga",
                "🙏 Tharpanam / Pooja (Optional)",
                "Temple Visit",
                "🛕 Kala Bhairava Temple",
                "Free Time",
                "🛍️ Shopping for Banarasi Silk Sarees",
                "🎁 Purchase Religious Items & Souvenirs",
                "Transfer to Varanasi Airport.",
                "✈️ Return Flight to Chennai."
            ]
        }
    ],
    "inclusions": [
        "Airport Pickup & Drop",
        "Private A/C Vehicle for Transfers & Sightseeing",
        "1 Night A/C Hotel Accommodation",
        "Complimentary Breakfast",
        "Complete Sightseeing as per Itinerary",
        "Boat Ride for Ganga Aarti",
        "English, Hindi & Tamil Tour Assistance"
    ],
    "exclusions": [
        "❌ Airfare (unless specifically included in the selected package)",
        "❌ Lunch & Dinner",
        "❌ Temple Special Darshan Tickets",
        "❌ Tharpanam & Pooja Charges",
        "❌ Entry Tickets (if applicable)",
        "❌ Personal Expenses",
        "❌ Laundry, Telephone & Tips",
        "❌ Travel Insurance",
        "❌ Mineral Water & Other Items Not Mentioned in Inclusions"
    ],
    "highlights": [
        "2 Days / 1 Night Varanasi Flight Package",
        "Direct Flight from Chennai",
        "Comfortable Hotel Accommodation",
        "Kashi Vishwanath Temple Darshan",
        "Kashi Vishalakshi Temple",
        "Annapoorani Temple",
        "Evening Ganga Aarti by Boat",
        "Manikarnika Ghat & Harishchandra Ghat",
        "Holy Ganga Snan & Tharpanam",
        "Kala Bhairava Temple Darshan",
        "Tamil, English & Hindi Guide",
        "Airport Transfers & Local Sightseeing"
    ],
    "keywords": "Chennai to Varanasi Tour Package, Chennai to Kasi Flight Package, Kasi Yatra Package from Chennai, Kashi Vishwanath Tour, Varanasi Temple Tour, Kasi Pilgrimage Package, Ganga Aarti Tour, Tamil Nadu to Varanasi Tour, Best Varanasi Tour Package, Logaa Holidays.",
    "id": "2000"
},
  '2001': {
    "title": "Chennai to Ayodhya Tour Package | 2 Days / 1 Night Ayodhya Flight Package",
    "image": "/assets/generated/ayodhya_ram_mandir_pkg.png",
    "heroImage": "/assets/varanasi/hero/kasibanner2.png",
    "overview": {
        "duration": "2 Days / 1 Night",
        "destination": 'Ayodhya',
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "18,500",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Chennai → Ayodhya",
            "activities": [
                "✈️ Departure from Chennai Airport",
                "🛬 Arrival at Ayodhya Airport",
                "🚗 Transfer to Hotel & Check-in",
                "Ayodhya Sightseeing",
                "🛕 Shri Ram Janmabhoomi Temple",
                "🛕 Hanuman Garhi Temple",
                "🛕 Kanak Bhawan",
                "🏛️ Ram Katha Museum",
                "Enjoy the peaceful spiritual atmosphere of Ayodhya.",
                "🏨 Overnight Stay in Ayodhya"
            ]
        },
        {
            "day": "Day 02",
            "title": "Ayodhya → Chennai",
            "activities": [
                "Breakfast at Hotel",
                "Morning",
                "🙏 Free Time for Temple Visits & Religious Activities",
                "🛍️ Shopping for Ayodhya Prasad, Religious Books, Idols & Souvenirs",
                "Check-out from the hotel.",
                "Transfer to Ayodhya Airport.",
                "✈️ Return Flight to Chennai."
            ]
        }
    ],
    "inclusions": [
        "Airport Pickup & Drop",
        "Private A/C Vehicle for Transfers & Sightseeing",
        "1 Night A/C Hotel Accommodation",
        "Complimentary Breakfast",
        "Sightseeing as per Itinerary",
        "English, Hindi & Tamil Tour Assistance"
    ],
    "exclusions": [
        "❌ Airfare (unless specifically included in the selected package)",
        "❌ Lunch & Dinner",
        "❌ Temple Special Darshan Tickets",
        "❌ Entry Tickets (if applicable)",
        "❌ Personal Expenses",
        "❌ Laundry & Telephone Charges",
        "❌ Travel Insurance",
        "❌ Tips & Porter Charges",
        "❌ Mineral Water",
        "❌ Anything Not Mentioned in the Package Includes"
    ],
    "highlights": [
        "2 Days / 1 Night Ayodhya Flight Package",
        "Direct Flight from Chennai",
        "Comfortable Hotel Accommodation",
        "Shri Ram Janmabhoomi Temple Darshan",
        "Hanuman Garhi Temple Visit",
        "Kanak Bhawan",
        "Ram Katha Museum",
        "Airport Transfers & Local Sightseeing",
        "Tamil, English & Hindi Tour Assistance",
        "Customizable Pilgrimage Tour"
    ],
    "keywords": "Chennai to Ayodhya Tour Package, Ayodhya Flight Package from Chennai, Shri Ram Janmabhoomi Tour Package, Ayodhya Pilgrimage Tour, Ayodhya Temple Tour, Chennai to Ram Mandir Tour, Ayodhya Darshan Package, Ayodhya Travel Package, Best Ayodhya Tour Package, Logaa Holidays.",
    "id": "2001"
},
  '2002': {
    "title": "Chennai to Varanasi Tour Package | 3 Days / 2 Nights Kasi Flight Package",
    "image": "/assets/varanasi/cards/kasi3.png",
    "heroImage": "/assets/varanasi/hero/kasibanner3.png",
    "overview": {
        "duration": "3 Days / 2 Nights",
        "destination": "Varanasi",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "23,500",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Chennai → Varanasi",
            "activities": [
                "✈️ Departure from Chennai Airport",
                "🛬 Arrival at Varanasi Airport",
                "🚗 Transfer to Hotel & Check-in",
                "Evening Sightseeing",
                "🚤 Boat Ride on the Holy River Ganga",
                "🔥 Witness the Grand Ganga Aarti",
                "⚱️ Manikarnika Ghat",
                "⚱️ Harishchandra Ghat",
                "🌙 Sayana Aarti at Shri Kashi Vishwanath Temple",
                "🏨 Overnight Stay in Varanasi"
            ]
        },
        {
            "day": "Day 02",
            "title": "Kashi Temple Darshan",
            "activities": [
                "Early Morning",
                "🌊 Holy Bath in the River Ganga",
                "🙏 Perform Tharpanam (Optional)",
                "Temple Visits",
                "🛕 Shri Kashi Vishwanath Temple",
                "🛕 Kashi Vishalakshi Amman Temple",
                "🛕 Annapoorani Temple",
                "Free time for religious activities.",
                "🏨 Overnight Stay in Varanasi"
            ]
        },
        {
            "day": "Day 03",
            "title": "Varanasi → Chennai",
            "activities": [
                "Breakfast at Hotel",
                "Morning Sightseeing",
                "🛕 Kala Bhairava Temple",
                "🛍️ Shopping for Banarasi Silk Sarees, Rudraksha, Brass Items & Religious Souvenirs",
                "Check-out from the hotel.",
                "Transfer to Varanasi Airport.",
                "✈️ Return Flight to Chennai."
            ]
        }
    ],
    "inclusions": [
        "Airport Pickup & Drop",
        "Private A/C Vehicle for Transfers & Sightseeing",
        "2 Nights A/C Hotel Accommodation",
        "Complimentary Breakfast",
        "Sightseeing as per Itinerary",
        "Ganga Aarti Boat Ride",
        "English, Hindi & Tamil Tour Assistance"
    ],
    "exclusions": [
        "❌ Airfare (unless specifically included in the selected package)",
        "❌ Lunch & Dinner",
        "❌ Temple Special Darshan Tickets",
        "❌ Tharpanam & Pooja Charges",
        "❌ Entry Tickets (if applicable)",
        "❌ Personal Expenses",
        "❌ Laundry & Telephone Charges",
        "❌ Travel Insurance",
        "❌ Tips & Porter Charges",
        "❌ Mineral Water",
        "❌ Anything Not Mentioned in the Package Includes"
    ],
    "highlights": [
        "3 Days / 2 Nights Varanasi Flight Tour",
        "Direct Flight from Chennai",
        "2 Nights Hotel Accommodation",
        "Kashi Vishwanath Temple Darshan",
        "Kashi Vishalakshi Temple",
        "Annapoorani Temple",
        "Evening Ganga Aarti with Boat Ride",
        "Manikarnika Ghat & Harishchandra Ghat",
        "Holy Ganga Snan & Tharpanam",
        "Kala Bhairava Temple Darshan",
        "Tamil, English & Hindi Tour Assistance",
        "Airport Transfers & Local Sightseeing"
    ],
    "keywords": "Chennai to Varanasi Tour Package, Chennai to Kasi Flight Package, Kashi Vishwanath Tour Package, Kasi Yatra from Chennai, Varanasi Pilgrimage Tour, Ganga Aarti Tour Package, Kashi Temple Tour, Kasi Darshan Package, Best Varanasi Tour Package, Logaa Holidays.",
    "id": "2002"
},
  '2003': {
    "title": "Chennai to Kasi & Ayodhya Tour Package | 3 Days / 2 Nights Flight Package",
    "image": "/assets/varanasi/cards/kasi4.png",
    "heroImage": "/assets/varanasi/hero/kasibanner4.png",
    "overview": {
        "duration": "3 Days / 2 Nights",
        "destination": "Varanasi",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "27,500",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Chennai → Ayodhya",
            "activities": [
                "✈️ Departure from Chennai Airport",
                "🛬 Arrival at Ayodhya Airport",
                "🚗 Transfer to Hotel & Check-in",
                "Ayodhya Sightseeing",
                "🛕 Shri Ram Janmabhoomi Temple",
                "🛕 Hanuman Garhi Temple",
                "🛕 Kanak Bhawan",
                "🏛️ Ram Katha Museum",
                "🏨 Overnight Stay in Ayodhya"
            ]
        },
        {
            "day": "Day 02",
            "title": "Ayodhya → Varanasi (Kasi)",
            "activities": [
                "Breakfast at Hotel",
                "Proceed to Varanasi (Kasi).",
                "Check-in at the hotel.",
                "Temple Darshan",
                "🛕 Shri Kashi Vishwanath Temple",
                "🛕 Kashi Vishalakshi Amman Temple",
                "🛕 Annapoorani Temple",
                "Evening Activities",
                "🚤 Boat Ride on the Holy River Ganga",
                "🔥 Witness the Grand Ganga Aarti",
                "⚱️ Manikarnika Ghat",
                "⚱️ Harishchandra Ghat",
                "🌙 Sayana Aarti at Shri Kashi Vishwanath Temple",
                "🏨 Overnight Stay in Varanasi"
            ]
        },
        {
            "day": "Day 03",
            "title": "Varanasi → Chennai",
            "activities": [
                "Early Morning",
                "🌊 Holy Bath in the River Ganga",
                "🙏 Tharpanam (Optional)",
                "Temple Visit",
                "🛕 Kala Bhairava Temple",
                "Free Time",
                "🛍️ Shopping for Banarasi Silk Sarees, Rudraksha Malas, Brass Items & Religious Souvenirs",
                "Transfer to Varanasi Airport.",
                "✈️ Return Flight to Chennai."
            ]
        }
    ],
    "inclusions": [
        "Airport Pickup & Drop",
        "Private A/C Vehicle for Transfers & Sightseeing",
        "1 Night Hotel Accommodation in Ayodhya",
        "1 Night Hotel Accommodation in Varanasi",
        "Complimentary Breakfast",
        "Sightseeing as per Itinerary",
        "Ganga Aarti Boat Ride",
        "English, Hindi & Tamil Tour Assistance"
    ],
    "exclusions": [
        "❌ Airfare (unless specifically included in the selected package)",
        "❌ Lunch & Dinner",
        "❌ Temple Special Darshan Tickets",
        "❌ Tharpanam & Pooja Charges",
        "❌ Entry Tickets (if applicable)",
        "❌ Personal Expenses",
        "❌ Laundry & Telephone Charges",
        "❌ Travel Insurance",
        "❌ Tips & Porter Charges",
        "❌ Mineral Water",
        "❌ Anything Not Mentioned in the Package Includes"
    ],
    "highlights": [
        "3 Days / 2 Nights Spiritual Tour",
        "Flight from Chennai",
        "Ayodhya & Varanasi Tour",
        "Shri Ram Janmabhoomi Temple Darshan",
        "Hanuman Garhi Temple",
        "Kanak Bhawan",
        "Kashi Vishwanath Temple Darshan",
        "Kashi Vishalakshi Temple",
        "Annapoorani Temple",
        "Ganga Aarti Boat Ride",
        "Manikarnika Ghat & Harishchandra Ghat",
        "Holy Ganga Snan & Tharpanam",
        "Kala Bhairava Temple",
        "Tamil, English & Hindi Tour Assistance",
        "Airport Transfers & Local Sightseeing"
    ],
    "keywords": "Chennai to Kasi Ayodhya Tour Package, Kasi Ayodhya Flight Package, Chennai to Kashi Vishwanath Tour, Ayodhya Ram Mandir Tour Package, Varanasi and Ayodhya Pilgrimage Tour, Chennai to Ayodhya Flight Package, Chennai to Varanasi Tour Package, Kashi Yatra Package, Best Kasi Ayodhya Tour Package, Logaa Holidays.",
    "id": "2003"
},
  '2004': {
    "title": "Chennai to Kasi & Gaya Tour Package | 5 Days / 4 Nights Flight Package",
    "image": "/assets/varanasi/cards/kasi5.png",
    "heroImage": "/assets/varanasi/hero/kasibanner5.png",
    "overview": {
        "duration": "5 Days / 4 Nights",
        "destination": "Varanasi",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "34,500",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Chennai → Varanasi (Kasi)",
            "activities": [
                "✈️ Departure from Chennai Airport",
                "🛬 Arrival at Varanasi Airport",
                "🚗 Transfer to Hotel & Check-in",
                "Temple Darshan",
                "🛕 Shri Kashi Vishwanath Temple",
                "🛕 Kashi Vishalakshi Amman Temple",
                "🛕 Annapoorani Temple",
                "Evening Activities",
                "🚤 Boat Ride on the River Ganga",
                "🔥 Witness the Grand Ganga Aarti",
                "⚱️ Manikarnika Ghat",
                "⚱️ Harishchandra Ghat",
                "🌙 Sayana Aarti at Shri Kashi Vishwanath Temple",
                "🏨 Overnight Stay in Varanasi"
            ]
        },
        {
            "day": "Day 02",
            "title": "Varanasi → Gaya",
            "activities": [
                "Early Morning",
                "🌊 Holy Bath in the River Ganga",
                "🙏 Perform Tharpanam (Optional)",
                "Free time for shopping and religious activities.",
                "After lunch, proceed to Gaya.",
                "🏨 Overnight Stay in Gaya"
            ]
        },
        {
            "day": "Day 03",
            "title": "Gaya → Bodh Gaya → Varanasi",
            "activities": [
                "Early Morning",
                "Ancestral Rituals",
                "🙏 Perform Pinda Daan / Shraddham (Optional)",
                "Dress Code: Ladies – Saree | Gents – Dhoti",
                "Gaya Sightseeing",
                "🛕 Vishnupad Temple",
                "🌳 Akshayavat (Sacred Banyan Tree)",
                "Bodh Gaya Sightseeing",
                "🛕 Mahabodhi Temple (UNESCO World Heritage Site)",
                "🧘 Bodhi Tree",
                "Proceed back to Varanasi.",
                "🏨 Overnight Stay in Varanasi"
            ]
        },
        {
            "day": "Day 04",
            "title": "Varanasi → Prayagraj (Allahabad) → Varanasi",
            "activities": [
                "Breakfast at Hotel",
                "Proceed to Prayagraj (Allahabad).",
                "Prayagraj Sightseeing",
                "🌊 Holy Bath at Triveni Sangam",
                "🙏 Veni Pooja / Dampathi Pooja (Optional)",
                "🛕 Sri Sayana Hanuman Temple",
                "Return to Varanasi.",
                "🏨 Overnight Stay in Varanasi"
            ]
        },
        {
            "day": "Day 05",
            "title": "Varanasi → Chennai",
            "activities": [
                "Breakfast at Hotel",
                "Morning Temple Visit",
                "🛕 Kala Bhairava Temple",
                "Free time for shopping.",
                "🛍️ Banarasi Silk Sarees",
                "📿 Rudraksha Malas",
                "🪔 Brass Idols & Religious Articles",
                "Transfer to Varanasi Airport.",
                "✈️ Return Flight to Chennai."
            ]
        }
    ],
    "inclusions": [
        "Airport Pickup & Drop",
        "Private A/C Vehicle for Transfers & Sightseeing",
        "3 Nights Hotel Accommodation in Varanasi",
        "1 Night Hotel Accommodation in Gaya",
        "Complimentary Breakfast",
        "Complete Sightseeing as per Itinerary",
        "Ganga Aarti Boat Ride",
        "English, Hindi & Tamil Tour Assistance"
    ],
    "exclusions": [
        "❌ Airfare (unless specifically included in the selected package)",
        "❌ Pinda Daan, Shraddham & Tharpanam Charges",
        "❌ Veni Pooja / Dampathi Pooja Charges",
        "❌ Temple Special Darshan Tickets",
        "❌ Lunch & Dinner",
        "❌ Entry Tickets (if applicable)",
        "❌ Personal Expenses",
        "❌ Laundry & Telephone Charges",
        "❌ Travel Insurance",
        "❌ Tips & Porter Charges",
        "❌ Mineral Water",
        "❌ Anything Not Mentioned in the Package Includes"
    ],
    "highlights": [
        "5 Days / 4 Nights Spiritual Pilgrimage",
        "Flight from Chennai to Varanasi",
        "Kashi Vishwanath Temple Darshan",
        "Kashi Vishalakshi & Annapoorani Temple",
        "Evening Ganga Aarti with Boat Ride",
        "Holy Ganga Snan & Tharpanam",
        "Gaya Pinda Daan & Shraddham",
        "Vishnupad Temple & Akshayavat (Vat Vriksha)",
        "Bodh Gaya Mahabodhi Temple",
        "Triveni Sangam Holy Bath at Prayagraj",
        "Veni Pooja / Dampathi Pooja (Optional)",
        "Kala Bhairava Temple Darshan",
        "Tamil, English & Hindi Tour Assistance",
        "Airport Transfers & Local Sightseeing"
    ],
    "keywords": "Chennai to Kasi Gaya Tour Package, Kasi Gaya Flight Package, Chennai to Varanasi Tour Package, Gaya Pinda Daan Tour, Kasi Prayagraj Tour Package, Triveni Sangam Tour, Bodh Gaya Tour Package, Kashi Vishwanath Darshan Package, Kasi Yatra from Chennai, Best Kasi Gaya Tour Package, Logaa Holidays.",
    "id": "2004"
},
  '2005': {
    "title": "Chennai to Kasi, Gaya, Prayagraj & Ayodhya Tour Package | 6 Days / 5 Nights Flight Package",
    "image": "/assets/varanasi/cards/kasi6.png",
    "heroImage": "/assets/varanasi/hero/kasibanner6.png",
    "overview": {
        "duration": "6 Days / 5 Nights",
        "destination": "Varanasi",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "39,500",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Chennai → Varanasi → Ayodhya",
            "activities": [
                "✈️ Departure from Chennai Airport",
                "🛬 Arrival at Varanasi Airport",
                "🚗 Proceed to Ayodhya",
                "Ayodhya Sightseeing",
                "🛕 Shri Ram Janmabhoomi Temple",
                "🛕 Hanuman Garhi Temple",
                "🏛️ Evening Spiritual Visit",
                "🏨 Overnight Stay in Ayodhya"
            ]
        },
        {
            "day": "Day 02",
            "title": "Ayodhya → Varanasi (Kasi)",
            "activities": [
                "Breakfast at Hotel",
                "Proceed to Varanasi (Kasi).",
                "Check-in at the hotel.",
                "Temple Darshan",
                "🛕 Shri Kashi Vishwanath Temple",
                "🛕 Kashi Vishalakshi Amman Temple",
                "🛕 Annapoorani Temple",
                "Evening Activities",
                "🚤 Boat Ride on the River Ganga",
                "🔥 Witness the Grand Ganga Aarti",
                "⚱️ Manikarnika Ghat",
                "⚱️ Harishchandra Ghat",
                "🌙 Sayana Aarti at Shri Kashi Vishwanath Temple",
                "🏨 Overnight Stay in Varanasi"
            ]
        },
        {
            "day": "Day 03",
            "title": "Varanasi → Gaya",
            "activities": [
                "Early Morning",
                "🌊 Holy Bath in River Ganga",
                "🙏 Perform Tharpanam (Optional)",
                "Free time for shopping and religious activities.",
                "Proceed to Gaya.",
                "🏨 Overnight Stay in Gaya / Bodh Gaya"
            ]
        },
        {
            "day": "Day 04",
            "title": "Gaya → Bodh Gaya → Varanasi",
            "activities": [
                "Ancestral Rituals",
                "🙏 Pinda Daan / Shraddham (Optional)",
                "Dress Code: Ladies – Saree | Gents – Dhoti",
                "Gaya Sightseeing",
                "🛕 Vishnupad Temple",
                "🌳 Akshayavat (Vat Vriksha)",
                "Bodh Gaya Sightseeing",
                "🛕 Mahabodhi Temple",
                "🌳 Sacred Bodhi Tree",
                "Proceed to Varanasi.",
                "🏨 Overnight Stay in Varanasi"
            ]
        },
        {
            "day": "Day 05",
            "title": "Varanasi → Prayagraj (Allahabad) → Varanasi",
            "activities": [
                "Breakfast at Hotel",
                "Proceed to Prayagraj (Allahabad).",
                "Prayagraj Sightseeing",
                "🌊 Holy Bath at Triveni Sangam",
                "🙏 Veni Pooja / Dampathi Pooja (Optional)",
                "🛕 Sri Sayana Hanuman Temple",
                "Return to Varanasi.",
                "🏨 Overnight Stay in Varanasi"
            ]
        },
        {
            "day": "Day 06",
            "title": "Varanasi → Chennai",
            "activities": [
                "Breakfast at Hotel",
                "Morning Temple Visit",
                "🛕 Kala Bhairava Temple",
                "Shopping Time",
                "🛍️ Banarasi Silk Sarees",
                "📿 Rudraksha Malas",
                "🪔 Brass Idols & Religious Articles",
                "Transfer to Varanasi Airport.",
                "✈️ Return Flight to Chennai."
            ]
        }
    ],
    "inclusions": [
        "Airport Pickup & Drop",
        "Private A/C Vehicle for Entire Tour",
        "3 Nights Stay in Varanasi",
        "1 Night Stay in Ayodhya",
        "1 Night Stay in Gaya / Bodh Gaya",
        "Complimentary Breakfast",
        "Sightseeing as per Itinerary",
        "Ganga Aarti Boat Ride",
        "English, Hindi & Tamil Tour Assistance"
    ],
    "exclusions": [
        "❌ Airfare (unless specifically included in selected package)",
        "❌ Pinda Daan, Shraddham & Tharpanam Charges",
        "❌ Veni Pooja / Dampathi Pooja Charges",
        "❌ Temple Special Darshan Tickets",
        "❌ Lunch & Dinner",
        "❌ Personal Expenses",
        "❌ Laundry & Telephone Charges",
        "❌ Travel Insurance",
        "❌ Tips & Porter Charges",
        "❌ Mineral Water",
        "❌ Anything Not Mentioned in the Package Includes"
    ],
    "highlights": [
        "6 Days / 5 Nights Spiritual Pilgrimage",
        "Flight from Chennai to Varanasi",
        "Ayodhya Ram Janmabhoomi Darshan",
        "Hanuman Garhi Temple Visit",
        "Kashi Vishwanath Temple Darshan",
        "Kashi Vishalakshi & Annapoorani Temple",
        "Evening Ganga Aarti with Boat Ride",
        "Holy Ganga Snan & Tharpanam",
        "Gaya Pinda Daan & Shraddham Rituals",
        "Vishnupad Temple & Akshayavat",
        "Bodh Gaya Mahabodhi Temple",
        "Triveni Sangam Holy Bath",
        "Veni Pooja / Dampathi Pooja (Optional)",
        "Kala Bhairava Temple Darshan",
        "Tamil, English & Hindi Tour Assistance"
    ],
    "keywords": "Chennai to Kasi Gaya Ayodhya Tour Package, Kasi Gaya Prayagraj Tour Package, Ayodhya Ram Mandir Tour, Kashi Vishwanath Darshan Package, Gaya Pinda Daan Tour, Triveni Sangam Tour Package, Chennai to Varanasi Flight Package, North India Pilgrimage Tour, Kasi Yatra Package from Chennai, Best Kasi Gaya Ayodhya Tour Package.",
    "id": "2005"
},
  '2006': {
    "title": "Chennai to Kasi Train Tour Package | 8 Days / 7 Nights Pilgrimage Package",
    "image": "/assets/varanasi/cards/kasi7.png",
    "heroImage": "/assets/varanasi/hero/kasibanner7.png",
    "overview": {
        "duration": "8 Days / 7 Nights",
        "destination": "Varanasi",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "14,500",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Chennai → Varanasi",
            "activities": [
                "🚆 Board 12669 Ganga Kaveri Express",
                "Departure from Chennai Central Railway Station in the evening.",
                "Overnight Train Journey"
            ]
        },
        {
            "day": "Day 02",
            "title": "Train Journey",
            "activities": [
                "Enjoy your journey towards Varanasi.",
                "Overnight on Train"
            ]
        },
        {
            "day": "Day 03",
            "title": "Arrival at Varanasi (Kasi)",
            "activities": [
                "🚆 Arrival at Varanasi Junction",
                "🚗 Transfer to Hotel",
                "Temple Darshan",
                "🌊 Holy Bath in River Ganga",
                "🛕 Shri Kashi Vishwanath Temple",
                "🛕 Kashi Vishalakshi Amman Temple",
                "🛕 Annapoorani Temple",
                "Evening",
                "🔥 Witness the Grand Ganga Aarti",
                "🏨 Overnight Stay in Varanasi"
            ]
        },
        {
            "day": "Day 04",
            "title": "Prayagraj (Allahabad) Excursion",
            "activities": [
                "After breakfast, proceed to Prayagraj (Allahabad).",
                "Sightseeing",
                "🌊 Holy Bath at Triveni Sangam",
                "🏛️ Anand Bhavan",
                "Return to Varanasi.",
                "🏨 Overnight Stay in Varanasi"
            ]
        },
        {
            "day": "Day 05",
            "title": "Varanasi → Gaya",
            "activities": [
                "Morning Temple Visits",
                "🛕 Kala Bhairava Temple",
                "🛕 Kaudi Mata Temple",
                "Proceed to Gaya.",
                "🏨 Overnight Stay in Gaya"
            ]
        },
        {
            "day": "Day 06",
            "title": "Gaya",
            "activities": [
                "Morning Rituals",
                "🙏 Perform Pinda Daan / Shraddham (Optional)",
                "Dress Code: Ladies – Saree | Gents – Dhoti",
                "Free time for religious activities.",
                "🏨 Overnight Stay in Gaya"
            ]
        },
        {
            "day": "Day 07",
            "title": "Gaya → Chennai",
            "activities": [
                "Transfer to Gaya Railway Station.",
                "🚆 Board Chennai Express in the morning.",
                "Overnight Train Journey"
            ]
        },
        {
            "day": "Day 08",
            "title": "Arrival at Chennai",
            "activities": [
                "🚆 Arrival at Chennai Egmore Railway Station.",
                "Tour concludes with divine blessings and cherished memories."
            ]
        }
    ],
    "inclusions": [
        "Train Journey (As per Package Category)",
        "Non-A/C Vehicle for Local Transfers & Sightseeing",
        "Hotel Accommodation as per Itinerary",
        "Sightseeing as per Itinerary",
        "English, Hindi & Tamil Tour Assistance"
    ],
    "exclusions": [
        "❌ Food & Beverages",
        "❌ Pinda Daan, Shraddham & Tharpanam Charges",
        "❌ Temple Special Darshan Tickets",
        "❌ Entry Tickets (if applicable)",
        "❌ Personal Expenses",
        "❌ Laundry & Telephone Charges",
        "❌ Travel Insurance",
        "❌ Tips & Porter Charges",
        "❌ Mineral Water",
        "❌ Anything Not Mentioned in the Package Includes"
    ],
    "highlights": [
        "8 Days / 7 Nights Pilgrimage Tour",
        "Train Journey from Chennai",
        "Kashi Vishwanath Temple Darshan",
        "Kashi Vishalakshi & Annapoorani Temple",
        "Evening Ganga Aarti",
        "Holy Ganga Snan",
        "Prayagraj (Allahabad) Triveni Sangam",
        "Anand Bhavan Visit",
        "Kala Bhairava Temple",
        "Kaudi Mata Temple",
        "Gaya Pinda Daan & Shraddham (Optional)",
        "Tamil, English & Hindi Tour Assistance",
        "Budget-Friendly Pilgrimage Package"
    ],
    "keywords": "Chennai to Kasi Train Tour Package, Kasi Train Package from Chennai, Varanasi Train Tour, Gaya Pinda Daan Tour, Prayagraj Triveni Sangam Tour, Chennai to Kashi Vishwanath Tour, Kasi Pilgrimage by Train, Budget Kasi Tour Package, Best Kasi Train Package, Logaa Holidays.",
    "id": "2006"
},
  '2007': {
    "title": "Madurai to Kasi Tour Package | 3 Days / 2 Nights Flight Package",
    "image": "/assets/varanasi/cards/kasi8.png",
    "heroImage": "/assets/varanasi/hero/kasibanner8.png",
    "overview": {
        "duration": "3 Days / 2 Nights",
        "destination": "Varanasi",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "23,500",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai → Varanasi (Kasi)",
            "activities": [
                "✈️ Departure from Madurai Airport",
                "🛬 Arrival at Varanasi Airport",
                "🚗 Transfer to Hotel & Check-in",
                "Evening Spiritual Experience",
                "🚤 Boat Ride on the Holy River Ganga",
                "🔥 Witness the Grand Ganga Aarti",
                "⚱️ Manikarnika Ghat",
                "⚱️ Harishchandra Ghat",
                "🌙 Sayana Aarti at Shri Kashi Vishwanath Temple",
                "🏨 Overnight Stay in Varanasi"
            ]
        },
        {
            "day": "Day 02",
            "title": "Kashi Temple Darshan",
            "activities": [
                "Early Morning",
                "🌊 Holy Bath in the River Ganga",
                "🙏 Perform Tharpanam (Optional)",
                "Temple Visits",
                "🛕 Shri Kashi Vishwanath Temple",
                "🛕 Kashi Vishalakshi Amman Temple",
                "🛕 Annapoorani Temple",
                "Free time for religious activities.",
                "🏨 Overnight Stay in Varanasi"
            ]
        },
        {
            "day": "Day 03",
            "title": "Varanasi → Madurai",
            "activities": [
                "Breakfast at Hotel",
                "Morning Temple Visit",
                "🛕 Kala Bhairava Temple",
                "Free Time",
                "🛍️ Shopping for Banarasi Silk Sarees, Rudraksha Malas, Brass Idols & Religious Souvenirs",
                "Check-out from the hotel.",
                "🚗 Transfer to Varanasi Airport.",
                "✈️ Return Flight to Madurai Airport."
            ]
        }
    ],
    "inclusions": [
        "Airport Pickup & Drop",
        "Private A/C Vehicle for Transfers & Sightseeing",
        "2 Nights A/C Hotel Accommodation",
        "Complimentary Breakfast",
        "Sightseeing as per Itinerary",
        "Ganga Aarti Boat Ride",
        "English, Hindi & Tamil Tour Assistance"
    ],
    "exclusions": [
        "❌ Airfare (unless specifically included in the selected package)",
        "❌ Lunch & Dinner",
        "❌ Temple Special Darshan Tickets",
        "❌ Tharpanam & Pooja Charges",
        "❌ Entry Tickets (if applicable)",
        "❌ Personal Expenses",
        "❌ Laundry & Telephone Charges",
        "❌ Travel Insurance",
        "❌ Tips & Porter Charges",
        "❌ Mineral Water",
        "❌ Anything Not Mentioned in the Package Includes"
    ],
    "highlights": [
        "3 Days / 2 Nights Kasi Flight Package",
        "Flight from Madurai to Varanasi",
        "2 Nights Hotel Accommodation in Varanasi",
        "Kashi Vishwanath Temple Darshan",
        "Kashi Vishalakshi Temple",
        "Annapoorani Temple",
        "Evening Ganga Aarti with Boat Ride",
        "Manikarnika Ghat & Harishchandra Ghat",
        "Holy Ganga Snan & Tharpanam",
        "Kala Bhairava Temple Darshan",
        "Airport Transfers & Local Sightseeing",
        "Tamil, English & Hindi Tour Assistance"
    ],
    "keywords": "Madurai to Kasi Tour Package, Madurai to Varanasi Flight Package, Kashi Vishwanath Tour from Madurai, Kasi Yatra Package from Madurai, Varanasi Pilgrimage Tour, Ganga Aarti Tour, Kashi Temple Tour, Madurai to Kashi Darshan Package, Best Kasi Tour Package from Madurai, Logaa Holidays.",
    "id": "2007"
},
  '2008': {
    "title": "Madurai to Kasi, Gaya & Prayagraj Tour Package | 5 Days / 4 Nights Flight Package",
    "image": "/assets/madurai 63 package/Madurai to Kasi, Gaya & Prayagraj Tour Package  5 Days  4 Nights Flight Package -card.png",
    "heroImage": "/assets/varanasi/hero/kasibanner9.png",
    "overview": {
        "duration": "5 Days / 4 Nights",
        "destination": "Varanasi",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "34,500",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai → Varanasi (Kasi)",
            "activities": [
                "✈️ Departure from Madurai Airport",
                "🛬 Arrival at Varanasi Airport",
                "🚗 Transfer to Hotel & Check-in",
                "Temple Darshan",
                "🛕 Shri Kashi Vishwanath Temple",
                "🛕 Kashi Vishalakshi Amman Temple",
                "🛕 Annapoorani Temple",
                "Evening Spiritual Experience",
                "🚤 Boat Ride on the Holy River Ganga",
                "🔥 Witness the Grand Ganga Aarti",
                "⚱️ Manikarnika Ghat",
                "⚱️ Harishchandra Ghat",
                "🌙 Sayana Aarti at Shri Kashi Vishwanath Temple",
                "🏨 Overnight Stay in Varanasi"
            ]
        },
        {
            "day": "Day 02",
            "title": "Varanasi → Gaya",
            "activities": [
                "Early Morning",
                "🌊 Holy Bath in the River Ganga",
                "🙏 Perform Tharpanam (Optional)",
                "Free time for religious activities and shopping.",
                "After lunch, proceed to Gaya.",
                "🏨 Overnight Stay in Gaya"
            ]
        },
        {
            "day": "Day 03",
            "title": "Gaya → Bodh Gaya → Varanasi",
            "activities": [
                "Ancestral Rituals",
                "🙏 Perform Pinda Daan / Shraddham (Optional)",
                "Dress Code: Ladies – Saree | Gents – Dhoti",
                "Gaya Sightseeing",
                "🛕 Vishnupad Temple",
                "🌳 Akshayavat (Sacred Banyan Tree)",
                "Bodh Gaya Sightseeing",
                "🛕 Mahabodhi Temple",
                "🌳 Sacred Bodhi Tree",
                "Proceed back to Varanasi.",
                "🏨 Overnight Stay in Varanasi"
            ]
        },
        {
            "day": "Day 04",
            "title": "Varanasi → Prayagraj (Allahabad) → Varanasi",
            "activities": [
                "Breakfast at Hotel",
                "Proceed to Prayagraj (Allahabad).",
                "Prayagraj Sightseeing",
                "🌊 Holy Bath at Triveni Sangam",
                "🙏 Veni Pooja / Dampathi Pooja (Optional)",
                "🛕 Sri Sayana Hanuman Temple",
                "Return to Varanasi.",
                "🏨 Overnight Stay in Varanasi"
            ]
        },
        {
            "day": "Day 05",
            "title": "Varanasi → Madurai",
            "activities": [
                "Breakfast at Hotel",
                "Morning Temple Visit",
                "🛕 Kala Bhairava Temple",
                "Free Time",
                "🛍️ Shopping for Banarasi Silk Sarees",
                "📿 Rudraksha Malas",
                "🪔 Brass Idols & Religious Articles",
                "Check-out from the hotel.",
                "🚗 Transfer to Varanasi Airport.",
                "✈️ Return Flight to Madurai Airport."
            ]
        }
    ],
    "inclusions": [
        "Airport Pickup & Drop",
        "Private A/C Vehicle for Transfers & Sightseeing",
        "3 Nights Hotel Accommodation in Varanasi",
        "1 Night Hotel Accommodation in Gaya",
        "Complimentary Breakfast",
        "Sightseeing as per Itinerary",
        "Ganga Aarti Boat Ride",
        "English, Hindi & Tamil Tour Assistance"
    ],
    "exclusions": [
        "❌ Airfare (unless specifically included in the selected package)",
        "❌ Pinda Daan, Shraddham & Tharpanam Charges",
        "❌ Veni Pooja / Dampathi Pooja Charges",
        "❌ Temple Special Darshan Tickets",
        "❌ Lunch & Dinner",
        "❌ Entry Tickets (if applicable)",
        "❌ Personal Expenses",
        "❌ Laundry & Telephone Charges",
        "❌ Travel Insurance",
        "❌ Tips & Porter Charges",
        "❌ Mineral Water",
        "❌ Anything Not Mentioned in the Package Includes"
    ],
    "highlights": [
        "5 Days / 4 Nights Spiritual Pilgrimage",
        "Flight from Madurai to Varanasi",
        "Kashi Vishwanath Temple Darshan",
        "Kashi Vishalakshi & Annapoorani Temple",
        "Evening Ganga Aarti with Boat Ride",
        "Holy Ganga Snan & Tharpanam",
        "Gaya Pinda Daan & Shraddham (Optional)",
        "Vishnupad Temple",
        "Akshayavat (Sacred Banyan Tree)",
        "Bodh Gaya Mahabodhi Temple",
        "Triveni Sangam Holy Bath",
        "Veni Pooja / Dampathi Pooja (Optional)",
        "Kala Bhairava Temple Darshan",
        "Airport Transfers & Local Sightseeing",
        "Tamil, English & Hindi Tour Assistance"
    ],
    "keywords": "Madurai to Kasi Gaya Tour Package, Madurai to Varanasi Flight Package, Gaya Pinda Daan Tour, Prayagraj Triveni Sangam Tour, Kashi Vishwanath Darshan Package, Bodh Gaya Tour, Kasi Yatra from Madurai, Madurai to Gaya Tour Package, Best Kasi Gaya Flight Package, Logaa Holidays.",
    "id": "2008"
},
  '2009': {
    "title": "Madurai to Kasi, Gaya, Prayagraj & Ayodhya Tour Package | 6 Days / 5 Nights Flight Package",
    "image": "/assets/varanasi/cards/kasi10.png",
    "heroImage": "/assets/varanasi/hero/kasibanner10.png",
    "overview": {
        "duration": "6 Days / 5 Nights",
        "destination": "Varanasi",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "39,500",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai → Varanasi → Ayodhya",
            "activities": [
                "✈️ Departure from Madurai Airport",
                "🛬 Arrival at Varanasi Airport",
                "🚗 Drive to Ayodhya",
                "Check-in at the hotel",
                "Ayodhya Sightseeing",
                "🛕 Shri Ram Janmabhoomi Temple",
                "🛕 Hanuman Garhi Temple",
                "🏨 Overnight Stay in Ayodhya"
            ]
        },
        {
            "day": "Day 02",
            "title": "Ayodhya → Varanasi (Kasi)",
            "activities": [
                "Breakfast at Hotel",
                "Proceed to Varanasi (Kasi).",
                "Check-in at the hotel.",
                "Temple Darshan",
                "🛕 Shri Kashi Vishwanath Temple",
                "🛕 Kashi Vishalakshi Amman Temple",
                "🛕 Annapoorani Temple",
                "Evening Spiritual Experience",
                "🚤 Boat Ride on the Holy River Ganga",
                "🔥 Witness the Grand Ganga Aarti",
                "⚱️ Manikarnika Ghat",
                "⚱️ Harishchandra Ghat",
                "🌙 Sayana Aarti at Shri Kashi Vishwanath Temple",
                "🏨 Overnight Stay in Varanasi"
            ]
        },
        {
            "day": "Day 03",
            "title": "Varanasi → Gaya",
            "activities": [
                "Early Morning",
                "🌊 Holy Bath in the River Ganga",
                "🙏 Perform Tharpanam (Optional)",
                "Free time for shopping and religious activities.",
                "Proceed to Gaya / Bodh Gaya.",
                "🏨 Overnight Stay in Gaya"
            ]
        },
        {
            "day": "Day 04",
            "title": "Gaya → Bodh Gaya → Varanasi",
            "activities": [
                "Morning Rituals",
                "🙏 Perform Pinda Daan / Shraddham (Optional)",
                "Dress Code: Ladies – Saree | Gents – Dhoti",
                "Gaya Sightseeing",
                "🛕 Vishnupad Temple",
                "🌳 Akshayavat (Vat Vriksha)",
                "Bodh Gaya Sightseeing",
                "🛕 Mahabodhi Temple",
                "🌳 Sacred Bodhi Tree",
                "Proceed back to Varanasi.",
                "🏨 Overnight Stay in Varanasi"
            ]
        },
        {
            "day": "Day 05",
            "title": "Varanasi → Prayagraj (Allahabad) → Varanasi",
            "activities": [
                "Breakfast at Hotel",
                "Proceed to Prayagraj (Allahabad).",
                "Prayagraj Sightseeing",
                "🌊 Holy Bath at Triveni Sangam",
                "🙏 Veni Pooja / Dampathi Pooja (Optional)",
                "🛕 Sri Sayana Hanuman Temple",
                "Return to Varanasi.",
                "🏨 Overnight Stay in Varanasi"
            ]
        },
        {
            "day": "Day 06",
            "title": "Varanasi → Madurai",
            "activities": [
                "Breakfast at Hotel",
                "Morning Temple Visit",
                "🛕 Kala Bhairava Temple",
                "Shopping Time",
                "🛍️ Banarasi Silk Sarees",
                "📿 Rudraksha Malas",
                "🪔 Brass Idols & Religious Articles",
                "Check-out from the hotel.",
                "🚗 Transfer to Varanasi Airport.",
                "✈️ Return Flight to Madurai Airport."
            ]
        }
    ],
    "inclusions": [
        "Airport Pickup & Drop",
        "Private A/C Vehicle for Entire Tour",
        "3 Nights Accommodation in Varanasi",
        "1 Night Accommodation in Ayodhya",
        "1 Night Accommodation in Gaya",
        "Complimentary Breakfast",
        "Sightseeing as per Itinerary",
        "Ganga Aarti Boat Ride",
        "English, Hindi & Tamil Tour Assistance"
    ],
    "exclusions": [
        "❌ Airfare (unless specifically included in the selected package)",
        "❌ Pinda Daan, Shraddham & Tharpanam Charges",
        "❌ Veni Pooja / Dampathi Pooja Charges",
        "❌ Temple Special Darshan Tickets",
        "❌ Lunch & Dinner",
        "❌ Entry Tickets (if applicable)",
        "❌ Personal Expenses",
        "❌ Laundry & Telephone Charges",
        "❌ Travel Insurance",
        "❌ Tips & Porter Charges",
        "❌ Mineral Water",
        "❌ Anything Not Mentioned in the Package Includes"
    ],
    "highlights": [
        "6 Days / 5 Nights Spiritual Pilgrimage",
        "Flight from Madurai to Varanasi",
        "Ayodhya Ram Janmabhoomi Darshan",
        "Hanuman Garhi Temple",
        "Kashi Vishwanath Temple Darshan",
        "Kashi Vishalakshi & Annapoorani Temple",
        "Evening Ganga Aarti with Boat Ride",
        "Holy Ganga Snan & Tharpanam",
        "Gaya Pinda Daan & Shraddham (Optional)",
        "Vishnupad Temple",
        "Akshayavat (Sacred Banyan Tree)",
        "Bodh Gaya Mahabodhi Temple",
        "Triveni Sangam Holy Bath",
        "Veni Pooja / Dampathi Pooja (Optional)",
        "Kala Bhairava Temple Darshan",
        "Airport Transfers & Local Sightseeing",
        "Tamil, English & Hindi Tour Assistance"
    ],
    "keywords": "Madurai to Kasi Gaya Ayodhya Tour Package, Madurai to Varanasi Flight Package, Ayodhya Ram Mandir Tour, Gaya Pinda Daan Tour, Prayagraj Triveni Sangam Tour, Kashi Vishwanath Darshan Package, Bodh Gaya Tour, Kasi Yatra from Madurai, North India Pilgrimage Tour, Logaa Holidays.",
    "id": "2009"
},
  '2010': {
    "title": "Madurai to Shirdi Tour Package | 2 Days / 1 Night Flight Package",
    "image": "/assets/shiridi/cards/shirdi1.png",
    "heroImage": "/assets/shiridi/hero/shirdibanner1.png",
    "overview": {
        "duration": "2 Days / 1 Night",
        "destination": "Shirdi",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "16,500",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai → Shirdi",
            "activities": [
                "✈️ Departure from Madurai Airport",
                "🛬 Arrival at Shirdi Airport",
                "🚗 Transfer to Hotel & Check-in",
                "After refreshments, proceed for temple visit.",
                "Shirdi Sightseeing",
                "🛕 Shri Sai Baba Samadhi Mandir (VIP Darshan – Subject to Availability)",
                "🛕 Gurusthan",
                "🛕 Dwarkamai",
                "🏛️ Sai Baba Museum",
                "🛕 Chavadi",
                "🌳 Lendi Baug (Lendi Garden)",
                "🛕 Maruthi Temple",
                "🪔 Nandadeep",
                "🏨 Overnight Stay in Shirdi"
            ]
        },
        {
            "day": "Day 02",
            "title": "Shirdi → Madurai",
            "activities": [
                "Early Morning",
                "🙏 Kakad Aarti / Morning Darshan at Shri Sai Baba Temple",
                "Free Time",
                "🛍️ Shopping for Sai Baba Idols, Shawls, Prasad, Spiritual Books & Souvenirs",
                "En Route Visit",
                "🛕 Khandoba Temple",
                "Transfer to Shirdi Airport.",
                "✈️ Return Flight to Madurai Airport."
            ]
        }
    ],
    "inclusions": [
        "Airport Pickup & Drop",
        "Private A/C Vehicle for Transfers & Sightseeing",
        "1 Night A/C Hotel Accommodation",
        "Complimentary Breakfast",
        "Sightseeing as per Itinerary",
        "VIP Darshan Arrangement (Subject to Availability)",
        "English, Hindi & Tamil Tour Assistance"
    ],
    "exclusions": [
        "❌ Airfare (unless specifically included in the selected package)",
        "❌ Lunch & Dinner",
        "❌ Temple Donations & Special Poojas",
        "❌ Entry Tickets (if applicable)",
        "❌ Personal Expenses",
        "❌ Laundry & Telephone Charges",
        "❌ Travel Insurance",
        "❌ Tips & Porter Charges",
        "❌ Mineral Water",
        "❌ Anything Not Mentioned in the Package Includes"
    ],
    "highlights": [
        "2 Days / 1 Night Shirdi Pilgrimage",
        "Direct Flight from Madurai",
        "VIP Darshan of Shri Sai Baba Temple (Subject to Availability)",
        "Kakad Aarti / Morning Darshan",
        "Dwarkamai",
        "Gurusthan",
        "Chavadi",
        "Lendi Baug (Lendi Garden)",
        "Sai Baba Museum",
        "Maruthi Temple",
        "Nandadeep",
        "Khandoba Temple",
        "Airport Transfers & Local Sightseeing",
        "Tamil, English & Hindi Tour Assistance"
    ],
    "keywords": "Madurai to Shirdi Tour Package, Shirdi Flight Package from Madurai, Direct Flight to Shirdi, Sai Baba Darshan Tour, Shirdi VIP Darshan Package, Madurai to Shirdi Pilgrimage, Shirdi Temple Tour, Sai Baba Tour Package, Best Shirdi Tour from Madurai, Logaa Holidays.",
    "id": "2010"
},
  '2011': {
    "title": "Chennai to Shirdi Tour Package | Train + Flight | 4 Days / 3 Nights",
    "image": "/assets/shiridi/cards/chennaitoshirditrainflight4days.png",
    "heroImage": "/assets/shiridi/hero/chennaitoshirdiflighttrain4days.png",
    "overview": {
        "duration": "4 Days / 3 Nights",
        "destination": "Shirdi",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "10,500",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Chennai → Pune (Train Journey)",
            "activities": [
                "🚆 Board 11028 Mumbai Mail",
                "Departure from Chennai Central Railway Station at night.",
                "Overnight Train Journey"
            ]
        },
        {
            "day": "Day 02",
            "title": "Pune → Shirdi",
            "activities": [
                "🚆 Arrival at Pune Railway Station",
                "🚗 Transfer by Bus/Cab to Shirdi",
                "Early morning arrival at Shirdi.",
                "Check-in and refresh at the hotel."
            ]
        },
        {
            "day": "Day 03",
            "title": "Shirdi Sightseeing",
            "activities": [
                "Morning Darshan",
                "🛕 Shri Sai Baba Samadhi Mandir",
                "🛕 Gurusthan",
                "🛕 Dwarkamai",
                "🏛️ Sai Baba Museum",
                "🛕 Chavadi",
                "🌳 Lendi Baug (Lendi Garden)",
                "Free time for prayer and shopping.",
                "🏨 Overnight Stay in Shirdi"
            ]
        },
        {
            "day": "Day 04",
            "title": "Shirdi → Shani Shingnapur → Pune → Chennai",
            "activities": [
                "Early Morning",
                "🙏 Kakad Aarti / Morning Darshan at Shri Sai Baba Temple",
                "Proceed towards Pune.",
                "En Route Sightseeing",
                "🛕 Shani Shingnapur Temple",
                "🛕 Renuka Devi Temple",
                "🛕 Maha Ganapathi Temple",
                "Transfer to Pune Airport.",
                "✈️ Flight to Chennai.",
                "Tour concludes with the blessings of Shri Sai Baba."
            ]
        }
    ],
    "inclusions": [
        "Train Journey from Chennai to Pune (As per Package Category)",
        "Flight from Pune to Chennai (As per Package Category)",
        "Non-A/C Vehicle for Transfers & Sightseeing",
        "1 Night Non-A/C Hotel Accommodation",
        "Complimentary Breakfast",
        "Sightseeing as per Itinerary",
        "Special Darshan Arrangement (Subject to Availability)",
        "English, Hindi & Tamil Tour Assistance"
    ],
    "exclusions": [
        "❌ Lunch & Dinner",
        "❌ Temple Donations & Special Poojas",
        "❌ Entry Tickets (if applicable)",
        "❌ Personal Expenses",
        "❌ Laundry & Telephone Charges",
        "❌ Travel Insurance",
        "❌ Tips & Porter Charges",
        "❌ Mineral Water",
        "❌ Anything Not Mentioned in the Package Includes"
    ],
    "highlights": [
        "4 Days / 3 Nights Pilgrimage Tour",
        "Train Journey from Chennai to Pune",
        "Flight Return from Pune to Chennai",
        "Shri Sai Baba Temple Darshan",
        "Kakad Aarti (Morning Darshan)",
        "Gurusthan",
        "Dwarkamai",
        "Sai Baba Museum",
        "Chavadi",
        "Lendi Baug (Lendi Garden)",
        "Shani Shingnapur Temple",
        "Renuka Devi Temple",
        "Maha Ganapathi Temple",
        "Tamil, English & Hindi Tour Assistance"
    ],
    "keywords": "Chennai to Shirdi Tour Package, Shirdi Train and Flight Package, Chennai to Shirdi Pilgrimage Tour, Shani Shingnapur Tour Package, Pune Shirdi Tour, Sai Baba Darshan Package, Chennai to Shirdi Budget Tour, Shirdi Kakad Aarti Tour, Best Shirdi Tour Package from Chennai, Logaa Holidays.",
    "id": "2011"
},
  '2012': {
    "title": "Chennai to Shirdi One Day Flight Tour Package",
    "image": "/assets/shiridi/cards/chennaitoshirdi1dayflightpackage.png",
    "heroImage": "/assets/shiridi/hero/chennaiatoshirdi1dayflight.png",
    "overview": {
        "duration": "One Day",
        "destination": "Shirdi",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "10,500",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "One Day Pilgrimage",
            "activities": [
                "Chennai → Pune → Shirdi",
                "✈️ Early morning departure from Chennai Airport",
                "🛬 Arrival at Pune Airport",
                "🚗 Transfer by A/C Cab to Shirdi",
                "Shirdi Temple Visit",
                "🛕 Shri Sai Baba Samadhi Mandir (VIP Darshan – Subject to Availability)",
                "🛕 Gurusthan",
                "🛕 Dwarkamai",
                "🏛️ Sai Baba Museum",
                "🛕 Chavadi",
                "🌳 Lendi Baug (Lendi Garden)",
                "Return Journey",
                "Depart from Shirdi in the evening.",
                "En Route Visit (Time Permitting)",
                "🛕 Maha Ganapathi Temple",
                "Proceed to Pune Airport.",
                "✈️ Return Flight to Chennai.",
                "Tour concludes with the blessings of Shri Sai Baba."
            ]
        }
    ],
    "inclusions": [
        "Flight Journey (As per Selected Package)",
        "A/C Cab for Airport Transfers & Sightseeing",
        "VIP Darshan Arrangement (Subject to Availability)",
        "Sightseeing as per Itinerary"
    ],
    "exclusions": [
        "❌ Food & Beverages",
        "❌ Temple Donations & Special Poojas",
        "❌ Personal Expenses",
        "❌ Laundry & Telephone Charges",
        "❌ Travel Insurance",
        "❌ Tips & Porter Charges",
        "❌ Mineral Water",
        "❌ Entry Tickets (if applicable)",
        "❌ Anything Not Mentioned in the Package Includes"
    ],
    "highlights": [
        "One Day Shirdi Pilgrimage",
        "Flight from Chennai to Pune & Return",
        "Comfortable A/C Cab Transfers",
        "VIP Darshan at Shri Sai Baba Temple (Subject to Availability)",
        "Gurusthan",
        "Dwarkamai",
        "Sai Baba Museum",
        "Chavadi",
        "Lendi Baug (Lendi Garden)",
        "Maha Ganapathi Temple (Time Permitting)",
        "Same Day Return to Chennai"
    ],
    "keywords": "Chennai to Shirdi One Day Tour, Same Day Shirdi Flight Package, Chennai to Shirdi Flight Tour, Sai Baba VIP Darshan Package, Pune to Shirdi Tour, One Day Shirdi Pilgrimage, Shirdi Same Day Return Package, Chennai to Sai Baba Temple Tour, Best Shirdi Flight Package from Chennai, Logaa Holidays.",
    "id": "2012"
},
  '2013': {
    "title": "Chennai to Shirdi Tour Package via Pune | 2 Days / 1 Night Flight Package",
    "image": "/assets/shiridi/cards/chennaitoshirdiviapuneflight3days.png",
    "heroImage": "/assets/shiridi/hero/chennaitoshirdiviapune2day.png",
    "overview": {
        "duration": "2 Days / 1 Night",
        "destination": "Shirdi",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "12,500",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Chennai → Pune → Shirdi",
            "activities": [
                "✈️ Departure from Chennai Airport",
                "🛬 Arrival at Pune Airport",
                "🚗 Transfer by A/C Bus/Cab to Shirdi",
                "Check-in at the hotel and refresh.",
                "Evening Darshan",
                "🛕 Shri Sai Baba Samadhi Mandir (VIP Darshan – Subject to Availability)",
                "🛕 Gurusthan",
                "🛕 Dwarkamai",
                "🏛️ Sai Baba Museum",
                "🛕 Chavadi",
                "🌳 Lendi Baug (Lendi Garden)",
                "🏨 Overnight Stay in Shirdi"
            ]
        },
        {
            "day": "Day 02",
            "title": "Shirdi → Shani Shingnapur → Pune → Chennai",
            "activities": [
                "Early Morning",
                "🙏 Kakad Aarti / Morning Darshan at Shri Sai Baba Temple",
                "After breakfast, proceed towards Pune.",
                "En Route Sightseeing",
                "🛕 Shani Shingnapur Temple",
                "🛕 Renuka Devi Temple",
                "🛕 Maha Ganapathi Temple",
                "Transfer to Pune Airport.",
                "✈️ Return Flight to Chennai.",
                "Tour concludes with the blessings of Shri Sai Baba."
            ]
        }
    ],
    "inclusions": [
        "Flight Journey (As per Selected Package)",
        "Airport Pickup & Drop",
        "A/C Bus/Cab for Transfers & Sightseeing",
        "1 Night A/C Hotel Accommodation",
        "Complimentary Breakfast",
        "Sightseeing as per Itinerary",
        "VIP Darshan Arrangement (Subject to Availability)",
        "English, Hindi & Tamil Tour Assistance"
    ],
    "exclusions": [
        "❌ Lunch & Dinner",
        "❌ Temple Donations & Special Poojas",
        "❌ Entry Tickets (if applicable)",
        "❌ Personal Expenses",
        "❌ Laundry & Telephone Charges",
        "❌ Travel Insurance",
        "❌ Tips & Porter Charges",
        "❌ Mineral Water",
        "❌ Anything Not Mentioned in the Package Includes"
    ],
    "highlights": [
        "2 Days / 1 Night Pilgrimage Tour",
        "Flight from Chennai to Pune & Return",
        "Comfortable A/C Vehicle Transfers",
        "VIP Darshan at Shri Sai Baba Temple (Subject to Availability)",
        "Gurusthan",
        "Dwarkamai",
        "Sai Baba Museum",
        "Chavadi",
        "Lendi Baug (Lendi Garden)",
        "Kakad Aarti / Morning Darshan",
        "Shani Shingnapur Temple",
        "Renuka Devi Temple",
        "Maha Ganapathi Temple",
        "Tamil, English & Hindi Tour Assistance"
    ],
    "keywords": "Chennai to Shirdi Flight Package, Shirdi Tour via Pune, Chennai to Sai Baba Temple Tour, Shani Shingnapur Tour Package, Pune to Shirdi Tour, Shirdi VIP Darshan Package, Kakad Aarti Tour, Chennai Shirdi Pilgrimage Package, Best Shirdi Flight Package from Chennai, Logaa Holidays.",
    "id": "2013"
},
  '2014': {
    "title": "Chennai to Shirdi Train Tour Package | 6 Days / 5 Nights Pilgrimage",
    "image": "/assets/shiridi/cards/chennaitoshirdi6daytrain.png",
    "heroImage": "/assets/shiridi/hero/chennaitoshirdi6day.png",
    "overview": {
        "duration": "6 Days / 5 Nights",
        "destination": "Shirdi",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "5,500",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Chennai → Pune",
            "activities": [
                "🚆 Board 11028 Mumbai Mail",
                "Departure from Chennai Central Railway Station.",
                "Overnight Train Journey"
            ]
        },
        {
            "day": "Day 02",
            "title": "Pune → Devgad",
            "activities": [
                "🚆 Arrival at Pune Railway Station",
                "🚗 Proceed to Devgad (Dattatreya Temple)",
                "Overnight Journey"
            ]
        },
        {
            "day": "Day 03",
            "title": "Devgad → Shani Shingnapur → Shirdi",
            "activities": [
                "Early morning arrival at Devgad.",
                "After freshening up, visit:",
                "🛕 Shri Dattatreya Temple",
                "🛕 Shani Shingnapur Temple",
                "🛕 Renuka Devi Temple",
                "Proceed to Shirdi.",
                "Check-in and refresh at the hotel.",
                "Evening Darshan",
                "🛕 Shri Sai Baba Samadhi Mandir",
                "🛕 Gurusthan",
                "🏛️ Sai Baba Museum",
                "🌳 Lendi Baug (Lendi Garden)",
                "🏨 Overnight Stay in Shirdi"
            ]
        },
        {
            "day": "Day 04",
            "title": "Shirdi → Pune",
            "activities": [
                "Early Morning",
                "🙏 Kakad Aarti / Morning Darshan at Shri Sai Baba Temple",
                "Visit:",
                "🛕 Dwarkamai",
                "🛕 Chavadi",
                "After lunch, proceed towards Pune.",
                "En Route Visit",
                "🛕 Maha Ganapathi Temple",
                "Reach Pune Railway Station."
            ]
        },
        {
            "day": "Day 05",
            "title": "Pune → Chennai",
            "activities": [
                "🚆 Board the train from Pune Railway Station.",
                "Overnight Train Journey"
            ]
        },
        {
            "day": "Day 06",
            "title": "Arrival at Chennai",
            "activities": [
                "🚆 Arrive at Chennai Central Railway Station.",
                "Tour concludes with the blessings of Shri Sai Baba."
            ]
        }
    ],
    "inclusions": [
        "Train Journey (As per Package Category)",
        "Non-A/C Vehicle for Transfers & Sightseeing",
        "1 Night Non-A/C Hotel Accommodation",
        "Complimentary Breakfast",
        "Sightseeing as per Itinerary",
        "Special Darshan Arrangement (Subject to Availability)",
        "English, Hindi & Tamil Tour Assistance"
    ],
    "exclusions": [
        "❌ Lunch & Dinner",
        "❌ Temple Donations & Special Poojas",
        "❌ Entry Tickets (if applicable)",
        "❌ Personal Expenses",
        "❌ Laundry & Telephone Charges",
        "❌ Travel Insurance",
        "❌ Tips & Porter Charges",
        "❌ Mineral Water",
        "❌ Anything Not Mentioned in the Package Includes"
    ],
    "highlights": [
        "6 Days / 5 Nights Pilgrimage Tour",
        "Train Journey from Chennai to Pune & Return",
        "Shri Sai Baba Samadhi Mandir Darshan",
        "Kakad Aarti (Morning Darshan)",
        "Gurusthan",
        "Dwarkamai",
        "Chavadi",
        "Sai Baba Museum",
        "Lendi Baug (Lendi Garden)",
        "Devgad Dattatreya Temple",
        "Shani Shingnapur Temple",
        "Renuka Devi Temple",
        "Maha Ganapathi Temple",
        "Tamil, English & Hindi Tour Assistance"
    ],
    "keywords": "Chennai to Shirdi Train Package, Shirdi Train Tour from Chennai, Sai Baba Darshan Package, Shani Shingnapur Tour, Devgad Dattatreya Temple Tour, Budget Shirdi Tour Package, Chennai to Shirdi Pilgrimage, Kakad Aarti Tour, Best Shirdi Train Package, Logaa Holidays.",
    "id": "2014"
},
  '2015': {
    "title": "Chennai to Shirdi & Mantralayam Train Tour Package | 7 Days / 6 Nights Pilgrimage",
    "image": "/assets/shiridi/cards/chennaishirdimantralayam7days.png",
    "heroImage": "/assets/shiridi/hero/chennaitoshirdimantralayam7days.png",
    "overview": {
        "duration": "7 Days / 6 Nights",
        "destination": "Shirdi",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "7,500",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Chennai → Pune",
            "activities": [
                "🚆 Board 11028 Mumbai Mail from Chennai Central Railway Station.",
                "Overnight Train Journey"
            ]
        },
        {
            "day": "Day 02",
            "title": "Pune → Devgad",
            "activities": [
                "🚆 Arrival at Pune Railway Station",
                "🚗 Proceed to Devgad",
                "Overnight Journey"
            ]
        },
        {
            "day": "Day 03",
            "title": "Devgad → Shani Shingnapur → Shirdi",
            "activities": [
                "Early morning arrival at Devgad.",
                "After freshening up, visit:",
                "🛕 Shri Dattatreya Temple",
                "🛕 Shani Shingnapur Temple",
                "🛕 Renuka Devi Temple",
                "Proceed to Shirdi.",
                "Check-in at the hotel.",
                "Evening Darshan",
                "🛕 Shri Sai Baba Samadhi Mandir",
                "🛕 Gurusthan",
                "🏛️ Sai Baba Museum",
                "🌳 Lendi Baug (Lendi Garden)",
                "🏨 Overnight Stay in Shirdi"
            ]
        },
        {
            "day": "Day 04",
            "title": "Shirdi → Pune",
            "activities": [
                "Early Morning",
                "🙏 Kakad Aarti / Morning Darshan at Shri Sai Baba Temple",
                "Visit:",
                "🛕 Dwarkamai",
                "🛕 Chavadi",
                "Proceed towards Pune.",
                "En Route Visit",
                "🛕 Maha Ganapathi Temple",
                "Reach Pune Railway Station."
            ]
        },
        {
            "day": "Day 05",
            "title": "Pune → Mantralayam",
            "activities": [
                "🚆 Early morning departure from Pune Railway Station",
                "🚆 Arrival at Mantralayam in the afternoon",
                "Free time for religious activities.",
                "🏨 Overnight Stay in Mantralayam"
            ]
        },
        {
            "day": "Day 06",
            "title": "Mantralayam",
            "activities": [
                "Morning Darshan",
                "🛕 Sri Raghavendra Swamy Mutt",
                "Spend time for prayers and spiritual activities.",
                "In the evening, board the train to Chennai.",
                "Overnight Train Journey"
            ]
        },
        {
            "day": "Day 07",
            "title": "Arrival at Chennai",
            "activities": [
                "🚆 Arrival at Chennai Central Railway Station.",
                "Tour concludes with divine blessings and cherished memories."
            ]
        }
    ],
    "inclusions": [
        "Train Journey (As per Package Category)",
        "Non-A/C Vehicle for Transfers & Sightseeing",
        "1 Night Stay in Shirdi",
        "1 Night Stay in Mantralayam",
        "Complimentary Breakfast",
        "Sightseeing as per Itinerary",
        "Special Darshan Arrangement (Subject to Availability)",
        "English, Hindi & Tamil Tour Assistance"
    ],
    "exclusions": [
        "❌ Lunch & Dinner",
        "❌ Temple Donations & Special Poojas",
        "❌ Entry Tickets (if applicable)",
        "❌ Personal Expenses",
        "❌ Laundry & Telephone Charges",
        "❌ Travel Insurance",
        "❌ Tips & Porter Charges",
        "❌ Mineral Water",
        "❌ Anything Not Mentioned in the Package Includes"
    ],
    "highlights": [
        "7 Days / 6 Nights Pilgrimage Tour",
        "Train Journey from Chennai",
        "Shri Sai Baba Samadhi Mandir Darshan",
        "Kakad Aarti (Morning Darshan)",
        "Gurusthan",
        "Dwarkamai",
        "Chavadi",
        "Sai Baba Museum",
        "Lendi Baug (Lendi Garden)",
        "Devgad Dattatreya Temple",
        "Shani Shingnapur Temple",
        "Renuka Devi Temple",
        "Maha Ganapathi Temple",
        "Sri Raghavendra Swamy Mutt, Mantralayam",
        "Tamil, English & Hindi Tour Assistance"
    ],
    "keywords": "Chennai to Shirdi Train Package, Shirdi and Mantralayam Tour Package, Chennai to Mantralayam Train Tour, Sai Baba Darshan Package, Sri Raghavendra Swamy Tour, Shani Shingnapur Tour, Devgad Dattatreya Temple Tour, Budget Pilgrimage Tour, Best Shirdi Mantralayam Package, Logaa Holidays.",
    "id": "2015"
},
  '2016': {
    "title": "Chennai to Shirdi, Pandharpur & Mantralayam Train Tour Package | 8 Days / 7 Nights",
    "image": "/assets/shiridi/cards/chennaishirdipandrpurmantralayam8days.png",
    "heroImage": "/assets/shiridi/hero/ChennaiShirdiPandharpur Mantralayam Train8 Days 7 Nights.png",
    "overview": {
        "duration": "8 Days / 7 Nights",
        "destination": "Shirdi",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "8,500",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Chennai → Pune",
            "activities": [
                "🚆 Board 11028 Mumbai Mail from Chennai Central Railway Station.",
                "Overnight Train Journey"
            ]
        },
        {
            "day": "Day 02",
            "title": "Pune → Devgad",
            "activities": [
                "🚆 Arrival at Pune Railway Station",
                "🚗 Proceed to Devgad",
                "Overnight Journey"
            ]
        },
        {
            "day": "Day 03",
            "title": "Devgad → Shani Shingnapur → Shirdi",
            "activities": [
                "After freshening up, visit:",
                "🛕 Shri Dattatreya Temple",
                "🛕 Shani Shingnapur Temple",
                "🛕 Renuka Devi Temple",
                "Proceed to Shirdi.",
                "Evening Darshan",
                "🛕 Shri Sai Baba Samadhi Mandir",
                "🛕 Gurusthan",
                "🏛️ Sai Baba Museum",
                "🌳 Lendi Baug (Lendi Garden)",
                "🏨 Overnight Stay in Shirdi"
            ]
        },
        {
            "day": "Day 04",
            "title": "Shirdi → Pune",
            "activities": [
                "Early Morning",
                "🙏 Kakad Aarti / Morning Darshan",
                "🛕 Dwarkamai",
                "🛕 Chavadi",
                "Proceed towards Pune.",
                "En Route Visit",
                "🛕 Maha Ganapathi Temple",
                "Reach Pune Railway Station."
            ]
        },
        {
            "day": "Day 05",
            "title": "Pune → Pandharpur",
            "activities": [
                "🚆 Early morning departure from Pune",
                "🚆 Arrival at Pandharpur",
                "Temple Visits",
                "🛕 Lord Panduranga Temple",
                "🛕 Kaikadi Maharaj Math",
                "🏨 Overnight Stay in Pandharpur"
            ]
        },
        {
            "day": "Day 06",
            "title": "Pandharpur → Akkalkot → Mantralayam",
            "activities": [
                "After breakfast, proceed to Akkalkot.",
                "Sightseeing",
                "🛕 Sri Swami Samarth Maharaj Temple",
                "🛕 Chiteeshwarar Temple",
                "Later proceed to Mantralayam.",
                "🏨 Overnight Stay in Mantralayam"
            ]
        },
        {
            "day": "Day 07",
            "title": "Mantralayam → Chennai",
            "activities": [
                "Morning",
                "🛕 Sri Raghavendra Swamy Mutt",
                "🙏 Free time for prayers and religious activities",
                "In the evening, board the train to Chennai.",
                "Overnight Train Journey"
            ]
        },
        {
            "day": "Day 08",
            "title": "Arrival at Chennai",
            "activities": [
                "🚆 Arrival at Chennai Central Railway Station.",
                "Tour concludes with divine blessings and unforgettable memories."
            ]
        }
    ],
    "inclusions": [
        "Train Journey (As per Package Category)",
        "Non-A/C Vehicle for Transfers & Sightseeing",
        "1 Night Stay in Shirdi",
        "1 Night Stay in Pandharpur",
        "1 Night Stay in Mantralayam",
        "Complimentary Breakfast",
        "Sightseeing as per Itinerary",
        "Special Darshan Arrangement (Subject to Availability)",
        "English, Hindi & Tamil Tour Assistance"
    ],
    "exclusions": [
        "❌ Lunch & Dinner",
        "❌ Temple Donations & Special Poojas",
        "❌ Entry Tickets (if applicable)",
        "❌ Personal Expenses",
        "❌ Laundry & Telephone Charges",
        "❌ Travel Insurance",
        "❌ Tips & Porter Charges",
        "❌ Mineral Water",
        "❌ Anything Not Mentioned in the Package Includes"
    ],
    "highlights": [
        "8 Days / 7 Nights Pilgrimage Tour",
        "Train Journey from Chennai",
        "Shri Sai Baba Samadhi Mandir, Shirdi",
        "Kakad Aarti (Morning Darshan)",
        "Gurusthan",
        "Dwarkamai",
        "Chavadi",
        "Sai Baba Museum",
        "Lendi Baug (Lendi Garden)",
        "Devgad Dattatreya Temple",
        "Shani Shingnapur Temple",
        "Renuka Devi Temple",
        "Maha Ganapathi Temple",
        "Lord Panduranga Temple, Pandharpur",
        "Kaikadi Maharaj Math",
        "Sri Swami Samarth Maharaj Temple, Akkalkot",
        "Chiteeshwarar Temple",
        "Sri Raghavendra Swamy Mutt, Mantralayam",
        "Tamil, English & Hindi Tour Assistance"
    ],
    "keywords": "Chennai to Shirdi Train Package, Shirdi Pandharpur Mantralayam Tour, Pandharpur Darshan Package, Akkalkot Swami Samarth Tour, Sri Raghavendra Swamy Tour, Shani Shingnapur Tour, Devgad Dattatreya Temple Tour, Chennai Pilgrimage Tour Package, Best Shirdi Pandharpur Train Package, Logaa Holidays.",
    "id": "2016"
},
  '2017': {
    "title": "Chennai to Mumbai & Shirdi Flight Tour Package | 2 Days / 1 Night",
    "image": "/assets/shiridi/cards/Chennai to Mumbai & Shirdi Flight Tour Package  2 Days  1 Night.png",
    "heroImage": "/assets/shiridi/hero/chennai to mumbai & shiridi.png",
    "overview": {
        "duration": "2 Days / 1 Night",
        "destination": "Shirdi",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "14,500",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Chennai → Mumbai → Shirdi",
            "activities": [
                "✈️ Departure from Chennai Airport",
                "🛬 Arrival at Mumbai Airport",
                "🚗 Transfer by A/C Bus/Cab",
                "Mumbai Temple Visits",
                "🛕 Siddhivinayak Temple",
                "🛕 Mahalakshmi Temple",
                "Proceed to Shirdi.",
                "Evening Darshan",
                "🛕 Shri Sai Baba Samadhi Mandir (VIP Darshan – Subject to Availability)",
                "🛕 Gurusthan",
                "🛕 Dwarkamai",
                "🏛️ Sai Baba Museum",
                "🛕 Chavadi",
                "🌳 Lendi Baug (Lendi Garden)",
                "🏨 Overnight Stay in Shirdi"
            ]
        },
        {
            "day": "Day 02",
            "title": "Shirdi → Shani Shingnapur → Pune → Chennai",
            "activities": [
                "Early Morning",
                "🙏 Kakad Aarti / Morning Darshan at Shri Sai Baba Temple",
                "After breakfast, proceed towards Pune.",
                "En Route Visits",
                "🛕 Shani Shingnapur Temple",
                "🛕 Maha Ganapathi Temple",
                "Transfer to Pune Airport.",
                "✈️ Return flight to Chennai.",
                "Tour concludes with divine blessings and cherished memories."
            ]
        }
    ],
    "inclusions": [
        "Flight from Chennai to Mumbai",
        "Flight from Pune to Chennai",
        "A/C Bus/Cab for Transfers & Sightseeing",
        "1 Night A/C Hotel Accommodation in Shirdi",
        "Complimentary Breakfast",
        "Sightseeing as per Itinerary",
        "Special Darshan Arrangement (Subject to Availability)",
        "English, Hindi & Tamil Tour Assistance"
    ],
    "exclusions": [
        "❌ Lunch & Dinner",
        "❌ Temple Donations & Special Poojas",
        "❌ Entry Tickets (if applicable)",
        "❌ Personal Expenses",
        "❌ Laundry & Telephone Charges",
        "❌ Travel Insurance",
        "❌ Tips & Porter Charges",
        "❌ Mineral Water",
        "❌ Anything Not Mentioned in the Package Includes"
    ],
    "highlights": [
        "2 Days / 1 Night Pilgrimage Tour",
        "Flight from Chennai to Mumbai",
        "Return Flight from Pune to Chennai",
        "Comfortable A/C Vehicle for Transfers",
        "Siddhivinayak Temple, Mumbai",
        "Mahalakshmi Temple, Mumbai",
        "Shri Sai Baba Samadhi Mandir, Shirdi",
        "VIP Darshan (Subject to Availability)",
        "Gurusthan",
        "Dwarkamai",
        "Sai Baba Museum",
        "Chavadi",
        "Lendi Baug (Lendi Garden)",
        "Kakad Aarti (Morning Darshan)",
        "Shani Shingnapur Temple",
        "Maha Ganapathi Temple",
        "Tamil, English & Hindi Tour Assistance"
    ],
    "keywords": "Chennai to Mumbai Shirdi Tour Package, Mumbai to Shirdi Flight Package, Siddhivinayak Temple Tour, Mahalakshmi Temple Mumbai Tour, Shirdi Sai Baba Darshan Package, Shani Shingnapur Tour, Chennai Pilgrimage Package, Pune to Chennai Flight Tour, Best Shirdi Package from Chennai, Logaa Holidays.",
    "id": "2017"
},
  '2018': {
    "title": "Chennai to Shirdi & Nashik Flight Tour Package | 3 Days / 2 Nights",
    "image": "/assets/shiridi/cards/Chennai to Shirdi & Nashik Flight Tour Package  3 Days  2 Nights.png",
    "heroImage": "/assets/shiridi/hero/chennai to shiridi & nashik 3day and 2 night.png",
    "overview": {
        "duration": "3 Days / 2 Nights",
        "destination": "Shirdi",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "16,500",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Chennai → Pune → Shirdi",
            "activities": [
                "✈️ Departure from Chennai Airport",
                "🛬 Arrival at Pune Airport",
                "🚗 Transfer by A/C Bus/Cab to Shirdi",
                "Check in to the hotel and refresh.",
                "Evening Darshan",
                "🛕 Shri Sai Baba Samadhi Mandir (VIP Darshan – Subject to Availability)",
                "🛕 Gurusthan",
                "🛕 Dwarkamai",
                "🏛️ Sai Baba Museum",
                "🛕 Chavadi",
                "🌳 Lendi Baug (Lendi Garden)",
                "🏨 Overnight Stay in Shirdi"
            ]
        },
        {
            "day": "Day 02",
            "title": "Shirdi → Nashik → Trimbakeshwar → Shirdi",
            "activities": [
                "After breakfast, proceed to Nashik.",
                "Temple & Sightseeing",
                "🛕 Trimbakeshwar Jyotirlinga Temple",
                "🛕 Panchavati",
                "🛕 Kapaleshwar Temple",
                "🛕 Kalaram Temple",
                "🛕 Goraram Temple",
                "🛕 Sita Gufa",
                "Return to Shirdi in the evening.",
                "🏨 Overnight Stay in Shirdi"
            ]
        },
        {
            "day": "Day 03",
            "title": "Shirdi → Shani Shingnapur → Pune → Chennai",
            "activities": [
                "Early Morning",
                "🙏 Kakad Aarti / Morning Darshan at Shri Sai Baba Temple",
                "After breakfast, proceed towards Pune.",
                "En Route Visits",
                "🛕 Shani Shingnapur Temple",
                "🛕 Renuka Devi Temple",
                "🛕 Maha Ganapathi Temple",
                "Transfer to Pune Airport.",
                "✈️ Return flight to Chennai.",
                "Tour concludes with divine blessings and unforgettable memories."
            ]
        }
    ],
    "inclusions": [
        "Flight Journey (As per Selected Package)",
        "Airport Pickup & Drop",
        "A/C Vehicle for Transfers & Sightseeing",
        "2 Nights A/C Hotel Accommodation in Shirdi",
        "Complimentary Breakfast",
        "Sightseeing as per Itinerary",
        "Special/VIP Darshan Arrangement (Subject to Availability)",
        "English, Hindi & Tamil Tour Assistance"
    ],
    "exclusions": [
        "❌ Lunch & Dinner",
        "❌ Temple Donations & Special Poojas",
        "❌ Entry Tickets (if applicable)",
        "❌ Personal Expenses",
        "❌ Laundry & Telephone Charges",
        "❌ Travel Insurance",
        "❌ Tips & Porter Charges",
        "❌ Mineral Water",
        "❌ Anything Not Mentioned in the Package Includes"
    ],
    "highlights": [
        "3 Days / 2 Nights Pilgrimage Tour",
        "Flight from Chennai to Pune & Return",
        "Comfortable A/C Vehicle Transfers",
        "Shri Sai Baba Samadhi Mandir, Shirdi",
        "VIP Darshan (Subject to Availability)",
        "Gurusthan",
        "Dwarkamai",
        "Sai Baba Museum",
        "Chavadi",
        "Lendi Baug (Lendi Garden)",
        "Trimbakeshwar Jyotirlinga Temple",
        "Panchavati",
        "Kapaleshwar Temple",
        "Kalaram Temple",
        "Goraram Temple",
        "Sita Gufa",
        "Shani Shingnapur Temple",
        "Renuka Devi Temple",
        "Maha Ganapathi Temple",
        "Kakad Aarti (Morning Darshan)",
        "Tamil, English & Hindi Tour Assistance"
    ],
    "keywords": "Chennai to Shirdi Flight Package, Shirdi Nashik Tour Package, Trimbakeshwar Jyotirlinga Tour, Chennai to Shirdi 3 Days Package, Shani Shingnapur Tour, Sai Baba VIP Darshan Package, Nashik Temple Tour, Pune to Shirdi Tour, Best Shirdi Flight Package from Chennai, Logaa Holidays.",
    "id": "2018"
},
  '2019': {
    "title": "Chennai to Shirdi & Pandharpur Flight Tour Package | 3 Days / 2 Nights",
    "image": "/assets/shiridi/cards/Chennai to Shirdi & Pandharpur Flight Tour Package  3 Days  2 Nights.png",
    "heroImage": "/assets/shiridi/hero/Chennai to Shirdi & Pandharpur Flight Tour Package  3 Days  2 Nights.png",
    "overview": {
        "duration": "3 Days / 2 Nights",
        "destination": "Shirdi",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "16,500",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Chennai → Pune → Shirdi",
            "activities": [
                "✈️ Departure from Chennai Airport",
                "🛬 Arrival at Pune Airport",
                "🚗 Transfer by A/C Bus/Cab to Shirdi",
                "Check in to the hotel and refresh.",
                "Evening Darshan",
                "🛕 Shri Sai Baba Samadhi Mandir (VIP Darshan – Subject to Availability)",
                "🛕 Gurusthan",
                "🛕 Chavadi",
                "🏛️ Sai Baba Museum",
                "🌳 Lendi Baug (Lendi Garden)",
                "🏨 Overnight Stay in Shirdi"
            ]
        },
        {
            "day": "Day 02",
            "title": "Shirdi → Shani Shingnapur → Pandharpur",
            "activities": [
                "Early Morning",
                "🙏 Kakad Aarti / Morning Darshan at Shri Sai Baba Temple",
                "After breakfast, proceed to Pandharpur.",
                "En Route Visits",
                "🛕 Shani Shingnapur Temple",
                "🛕 Renuka Devi Temple",
                "Arrive at Pandharpur.",
                "Evening Darshan",
                "🛕 Lord Panduranga (Vitthal) Temple",
                "🛕 Shri Vitthal Rukmini Temple",
                "🏨 Overnight Stay in Pandharpur"
            ]
        },
        {
            "day": "Day 03",
            "title": "Pandharpur → Pune → Chennai",
            "activities": [
                "Morning",
                "🙏 Darshan of Lord Panduranga",
                "🛍️ Free time for religious activities and shopping",
                "Proceed towards Pune.",
                "En Route Visit",
                "🛕 Chintamani Ganapathi Temple",
                "Transfer to Pune Airport.",
                "✈️ Return flight to Chennai.",
                "Tour concludes with divine blessings and cherished memories."
            ]
        }
    ],
    "inclusions": [
        "Flight Journey (As per Selected Package)",
        "Airport Pickup & Drop",
        "A/C Vehicle for Transfers & Sightseeing",
        "1 Night A/C Hotel Accommodation in Shirdi",
        "1 Night A/C Hotel Accommodation in Pandharpur",
        "Complimentary Breakfast",
        "Sightseeing as per Itinerary",
        "Special/VIP Darshan Arrangement (Subject to Availability)",
        "English, Hindi & Tamil Tour Assistance"
    ],
    "exclusions": [
        "❌ Lunch & Dinner",
        "❌ Temple Donations & Special Poojas",
        "❌ Entry Tickets (if applicable)",
        "❌ Personal Expenses",
        "❌ Laundry & Telephone Charges",
        "❌ Travel Insurance",
        "❌ Tips & Porter Charges",
        "❌ Mineral Water",
        "❌ Anything Not Mentioned in the Package Includes"
    ],
    "highlights": [
        "3 Days / 2 Nights Pilgrimage Tour",
        "Flight from Chennai to Pune & Return",
        "Comfortable A/C Vehicle Transfers",
        "Shri Sai Baba Samadhi Mandir, Shirdi",
        "VIP Darshan (Subject to Availability)",
        "Gurusthan",
        "Dwarkamai",
        "Chavadi",
        "Sai Baba Museum",
        "Lendi Baug (Lendi Garden)",
        "Kakad Aarti (Morning Darshan)",
        "Shani Shingnapur Temple",
        "Renuka Devi Temple",
        "Lord Panduranga (Vitthal) Temple",
        "Shri Vitthal Rukmini Temple",
        "Chintamani Ganapathi Temple",
        "Tamil, English & Hindi Tour Assistance"
    ],
    "keywords": "Chennai to Shirdi Flight Package, Shirdi Pandharpur Tour Package, Pandharpur Darshan Tour, Lord Vitthal Temple Package, Shani Shingnapur Tour, Sai Baba VIP Darshan Package, Chintamani Ganapathi Temple Tour, Chennai Pilgrimage Package, Best Shirdi Pandharpur Flight Package, Logaa Holidays.",
    "id": "2019"
},
  '2020': {
    "title": "Chennai to Shirdi, Nashik, Ajanta & Ellora Flight Tour Package | 4 Days / 3 Nights",
    "image": "/assets/shiridi/cards/Chennai to Shirdi, Nashik, Ajanta & Ellora Flight Tour Package  4 Days  3 Nights.png",
    "heroImage": "/assets/shiridi/hero/Chennai to Shirdi, Nashik, Ajanta & Ellora Flight Tour Package  4 Days  3 Nights.png",
    "overview": {
        "duration": "4 Days / 3 Nights",
        "destination": "Shirdi",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "18,500",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Chennai → Pune → Shani Shingnapur → Shirdi",
            "activities": [
                "✈️ Departure from Chennai Airport",
                "🛬 Arrival at Pune Airport",
                "🚗 Transfer by A/C Vehicle towards Shirdi",
                "En Route Visit",
                "🛕 Shani Shingnapur Temple",
                "Arrive at Shirdi, check in to the hotel and refresh.",
                "Evening Darshan",
                "🛕 Shri Sai Baba Samadhi Mandir (VIP Darshan – Subject to Availability)",
                "🛕 Gurusthan",
                "🛕 Dwarkamai",
                "🛕 Chavadi",
                "🏛️ Sai Baba Museum",
                "🌳 Lendi Baug (Lendi Garden)",
                "🏨 Overnight Stay in Shirdi"
            ]
        },
        {
            "day": "Day 02",
            "title": "Shirdi → Nashik → Trimbakeshwar → Shirdi",
            "activities": [
                "After breakfast, proceed to Nashik.",
                "Temple & Sightseeing",
                "🛕 Trimbakeshwar Jyotirlinga Temple",
                "🛕 Panchavati",
                "🛕 Kapaleshwar Temple",
                "🛕 Kalaram Temple",
                "🛕 Goraram Temple",
                "🛕 Sita Gufa",
                "Return to Shirdi in the evening.",
                "🏨 Overnight Stay in Shirdi"
            ]
        },
        {
            "day": "Day 03",
            "title": "Shirdi → Aurangabad → Ajanta Caves",
            "activities": [
                "Early Morning",
                "🙏 Kakad Aarti / Morning Darshan at Shri Sai Baba Temple",
                "Proceed to Aurangabad.",
                "Sightseeing",
                "🏛️ Ajanta Caves (UNESCO World Heritage Site)",
                "Return to Aurangabad.",
                "🏨 Overnight Stay in Aurangabad"
            ]
        },
        {
            "day": "Day 04",
            "title": "Ellora Caves → Grishneshwar → Pune → Chennai",
            "activities": [
                "After breakfast, proceed to Ellora.",
                "Sightseeing",
                "🏛️ Ellora Caves (UNESCO World Heritage Site)",
                "🕌 Bibi Ka Maqbara (Mini Taj Mahal)",
                "🛕 Grishneshwar Jyotirlinga Temple",
                "Proceed to Pune Airport.",
                "✈️ Return flight to Chennai.",
                "Tour concludes with divine blessings and memorable experiences."
            ]
        }
    ],
    "inclusions": [
        "Flight Journey (As per Selected Package)",
        "Airport Pickup & Drop",
        "A/C Vehicle for Transfers & Sightseeing",
        "2 Nights A/C Hotel Accommodation in Shirdi",
        "1 Night A/C Hotel Accommodation in Aurangabad",
        "Complimentary Breakfast",
        "Sightseeing as per Itinerary",
        "Special/VIP Darshan Arrangement (Subject to Availability)",
        "English, Hindi & Tamil Tour Assistance"
    ],
    "exclusions": [
        "❌ Lunch & Dinner",
        "❌ Entry Tickets for Monuments/Caves",
        "❌ Temple Donations & Special Poojas",
        "❌ Personal Expenses",
        "❌ Laundry & Telephone Charges",
        "❌ Travel Insurance",
        "❌ Tips & Porter Charges",
        "❌ Mineral Water",
        "❌ Anything Not Mentioned in the Package Includes"
    ],
    "highlights": [
        "4 Days / 3 Nights Pilgrimage & Heritage Tour",
        "Flight from Chennai to Pune & Return",
        "Comfortable A/C Vehicle Transfers",
        "Shri Sai Baba Samadhi Mandir, Shirdi",
        "VIP Darshan (Subject to Availability)",
        "Gurusthan",
        "Dwarkamai",
        "Chavadi",
        "Sai Baba Museum",
        "Lendi Baug (Lendi Garden)",
        "Kakad Aarti (Morning Darshan)",
        "Shani Shingnapur Temple",
        "Trimbakeshwar Jyotirlinga Temple",
        "Panchavati",
        "Kapaleshwar Temple",
        "Kalaram Temple",
        "Goraram Temple",
        "Sita Gufa",
        "Ajanta Caves (UNESCO World Heritage Site)",
        "Ellora Caves (UNESCO World Heritage Site)",
        "Bibi Ka Maqbara (Mini Taj Mahal)",
        "Grishneshwar Jyotirlinga Temple",
        "Tamil, English & Hindi Tour Assistance"
    ],
    "keywords": "Chennai to Shirdi Flight Package, Shirdi Nashik Ajanta Ellora Tour, Trimbakeshwar Jyotirlinga Tour, Ajanta Ellora Caves Package, Grishneshwar Jyotirlinga Tour, Bibi Ka Maqbara Tour, Shani Shingnapur Tour, Maharashtra Pilgrimage Package, Best Shirdi Heritage Tour, Logaa Holidays.",
    "id": "2020"
},
  '2021': {
    "title": "Chennai to Shirdi & 2 Jyotirlinga Flight Tour Package | 3 Days / 2 Nights",
    "image": "/assets/shiridi/cards/Chennai to Shirdi & 2 Jyotirlinga Flight Tour Package  3 Days  2 Nights.png",
    "heroImage": "/assets/shiridi/hero/Chennai to Shirdi & 2 Jyotirlinga Flight Tour Package  3 Days  2 Nights.png",
    "overview": {
        "duration": "3 Days / 2 Nights",
        "destination": "Shirdi",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "16,500",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Chennai → Pune → Shani Shingnapur → Shirdi",
            "activities": [
                "✈️ Departure from Chennai Airport",
                "🛬 Arrival at Pune Airport",
                "🚗 Transfer by A/C Vehicle towards Shirdi",
                "En Route Visits",
                "🛕 Maha Ganapathi Temple",
                "🛕 Shani Shingnapur Temple",
                "Arrive at Shirdi and check in to the hotel.",
                "Evening Darshan",
                "🛕 Shri Sai Baba Samadhi Mandir (VIP Darshan – Subject to Availability)",
                "🛕 Gurusthan",
                "🛕 Dwarkamai",
                "🛕 Chavadi",
                "🏛️ Sai Baba Museum",
                "🌳 Lendi Baug (Lendi Garden)",
                "🏨 Overnight Stay in Shirdi"
            ]
        },
        {
            "day": "Day 02",
            "title": "Shirdi → Nashik → Trimbakeshwar → Shirdi",
            "activities": [
                "After breakfast, proceed to Nashik.",
                "Temple & Sightseeing",
                "🛕 Trimbakeshwar Jyotirlinga Temple",
                "🛕 Panchavati",
                "🛕 Kapaleshwar Temple",
                "🛕 Kalaram Temple",
                "🛕 Goraram Temple",
                "🛕 Sita Gufa",
                "Return to Shirdi in the evening.",
                "🏨 Overnight Stay in Shirdi"
            ]
        },
        {
            "day": "Day 03",
            "title": "Shirdi → Ellora → Grishneshwar → Pune → Chennai",
            "activities": [
                "After breakfast, proceed to Ellora.",
                "Sightseeing",
                "🏛️ Ellora Caves (UNESCO World Heritage Site)",
                "🛕 Grishneshwar Jyotirlinga Temple",
                "Later, proceed to Pune Airport.",
                "✈️ Board the return flight to Chennai.",
                "Tour concludes with divine blessings and unforgettable memories."
            ]
        }
    ],
    "inclusions": [
        "Flight Journey (As per Selected Package)",
        "Airport Pickup & Drop",
        "A/C Vehicle for Transfers & Sightseeing",
        "2 Nights A/C Hotel Accommodation in Shirdi",
        "Complimentary Breakfast",
        "Sightseeing as per Itinerary",
        "Special/VIP Darshan Arrangement (Subject to Availability)",
        "English, Hindi & Tamil Tour Assistance"
    ],
    "exclusions": [
        "❌ Lunch & Dinner",
        "❌ Entry Tickets for Monuments/Caves",
        "❌ Temple Donations & Special Poojas",
        "❌ Personal Expenses",
        "❌ Laundry & Telephone Charges",
        "❌ Travel Insurance",
        "❌ Tips & Porter Charges",
        "❌ Mineral Water",
        "❌ Anything Not Mentioned in the Package Includes"
    ],
    "highlights": [
        "3 Days / 2 Nights Pilgrimage Tour",
        "Flight from Chennai to Pune & Return",
        "Comfortable A/C Vehicle Transfers",
        "Shri Sai Baba Samadhi Mandir, Shirdi",
        "VIP Darshan (Subject to Availability)",
        "Gurusthan",
        "Dwarkamai",
        "Chavadi",
        "Sai Baba Museum",
        "Lendi Baug (Lendi Garden)",
        "Shani Shingnapur Temple",
        "Maha Ganapathi Temple",
        "Trimbakeshwar Jyotirlinga Temple",
        "Panchavati",
        "Kapaleshwar Temple",
        "Kalaram Temple",
        "Goraram Temple",
        "Sita Gufa",
        "Ellora Caves (UNESCO World Heritage Site)",
        "Grishneshwar Jyotirlinga Temple",
        "Tamil, English & Hindi Tour Assistance"
    ],
    "keywords": "Chennai to Shirdi Flight Package, Shirdi 2 Jyotirlinga Tour Package, Trimbakeshwar Tour, Grishneshwar Jyotirlinga Tour, Ellora Caves Tour, Shani Shingnapur Temple Package, Sai Baba VIP Darshan Package, Maharashtra Pilgrimage Tour, Best Shirdi Flight Package from Chennai, Logaa Holidays.",
    "id": "2021"
},
  '2022': {
    "title": "Chennai to Shirdi & 3 Jyotirlinga Flight Tour Package | 4 Days / 3 Nights",
    "image": "/assets/shiridi/cards/Chennai to Shirdi & 3 Jyotirlinga Flight Tour Package  4 Days  3 Nights.png",
    "heroImage": "/assets/shiridi/hero/Chennai to Shirdi & 3 Jyotirlinga Flight Tour Package  4 Days  3 Nights.png",
    "overview": {
        "duration": "4 Days / 3 Nights",
        "destination": "Shirdi",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "18,500",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Chennai → Pune → Bhimashankar → Shirdi",
            "activities": [
                "✈️ Departure from Chennai Airport",
                "🛬 Arrival at Pune Airport",
                "🚗 Proceed to Bhimashankar",
                "Temple Visit",
                "🛕 Bhimashankar Jyotirlinga Temple",
                "Continue to Shirdi.",
                "Evening Darshan",
                "🛕 Shri Sai Baba Samadhi Mandir (VIP Darshan – Subject to Availability)",
                "🛕 Gurusthan",
                "🛕 Dwarkamai",
                "🛕 Chavadi",
                "🏛️ Sai Baba Museum",
                "🌳 Lendi Baug (Lendi Garden)",
                "🏨 Overnight Stay in Shirdi"
            ]
        },
        {
            "day": "Day 02",
            "title": "Shirdi → Nashik → Trimbakeshwar → Shirdi",
            "activities": [
                "After breakfast, proceed to Nashik.",
                "Temple & Sightseeing",
                "🛕 Trimbakeshwar Jyotirlinga Temple",
                "🛕 Panchavati",
                "🛕 Kapaleshwar Temple",
                "🛕 Kalaram Temple",
                "🛕 Goraram Temple",
                "🛕 Sita Gufa",
                "Return to Shirdi.",
                "🏨 Overnight Stay in Shirdi"
            ]
        },
        {
            "day": "Day 03",
            "title": "Shirdi → Ellora → Grishneshwar → Aurangabad",
            "activities": [
                "Early Morning",
                "🙏 Kakad Aarti / Morning Darshan at Shri Sai Baba Temple",
                "Proceed to Ellora.",
                "Sightseeing",
                "🏛️ Ellora Caves (UNESCO World Heritage Site)",
                "🕌 Bibi Ka Maqbara (Mini Taj Mahal)",
                "🛕 Grishneshwar Jyotirlinga Temple",
                "Proceed to Aurangabad.",
                "🏨 Overnight Stay in Aurangabad"
            ]
        },
        {
            "day": "Day 04",
            "title": "Aurangabad → Shani Shingnapur → Ranjangaon → Pune → Chennai",
            "activities": [
                "After breakfast, proceed towards Pune.",
                "En Route Visits",
                "🛕 Shani Shingnapur Temple",
                "🛕 Ranjangaon Maha Ganapati Temple (Ashtavinayak)",
                "Transfer to Pune Airport.",
                "✈️ Return flight to Chennai.",
                "Tour concludes with divine blessings and unforgettable memories."
            ]
        }
    ],
    "inclusions": [
        "Flight Journey (As per Selected Package)",
        "Airport Pickup & Drop",
        "A/C Vehicle for Transfers & Sightseeing",
        "2 Nights A/C Hotel Accommodation in Shirdi",
        "1 Night A/C Hotel Accommodation in Aurangabad",
        "Complimentary Breakfast",
        "Sightseeing as per Itinerary",
        "Special/VIP Darshan Arrangement (Subject to Availability)",
        "English, Hindi & Tamil Tour Assistance"
    ],
    "exclusions": [
        "❌ Lunch & Dinner",
        "❌ Entry Tickets for Monuments/Caves",
        "❌ Temple Donations & Special Poojas",
        "❌ Personal Expenses",
        "❌ Laundry & Telephone Charges",
        "❌ Travel Insurance",
        "❌ Tips & Porter Charges",
        "❌ Mineral Water",
        "❌ Anything Not Mentioned in the Package Includes"
    ],
    "highlights": [
        "4 Days / 3 Nights Pilgrimage Tour",
        "Flight from Chennai to Pune & Return",
        "Comfortable A/C Vehicle for Transfers",
        "Shri Sai Baba Samadhi Mandir, Shirdi",
        "VIP Darshan (Subject to Availability)",
        "Bhimashankar Jyotirlinga",
        "Trimbakeshwar Jyotirlinga",
        "Grishneshwar Jyotirlinga",
        "Shani Shingnapur Temple",
        "Ranjangaon Maha Ganapati (Ashtavinayak)",
        "Gurusthan",
        "Dwarkamai",
        "Chavadi",
        "Sai Baba Museum",
        "Lendi Baug (Lendi Garden)",
        "Panchavati",
        "Kapaleshwar Temple",
        "Kalaram Temple",
        "Goraram Temple",
        "Sita Gufa",
        "Ellora Caves (UNESCO World Heritage Site)",
        "Bibi Ka Maqbara (Mini Taj Mahal)",
        "Tamil, English & Hindi Tour Assistance"
    ],
    "keywords": "Chennai to Shirdi Flight Package, 3 Jyotirlinga Tour Package, Bhimashankar Tour, Trimbakeshwar Tour, Grishneshwar Tour, Shirdi Pilgrimage Package, Ellora Caves Tour, Shani Shingnapur Tour, Ranjangaon Ashtavinayak Tour, Best Maharashtra Pilgrimage Package, Logaa Holidays.",
    "id": "2022"
},
  '2023': {
    "title": "Chennai to Shirdi & Lonavala Flight Tour Package | 3 Days / 2 Nights",
    "image": "/assets/shiridi/cards/Chennai to Shirdi & Lonavala Flight Tour Package  3 Days  2 Nights.png",
    "heroImage": "/assets/shiridi/hero/Chennai to Shirdi & Lonavala Flight Tour Package  3 Days  2 Nights.png",
    "overview": {
        "duration": "3 Days / 2 Nights",
        "destination": "Shirdi",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "16,500",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Chennai → Pune → Shirdi",
            "activities": [
                "✈️ Departure from Chennai Airport",
                "🛬 Arrival at Pune Airport",
                "🚗 Transfer by A/C Vehicle to Shirdi",
                "Check in to the hotel and refresh.",
                "Evening Darshan",
                "🛕 Shri Sai Baba Samadhi Mandir (VIP Darshan – Subject to Availability)",
                "🛕 Gurusthan",
                "🛕 Dwarkamai",
                "🛕 Chavadi",
                "🏛️ Sai Baba Museum",
                "🌳 Lendi Baug (Lendi Garden)",
                "🏨 Overnight Stay in Shirdi"
            ]
        },
        {
            "day": "Day 02",
            "title": "Shirdi → Shani Shingnapur → Ranjangaon → Lonavala",
            "activities": [
                "Early Morning",
                "🙏 Kakad Aarti / Morning Darshan at Shri Sai Baba Temple",
                "After breakfast, proceed towards Lonavala.",
                "En Route Visits",
                "🛕 Shani Shingnapur Temple",
                "🛕 Ranjangaon Maha Ganapati Temple (Ashtavinayak)",
                "Arrive at Lonavala.",
                "Evening Sightseeing",
                "🌅 Sunset Point",
                "🏨 Overnight Stay in Lonavala"
            ]
        },
        {
            "day": "Day 03",
            "title": "Lonavala Sightseeing → Pune → Chennai",
            "activities": [
                "After breakfast, enjoy sightseeing in Lonavala.",
                "Attractions",
                "🏛️ Karla Caves",
                "🏛️ Bhaja Caves",
                "🎭 Celebrity Wax Museum",
                "🌄 Lion's Point",
                "🌄 Tiger's Leap",
                "🏰 Rajmachi Fort View Point",
                "📸 Shooting Point",
                "Later, proceed to Pune Airport.",
                "✈️ Return flight to Chennai.",
                "Tour concludes with wonderful memories and divine blessings."
            ]
        }
    ],
    "inclusions": [
        "Flight Journey (As per Selected Package)",
        "Airport Pickup & Drop",
        "A/C Vehicle for Transfers & Sightseeing",
        "1 Night A/C Hotel Accommodation in Shirdi",
        "1 Night A/C Hotel Accommodation in Lonavala",
        "Complimentary Breakfast",
        "Sightseeing as per Itinerary",
        "Special/VIP Darshan Arrangement (Subject to Availability)",
        "English, Hindi & Tamil Tour Assistance"
    ],
    "exclusions": [
        "❌ Lunch & Dinner",
        "❌ Entry Tickets to Attractions",
        "❌ Temple Donations & Special Poojas",
        "❌ Personal Expenses",
        "❌ Laundry & Telephone Charges",
        "❌ Travel Insurance",
        "❌ Tips & Porter Charges",
        "❌ Mineral Water",
        "❌ Anything Not Mentioned in the Package Includes"
    ],
    "highlights": [
        "3 Days / 2 Nights Tour",
        "Flight from Chennai to Pune & Return",
        "Comfortable A/C Vehicle Transfers",
        "Shri Sai Baba Samadhi Mandir, Shirdi",
        "VIP Darshan (Subject to Availability)",
        "Gurusthan",
        "Dwarkamai",
        "Chavadi",
        "Sai Baba Museum",
        "Lendi Baug (Lendi Garden)",
        "Kakad Aarti (Morning Darshan)",
        "Shani Shingnapur Temple",
        "Ranjangaon Maha Ganapati Temple (Ashtavinayak)",
        "Sunset Point, Lonavala",
        "Karla Caves",
        "Bhaja Caves",
        "Celebrity Wax Museum",
        "Lion's Point",
        "Tiger's Leap",
        "Rajmachi Fort View Point",
        "Shooting Point",
        "Tamil, English & Hindi Tour Assistance"
    ],
    "keywords": "Chennai to Shirdi Flight Package, Shirdi Lonavala Tour Package, Lonavala Hill Station Tour, Shani Shingnapur Temple Tour, Ranjangaon Maha Ganapati Tour, Karla Caves Tour, Bhaja Caves Tour, Chennai Pilgrimage Package, Best Shirdi Lonavala Package, Logaa Holidays.",
    "id": "2023"
},
  '2024': {
    "title": "Chennai to Shirdi, Ajanta & Ellora Flight Tour Package | 3 Days / 2 Nights",
    "image": "/assets/shiridi/cards/Chennai to Shirdi, Ajanta & Ellora Flight Tour Package  3 Days  2 Nights.png",
    "heroImage": "/assets/shiridi/hero/Chennai to Shirdi, Ajanta & Ellora Flight Tour Package  3 Days  2 Nights.png",
    "overview": {
        "duration": "3 Days / 2 Nights",
        "destination": "Shirdi",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "16,500",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Chennai → Pune → Shani Shingnapur → Shirdi",
            "activities": [
                "✈️ Departure from Chennai Airport",
                "🛬 Arrival at Pune Airport",
                "🚗 Proceed to Shirdi",
                "En Route Visit",
                "🛕 Shani Shingnapur Temple",
                "Arrive in Shirdi, check in to the hotel and refresh.",
                "Evening Darshan",
                "🛕 Shri Sai Baba Samadhi Mandir (VIP Darshan – Subject to Availability)",
                "🛕 Gurusthan",
                "🛕 Dwarkamai",
                "🛕 Chavadi",
                "🏛️ Sai Baba Museum",
                "🌳 Lendi Baug (Lendi Garden)",
                "🏨 Overnight Stay in Shirdi"
            ]
        },
        {
            "day": "Day 02",
            "title": "Shirdi → Aurangabad → Ajanta Caves",
            "activities": [
                "Early Morning",
                "🙏 Kakad Aarti / Morning Darshan at Shri Sai Baba Temple",
                "After breakfast, proceed to Aurangabad.",
                "Sightseeing",
                "🏛️ Ajanta Caves (UNESCO World Heritage Site)",
                "🏨 Overnight Stay in Aurangabad"
            ]
        },
        {
            "day": "Day 03",
            "title": "Ellora Caves → Grishneshwar → Pune → Chennai",
            "activities": [
                "After breakfast, proceed to Ellora.",
                "Sightseeing",
                "🏛️ Ellora Caves (UNESCO World Heritage Site)",
                "🕌 Bibi Ka Maqbara (Mini Taj Mahal)",
                "🛕 Grishneshwar Jyotirlinga Temple",
                "Later, transfer to Pune Airport.",
                "✈️ Return flight to Chennai.",
                "Tour concludes with divine blessings and unforgettable memories."
            ]
        }
    ],
    "inclusions": [
        "Flight Journey (As per Selected Package)",
        "Airport Pickup & Drop",
        "A/C Vehicle for Transfers & Sightseeing",
        "1 Night A/C Hotel Accommodation in Shirdi",
        "1 Night A/C Hotel Accommodation in Aurangabad",
        "Complimentary Breakfast",
        "Sightseeing as per Itinerary",
        "Special/VIP Darshan Arrangement (Subject to Availability)",
        "English, Hindi & Tamil Tour Assistance"
    ],
    "exclusions": [
        "❌ Lunch & Dinner",
        "❌ Entry Tickets for Monuments/Caves",
        "❌ Temple Donations & Special Poojas",
        "❌ Personal Expenses",
        "❌ Laundry & Telephone Charges",
        "❌ Travel Insurance",
        "❌ Tips & Porter Charges",
        "❌ Mineral Water",
        "❌ Anything Not Mentioned in the Package Includes"
    ],
    "highlights": [
        "3 Days / 2 Nights Pilgrimage & Heritage Tour",
        "Flight from Chennai to Pune & Return",
        "Comfortable A/C Vehicle Transfers",
        "Shri Sai Baba Samadhi Mandir, Shirdi",
        "VIP Darshan (Subject to Availability)",
        "Gurusthan",
        "Dwarkamai",
        "Chavadi",
        "Sai Baba Museum",
        "Lendi Baug (Lendi Garden)",
        "Kakad Aarti (Morning Darshan)",
        "Shani Shingnapur Temple",
        "Ajanta Caves (UNESCO World Heritage Site)",
        "Ellora Caves (UNESCO World Heritage Site)",
        "Bibi Ka Maqbara (Mini Taj Mahal)",
        "Grishneshwar Jyotirlinga Temple",
        "Tamil, English & Hindi Tour Assistance"
    ],
    "keywords": "Chennai to Shirdi Flight Package, Shirdi Ajanta Ellora Tour Package, Ajanta Caves Tour, Ellora Caves Tour, Grishneshwar Jyotirlinga Tour, Shani Shingnapur Tour, Maharashtra Heritage Tour, Chennai Pilgrimage Package, Best Shirdi Heritage Package, Logaa Holidays.",
    "id": "2024"
},
  '2025': {
    "title": "Madurai One Day Tour Package | Best Local Sightseeing",
    "image": "/assets/madurai 63 package/322x372/maduraionedaytourpackage.png",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraionedaypackage.png",
    "overview": {
        "duration": "One Day",
        "destination": "Madurai",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "One Day Pilgrimage",
            "activities": [
                "Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand",
                "Meenakshi Amman Temple",
                "Koodal Azhagar Temple",
                "Thiruparankundram Murugan Temple",
                "Thirumalai Nayakkar Mahal",
                "Lunch Break (Self-paid)",
                "Vandiyur Mariamman Teppakulam",
                "Azhagar Kovil",
                "Pazhamudircholai Murugan Temple",
                "Yoga Narasingam Perumal Temple",
                "Kalamegaperumal Temple",
                "07:00 PM – Drop at your preferred location in Madurai"
            ]
        }
    ],
    "inclusions": [
        "Private Air-Conditioned Vehicle",
        "Experienced and Courteous Driver",
        "Pickup & drop within Madurai",
        "Parking Charges",
        "Driver Allowance"
    ],
    "exclusions": [
        "Temple Special Darshan Tickets",
        "Monument Entry Fees",
        "Meals & Beverages",
        "Guide Services",
        "Personal Expenses"
    ],
    "highlights": [
        "🛕 Meenakshi Amman Temple",
        "🛕 Koodal Azhagar Temple",
        "🛕 Thiruparankundram Murugan Temple",
        "🏛️ Thirumalai Nayakkar Mahal",
        "🌊 Vandiyur Mariamman Teppakulam",
        "🛕 Azhagar Kovil",
        "🛕 Pazhamudircholai Murugan Temple",
        "🛕 Yoga Narasingam Perumal Temple",
        "🛕 Kalamegaperumal Temple"
    ],
    "keywords": "Madurai One Day Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2025"
},
  '2026': {
    "title": "Madurai to Rameswaram One Day Tour Package",
    "image": "/assets/madurai 63 package/322x372/Madurai To Rameshwaram 1N 2D Tour.png",
    "heroImage": "/assets/madurai 63 package/1918x642/Madurai To Rameshwaram 1N 2D Tour banner.png",
    "overview": {
        "duration": "One Day",
        "destination": "Madurai",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "One Day Pilgrimage",
            "activities": [
                "🕕 06:00 AM – Pickup from Madurai",
                "Pickup from your Hotel, Railway Station, Airport, or Bus Stand and proceed to Rameswaram.",
                "🕙 10:00 AM – Arrival at Rameswaram",
                "Visit the major attractions:",
                "🛕 Sri Ramanathaswamy Temple",
                "🌊 Agni Theertham",
                "🌉 Pamban Road Bridge View Point",
                "🚆 Pamban Railway Bridge View Point",
                "🏛️ Dr. A.P.J. Abdul Kalam Memorial",
                "🏠 Dr. A.P.J. Abdul Kalam House Museum",
                "🌊 Rama Theertham",
                "🛕 Panchamukhi Hanuman Temple",
                "🪨 Floating Stone Exhibition",
                "🌅 Dhanushkodi Beach",
                "🏚️ Dhanushkodi Ghost Town",
                "🌊 Arichal Munai (Land's End)",
                "🍽️ Lunch Break",
                "Enjoy lunch at a local restaurant. (Self-paid)",
                "🕔 05:00 PM – Return Journey to Madurai",
                "🕘 09:00 PM – Drop at Madurai",
                "Drop at your Hotel, Railway Station, Airport, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop",
        "Experienced Driver",
        "Driver Allowance",
        "Parking Charges"
    ],
    "exclusions": [
        "Temple Special Darshan Tickets",
        "Entry Fees (if applicable)",
        "Meals & Beverages",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [],
    "keywords": "Book Your Madurai One Day Tour Today, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2026"
},
  '2027': {
    "title": "Madurai to Kodaikanal One Day Tour Package",
    "image": "/assets/madurai 63 package/322x372/maduraikodaikanal.png",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraikoadaikanal.png",
    "overview": {
        "duration": "One Day",
        "destination": "Madurai",
        "activities": "Sightseeing, Nature",
        "themes": "Nature & Adventure, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "One Day Pilgrimage",
            "activities": [
                "🕕 06:00 AM – Pickup from Madurai Hotel / Airport / Railway Station / Bus Stand",
                "Proceed to Kodaikanal via the scenic Western Ghats.",
                "📍 Kodaikanal Sightseeing",
                "🌄 Silver Cascade Falls",
                "🌿 Coaker's Walk",
                "🌲 Bryant Park",
                "⛵ Kodaikanal Lake",
                "🚴 Boating & Cycling (Optional)",
                "🪨 Pillar Rocks",
                "🌲 Pine Forest",
                "🌫️ Guna Caves (Devil's Kitchen) – View Point",
                "💚 Moir Point",
                "🌼 Green Valley View (Suicide Point)",
                "🍽️ Lunch Break (Self-paid)",
                "Continue sightseeing (subject to available time and traffic conditions).",
                "🕔 05:00 PM – Depart from Kodaikanal",
                "🕘 09:00 PM – Arrival & Drop at Madurai Hotel / Airport / Railway Station / Bus Stand"
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle (up to the Kodaikanal foothills; hill travel subject to local conditions)",
        "Pickup & Drop",
        "Experienced Driver",
        "Parking Charges",
        "Driver Allowance",
        "Driver Information",
        "Our professional drivers ensure a safe and comfortable journey.",
        "Languages Spoken:",
        "Tamil",
        "English",
        "Hindi (Subject to availability)"
    ],
    "exclusions": [
        "Boating Charges",
        "Entry Tickets",
        "Camera Fees",
        "Meals & Beverages",
        "Personal Expenses",
        "Guide Services"
    ],
    "highlights": [],
    "keywords": "Madurai to Kodaikanal One Day Trip, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2027"
},
  '2028': {
    "title": "Madurai to Kanyakumari One Day Tour Package",
    "image": "/assets/madurai 63 package/322x372/maduraitokanyakumari1day.png",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraitokanyakumari.png",
    "overview": {
        "duration": "One Day",
        "destination": "Madurai",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "One Day Pilgrimage",
            "activities": [
                "🕔 05:00 AM – Pickup from Madurai Hotel / Airport / Railway Station / Bus Stand",
                "Proceed to Kanyakumari.",
                "📍 Kanyakumari Sightseeing",
                "🛕 Kanyakumari Bhagavathy Amman Temple",
                "🌊 Triveni Sangam (Confluence of Three Seas)",
                "🪨 Vivekananda Rock Memorial (Boat ride – Optional)",
                "🗿 Thiruvalluvar Statue (View from ferry/shore)",
                "🌉 Glass Bridge",
                "🏛️ Gandhi Memorial Mandapam",
                "🌅 Sunset View Point (Subject to weather and season)",
                "🛍️ Local Shopping & Sea Shell Handicrafts",
                "🍽️ Lunch Break (Self-paid)",
                "🕔 05:30 PM – Depart from Kanyakumari",
                "🕥 10:30 PM – Arrival & Drop at Madurai Hotel / Airport / Railway Station / Bus Stand"
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop",
        "Experienced Driver",
        "Parking Charges",
        "Driver Allowance",
        "Driver Information",
        "Our professional drivers ensure a safe and comfortable journey.",
        "Languages Spoken:",
        "Tamil",
        "English",
        "Hindi (Subject to availability)"
    ],
    "exclusions": [
        "Boat Tickets to Vivekananda Rock Memorial",
        "Entry Tickets (if applicable)",
        "Temple Special Darshan Tickets",
        "Meals & Beverages",
        "Personal Expenses",
        "Guide Services"
    ],
    "highlights": [],
    "keywords": "Madurai to Kanyakumari One Day Trip, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2028"
},
  '2029': {
    "title": "Madurai to Meghamalai One Day Tour Package",
    "image": "/assets/madurai 63 package/322x372/maduraitomegamalai1day.jpeg",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraitomegamalai3days.png",
    "overview": {
        "duration": "One Day",
        "destination": "Madurai",
        "activities": "Nature, Wildlife, Sightseeing",
        "themes": "Nature & Adventure, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "One Day Pilgrimage",
            "activities": [
                "🕕 06:00 AM – Pickup from Madurai Hotel / Airport / Railway Station / Bus Stand",
                "Proceed to Meghamalai via Theni and Chinnamanur, enjoying the scenic drive through the Western Ghats.",
                "📍 Meghamalai Sightseeing",
                "🌄 Meghamalai View Point",
                "🍃 Tea Estates",
                "💧 Manalar Dam View",
                "🌊 Maharaja Mettu View Point",
                "🌿 Vellimalai View Point",
                "📸 Scenic Mountain View Stops",
                "🌳 Forest & Nature Drive",
                "☕ Tea Estate Photography Points",
                "🍽️ Lunch Break (Self-paid at a local restaurant or resort, subject to availability)",
                "Spend leisure time enjoying the cool climate and beautiful landscapes before beginning the return journey.",
                "🕔 04:30 PM – Depart from Meghamalai",
                "🕢 07:30 PM – Arrival & Drop at Madurai Hotel / Airport / Railway Station / Bus Stand"
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle (up to the hill route, subject to road conditions)",
        "Pickup & Drop",
        "Experienced Driver",
        "Parking Charges",
        "Driver Allowance",
        "Driver Information",
        "Our professional drivers ensure a safe and comfortable hill journey.",
        "Languages Spoken:",
        "Tamil",
        "English",
        "Hindi (Subject to availability)"
    ],
    "exclusions": [
        "Entry Fees (if applicable)",
        "Meals & Beverages",
        "Guide Services",
        "Personal Expenses",
        "Camera Fees (if applicable)"
    ],
    "highlights": [],
    "keywords": "Madurai to Meghamalai One Day Trip, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2029"
},
  '2030': {
    "title": "Madurai to Trichy & Thanjavur One Day Tour Package",
    "image": "/assets/madurai 63 package/322x372/maduraitrichytanjore1day.png",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraitrichytanjore.png",
    "overview": {
        "duration": "One Day",
        "destination": "Madurai",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "One Day Pilgrimage",
            "activities": [
                "🕕 05:30 AM – Pickup from Madurai Hotel / Airport / Railway Station / Bus Stand",
                "Proceed to Tiruchirappalli (Trichy).",
                "📍 Trichy Sightseeing",
                "🛕 Sri Ranganathaswamy Temple (Srirangam)",
                "🪨 Rockfort Temple (Ucchi Pillayar Temple)",
                "🛕 Jambukeswarar Temple (Thiruvanaikaval)",
                "🍽️ Lunch Break (Self-paid)",
                "Proceed to Thanjavur.",
                "📍 Thanjavur Sightseeing",
                "🛕 Brihadeeswarar Temple (UNESCO World Heritage Site)",
                "🏛️ Thanjavur Royal Palace",
                "🖼️ Art Gallery & Saraswathi Mahal Library (Subject to visiting hours)",
                "🛍️ Local Shopping (Tanjore Paintings & Handicrafts)",
                "🕔 05:30 PM – Depart from Thanjavur",
                "🕘 09:00 PM – Arrival & Drop at Madurai Hotel / Airport / Railway Station / Bus Stand"
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop",
        "Experienced Driver",
        "Parking Charges",
        "Driver Allowance",
        "Driver Information",
        "Our professional drivers ensure a safe, comfortable, and enjoyable journey.",
        "Languages Spoken:",
        "Tamil",
        "English",
        "Hindi (Subject to availability)"
    ],
    "exclusions": [
        "Monument & Museum Entry Tickets",
        "Temple Special Darshan Tickets",
        "Meals & Beverages",
        "Guide Services",
        "Personal Expenses"
    ],
    "highlights": [],
    "keywords": "Madurai to Trichy & Thanjavur One Day Trip, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2030"
},
  '2031': {
    "title": "Madurai to Tiruchendur One Day Tour Package",
    "image": "/assets/madurai 63 package/322x372/maduraitothiruchendur1day.jpeg",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraithiruchendur.png",
    "overview": {
        "duration": "One Day",
        "destination": "Madurai",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "One Day Pilgrimage",
            "activities": [
                "🕕 06:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Proceed to Tiruchendur.",
                "Tiruchendur Sightseeing",
                "🛕 Arulmigu Subramaniya Swamy Temple",
                "🌊 Nazhi Kinaru (Sacred Freshwater Well)",
                "🌊 Tiruchendur Beach",
                "🛍️ Local Shopping & Prasadam Counters",
                "🍽️ 01:00 PM – Lunch Break (Self-paid)",
                "After darshan and sightseeing, begin the return journey to Madurai.",
                "🕒 03:30 PM – Depart from Tiruchendur.",
                "🕖 07:30 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "Tiruchendur Sightseeing as per Itinerary",
        "Experienced Driver",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Temple Special Darshan Tickets",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Services"
    ],
    "highlights": [
        "One Day Private Tour",
        "Pickup & Drop from Madurai",
        "Tiruchendur Murugan Temple Darshan",
        "Nazhi Kinaru Holy Well",
        "Tiruchendur Beach",
        "Comfortable Private A/C Vehicle",
        "Experienced Driver",
        "Flexible Pickup & Drop",
        "Tour Overview",
        "Departure: Madurai",
        "Destination: Tiruchendur",
        "Duration: One Day",
        "Distance: Approx. 180 km (One Way)",
        "Travel Time: 3.5 – 4 Hours"
    ],
    "keywords": "Madurai to Tiruchendur One Day Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2031"
},
  '2032': {
    "title": "Madurai to Thekkady One Day Tour Package",
    "image": "/assets/madurai 63 package/322x372/maduraithekady1day.jpeg",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraithekady.png",
    "overview": {
        "duration": "One Day",
        "destination": "Madurai",
        "activities": "Nature, Wildlife, Sightseeing",
        "themes": "Nature & Adventure, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "One Day Pilgrimage",
            "activities": [
                "🕕 06:30 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Proceed towards Thekkady via Cumbum and Kumily.",
                "Thekkady Sightseeing",
                "🌿 Periyar Wildlife Sanctuary",
                "🚤 Periyar Lake Boating (Optional – Advance Booking Recommended)",
                "🌱 Spice Plantation Tour",
                "🐘 Elephant Camp (Optional Activities)",
                "🛍️ Kumily Spice & Handicraft Market",
                "🍽️ 01:30 PM – Lunch Break (Self-paid)",
                "Continue sightseeing and shopping.",
                "🕒 03:30 PM – Begin return journey to Madurai.",
                "🕖 07:30 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "Thekkady Sightseeing as per Itinerary",
        "Experienced Driver",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Periyar Boating Tickets",
        "Wildlife Sanctuary Entry Fee",
        "Elephant Ride & Activities",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "One Day Thekkady Tour",
        "Pickup & Drop from Madurai",
        "Periyar Wildlife Sanctuary",
        "Periyar Lake Boating (Optional)",
        "Spice Plantation Visit",
        "Elephant Camp",
        "Kumily Shopping",
        "Private A/C Vehicle",
        "Experienced Driver",
        "Tour Overview",
        "Departure: Madurai",
        "Destination: Thekkady",
        "Duration: One Day",
        "Distance: Approx. 140 km (One Way)",
        "Travel Time: 3.5 – 4 Hours"
    ],
    "keywords": "Madurai to Thekkady One Day Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2032"
},
  '2033': {
    "title": "Madurai to Munnar 2 Days / 1 Night Tour Package",
    "image": "/assets/madurai 63 package/322x372/maduraitomunnar2day.png",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraitomunnar.png",
    "overview": {
        "duration": "2 Days / 1 Night",
        "destination": "Madurai",
        "activities": "Nature, Sightseeing",
        "themes": "Nature & Adventure, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai to Munnar",
            "activities": [
                "06:30 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Drive to Munnar through the scenic Western Ghats.",
                "En Route Sightseeing",
                "📍 Bodimettu View Point",
                "📍 Poopara View Point",
                "📍 Anayirangal Dam View Point",
                "📍 Chinnakanal Waterfalls",
                "📍 Lockhart Gap View Point",
                "📍 Signal Point",
                "01:30 PM – Lunch Break (Self-paid)",
                "Munnar Sightseeing",
                "🌳 Blossom Hydel Park",
                "🎭 Kathakali Cultural Show (Optional)",
                "⚔️ Kalaripayattu Martial Arts Show (Optional)",
                "06:00 PM – Hotel Check-in",
                "🏨 Overnight Stay in Munnar"
            ]
        },
        {
            "day": "Day 02",
            "title": "Munnar Sightseeing & Return to Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel",
                "Check-out from the hotel.",
                "Places to Visit",
                "🌹 Rose Garden",
                "📸 Photo Point",
                "🐘 Elephant Park",
                "💧 Mattupetty Dam",
                "🍃 Tea Museum & Tea Factory",
                "🌊 Echo Point",
                "🌿 Tea Valley View Point",
                "🌱 Spice Plantation Visit (En Route)",
                "02:30 PM – Begin return journey to Madurai.",
                "07:30 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "1 Night Hotel Accommodation",
        "Complimentary Breakfast",
        "Munnar Sightseeing as per Itinerary",
        "Experienced Driver",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Lunch & Dinner",
        "Entry Tickets",
        "Boating Charges",
        "Elephant Ride Charges",
        "Kathakali & Kalaripayattu Show Tickets",
        "Adventure Activities",
        "Personal Expenses"
    ],
    "highlights": [
        "2 Days / 1 Night Munnar Tour",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "1 Night Hotel Accommodation",
        "Complimentary Breakfast",
        "Scenic Tea Plantations & Waterfalls",
        "Experienced Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai to Munnar 2 Days / 1 Night Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2033"
},
  '2034': {
    "title": "Madurai to Trichy & Thanjavur 2 Days / 1 Night Tour Package",
    "image": "/assets/madurai 63 package/322x372/maduraitanjoretrichy2day.jpeg",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraitrichytanjore2days.png",
    "overview": {
        "duration": "2 Days / 1 Night",
        "destination": "Madurai",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai to Trichy",
            "activities": [
                "07:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Drive to Tiruchirappalli (Trichy) (Approx. 140 km | 2.5–3 Hours).",
                "Trichy Sightseeing",
                "🛕 Sri Ranganathaswamy Temple (Srirangam)",
                "🛕 Jambukeswarar Temple (Thiruvanaikaval)",
                "🪨 Rockfort Temple (Ucchi Pillayar Temple)",
                "🛕 Thayumanaswamy Temple",
                "01:30 PM – Lunch Break (Self-paid)",
                "Proceed to Thanjavur (Approx. 60 km | 1.5 Hours).",
                "Evening Sightseeing",
                "🛕 Brihadeeswarar Temple (UNESCO World Heritage Site)",
                "🌇 Evening Temple Visit & Photography",
                "06:30 PM – Hotel Check-in at Thanjavur.",
                "🏨 Overnight Stay in Thanjavur"
            ]
        },
        {
            "day": "Day 02",
            "title": "Thanjavur Sightseeing & Return to Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Thanjavur Sightseeing",
                "🏛️ Thanjavur Royal Palace",
                "📚 Saraswathi Mahal Library",
                "🖼️ Thanjavur Art Gallery",
                "🛍️ Local Shopping – Tanjore Paintings, Dolls & Handicrafts",
                "01:00 PM – Lunch Break (Self-paid)",
                "Begin your return journey to Madurai.",
                "05:30 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "1 Night Hotel Accommodation",
        "Complimentary Breakfast",
        "Trichy & Thanjavur Sightseeing as per Itinerary",
        "Experienced Driver",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Temple Special Darshan Tickets",
        "Monument & Museum Entry Fees",
        "Lunch & Dinner",
        "Guide Services",
        "Personal Expenses"
    ],
    "highlights": [
        "2 Days / 1 Night Tour",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "1 Night Hotel Accommodation",
        "Complimentary Breakfast",
        "Temple & Heritage Sightseeing",
        "Experienced Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai to Trichy & Thanjavur 2 Days / 1 Night Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2034"
},
  '2035': {
    "title": "Madurai to Tiruchendur 2 Days / 1 Night Tour Package",
    "image": "/assets/madurai 63 package/322x372/maduraitothiruchendur2days.png",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraithiruchendur2days.png",
    "overview": {
        "duration": "2 Days / 1 Night",
        "destination": "Madurai",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai to Tiruchendur",
            "activities": [
                "08:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Drive to Tiruchendur (Approx. 180 km | 4 Hours).",
                "En Route Sightseeing",
                "🛕 Tirupparankundram Murugan Temple (Optional)",
                "🌿 Scenic Village & Coastal Route",
                "01:00 PM – Lunch Break (Self-paid)",
                "Tiruchendur Sightseeing",
                "🛕 Arulmigu Subramaniya Swamy Temple (Tiruchendur Murugan Temple)",
                "🌊 Tiruchendur Beach",
                "🌊 Nazhi Kinaru (Sacred Freshwater Well)",
                "🛍️ Local Shopping",
                "06:00 PM – Hotel Check-in.",
                "🏨 Overnight Stay in Tiruchendur"
            ]
        },
        {
            "day": "Day 02",
            "title": "Tiruchendur to Madurai",
            "activities": [
                "07:30 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Morning Sightseeing",
                "🛕 Morning Darshan at Tiruchendur Murugan Temple",
                "🌊 Relax at Tiruchendur Beach",
                "Optional En Route Visit (Time Permitting)",
                "🛕 Sri Vaikuntam Temple (Nava Tirupati Divya Desam)",
                "01:00 PM – Lunch Break (Self-paid)",
                "Begin your return journey to Madurai.",
                "06:00 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "1 Night Hotel Accommodation",
        "Complimentary Breakfast",
        "Tiruchendur Sightseeing as per Itinerary",
        "Experienced Driver",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Temple Special Darshan Tickets",
        "Entry Fees (if applicable)",
        "Lunch & Dinner",
        "Guide Services",
        "Personal Expenses"
    ],
    "highlights": [
        "2 Days / 1 Night Tiruchendur Tour",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "1 Night Hotel Accommodation",
        "Complimentary Breakfast",
        "Temple & Beach Visit",
        "Experienced Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai to Tiruchendur 2 Days / 1 Night Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2035"
},
  '2036': {
    "title": "Madurai to Kanyakumari & Trivandrum 2 Days / 1 Night Tour Package",
    "image": "/assets/madurai 63 package/2day/madurai to kanyakuamri2days.png",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraikanyakumaritrivandrum2days.png",
    "overview": {
        "duration": "2 Days / 1 Night",
        "destination": "Madurai",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai to Kanyakumari",
            "activities": [
                "08:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Drive to Kanyakumari (Approx. 245 km | 4.5–5 Hours).",
                "Kanyakumari Sightseeing",
                "🛕 Kanyakumari Bhagavathy Amman Temple",
                "🌊 Triveni Sangam (Confluence of Three Seas)",
                "🪨 Vivekananda Rock Memorial (Boat Ticket Extra)",
                "🗿 Thiruvalluvar Statue",
                "🌉 Glass Bridge",
                "🏛️ Gandhi Memorial Mandapam",
                "🌅 Sunset View Point",
                "🛍️ Local Shopping",
                "06:30 PM – Hotel Check-in.",
                "🏨 Overnight Stay in Kanyakumari"
            ]
        },
        {
            "day": "Day 02",
            "title": "Kanyakumari to Trivandrum",
            "activities": [
                "05:45 AM (Optional) – Sunrise at Kanyakumari Beach (Weather Permitting)",
                "08:00 AM – Breakfast at Hotel & Check-out.",
                "Proceed towards Trivandrum.",
                "En Route Sightseeing",
                "🛕 Suchindram Thanumalayan Temple",
                "🏰 Padmanabhapuram Palace",
                "Trivandrum Sightseeing",
                "🛕 Sree Padmanabhaswamy Temple",
                "🦁 Napier Museum (Closed on Mondays)",
                "🐘 Trivandrum Zoo",
                "🌊 Kovalam Beach",
                "🌅 Aazhimala Shiva Temple (Optional, if time permits)",
                "06:00 PM – Drop at Trivandrum Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup from Madurai",
        "Drop at Trivandrum",
        "1 Night Hotel Accommodation",
        "Complimentary Breakfast",
        "Sightseeing as per Itinerary",
        "Experienced Driver",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Boat Tickets to Vivekananda Rock Memorial",
        "Monument & Museum Entry Fees",
        "Temple Special Darshan Tickets",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Services"
    ],
    "highlights": [
        "2 Days / 1 Night Tour",
        "Pickup from Madurai",
        "Drop at Trivandrum",
        "Private A/C Vehicle",
        "1 Night Hotel Accommodation",
        "Complimentary Breakfast",
        "Temple, Heritage & Beach Sightseeing",
        "Experienced Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai – Kanyakumari – Trivandrum 2 Days / 1 Night Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2036"
},
  '2037': {
    "title": "Madurai to Thekkady & Alleppey 2 Days / 1 Night Tour Package",
    "image": "/assets/madurai 63 package/2day/Madurai to thekkadi 2days.png",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraithekadyalepy3days.png",
    "overview": {
        "duration": "2 Days / 1 Night",
        "destination": "Madurai",
        "activities": "Nature, Backwaters, Sightseeing",
        "themes": "Nature & Adventure, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai to Thekkady to Alleppey",
            "activities": [
                "06:30 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Drive to Thekkady (Approx. 140 km | 3.5–4 Hours).",
                "Thekkady Sightseeing",
                "🌳 Periyar Wildlife Sanctuary",
                "🚤 Periyar Lake Boating (Optional – Advance Booking Recommended)",
                "🌿 Spice Plantation Tour",
                "🐘 Elephant Camp (Optional Activities)",
                "🛍️ Kumily Spice Shopping",
                "01:30 PM – Lunch Break (Self-paid)",
                "Proceed to Alleppey (Approx. 140 km | 4 Hours).",
                "06:30 PM – Hotel Check-in at Alleppey.",
                "Enjoy a relaxing evening near Alleppey Beach or the backwaters.",
                "🏨 Overnight Stay in Alleppey"
            ]
        },
        {
            "day": "Day 02",
            "title": "Alleppey Sightseeing & Return to Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Alleppey Sightseeing",
                "🚤 Shikara Boat Ride (Optional)",
                "🌊 Alleppey Backwaters",
                "🏖️ Alleppey Beach",
                "🛍️ Local Coir & Handicraft Shopping",
                "01:00 PM – Lunch Break (Self-paid)",
                "Begin your return journey to Madurai.",
                "07:30 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "1 Night Hotel Accommodation in Alleppey",
        "Complimentary Breakfast",
        "Thekkady & Alleppey Sightseeing as per Itinerary",
        "Experienced Driver",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Periyar Boating Tickets",
        "Shikara / Houseboat Charges",
        "Wildlife Sanctuary Entry Fees",
        "Elephant Ride & Activities",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "2 Days / 1 Night Kerala Tour",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "1 Night Hotel Accommodation in Alleppey",
        "Complimentary Breakfast",
        "Thekkady Wildlife & Spice Plantation",
        "Alleppey Backwater Experience",
        "Experienced Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai → Thekkady → Alleppey 2 Days / 1 Night Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2037"
},
  '2038': {
    "title": "Madurai to Munnar & Marayoor 2 Days / 1 Night Tour Package",
    "image": "/assets/madurai 63 package/322x372/maduraimunnarmarayoor2day.png",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraimunnarmarayoor3days.png",
    "overview": {
        "duration": "2 Days / 1 Night",
        "destination": "Madurai",
        "activities": "Nature, Sightseeing",
        "themes": "Nature & Adventure, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai to Munnar",
            "activities": [
                "06:30 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Drive to Munnar via Bodimettu.",
                "En Route Sightseeing",
                "🌄 Bodimettu View Point",
                "📸 Poopara View Point",
                "🌊 Anayirangal Dam View Point",
                "💧 Chinnakanal Waterfalls",
                "🌄 Lockhart Gap View Point",
                "📍 Signal Point",
                "01:30 PM – Lunch Break (Self-paid)",
                "Munnar Sightseeing",
                "🌹 Rose Garden",
                "📸 Photo Point",
                "🌿 Blossom Hydel Park (Subject to Time)",
                "🎭 Kathakali Cultural Show (Optional)",
                "⚔️ Kalaripayattu Martial Arts Show (Optional)",
                "06:00 PM – Hotel Check-in.",
                "🏨 Overnight Stay in Munnar"
            ]
        },
        {
            "day": "Day 02",
            "title": "Munnar to Marayoor & Return to Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Marayoor Sightseeing",
                "🌳 Marayoor Sandalwood Forest",
                "🪨 Muniyara Dolmens (Ancient Stone Burial Chambers)",
                "🌿 Sugarcane Fields",
                "🍯 Marayoor Jaggery Production Area",
                "🌊 Lakkam Waterfalls (Subject to Time & Water Flow)",
                "🛍️ Local Shopping",
                "01:30 PM – Lunch Break (Self-paid)",
                "Begin your return journey to Madurai via Munnar and Bodimettu.",
                "08:00 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "1 Night Hotel Accommodation in Munnar",
        "Complimentary Breakfast",
        "Munnar & Marayoor Sightseeing as per Itinerary",
        "Experienced Driver",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Entry Tickets",
        "Adventure Activities",
        "Kathakali & Kalari Show Tickets",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "2 Days / 1 Night Tour",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "1 Night Hotel Accommodation in Munnar",
        "Complimentary Breakfast",
        "Munnar Sightseeing",
        "Marayoor Sandalwood Forest & Muniyara",
        "Experienced Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai → Munnar → Marayoor 2 Days / 1 Night Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2038"
},
  '2039': {
    "title": "Madurai to Munnar 3 Days / 2 Nights Tour Package",
    "image": "/assets/madurai 63 package/322x372/maduraitomunnar2day.png",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraitomunnar.png",
    "overview": {
        "duration": "3 Days / 2 Nights",
        "destination": "Madurai",
        "activities": "Nature, Sightseeing",
        "themes": "Nature & Adventure, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai to Munnar",
            "activities": [
                "06:30 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Drive to Munnar via Bodimettu through the scenic Western Ghats.",
                "En Route Sightseeing",
                "🌄 Bodimettu View Point",
                "📸 Poopara View Point",
                "🌊 Anayirangal Dam View Point",
                "💧 Chinnakanal Waterfalls",
                "🌄 Lockhart Gap View Point",
                "📍 Signal Point",
                "01:30 PM – Lunch Break (Self-paid)",
                "Evening Sightseeing",
                "🌳 Blossom Hydel Park",
                "🎭 Kathakali Cultural Show (Optional)",
                "⚔️ Kalaripayattu Martial Arts Show (Optional)",
                "06:00 PM – Hotel Check-in.",
                "🏨 Overnight Stay in Munnar"
            ]
        },
        {
            "day": "Day 02",
            "title": "Full Day Munnar Sightseeing",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Visit",
                "🌹 Rose Garden",
                "📸 Photo Point",
                "🐘 Elephant Park",
                "💧 Mattupetty Dam",
                "🍃 Tea Museum & Tea Factory",
                "🌊 Echo Point",
                "🚤 Kundala Lake",
                "🌄 Top Station (Subject to Time & Weather)",
                "Return to the hotel in the evening.",
                "🏨 Overnight Stay in Munnar"
            ]
        },
        {
            "day": "Day 03",
            "title": "Munnar Sightseeing & Return to Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Sightseeing",
                "🌿 Tea Valley View Point",
                "📸 2 Mile View Point",
                "🌱 Spice Plantation Visit",
                "🎢 Adventure Park (Optional)",
                "01:30 PM – Lunch Break (Self-paid)",
                "Begin your return journey to Madurai via Rajakad – Poopara – Bodimettu.",
                "07:30 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Munnar Sightseeing as per Itinerary",
        "Experienced Driver",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Entry Tickets",
        "Tea Museum Entry Fee",
        "Boating Charges",
        "Elephant Ride & Activities",
        "Kathakali & Kalaripayattu Show Tickets",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "3 Days / 2 Nights Munnar Tour",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Tea Plantations & Scenic Viewpoints",
        "Waterfalls & Nature Attractions",
        "Experienced Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai to Munnar 3 Days / 2 Nights Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2039"
},
  '2040': {
    "title": "Madurai to Kodaikanal & Mannavanur 3 Days / 2 Nights Tour Package",
    "image": "/assets/madurai 63 package/2day/madurai to Kodaikanal 2 day trip.png",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraikodaikanal3days.png",
    "overview": {
        "duration": "3 Days / 2 Nights",
        "destination": "Madurai",
        "activities": "Nature, Sightseeing",
        "themes": "Nature & Adventure, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai to Kodaikanal",
            "activities": [
                "08:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Drive to Kodaikanal.",
                "En Route Sightseeing",
                "💧 Silver Cascade Falls",
                "📸 Scenic Valley View Points",
                "01:00 PM – Hotel Check-in.",
                "Evening Sightseeing",
                "🌿 Coaker's Walk",
                "🌺 Bryant Park",
                "🚣 Kodaikanal Lake",
                "🚴 Boating & Cycling (Optional)",
                "🛍️ Anna Salai Shopping Street",
                "🏨 Overnight Stay in Kodaikanal"
            ]
        },
        {
            "day": "Day 02",
            "title": "Kodaikanal & Mannavanur Sightseeing",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Visit",
                "🌄 Mannavanur Lake",
                "🐑 Mannavanur Sheep Farm (Entry subject to Government regulations)",
                "🌿 Mannavanur Eco Tourism View Point",
                "🌳 Pine Forest",
                "🌫️ Guna Caves (View Point)",
                "🪨 Pillar Rocks",
                "🌅 Moir Point",
                "Return to the hotel.",
                "🏨 Overnight Stay in Kodaikanal"
            ]
        },
        {
            "day": "Day 03",
            "title": "Kodaikanal Sightseeing & Return to Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Sightseeing",
                "🌹 Rose Garden",
                "🐘 Elephant Valley View",
                "💧 Upper Lake View",
                "🍫 Homemade Chocolate Factory",
                "☕ Spice & Herbal Products Shopping",
                "01:30 PM – Lunch Break (Self-paid)",
                "Return to Madurai.",
                "05:30 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Kodaikanal & Mannavanur Sightseeing",
        "Experienced Hill Driver",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Entry Tickets",
        "Boating Charges",
        "Camera Fees",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges",
        "Contact Us",
        "LOGAA HOLIDAYS",
        "📞 +91 73973 29776",
        "📧 logaaholidays@gmail.com",
        "🌐 www.logaaholidays.com",
        "Book your Madurai to Kodaikanal & Mannavanur 3 Days / 2 Nights Tour Package with Logaa Holidays and enjoy an unforgettable hill station holiday surrounded by misty mountains, lakes, pine forests, and the peaceful beauty of Mannavanur."
    ],
    "highlights": [
        "3 Days / 2 Nights Kodaikanal Tour",
        "Visit Mannavanur Eco Tourism Area",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Scenic Hill Drive & Viewpoints",
        "Experienced Hill Driver"
    ],
    "keywords": "Madurai to Kodaikanal 3 Days / 2 Nights Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2040"
},
  '2041': {
    "title": "Madurai to Thekkady 3 Days / 2 Nights Tour Package",
    "image": "/assets/madurai 63 package/322x372/maduraitothekady3day.png",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraithekady3days.png",
    "overview": {
        "duration": "3 Days / 2 Nights",
        "destination": "Madurai",
        "activities": "Nature, Wildlife, Sightseeing",
        "themes": "Nature & Adventure, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai to Thekkady",
            "activities": [
                "07:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Drive to Thekkady via Cumbum and Kumily.",
                "En Route Sightseeing",
                "🌄 Western Ghats Scenic Drive",
                "🌿 Cumbum Valley View",
                "☕ Photo Stops",
                "11:30 AM – Arrive in Thekkady.",
                "Hotel Check-in & Lunch (Self-paid)",
                "Evening Activities",
                "🌿 Spice Plantation Visit",
                "🛍️ Kumily Local Spice Market",
                "🎭 Kathakali Cultural Show (Optional)",
                "⚔️ Kalaripayattu Martial Arts Show (Optional)",
                "🏨 Overnight Stay in Thekkady"
            ]
        },
        {
            "day": "Day 02",
            "title": "Full Day Thekkady Sightseeing",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Visit",
                "🐘 Periyar Wildlife Sanctuary",
                "🚤 Periyar Lake Boat Safari (Optional – Advance Booking Recommended)",
                "🐘 Elephant Junction (Elephant Ride, Bath & Feeding – Optional)",
                "🌿 Nature Walk (Optional)",
                "🚙 Jeep Safari (Optional)",
                "🌱 Spice Garden Tour",
                "🛍️ Shopping for Kerala Spices, Tea & Chocolates",
                "🏨 Overnight Stay in Thekkady"
            ]
        },
        {
            "day": "Day 03",
            "title": "Thekkady to Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "En Route Sightseeing",
                "💦 Suruli Falls (Seasonal)",
                "🛕 Mangala Devi Kannagi Temple (Seasonal & Subject to Government Permission)",
                "🌿 Lower Camp View Point",
                "01:30 PM – Lunch Break (Self-paid)",
                "Proceed to Madurai.",
                "05:30 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Thekkady Sightseeing as per Itinerary",
        "Experienced Driver",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Periyar Wildlife Sanctuary Entry Fee",
        "Periyar Lake Boat Safari Tickets",
        "Elephant Activities",
        "Jeep Safari Charges",
        "Kathakali & Kalaripayattu Show Tickets",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "3 Days / 2 Nights Thekkady Tour",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Periyar Wildlife Sanctuary",
        "Periyar Lake Boat Safari (Optional)",
        "Spice Plantation Tour",
        "Elephant Camp & Activities (Optional)",
        "Kathakali & Kalaripayattu Shows (Optional)",
        "Experienced Driver"
    ],
    "keywords": "Madurai to Thekkady 3 Days / 2 Nights Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2041"
},
  '2042': {
    "title": "Madurai to Thekkady & Vagamon 3 Days / 2 Nights Tour Package",
    "image": "/assets/madurai 63 package/2day/madurai to vagamon 2 days.png",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraithekadyvegamon3days.png",
    "overview": {
        "duration": "3 Days / 2 Nights",
        "destination": "Madurai",
        "activities": "Nature, Backwaters, Sightseeing",
        "themes": "Nature & Adventure, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai to Thekkady",
            "activities": [
                "07:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Drive to Thekkady via Cumbum and Kumily.",
                "Thekkady Sightseeing",
                "🌳 Periyar Wildlife Sanctuary",
                "🚤 Periyar Lake Boating (Optional – Advance Booking Recommended)",
                "🌿 Spice Plantation Tour",
                "🐘 Elephant Camp (Optional Activities)",
                "🛍️ Kumily Spice Market",
                "Evening Activities (Optional)",
                "🎭 Kathakali Cultural Show",
                "⚔️ Kalaripayattu Martial Arts Show",
                "06:00 PM – Hotel Check-in.",
                "🏨 Overnight Stay in Thekkady"
            ]
        },
        {
            "day": "Day 02",
            "title": "Thekkady to Vagamon",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out and proceed to Vagamon (Approx. 2 Hours).",
                "Vagamon Sightseeing",
                "🌲 Vagamon Pine Forest",
                "🌄 Vagamon Meadows",
                "⛪ Kurisumala Ashram View Point",
                "🌿 Tea Gardens",
                "🌊 Vagamon Lake",
                "🪂 Adventure Park & Paragliding Point (Seasonal & Optional)",
                "📸 Suicide Point View",
                "06:00 PM – Hotel Check-in at Vagamon.",
                "🏨 Overnight Stay in Vagamon"
            ]
        },
        {
            "day": "Day 03",
            "title": "Vagamon to Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Morning Sightseeing",
                "🌄 Thangal Para View Point",
                "💧 Marmala Waterfalls (Subject to Road & Weather Conditions)",
                "☕ Tea Estate Photo Stops",
                "🛍️ Local Spice & Tea Shopping",
                "01:00 PM – Lunch Break (Self-paid)",
                "Begin your return journey to Madurai.",
                "06:30 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Thekkady & Vagamon Sightseeing as per Itinerary",
        "Experienced Driver",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Periyar Wildlife Sanctuary Entry Fee",
        "Periyar Boating Tickets",
        "Elephant Ride & Activities",
        "Adventure Activities & Paragliding",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "3 Days / 2 Nights Kerala Hill Station Tour",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Thekkady Wildlife Sanctuary",
        "Vagamon Sightseeing",
        "Tea Estates & Pine Forest",
        "Experienced Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai → Thekkady → Vagamon 3 Days / 2 Nights Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2042"
},
  '2043': {
    "title": "Madurai to Meghamalai 3 Days / 2 Nights Tour Package",
    "image": "/assets/madurai 63 package/322x372/maduraitomegamalai3day.jpeg",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraitomegamalai3days.png",
    "overview": {
        "duration": "3 Days / 2 Nights",
        "destination": "Madurai",
        "activities": "Nature, Sightseeing",
        "themes": "Nature & Adventure, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai to Meghamalai",
            "activities": [
                "07:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Drive towards Meghamalai via Theni and Chinnamanur.",
                "En Route Sightseeing",
                "🛕 Veerapandi Gowmariamman Temple",
                "🌊 Vaigai Dam View Point (Optional)",
                "🌄 Scenic Ghat Road Photo Stops",
                "Meghamalai Sightseeing",
                "🌿 Meghamalai Tea Estates",
                "🌄 High Wavy View Point",
                "💧 Manalar Dam View Point",
                "📸 Tea Garden Photography",
                "03:00 PM – Hotel Check-in.",
                "Enjoy the peaceful hill station atmosphere.",
                "🏨 Overnight Stay in Meghamalai"
            ]
        },
        {
            "day": "Day 02",
            "title": "Full Day Meghamalai Sightseeing",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Visit",
                "🌄 Maharaja Mettu View Point",
                "🌿 Vellimalai View Point",
                "🌳 Tea Plantation Drive",
                "💧 Meghamalai Waterfalls (Seasonal)",
                "🌲 Forest View Points",
                "🦋 Bird Watching & Nature Walk",
                "☕ Tea Estate Visit",
                "Return to the hotel.",
                "🏨 Overnight Stay in Meghamalai"
            ]
        },
        {
            "day": "Day 03",
            "title": "Meghamalai to Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Morning Sightseeing",
                "🌊 Iravangalar Dam View Point",
                "📸 Cloud Valley View",
                "🛍️ Tea, Coffee & Spice Shopping",
                "01:00 PM – Lunch Break (Self-paid)",
                "Begin your return journey to Madurai.",
                "05:30 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Meghamalai Sightseeing as per Itinerary",
        "Experienced Hill Driver",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Entry Tickets",
        "Forest Entry Fees (If Applicable)",
        "Camera Charges",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "3 Days / 2 Nights Meghamalai Tour",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Tea Estates & Scenic Viewpoints",
        "Dams, Waterfalls & Forest Drive",
        "Wildlife & Nature Photography",
        "Experienced Hill Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai to Meghamalai 3 Days / 2 Nights Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2043"
},
  '2044': {
    "title": "Madurai to Ooty & Coonoor 3 Days / 2 Nights Tour Package",
    "image": "/assets/madurai 63 package/2day/madurai to ooty 2 days trip.png",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraiooty3days.png",
    "overview": {
        "duration": "3 Days / 2 Nights",
        "destination": "Madurai",
        "activities": "Nature, Sightseeing",
        "themes": "Nature & Adventure, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai to Ooty",
            "activities": [
                "06:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Drive to Ooty via Dindigul, Coimbatore, Mettupalayam, and the Nilgiri Ghat Road.",
                "En Route Sightseeing",
                "🌄 Ketti Valley View Point",
                "🌿 Tea Garden Photo Stops",
                "01:30 PM – Lunch Break (Self-paid)",
                "Evening Sightseeing",
                "🌺 Government Botanical Garden",
                "🌹 Government Rose Garden",
                "🛍️ Charing Cross Shopping",
                "06:00 PM – Hotel Check-in.",
                "🏨 Overnight Stay in Ooty"
            ]
        },
        {
            "day": "Day 02",
            "title": "Ooty & Coonoor Sightseeing",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Ooty Sightseeing",
                "🚤 Ooty Lake",
                "🌄 Doddabetta Peak",
                "🍫 Tea Factory & Chocolate Factory",
                "Proceed to Coonoor.",
                "Coonoor Sightseeing",
                "🌿 Sim's Park",
                "💧 Catherine Falls View Point",
                "🌄 Dolphin's Nose View Point",
                "🚂 Wellington View Point",
                "Return to Ooty.",
                "🏨 Overnight Stay in Ooty"
            ]
        },
        {
            "day": "Day 03",
            "title": "Ooty to Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Morning Sightseeing",
                "🌲 Pine Forest",
                "🎬 6th Mile Shooting Point",
                "📸 9th Mile Shooting Point",
                "🌊 Pykara Lake & Pykara Falls (Subject to Time)",
                "01:30 PM – Lunch Break (Self-paid)",
                "Begin your return journey to Madurai.",
                "08:30 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Ooty & Coonoor Sightseeing as per Itinerary",
        "Experienced Hill Driver",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Entry Tickets",
        "Toy Train Tickets (Subject to Availability)",
        "Boating Charges",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "3 Days / 2 Nights Ooty Tour",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Ooty & Coonoor Sightseeing",
        "Tea Gardens & Waterfalls",
        "Experienced Hill Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai to Ooty 3 Days / 2 Nights Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2044"
},
  '2045': {
    "title": "Madurai to Munnar & Thekkady 3 Days / 2 Nights Tour Package",
    "image": "/assets/madurai 63 package/322x372/maduraimunnarthekady3day.png",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraimunnarthekady3days.png",
    "overview": {
        "duration": "3 Days / 2 Nights",
        "destination": "Madurai",
        "activities": "Nature, Sightseeing",
        "themes": "Nature & Adventure, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai to Munnar",
            "activities": [
                "06:30 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Proceed to Munnar via Bodimettu.",
                "En Route Sightseeing",
                "🌄 Bodimettu View Point",
                "📸 Poopara View Point",
                "🌊 Anayirangal Dam",
                "💧 Chinnakanal Waterfalls",
                "🌄 Lockhart Gap View Point",
                "📍 Signal Point",
                "01:30 PM – Lunch Break (Self-paid)",
                "Evening Sightseeing",
                "🌳 Blossom Hydel Park",
                "🎭 Kathakali Cultural Show (Optional)",
                "⚔️ Kalaripayattu Martial Arts Show (Optional)",
                "06:00 PM – Hotel Check-in.",
                "🏨 Overnight Stay in Munnar"
            ]
        },
        {
            "day": "Day 02",
            "title": "Munnar to Thekkady",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out and enjoy Munnar sightseeing.",
                "Visit",
                "🌹 Rose Garden",
                "📸 Photo Point",
                "💧 Mattupetty Dam",
                "🍃 Tea Museum & Tea Factory",
                "🌊 Echo Point",
                "After sightseeing, proceed to Thekkady (Approx. 90 km | 3 Hours).",
                "Evening Sightseeing",
                "🌿 Spice Plantation Tour",
                "🛍️ Kumily Spice Market",
                "06:00 PM – Hotel Check-in.",
                "🏨 Overnight Stay in Thekkady"
            ]
        },
        {
            "day": "Day 03",
            "title": "Thekkady to Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Thekkady Sightseeing",
                "🌳 Periyar Wildlife Sanctuary",
                "🚤 Periyar Lake Boating (Optional – Advance Booking Recommended)",
                "🐘 Elephant Camp (Optional Activities)",
                "🎭 Kathakali Show (Optional)",
                "01:30 PM – Lunch Break (Self-paid)",
                "Begin your return journey to Madurai.",
                "06:30 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Munnar & Thekkady Sightseeing as per Itinerary",
        "Experienced Hill Driver",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Periyar Wildlife Sanctuary Entry Fee",
        "Periyar Lake Boating Tickets",
        "Tea Museum Entry Fee",
        "Kathakali & Kalaripayattu Show Tickets",
        "Elephant Ride & Activities",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "3 Days / 2 Nights Kerala Tour",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Munnar Hill Station Sightseeing",
        "Thekkady Wildlife & Spice Plantation Tour",
        "Experienced Hill Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai → Munnar → Thekkady 3 Days / 2 Nights Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2045"
},
  '2046': {
    "title": "Madurai to Munnar & Alleppey 3 Days / 2 Nights Tour Package",
    "image": "/assets/madurai 63 package/322x372/maduraimunnaraleppey3day.png",
    "heroImage": "/assets/madurai 63 package/1918x642/Madurai → Munnar → Alleppey → Kochi 4 Days  3 Nights Tour Package.png",
    "overview": {
        "duration": "3 Days / 2 Nights",
        "destination": "Madurai",
        "activities": "Nature, Backwaters, Sightseeing",
        "themes": "Nature & Adventure, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai to Munnar",
            "activities": [
                "06:30 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Proceed to Munnar via Bodimettu.",
                "En Route Sightseeing",
                "🌄 Bodimettu View Point",
                "📸 Poopara View Point",
                "🌊 Anayirangal Dam View Point",
                "💧 Chinnakanal Waterfalls",
                "🌄 Lockhart Gap View Point",
                "📍 Signal Point",
                "01:30 PM – Lunch Break (Self-paid)",
                "Evening Sightseeing",
                "🌳 Blossom Hydel Park",
                "🎭 Kathakali Cultural Show (Optional)",
                "⚔️ Kalaripayattu Martial Arts Show (Optional)",
                "06:00 PM – Hotel Check-in.",
                "🏨 Overnight Stay in Munnar"
            ]
        },
        {
            "day": "Day 02",
            "title": "Munnar to Alleppey",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Munnar Sightseeing",
                "🌹 Rose Garden",
                "📸 Photo Point",
                "🍃 Tea Museum & Tea Factory",
                "💧 Mattupetty Dam",
                "🌊 Echo Point",
                "After sightseeing, proceed to Alleppey (Approx. 170 km | 5 Hours).",
                "05:30 PM – Hotel Check-in at Alleppey.",
                "Evening Leisure",
                "🌅 Alleppey Beach",
                "🛍️ Local Shopping",
                "🏨 Overnight Stay in Alleppey"
            ]
        },
        {
            "day": "Day 03",
            "title": "Alleppey Sightseeing & Return to Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Alleppey Sightseeing",
                "🚤 Shikara Boat Ride (Optional)",
                "🛶 Alleppey Backwaters",
                "🏖️ Alleppey Beach",
                "🛕 Mullakkal Rajarajeswari Temple",
                "🛍️ Coir & Handicraft Shopping",
                "01:00 PM – Lunch Break (Self-paid)",
                "Begin your return journey to Madurai.",
                "07:30 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Munnar & Alleppey Sightseeing as per Itinerary",
        "Experienced Driver",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Shikara Boat Ride Charges",
        "Houseboat Charges (Unless Selected)",
        "Tea Museum Entry Fee",
        "Entry Tickets",
        "Lunch & Dinner (Except in Houseboat Package, if booked)",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "3 Days / 2 Nights Kerala Tour",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Munnar Hill Station Sightseeing",
        "Alleppey Backwater Experience",
        "Shikara Boat Ride (Optional)",
        "Houseboat Stay (Optional Upgrade Available)",
        "Experienced Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai → Munnar → Alleppey 3 Days / 2 Nights Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2046"
},
  '2047': {
    "title": "Madurai to Thekkady & Alleppey 3 Days / 2 Nights Tour Package",
    "image": "/assets/madurai 63 package/322x372/maduraithekadyalepey2day.jpeg",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraithekadyalepy3days.png",
    "overview": {
        "duration": "3 Days / 2 Nights",
        "destination": "Madurai",
        "activities": "Nature, Wildlife, Sightseeing",
        "themes": "Nature & Adventure, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai to Thekkady",
            "activities": [
                "07:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Drive to Thekkady via Cumbum and Kumily.",
                "Thekkady Sightseeing",
                "🌳 Periyar Wildlife Sanctuary",
                "🚤 Periyar Lake Boating (Optional – Advance Booking Recommended)",
                "🌿 Spice Plantation Tour",
                "🐘 Elephant Camp (Optional Activities)",
                "🛍️ Kumily Spice Market",
                "Evening Activities (Optional)",
                "🎭 Kathakali Cultural Show",
                "⚔️ Kalaripayattu Martial Arts Show",
                "06:00 PM – Hotel Check-in.",
                "🏨 Overnight Stay in Thekkady"
            ]
        },
        {
            "day": "Day 02",
            "title": "Thekkady to Alleppey",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out and proceed to Alleppey (Approx. 140 km | 4–5 Hours).",
                "En Route Scenic Drive",
                "Enjoy the beautiful landscapes of Kerala with tea plantations, spice gardens, and countryside views.",
                "01:30 PM – Lunch Break (Self-paid)",
                "Alleppey Sightseeing",
                "🏖️ Alleppey Beach",
                "🛶 Alleppey Backwaters",
                "🛍️ Coir & Handicraft Shopping",
                "🌅 Sunset View at Alleppey Beach",
                "05:30 PM – Hotel Check-in.",
                "🏨 Overnight Stay in Alleppey",
                "Optional Upgrade: Stay overnight in a Deluxe Houseboat with lunch, evening tea & snacks, dinner, and breakfast."
            ]
        },
        {
            "day": "Day 03",
            "title": "Alleppey to Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Morning Sightseeing",
                "🚤 Shikara Boat Ride (Optional)",
                "🛕 Mullakkal Rajarajeswari Temple",
                "🌴 Backwater Village Cruise (Optional)",
                "01:00 PM – Lunch Break (Self-paid)",
                "Begin your return journey to Madurai.",
                "07:30 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "2 Nights Accommodation (Hotel/Houseboat as Selected)",
        "Complimentary Breakfast (Hotel Stay)",
        "Thekkady & Alleppey Sightseeing as per Itinerary",
        "Experienced Driver",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Periyar Wildlife Sanctuary Entry Fee",
        "Periyar Boating Tickets",
        "Shikara Boat Ride Charges",
        "Houseboat Upgrade Charges (If Not Selected)",
        "Elephant Ride & Activities",
        "Lunch & Dinner (Except Houseboat Package, if booked)",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "3 Days / 2 Nights Kerala Tour",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Periyar Wildlife Sanctuary",
        "Spice Plantation Tour",
        "Alleppey Backwater Experience",
        "Optional Shikara Boat Ride or Houseboat Stay",
        "Experienced Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai → Thekkady → Alleppey 3 Days / 2 Nights Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2047"
},
  '2048': {
    "title": "Madurai to Munnar & Vagamon 3 Days / 2 Nights Tour Package",
    "image": "/assets/madurai 63 package/322x372/maduraimunnarvegamon3day.png",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraimunnarvegamon.png",
    "overview": {
        "duration": "3 Days / 2 Nights",
        "destination": "Madurai",
        "activities": "Nature, Sightseeing",
        "themes": "Nature & Adventure, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai to Munnar",
            "activities": [
                "06:30 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Proceed to Munnar via Bodimettu.",
                "En Route Sightseeing",
                "🌄 Bodimettu View Point",
                "📸 Poopara View Point",
                "🌊 Anayirangal Dam View Point",
                "💧 Chinnakanal Waterfalls",
                "🌄 Lockhart Gap View Point",
                "📍 Signal Point",
                "01:30 PM – Lunch Break (Self-paid)",
                "Evening Sightseeing",
                "🌳 Blossom Hydel Park",
                "🎭 Kathakali Cultural Show (Optional)",
                "⚔️ Kalaripayattu Martial Arts Show (Optional)",
                "06:00 PM – Hotel Check-in.",
                "🏨 Overnight Stay in Munnar"
            ]
        },
        {
            "day": "Day 02",
            "title": "Munnar to Vagamon",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Munnar Sightseeing",
                "🌹 Rose Garden",
                "📸 Photo Point",
                "💧 Mattupetty Dam",
                "🍃 Tea Museum & Tea Factory",
                "🌊 Echo Point",
                "Proceed to Vagamon (Approx. 100 km | 3–4 Hours).",
                "Vagamon Sightseeing",
                "🌲 Vagamon Pine Forest",
                "🌄 Vagamon Meadows",
                "🌿 Tea Gardens",
                "06:00 PM – Hotel Check-in.",
                "🏨 Overnight Stay in Vagamon"
            ]
        },
        {
            "day": "Day 03",
            "title": "Vagamon to Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Vagamon Sightseeing",
                "⛪ Kurisumala Ashram View Point",
                "🌄 Thangal Para View Point",
                "🌊 Vagamon Lake",
                "💧 Marmala Waterfalls (Subject to Road & Weather Conditions)",
                "🪂 Adventure Park & Paragliding Point (Optional)",
                "🛍️ Tea & Spice Shopping",
                "01:30 PM – Lunch Break (Self-paid)",
                "Begin your return journey to Madurai.",
                "06:30 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Munnar & Vagamon Sightseeing as per Itinerary",
        "Experienced Hill Driver",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Entry Tickets",
        "Tea Museum Entry Fee",
        "Adventure Activity Charges",
        "Paragliding Charges",
        "Kathakali & Kalaripayattu Show Tickets",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "3 Days / 2 Nights Kerala Hill Station Tour",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Munnar Hill Station Sightseeing",
        "Vagamon Sightseeing",
        "Tea Estates, Waterfalls & Pine Forest",
        "Experienced Hill Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai → Munnar → Vagamon 3 Days / 2 Nights Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2048"
},
  '2049': {
    "title": "Madurai to Munnar & Marayoor 3 Days / 2 Nights Tour Package",
    "image": "/assets/madurai 63 package/322x372/maduraimunnarmarayoor3day.jpeg",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraimunnarmarayoor3days.png",
    "overview": {
        "duration": "3 Days / 2 Nights",
        "destination": "Madurai",
        "activities": "Nature, Sightseeing",
        "themes": "Nature & Adventure, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai to Munnar",
            "activities": [
                "06:30 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Proceed to Munnar via Bodimettu.",
                "En Route Sightseeing",
                "🌄 Bodimettu View Point",
                "📸 Poopara View Point",
                "🌊 Anayirangal Dam View Point",
                "💧 Chinnakanal Waterfalls",
                "🌄 Lockhart Gap View Point",
                "📍 Signal Point",
                "01:30 PM – Lunch Break (Self-paid)",
                "Evening Sightseeing",
                "🌳 Blossom Hydel Park",
                "🎭 Kathakali Cultural Show (Optional)",
                "⚔️ Kalaripayattu Martial Arts Show (Optional)",
                "06:00 PM – Hotel Check-in.",
                "🏨 Overnight Stay in Munnar"
            ]
        },
        {
            "day": "Day 02",
            "title": "Munnar to Marayoor Sightseeing",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Proceed for a full-day excursion to Marayoor.",
                "Visit",
                "🌹 Rose Garden",
                "📸 Photo Point",
                "💧 Mattupetty Dam",
                "🌊 Echo Point",
                "🌿 Marayoor Sandalwood Forest",
                "🪨 Muniyara Dolmens (Ancient Stone Burial Chambers)",
                "💧 Lakkam Waterfalls (Seasonal)",
                "🍯 Marayoor Jaggery Production Centre",
                "☕ Tea & Spice Shopping",
                "Return to Munnar in the evening.",
                "🏨 Overnight Stay in Munnar"
            ]
        },
        {
            "day": "Day 03",
            "title": "Munnar to Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Morning Sightseeing",
                "🍃 Tea Museum & Tea Factory",
                "🌿 Tea Valley View Point",
                "📸 2 Mile View Point",
                "🌱 Spice Plantation Visit",
                "🎢 Adventure Park (Optional)",
                "01:30 PM – Lunch Break (Self-paid)",
                "Begin your return journey to Madurai.",
                "07:30 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Munnar & Marayoor Sightseeing as per Itinerary",
        "Experienced Hill Driver",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Entry Tickets",
        "Tea Museum Entry Fee",
        "Lakkam Waterfalls Entry Fee",
        "Kathakali & Kalaripayattu Show Tickets",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "3 Days / 2 Nights Kerala Hill Station Tour",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Munnar Hill Station Sightseeing",
        "Marayoor Sandalwood Forest",
        "Lakkam Waterfalls & Muniyara",
        "Tea Estates & Scenic Viewpoints",
        "Experienced Hill Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai → Munnar → Marayoor 3 Days / 2 Nights Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2049"
},
  '2050': {
    "title": "Madurai to Thekkady & Kumarakom 3 Days / 2 Nights Tour Package",
    "image": "/assets/madurai 63 package/322x372/maduraithekadykumarakonam3day.png",
    "heroImage": "/assets/madurai 63 package/1918x642/Madurai → Munnar → Thekkady → Kumarakom 4 Days  3 Nights Tour Package.png",
    "overview": {
        "duration": "3 Days / 2 Nights",
        "destination": "Madurai",
        "activities": "Pilgrimage, Nature, Sightseeing",
        "themes": "Religious & Pilgrimage, Nature & Adventure"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai to Thekkady",
            "activities": [
                "07:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Drive to Thekkady via Cumbum and Kumily.",
                "Thekkady Sightseeing",
                "🌳 Periyar Wildlife Sanctuary",
                "🚤 Periyar Lake Boating (Optional – Advance Booking Recommended)",
                "🌿 Spice Plantation Tour",
                "🐘 Elephant Camp (Optional Activities)",
                "🛍️ Kumily Spice Market",
                "Evening Activities (Optional)",
                "🎭 Kathakali Cultural Show",
                "⚔️ Kalaripayattu Martial Arts Show",
                "06:00 PM – Hotel Check-in.",
                "🏨 Overnight Stay in Thekkady"
            ]
        },
        {
            "day": "Day 02",
            "title": "Thekkady to Kumarakom",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out and proceed to Kumarakom (Approx. 125 km | 3.5–4 Hours).",
                "Kumarakom Sightseeing",
                "🛶 Kumarakom Backwaters",
                "🐦 Kumarakom Bird Sanctuary",
                "⛪ St. Mary's Church",
                "🌴 Coconut Lagoon Area",
                "🌅 Sunset View over Vembanad Lake",
                "05:30 PM – Hotel Check-in.",
                "🏨 Overnight Stay in Kumarakom",
                "Optional Upgrade: Stay overnight in a Luxury Houseboat on Vembanad Lake with lunch, evening tea & snacks, dinner, and breakfast."
            ]
        },
        {
            "day": "Day 03",
            "title": "Kumarakom to Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Morning Sightseeing",
                "🚤 Shikara Boat Ride (Optional)",
                "🌊 Vembanad Lake",
                "🛍️ Local Handicrafts & Spice Shopping",
                "01:00 PM – Lunch Break (Self-paid)",
                "Begin your return journey to Madurai.",
                "07:30 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "2 Nights Accommodation (Hotel/Houseboat as Selected)",
        "Complimentary Breakfast (Hotel Stay)",
        "Thekkady & Kumarakom Sightseeing as per Itinerary",
        "Experienced Driver",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Periyar Wildlife Sanctuary Entry Fee",
        "Periyar Lake Boating Tickets",
        "Bird Sanctuary Entry Fee",
        "Shikara Boat Ride Charges",
        "Houseboat Upgrade Charges (If Not Selected)",
        "Elephant Ride & Activities",
        "Lunch & Dinner (Except Houseboat Package, if booked)",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "3 Days / 2 Nights Kerala Tour",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Thekkady Wildlife Sanctuary",
        "Spice Plantation Tour",
        "Kumarakom Backwaters",
        "Bird Sanctuary",
        "Optional Houseboat & Shikara Ride",
        "Experienced Driver"
    ],
    "keywords": "Madurai → Thekkady → Kumarakom 3 Days / 2 Nights Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2050"
},
  '2051': {
    "title": "Madurai to Rameswaram & Kanyakumari 3 Days / 2 Nights Tour Package",
    "image": "/assets/madurai 63 package/322x372/madurairameshwaramkanyakumari3day.jpeg",
    "heroImage": "/assets/madurai 63 package/1918x642/Madurai_Rameswaram_Kanyakumari_tour_3days.jpeg",
    "overview": {
        "duration": "3 Days / 2 Nights",
        "destination": "Madurai",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai Sightseeing → Rameswaram",
            "activities": [
                "07:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Madurai Sightseeing",
                "🛕 Meenakshi Amman Temple",
                "🛕 Koodal Azhagar Temple",
                "🛕 Thiruparankundram Murugan Temple",
                "🏛️ Thirumalai Nayakkar Mahal",
                "01:00 PM – Lunch Break (Self-paid)",
                "Proceed to Rameswaram (Approx. 170 km | 3.5–4 Hours).",
                "06:00 PM – Hotel Check-in.",
                "🏨 Overnight Stay in Rameswaram"
            ]
        },
        {
            "day": "Day 02",
            "title": "Rameswaram Sightseeing → Kanyakumari",
            "activities": [
                "07:30 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Rameswaram Sightseeing",
                "🛕 Sri Ramanathaswamy Temple",
                "🌊 Agni Theertham",
                "🌉 Pamban Road Bridge",
                "🚆 Pamban Railway Bridge View Point",
                "🏛️ Dr. A.P.J. Abdul Kalam Memorial",
                "🏠 Abdul Kalam House Museum",
                "🌊 Dhanushkodi Beach",
                "🏚️ Ghost Town",
                "🌅 Arichal Munai",
                "Proceed to Kanyakumari (Approx. 310 km | 6–7 Hours).",
                "Evening Sightseeing",
                "🌇 Sunset View Point",
                "🌊 Triveni Sangam",
                "🏨 Overnight Stay in Kanyakumari"
            ]
        },
        {
            "day": "Day 03",
            "title": "Kanyakumari Sightseeing → Madurai",
            "activities": [
                "05:45 AM – Enjoy the spectacular Sunrise View.",
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Kanyakumari Sightseeing",
                "🛕 Kanyakumari Bhagavathi Amman Temple",
                "🪨 Vivekananda Rock Memorial",
                "🗿 Thiruvalluvar Statue",
                "🌉 Glass Bridge",
                "🏛️ Gandhi Memorial Mandapam",
                "01:00 PM – Lunch Break (Self-paid)",
                "Return to Madurai.",
                "06:00 PM – Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Madurai, Rameswaram & Kanyakumari Sightseeing as per Itinerary",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Temple Special Darshan Tickets",
        "Vivekananda Rock Ferry Tickets",
        "Entry Tickets",
        "Dhanushkodi Local Vehicle Charges (If Required)",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "3 Days / 2 Nights South India Tour",
        "Madurai, Rameswaram & Kanyakumari Sightseeing",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Dhanushkodi Excursion",
        "Sunrise & Sunset at Kanyakumari",
        "Experienced Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai → Rameswaram → Kanyakumari 3 Days / 2 Nights Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2051"
},
  '2052': {
    "title": "Best Madurai, Trichy, Thanjavur & Rameswaram Tour Package | 3 Days / 2 Nights",
    "image": "/assets/madurai 63 package/322x372/bestmaduraitrichytanjorerameshwaram3day.png",
    "heroImage": "/assets/madurai 63 package/1918x642/bestmaduraitanjoretrichy3days.png",
    "overview": {
        "duration": "3 Days / 2 Nights",
        "destination": "Madurai",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai Sightseeing → Trichy",
            "activities": [
                "07:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Madurai Sightseeing",
                "🛕 Meenakshi Amman Temple",
                "🛕 Koodal Azhagar Temple",
                "🛕 Thiruparankundram Murugan Temple",
                "🏛️ Thirumalai Nayakkar Mahal",
                "01:00 PM – Lunch Break (Self-paid)",
                "Proceed to Trichy (Approx. 140 km | 3 Hours).",
                "06:00 PM – Hotel Check-in.",
                "🏨 Overnight Stay in Trichy"
            ]
        },
        {
            "day": "Day 02",
            "title": "Trichy → Thanjavur → Rameswaram",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Trichy Sightseeing",
                "🛕 Sri Ranganathaswamy Temple (Srirangam)",
                "🪨 Rockfort Ucchi Pillayar Temple",
                "🛕 Jambukeswarar Temple (Thiruvanaikaval)",
                "Proceed to Thanjavur.",
                "Thanjavur Sightseeing",
                "🛕 Brihadeeswarar Temple (UNESCO World Heritage Site)",
                "🏛️ Thanjavur Royal Palace",
                "🎨 Thanjavur Art Gallery",
                "📚 Saraswathi Mahal Library",
                "01:30 PM – Lunch Break (Self-paid)",
                "Proceed to Rameswaram (Approx. 230 km | 4.5–5 Hours).",
                "07:00 PM – Hotel Check-in.",
                "🏨 Overnight Stay in Rameswaram"
            ]
        },
        {
            "day": "Day 03",
            "title": "Rameswaram Sightseeing → Madurai",
            "activities": [
                "07:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Rameswaram Sightseeing",
                "🛕 Sri Ramanathaswamy Temple",
                "🌊 Agni Theertham",
                "🌉 Pamban Road Bridge",
                "🚆 Pamban Railway Bridge View Point",
                "🏛️ Dr. A.P.J. Abdul Kalam Memorial",
                "🏠 Abdul Kalam House Museum",
                "🌊 Dhanushkodi Beach",
                "🏚️ Ghost Town",
                "🌅 Arichal Munai",
                "01:30 PM – Lunch Break (Self-paid)",
                "Return to Madurai.",
                "06:00 PM – Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Madurai, Trichy, Thanjavur & Rameswaram Sightseeing as per Itinerary",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Temple Special Darshan Tickets",
        "Entry Tickets",
        "Dhanushkodi Local Vehicle Charges (If Required)",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "3 Days / 2 Nights Tamil Nadu Temple Tour",
        "Madurai, Trichy, Thanjavur & Rameswaram Sightseeing",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Experienced Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Best Madurai, Trichy, Thanjavur & Rameswaram Tour Package | 3 Days / 2 Nights, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2052"
},
  '2053': {
    "title": "Madurai to Kanyakumari & Thiruvananthapuram 3 Days / 2 Nights Tour Package",
    "image": "/assets/madurai 63 package/322x372/maduraikanyakumaritrivandrum3day.jpeg",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraikanyakumaritrivandrum3days.png",
    "overview": {
        "duration": "3 Days / 2 Nights",
        "destination": "Madurai",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai → Kanyakumari",
            "activities": [
                "07:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Proceed to Kanyakumari (Approx. 245 km | 5 Hours).",
                "Kanyakumari Sightseeing",
                "🛕 Kanyakumari Bhagavathi Amman Temple",
                "🌊 Triveni Sangam",
                "🪨 Vivekananda Rock Memorial",
                "🗿 Thiruvalluvar Statue",
                "🌉 Glass Bridge",
                "🏛️ Gandhi Memorial Mandapam",
                "🌇 Sunset View Point",
                "06:00 PM – Hotel Check-in.",
                "🏨 Overnight Stay in Kanyakumari"
            ]
        },
        {
            "day": "Day 02",
            "title": "Kanyakumari → Thiruvananthapuram",
            "activities": [
                "05:45 AM – Enjoy the beautiful Sunrise View.",
                "08:00 AM – Breakfast at Hotel.",
                "Check-out and proceed to Thiruvananthapuram.",
                "En Route Sightseeing",
                "🛕 Suchindram Thanumalayan Temple",
                "🏛️ Padmanabhapuram Palace",
                "Thiruvananthapuram Sightseeing",
                "🛕 Sree Padmanabhaswamy Temple",
                "🦁 Thiruvananthapuram Zoo",
                "🏛️ Napier Museum",
                "🌅 Kovalam Beach",
                "06:00 PM – Hotel Check-in.",
                "🏨 Overnight Stay in Thiruvananthapuram"
            ]
        },
        {
            "day": "Day 03",
            "title": "Thiruvananthapuram → Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Morning Sightseeing",
                "🚤 Poovar Backwater Boating (Optional)",
                "🛕 Aazhimala Shiva Temple",
                "🌊 Vizhinjam Harbour View Point",
                "🛍️ Local Shopping",
                "01:00 PM – Lunch Break (Self-paid)",
                "Return to Madurai.",
                "06:30 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Kanyakumari & Thiruvananthapuram Sightseeing as per Itinerary",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Vivekananda Rock Ferry Tickets",
        "Poovar Boating Charges",
        "Entry Tickets",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "3 Days / 2 Nights South India Tour",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Kanyakumari & Thiruvananthapuram Sightseeing",
        "Sunrise & Sunset Experience",
        "Padmanabhapuram Palace",
        "Kovalam Beach & Poovar",
        "Experienced Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai → Kanyakumari → Thiruvananthapuram 3 Days / 2 Nights Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2053"
},
  
  '2055': {
    "title": "Madurai to Trichy, Thanjavur & Kumbakonam 3 Days / 2 Nights Tour Package",
    "image": "/assets/madurai 63 package/322x372/maduraitrichytanjorekumbakonam3day.png",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraitrichykumbakonamtanjore3days.png",
    "overview": {
        "duration": "3 Days / 2 Nights",
        "destination": "Madurai",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai → Trichy",
            "activities": [
                "07:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Proceed to Trichy.",
                "Trichy Sightseeing",
                "🛕 Sri Ranganathaswamy Temple (Srirangam)",
                "🪨 Rockfort Ucchi Pillayar Temple",
                "🛕 Jambukeswarar Temple (Thiruvanaikaval)",
                "🛍️ Local Shopping",
                "01:00 PM – Lunch Break (Self-paid)",
                "Visit any remaining attractions before hotel check-in.",
                "🏨 Overnight Stay in Trichy"
            ]
        },
        {
            "day": "Day 02",
            "title": "Trichy → Thanjavur → Kumbakonam",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out and proceed to Thanjavur.",
                "Thanjavur Sightseeing",
                "🛕 Brihadeeswarar Temple (UNESCO World Heritage Site)",
                "🏛️ Thanjavur Royal Palace",
                "🎨 Thanjavur Art Gallery",
                "📚 Saraswathi Mahal Library",
                "Proceed to Kumbakonam.",
                "Kumbakonam Sightseeing",
                "🛕 Adi Kumbeswarar Temple",
                "🛕 Sarangapani Temple",
                "🛕 Chakrapani Temple",
                "🛕 Ramaswamy Temple",
                "🛍️ Brass Utensils & Handicraft Shopping",
                "🏨 Overnight Stay in Kumbakonam"
            ]
        },
        {
            "day": "Day 03",
            "title": "Kumbakonam → Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Morning Sightseeing",
                "🛕 Airavatesvara Temple, Darasuram (UNESCO World Heritage Site)",
                "🛕 Swamimalai Murugan Temple",
                "🛕 Oppiliappan Temple (Optional)",
                "🛕 Patteeswaram Durga Temple (Optional)",
                "01:00 PM – Lunch Break (Self-paid)",
                "Return to Madurai.",
                "06:30 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Trichy, Thanjavur & Kumbakonam Sightseeing as per Itinerary",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Temple Special Darshan Tickets",
        "Entry Tickets",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "3 Days / 2 Nights Tamil Nadu Temple Tour",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Trichy, Thanjavur & Kumbakonam Sightseeing",
        "UNESCO World Heritage Temples",
        "Experienced Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai → Trichy → Thanjavur → Kumbakonam 3 Days / 2 Nights Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2055"
},
  '2056': {
    "title": "Madurai to Rameswaram, Tiruchendur & Kanyakumari 4 Days / 3 Nights Tour Package",
    "image": "/assets/madurai 63 package/Madurai → Rameswaram → Tiruchendur → Kanyakumari 4 Days  3 Nights Tour Package -card.png",
    "heroImage": "/assets/madurai 63 package/1918x642/Madurai_Rameswaram_Tiruchendur_kanyakumari.jpeg",
    "overview": {
        "duration": "4 Days / 3 Nights",
        "destination": "Madurai",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai Sightseeing → Rameswaram",
            "activities": [
                "07:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Madurai Sightseeing",
                "🛕 Meenakshi Amman Temple",
                "🛕 Koodal Azhagar Temple",
                "🛕 Thiruparankundram Murugan Temple",
                "🏛️ Thirumalai Nayakkar Mahal",
                "01:00 PM – Lunch Break (Self-paid)",
                "Proceed to Rameswaram (Approx. 170 km | 3.5–4 Hours).",
                "🏨 Overnight Stay in Rameswaram"
            ]
        },
        {
            "day": "Day 02",
            "title": "Rameswaram → Tiruchendur",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Rameswaram Sightseeing",
                "🛕 Sri Ramanathaswamy Temple",
                "🌊 Agni Theertham",
                "🌉 Pamban Road Bridge",
                "🚆 Pamban Railway Bridge View Point",
                "🏛️ Dr. A.P.J. Abdul Kalam Memorial",
                "🏠 Abdul Kalam House Museum",
                "🌊 Dhanushkodi Beach",
                "🏚️ Ghost Town",
                "🌅 Arichal Munai",
                "Proceed to Tiruchendur (Approx. 240 km | 4.5–5 Hours).",
                "🏨 Overnight Stay in Tiruchendur"
            ]
        },
        {
            "day": "Day 03",
            "title": "Tiruchendur → Kanyakumari",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Tiruchendur Sightseeing",
                "🛕 Arulmigu Subramaniya Swamy Temple",
                "🌊 Tiruchendur Beach",
                "🛕 Nazhi Kinaru",
                "Proceed to Kanyakumari (Approx. 90 km | 2 Hours).",
                "Kanyakumari Sightseeing",
                "🌊 Triveni Sangam",
                "🛕 Kanyakumari Bhagavathi Amman Temple",
                "🪨 Vivekananda Rock Memorial",
                "🗿 Thiruvalluvar Statue",
                "🌉 Glass Bridge",
                "🏛️ Gandhi Memorial Mandapam",
                "🌇 Sunset View Point",
                "🏨 Overnight Stay in Kanyakumari"
            ]
        },
        {
            "day": "Day 04",
            "title": "Kanyakumari → Madurai",
            "activities": [
                "05:45 AM – Enjoy the beautiful Sunrise at Kanyakumari.",
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "En Route Sightseeing",
                "🛕 Suchindram Thanumalayan Temple",
                "🏛️ Padmanabhapuram Palace (Optional)",
                "🌉 Mathur Aqueduct (Optional)",
                "01:00 PM – Lunch Break (Self-paid)",
                "Return to Madurai.",
                "06:00 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "3 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Madurai, Rameswaram, Tiruchendur & Kanyakumari Sightseeing as per Itinerary",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Temple Special Darshan Tickets",
        "Vivekananda Rock Ferry Tickets",
        "Entry Tickets",
        "Dhanushkodi Local Vehicle Charges (If Required)",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "4 Days / 3 Nights South India Temple Tour",
        "Madurai, Rameswaram, Tiruchendur & Kanyakumari Sightseeing",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "3 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Dhanushkodi Excursion",
        "Sunrise & Sunset at Kanyakumari",
        "Experienced Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai → Rameswaram → Tiruchendur → Kanyakumari 4 Days / 3 Nights Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2056"
},
  '2057': {
    "title": "Madurai to Kodaikanal & Munnar 4 Days / 3 Nights Tour Package",
    "image": "/assets/madurai 63 package/322x372/Madurai → Kodaikanal → Munnar 4 Days  3 Nights Tour Package.png",
    "heroImage": "/assets/madurai 63 package/1918x642/Madurai → Kodaikanal → Munnar 4 Days  3 Nights Tour Package.png",
    "overview": {
        "duration": "4 Days / 3 Nights",
        "destination": "Madurai",
        "activities": "Nature, Sightseeing",
        "themes": "Nature & Adventure, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai → Kodaikanal",
            "activities": [
                "07:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Proceed to Kodaikanal (Approx. 120 km | 3.5–4 Hours).",
                "Kodaikanal Sightseeing",
                "🌲 Silver Cascade Falls",
                "🌄 Coaker's Walk",
                "🌿 Bryant Park",
                "🚣 Kodaikanal Lake",
                "🪨 Pillar Rocks",
                "🌲 Pine Forest",
                "🌌 Guna Caves (Devil's Kitchen)",
                "🌅 Moir Point",
                "🏨 Overnight Stay in Kodaikanal"
            ]
        },
        {
            "day": "Day 02",
            "title": "Kodaikanal Local Sightseeing → Munnar",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Morning Sightseeing",
                "🌼 Mannavanur Lake & Sheep Farm",
                "🌄 Poombarai Village View Point",
                "🌿 Kuzhanthai Velappar Temple",
                "Proceed to Munnar (Approx. 170 km | 5–6 Hours).",
                "En Route Sightseeing",
                "🌄 Bodimettu View Point",
                "🌿 Poopara View Point",
                "🌊 Anayirangal Dam View Point",
                "🏨 Overnight Stay in Munnar"
            ]
        },
        {
            "day": "Day 03",
            "title": "Munnar Local Sightseeing",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Visit",
                "🌹 Rose Garden",
                "📸 Photo Point",
                "🐘 Elephant Park",
                "🍃 Tea Museum & Tea Factory",
                "💧 Mattupetty Dam",
                "🔊 Echo Point",
                "🌳 Blossom Hydel Park",
                "🎭 Kathakali Cultural Show (Optional)",
                "⚔️ Kalari Martial Arts Show (Optional)",
                "🏨 Overnight Stay in Munnar"
            ]
        },
        {
            "day": "Day 04",
            "title": "Munnar → Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Morning Sightseeing",
                "🌿 Tea Valley View Point",
                "📸 2nd Mile View Point",
                "🌶️ Spice Plantation Visit",
                "🎢 Adventure Park (Optional)",
                "Return to Madurai via Bodimettu.",
                "06:00 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "3 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Kodaikanal & Munnar Sightseeing as per Itinerary",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Entry Tickets",
        "Boating Charges",
        "Kathakali & Kalari Show Tickets",
        "Adventure Activities",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "4 Days / 3 Nights Hill Station Tour",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "3 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Kodaikanal & Munnar Sightseeing",
        "Tea Gardens & Scenic Viewpoints",
        "Waterfalls & Boating Experience",
        "Experienced Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai → Kodaikanal → Munnar 4 Days / 3 Nights Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2057"
},
  '2058': {
    "title": "Madurai to Munnar, Vagamon & Thekkady 4 Days / 3 Nights Tour Package",
    "image": "/assets/madurai 63 package/322x372/Madurai → Munnar → Vagamon → Thekkady 4 Days  3 Nights Tour Package.png",
    "heroImage": "/assets/madurai 63 package/1918x642/Madurai → Munnar → Vagamon → Thekkady 4 Days  3 Nights Tour Package.png",
    "overview": {
        "duration": "4 Days / 3 Nights",
        "destination": "Madurai",
        "activities": "Nature, Sightseeing",
        "themes": "Nature & Adventure, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai → Munnar",
            "activities": [
                "07:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Proceed to Munnar (Approx. 160 km | 4.5–5 Hours).",
                "En Route Sightseeing",
                "🌄 Bodimettu View Point",
                "🌿 Poopara View Point",
                "🌊 Anayirangal Dam View Point",
                "💦 Chinnakanal Waterfalls",
                "🌄 Lockhart Gap View Point",
                "📸 Signal Point",
                "Evening Sightseeing",
                "🌳 Blossom Hydel Park",
                "🎭 Kathakali Cultural Show (Optional)",
                "⚔️ Kalari Martial Arts Show (Optional)",
                "🏨 Overnight Stay in Munnar"
            ]
        },
        {
            "day": "Day 02",
            "title": "Munnar Sightseeing → Vagamon",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Munnar Sightseeing",
                "🌹 Rose Garden",
                "📸 Photo Point",
                "🐘 Elephant Park",
                "🍃 Tea Museum & Tea Factory",
                "💧 Mattupetty Dam",
                "🔊 Echo Point",
                "Proceed to Vagamon (Approx. 110 km | 3.5 Hours).",
                "Vagamon Sightseeing",
                "🌄 Vagamon Meadows",
                "🌲 Pine Forest",
                "⛪ Kurisumala",
                "🌿 Tea Gardens",
                "🌅 Sunset View Point",
                "🏨 Overnight Stay in Vagamon"
            ]
        },
        {
            "day": "Day 03",
            "title": "Vagamon → Thekkady",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Vagamon Morning Sightseeing",
                "🪨 Marmala Waterfalls (Subject to Road Conditions)",
                "🌄 Suicide Point View",
                "Proceed to Thekkady (Approx. 45 km | 1.5 Hours).",
                "Thekkady Sightseeing",
                "🛶 Periyar Lake Boating (Optional)",
                "🐘 Periyar Wildlife Sanctuary",
                "🌶️ Spice Plantation Tour",
                "🛍️ Kumily Spice Market",
                "🐘 Elephant Ride (Optional)",
                "🎭 Kathakali Show (Optional)",
                "🏨 Overnight Stay in Thekkady"
            ]
        },
        {
            "day": "Day 04",
            "title": "Thekkady → Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Morning Sightseeing",
                "🌿 Tea & Spice Shopping",
                "📸 Scenic Valley View Points",
                "Return to Madurai via Theni.",
                "05:30 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "3 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Munnar, Vagamon & Thekkady Sightseeing as per Itinerary",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Periyar Boating Tickets",
        "Wildlife Sanctuary Entry Tickets",
        "Adventure Activities",
        "Elephant Ride Charges",
        "Kathakali & Kalari Show Tickets",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "4 Days / 3 Nights Kerala Hill Station Tour",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "3 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Munnar, Vagamon & Thekkady Sightseeing",
        "Tea Gardens & Scenic Viewpoints",
        "Periyar Wildlife & Boating",
        "Spice Plantation Visit",
        "Experienced Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai → Munnar → Vagamon → Thekkady 4 Days / 3 Nights Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2058"
},
  '2059': {
    "title": "Madurai to Munnar, Thekkady & Kumarakom 4 Days / 3 Nights Tour Package",
    "image": "/assets/madurai 63 package/322x372/Madurai → Munnar → Thekkady → Kumarakom 4 Days  3 Nights Tour Package.png",
    "heroImage": "/assets/madurai 63 package/1918x642/Madurai → Munnar → Thekkady → Kumarakom 4 Days  3 Nights Tour Package.png",
    "overview": {
        "duration": "4 Days / 3 Nights",
        "destination": "Madurai",
        "activities": "Nature, Wildlife, Sightseeing",
        "themes": "Nature & Adventure, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai → Munnar",
            "activities": [
                "07:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Proceed to Munnar (Approx. 160 km | 4.5–5 Hours).",
                "En Route Sightseeing",
                "🌄 Bodimettu View Point",
                "🌿 Poopara View Point",
                "🌊 Anayirangal Dam View Point",
                "💦 Chinnakanal Waterfalls",
                "🌄 Lockhart Gap View Point",
                "📸 Signal Point",
                "Evening Sightseeing",
                "🌳 Blossom Hydel Park",
                "🎭 Kathakali Cultural Show (Optional)",
                "⚔️ Kalari Martial Arts Show (Optional)",
                "🏨 Overnight Stay in Munnar"
            ]
        },
        {
            "day": "Day 02",
            "title": "Munnar Sightseeing → Thekkady",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Munnar Sightseeing",
                "🌹 Rose Garden",
                "📸 Photo Point",
                "🐘 Elephant Park",
                "🍃 Tea Museum & Tea Factory",
                "💧 Mattupetty Dam",
                "🔊 Echo Point",
                "Proceed to Thekkady (Approx. 95 km | 3 Hours).",
                "Evening Sightseeing",
                "🌶️ Spice Plantation",
                "🛍️ Kumily Spice Market",
                "🎭 Kathakali Show (Optional)",
                "🏨 Overnight Stay in Thekkady"
            ]
        },
        {
            "day": "Day 03",
            "title": "Thekkady → Kumarakom",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Thekkady Sightseeing",
                "🛶 Periyar Lake Boating (Optional)",
                "🐘 Periyar Wildlife Sanctuary",
                "🐘 Elephant Camp (Optional)",
                "Proceed to Kumarakom (Approx. 125 km | 3.5–4 Hours).",
                "Kumarakom Sightseeing",
                "🌊 Kumarakom Backwaters",
                "🐦 Kumarakom Bird Sanctuary",
                "🚤 Shikara Boat Ride (Optional)",
                "🌅 Sunset View over Vembanad Lake",
                "🏨 Overnight Stay in Kumarakom"
            ]
        },
        {
            "day": "Day 04",
            "title": "Kumarakom → Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Morning Sightseeing",
                "🚤 Backwater Cruise (Optional)",
                "📸 Vembanad Lake View Point",
                "🛍️ Local Shopping",
                "Begin your return journey to Madurai.",
                "06:30 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "3 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Munnar, Thekkady & Kumarakom Sightseeing as per Itinerary",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Periyar Boating Tickets",
        "Shikara Boat Ride Charges",
        "Bird Sanctuary Entry Tickets",
        "Kathakali Show Tickets",
        "Entry Tickets",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "4 Days / 3 Nights Kerala Tour Package",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "3 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Munnar, Thekkady & Kumarakom Sightseeing",
        "Tea Plantations & Scenic Viewpoints",
        "Periyar Wildlife Sanctuary",
        "Kumarakom Backwaters & Bird Sanctuary",
        "Experienced Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai → Munnar → Thekkady → Kumarakom 4 Days / 3 Nights Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2059"
},
  '2060': {
    "title": "Madurai to Munnar, Alleppey & Kochi 4 Days / 3 Nights Tour Package",
    "image": "/assets/madurai 63 package/322x372/Madurai → Munnar → Alleppey → Kochi 4 Days  3 Nights Tour Package.png",
    "heroImage": "/assets/madurai 63 package/1918x642/Madurai → Munnar → Alleppey → Kochi 4 Days  3 Nights Tour Package.png",
    "overview": {
        "duration": "4 Days / 3 Nights",
        "destination": "Madurai",
        "activities": "Nature, Backwaters, Sightseeing",
        "themes": "Nature & Adventure, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai → Munnar",
            "activities": [
                "07:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Proceed to Munnar (Approx. 160 km | 4.5–5 Hours).",
                "En Route Sightseeing",
                "🌄 Bodimedu View Point",
                "🌿 Poopara View Point",
                "🌊 Anayirangal Dam View Point",
                "💦 Chinnakanal Waterfalls",
                "🌄 Lockhart Gap View Point",
                "📸 Signal Point",
                "Evening Sightseeing",
                "🌳 Blossom Hydel Park",
                "🎭 Kathakali Cultural Show (Optional)",
                "⚔️ Kalari Martial Arts Show (Optional)",
                "🏨 Overnight Stay in Munnar"
            ]
        },
        {
            "day": "Day 02",
            "title": "Munnar Sightseeing → Alleppey",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Munnar Sightseeing",
                "🌹 Rose Garden",
                "📸 Photo Point",
                "🐘 Elephant Park",
                "🍃 Tea Museum & Tea Factory",
                "💧 Mattupetty Dam",
                "🔊 Echo Point",
                "Proceed to Alleppey (Approx. 175 km | 5–6 Hours).",
                "Evening Sightseeing",
                "🌊 Alleppey Beach",
                "🌅 Sunset at Alleppey Beach",
                "🚤 Backwater Canal Walk",
                "🏨 Overnight Stay in Alleppey"
            ]
        },
        {
            "day": "Day 03",
            "title": "Alleppey → Kochi",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Alleppey Sightseeing",
                "🚤 Shikara Boat Ride (Optional)",
                "🌊 Vembanad Lake",
                "🌴 Backwater Villages",
                "Proceed to Kochi (Approx. 60 km | 1.5 Hours).",
                "Kochi Sightseeing",
                "⛪ Fort Kochi",
                "🕸️ Chinese Fishing Nets",
                "⛪ St. Francis Church",
                "🏛️ Mattancherry Palace (Dutch Palace)",
                "🕍 Paradesi Jewish Synagogue",
                "🌊 Marine Drive",
                "🏨 Overnight Stay in Kochi"
            ]
        },
        {
            "day": "Day 04",
            "title": "Kochi Sightseeing & Drop",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Morning Sightseeing",
                "🛍️ Lulu Mall",
                "🏛️ Kerala Folklore Museum (Optional)",
                "🌺 Cherai Beach (Optional, time permitting)",
                "Drop at Cochin International Airport, Ernakulam Junction Railway Station, or your preferred location."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup from Madurai & Drop at Kochi",
        "3 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Munnar, Alleppey & Kochi Sightseeing as per Itinerary",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Houseboat Charges (unless included in the selected package)",
        "Shikara Boat Ride Charges",
        "Entry Tickets",
        "Kathakali & Kalari Show Tickets",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "4 Days / 3 Nights Kerala Tour Package",
        "Pickup from Madurai & Drop at Kochi",
        "Private A/C Vehicle",
        "3 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Munnar, Alleppey & Kochi Sightseeing",
        "Tea Gardens & Scenic Viewpoints",
        "Alleppey Backwater Experience",
        "Fort Kochi Heritage Tour",
        "Experienced Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai → Munnar → Alleppey → Kochi 4 Days / 3 Nights Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2060"
},
  '2061': {
    "title": "Madurai to Trichy, Thanjavur & Kumbakonam 4 Days / 3 Nights Tour Package",
    "image": "/assets/madurai 63 package/322x372/maduraitrichythanjavurkumbakonam4day.png",
    "heroImage": "/assets/madurai 63 package/1918x642/Madurai → Trichy → Thanjavur → Kumbakonam 4 Days  3 Nights Tour Package.png",
    "overview": {
        "duration": "4 Days / 3 Nights",
        "destination": "Madurai",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai → Trichy",
            "activities": [
                "07:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Proceed to Trichy (Approx. 140 km | 3 Hours).",
                "Trichy Sightseeing",
                "🛕 Sri Ranganathaswamy Temple (Srirangam)",
                "🪨 Rockfort Ucchi Pillayar Temple",
                "🛕 Jambukeswarar Temple (Thiruvanaikaval)",
                "🛍️ Local Shopping",
                "🏨 Overnight Stay in Trichy"
            ]
        },
        {
            "day": "Day 02",
            "title": "Trichy → Thanjavur",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out and proceed to Thanjavur.",
                "Thanjavur Sightseeing",
                "🛕 Brihadeeswarar Temple (UNESCO World Heritage Site)",
                "🏛️ Thanjavur Royal Palace",
                "🎨 Thanjavur Art Gallery",
                "📚 Saraswathi Mahal Library",
                "🛍️ Thanjavur Handicrafts & Tanjore Paintings",
                "🏨 Overnight Stay in Thanjavur"
            ]
        },
        {
            "day": "Day 03",
            "title": "Thanjavur → Kumbakonam",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out and proceed to Kumbakonam.",
                "Kumbakonam Sightseeing",
                "🛕 Adi Kumbeswarar Temple",
                "🛕 Sarangapani Temple",
                "🛕 Chakrapani Temple",
                "🛕 Ramaswamy Temple",
                "🛕 Mahamaham Tank",
                "🛍️ Brass Utensils & Traditional Handicraft Shopping",
                "🏨 Overnight Stay in Kumbakonam"
            ]
        },
        {
            "day": "Day 04",
            "title": "Kumbakonam → Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Morning Sightseeing",
                "🛕 Airavatesvara Temple, Darasuram (UNESCO World Heritage Site)",
                "🛕 Swamimalai Murugan Temple",
                "🛕 Oppiliappan Temple",
                "🛕 Patteeswaram Durga Temple (Optional)",
                "After sightseeing, proceed to Madurai.",
                "06:30 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "3 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Trichy, Thanjavur & Kumbakonam Sightseeing as per Itinerary",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Temple Special Darshan Tickets",
        "Entry Tickets",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "4 Days / 3 Nights Tamil Nadu Temple Tour",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "3 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Trichy, Thanjavur & Kumbakonam Sightseeing",
        "UNESCO World Heritage Temples",
        "Famous Chola Temples",
        "Experienced Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai → Trichy → Thanjavur → Kumbakonam 4 Days / 3 Nights Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2061"
},
  
  '2063': {
    "title": "Madurai to Valparai, Athirappilly & Kochi 4 Days / 3 Nights Tour Package",
    "image": "/assets/madurai 63 package/3days/valparai 3 days.png",
    "heroImage": "/assets/madurai 63 package/1918x642/Madurai → Valparai → Athirappilly → Kochi 4 Days  3 Nights Tour Package.png",
    "overview": {
        "duration": "4 Days / 3 Nights",
        "destination": "Madurai",
        "activities": "Nature, Sightseeing",
        "themes": "Nature & Adventure, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai → Valparai",
            "activities": [
                "07:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Proceed to Valparai via Pollachi.",
                "En Route Sightseeing",
                "🌊 Aliyar Dam",
                "💦 Monkey Falls",
                "🛣️ 40 Hairpin Bends",
                "🌄 Loam's View Point",
                "🌿 Tea Estate View Points",
                "🏨 Overnight Stay in Valparai"
            ]
        },
        {
            "day": "Day 02",
            "title": "Valparai Sightseeing → Athirappilly",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Valparai Sightseeing",
                "🌄 Nallamudi View Point",
                "🛕 Balaji Temple",
                "🌿 Tea Plantations",
                "🌊 Sholayar Dam",
                "💦 Chinna Kallar Waterfalls",
                "🐒 Lion-Tailed Macaque Spotting (Subject to Availability)",
                "Proceed to Athirappilly.",
                "Evening Sightseeing",
                "💦 Athirappilly Waterfalls",
                "🌳 Charpa Waterfalls",
                "🏨 Overnight Stay in Athirappilly / Chalakudy"
            ]
        },
        {
            "day": "Day 03",
            "title": "Athirappilly → Kochi",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out and proceed to Kochi.",
                "En Route Sightseeing",
                "💦 Vazhachal Waterfalls",
                "Kochi Sightseeing",
                "⛪ Fort Kochi",
                "🕸️ Chinese Fishing Nets",
                "⛪ St. Francis Church",
                "🏛️ Mattancherry Palace (Dutch Palace)",
                "🕍 Paradesi Jewish Synagogue",
                "🌊 Marine Drive",
                "🏨 Overnight Stay in Kochi"
            ]
        },
        {
            "day": "Day 04",
            "title": "Kochi Sightseeing & Drop",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Morning Sightseeing",
                "🛍️ Lulu Mall",
                "🏛️ Kerala Folklore Museum (Optional)",
                "🌊 Cherai Beach (Optional, Time Permitting)",
                "Drop at Cochin International Airport, Ernakulam Junction Railway Station, or your preferred location."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup from Madurai & Drop at Kochi",
        "3 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Valparai, Athirappilly & Kochi Sightseeing as per Itinerary",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Entry Tickets",
        "Camera Charges",
        "Adventure Activities",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "4 Days / 3 Nights Kerala & Tamil Nadu Tour",
        "Pickup from Madurai & Drop at Kochi",
        "Private A/C Vehicle",
        "3 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Valparai, Athirappilly & Kochi Sightseeing",
        "Tea Plantations & Scenic Viewpoints",
        "Athirappilly & Vazhachal Waterfalls",
        "Fort Kochi Heritage Tour",
        "Experienced Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai → Valparai → Athirappilly → Kochi 4 Days / 3 Nights Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2063"
},
  '2064': {
    "title": "Madurai to Kodaikanal, Munnar & Thekkady 5 Days / 4 Nights Tour Package",
    "image": "/assets/madurai 63 package/5days/Madurai  Kodaikanal munar thekaddy.png",
    "heroImage": "/assets/madurai 63 package/1918x642/Madurai → Kodaikanal → Munnar → Thekkady 5 Days  4 Nights Tour Package.png",
    "overview": {
        "duration": "5 Days / 4 Nights",
        "destination": "Madurai",
        "activities": "Nature, Sightseeing",
        "themes": "Nature & Adventure, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai → Kodaikanal",
            "activities": [
                "07:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Proceed to Kodaikanal (Approx. 120 km | 4 Hours).",
                "Kodaikanal Sightseeing",
                "💦 Silver Cascade Falls",
                "🌄 Coaker's Walk",
                "🌿 Bryant Park",
                "🚣 Kodaikanal Lake",
                "🪨 Pillar Rocks",
                "🌲 Pine Forest",
                "🦇 Guna Caves",
                "🌅 Moir Point",
                "🏨 Overnight Stay in Kodaikanal"
            ]
        },
        {
            "day": "Day 02",
            "title": "Kodaikanal → Munnar",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Morning Sightseeing",
                "🌼 Mannavanur Lake",
                "🐑 Mannavanur Sheep Farm",
                "🌄 Poombarai View Point",
                "🛕 Kuzhanthai Velappar Temple",
                "Proceed to Munnar (Approx. 170 km | 5–6 Hours).",
                "En Route Sightseeing",
                "🌄 Bodimedu View Point",
                "🌿 Poopara View Point",
                "🌊 Anayirangal Dam View Point",
                "🏨 Overnight Stay in Munnar"
            ]
        },
        {
            "day": "Day 03",
            "title": "Munnar Local Sightseeing",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Visit",
                "🌹 Rose Garden",
                "📸 Photo Point",
                "🐘 Elephant Park",
                "🍃 Tea Museum & Tea Factory",
                "💧 Mattupetty Dam",
                "🔊 Echo Point",
                "🌳 Blossom Hydel Park",
                "🎭 Kathakali Cultural Show (Optional)",
                "⚔️ Kalari Martial Arts Show (Optional)",
                "🏨 Overnight Stay in Munnar"
            ]
        },
        {
            "day": "Day 04",
            "title": "Munnar → Thekkady",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Proceed to Thekkady (Approx. 95 km | 3 Hours).",
                "Thekkady Sightseeing",
                "🛶 Periyar Lake Boating (Optional)",
                "🐘 Periyar Wildlife Sanctuary",
                "🌶️ Spice Plantation Tour",
                "🛍️ Kumily Spice Market",
                "🐘 Elephant Camp (Optional)",
                "🏨 Overnight Stay in Thekkady"
            ]
        },
        {
            "day": "Day 05",
            "title": "Thekkady → Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Morning Sightseeing",
                "🌿 Spice Shopping",
                "📸 Scenic View Points",
                "Proceed to Madurai (Approx. 140 km | 3.5 Hours).",
                "Optional Madurai Sightseeing (Time Permitting)",
                "🛕 Meenakshi Amman Temple",
                "🏛️ Thirumalai Nayakkar Mahal",
                "06:00 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "4 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Kodaikanal, Munnar & Thekkady Sightseeing as per Itinerary",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Entry Tickets",
        "Boating Charges",
        "Periyar Boating Tickets",
        "Kathakali & Kalari Show Tickets",
        "Adventure Activities",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "5 Days / 4 Nights Hill Station Tour",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "4 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Kodaikanal, Munnar & Thekkady Sightseeing",
        "Scenic Viewpoints, Waterfalls & Tea Plantations",
        "Periyar Wildlife Sanctuary",
        "Spice Plantation Visit",
        "Experienced Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai → Kodaikanal → Munnar → Thekkady 5 Days / 4 Nights Tour Package, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2064"
},
  '2065': {
    "title": "Madurai to Palani One Day Trip",
    "image": "/assets/madurai 63 package/1day/MADURAI TO PALANI 1DAY.png",
    "heroImage": "/assets/madurai/thirupurakundaram.png",
    "overview": {
        "duration": "One Day",
        "destination": "Palani",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai to Palani Pilgrimage",
            "activities": [
                "06:00 AM – Pickup from Madurai Hotel / Airport / Railway Station / Bus Stand",
                "Proceed to Palani.",
                "Palani Sightseeing",
                "🛕 Arulmigu Dhandayuthapani Swamy Temple",
                "🚡 Rope Car / Winch Railway (Optional – Tickets at your own cost)",
                "🛕 Thiru Avinankudi Temple",
                "🛍️ Palani Temple Shopping Area",
                "🌿 Palani Hill View Points",
                "Lunch Break (Self-paid)",
                "After lunch, spend time for darshan, shopping, or relaxation before beginning the return journey.",
                "04:30 PM – Depart from Palani",
                "07:30 PM – Arrival & Drop at Madurai Hotel / Airport / Railway Station / Bus Stand"
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop",
        "Experienced Driver",
        "Parking Charges",
        "Driver Allowance"
    ],
    "exclusions": [
        "Temple Special Darshan Tickets",
        "Rope Car / Winch Railway Tickets",
        "Entry Fees (if applicable)",
        "Meals & Beverages",
        "Personal Expenses",
        "Guide Services"
    ],
    "highlights": [
        "🛕 Arulmigu Dhandayuthapani Swamy Temple",
        "🚡 Rope Car / Winch Railway (Optional)",
        "🛕 Thiru Avinankudi Temple",
        "🛍️ Palani Temple Shopping Area",
        "🌿 Palani Hill View Points",
        "Private A/C Vehicle",
        "Experienced Driver",
        "Flexible Pickup & Drop",
        "Affordable & Transparent Pricing",
        "Safe, Reliable & On-Time Service"
    ],
    "keywords": "Madurai to Palani One Day Trip, Seek the Blessings of Lord Murugan with Logaa Holidays, Palani Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2065"
},
  '2066': {
    "title": "Madurai – Pillayarpatti – Kundrakudi – Thirukoshtiyur One Day Temple Tour",
    "image": "/assets/madurai 63 package/1day/1 day trip MADURAI , PILLAYARPATTI, KUNDRAKUDI,THIRUKOSTIYUR.png",
    "heroImage": "/assets/madurai/thirupurakundaram.png",
    "overview": {
        "duration": "Full Day (Approx. 10–12 Hours)",
        "destination": "Pillayarpatti, Kundrakudi, Thirukoshtiyur",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "One Day Temple Tour",
            "activities": [
                "08:00 AM – Pickup from Madurai Airport, Railway Junction, or your hotel.",
                "Begin your spiritual journey with pickup from Madurai.",
                "Sightseeing",
                "🛕 Meenakshi Amman Temple, Madurai (Seek the blessings of Goddess Meenakshi and Lord Sundareswarar)",
                "Proceed to Pillayarpatti (Approx. 1.5 Hours)",
                "🛕 Pillayarpatti Karpaga Vinayagar Temple (Visit the ancient rock-cut temple dedicated to Lord Ganesha)",
                "Proceed to Kundrakudi (Approx. 20 Minutes)",
                "🛕 Kundrakudi Murugan Temple (Offer prayers to Lord Murugan at this scenic hill temple)",
                "Lunch Break (Self-paid)",
                "Proceed to Thirukoshtiyur (Approx. 45 Minutes)",
                "🛕 Sri Sowmya Narayana Perumal Temple, Thirukoshtiyur (Visit one of the 108 Divya Desams)",
                "Return Journey to Madurai",
                "07:00 PM – Drop at Madurai Airport, Railway Junction, or your hotel."
            ]
        }
    ],
    "inclusions": [
        "Private AC Vehicle",
        "Professional Driver",
        "Pickup & Drop",
        "Fuel Charges",
        "Driver Allowance",
        "Parking Charges"
    ],
    "exclusions": [
        "Temple Special Darshan Tickets",
        "Entry Fees (if applicable)",
        "Meals",
        "Personal Expenses"
    ],
    "highlights": [
        "🛕 Meenakshi Amman Temple",
        "🛕 Pillayarpatti Karpaga Vinayagar Temple",
        "🛕 Kundrakudi Murugan Temple",
        "🛕 Thirukoshtiyur Sri Sowmya Narayana Perumal Temple"
    ],
    "keywords": "Madurai – Pillayarpatti – Kundrakudi – Thirukoshtiyur One Day Temple Tour, Madurai Temple Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2066"
},
  
  '2068': {
    "title": "Madurai to Courtallam One Day Tour Package",
    "image": "/assets/madurai 63 package/1day/Madurai to Courtallam 1day trip.png",
    "heroImage": "https://images.unsplash.com/photo-1548625361-155deee223cb?auto=format&fit=crop&w=1600&q=80",
    "overview": {
        "duration": "One Day",
        "destination": "Courtallam",
        "activities": "Nature, Sightseeing",
        "themes": "Nature & Adventure"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai to Courtallam One Day Trip",
            "activities": [
                "06:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Proceed towards Courtallam.",
                "Courtallam Sightseeing",
                "🌊 Main Falls (Peraruvi)",
                "🌊 Five Falls (Aintharuvi)",
                "🌊 Old Courtallam Falls (Pazhaya Courtallam)",
                "🌊 Tiger Falls (If Open)",
                "🛕 Kutralanathar Temple",
                "🛍️ Local Shopping – Herbal Oils, Spices & Traditional Products",
                "01:00 PM – Lunch Break (Self-paid)",
                "Enjoy leisure time at the waterfalls before starting the return journey.",
                "03:30 PM – Depart from Courtallam.",
                "07:30 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "Courtallam Sightseeing as per Itinerary",
        "Experienced Driver",
        "Driver Allowance",
        "Toll & Parking Charges"
    ],
    "exclusions": [
        "Entry Tickets (if applicable)",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Services"
    ],
    "highlights": [
        "One Day Courtallam Tour",
        "Pickup & Drop from Madurai",
        "Visit Famous Courtallam Waterfalls",
        "Five Falls & Old Courtallam",
        "Scenic Western Ghats Drive",
        "Private A/C Vehicle",
        "Experienced Driver"
    ],
    "keywords": "Madurai to Courtallam One Day Tour Package, Best Courtallam One Day Trip from Madurai | Private Cab Tour, Courtallam Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2068"
},
  '2069': {
    "title": "Madurai to Rameswaram 2 Days Tour Package",
    "image": "/assets/madurai 63 package/322x372/Madurai To Rameshwaram 1N 2D Tour.png",
    "heroImage": "/assets/madurai 63 package/1918x642/Madurai To Rameshwaram 1N 2D Tour banner.png",
    "overview": {
        "duration": "2 Days / 1 Night",
        "destination": "Rameswaram",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai Sightseeing & Transfer to Rameswaram",
            "activities": [
                "09:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Begin your Madurai sightseeing tour by visiting the city's most famous spiritual and historical attractions.",
                "Places to Visit",
                "🛕 Meenakshi Amman Temple",
                "🛕 Koodal Azhagar Temple",
                "🛕 Thiruparankundram Murugan Temple",
                "🏛️ Thirumalai Nayakkar Mahal",
                "01:00 PM – Lunch Break (at your own expense)",
                "After lunch, drive to Rameswaram (approximately 170 km / 3.5–4 hours).",
                "En route, enjoy panoramic views of the Pamban Sea Bridge, India's first sea bridge connecting the mainland to Rameswaram Island.",
                "Evening Sightseeing",
                "🌉 Pamban Road Bridge View Point",
                "🚆 Pamban Railway Bridge View Point",
                "🌊 Agni Theertham Beach",
                "07:00 PM – Check in to your hotel.",
                "🏨 Overnight Stay in Rameswaram"
            ]
        },
        {
            "day": "Day 02",
            "title": "Rameswaram Sightseeing & Return to Madurai",
            "activities": [
                "07:00 AM – Breakfast at the hotel.",
                "08:00 AM – Check out and begin your Rameswaram sightseeing tour.",
                "Places to Visit",
                "🛕 Sri Ramanathaswamy Temple",
                "🌊 Agni Theertham",
                "🛕 Panchamukhi Hanuman Temple",
                "🪨 Floating Stone Exhibition",
                "🏛️ Dr. A.P.J. Abdul Kalam Memorial",
                "🏠 Dr. A.P.J. Abdul Kalam House Museum",
                "🌊 Rama Theertham",
                "🌅 Dhanushkodi Beach",
                "🏚️ Dhanushkodi Ghost Town",
                "🌊 Arichal Munai (Land's End)",
                "01:30 PM – Lunch Break (at your own expense)",
                "03:30 PM – Depart from Rameswaram.",
                "07:30 PM – Arrival in Madurai and drop at the Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "1 Night Hotel Accommodation",
        "Complimentary Breakfast",
        "Experienced Driver",
        "Parking Charges",
        "Driver Allowance",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to availability)"
    ],
    "exclusions": [
        "Temple Special Darshan Tickets",
        "Entry Fees",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "🛕 Meenakshi Amman Temple",
        "🛕 Koodal Azhagar Temple",
        "🛕 Thiruparankundram Murugan Temple",
        "🏛️ Thirumalai Nayakkar Mahal",
        "🌉 Pamban Road Bridge View Point",
        "🚆 Pamban Railway Bridge View Point",
        "🌊 Agni Theertham Beach",
        "🛕 Sri Ramanathaswamy Temple",
        "🛕 Panchamukhi Hanuman Temple",
        "🌅 Dhanushkodi Beach",
        "🌊 Arichal Munai (Land's End)",
        "🏛️ Dr. A.P.J. Abdul Kalam Memorial"
    ],
    "keywords": "Madurai to Rameswaram 2 Days Tour Package, Madurai & Rameswaram Tour, Tamil Nadu Pilgrimage, Logaa Holidays",
    "id": "2069"
},
  '2070': {
    "title": "Madurai to Kanyakumari 2 Days / 1 Night Tour Package",
    "image": "/assets/madurai 63 package/322x372/maduraikanyakumaritrivandrum2day.png",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraikanyakumaritrivandrum2days.png",
    "overview": {
        "duration": "2 Days / 1 Night",
        "destination": "Kanyakumari",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage, Beaches and Islands"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai to Kanyakumari",
            "activities": [
                "08:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Drive to Kanyakumari (Approx. 245 km | 4.5–5 Hours).",
                "01:00 PM – Arrival at Kanyakumari & Lunch (at your own expense)",
                "Places to Visit",
                "🛕 Kanyakumari Bhagavathy Amman Temple",
                "🌊 Triveni Sangam (Confluence of Three Seas)",
                "🪨 Vivekananda Rock Memorial (Boat Ticket Extra)",
                "🗿 Thiruvalluvar Statue",
                "🌉 Glass Bridge",
                "🏛️ Gandhi Memorial Mandapam",
                "🌇 Sunset View Point",
                "🛍️ Local Shopping & Sea Shell Market",
                "07:00 PM – Hotel Check-in",
                "🏨 Overnight Stay in Kanyakumari"
            ]
        },
        {
            "day": "Day 02",
            "title": "Kanyakumari Sightseeing & Return to Madurai",
            "activities": [
                "05:45 AM (Optional) – Witness the spectacular Sunrise at Kanyakumari Beach (weather permitting)",
                "08:00 AM – Breakfast at Hotel & Check-out.",
                "Continue sightseeing:",
                "🛕 Suchindram Thanumalayan Temple",
                "🏰 Padmanabhapuram Palace",
                "🌊 Kovalam Beach (Optional, if time permits)",
                "01:00 PM – Lunch Break (at your own expense)",
                "02:00 PM – Depart for Madurai.",
                "07:00 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "1 Night Hotel Accommodation",
        "Complimentary Breakfast",
        "Experienced Driver",
        "Parking Charges",
        "Driver Allowance",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to availability)"
    ],
    "exclusions": [
        "Boat Tickets to Vivekananda Rock Memorial",
        "Entry Tickets & Monument Fees",
        "Temple Special Darshan Tickets",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "🛕 Kanyakumari Bhagavathy Amman Temple",
        "🌊 Triveni Sangam (Confluence of Three Seas)",
        "🪨 Vivekananda Rock Memorial",
        "🗿 Thiruvalluvar Statue",
        "🌉 Glass Bridge",
        "🏛️ Gandhi Memorial Mandapam",
        "🌇 Sunset & Sunrise View Point",
        "🛕 Suchindram Thanumalayan Temple",
        "🏰 Padmanabhapuram Palace"
    ],
    "keywords": "Madurai to Kanyakumari 2 Days / 1 Night Tour Package, Kanyakumari Tour, Tamil Nadu Sightseeing, Logaa Holidays",
    "id": "2070"
},
  '2071': {
    "title": "Madurai to Kodaikanal 2 Days / 1 Night Tour Package",
    "image": "/assets/madurai 63 package/322x372/maduraikodaikanal.png",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraikoadaikanal.png",
    "overview": {
        "duration": "2 Days / 1 Night",
        "destination": "Kodaikanal",
        "activities": "Nature, Sightseeing",
        "themes": "Nature & Adventure, Hill Stations & Valleys"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai to Kodaikanal",
            "activities": [
                "08:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Drive to Kodaikanal (Approx. 120 km | 3.5–4 Hours).",
                "En Route Sightseeing",
                "💧 Silver Cascade Falls",
                "Kodaikanal Sightseeing",
                "🌿 Coaker's Walk",
                "🌸 Bryant Park",
                "⛵ Kodaikanal Lake",
                "🚲 Boating & Cycling (Optional)",
                "🛍️ Anna Salai Market & Homemade Chocolate Shops",
                "01:30 PM – Lunch Break (at your own expense)",
                "Continue your leisure sightseeing and shopping.",
                "03:00 PM – Hotel Check-in",
                "Evening Free Time",
                "Enjoy the pleasant weather, shopping, or a relaxing walk around Kodaikanal Lake.",
                "🏨 Overnight Stay in Kodaikanal"
            ]
        },
        {
            "day": "Day 02",
            "title": "Kodaikanal Sightseeing & Return to Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel & Check-out.",
                "Places to Visit",
                "🌄 Green Valley View",
                "🪨 Pillar Rocks",
                "🌲 Pine Forest",
                "🌫️ Guna Caves (Devil's Kitchen – View Point)",
                "🌅 Moir Point",
                "🌼 Upper Lake View",
                "01:00 PM – Lunch Break (at your own expense)",
                "02:00 PM – Depart from Kodaikanal.",
                "06:00 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "1 Night Hotel Accommodation",
        "Complimentary Breakfast",
        "Experienced Hill Driver",
        "Driver Allowance",
        "Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to availability)"
    ],
    "exclusions": [
        "Boating Charges",
        "Entry Tickets",
        "Camera Fees",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "2 Days / 1 Night Kodaikanal Tour",
        "Comfortable Hill Drive from Madurai",
        "💧 Silver Cascade Falls",
        "🌿 Coaker's Walk",
        "🌸 Bryant Park",
        "⛵ Kodaikanal Lake",
        "🪨 Pillar Rocks",
        "🌲 Pine Forest",
        "🌫️ Guna Caves (Devil's Kitchen)",
        "Experienced Hill Driver"
    ],
    "keywords": "Madurai to Kodaikanal 2 Days / 1 Night Tour Package, Kodaikanal Tour, Tamil Nadu Hill Station, Logaa Holidays",
    "id": "2071"
},
  '2072': {
    "title": "Madurai to Thekkady 2 Days / 1 Night Tour Package",
    "image": "/assets/madurai 63 package/322x372/maduraithekady1day.jpeg",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraithekady.png",
    "overview": {
        "duration": "2 Days / 1 Night",
        "destination": "Thekkady",
        "activities": "Nature, Wildlife, Sightseeing",
        "themes": "Wildlife, Nature & Adventure"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai to Thekkady",
            "activities": [
                "08:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Drive to Thekkady (Approx. 145 km | 3.5–4 Hours).",
                "En Route Sightseeing",
                "🌄 Scenic Mountain Views",
                "📸 Photo Stops along the Western Ghats",
                "Thekkady Sightseeing",
                "🌿 Spice Plantation Tour",
                "🐘 Elephant Camp (Optional Activities)",
                "🛍️ Kumily Local Spice Market",
                "01:30 PM – Lunch Break (at your own expense)",
                "03:00 PM – Hotel Check-in.",
                "Evening (Optional Activities)",
                "🎭 Kathakali Cultural Show",
                "⚔️ Kalaripayattu Martial Arts Show",
                "🏨 Overnight Stay in Thekkady"
            ]
        },
        {
            "day": "Day 02",
            "title": "Thekkady Sightseeing & Return to Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel & Check-out.",
                "Places to Visit",
                "🚤 Periyar Lake Boating (Ticket Extra)",
                "🌳 Periyar Wildlife Sanctuary",
                "🌿 Nature Walk (Optional)",
                "🛍️ Local Shopping for Spices & Handicrafts",
                "01:00 PM – Lunch Break (at your own expense)",
                "02:00 PM – Depart from Thekkady.",
                "06:00 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "1 Night Hotel Accommodation",
        "Complimentary Breakfast",
        "Experienced Driver",
        "Driver Allowance",
        "Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to availability)"
    ],
    "exclusions": [
        "Periyar Boating Tickets",
        "Wildlife Sanctuary Entry Fees",
        "Elephant Ride & Activities",
        "Kathakali & Kalaripayattu Show Tickets",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "2 Days / 1 Night Thekkady Tour",
        "Scenic Drive through the Western Ghats",
        "🌳 Periyar Wildlife Sanctuary",
        "🚤 Periyar Lake Boating",
        "🌿 Spice Plantation Tour",
        "🐘 Elephant Camp",
        "🎭 Kathakali & Kalaripayattu Shows",
        "Comfortable Hotel Stay with Breakfast"
    ],
    "keywords": "Madurai to Thekkady 2 Days / 1 Night Tour Package, Thekkady Tour, Kerala Wildlife, Logaa Holidays",
    "id": "2072"
},
  '2073': {
    "title": "Madurai to Vagamon 2 Days / 1 Night Tour Package",
    "image": "/assets/madurai 63 package/322x372/maduraithekadyvegamon3day.png",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraithekadyvegamon3days.png",
    "overview": {
        "duration": "2 Days / 1 Night",
        "destination": "Vagamon",
        "activities": "Nature, Adventure, Sightseeing",
        "themes": "Nature & Adventure, Hill Stations & Valleys"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai to Vagamon",
            "activities": [
                "08:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Drive to Vagamon (Approx. 170 km | 4.5–5 Hours).",
                "En Route Sightseeing",
                "🌊 Suruli Falls (Seasonal)",
                "🌿 Scenic Mountain Roads",
                "☕ Tea Plantation Views",
                "01:30 PM – Lunch Break (at your own expense)",
                "Vagamon Sightseeing",
                "🌲 Vagamon Pine Forest",
                "🌄 Vagamon Meadows",
                "⛪ Kurisumala Ashram (View Point)",
                "📸 Sunset View Point (subject to weather)",
                "03:30 PM – Hotel Check-in.",
                "Enjoy a peaceful evening amidst the cool climate of Vagamon.",
                "🏨 Overnight Stay in Vagamon"
            ]
        },
        {
            "day": "Day 02",
            "title": "Vagamon Sightseeing & Return to Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel & Check-out.",
                "Places to Visit",
                "🪨 Marmala Waterfalls (subject to road and weather conditions)",
                "🌿 Vagamon Lake",
                "🌄 Thangalpara View Point",
                "🪂 Adventure Park (Optional)",
                "☕ Tea Garden Photo Stops",
                "🛍️ Local Spice & Tea Shopping",
                "01:00 PM – Lunch Break (at your own expense)",
                "02:00 PM – Depart from Vagamon.",
                "07:00 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "1 Night Hotel Accommodation",
        "Complimentary Breakfast",
        "Experienced Driver",
        "Driver Allowance",
        "Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to availability)"
    ],
    "exclusions": [
        "Adventure Activity Charges",
        "Entry Tickets (if applicable)",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "2 Days / 1 Night Vagamon Tour",
        "Scenic Mountain Drive",
        "🌲 Pine Forest & Tea Gardens",
        "🌄 Beautiful Viewpoints",
        "🌊 Suruli Falls (Seasonal)",
        "🪨 Marmala Waterfalls",
        "🌿 Vagamon Lake",
        "🌄 Thangalpara View Point",
        "🪂 Adventure & Nature Activities",
        "Comfortable Hotel Stay with Breakfast"
    ],
    "keywords": "Madurai to Vagamon 2 Days / 1 Night Tour Package, Vagamon Tour, Kerala Hill Station, Logaa Holidays",
    "id": "2073"
},
  '2074': {
    "title": "Madurai to Meghamalai 2 Days / 1 Night Tour Package",
    "image": "/assets/madurai 63 package/2day/megamalai 2days trip.png",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraimegamalai.png",
    "overview": {
        "duration": "2 Days / 1 Night",
        "destination": "Meghamalai",
        "activities": "Nature, Sightseeing",
        "themes": "Nature & Adventure, Hill Stations & Valleys"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai to Meghamalai",
            "activities": [
                "07:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Drive to Meghamalai via Theni and Chinnamanur.",
                "En Route Sightseeing",
                "🌊 Veerapandi Temple & River View",
                "🌿 Vaigai Dam View Point (Optional)",
                "🌄 Scenic Ghat Road Photo Stops",
                "Meghamalai Sightseeing",
                "🌿 Meghamalai Tea Estates",
                "🌄 Meghamalai View Point",
                "💧 Manalar Dam View Point",
                "📸 Tea Garden Photography Stops",
                "01:30 PM – Lunch Break (Self-paid)",
                "03:00 PM – Hotel Check-in.",
                "Enjoy the peaceful surroundings and cool mountain climate.",
                "🏨 Overnight Stay in Meghamalai"
            ]
        },
        {
            "day": "Day 02",
            "title": "Meghamalai Sightseeing & Return to Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel",
                "Check-out from the hotel.",
                "Places to Visit",
                "🌄 Maharaja Mettu View Point",
                "🌿 Vellimalai View Point",
                "🌳 Tea Plantation Drive",
                "📸 Scenic Valley View Points",
                "☕ Local Tea Estate Visit",
                "01:00 PM – Lunch Break (Self-paid)",
                "Begin your return journey to Madurai.",
                "06:30 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "1 Night Hotel Accommodation",
        "Complimentary Breakfast",
        "Meghamalai Sightseeing as per Itinerary",
        "Experienced Driver",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Entry Tickets (if applicable)",
        "Lunch & Dinner",
        "Adventure Activities",
        "Camera Charges (if applicable)",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "2 Days / 1 Night Meghamalai Tour",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "1 Night Hotel Accommodation",
        "Complimentary Breakfast",
        "🌿 Tea Estates & Mountain Viewpoints",
        "🌄 Meghamalai View Point",
        "💧 Manalar Dam View Point",
        "🌄 Maharaja Mettu View Point",
        "🌿 Vellimalai View Point",
        "Scenic Nature Drive",
        "Experienced Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai to Meghamalai 2 Days / 1 Night Tour Package, Best Meghamalai Tour Package from Madurai | 2 Days & 1 Night, Meghamalai Tour, Tamil Nadu Hill Station, Logaa Holidays",
    "id": "2074"
},
  '2075': {
    "title": "Madurai to Ooty 2 Days / 1 Night Tour Package",
    "image": "/assets/madurai 63 package/322x372/maduraitoooty3day.jpeg",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraiooty3days.png",
    "overview": {
        "duration": "2 Days / 1 Night",
        "destination": "Ooty",
        "activities": "Nature, Sightseeing",
        "themes": "Nature & Adventure, Hill Stations & Valleys"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai to Ooty",
            "activities": [
                "06:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Drive to Ooty via Dindigul, Palani, Coimbatore, and Mettupalayam (Approx. 270 km | 6.5–7 Hours).",
                "En Route Sightseeing",
                "📍 Ketti Valley View Point",
                "📸 Tea Garden Photo Stops",
                "01:30 PM – Lunch Break (Self-paid)",
                "Ooty Sightseeing",
                "🌺 Government Botanical Garden",
                "🌹 Government Rose Garden",
                "🛍️ Charing Cross Shopping Area",
                "06:00 PM – Hotel Check-in.",
                "🏨 Overnight Stay in Ooty"
            ]
        },
        {
            "day": "Day 02",
            "title": "Ooty Sightseeing & Return to Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Places to Visit",
                "🚤 Ooty Lake (Boating – Optional)",
                "🌲 Pine Forest",
                "🎬 6th Mile & 9th Mile Shooting Points",
                "🌄 Doddabetta Peak",
                "🍫 Tea Factory & Chocolate Factory",
                "01:30 PM – Lunch Break (Self-paid)",
                "Begin your return journey to Madurai.",
                "08:30 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "1 Night Hotel Accommodation",
        "Complimentary Breakfast",
        "Ooty Sightseeing as per Itinerary",
        "Experienced Driver",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Entry Tickets",
        "Boating Charges",
        "Toy Train Tickets",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Services"
    ],
    "highlights": [
        "2 Days / 1 Night Ooty Tour",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "1 Night Hotel Accommodation",
        "Complimentary Breakfast",
        "🌺 Government Botanical Garden",
        "🌹 Government Rose Garden",
        "🚤 Ooty Lake",
        "🌲 Pine Forest",
        "🌄 Doddabetta Peak",
        "🍫 Tea Factory & Chocolate Factory",
        "Tea Gardens & Scenic Viewpoints",
        "Experienced Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai to Ooty 2 Days / 1 Night Tour Package, Best Ooty Tour Package from Madurai | 2 Days & 1 Night, Ooty Tour, Tamil Nadu Hill Station, Logaa Holidays",
    "id": "2075"
},
  '2076': {
    "title": "Madurai to Valparai 2 Days / 1 Night Tour Package",
    "image": "/assets/madurai 63 package/2day/madurai to Valparai 2days trip.png",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraimunnarvegamon.png",
    "overview": {
        "duration": "2 Days / 1 Night",
        "destination": "Valparai",
        "activities": "Nature, Wildlife, Sightseeing",
        "themes": "Nature & Adventure, Hill Stations & Valleys"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai to Valparai",
            "activities": [
                "06:30 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Drive towards Valparai via Pollachi and Aliyar.",
                "En Route Sightseeing",
                "🌊 Aliyar Dam",
                "🌄 Monkey Falls",
                "🌿 Loam's View Point",
                "🛣️ Famous 40 Hairpin Bends",
                "📸 Tea Estate Photo Stops",
                "01:30 PM – Lunch Break (Self-paid)",
                "Valparai Sightseeing",
                "🌿 Nallamudi View Point",
                "💧 Birla Waterfalls",
                "🌳 Tea Plantation Visit",
                "🦜 Balaji Temple",
                "06:00 PM – Hotel Check-in.",
                "🏨 Overnight Stay in Valparai"
            ]
        },
        {
            "day": "Day 02",
            "title": "Valparai Sightseeing & Return to Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Places to Visit",
                "🌊 Sholayar Dam View Point",
                "🌿 Chinnakallar (One of India's Wettest Places)",
                "🦁 Lion-Tailed Macaque Viewing Area (Subject to Availability)",
                "☕ Tea Factory Visit (Optional)",
                "🛍️ Tea & Spice Shopping",
                "01:30 PM – Lunch Break (Self-paid)",
                "Begin your return journey to Madurai.",
                "08:00 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "1 Night Hotel Accommodation",
        "Complimentary Breakfast",
        "Valparai Sightseeing as per Itinerary",
        "Experienced Driver",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Entry Tickets",
        "Tea Factory Entry Fee (if applicable)",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Services"
    ],
    "highlights": [
        "2 Days / 1 Night Valparai Tour",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "1 Night Hotel Accommodation",
        "Complimentary Breakfast",
        "🌿 Scenic Tea Estates & Waterfalls",
        "🌊 Aliyar Dam",
        "🌄 Monkey Falls",
        "🛣️ 40 Hairpin Bend Drive",
        "🌊 Sholayar Dam View Point",
        "🦁 Lion-Tailed Macaque Viewing Area",
        "Experienced Driver"
    ],
    "keywords": "Madurai to Valparai 2 Days / 1 Night Tour Package, Best Valparai Tour Package from Madurai | 2 Days & 1 Night, Valparai Tour, Tamil Nadu Hill Station, Logaa Holidays",
    "id": "2076"
},
  '2077': {
    "title": "Madurai to Valparai 3 Days / 2 Nights Tour Package",
    "image": "/assets/madurai 63 package/322x372/maduraimunnarmarayoor3day.jpeg",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraimunnarmarayoor3days.png",
    "overview": {
        "duration": "3 Days / 2 Nights",
        "destination": "Valparai",
        "activities": "Nature, Wildlife, Sightseeing",
        "themes": "Nature & Adventure, Hill Stations & Valleys"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai to Valparai",
            "activities": [
                "06:30 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Drive towards Valparai via Pollachi.",
                "En Route Sightseeing",
                "🌊 Aliyar Dam",
                "🐒 Monkey Falls",
                "🌄 Loam's View Point",
                "🛣️ Famous 40 Hairpin Bends",
                "📸 Tea Estate Photo Stops",
                "01:30 PM – Lunch Break (Self-paid)",
                "Valparai Sightseeing",
                "🌿 Nallamudi View Point",
                "💧 Birla Waterfalls",
                "🛕 Balaji Temple",
                "06:00 PM – Hotel Check-in.",
                "🏨 Overnight Stay in Valparai"
            ]
        },
        {
            "day": "Day 02",
            "title": "Full Day Valparai Sightseeing",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Visit",
                "🌊 Upper Sholayar Dam",
                "🌿 Chinnakallar (One of India's Wettest Places)",
                "🐒 Lion-Tailed Macaque Viewing Area (Subject to Wildlife Movement)",
                "🌳 Tea Plantation Visit",
                "☕ Tea Factory Visit (Optional)",
                "📸 Scenic Valley View Points",
                "🛍️ Local Tea & Spice Shopping",
                "Return to the hotel.",
                "🏨 Overnight Stay in Valparai"
            ]
        },
        {
            "day": "Day 03",
            "title": "Valparai to Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Morning Sightseeing",
                "🌄 Grass Hills View Point (Subject to Forest Department Permission)",
                "🌿 Tea Garden Photography Stops",
                "🌳 Scenic Forest Drive",
                "01:00 PM – Lunch Break (Self-paid)",
                "Begin your return journey to Madurai.",
                "08:00 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Valparai Sightseeing as per Itinerary",
        "Experienced Hill Driver",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Entry Tickets",
        "Forest Entry Fees (If Applicable)",
        "Tea Factory Entry Fee",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "3 Days / 2 Nights Valparai Tour",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "🌿 Tea Estates & Scenic Viewpoints",
        "🌊 Aliyar Dam & Monkey Falls",
        "🌊 Sholayar Dam & Chinnakallar",
        "🐒 Lion-Tailed Macaque Viewing Area",
        "🛣️ Famous 40 Hairpin Bend Drive",
        "🌄 Grass Hills View Point",
        "Experienced Hill Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai to Valparai 3 Days / 2 Nights Tour Package, Best Valparai Tour Package from Madurai | 3 Days & 2 Nights, Valparai Tour, Tamil Nadu Hill Station, Logaa Holidays",
    "id": "2077"
},
  '2078': {
    "title": "Madurai → Tiruchendur → Kanyakumari 3 Days / 2 Nights Tour Package",
    "image": "/assets/madurai 63 package/322x372/maduraitothiruchendur2days.png",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraithiruchendur2days.png",
    "overview": {
        "duration": "3 Days / 2 Nights",
        "destination": "Tiruchendur, Kanyakumari",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage, Beaches and Islands"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai → Tiruchendur",
            "activities": [
                "07:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Proceed to Tiruchendur (Approx. 190 km | 4 Hours).",
                "Tiruchendur Sightseeing",
                "🛕 Arulmigu Subramaniya Swamy Temple (Tiruchendur Murugan Temple)",
                "🌊 Tiruchendur Beach",
                "🛕 Nazhi Kinaru (Sacred Freshwater Well)",
                "🌅 Seashore Temple View",
                "01:00 PM – Lunch Break (Self-paid)",
                "Enjoy leisure time for darshan and beach walk.",
                "06:00 PM – Hotel Check-in.",
                "🏨 Overnight Stay in Tiruchendur"
            ]
        },
        {
            "day": "Day 02",
            "title": "Tiruchendur → Kanyakumari",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out and proceed to Kanyakumari.",
                "En Route Sightseeing",
                "🛕 Suchindram Thanumalayan Temple",
                "Kanyakumari Sightseeing",
                "🛕 Kanyakumari Bhagavathi Amman Temple",
                "🌊 Triveni Sangam",
                "🪨 Vivekananda Rock Memorial",
                "🗿 Thiruvalluvar Statue",
                "🌉 Glass Bridge",
                "🏛️ Gandhi Memorial Mandapam",
                "🌇 Sunset View Point",
                "06:00 PM – Hotel Check-in.",
                "🏨 Overnight Stay in Kanyakumari"
            ]
        },
        {
            "day": "Day 03",
            "title": "Kanyakumari → Madurai",
            "activities": [
                "05:45 AM – Enjoy the beautiful Sunrise View.",
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Morning Sightseeing",
                "🛕 Sri Padmanabhapuram Palace",
                "🛕 Mathur Aqueduct (Optional)",
                "🌊 Muttom Beach (Optional – Subject to Time)",
                "01:00 PM – Lunch Break (Self-paid)",
                "Return to Madurai.",
                "06:00 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Tiruchendur & Kanyakumari Sightseeing as per Itinerary",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Temple Special Darshan Tickets",
        "Vivekananda Rock Ferry Tickets",
        "Entry Tickets",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "3 Days / 2 Nights South India Tour",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "🛕 Tiruchendur Murugan Temple Darshan",
        "🌊 Tiruchendur Beach",
        "🛕 Kanyakumari Bhagavathi Amman Temple",
        "🪨 Vivekananda Rock Memorial",
        "🗿 Thiruvalluvar Statue",
        "🌇 Sunrise & Sunset Experience",
        "🛕 Sri Padmanabhapuram Palace",
        "Experienced Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai → Tiruchendur → Kanyakumari 3 Days / 2 Nights Tour Package, Best Tiruchendur & Kanyakumari Tour Package from Madurai | 3 Days / 2 Nights, Tamil Nadu Pilgrimage, Logaa Holidays",
    "id": "2078"
},
  '2079': {
    "title": "Madurai → Kumbakonam Navagraha Temple Tour Package 3 Days / 2 Nights",
    "image": "/assets/madurai 63 package/3days/madurai-kumbakonam-navagrahatemple 3days tour.png",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraitrichykumbakonamtanjore3days.png",
    "overview": {
        "duration": "3 Days / 2 Nights",
        "destination": "Kumbakonam, Thanjavur",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "On Request",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai → Thanjavur → Kumbakonam",
            "activities": [
                "06:30 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.",
                "Proceed to Thanjavur.",
                "Thanjavur Sightseeing",
                "🛕 Brihadeeswarar Temple (UNESCO World Heritage Site)",
                "🏛️ Thanjavur Palace",
                "🎨 Art Gallery",
                "📚 Saraswathi Mahal Library",
                "Proceed to Kumbakonam.",
                "Evening Visit",
                "🛕 Adi Kumbeswarar Temple",
                "🛕 Sarangapani Temple",
                "🏨 Overnight Stay in Kumbakonam"
            ]
        },
        {
            "day": "Day 02",
            "title": "Navagraha Temple Tour",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Visit the famous Navagraha Temples.",
                "Navagraha Temples",
                "☀️ Suriyanar Temple – Surya (Sun)",
                "🌙 Thingalur Chandran Temple – Moon",
                "🔴 Vaitheeswaran Koil – Mars (Chevvai)",
                "🟢 Thiruvenkadu Temple – Mercury (Budhan)",
                "🟡 Alangudi Guru Temple – Jupiter (Guru)",
                "⚪ Kanjanur Sukran Temple – Venus (Sukran)",
                "⚫ Thirunallar Saneeswaran Temple – Saturn (Sani)",
                "🐍 Thirunageswaram Rahu Temple – Rahu",
                "🐍 Keezhaperumpallam Ketu Temple – Ketu",
                "Return to Kumbakonam.",
                "🏨 Overnight Stay in Kumbakonam"
            ]
        },
        {
            "day": "Day 03",
            "title": "Kumbakonam → Madurai",
            "activities": [
                "08:00 AM – Breakfast at Hotel.",
                "Check-out from the hotel.",
                "Morning Sightseeing",
                "🛕 Airavatesvara Temple, Darasuram (UNESCO World Heritage Site)",
                "🛕 Swamimalai Murugan Temple",
                "🛕 Oppiliappan Temple (Optional)",
                "🛕 Patteeswaram Durga Temple (Optional)",
                "01:00 PM – Lunch Break (Self-paid)",
                "Return to Madurai.",
                "07:00 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."
            ]
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup & Drop from Madurai",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "Navagraha Temple Tour as per Itinerary",
        "Driver Allowance",
        "Toll & Parking Charges",
        "Driver Languages",
        "Tamil",
        "English",
        "Hindi (Subject to Availability)"
    ],
    "exclusions": [
        "Temple Special Darshan Tickets",
        "Entry Tickets",
        "Lunch & Dinner",
        "Personal Expenses",
        "Guide Charges"
    ],
    "highlights": [
        "3 Days / 2 Nights Navagraha Temple Tour",
        "Pickup & Drop from Madurai",
        "Private A/C Vehicle",
        "2 Nights Hotel Accommodation",
        "Complimentary Breakfast",
        "All 9 Navagraha Temples",
        "🛕 Brihadeeswarar Temple (UNESCO)",
        "🛕 Airavatesvara Temple (UNESCO)",
        "🛕 Swamimalai Murugan Temple",
        "☀️ Suriyanar Temple – Surya",
        "🌙 Thingalur – Moon",
        "🔴 Vaitheeswaran Koil – Mars",
        "⚫ Thirunallar – Saturn",
        "Experienced Driver",
        "Customizable Tour Package"
    ],
    "keywords": "Madurai → Kumbakonam Navagraha Temple Tour Package 3 Days / 2 Nights, Best Navagraha Temple Tour Package from Madurai | 3 Days / 2 Nights, Navagraha Temple Tour, Tamil Nadu Pilgrimage, Logaa Holidays",
    "id": "2079"
},
  '2080': {
    "title": "Madurai → Rameswaram → Kanyakumari → Thiruvananthapuram 4 Days / 3 Nights Tour Package",
    "image": "/assets/madurai 63 package/322x372/madurairameshwaramkanyakumari3day.jpeg",
    "heroImage": "/assets/madurai 63 package/1918x642/Madurai Rameshwaram Kanyakumari 5N6days.png",
    "overview": {"duration": "4 Days / 3 Nights","destination": "Rameswaram, Kanyakumari, Thiruvananthapuram","activities": "Pilgrimage, Sightseeing","themes": "Religious & Pilgrimage, Culture & Heritage, Beaches and Islands"},
    "priceDetails": {"amount": "On Request","type": "per person"},
    "itinerary": [
        {"day": "Day 01","title": "Madurai Sightseeing → Rameswaram","activities": ["07:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.","Madurai Sightseeing","🛕 Meenakshi Amman Temple","🛕 Koodal Azhagar Temple","🛕 Thiruparankundram Murugan Temple","🏛️ Thirumalai Nayakkar Mahal","01:00 PM – Lunch Break (Self-paid)","Proceed to Rameswaram (Approx. 170 km | 3.5–4 Hours).","🏨 Overnight Stay in Rameswaram"]},
        {"day": "Day 02","title": "Rameswaram → Kanyakumari","activities": ["08:00 AM – Breakfast at Hotel.","Rameswaram Sightseeing","🛕 Sri Ramanathaswamy Temple","🌊 Agni Theertham","🌉 Pamban Road Bridge","🚆 Pamban Railway Bridge View Point","🏛️ Dr. A.P.J. Abdul Kalam Memorial","🏠 Abdul Kalam House Museum","🌊 Dhanushkodi Beach","🏚️ Ghost Town","🌅 Arichal Munai","Proceed to Kanyakumari (Approx. 310 km | 6–7 Hours).","Evening","🌇 Sunset View Point","🌊 Triveni Sangam","🏨 Overnight Stay in Kanyakumari"]},
        {"day": "Day 03","title": "Kanyakumari → Thiruvananthapuram","activities": ["05:45 AM – Enjoy the beautiful Sunrise at Kanyakumari.","08:00 AM – Breakfast at Hotel.","Check-out and proceed to Thiruvananthapuram.","En Route Sightseeing","🛕 Suchindram Thanumalayan Temple","🏛️ Padmanabhapuram Palace","Thiruvananthapuram Sightseeing","🛕 Sree Padmanabhaswamy Temple","🦁 Thiruvananthapuram Zoo","🏛️ Napier Museum","🌅 Kovalam Beach","🏨 Overnight Stay in Thiruvananthapuram"]},
        {"day": "Day 04","title": "Thiruvananthapuram → Madurai","activities": ["08:00 AM – Breakfast at Hotel.","Check-out from the hotel.","Morning Sightseeing","🚤 Poovar Backwater Boating (Optional)","🛕 Aazhimala Shiva Temple","🌊 Vizhinjam Harbour View Point","🛍️ Local Shopping","01:00 PM – Lunch Break (Self-paid)","Return to Madurai.","06:30 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."]}
    ],
    "inclusions": ["Private A/C Vehicle","Pickup & Drop from Madurai","3 Nights Hotel Accommodation","Complimentary Breakfast","Madurai, Rameswaram, Kanyakumari & Thiruvananthapuram Sightseeing as per Itinerary","Driver Allowance","Toll & Parking Charges","Driver Languages","Tamil","English","Hindi (Subject to Availability)"],
    "exclusions": ["Temple Special Darshan Tickets","Vivekananda Rock Ferry Tickets","Poovar Boating Charges","Entry Tickets","Dhanushkodi Local Vehicle Charges (If Required)","Lunch & Dinner","Personal Expenses","Guide Charges"],
    "highlights": ["4 Days / 3 Nights South India Tour","Madurai, Rameswaram, Kanyakumari & Thiruvananthapuram Sightseeing","Pickup & Drop from Madurai","Private A/C Vehicle","3 Nights Hotel Accommodation","Complimentary Breakfast","🌊 Dhanushkodi Excursion","🌇 Sunrise & Sunset at Kanyakumari","🌅 Kovalam Beach & Poovar (Optional)","Experienced Driver","Customizable Tour Package"],
    "keywords": "Madurai → Rameswaram → Kanyakumari → Thiruvananthapuram 4 Days / 3 Nights Tour Package, Best Madurai, Rameswaram, Kanyakumari & Thiruvananthapuram Tour Package | 4 Days / 3 Nights, Tamil Nadu Tour, Logaa Holidays",
    "id": "2080"
},
  '2081': {
    "title": "Madurai → Tiruchendur → Kanyakumari → Thiruvananthapuram 4 Days / 3 Nights Tour Package",
    "image": "/assets/madurai 63 package/322x372/maduraikanyakumaritrivandrum2day.png",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraikanyakumaritrivandrum2days.png",
    "overview": {"duration": "4 Days / 3 Nights","destination": "Tiruchendur, Kanyakumari, Thiruvananthapuram","activities": "Pilgrimage, Sightseeing","themes": "Religious & Pilgrimage, Culture & Heritage, Beaches and Islands"},
    "priceDetails": {"amount": "On Request","type": "per person"},
    "itinerary": [
        {"day": "Day 01","title": "Madurai Sightseeing → Tiruchendur","activities": ["07:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.","Madurai Sightseeing","🛕 Meenakshi Amman Temple","🛕 Koodal Azhagar Temple","🛕 Thiruparankundram Murugan Temple","🏛️ Thirumalai Nayakkar Mahal","01:00 PM – Lunch Break (Self-paid)","Proceed to Tiruchendur (Approx. 190 km | 4 Hours).","Evening Sightseeing","🛕 Arulmigu Subramaniya Swamy Temple","🌊 Tiruchendur Beach","🛕 Nazhi Kinaru","🏨 Overnight Stay in Tiruchendur"]},
        {"day": "Day 02","title": "Tiruchendur → Kanyakumari","activities": ["08:00 AM – Breakfast at Hotel.","Check-out from the hotel.","Proceed to Kanyakumari (Approx. 90 km | 2 Hours).","Kanyakumari Sightseeing","🛕 Kanyakumari Bhagavathi Amman Temple","🌊 Triveni Sangam","🪨 Vivekananda Rock Memorial","🗿 Thiruvalluvar Statue","🌉 Glass Bridge","🏛️ Gandhi Memorial Mandapam","🌇 Sunset View Point","🏨 Overnight Stay in Kanyakumari"]},
        {"day": "Day 03","title": "Kanyakumari → Thiruvananthapuram","activities": ["05:45 AM – Enjoy the spectacular Sunrise at Kanyakumari.","08:00 AM – Breakfast at Hotel.","Check-out and proceed to Thiruvananthapuram.","En Route Sightseeing","🛕 Suchindram Thanumalayan Temple","🏛️ Padmanabhapuram Palace","Thiruvananthapuram Sightseeing","🛕 Sree Padmanabhaswamy Temple","🦁 Thiruvananthapuram Zoo","🏛️ Napier Museum","🌅 Kovalam Beach","🏨 Overnight Stay in Thiruvananthapuram"]},
        {"day": "Day 04","title": "Thiruvananthapuram → Madurai","activities": ["08:00 AM – Breakfast at Hotel.","Check-out from the hotel.","Morning Sightseeing","🚤 Poovar Backwater Boating (Optional)","🛕 Aazhimala Shiva Temple","🌊 Vizhinjam Harbour View Point","🛍️ Local Shopping","01:00 PM – Lunch Break (Self-paid)","Return to Madurai.","06:30 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."]}
    ],
    "inclusions": ["Private A/C Vehicle","Pickup & Drop from Madurai","3 Nights Hotel Accommodation","Complimentary Breakfast","Madurai, Tiruchendur, Kanyakumari & Thiruvananthapuram Sightseeing as per Itinerary","Driver Allowance","Toll & Parking Charges","Driver Languages","Tamil","English","Hindi (Subject to Availability)"],
    "exclusions": ["Temple Special Darshan Tickets","Vivekananda Rock Ferry Tickets","Poovar Boating Charges","Entry Tickets","Lunch & Dinner","Personal Expenses","Guide Charges"],
    "highlights": ["4 Days / 3 Nights South India Tour","Madurai, Tiruchendur, Kanyakumari & Thiruvananthapuram Sightseeing","Pickup & Drop from Madurai","Private A/C Vehicle","3 Nights Hotel Accommodation","Complimentary Breakfast","🛕 Tiruchendur Murugan Temple Darshan","🌇 Sunrise & Sunset at Kanyakumari","🌅 Kovalam Beach & Poovar Backwaters","Experienced Driver","Customizable Tour Package"],
    "keywords": "Madurai → Tiruchendur → Kanyakumari → Thiruvananthapuram 4 Days / 3 Nights Tour Package, Best Madurai, Tiruchendur, Kanyakumari & Thiruvananthapuram Tour Package | 4 Days / 3 Nights, Tamil Nadu Tour, Logaa Holidays",
    "id": "2081"
},
  '2082': {
    "title": "Madurai → Kodaikanal → Palani → Madurai 4 Days / 3 Nights Tour Package",
    "image": "/assets/madurai 63 package/4day/MADURAI -KODAIKANAL-PALANI-MADURAI.png",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraikoadaikanal.png",
    "overview": {"duration": "4 Days / 3 Nights","destination": "Kodaikanal, Palani","activities": "Nature, Pilgrimage, Sightseeing","themes": "Nature & Adventure, Religious & Pilgrimage, Hill Stations & Valleys"},
    "priceDetails": {"amount": "On Request","type": "per person"},
    "itinerary": [
        {"day": "Day 01","title": "Madurai → Kodaikanal","activities": ["07:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.","Proceed to Kodaikanal.","Sightseeing","💦 Silver Cascade Falls","🌄 Coaker's Walk","🌿 Bryant Park","🚣 Kodaikanal Lake","🪨 Pillar Rocks","🌲 Pine Forest","🦇 Guna Caves","🌅 Moir Point","🏨 Overnight Stay in Kodaikanal"]},
        {"day": "Day 02","title": "Kodaikanal Local Sightseeing","activities": ["08:00 AM – Breakfast at Hotel.","Visit","🌼 Mannavanur Lake","🐑 Mannavanur Sheep Farm","🌄 Poombarai View Point","🛕 Kuzhanthai Velappar Temple","🌿 Silent Valley View","🌅 Upper Lake View","🛍️ Homemade Chocolate & Eucalyptus Oil Shopping","🏨 Overnight Stay in Kodaikanal"]},
        {"day": "Day 03","title": "Kodaikanal Leisure & Local Attractions","activities": ["08:00 AM – Breakfast at Hotel.","Explore","🌸 Chettiar Park","🌊 Bear Shola Falls","🌿 Green Valley View","🎢 Adventure Park (Optional)","☕ Café & Local Market Visit","🚣 Optional Boating at Kodaikanal Lake","🏨 Overnight Stay in Kodaikanal"]},
        {"day": "Day 04","title": "Kodaikanal → Palani → Madurai","activities": ["08:00 AM – Breakfast at Hotel.","Check-out and proceed to Palani.","Palani Sightseeing","🛕 Arulmigu Dhandayuthapani Swamy Temple","🚡 Rope Car / Winch Ride (Optional)","🛍️ Panchamirtham Shopping","After darshan, proceed to Madurai.","06:00 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."]}
    ],
    "inclusions": ["Private A/C Vehicle","Pickup & Drop from Madurai","3 Nights Hotel Accommodation","Complimentary Breakfast","Kodaikanal & Palani Sightseeing","Driver Allowance","Toll & Parking Charges","Driver Languages","Tamil","English","Hindi (Subject to Availability)"],
    "exclusions": ["Rope Car / Winch Tickets","Entry Tickets","Boating Charges","Adventure Activities","Lunch & Dinner","Personal Expenses"],
    "highlights": ["4 Days / 3 Nights Hill Station & Temple Tour","Pickup & Drop from Madurai","Private A/C Vehicle","3 Nights Hotel Accommodation","Complimentary Breakfast","🌿 Kodaikanal & Palani Sightseeing","💦 Silver Cascade Falls","🚣 Kodaikanal Lake","🌼 Mannavanur Lake","🛕 Palani Murugan Temple Darshan","Experienced Driver","Customizable Tour Package"],
    "keywords": "Madurai → Kodaikanal → Palani → Madurai 4 Days / 3 Nights Tour Package, Best Kodaikanal & Palani Tour Package from Madurai | 4 Days / 3 Nights, Kodaikanal Tour, Tamil Nadu, Logaa Holidays",
    "id": "2082"
},
  '2083': {
    "title": "Madurai → Kumbakonam → Navagraha Temples 4 Days / 3 Nights Tour Package",
    "image": "/assets/madurai 63 package/4day/MADURAI KUMBAKONAM NAVGARHA TEMPLE   4 days.png",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraitrichykumbakonamtanjore3days.png",
    "overview": {"duration": "4 Days / 3 Nights","destination": "Kumbakonam, Thanjavur","activities": "Pilgrimage, Sightseeing","themes": "Religious & Pilgrimage, Culture & Heritage"},
    "priceDetails": {"amount": "On Request","type": "per person"},
    "itinerary": [
        {"day": "Day 01","title": "Madurai → Kumbakonam","activities": ["07:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.","Proceed to Kumbakonam (Approx. 290 km | 6 Hours).","En Route Sightseeing","🛕 Brihadeeswarar Temple, Thanjavur (UNESCO World Heritage Site)","🏛️ Thanjavur Royal Palace (Time Permitting)","Proceed to Kumbakonam.","Evening Sightseeing","🛕 Adi Kumbeswarar Temple","🛕 Sarangapani Temple","🛕 Chakrapani Temple","🏨 Overnight Stay in Kumbakonam"]},
        {"day": "Day 02","title": "Navagraha Temple Tour","activities": ["08:00 AM – Breakfast at Hotel.","Visit the sacred Navagraha Temples.","Navagraha Temples","☀️ Suriyanar Temple – Surya (Sun)","🌙 Thingalur Chandran Temple – Moon","🔴 Vaitheeswaran Koil – Angaraka (Mars)","🟢 Thiruvenkadu Temple – Budhan (Mercury)","🟡 Alangudi Guru Temple – Guru (Jupiter)","⚪ Kanjanur Sukran Temple – Venus","⚫ Thirunallar Saneeswaran Temple – Saturn","🐍 Thirunageswaram Rahu Temple – Rahu","🐍 Keezhaperumpallam Ketu Temple – Ketu","🏨 Overnight Stay in Kumbakonam"]},
        {"day": "Day 03","title": "Kumbakonam Heritage & Temple Tour","activities": ["08:00 AM – Breakfast at Hotel.","Sightseeing","🛕 Airavatesvara Temple, Darasuram (UNESCO World Heritage Site)","🛕 Swamimalai Murugan Temple","🛕 Oppiliappan Temple","🛕 Patteeswaram Durga Temple","🛕 Ramaswamy Temple","🌊 Mahamaham Tank","🛍️ Brass Utensils & Handicrafts Shopping","🏨 Overnight Stay in Kumbakonam"]},
        {"day": "Day 04","title": "Kumbakonam → Madurai","activities": ["08:00 AM – Breakfast at Hotel.","Check-out from the hotel.","Optional Morning Visit","🛕 Nachiyar Kovil","🛕 Thirunageswaram Temple (If not covered on Day 2)","🛍️ Local Shopping","Proceed to Madurai.","05:30 PM – Arrival & Drop at Madurai Airport, Railway Station, Hotel, or Bus Stand."]}
    ],
    "inclusions": ["Private A/C Vehicle","Pickup & Drop from Madurai","3 Nights Hotel Accommodation","Complimentary Breakfast","Kumbakonam & Navagraha Temple Sightseeing as per Itinerary","Driver Allowance","Toll & Parking Charges","Driver Languages","Tamil","English","Hindi (Subject to Availability)"],
    "exclusions": ["Temple Special Darshan Tickets","Entry Tickets","Lunch & Dinner","Personal Expenses","Guide Charges"],
    "highlights": ["4 Days / 3 Nights Temple Tour","Pickup & Drop from Madurai","Private A/C Vehicle","3 Nights Hotel Accommodation","Complimentary Breakfast","Visit All 9 Navagraha Temples","🛕 Brihadeeswarar Temple (UNESCO)","🛕 Airavatesvara Temple (UNESCO)","🛕 Swamimalai Murugan Temple","🌊 Mahamaham Tank","Experienced Driver","Customizable Tour Package"],
    "keywords": "Madurai → Kumbakonam → Navagraha Temples 4 Days / 3 Nights Tour Package, Best Kumbakonam Navagraha Temple Tour Package from Madurai | 4 Days / 3 Nights, Navagraha Temple Tour, Tamil Nadu, Logaa Holidays",
    "id": "2083"
},
  '2084': {
    "title": "Madurai → Kanyakumari → Kovalam → Thiruvananthapuram 4 Days / 3 Nights Tour Package",
    "image": "/assets/madurai 63 package/4day/madurai-kanayakuamri0kovla0thiruvanthapuram.png",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraikanyakumaritrivandrum3days.png",
    "overview": {"duration": "4 Days / 3 Nights","destination": "Kanyakumari, Kovalam, Thiruvananthapuram","activities": "Pilgrimage, Sightseeing, Beach","themes": "Religious & Pilgrimage, Culture & Heritage, Beaches and Islands"},
    "priceDetails": {"amount": "On Request","type": "per person"},
    "itinerary": [
        {"day": "Day 01","title": "Madurai → Kanyakumari","activities": ["07:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.","Proceed to Kanyakumari (Approx. 245 km | 5 Hours).","Kanyakumari Sightseeing","🛕 Kanyakumari Bhagavathi Amman Temple","🌊 Triveni Sangam","🪨 Vivekananda Rock Memorial","🗿 Thiruvalluvar Statue","🌉 Glass Bridge","🏛️ Gandhi Memorial Mandapam","🌇 Sunset View Point","🏨 Overnight Stay in Kanyakumari"]},
        {"day": "Day 02","title": "Kanyakumari → Kovalam","activities": ["05:45 AM – Enjoy the breathtaking Sunrise at Kanyakumari.","08:00 AM – Breakfast at Hotel.","Check-out and proceed to Kovalam.","En Route Sightseeing","🛕 Suchindram Thanumalayan Temple","🏛️ Padmanabhapuram Palace","Kovalam Sightseeing","🏖️ Lighthouse Beach","🌊 Hawa Beach","🌅 Samudra Beach","🏨 Overnight Stay in Kovalam"]},
        {"day": "Day 03","title": "Kovalam → Thiruvananthapuram","activities": ["08:00 AM – Breakfast at Hotel.","Check-out from the hotel.","Thiruvananthapuram Sightseeing","🛕 Sree Padmanabhaswamy Temple","🦁 Thiruvananthapuram Zoo","🏛️ Napier Museum","🌊 Shanghumukham Beach","🛍️ Local Shopping","🏨 Overnight Stay in Thiruvananthapuram"]},
        {"day": "Day 04","title": "Thiruvananthapuram Sightseeing & Drop","activities": ["08:00 AM – Breakfast at Hotel.","Check-out from the hotel.","Morning Sightseeing","🚤 Poovar Backwater Boating (Optional)","🛕 Aazhimala Shiva Temple","🌊 Vizhinjam Harbour View Point","Drop at Thiruvananthapuram International Airport, Thiruvananthapuram Central Railway Station, or your preferred location."]}
    ],
    "inclusions": ["Private A/C Vehicle","Pickup from Madurai & Drop at Thiruvananthapuram","3 Nights Hotel Accommodation","Complimentary Breakfast","Kanyakumari, Kovalam & Thiruvananthapuram Sightseeing as per Itinerary","Driver Allowance","Toll & Parking Charges","Driver Languages","Tamil","English","Hindi (Subject to Availability)"],
    "exclusions": ["Vivekananda Rock Ferry Tickets","Poovar Boating Charges","Entry Tickets","Lunch & Dinner","Personal Expenses","Guide Charges"],
    "highlights": ["4 Days / 3 Nights South India Coastal Tour","Pickup from Madurai & Drop at Thiruvananthapuram","Private A/C Vehicle","3 Nights Hotel Accommodation","Complimentary Breakfast","🌇 Sunrise & Sunset at Kanyakumari","🏖️ Kovalam Beach Experience","🛕 Sree Padmanabhaswamy Temple","🚤 Optional Poovar Backwater Boating","Experienced Driver","Customizable Tour Package"],
    "keywords": "Madurai → Kanyakumari → Kovalam → Thiruvananthapuram 4 Days / 3 Nights Tour Package, Best Kanyakumari, Kovalam & Thiruvananthapuram Tour Package from Madurai | 4 Days / 3 Nights, Tamil Nadu Tour, Logaa Holidays",
    "id": "2084"
},
  '2085': {
    "title": "Madurai → Munnar → Thekkady → Alleppey → Kochi 5 Days / 4 Nights Tour Package",
    "image": "/assets/madurai 63 package/5days/Madurai → Munnar → Thekkady → Alleppey → Kochi 5 Days  4 Nights Tour Package.png",
    "heroImage": "/assets/madurai 63 package/5days/Madurai → Munnar → Thekkady → Alleppey → Kochi 5 Days  4 Nights Tour Package.png",
    "overview": {"duration": "5 Days / 4 Nights","destination": "Munnar, Thekkady, Alleppey, Kochi","activities": "Nature, Wildlife, Backwaters","themes": "Nature & Adventure, Hill Stations & Valleys, Beaches and Islands"},
    "priceDetails": {"amount": "On Request","type": "per person"},
    "itinerary": [
        {"day": "Day 01","title": "Madurai → Munnar","activities": ["07:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.","Proceed to Munnar (Approx. 160 km | 4.5–5 Hours).","En Route Sightseeing","🌄 Bodimedu View Point","🌿 Poopara View Point","🌊 Anayirangal Dam View Point","💦 Chinnakanal Waterfalls","🌄 Lockhart Gap View Point","📸 Signal Point","Evening Sightseeing","🌳 Blossom Hydel Park","🎭 Kathakali Cultural Show (Optional)","⚔️ Kalari Martial Arts Show (Optional)","🏨 Overnight Stay in Munnar"]},
        {"day": "Day 02","title": "Munnar Sightseeing → Thekkady","activities": ["08:00 AM – Breakfast at Hotel.","Check-out from the hotel.","Munnar Sightseeing","🌹 Rose Garden","📸 Photo Point","🐘 Elephant Park","🍃 Tea Museum & Tea Factory","💧 Mattupetty Dam","🔊 Echo Point","Proceed to Thekkady (Approx. 95 km | 3 Hours).","Evening Sightseeing","🌶️ Spice Plantation Tour","🛍️ Kumily Spice Market","🎭 Kathakali Show (Optional)","🏨 Overnight Stay in Thekkady"]},
        {"day": "Day 03","title": "Thekkady → Alleppey","activities": ["08:00 AM – Breakfast at Hotel.","Check-out from the hotel.","Thekkady Sightseeing","🛶 Periyar Lake Boating (Optional)","🐘 Periyar Wildlife Sanctuary","🐘 Elephant Camp (Optional)","Proceed to Alleppey (Approx. 140 km | 4 Hours).","Evening Sightseeing","🌊 Alleppey Beach","🌴 Backwater Village Walk","🌅 Sunset View","🏨 Overnight Stay in Alleppey (Houseboat stay can be arranged on request.)"]},
        {"day": "Day 04","title": "Alleppey → Kochi","activities": ["08:00 AM – Breakfast at Hotel.","Check-out and proceed to Kochi (Approx. 60 km | 1.5 Hours).","Kochi Sightseeing","⛪ Fort Kochi","🕸️ Chinese Fishing Nets","⛪ St. Francis Church","🏛️ Mattancherry Palace (Dutch Palace)","🕍 Paradesi Jewish Synagogue","🌊 Marine Drive","🛍️ Lulu Mall (Optional)","🏨 Overnight Stay in Kochi"]},
        {"day": "Day 05","title": "Kochi Sightseeing & Departure","activities": ["08:00 AM – Breakfast at Hotel.","Check-out from the hotel.","Morning Sightseeing","🏛️ Kerala Folklore Museum","🌴 Cherai Beach","🛍️ Local Shopping","Drop at Cochin International Airport, Ernakulam Junction Railway Station, or your preferred location."]}
    ],
    "inclusions": ["Private A/C Vehicle","Pickup from Madurai & Drop at Kochi","4 Nights Hotel Accommodation","Complimentary Breakfast","Munnar, Thekkady, Alleppey & Kochi Sightseeing as per Itinerary","Driver Allowance","Toll & Parking Charges","Driver Languages","Tamil","English","Hindi (Subject to Availability)"],
    "exclusions": ["Houseboat Stay Charges (unless included in the selected package)","Periyar Boating Tickets","Entry Tickets","Kathakali & Kalari Show Tickets","Lunch & Dinner","Personal Expenses","Guide Charges"],
    "highlights": ["5 Days / 4 Nights Kerala Holiday Package","Pickup from Madurai & Drop at Kochi","Private A/C Vehicle","4 Nights Hotel Accommodation","Complimentary Breakfast","Munnar, Thekkady, Alleppey & Kochi Sightseeing","Tea Plantations & Scenic Viewpoints","Periyar Wildlife Sanctuary","Alleppey Backwaters Experience","Fort Kochi Heritage Tour","Experienced Driver","Customizable Tour Package"],
    "keywords": "Madurai → Munnar → Thekkady → Alleppey → Kochi 5 Days / 4 Nights Tour Package, Best Kerala Tour Package from Madurai | Munnar, Thekkady, Alleppey & Kochi | 5 Days / 4 Nights, Kerala Holiday Package, Logaa Holidays",
    "id": "2085"
},
  '2086': {
    "title": "Madurai → Rameswaram → Tiruchendur → Kanyakumari → Thiruvananthapuram 5 Days / 4 Nights Tour Package",
    "image": "/assets/madurai 63 package/5days/Madurai Rameswaram Tiruchendur Kanyakumari Thiruvananthapuram 5 Days.png",
    "heroImage": "/assets/madurai 63 package/1918x642/madurairameshwaramthiruchendurkanyakumaritrivandrum5days.png",
    "overview": {"duration": "5 Days / 4 Nights","destination": "Rameswaram, Tiruchendur, Kanyakumari, Thiruvananthapuram","activities": "Pilgrimage, Sightseeing","themes": "Religious & Pilgrimage, Culture & Heritage"},
    "priceDetails": {"amount": "On Request","type": "per person"},
    "itinerary": [
        {"day": "Day 01","title": "Madurai → Rameswaram","activities": ["07:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.","Proceed to Rameswaram (Approx. 170 km | 3.5 Hours).","Rameswaram Sightseeing","🛕 Sri Ramanathaswamy Temple","🌉 Pamban Bridge","🌊 Agni Theertham","🏛️ Dr. A.P.J. Abdul Kalam Memorial","🏠 Abdul Kalam House Museum","🌅 Evening Beach Visit","🏨 Overnight Stay in Rameswaram"]},
        {"day": "Day 02","title": "Rameswaram → Tiruchendur","activities": ["08:00 AM – Breakfast at Hotel.","Check-out from the hotel.","Morning Sightseeing","🌊 Dhanushkodi","🚂 Ram Setu View Point","🌅 Ariyaman Beach (Time Permitting)","Proceed to Tiruchendur (Approx. 240 km | 5 Hours).","Evening","🛕 Arulmigu Subramaniya Swamy Temple","🌊 Tiruchendur Beach","🏨 Overnight Stay in Tiruchendur"]},
        {"day": "Day 03","title": "Tiruchendur → Kanyakumari","activities": ["08:00 AM – Breakfast at Hotel.","Check-out and proceed to Kanyakumari (Approx. 90 km | 2 Hours).","En Route Sightseeing","🛕 Suchindram Thanumalayan Temple","Kanyakumari Sightseeing","🛕 Kanyakumari Bhagavathi Amman Temple","🌊 Triveni Sangam","🪨 Vivekananda Rock Memorial","🗿 Thiruvalluvar Statue","🌉 Glass Bridge","🏛️ Gandhi Memorial Mandapam","🌇 Sunset View Point","🏨 Overnight Stay in Kanyakumari"]},
        {"day": "Day 04","title": "Kanyakumari → Thiruvananthapuram","activities": ["05:45 AM – Witness the spectacular Sunrise at Kanyakumari.","08:00 AM – Breakfast at Hotel.","Check-out and proceed to Thiruvananthapuram (Approx. 95 km | 2.5 Hours).","En Route Sightseeing","🏛️ Padmanabhapuram Palace","🛕 Aazhimala Shiva Temple","Thiruvananthapuram Sightseeing","🛕 Sree Padmanabhaswamy Temple","🦁 Thiruvananthapuram Zoo","🏛️ Napier Museum","🌊 Shanghumukham Beach","🏨 Overnight Stay in Thiruvananthapuram"]},
        {"day": "Day 05","title": "Thiruvananthapuram Sightseeing & Drop","activities": ["08:00 AM – Breakfast at Hotel.","Check-out from the hotel.","Morning Sightseeing","🚤 Poovar Backwater Boating (Optional)","🏖️ Kovalam Beach","🌊 Vizhinjam Harbour","🛍️ Local Shopping","Drop at Thiruvananthapuram International Airport, Thiruvananthapuram Central Railway Station, or your preferred location."]}
    ],
    "inclusions": ["Private A/C Vehicle","Pickup from Madurai & Drop at Thiruvananthapuram","4 Nights Hotel Accommodation","Complimentary Breakfast","Sightseeing as per Itinerary","Driver Allowance","Toll & Parking Charges","Driver Languages","Tamil","English","Hindi (Subject to Availability)"],
    "exclusions": ["Temple Special Darshan Tickets","Vivekananda Rock Ferry Tickets","Poovar Boating Charges","Entry Tickets","Lunch & Dinner","Personal Expenses","Guide Charges"],
    "highlights": ["5 Days / 4 Nights South India Temple Tour","Pickup from Madurai & Drop at Thiruvananthapuram","Private A/C Vehicle","4 Nights Hotel Accommodation","Complimentary Breakfast","Rameswaram, Tiruchendur, Kanyakumari & Thiruvananthapuram Sightseeing","Dhanushkodi & Pamban Bridge","Sunrise & Sunset at Kanyakumari","Sree Padmanabhaswamy Temple Visit","Experienced Driver","Customizable Tour Package"],
    "keywords": "Madurai → Rameswaram → Tiruchendur → Kanyakumari → Thiruvananthapuram 5 Days / 4 Nights Tour Package, Best Rameswaram, Tiruchendur, Kanyakumari & Thiruvananthapuram Tour Package from Madurai | 5 Days / 4 Nights, South India Temple Tour, Logaa Holidays",
    "id": "2086"
},
  '2087': {
    "title": "Madurai → Rameswaram → Dhanushkodi → Kanyakumari → Thiruvananthapuram 5 Days / 4 Nights Tour Package",
    "image": "/assets/madurai 63 package/5days/MaduraiRameswaram DhanushkodiKanyakumari  Thiruvananthapuram 5 Days  4 Nights.png",
    "heroImage": "/assets/madurai 63 package/1918x642/madurairameshwaramdhanushkodikanyakumaritrivandrum5days.png",
    "overview": {"duration": "5 Days / 4 Nights","destination": "Rameswaram, Dhanushkodi, Kanyakumari, Thiruvananthapuram","activities": "Pilgrimage, Sightseeing","themes": "Religious & Pilgrimage, Culture & Heritage, Beaches and Islands"},
    "priceDetails": {"amount": "On Request","type": "per person"},
    "itinerary": [
        {"day": "Day 01","title": "Madurai → Rameswaram","activities": ["07:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.","Proceed to Rameswaram (Approx. 170 km | 3.5 Hours).","Rameswaram Sightseeing","🛕 Sri Ramanathaswamy Temple","🌊 Agni Theertham","🌉 Pamban Rail Bridge View Point","🏛️ Dr. A.P.J. Abdul Kalam Memorial","🏠 Abdul Kalam House Museum","🛍️ Local Shopping","🏨 Overnight Stay in Rameswaram"]},
        {"day": "Day 02","title": "Rameswaram → Dhanushkodi → Kanyakumari","activities": ["08:00 AM – Breakfast at Hotel.","Check-out from the hotel.","Dhanushkodi Sightseeing","🌊 Dhanushkodi Beach","🌉 Ram Setu View Point","🏚️ Dhanushkodi Ghost Town","🌅 Kodandaramar Temple","📸 Scenic Coastal Drive","Proceed to Kanyakumari (Approx. 310 km | 6–7 Hours).","Evening Sightseeing","🌇 Sunset View Point","🌊 Triveni Sangam","🏨 Overnight Stay in Kanyakumari"]},
        {"day": "Day 03","title": "Kanyakumari Sightseeing","activities": ["05:45 AM – Witness the spectacular Sunrise at Kanyakumari.","08:00 AM – Breakfast at Hotel.","Kanyakumari Sightseeing","🛕 Kanyakumari Bhagavathi Amman Temple","🪨 Vivekananda Rock Memorial","🗿 Thiruvalluvar Statue","🌉 Glass Bridge","🏛️ Gandhi Memorial Mandapam","🛕 Suchindram Thanumalayan Temple","🏰 Padmanabhapuram Palace","🏨 Overnight Stay in Kanyakumari"]},
        {"day": "Day 04","title": "Kanyakumari → Thiruvananthapuram","activities": ["08:00 AM – Breakfast at Hotel.","Check-out and proceed to Thiruvananthapuram (Approx. 95 km | 2.5 Hours).","Thiruvananthapuram Sightseeing","🛕 Sree Padmanabhaswamy Temple","🦁 Thiruvananthapuram Zoo","🏛️ Napier Museum","🏖️ Kovalam Beach","🌊 Shanghumukham Beach","🏨 Overnight Stay in Thiruvananthapuram"]},
        {"day": "Day 05","title": "Thiruvananthapuram Sightseeing & Drop","activities": ["08:00 AM – Breakfast at Hotel.","Check-out from the hotel.","Morning Sightseeing","🚤 Poovar Backwater Boating (Optional)","🛕 Aazhimala Shiva Temple","⚓ Vizhinjam Harbour","🛍️ Local Shopping","Drop at Thiruvananthapuram International Airport, Thiruvananthapuram Central Railway Station, or your preferred location."]}
    ],
    "inclusions": ["Private A/C Vehicle","Pickup from Madurai & Drop at Thiruvananthapuram","4 Nights Hotel Accommodation","Complimentary Breakfast","Sightseeing as per Itinerary","Driver Allowance","Toll & Parking Charges","Driver Languages","Tamil","English","Hindi (Subject to Availability)"],
    "exclusions": ["Temple Special Darshan Tickets","Vivekananda Rock Ferry Tickets","Poovar Boating Charges","Entry Tickets","Lunch & Dinner","Personal Expenses","Guide Charges"],
    "highlights": ["5 Days / 4 Nights South India Tour","Pickup from Madurai & Drop at Thiruvananthapuram","Private A/C Vehicle","4 Nights Hotel Accommodation","Complimentary Breakfast","Rameswaram, Dhanushkodi, Kanyakumari & Thiruvananthapuram Sightseeing","Pamban Bridge & Ghost Town of Dhanushkodi","Sunrise & Sunset at Kanyakumari","Kovalam Beach & Poovar Backwaters (Optional)","Experienced Driver","Customizable Tour Package"],
    "keywords": "Madurai → Rameswaram → Dhanushkodi → Kanyakumari → Thiruvananthapuram 5 Days / 4 Nights Tour Package, Best Rameswaram, Dhanushkodi, Kanyakumari & Thiruvananthapuram Tour Package from Madurai | 5 Days / 4 Nights, South India Tour, Logaa Holidays",
    "id": "2087"
},
  '2088': {
    "title": "Madurai → Kodaikanal → Rameswaram → Kanyakumari → Thiruvananthapuram 5 Days / 4 Nights Tour Package",
    "image": "/assets/madurai 63 package/5days/Madurai Kodaikanal  Rameswaram Kanyakumari Thiruvananthapuram 5 Days.png",
    "heroImage": "/assets/madurai 63 package/1918x642/maduraikodaikanalrameshwaramkanyakumaritrivandrum5days.png",
    "overview": {"duration": "5 Days / 4 Nights","destination": "Kodaikanal, Rameswaram, Kanyakumari, Thiruvananthapuram","activities": "Nature, Pilgrimage, Sightseeing","themes": "Nature & Adventure, Religious & Pilgrimage, Hill Stations & Valleys"},
    "priceDetails": {"amount": "On Request","type": "per person"},
    "itinerary": [
        {"day": "Day 01","title": "Madurai → Kodaikanal","activities": ["07:00 AM – Pickup from Madurai Airport, Railway Station, Hotel, or Bus Stand.","Proceed to Kodaikanal.","Kodaikanal Sightseeing","💦 Silver Cascade Falls","🌄 Coaker's Walk","🌿 Bryant Park","🚣 Kodaikanal Lake","🪨 Pillar Rocks","🌲 Pine Forest","🦇 Guna Caves","🌅 Moir Point","🏨 Overnight Stay in Kodaikanal"]},
        {"day": "Day 02","title": "Kodaikanal → Rameswaram","activities": ["08:00 AM – Breakfast at Hotel.","Check-out and proceed to Rameswaram (Approx. 320 km | 7–8 Hours).","Evening Sightseeing","🌊 Agni Theertham","🌉 Pamban Bridge View Point","🛍️ Local Shopping","🏨 Overnight Stay in Rameswaram"]},
        {"day": "Day 03","title": "Rameswaram → Kanyakumari","activities": ["08:00 AM – Breakfast at Hotel.","Rameswaram Sightseeing","🛕 Sri Ramanathaswamy Temple","🌊 Dhanushkodi","🌉 Ram Setu View Point","🏛️ Dr. A.P.J. Abdul Kalam Memorial","🏠 Abdul Kalam House Museum","Proceed to Kanyakumari (Approx. 310 km | 6–7 Hours).","🌇 Enjoy the beautiful Sunset at Kanyakumari.","🏨 Overnight Stay in Kanyakumari"]},
        {"day": "Day 04","title": "Kanyakumari → Thiruvananthapuram","activities": ["05:45 AM – Witness the spectacular Sunrise at Kanyakumari.","08:00 AM – Breakfast at Hotel.","Kanyakumari Sightseeing","🛕 Kanyakumari Bhagavathi Amman Temple","🌊 Triveni Sangam","🪨 Vivekananda Rock Memorial","🗿 Thiruvalluvar Statue","🌉 Glass Bridge","🏛️ Gandhi Memorial Mandapam","Proceed to Thiruvananthapuram.","En Route Sightseeing","🛕 Suchindram Thanumalayan Temple","🏰 Padmanabhapuram Palace","🛕 Aazhimala Shiva Temple","🏨 Overnight Stay in Thiruvananthapuram"]},
        {"day": "Day 05","title": "Thiruvananthapuram Sightseeing & Drop","activities": ["08:00 AM – Breakfast at Hotel.","Check-out from the hotel.","Thiruvananthapuram Sightseeing","🛕 Sree Padmanabhaswamy Temple","🦁 Thiruvananthapuram Zoo","🏛️ Napier Museum","🏖️ Kovalam Beach","🚤 Poovar Backwater Boating (Optional)","🌊 Shanghumukham Beach","🛍️ Local Shopping","Drop at Thiruvananthapuram International Airport, Thiruvananthapuram Central Railway Station, or your preferred location."]}
    ],
    "inclusions": ["Private A/C Vehicle","Pickup from Madurai & Drop at Thiruvananthapuram","4 Nights Hotel Accommodation","Complimentary Breakfast","Sightseeing as per Itinerary","Driver Allowance","Toll & Parking Charges","Driver Languages","Tamil","English","Hindi (Subject to Availability)"],
    "exclusions": ["Temple Special Darshan Tickets","Vivekananda Rock Ferry Tickets","Poovar Boating Charges","Entry Tickets","Lunch & Dinner","Personal Expenses","Guide Charges"],
    "highlights": ["5 Days / 4 Nights South India Tour","Pickup from Madurai & Drop at Thiruvananthapuram","Private A/C Vehicle","4 Nights Hotel Accommodation","Complimentary Breakfast","Kodaikanal, Rameswaram, Kanyakumari & Thiruvananthapuram Sightseeing","Hill Station, Temple & Beach Experience","Dhanushkodi & Pamban Bridge","Sunrise & Sunset at Kanyakumari","Experienced Driver","Customizable Tour Package"],
    "keywords": "Madurai → Kodaikanal → Rameswaram → Kanyakumari → Thiruvananthapuram 5 Days / 4 Nights Tour Package, Best Kodaikanal, Rameswaram, Kanyakumari & Thiruvananthapuram Tour Package from Madurai | 5 Days / 4 Nights, South India Tour, Logaa Holidays",
    "id": "2088"
},
  '2089': {
    "title": "Kochi → Munnar → Thekkady → Alleppey → Kovalam → Kanyakumari → Rameswaram → Madurai 8 Days / 7 Nights Tour Package",
    "image": "/assets/madurai 63 package/5days/Kochi → Munnar  Thekkady Alleppey Kovalam Kanyakumari  Rameswaram 8day.png",
    "heroImage": "/assets/madurai 63 package/1918x642/kochimunnarthekadyallepykovalamkanyakumarirameshwarammadurai8days.png",
    "overview": {"duration": "8 Days / 7 Nights","destination": "Kochi, Munnar, Thekkady, Alleppey, Kovalam, Kanyakumari, Rameswaram, Madurai","activities": "Nature, Wildlife, Backwaters, Pilgrimage, Beach","themes": "Nature & Adventure, Hill Stations & Valleys, Beaches and Islands, Religious & Pilgrimage"},
    "priceDetails": {"amount": "On Request","type": "per person"},
    "itinerary": [
        {"day": "Day 01","title": "Kochi → Munnar","activities": ["Pickup from Kochi Airport / Ernakulam Railway Station / Hotel","Proceed to Munnar.","En Route Sightseeing","💦 Cheeyappara Waterfalls","💦 Valara Waterfalls","🌿 Spice Garden","🌄 Tea Plantation View Points","Evening","🌳 Blossom Hydel Park","🎭 Kathakali Cultural Show (Optional)","🏨 Overnight Stay in Munnar"]},
        {"day": "Day 02","title": "Munnar Sightseeing","activities": ["Visit","🌹 Rose Garden","📸 Photo Point","🐘 Elephant Park","🍃 Tea Museum & Tea Factory","💧 Mattupetty Dam","🔊 Echo Point","🌄 Top Station (Optional)","🏨 Overnight Stay in Munnar"]},
        {"day": "Day 03","title": "Munnar → Thekkady → Alleppey","activities": ["Breakfast at Hotel.","Proceed to Thekkady.","Thekkady Sightseeing","🛶 Periyar Lake Boating (Optional)","🐘 Periyar Wildlife Sanctuary","🌶️ Spice Plantation Tour","🛍️ Kumily Spice Market","Proceed to Alleppey.","🏨 Overnight Stay in Alleppey (Houseboat stay available on request.)"]},
        {"day": "Day 04","title": "Alleppey → Kovalam","activities": ["Alleppey Sightseeing","🚤 Shikara Boat Ride (Optional)","🌊 Alleppey Beach","🌴 Backwater Villages","Proceed to Kovalam.","Evening","🏖️ Lighthouse Beach","🌅 Hawa Beach","🏨 Overnight Stay in Kovalam"]},
        {"day": "Day 05","title": "Kovalam → Kanyakumari","activities": ["En Route Sightseeing","🚤 Poovar Backwater Boating (Optional)","🛕 Aazhimala Shiva Temple","Proceed to Kanyakumari.","Kanyakumari Sightseeing","🛕 Kanyakumari Bhagavathi Amman Temple","🌊 Triveni Sangam","🌇 Sunset View Point","🏨 Overnight Stay in Kanyakumari"]},
        {"day": "Day 06","title": "Kanyakumari → Rameswaram","activities": ["Early morning Sunrise at Kanyakumari.","Breakfast at Hotel.","Proceed to Rameswaram.","En Route Sightseeing","🛕 Suchindram Thanumalayan Temple","Rameswaram Sightseeing","🌉 Pamban Bridge","🌊 Agni Theertham","🏨 Overnight Stay in Rameswaram"]},
        {"day": "Day 07","title": "Rameswaram → Madurai","activities": ["Rameswaram Sightseeing","🛕 Sri Ramanathaswamy Temple","🌊 Dhanushkodi","🌉 Ram Setu View Point","🏛️ Dr. A.P.J. Abdul Kalam Memorial","🏠 Abdul Kalam House Museum","Proceed to Madurai.","Evening Sightseeing","🛕 Meenakshi Amman Temple","🏛️ Thirumalai Nayakkar Mahal","🏨 Overnight Stay in Madurai"]},
        {"day": "Day 08","title": "Madurai Sightseeing & Drop","activities": ["Breakfast at Hotel.","Madurai Sightseeing","🛕 Meenakshi Amman Temple (if not covered on Day 7)","🌺 Puthu Mandapam","🏛️ Gandhi Memorial Museum","🛍️ Madurai Local Market","Drop at Madurai Airport, Madurai Railway Station, or your preferred location."]}
    ],
    "inclusions": ["Private A/C Vehicle","Pickup from Kochi & Drop at Madurai","7 Nights Hotel Accommodation","Complimentary Breakfast","Sightseeing as per Itinerary","Driver Allowance","Toll & Parking Charges","Driver Languages","Tamil","English","Hindi (Subject to Availability)"],
    "exclusions": ["Houseboat Charges (unless selected)","Periyar Boating Tickets","Shikara Boat Charges","Poovar Boating Charges","Entry Tickets","Temple Special Darshan Tickets","Lunch & Dinner","Personal Expenses"],
    "highlights": ["8 Days / 7 Nights South India Tour","Pickup from Kochi & Drop at Madurai","Private A/C Vehicle","7 Nights Hotel Accommodation","Complimentary Breakfast","Hill Stations, Wildlife, Backwaters, Beaches & Temple Tour","Tea Plantations & Scenic Viewpoints","Periyar Wildlife Sanctuary","Alleppey Backwaters","Kovalam Beach & Kanyakumari Sunrise","Rameswaram Temple & Dhanushkodi","Madurai Meenakshi Amman Temple","Experienced Driver","Customizable Tour Package"],
    "keywords": "Kochi → Munnar → Thekkady → Alleppey → Kovalam → Kanyakumari → Rameswaram → Madurai 8 Days / 7 Nights Tour Package, Best Kerala & Tamil Nadu Tour Package | Kochi, Munnar, Thekkady, Alleppey, Kovalam, Kanyakumari, Rameswaram & Madurai | 8 Days / 7 Nights, Logaa Holidays",
    "id": "2089"
},

  '1010': {
    "id": "1010",
    "title": "Madurai to Shirdi Tour Package | 2 Days / 1 Night Direct Flight Package",
    "image": "/assets/shiridi/cards/maduraitoshirdi2day.png",
    "heroImage": "/assets/shiridi/hero/maduraishirdi2day.png",
    "overview": {
        "duration": "2 Days / 1 Night",
        "destination": "Shirdi",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {
        "amount": "16,500",
        "type": "per person"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Madurai → Shirdi",
            "activities": [
                "•\t✈️ Departure from Madurai Airport",
                "•\t🛬 Arrival at Shirdi Airport",
                "•\t🚗 Transfer to Hotel & Check-in",
                "After refreshments, proceed for temple visit.",
                "Shirdi Sightseeing",
                "•\t🛕 Shri Sai Baba Samadhi Mandir (VIP Darshan – Subject to Availability)",
                "•\t🛕 Gurusthan",
                "•\t🛕 Dwarkamai",
                "•\t🏛️ Sai Baba Museum",
                "•\t🛕 Chavadi",
                "•\t🌳 Lendi Baug (Lendi Garden)",
                "•\t🛕 Maruthi Temple",
                "•\t🪔 Nandadeep",
                "🏨 Overnight Stay in Shirdi"
            ]
        },
        {
            "day": "Day 02",
            "title": "Shirdi → Madurai",
            "activities": [
                "Early Morning",
                "•\t🙏 Kakad Aarti / Morning Darshan at Shri Sai Baba Temple",
                "Free Time",
                "•\t🛍️ Shopping for Sai Baba Idols, Shawls, Prasad, Spiritual Books & Souvenirs",
                "En Route Visit",
                "•\t🛕 Khandoba Temple",
                "Transfer to Shirdi Airport.",
                "✈️ Return Flight to Madurai Airport."
            ]
        }
    ],
    "inclusions": [
        "Airport Pickup & Drop",
        "Private A/C Vehicle for Transfers & Sightseeing",
        "1 Night A/C Hotel Accommodation",
        "Complimentary Breakfast",
        "Sightseeing as per Itinerary",
        "VIP Darshan Arrangement (Subject to Availability)",
        "English, Hindi & Tamil Tour Assistance"
    ],
    "exclusions": [
        "Airfare (unless specifically included in the selected package)",
        "Lunch & Dinner",
        "Temple Donations & Special Poojas",
        "Entry Tickets (if applicable)",
        "Personal Expenses",
        "Laundry & Telephone Charges",
        "Travel Insurance",
        "Tips & Porter Charges",
        "Mineral Water",
        "Anything Not Mentioned in the Package Includes"
    ],
    "highlights": [
        "2 Days / 1 Night Shirdi Pilgrimage",
        "Direct Flight from Madurai",
        "VIP Darshan of Shri Sai Baba Temple (Subject to Availability)",
        "Kakad Aarti / Morning Darshan",
        "Dwarkamai",
        "Gurusthan",
        "Chavadi",
        "Lendi Baug (Lendi Garden)",
        "Sai Baba Museum",
        "Maruthi Temple",
        "Nandadeep",
        "Khandoba Temple",
        "Airport Transfers & Local Sightseeing",
        "Tamil, English & Hindi Tour Assistance"
    ]
},
  '1007': {
    "id": "1007",
    "title": "Madurai to Kasi Tour Package | 3 Days / 2 Nights Varanasi Flight Package",
    "image": "/assets/varanasi/cards/kasi8.png",
    "heroImage": "/assets/varanasi/hero/kasibanner8.png",
    "overview": {
        "duration": "2 Nights / 3 Days",
        "destination": "Kasi | 3 Days / 2 Nights Varanasi Flight Package",
        "activities": "Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage, Nature & Wildlife"
    },
    "priceDetails": {
        "label": "Starts @",
        "amount": "On Request",
        "status": "On Request"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Day 01 – Madurai → Varanasi (Kasi)",
            "description": "✈️ Departure from Madurai Airport\n🛬 Arrival at Varanasi Airport\n🚗 Transfer to Hotel & Check-in\nEvening Spiritual Experience\n🚤 Boat Ride on the Holy River Ganga\n🔥 Witness the Grand Ganga Aarti\n⚱️ Manikarnika Ghat\n⚱️ Harishchandra Ghat\n🌙 Sayana Aarti at Shri Kashi Vishwanath Temple\n🏨 Overnight Stay in Varanasi"
        },
        {
            "day": "Day 02",
            "title": "Day 02 – Kashi Temple Darshan",
            "description": "Early Morning\n🌊 Holy Bath in the River Ganga\n🙏 Perform Tharpanam (Optional)\nTemple Visits\n🛕 Shri Kashi Vishwanath Temple\n🛕 Kashi Vishalakshi Amman Temple\n🛕 Annapoorani Temple\nFree time for religious activities.\n🏨 Overnight Stay in Varanasi"
        },
        {
            "day": "Day 03",
            "title": "Day 03 – Varanasi → Madurai",
            "description": "Breakfast at Hotel\nMorning Temple Visit\n🛕 Kala Bhairava Temple\nFree Time\n🛍️ Shopping for Banarasi Silk Sarees, Rudraksha Malas, Brass Idols & Religious Souvenirs\nCheck-out from the hotel.\n🚗 Transfer to Varanasi Airport.\n✈️ Return Flight to Madurai Airport."
        }
    ],
    "inclusions": [
        "Airport Pickup & Drop",
        "Private A/C Vehicle for Transfers & Sightseeing",
        "2 Nights A/C Hotel"
    ],
    "exclusions": [
        "Airfare (unless specifically included in the selected package)",
        "Lunch & Dinner",
        "Temple Special Darshan Tickets",
        "Tharpanam & Pooja Charges",
        "Entry Tickets (if applicable)",
        "Personal Expenses",
        "Laundry & Telephone Charges",
        "Travel Insurance",
        "Tips & Porter Charges",
        "Mineral Water",
        "Anything Not Mentioned in the Package Includes"
    ],
    "policies": {
        "payment": "20% Advance at the time of booking. Balance before departure.",
        "cancellation": "Cancellations made 7+ days before: Full refund. Within 3-7 days: 50% refund. Less than 3 days: No refund."
    }
},
  '1008': {
    "id": "1008",
    "title": "Madurai to Kasi, Gaya & Prayagraj Tour Package | 5 Days / 4 Nights Flight Package",
    "image": "/assets/madurai 63 package/Madurai to Kasi, Gaya & Prayagraj Tour Package  5 Days  4 Nights Flight Package -card.png",
    "heroImage": "/assets/madurai 63 package/Madurai to Kasi, Gaya & Prayagraj Tour Package  5 Days  4 Nights Flight Package- heroseaction.PNG",
    "overview": {
        "duration": "1 Night / 2 Days",
        "destination": "Kasi, Gaya & Prayagraj | 5 Days / 4 Nights Flight Package",
        "activities": "Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage, Nature & Wildlife"
    },
    "priceDetails": {
        "label": "Starts @",
        "amount": "On Request",
        "status": "On Request"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Day 01 – Madurai → Varanasi (Kasi)",
            "description": "✈️ Departure from Madurai Airport\n🛬 Arrival at Varanasi Airport\n🚗 Transfer to Hotel & Check-in\nTemple Darshan\n🛕 Shri Kashi Vishwanath Temple\n🛕 Kashi Vishalakshi Amman Temple\n🛕 Annapoorani Temple\nEvening Spiritual Experience\n🚤 Boat Ride on the Holy River Ganga\n🔥 Witness the Grand Ganga Aarti\n⚱️ Manikarnika Ghat\n⚱️ Harishchandra Ghat\n🌙 Sayana Aarti at Shri Kashi Vishwanath Temple\n🏨 Overnight Stay in Varanasi"
        },
        {
            "day": "Day 02",
            "title": "Day 02 – Varanasi → Gaya",
            "description": "Early Morning\n🌊 Holy Bath in the River Ganga\n🙏 Perform Tharpanam (Optional)\nFree time for religious activities and shopping.\nAfter lunch, proceed to Gaya.\n🏨 Overnight Stay in Gaya"
        },
        {
            "day": "Day 03",
            "title": "Day 03 – Gaya → Bodh Gaya → Varanasi",
            "description": "Ancestral Rituals\n🙏 Perform Pinda Daan / Shraddham (Optional)\nDress Code: Ladies – Saree | Gents – Dhoti\nGaya Sightseeing\n🛕 Vishnupad Temple\n🌳 Akshayavat (Sacred Banyan Tree)\nBodh Gaya Sightseeing\n🛕 Mahabodhi Temple\n🌳 Sacred Bodhi Tree\nProceed back to Varanasi.\n🏨 Overnight Stay in Varanasi"
        },
        {
            "day": "Day 04",
            "title": "Day 04 – Varanasi → Prayagraj (Allahabad) → Varanasi",
            "description": "Breakfast at Hotel\nProceed to Prayagraj (Allahabad).\nPrayagraj Sightseeing\n🌊 Holy Bath at Triveni Sangam\n🙏 Veni Pooja / Dampathi Pooja (Optional)\n🛕 Sri Sayana Hanuman Temple\nReturn to Varanasi.\n🏨 Overnight Stay in Varanasi"
        },
        {
            "day": "Day 05",
            "title": "Day 05 – Varanasi → Madurai",
            "description": "Breakfast at Hotel\nMorning Temple Visit\n🛕 Kala Bhairava Temple\nFree Time\n🛍️ Shopping for Banarasi Silk Sarees\n📿 Rudraksha Malas\n🪔 Brass Idols & Religious Articles\nCheck-out from the hotel.\n🚗 Transfer to Varanasi Airport.\n✈️ Return Flight to Madurai Airport."
        }
    ],
    "inclusions": [
        "Airport Pickup & Drop",
        "Private A/C Vehicle for Transfers & Sightseeing",
        "3 Nights Hotel"
    ],
    "exclusions": [
        "Airfare (unless specifically included in the selected package)",
        "Pinda Daan, Shraddham & Tharpanam Charges",
        "Veni Pooja / Dampathi Pooja Charges",
        "Temple Special Darshan Tickets",
        "Lunch & Dinner",
        "Entry Tickets (if applicable)",
        "Personal Expenses",
        "Laundry & Telephone Charges",
        "Travel Insurance",
        "Tips & Porter Charges",
        "Mineral Water",
        "Anything Not Mentioned in the Package Includes"
    ],
    "policies": {
        "payment": "20% Advance at the time of booking. Balance before departure.",
        "cancellation": "Cancellations made 7+ days before: Full refund. Within 3-7 days: 50% refund. Less than 3 days: No refund."
    }
},
  '1009': {
    "id": "1009",
    "title": "Madurai to Kasi, Gaya, Prayagraj & Ayodhya Tour Package | 6 Days / 5 Nights Flight Package",
    "image": "/assets/madurai%2063%20package/322x372/maduraikasigayaprayagrajayodhya.jpeg",
    "heroImage": "/assets/madurai%2063%20package/1918x642/maduraikasigayaprayagrajayodhya.jpeg",
    "overview": {
        "duration": "1 Night / 2 Days",
        "destination": "Kasi, Gaya, Prayagraj & Ayodhya | 6 Days / 5 Nights Flight Package",
        "activities": "Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage, Nature & Wildlife"
    },
    "priceDetails": {
        "label": "Starts @",
        "amount": "On Request",
        "status": "On Request"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Day 01 – Madurai → Varanasi → Ayodhya",
            "description": "✈️ Departure from Madurai Airport\n🛬 Arrival at Varanasi Airport\n🚗 Drive to Ayodhya\nCheck-in at the hotel\nAyodhya Sightseeing\n🛕 Shri Ram Janmabhoomi Temple\n🛕 Hanuman Garhi Temple\n🏨 Overnight Stay in Ayodhya"
        },
        {
            "day": "Day 02",
            "title": "Day 02 – Ayodhya → Varanasi (Kasi)",
            "description": "Breakfast at Hotel\nProceed to Varanasi (Kasi).\nCheck-in at the hotel.\nTemple Darshan\n🛕 Shri Kashi Vishwanath Temple\n🛕 Kashi Vishalakshi Amman Temple\n🛕 Annapoorani Temple\nEvening Spiritual Experience\n🚤 Boat Ride on the Holy River Ganga\n🔥 Witness the Grand Ganga Aarti\n⚱️ Manikarnika Ghat\n⚱️ Harishchandra Ghat\n🌙 Sayana Aarti at Shri Kashi Vishwanath Temple\n🏨 Overnight Stay in Varanasi"
        },
        {
            "day": "Day 03",
            "title": "Day 03 – Varanasi → Gaya",
            "description": "Early Morning\n🌊 Holy Bath in the River Ganga\n🙏 Perform Tharpanam (Optional)\nFree time for shopping and religious activities.\nProceed to Gaya / Bodh Gaya.\n🏨 Overnight Stay in Gaya"
        },
        {
            "day": "Day 04",
            "title": "Day 04 – Gaya → Bodh Gaya → Varanasi",
            "description": "Morning Rituals\n🙏 Perform Pinda Daan / Shraddham (Optional)\nDress Code: Ladies – Saree | Gents – Dhoti\nGaya Sightseeing\n🛕 Vishnupad Temple\n🌳 Akshayavat (Vat Vriksha)\nBodh Gaya Sightseeing\n🛕 Mahabodhi Temple\n🌳 Sacred Bodhi Tree\nProceed back to Varanasi.\n🏨 Overnight Stay in Varanasi"
        },
        {
            "day": "Day 05",
            "title": "Day 05 – Varanasi → Prayagraj (Allahabad) → Varanasi",
            "description": "Breakfast at Hotel\nProceed to Prayagraj (Allahabad).\nPrayagraj Sightseeing\n🌊 Holy Bath at Triveni Sangam\n🙏 Veni Pooja / Dampathi Pooja (Optional)\n🛕 Sri Sayana Hanuman Temple\nReturn to Varanasi.\n🏨 Overnight Stay in Varanasi"
        },
        {
            "day": "Day 06",
            "title": "Day 06 – Varanasi → Madurai",
            "description": "Breakfast at Hotel\nMorning Temple Visit\n🛕 Kala Bhairava Temple\nShopping Time\n🛍️ Banarasi Silk Sarees\n📿 Rudraksha Malas\n🪔 Brass Idols & Religious Articles\nCheck-out from the hotel.\n🚗 Transfer to Varanasi Airport.\n✈️ Return Flight to Madurai Airport."
        }
    ],
    "inclusions": [
        "Airport Pickup & Drop",
        "Private A/C Vehicle for Entire Tour",
        "3 Nights"
    ],
    "exclusions": [
        "Airfare (unless specifically included in the selected package)",
        "Pinda Daan, Shraddham & Tharpanam Charges",
        "Veni Pooja / Dampathi Pooja Charges",
        "Temple Special Darshan Tickets",
        "Lunch & Dinner",
        "Entry Tickets (if applicable)",
        "Personal Expenses",
        "Laundry & Telephone Charges",
        "Travel Insurance",
        "Tips & Porter Charges",
        "Mineral Water",
        "Anything Not Mentioned in the Package Includes"
    ],
    "policies": {
        "payment": "20% Advance at the time of booking. Balance before departure.",
        "cancellation": "Cancellations made 7+ days before: Full refund. Within 3-7 days: 50% refund. Less than 3 days: No refund."
    }
},
'1': {
 id: '1',
 title: 'Shirdi Flight Package From Madurai - Direct Flight - 2 Days',
 image: '/assets/megalaya1.avif',
 overview: {
 duration: '1 Nights / 2 Days',
 destination: 'Shirdi',
 activities: 'Museums, Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'Rs. 16500/-',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Arrival Madurai - Shirdi',
 description: 'Departure at 08.10 a.m. from Madurai Airport and arrival 02.10 p.m. at Shirdi Airport. Transfer to hotel. After refreshment evening having Dharshan (V.I.P) of Saibaba Temple and visit other places of Gurusthan, Dwarakamai, Sai Museum, Chavadi, Lendi Garden Maruthi Temple and Nandadeep. Night halt at Shirdi.'
 },
 {
 day: 'Day 2',
 title: 'Departure from Shirdi',
 description: 'Morning Dharshan / Kakada Aarti of Saibaba Temple. Free time for Shopping. Starting from Shirdi at 11.00 a.m and on the way visiting Khandoba Temple. Reaching Shirdi Airport by 12.00 p.m. and Boarding flight at Shirdi Airport by 02.30 p.m. and reaching Madurai at 07.30 pm.'
 }
 ],
 inclusions: [
 'Hotel',
 'Transportation by A/C Bus/Cab.',
 'One night stay at Shirdi in A/C room.',
 'Buffet Breakfast or Fixed Menu',
 'All sightseeing and excursion as per the itinerary.',
 'Everybody must bring Original ID Proof at the time of travel.',
 'English, Hindi and Tamil Guide for entire trip.',
 'Special darshan will be arranged (subject to availability)',
 'Please be at Airport 2 hours before the departure Time.'
 ],
 exclusions: [
 'Food, Port Rages, Tips, Phone Call from Rooms, Laundry, Insurance, Personal Expenses, Mineral water etc., and those not included “Inclusions” Head.'
 ],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '2': {
 id: '2',
 title: 'Shirdi Flight Packages From Chennai - Train - Flight 3 Night - 4 Days',
 image: '/assets/generated/shirdi_train_countryside.png',
 overview: {
 duration: '3 Nights / 4 Days',
 destination: 'Pune, Shirdi, Shani Shingnapur',
 activities: 'Museums, Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'Rs. 10500/-',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Chennai - Mumbai',
 description: 'Departure from Chennai Central Railway station - Train No.11028 by Mumbai mail at 10:50 pm'
 },
 {
 day: 'Day 2',
 title: 'Pune - Shirdi',
 description: 'Reaching Pune Railway station.at 11.30 pm Bus/Cab will start at Pune railway station by 11.45 pm and reaching Shirdi at 05.00 am'
 },
 {
 day: 'Day 3',
 title: 'Shirdi',
 description: 'Refreshment at hotel for 2 hours. Morning darshan of Saibaba Temple and other places of Gurusthan, Dwarakamai, Sai Museum, Chavadi, Lendi Garden. Night Halt at Shirdi'
 },
 {
 day: 'Day 4',
 title: 'Shani Singnapur - Drop',
 description: 'Morning darshan / Kakada Aarti of Saibaba Temple. Starting from Shirdi at 9.00 am and on the way visiting Shanisignapoor, Renuka Devi and Maha Ganapathi Temple. Reaching Pune Airport by 9.00 pm. Boarding Flight at Pune Airport by 11.00 pm and reaching Chennai at 12.45 am'
 }
 ],
 inclusions: [
 'Hotel',
 'Transportation by Non A/C bus/cab.',
 'One night stay at Shirdi in Non A/C room.',
 'Buffet Breakfast or Fixed Menu',
 'All sightseeing and excursion as per the itinerary.',
 'Everyone must bring Original ID Proof at the time of travel.',
 'English, Hindi and Tamil Guide for entire trip.',
 'Special darshan will be arranged (subject to availability)',
 'Avail this Package only with minimum of 5 - 6 Persons.',
 'Please be at Airport 2 hours before the Depature time.'
 ],
 exclusions: [
 'Food, Port Rages, Tips, Phone Call from Rooms, Laundry, Insurance, Personal Expenses, Mineral water etc., and those not included “Inclusions” Head.'
 ],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '3': {
 id: '3',
 title: 'Shirdi Flight Package From Chennai - One Day',
 image: '/assets/generated/shirdi_flight_sky.png',
 overview: {
 duration: '1 Day',
 destination: 'Shirdi',
 activities: 'Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'Rs. 10500/-',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Chennai - Shirdi',
 description: 'Departure at 4.00/5.15 am from Chennai Airport. Arrival 6.50 am at Pune Airport. Cab will start at Pune airport by 07.00 am and reaching Shirdi at 12.00 pm Having V.I.P darshan (Subject to Availability) of Saibaba Temple and visit other places of Gurusthan, Dwarakamai, Museum, Chavadi & Lendi Garden.\nStarts from Shirdi at 4.00 pm on the way visiting Maha Ganapathy Temple (Time Permits). Reaching Pune Airport at 9.00 pm Boarding Flight at Pune Airport by 11.00 pm and reaching Chennai at 12.45 am.'
 }
 ],
 inclusions: [
 'Transportation by A/C cab.',
 'Everybody must bring Original ID Proof at the time of travel.',
 'Special darshan will be arranged (subject to availability)',
 'Please be at Airport 2 hours before the departure time.',
 'Avail this Package only with minimum of 5 - 6 Persons.',
 'Special Fair will be applicable minimum 45 days prior to the departure.',
 'Booking should be done with 100% Payment (No cancellation & no Refunds)',
 'This budget package designed based on lowest Air fair and non peak days'
 ],
 exclusions: [
 'Food, Port Rages, Tips, Phone Call from Rooms, Laundry, Insurance, Personal Expenses, Mineral water etc., and those not included “Inclusions” Head.'
 ],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '4': {
 id: '4',
 title: 'Shirdi Flight Package Via Pune From Chennai - 2 Days',
 image: '/assets/generated/shaniwar_wada_pune.png',
 overview: {
 duration: '1 Nights / 2 Days',
 destination: 'Pune, Shirdi, Shani Shingnapur',
 activities: 'Museums, Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'Rs. 12500/-',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Chennai - Shirdi',
 description: 'Departure at 5.15 am from Chennai Airport. Arrival 6.50 am at Pune Airport. Bus/Cab will start at Pune airport by 07.00 am and reaching Shirdi at 01.00 pm. Next 3 hours refreshment at Hotel. Evening darshan of Saibaba Temple and visit other places of Gurusthan, Dwarakamai, Sai Museum, Chavadi, Lendi Garden. Night halt at Shirdi.'
 },
 {
 day: 'Day 2',
 title: 'Shani Singnapur - Pune - Drop',
 description: 'Morning dharshan / Kakada Aarti of Saibaba Temple. Starting from Shirdi at 9.00 am and on the way visiting Shanisignapoor, Renuka Devi and Maha Ganapathi Temple. Reaching Pune Airport by 9.00 pm Boarding flight at Pune Airport by 11.00 pm and reaching Chennai at 12.45 am.'
 }
 ],
 inclusions: [
 'Hotel',
 'Transportation by A/C Bus/Cab.',
 'One night stay at Shirdi in A/C room.',
 'Buffet Breakfast or Fixed Menu',
 'All sightseeing and excursion as per the itinerary.',
 'Everybody must bring Original ID Proof at the time of travel.',
 'English, Hindi and Tamil Guide for entire trip.',
 'Special darshan will be arranged (subject to availability)',
 'Please be at Airport 2 hours before the departure Time.'
 ],
 exclusions: [
 'Food, Port Rages, Tips, Phone Call from Rooms, Laundry, Insurance, Personal Expenses, Mineral water etc., and those not included “Inclusions” Head.'
 ],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '5': {
 id: '5',
 title: 'Shirdi Train Package From Chennai - 5 Night - 6 Days',
 image: '/assets/generated/shani_shingnapur.png',
 overview: {
 duration: '5 Nights / 6 Days',
 destination: 'Pune, Shirdi, Ganganapur, Shani Shingnapur',
 activities: 'Museums, Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'Rs. 5500/-',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Chennai - Mumbai',
 description: 'Departure from Chennai Central Railway station - Train No.11028 by Mumbai mail at 10.50 PM.'
 },
 {
 day: 'Day 2',
 title: 'Pune - Devgut',
 description: 'Reaching Pune Railway station. Drive to Devgut (Dattatreyar)'
 },
 {
 day: 'Day 3',
 title: 'Devgut - Shirdi',
 description: 'Reaching Devgut at early morning 4.00 am After refreshment having the dharshan of Dattatreyar temple, Shanisingnapur and Renukadevi Temple. And drive to Shirdi. And refreshment at hotel. Evening 4.00pm dharshan of Sai Baba and visit the places of Gurusthan, Museum and Lendi Garden. Night halt at Shirdi.'
 },
 {
 day: 'Day 4',
 title: 'Shirdi - Pune',
 description: 'Morning Kakkad Aarti/Dharshan visit Dwarakamai and Chavadi. Starting from shirdi at 2.00pm and drive to Pune Railway station and on the way visit Maha Ganapathy Temple. Reaching Pune Railway station at night 11.00 pm.'
 },
 {
 day: 'Day 5',
 title: 'Departure from Pune',
 description: 'Departure from Pune Railway Station At 3.30 am'
 },
 {
 day: 'Day 6',
 title: 'Chennai',
 description: 'Arrival at Chennai central Railway station at 5.00 am.'
 }
 ],
 inclusions: [
 'Hotel',
 'Transportation by Non A/C bus as per seat in coach basis.',
 'One night stay at Shirdi in Non A/C room.',
 'Buffet Breakfast or Fixed Menu',
 'All sight seeing and excursion as per the itinerary.',
 'Senior citizen must bring Original ID Proof at the time of travel.',
 'English, Hindi and Tamil Guide for entire trip.',
 'Special darshan will be arranged(subject to availability)'
 ],
 exclusions: [
 'Food, Port Rages, Tips, Phone Call from Rooms, Laundry, Insurance, Personal Expenses, Mineral water etc., and those not included “Inclusions” Head.'
 ],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '6': {
 id: '6',
 title: 'Shirdi Train Package From Chennai 7 Days',
 image: '/assets/generated/sai_baba_idol.png',
 overview: {
 duration: '6 Nights / 7 Days',
 destination: 'Pune, Shirdi, Ganganapur',
 activities: 'Museums, Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'Rs. 7500/-',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Chennai',
 description: 'Departure from Chennai Central Railway station by train No.11028 at 10:50 PM.'
 },
 {
 day: 'Day 2',
 title: 'Pune - Devgut',
 description: 'Reach Pune Railway Staion. Drive to Devgut.'
 },
 {
 day: 'Day 3',
 title: 'Devgut - Shirdi',
 description: 'Reaching devgut at early morning 4.00 am After refreshment having the dharshan of Dattatreyar Temple, Shanisingnapur and Renukadevi temple. And drive to Shirdi. Refreshment at Hotel. Evening 4.00p.m dharshan of SaiBaba and visiting Gurusthan, Museum and Lendi Garden. Night halt at Shirdi.'
 },
 {
 day: 'Day 4',
 title: 'Shirdi - Pune',
 description: 'Morning Kakkad Aarti /Dharshan and visit Dwarakamai and Chavadi. Starting from shirdi at 2.00 pm and drive to Pune and on the way visiting Mahaganapathy Temple. Reaching Pune railway station at 11.00 pm'
 },
 {
 day: 'Day 5',
 title: 'Pune - Mantralayam',
 description: 'Departure from Pune Railway station at 03.30 am. Reaching Mantralayam at 03.00 pm Free time of religious activities. Night halt at Mantralayam.'
 },
 {
 day: 'Day 6',
 title: 'Mantralayam - Chennai',
 description: 'Morning dharshan of Ragavendra Temple. Evening 3.30 pm train from Mantralayam by Chennai Mail.'
 },
 {
 day: 'Day 7',
 title: 'Chennai - Drop',
 description: 'Reaching Chennai central Railway Station at 5.00 am'
 }
 ],
 inclusions: [
 'Hotel',
 'Transportation by Non A/C bus as per seat in coach basis.',
 'One night stay at Shirdi and One night in Manthralayam in Non A/C room.',
 'Buffet Breakfast or Fixed Menu',
 'All sightseeing and excursion as per the itinerary.',
 'Senior citizen must bring Original ID Proof at the time of travel.',
 'English, Hindi and Tamil Guide for entire trip.',
 'Special darshan will be arranged(subject to availability)'
 ],
 exclusions: [
 'Food, Port Rages, Tips, Phone Call from Rooms, Laundry, Insurance, Personal Expenses, Mineral water etc., and those not included “Inclusions” head.'
 ],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '7': {
 id: '7',
 title: 'Shirdi And Pandaripur Train Package From Chennai 8 Days',
 image: '/assets/generated/pandharpur_wari.png',
 overview: {
 duration: '7 Nights / 8 Days',
 destination: 'Pune, Shirdi, Pandharpur',
 activities: 'Museums, Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'Rs. 8500/-',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Chennai - Mumbai',
 description: 'Departure from Chennai Central Railway station by Train No.11028 by Mumbai mail at 10.50 PM'
 },
 {
 day: 'Day 2',
 title: 'Pune - Devgut',
 description: 'Reach Pune Railway Station. Drive to Devgut.'
 },
 {
 day: 'Day 3',
 title: 'Devgut - Shirdi',
 description: 'Reaching Devgut at early morning 4.00 am. After refreshment having the dharshan of Dattatreyar Temple, Shanisignapur and Renukadevi temple. And drive to Shirdi. Refreshment at hotel. Evening 4.00 p.m dharshan of Saibaba and visit Gurusthan, Museum and Lendi Garden. Night halt at Shirdi.'
 },
 {
 day: 'Day 4',
 title: 'Shirdi - Pune',
 description: 'Morning Kakkad Aarti/Dharshan and visit Dwarakamai and Chavadi. Starting from Shirdi at 2.00 pm and drive to Pune and on the way visit of Maha Ganapathy Temple. Reaching Pune Railway Station at 11.00 pm'
 },
 {
 day: 'Day 5',
 title: 'Pune - Pandharpur',
 description: 'Departure to Pune Railway at 3.30 am Reaching Pandharpur at 11.00 am Having dharshan of Lord Pandurangar. Visit Kaikadi Maharaj math. Night halt at Pandharpur.'
 },
 {
 day: 'Day 6',
 title: 'Akkalkot - Mantralayam',
 description: 'Morning drive to Akkalkot, Dharshan of akkalkot Maharaj, and Chiteeshwarar Temple. Evening going to Mantralayam. Night halt at Mantralayam.'
 },
 {
 day: 'Day 7',
 title: 'Mantralayam - Chennai',
 description: 'Morning free time of religious activities. Dharshan of Ragavendra Swami. Evening 3.30 pm train from Mantralayam by Chennai mail.'
 },
 {
 day: 'Day 8',
 title: 'Chennai',
 description: 'Reaching Chennai central Railway Station at 5.00 am.'
 }
 ],
 inclusions: [
 'Hotel',
 'Transportation by Non A/C bus as per seat in coach basis.',
 'One night stay at Shirdi, one night in Manthralayam and one night in Pandaripur in Non A/C room.',
 'Buffet Breakfast or Fixed Menu',
 'All sightseeing and excursion as per the itinerary.',
 'Senior citizen must bring Original ID Proof at the time of travel.',
 'English, Hindi and Tamil Guide for entire trip.',
 'Special darshan will be arranged(subject to availability)'
 ],
 exclusions: [
 'Food, Port Rages, Tips, Phone Call From Rooms, Laundry, Insurance, Personal Expenses, Mineral water etc., And those not included “Inclusions” Head.'
 ],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '8': {
 id: '8',
 title: 'Shirdi And Mumbai Package From Chennai - 2 Days',
 image: '/assets/generated/gateway_of_india.png',
 overview: {
 duration: '1 Nights / 2 Days',
 destination: 'Mumbai, Shirdi',
 activities: 'Museums, Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'Rs. 14500/-',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Chennai - Mumbai - Shirdi',
 description: 'Departure from Chennai Airport at 5.20 am Arrival 7.05 am at Mumbai Airport. Bus/Cab will start at Mumbai airport by 07.30 am and on the way visiting Siddhi Vinayagar and Mahalakshmi Temple. Reaching Shirdi at 6.00 pm Evening darshan of Saibaba Temple and other places of Gurusthan, Dwarakamai, Museum, Chavadi, Lendi Garden and night halt at Shirdi.'
 },
 {
 day: 'Day 2',
 title: 'Shirdi - Chennai',
 description: 'Morning dharshan/Kakada Aarti of Saibaba Temple. Starting from Shirdi at 11.00 am and on the way visiting Shanisignapoor and Maha Ganapathy Temple. Reaching Pune Airport by 9.00 pm Boarding flight Pune Airport by 11.00 pm and reaching Chennai at 12.45 am'
 }
 ],
 inclusions: [
 'Transportation by A/C Bus/Cab.',
 'One night stay at Shirdi in A/C room.',
 'Buffet Breakfast or Fixed Menu',
 'All sightseeing and excursion as per the itinerary.',
 'Everybody must bring Original ID Proof at the time of travel.',
 'English, Hindi and Tamil Guide for entire trip.',
 'Special darshan will be arranged (subject to availability)'
 ],
 exclusions: [
 'Food, Port Rages, Tips, Phone Call from Rooms, Laundry, Insurance, Personal Expenses, Mineral water etc., and those not included “Inclusions” Head.'
 ],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '9': {
 id: '9',
 title: 'Shirdi Flight Package From Chennai 3 Days',
 image: '/assets/generated/shirdi_aerial.png',
 overview: {
 duration: '2 Nights / 3 Days',
 destination: 'Nashik, Shirdi, Trimbakeshwar, Shani Shingnapur',
 activities: 'Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'Rs. 16500/-',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Chennai - Shirdi',
 description: 'Departure at 05.15 am from Chennai Airport. Arrival 06.50 am at Pune Airport. Bus/Cab will start at Pune airport by 07.00 am and reaching Shirdi at 01.00 pm. Next 3 hours refreshment at Hotel. Evening Dharshan(V.I.P) of Saibaba Temple and visit other places of Gurusthan, Dwarakamai, Sai Museum, Chavadi, Lendi Garden. Night Halt at Shirdi.'
 },
 {
 day: 'Day 2',
 title: 'Shirdi - Nashik',
 description: 'Starting at Shirdi by 09.00 a.m drive to Nasik and having the Dharshan of Triyambakeshwar Temple (One of the Jyothirlingam). Visit the places of Panchavati, Kapaleshwar temple, Kalaram & Goraram Temple and Sita Guha. Evening return to Shirdi and night halt.'
 },
 {
 day: 'Day 3',
 title: 'Shirdi - Pune - Chennai',
 description: 'Morning darshan /Kakada Aarti of Saibaba Temple. Starting at Shirdi by 9.00 am and on the way visiting Shanisignapoor, Renuka Devi and Maha Ganapathy Temple. Reaching Pune Airport by 09.00 pm Boarding Flight at Pune airport by 11.00 pm Reaching Chennai Airport at 12.45 Am.'
 }
 ],
 inclusions: [
 'Hotel',
 'Transportation by A/C Bus/Cab.',
 'Two night stay at Shirdi in A/C room.',
 'Buffet Breakfast or Fixed Menu',
 'All sightseeing and excursion as per the itinerary.',
 'Everyone must bring Original ID Proof at the time of travel.',
 'English, Hindi and Tamil Guide for entire trip.',
 'Special darshan will be arranged (subject to availability)',
 'Please be at Airport 2 hours before the departure Time.'
 ],
 exclusions: [
 'Food, Port Rages, Tips, Phone Call from Rooms, Laundry, Insurance, Personal Expenses, Mineral water etc., and those not included “Inclusions” Head.'
 ],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '10': {
 id: '10',
 title: 'Shirdi And Pandaripur Flight Package From Chennai - 3 Days',
 image: '/assets/generated/vitthal_idol.png',
 overview: {
 duration: '2 Nights / 3 Days',
 destination: 'Pune, Shirdi, Pandharpur, Shani Shingnapur',
 activities: 'Museums, Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'Rs. 16500/-',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Chennai - Shirdi',
 description: 'Departure from Chennai Airport at 05.15 am Arrival 6.50 am at Pune Airport. Bus/Cab will start at Pune Airport by 7.00 am. Reaching Shirdi at 1.00 pm Next 3 hours refreshment at hotel. Evening Dharshan(V.I.P) of Saibaba Temple and visit other places of Gurusthan, Chavadi, Museum and Lendi Garden. Night halt at Shirdi.'
 },
 {
 day: 'Day 2',
 title: 'Pandharpur',
 description: 'Morning Dharshan/Kakkada Aarthi of Saibaba Temple. Starting at Shirdi 08.00 a.m and drive to Pandharpur on the way visit Shanisignapoor and Renuka Devi Temple. Reaching Pandharpur at 05.00 p.m. Evening Dharshan of Pandurangar Temple and Vitthal Rukmini Temple. Night halt at Pandharpur.'
 },
 {
 day: 'Day 3',
 title: 'Pandharpur - Chennai',
 description: 'Morning having the Dharshan of Lord Pandurangar. Free time of religious activities.Cab will start from Pandharpur at 09.00 a.m.on the way visiting Chinthamani Ganapathy Temple. Reaching Pune Airport by 09.00 p.m. Boarding Flight at Pune airport by 11.00 p.m. Reaching Chennai Airport at 12.45 a.m.'
 }
 ],
 inclusions: [
 'Hotel',
 'Transportation by A/C Bus/Cab.',
 'One night stay at Shirdi & One night at Pandaripur in A/C room.',
 'Buffet Breakfast or Fixed Menu',
 'All sightseeing and excursion as per the itinerary.',
 'Everyone must bring Original ID Proof at the time of travel.',
 'English, Hindi and Tamil Guide for entire trip.',
 'Special darshan will be arranged (subject to availability)',
 'Please be at Airport 2 hours before the departure Time.'
 ],
 exclusions: [
 'Food, Port Rages, Tips, Phone Call from Rooms, Laundry, Insurance, Personal Expenses, Mineral water etc., and those not included “Inclusions” Head.'
 ],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '11': {
 id: '11',
 title: 'Shirdi - Nashik - Ajanta - Ellora Package From Chennai 4 Days',
 image: '/assets/generated/ajanta_caves.png',
 overview: {
 duration: '3 Nights / 4 Days',
 destination: 'Nashik, Shirdi, Aurangabad, Ellora Caves, Ajanta Caves',
 activities: 'Caving, Museums, Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage, Monuments & Historical Places'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'Rs. 18500/-',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Chennai - Shirdi',
 description: 'Departure at 5.15 am at Chennai Airport. Arrival 6.50 am at Pune Airport. Bus/Cab will start at Pune Airport by 7.00 am and on the way visiting Shanisignapoor and reaching Shirdi at 4.00 pm Refreshment at hotel for 1 hour. Having the darshan of Saibaba and visit the places of Gurusthan, Dwarakamai, Chavadi, Sai Museum, Lendi Garden. Night halt at Shirdi.'
 },
 {
 day: 'Day 2',
 title: 'Nashik',
 description: 'Starting at Shirdi by 9.00 am drive to Nasik and having the darshan of Triyambakeshwar Temple (One of the Jyothirlingam). Visit the places of Panchavati, Kapaleshwar temple, Kalaram & Goraram Temple and Sita Guha. Evening return to Shirdi and night halt.'
 },
 {
 day: 'Day 3',
 title: 'Aurangabad - Ajanta',
 description: 'Morning dharshan / Kakada Aarti of Saibaba Temple and drive to Aurangabad. Visit the place of Ajanta Caves. Return and night halt at Aurangabad.'
 },
 {
 day: 'Day 4',
 title: 'Ellora - Pune - Chennai',
 description: 'Starting at Aurangabad by 8.00 am and drive to Ellora Caves. After visit the caves and visit other places of Mini Tajmahal and Grineshwar Temple (one of the Jyothirlingam) drive to Pune. Reaching Pune Airport by 8.00 pm Boarding flight at Pune Airport 11.00 pm Reaching Chennai Airport at 12.45 am.'
 }
 ],
 inclusions: [
 'Hotel',
 'Transportation by A/C Bus/Cab.',
 'Two night stay at Shirdi in A/C room.',
 'One night stay at Aurangabad in A/c room.',
 'Buffet Breakfast or Fixed Menu',
 'All sightseeing and excursion as per the itinerary.',
 'Everyone must bring Original ID Proof at the time of travel.',
 'English, Hindi and Tamil Guide for entire trip.',
 'Special darshan will be arranged (subject to availability)',
 'Ajanta Cave holiday on Monday and Ellora Cave holiday on Tuesday.'
 ],
 exclusions: [
 'Food, Port Rages, Tips, Phone Call from Rooms, Laundry, Insurance, Personal Expenses, Mineral water etc., and those not included “Inclusions” Head.'
 ],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '12': {
 id: '12',
 title: 'Shirdi - 2 Jyotirlinga Package From Chennai - 3 Days',
 image: '/assets/generated/trimbakeshwar_temple.png',
 overview: {
 duration: '2 Nights / 3 Days',
 destination: 'Pune, Shirdi, Trimbakeshwar, Aurangabad, Ellora Caves',
 activities: 'Museums, Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'Rs. 16500/-',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Chennai - Shirdi',
 description: 'Departure from Chennai Airport at 05.00 a.m. Arrival 06.40 a.m. at Pune Airport. Cab will start from Pune airport by 07.00 a.m. and proceed to visit Maha Ganapati Temple and Shani Shingnapur Temple. Reaching Shirdi at 04.00 p.m. Transfer to hotel. After refreshment Having darshan (V.I.P) of Saibaba Temple and other places of Gurusthan, Dwarakamai, Museum, Chavadi and Lendi Garden. Night halt at Shirdi.'
 },
 {
 day: 'Day 2',
 title: 'Nashik',
 description: 'Morning after breakfast proceed to Nasik. Having the Dharshan of Trimbakeshwar Temple (One of the Jyotirlinga). Visit the places of Panchavati, Kapaleshwar temple, Kalaram & Goraram Temple and Sita Guha. Evening return and night halt at Shirdi.'
 },
 {
 day: 'Day 3',
 title: 'Pune - Chennai',
 description: 'Morning after breakfast proceed to visit Ellora Caves. And having darshan of Grineshwar Temple (one of the Jyotirlinga). After darshan proceed to Pune. Reaching Pune Airport by 10.00 p.m. Boarding flight at Pune Airport by 00.10 a.m. Reaching Chennai Airport at 01.20 a.m.'
 }
 ],
 inclusions: [
 'Hotel',
 'Transportation by A/C Bus/Cab.',
 'Two nights stay at Shirdi in A/C room.',
 'Buffet Breakfast or Fixed Menu',
 'All sightseeing and excursion as per the itinerary.',
 'Everyone must bring Original ID Proof at the time of travel.',
 'English, Hindi and Tamil Guide for entire trip.',
 'Special darshan will be arranged (subject to availability)'
 ],
 exclusions: [
 'Food, Port Rages, Tips, Phone Call from Rooms, Laundry, Insurance, Personal Expenses, Mineral water etc., and those not included “Inclusions” Head.'
 ],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '13': {
 id: '13',
 title: 'Shirdi - Jyotirlinga Package From Chennai 3 Night - 4 Days',
 image: '/assets/generated/jyotirlinga_ellora_pkg.png',
 overview: {
 duration: '3 Nights / 4 Days',
 destination: 'Pune, Shirdi, Trimbakeshwar, Aurangabad, Ellora Caves',
 activities: 'Caving, Museums, Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'Rs. 18500/-',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Chennai - Shirdi',
 description: 'Departure at 05.15 a.m at Chennai Airport. Arrival at 06.50 a.m. at Pune Airport. Cab will start at Pune Airport by 07.00 am and visit Bhimashankar (One of the Jyotirlingam) and drive to Shirdi. Reaching Shirdi at 06.00 p.m. Evening having Dharshan (V.I.P) of Saibaba Temple and visiting other places of Gurusthan, Dwarakamai, Chavadi, Sai Museum, Lendi Garden. Night halt at Shirdi.'
 },
 {
 day: 'Day 2',
 title: 'Nashik',
 description: 'Starting at Shirdi by 9.00 am drive to Nasik. Having the darshan of Thriyambakeshwar Temple (One of the Jyotirlingam). Visit the places of Panchavati, Kapaleshwar temple, Kalaram & Goraram Temple and Sita Guha. Evening return to Shirdi and night halt.'
 },
 {
 day: 'Day 3',
 title: 'Shirdi - Aurangabad',
 description: 'Morning having Dharshan / Kakada Aarti of Saibaba Temple. Starting at Shirdi by 09.00 a.m. and drive to Ellora Caves. After visit the caves and visit other places of Mini Tajmahal and Grineshwar Temple (one of the Jyotirlingam) night halt at Aurangabad.'
 },
 {
 day: 'Day 4',
 title: 'Aurangabad - Chennai',
 description: 'Morning starting from Aurangabad at 09.00 a.m. and drive to Shani Shingnapoor having Dharshan of Shani Bhagavan Temple. After that visit Maha Ganapati Temple at Ranjangaon (Ashtavinayak Temple) and proceed to Pune. Reaching Pune Airport by 09.00 p.m. Boarding flight at Pune Airport by 11.00 p.m.Reaching Chennai Airport at 00.50 a.m.'
 }
 ],
 inclusions: [
 'Transportation by A/C Bus/Cab.',
 'Three-night stay at Shirdi in A/C room.',
 'Buffet Breakfast or Fixed Menu',
 'All sightseeing and excursion as per the itinerary.',
 'Everyone must bring Original ID Proof at the time of travel.',
 'English, Hindi and Tamil Guide for entire trip.',
 'Special darshan will be arranged (subject to availability)'
 ],
 exclusions: [
 'Food, Port Rages, Tips, Phone Call from Rooms, Laundry, Insurance, Personal Expenses, Mineral water etc., and those not included “Inclusions” Head.'
 ],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '14': {
 id: '14',
 title: 'Shirdi And Lonavala Package From Chennai 2 Night - 3 Days',
 image: '/assets/generated/lonavala_pkg.png',
 overview: {
 duration: '2 Nights / 3 Days',
 destination: 'Lonavala, Shirdi, Shani Shingnapur',
 activities: 'Museums, Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'Rs. 16500/-',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Chennai - Shirdi',
 description: 'Departure at 5.15 am from Chennai Airport. Arrival 06.50 am at Pune Airport. Bus/Cab will start at Pune airport by 07.00 am and drive to Shirdi. Reaching Shirdi at 1.00 pm Evening darshan of Saibaba Temple and visit other places of Gurusthan, Dwarakamai, Sai Museum, Chavadi, Lendi Garden. Night halt at Shirdi.'
 },
 {
 day: 'Day 2',
 title: 'Lonavala',
 description: 'Morning dharshan / Kakada Aarti of Saibaba Temple. Starting at Shirdi by 10.00 am and drive to Lonavala on the way visiting Shanisignapoor and Maha Ganapathy Temple. Reaching 5.00 pm at Lonavala. Evening having sightseeing at Sunset Point. Night halt at Hotel in Lonavala.'
 },
 {
 day: 'Day 3',
 title: 'Lonavala - Chennai',
 description: 'Morning having sightseeing of Karla Caves, Celebrity Wax Museum, Lion Point, Bhaja Caves, Rajmachi Fort, Tiger Leap and Shooting Point. Starting at Lonavala by 06.00 pm Reaching Pune Airport by 09.00 pm Boarding flight at Pune Airport by 11.00 pm Reaching Chennai Airport at 12.45 am.'
 }
 ],
 inclusions: [
 'Hotel',
 'Sightseeing',
 'Transportation by A/C Bus/Cab.',
 'One night stay at Shirdi and One night at Lonavala in A/C room.',
 'Buffet Breakfast or Fixed Menu',
 'All sightseeing and excursion as per the itinerary.',
 'Everyone must bring Original ID Proof at the time of travel.',
 'English, Hindi and Tamil Guide for entire trip.',
 'Special darshan will be arranged (subject to availability)'
 ],
 exclusions: [
 'Food, Port Rages, Tips, Phone Call from Rooms, Laundry, Insurance, Personal Expenses, Mineral water etc., and those not included “Inclusions” Head.'
 ],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '15': {
 id: '15',
 title: 'Shirdi - Ajanta - Ellora Package From Chennai 2 Night - 3 Days',
 image: '/assets/shiridi/cards/Chennai to Shirdi, Ajanta & Ellora Flight Tour Package  3 Days  2 Nights.png',
 overview: {
 duration: '2 Nights / 3 Days',
 destination: 'Shirdi, Aurangabad, Ellora Caves, Ajanta Caves',
 activities: 'Caving, Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage, Monuments & Historical Places'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'Rs. 16500/-',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Chennai - Shirdi',
 description: 'Departure at 5.15 am at Chennai Airport. Arrival 6.50 am at Pune Airport. Bus/Cab will start at Pune Airport by 7.00 am and on the way visiting Shanisignapoor and reaching Shirdi at 4.00 pm Refreshment at hotel for 1 hour. Having the darshan of Saibaba and visit the places of Gurusthan, Dwarakamai, Chavadi, Sai Museum, Lendi Garden. Night halt at Shirdi.'
 },
 {
 day: 'Day 2',
 title: 'Ajanta Caves',
 description: 'Morning dharshan / Kakada Aarti of Saibaba Temple and drive to Aurangabad. Visit the place of Ajanta Caves. Return and night halt at Aurangabad.'
 },
 {
 day: 'Day 3',
 title: 'Ellora Caves - Pune - Chennai',
 description: 'Starting at Aurangabad by 8.00 am and drive to Ellora Caves. After visit the caves and visit other places of Mini Tajmahal and Grineshwar Temple (one of the Jyothirlingam) drive to Pune. Reaching Pune Airport by 8.00 pm Boarding flight at Pune Airport 11.00 pm Reaching Chennai Airport at 12.45 am'
 }
 ],
 inclusions: [
 'Hotel',
 'Transportation by A/C Bus/Cab.',
 'Two night stay at Shirdi in A/C room.',
 'One night stay at Aurangabad in A/c room.',
 'Buffet Breakfast or Fixed Menu',
 'All sightseeing and excursion as per the itinerary.',
 'Everyone must bring Original ID Proof at the time of travel.',
 'English, Hindi and Tamil Guide for entire trip.',
 'Special darshan will be arranged (subject to availability)',
 'Ajanta Cave holiday on Monday and Ellora Cave holiday on Tuesday.'
 ],
 exclusions: [
 'Food, Port Rages, Tips, Phone Call from Rooms, Laundry, Insurance, Personal Expenses, Mineral water etc., and those not included “Inclusions” Head.'
 ],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '16': {
 id: '16',
 title: 'Kasi Flight Package From Chennai 1 Night - 2 Days',
 image: '/assets/varanasi/cards/kasi1.png',
 overview: {
 duration: '1 Nights / 2 Days',
 destination: 'Varanasi',
 activities: 'Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'Rs. 18500/-',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Arrival Chennai - Varanasi',
 description: 'Departure from Chennai Airport at 07.05 a.m. Arrival Varanasi Airport at 08.30 a.m. Transfer to hotel. Having Dharshan of Lord Kasi Vishwanath, Kasi Visalakshi and Kasi Annapoorneswari Temples. Evening visit Ganga Aarti by boating on the way visiting Manikarneka Ghat and Harichandra Ghat . Having night Sayana Arati of Kasi Viswanath Temple. Night halt at Kasi.'
 },
 {
 day: 'Day 2',
 title: 'Departure from Varanasi',
 description: 'Morning holy bath in river Ganga and performing Tharpanam. Having Dharshan of Kala Bhairavar Temple. Free time religious activities and shopping.\nStarting from Varanasi at 02.00 p.m. and reaching at Varanasi Airport at 04.00 p.m.\nDeparture from Varanasi Airport at 06.15 p.m. and Reaching Chennai Airport at 12.00 a.m.'
 }
 ],
 inclusions: [
 'Hotel',
 'Transportation by A/C Bus/Cab.',
 'One night stay at Kasi in A/c room.',
 'Buffet Breakfast or Fixed Menu',
 'All sightseeing and excursion as per the itinerary.',
 'Everyone must bring Original ID Proof at the time of travel.',
 'English, Hindi and Tamil Guide for entire trip.',
 'Please be at Airport 2 hours before the departure Time.'
 ],
 exclusions: [
 'Food, Port Rages, Tips, Phone Call from Rooms, Laundry, Insurance, Personal Expenses, Mineral water etc., and those not included “Inclusions” Head.'
 ],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '17': {
 id: '17',
 title: 'Kasi Flight Package From Chennai 2 Night - 3 Days',
 image: '/assets/varanasi/cards/kasi2.png',
 overview: {
 duration: '2 Nights / 3 Days',
 destination: 'Varanasi',
 activities: 'Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'Rs. 23500/-',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Arrival Chennai - Varanasi',
 description: 'Departure from Chennai Airport at 07.05 a.m. Arrival Varanasi Airport at 08.45 a.m. Transfer to hotel. Evening visit Ganga Aarti by boating on the way visiting Manikarneka Ghat and Harichandra Ghat. Having night Sayana Arati of Kasi Viswanath Temple. Night halt at Kasi.'
 },
 {
 day: 'Day 2',
 title: 'Varanasi',
 description: 'Morning holy bath in river Ganga and performing Tharpanam.Having Dharshan of Lord Kasi Vishwanath, Kasi Visalakshi and Kasi Annapoorneswari Temples. Night halt at Kasi.'
 },
 {
 day: 'Day 3',
 title: 'Departure from Varanasi',
 description: 'Morning having Dharshan of Kala Bhairavar Temple. Free time religious activities and shopping. Starting from Varanasi at 02.00 p.m. and reaching at Airport at 04.00 p.m. Departure Varanasi Airport at 06.15 p.m. and Reaching Chennai Airport at 12.00 a.m.'
 }
 ],
 inclusions: [
 'Hotel',
 'Transportation by A/C Bus/Cab.',
 'Two nights stay at Kasi in A/c room.',
 'Buffet Breakfast or Fixed Menu',
 'All sightseeing and excursion as per the itinerary.',
 'Everyone must bring Original ID Proof at the time of travel.',
 'English, Hindi and Tamil Guide for entire trip.',
 'Please be at Airport 2 hours before the departure Time.'
 ],
 exclusions: [
 'Food, Port Rages, Tips, Phone Call from Rooms, Laundry, Insurance, Personal Expenses, Mineral water etc., and those not included “Inclusions” Head.'
 ],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '18': {
 id: '18',
 title: 'Kasi - Ayodhya Flight Package From Chennai 2 Night - 3 Days',
 image: '/assets/varanasi/cards/kasi3.png',
 overview: {
 duration: '2 Nights / 3 Days',
 destination: 'Varanasi, Ayodhya',
 activities: 'Museums, Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'Rs. 27500/-',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Arrival Chennai - Ayodhya',
 description: 'Departure from Chennai Airport at 09.10 a.m. Arrival Ayodhya Airport at 11.35 a.m. Transfer to hotel. Visit the birth place Lord Rama, Shri Ramjanma Bhoomi and Hanuman Garhi Temple. Evening visit Kanak Bhawan and Ramkatha Museum. Night halt at Ayodhya.'
 },
 {
 day: 'Day 2',
 title: 'Ayodhya - Varanasi',
 description: 'After Breakfast starting @ 10.00 a.m. from Ayodhya and proceed to Kasi. Transfer to hotel. After refreshment having Dharshan of Lord Kasi Vishwanath, Kasi Visalakshi and Kasi Annapoorneswari Temples. Evening visit Ganga Aarti by boating on the way visiting Manikarneka Ghat and Harichandra Ghat. Having night Sayana Arati of Kasi Viswanath Temple. Night halt at Kasi.'
 },
 {
 day: 'Day 3',
 title: 'Departure from Varanasi',
 description: 'Morning holy bath in river Ganga and performing Tharpanam and having darshan of Kala Bhairavar Temple. Free time religious activities and shopping. Starting from Varanasi at 04.00 p.m. Reaching at Varanasi Airport at 06.00 p.m. Departure from Varanasi Airport at 08.10 p.m. Reaching Chennai Airport at 10.30 p.m.'
 }
 ],
 inclusions: [
 'Hotel',
 'Transportation by A/C Bus/Cab.',
 'One night stay at Ayodhya in A/c room.',
 'One night stay at Varanasi in A/c room.',
 'Buffet Breakfast or Fixed Menu',
 'All sightseeing and excursion as per the itinerary.',
 'Everyone must bring Original ID Proof at the time of travel.',
 'English, Hindi and Tamil Guide for entire trip.',
 'Please be at Airport 2 hours before the departure Time.'
 ],
 exclusions: [
 'Food, Port Rages, Tips, Phone Call from Rooms, Laundry, Insurance, Personal Expenses, Mineral water etc., and those not included “Inclusions” Head.'
 ],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '19': {
 id: '19',
 title: 'Kasi - Gaya Flight Package From Chennai 4 Night - 5 Days',
 image: '/assets/varanasi/cards/kasi4.png',
 overview: {
 duration: '4 Nights / 5 Days',
 destination: 'Prayagraj, Varanasi, Gaya, Allahabad Fort',
 activities: 'Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'Rs. 34500/-',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Arrival Chennai - Varanasi',
 description: 'Departure from Chennai Airport at 07.05 a.m. Arrival Varanasi Airport at 08.30 a.m. Transfer to hotel. Having Dharshan of Lord Kasi Vishwanath, Kasi Visalakshi and Kasi Annapoorneswari Temples. Evening visit Ganga Aarti by boating on the way visiting Manikarneka Ghat and Harichandra Ghat. Having night Sayana Arati of Kasi Viswanath Temple. Night halt at Kasi.'
 },
 {
 day: 'Day 2',
 title: 'Gaya',
 description: 'Morning holy bath in river Ganga and performing Tharpanam. Free time shopping and religious activities. After Lunch proceed to Gaya at 02.00 p.m. and night halt at Gaya.'
 },
 {
 day: 'Day 3',
 title: 'Gaya',
 description: 'Early Morning perform the some rituals Srartham or Pinda dana for your ancestors (Dress Code: Ladies – Sarees & Gents – Dhoti ). Dharshan of Vishnu padam Temple and visit Vatavruksh. Afternoon drive to Kasi on the way visiting Buddha Gaya. Night halt in Kasi.'
 },
 {
 day: 'Day 4',
 title: 'Allahabad',
 description: 'Morning drive to Allahabad. Holy bath in Triveni sangam and performing Thambathi pooja / Veni Pooja in the meeting point of holy rivers of Ganga, Yamuna and Saraswathi. Having Dharshan of Sri Sayana Anjaneyar. Return and night halt at Kasi.'
 },
 {
 day: 'Day 5',
 title: 'Departure from Varanasi',
 description: 'Morning having Dharshan of Kala Bhairavar Temple. Free time religious activities and shopping. Starting from Varanasi at 02.00 p.m. and reaching at Varanasi Airport at 04.00 p.m. Departure from Varanasi Airport at 06.15 p.m. Reaching Chennai Airport at 12.00 a.m.'
 }
 ],
 inclusions: [
 'Hotel',
 'Transportation by A/C Bus/Cab.',
 'Three nights stay at Kasi and One night stay at Gaya in A/c room.',
 'Buffet Breakfast or Fixed Menu',
 'All sightseeing and excursion as per the itinerary.',
 'Everyone must bring Original ID Proof at the time of travel.',
 'English, Hindi and Tamil Guide for entire trip.',
 'Please be at Airport 2 hours before the departure Time.'
 ],
 exclusions: [
 'Food, Port Rages, Tips, Phone Call from Rooms, Laundry, Insurance, Personal Expenses, Mineral water etc., and those not included “Inclusions” Head.'
 ],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '20': {
 id: '20',
 title: 'Kasi - Gaya - Allahabad - Ayodhya Flight Package From Chennai 5 Night - 6 Days',
 image: '/assets/varanasi/cards/kasi5.png',
 overview: {
 duration: '5 Nights / 6 Days',
 destination: 'Prayagraj, Varanasi, Gaya, Ayodhya',
 activities: 'Boating, Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'Rs. 39500/-',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Arrival Chennai - Varanasi - Ayodhya',
 description: 'Departure from Chennai Airport at 07.05 a.m. Arrival Varanasi Airport at 08.30 a.m. and drive to Ayodhya. On arrival check in to Ayodhya Hotel, Proceed to visit the birth place of Lord Rama at Shri Ramjanma Bhoomi, Hanuman Garhi Temple. Night halt at Ayodhya'
 },
 {
 day: 'Day 2',
 title: 'Varanasi',
 description: 'Morning after breakfast transfer to Varanasi (Kasi). On arrival Varanasi check into Hotel. After lunch proceed to Having Dharshan of Lord Kasi Vishwanath, Kasi Visalakshi and Kasi Annapoorneswari Temples. Evening visit Ganga Aarti by boating on the way visiting Manikarneka Ghat and Harichandra Ghat. Having night Sayana Arati of Kasi Viswanath Temple. Night halt at Kasi.'
 },
 {
 day: 'Day 3',
 title: 'Gaya',
 description: 'Morning holy bath in river Ganga and performing Tharpanam. Free time shopping and religious activities. Drive to Gaya at 02.00p.m. and night halt at Buddha Gaya.'
 },
 {
 day: 'Day 4',
 title: 'Varanasi',
 description: 'Morning 07:00 a.m perform some rituals Srartham or Pinda dana for your ancestors. (Dress Code: Ladies – Sarees & Gents – Dhoti ). Dharshan of Vishnu padam Temple and visit Vatavruksh. Afternoon drive to Kasi on the way visiting Buddha Gaya. Night halt in Kasi.'
 },
 {
 day: 'Day 5',
 title: 'Allahabad',
 description: 'Morning drive to Allahabad. Holy bath in Triveni sangam and performing Thambathi pooja / Veni Pooja in the meeting point of holy rivers of Ganga, Yamuna and Saraswathi. Having darshan Sri Sayana Anjaneyar. Return and night halt at Kasi.'
 },
 {
 day: 'Day 6',
 title: 'Departure from Varanasi',
 description: 'Morning having Dharshan of Kala Bhairavar Temple. and free time for Shopping. Starting from Varanasi at 02.00 p.m. Reaching at Varanasi Airport at 04.00 p.m. Departure from Varanasi Airport at 06.15 p.m. Reaching Chennai Airport at 12.00 a.m.'
 }
 ],
 inclusions: [
 'Hotel',
 'Transportation by A/C Bus/Cab.',
 'Three nights stay at Kasi in A/C Dlx room',
 'One night stay at Ayodhya in A/C Dlx room',
 'One night stay at Gaya in A/C Dlx room',
 'Buffet Breakfast or Fixed Menu',
 'All sightseeing and excursion as per the itinerary.',
 'Everyone must bring Original ID Proof at the time of travel.',
 'English, Hindi and Tamil Guide for entire trip.',
 'Please be at Airport 2 hours before the departure Time.'
 ],
 exclusions: [
 'Food, Port Rages, Tips, Phone Call from Rooms, Laundry, Insurance, Personal Expenses, Mineral water etc., and those not included “Inclusions” Head.'
 ],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '21': {
 id: '21',
 title: 'Kasi Train Package From Chennai 7 Night - 8 Days',
 image: '/assets/varanasi/cards/kasi6.png',
 overview: {
 duration: '7 Nights / 8 Days',
 destination: 'Prayagraj, Varanasi, Gaya, Anand Bhavan',
 activities: 'Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'Rs. 14500/-',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Arrival Chennai - Varanasi',
 description: 'Departure from Chennai Central Railway Station by Train No: 12669, Ganga kaveri express at 5.30 pm'
 },
 {
 day: 'Day 2',
 title: 'Train Journey',
 description: 'Train Journey.'
 },
 {
 day: 'Day 3',
 title: 'Varanasi',
 description: 'Reach Varanasi Junction. Transfer to hotel. Morning holy bath in river Gangas. Having the darshan of world famous Kasi Vishwanath, Vishalakshi and Annapoorneshwari Temples. Evening visit Ganga Aarti Night halt at kasi.'
 },
 {
 day: 'Day 4',
 title: 'Allahabad',
 description: 'Morning drive to Allahabad. Holy bath in Triveni sangam and visit Anand bhavan and drive to kasi. Night halt at Kasi.'
 },
 {
 day: 'Day 5',
 title: 'Gaya',
 description: 'Morning darshan of Kalabhairavar, Kowdi matha Temples. Evening drive to Gaya. Night halt at Gaya.'
 },
 {
 day: 'Day 6',
 title: 'Gaya',
 description: 'Morning perform some rituals Srardham or Pindandana for your ancestors. Night Halt at Gaya.'
 },
 {
 day: 'Day 7',
 title: 'Gaya - Chennai',
 description: 'Morning 6.00 am train from Gaya by Chennai express.'
 },
 {
 day: 'Day 8',
 title: 'Chennai',
 description: 'Reach Chennai Egmore railway Station at 8.45 pm'
 }
 ],
 inclusions: [
 'Hotel',
 'Transportation by Non A/C bus as per seat in coach basis.',
 'All sightseeing and excursion as per the itinerary.',
 'Senior citizen must bring Original ID Proof at the time of travel.',
 'English, Hindi and Tamil Guide for entire trip.'
 ],
 exclusions: [
 'Food, Port Rages, Tips, Phone Call from Rooms, Laundry, Insurance, Personal Expenses, Mineral water etc., and those not included “Inclusions” Head.'
 ],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '22': {
 id: '22',
 title: 'Kasi Flight Package From Madurai 3 Days',
 image: '/assets/manipur1.avif',
 overview: {
 duration: '2 Nights / 3 Days',
 destination: 'Varanasi',
 activities: 'Boating, Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'Rs. 23500/-',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Arrival Madurai - Varanasi',
 description: 'Departure from Madurai Airport at 11.00 a.m. Arrival Varanasi Airport at 05.30 p.m. Transfer to hotel. Evening visit Ganga Aarti by boating on the way visiting Manikarneka Ghat and Hari Chandra Ghat. Having night Sayana Arati of Kasi Viswanath Temple. Night halt at Kasi.'
 },
 {
 day: 'Day 2',
 title: 'Varanasi',
 description: 'Morning holy bath in river Ganga and performing Tharpanam.Having Dharshan of Lord Kasi Vishwanath, Kasi Visalakshi and Kasi Annapoorneswari Temples. Night halt at Kasi.'
 },
 {
 day: 'Day 3',
 title: 'Departure from Varanasi',
 description: 'Morning having Dharshan of Kala Bhairavar Temple. Free time religious activities and shopping. Starting from Varanasi at 11.00 a.m. and reaching at Airport at 01.00 p.m. Departure Varanasi Airport at 02.55 p.m. and Reaching Madurai Airport at 08.45 p.m.'
 }
 ],
 inclusions: [
 'Hotel',
 'Transportation by A/C Bus/Cab.',
 'Two nights stay at Kasi in A/c room.',
 'Buffet Breakfast or Fixed Menu',
 'All sightseeing and excursion as per the itinerary.',
 'Everyone must bring Original ID Proof at the time of travel.',
 'English, Hindi and Tamil Guide for entire trip.',
 'Please be at Airport 2 hours before the departure Time.'
 ],
 exclusions: [
 'Food, Port Rages, Tips, Phone Call from Rooms, Laundry, Insurance, Personal Expenses, Mineral water etc., and those not included “Inclusions” Head.'
 ],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '23': {
 id: '23',
 title: 'Kasi - Ayodhya Flight Package From Madurai 2 Night - 3 Days',
 image: '/assets/megalaya1.avif',
 overview: {
 duration: '2 Nights / 3 Days',
 destination: 'Varanasi, Ayodhya',
 activities: 'Museums, Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'Rs. 27500/-',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Arrival Madurai - Ayodhya',
 description: 'Departure from Madurai Airport at 11.00 a.m. Arrival Ayodhya Airport at 05.00 p.m. Transfer to hotel. Visit the birth place Lord Rama, Shri Ramjanma Bhoomi and Hanuman Garhi Temple. Evening visit Kanak Bhawan and Ramkatha Museum. Night halt at Ayodhya.'
 },
 {
 day: 'Day 2',
 title: 'Ayodhya - Varanasi',
 description: 'After Breakfast starting @ 10.00 a.m. from Ayodhya and proceed to Kasi. Transfer to hotel. After refreshment having Dharshan of Lord Kasi Vishwanath, Kasi Visalakshi and Kasi Annapoorneswari Temples. Evening visit Ganga Aarti by boating on the way visiting Manikarneka Ghat and Harichandra Ghat. Having night Sayana Arati of Kasi Viswanath Temple. Night halt at Kasi.'
 },
 {
 day: 'Day 3',
 title: 'Departure from Varanasi',
 description: 'Morning holy bath in river Ganga and performing Tharpanam and having darshan of Kala Bhairavar Temple. Free time religious activities and shopping. Starting from Varanasi at 11.00 a.m. Reaching at Varanasi Airport at 01.00 p.m. Departure from Varanasi Airport at 02.25 p.m. Reaching Madurai Airport at 08.45 p.m.'
 }
 ],
 inclusions: [
 'Hotel',
 'Transportation by A/C Bus/Cab.',
 'One night stay at Ayodhya in A/c room.',
 'One night stay at Varanasi in A/c room.',
 'Buffet Breakfast or Fixed Menu',
 'All sightseeing and excursion as per the itinerary.',
 'Everyone must bring Original ID Proof at the time of travel.',
 'English, Hindi and Tamil Guide for entire trip.',
 'Please be at Airport 2 hours before the departure Time.'
 ],
 exclusions: [
 'Food, Port Rages, Tips, Phone Call from Rooms, Laundry, Insurance, Personal Expenses, Mineral water etc., and those not included “Inclusions” Head.'
 ],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '24': {
 id: '24',
 title: 'Kasi - Gaya Flight Package From Madurai 5 Days',
 image: '/assets/Tamil Nadu1.avif',
 overview: {
 duration: '4 Nights / 5 Days',
 destination: 'Prayagraj, Varanasi, Gaya',
 activities: 'Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'Rs. 34500/-',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Arrival Madurai - Varanasi',
 description: 'Departure from Madurai Airport at 11.00 a.m. Arrival Varanasi Airport at 05.30 p.m. Transfer to hotel. Having Dharshan of Lord Kasi Vishwanath, Kasi Visalakshi and Kasi Annapoorneswari Temples. Evening visit Ganga Aarti by boating on the way visiting Manikarneka Ghat and Harichandra Ghat. Having night Sayana Arati of Kasi Viswanath Temple. Night halt at Kasi.'
 },
 {
 day: 'Day 2',
 title: 'Gaya',
 description: 'Morning holy bath in river Ganga and performing Tharpanam. Free time shopping and religious activities. After Lunch proceed to Gaya at 04.00 p.m. and night halt at Gaya.'
 },
 {
 day: 'Day 3',
 title: 'Gaya',
 description: 'Early Morning perform the some rituals Srartham or Pinda dana for your ancestors (Dress Code: Ladies – Sarees & Gents – Dhoti ). Dharshan of Vishnu padam Temple and visit Vatavruksh. Afternoon drive to Kasi on the way visiting Buddha Gaya. Night halt in Kasi.'
 },
 {
 day: 'Day 4',
 title: 'Allahabad',
 description: 'Morning drive to Allahabad. Holy bath in Triveni sangam and performing Thambathi pooja / Veni Pooja in the meeting point of holy rivers of Ganga, Yamuna and Saraswathi. Having Dharshan of Sri Sayana Anjaneyar. Return and night halt at Kasi.'
 },
 {
 day: 'Day 5',
 title: 'Departure from Varanasi',
 description: 'Morning having Dharshan of Kala Bhairavar Temple. Free time religious activities and shopping. Starting from Varanasi at 11.00 a.m. and reaching at Varanasi Airport at 01.00 p.m. Departure from Varanasi Airport at 02.55 p.m. Reaching Madurai Airport at 08.45 p.m.'
 }
 ],
 inclusions: [
 'Hotel',
 'Transportation by A/C Bus/Cab.',
 'Three nights stay at Kasi and One night stay at Gaya in A/c room.',
 'Buffet Breakfast or Fixed Menu',
 'All sightseeing and excursion as per the itinerary.',
 'Everyone must bring Original ID Proof at the time of travel.',
 'English, Hindi and Tamil Guide for entire trip.',
 'Please be at Airport 2 hours before the departure Time.'
 ],
 exclusions: [
 'Food, Port Rages, Tips, Phone Call from Rooms, Laundry, Insurance, Personal Expenses, Mineral water etc., and those not included “Inclusions” Head.'
 ],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '25': {
 id: '25',
 title: 'Kasi - Gaya - Allahabad - Ayodhya Flight Package From Madurai 5 Night - 6 Days',
 image: '/assets/Tamil Nadu1.avif',
 overview: {
 duration: '5 Nights / 6 Days',
 destination: 'Prayagraj, Varanasi, Gaya, Ayodhya',
 activities: 'Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'Rs. 39500/-',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Arrival Madurai - Ayodhya',
 description: 'Departure from Madurai Airport at 11.00 a.m. Arrival Varanasi Airport at 05.30 p.m. and drive to Ayodhya. On arrival check in to Ayodhya Hotel, Proceed to visit the birth place of Lord Rama at Shri Ramjanma Bhoomi, Hanuman Garhi Temple. Night halt at Ayodhya.'
 },
 {
 day: 'Day 2',
 title: 'Varanasi',
 description: 'Morning after breakfast transfer to Varanasi (Kasi). On arrival Varanasi check into Hotel. After lunch proceed to Having Dharshan of Lord Kasi Vishwanath, Kasi Visalakshi and Kasi Annapoorneswari Temples. Evening visit Ganga Aarti by boating on the way visiting Manikarneka Ghat and Harichandra Ghat. Having night Sayana Arati of Kasi Viswanath Temple. Night halt at Kasi.'
 },
 {
 day: 'Day 3',
 title: 'Gaya',
 description: 'Morning holy bath in river Ganga and performing Tharpanam. Free time shopping and religious activities. Drive to Gaya at 02.00p.m. and night halt at Buddha Gaya.'
 },
 {
 day: 'Day 4',
 title: 'Gaya',
 description: 'Morning 07:00 a.m perform some rituals Srartham or Pinda dana for your ancestors. (Dress Code: Ladies – Sarees & Gents – Dhoti ). Dharshan of Vishnu padam Temple and visit Vatavruksh. Afternoon drive to Kasi on the way visiting Buddha Gaya. Night halt in Kasi.'
 },
 {
 day: 'Day 5',
 title: 'Allahabad',
 description: 'Morning drive to Allahabad. Holy bath in Triveni sangam and performing Thambathi pooja / Veni Pooja in the meeting point of holy rivers of Ganga, Yamuna and Saraswathi. Having darshan Sri Sayana Anjaneyar. Return and night halt at Kasi.'
 },
 {
 day: 'Day 6',
 title: 'Departure from Varanasi',
 description: 'Morning having Dharshan of Kala Bhairavar Temple. and free time for Shopping. Starting from Varanasi at 11.00 a.m. Reaching at Varanasi Airport at 01.00 p.m. Departure from Varanasi Airport at 02.25 p.m. Reaching Madurai Airport at 08.45 p.m.'
 }
 ],
 inclusions: [
 'Hotel',
 'Transportation by A/C Bus/Cab.',
 'Three nights stay at Kasi in A/C Dlx room',
 'One night stay at Ayodhya in A/C Dlx room',
 'One night stay at Gaya in A/C Dlx room',
 'Buffet Breakfast or Fixed Menu',
 'All sightseeing and excursion as per the itinerary.',
 'Everyone must bring Original ID Proof at the time of travel.',
 'English, Hindi and Tamil Guide for entire trip.',
 'Please be at Airport 2 hours before the departure Time.'
 ],
 exclusions: [
 'Food, Port Rages, Tips, Phone Call from Rooms, Laundry, Insurance, Personal Expenses, Mineral water etc., and those not included “Inclusions” Head.'
 ],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '26': {
 id: '26',
 title: 'Pilgrim Tour 03N - 04D',
 image: '/assets/generated/ramanathaswamy_temple.png',
 overview: {
 duration: '3 Nights / 4 Days',
 destination: 'Kovalam, Thiruvananthapuram, Trivandrum, Kanyakumari...',
 activities: 'Beaches Sightseeing, Museums, Sightseeing',
 themes: 'Religious & Pilgrimage, Beaches and Islands'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'On Request',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Thiruvanthapurum to Kovalam (30 Min)',
 description: 'On Arrival at Thiruvanthapurum Airport/Railway station, Report to our Driver then we proceed to Kovalam. Upon arrival check in at pre booked Hotel, day on leisure Evening after Sunset Kovalam. We offers an excellent diversity with Kovalam beach to suit all desires and occasions. Visit light house beach and Hawah beach. Overnight stay at Kovalam.'
 },
 {
 day: 'Day 2',
 title: 'Kovalam - Thiruvanthapurum Sightseeing',
 description: 'Moring after breakfast Proceed for sightseeing at Trivandrum. Visit Sree Padmanabhaswamy temple (16 km) which is 16th century temple dedicated to Lord Vishnu is the most impressive landmark of the city. Visit Trivandrum Zoo, Sree Chitra Art Gallery, Napier Museum-(16km) (Closed on Mondays, Wednesday, Govt Holidays, Visiting time :1.00 PM to 4.45 PM), Science and technology museum (Closed on Mondays) etc. Enjoy sun set in the evening relaxing on the beach. Overnight stay at the hotel.'
 },
 {
 day: 'Day 3',
 title: 'Kovalam to Kanyakumari',
 description: 'Morning after breakfast Start for full day Kanyakumari Excursion the southern tip of peninsular India, it offers a unique experience of sunrise & sunset. Visit rock memorial dedicated to Swami Vivekananda Mermorial, Kanyakumari Amman Temple, the Gandhi Memorial, Thiruvallur Statue Evening after Sunset and back to the hotel. Overnight halt at Kanyakumari.'
 },
 {
 day: 'Day 4',
 title: 'Kanyakumari to Trivendrum (03Hrs)',
 description: 'After having the breakfast, pack your baggage\'s with a promise to return once again to this paradise.... Proceed on time to board your flight/train with sweet memories.'
 }
 ],
 inclusions: [
 'CP (Room + Breakfast)'
 ],
 exclusions: [],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '27': {
 id: '27',
 title: '9 Night - 10 Days Kerala Tour Package',
 image: '/assets/kerala/9 Night - 10 Days Kerala Tour Package cards.png',
 heroImage: '/assets/kerala/9 Night - 10 Days Kerala Tour Package.png',
 overview: {
 duration: '9 Nights / 10 Days',
 destination: 'Kochi, Kovalam, Thekkady, Alleppey, Trivandrum...',
 activities: 'House Boat, Elephant Safari, Beaches Sightseeing, Museums, Sightseeing',
 themes: 'Wildlife, Hill Stations & Valleys, Religious & Pilgrimage, Culture & Heritage, Beaches and Islands'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'On Request',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Cochin',
 description: 'On arrival at Cochin Airport/Station, transfer to Hotel, after freshup proceed for local Cochin sightseeing -Visit Chinese Fishing Net, Portuguese Synagogue, Mattancherry Spice Market, Bolgatti Palace. Evening by the serene Marine drive, and shop at Jewel Street. Once you are done touring, get back to the hotel for the night. Overnight stay at Cochin.'
 },
 {
 day: 'Day 2',
 title: 'Cochin - Munnar Sightseeing (4Hrs)',
 description: 'After breakfast proceed for the full day sightseeing of Munnar - Rajamalai ( Eravikulam National Park ) , Visit Cheyapara & Vallara waterfalls, Mattupatty Dam , Boating in Dam , Shooting point , Eco Point , Kundale Lake, View point & Green Carpet of Tea Gardern Etc. Overnight at Hotel In Munnar.'
 },
 {
 day: 'Day 3',
 title: 'Munnar Sightseeing',
 description: 'After Breakfast Proceed for the Sightseeing of Munnar Town , Tea Museum , Hydel Park , Rose Garden, Blossom Park, Potanmedu View Point, Old Munnar Town for shopping. a stroll on the Munnar lake. Back to hotel & Overnight stay at Munnar.'
 },
 {
 day: 'Day 4',
 title: 'Munnar – Thekkady (3Hrs)',
 description: 'After enjoying the breakfast proceed to Thekkady which offers diverse attractions like Wildlife Sanctuary, Hill Station and Spice Plantation. Nature’s own little hideout nestled in the hills of Thekkady. Reach & check-in at the hotel and relax for a while amidst the comforts of your room. Visit the local spice market for some garden fresh spices and handicrafts. Overnight stay at the Hotel/Resort. Thekkady.'
 },
 {
 day: 'Day 5',
 title: 'Thekkady Sightseeing',
 description: 'After having the delicious breakfast, proceed to the most attractive feature of Thekkady i.e. Periyar Wild life Sanctuary. Thekkady is the place where one can go for a Wildlife cruise to view a large variety of wildlife like Wild Elephants, Nilgiri Langur, Sambar Deer, Wild Bison, Wild Boar etc, and quite a lot of unique birds can also be spotted. Other Optional activities are spice plantation Tour, Bamboo Rafting, Trekking and Elephant ride. Overnight stay at the Hotel/Resort. Thekkady.'
 },
 {
 day: 'Day 6',
 title: 'Thekkady – Houseboat (4 ½ Hrs)',
 description: 'After enjoying the breakfast proceed to the boat Jetty to board the beautifully decorated houseboats and begin the enchanting backwater cruising. The Kerala backwater is a unique product of Kerala and is found nowhere else in the world. Sparkling greens, emerald backwaters, coir-laden houseboats and magical beauty heals your mind and body as you travel to surreal Kerala. Overnight stay in the Houseboat. (Alleppey)'
 },
 {
 day: 'Day 7',
 title: 'Alleppey – Kovalam (5Hrs)',
 description: 'After having the breakfast, proceed to Kovalam beach. Kovalam is known as the "Paradise of the South". This dreamland is an evergreen, serene, pleasant climatic and enticing beach destination. Reach & check-in at the hotel and relax for a while amidst the comforts of your room. Explore on your own to see how the everlasting sea touches the everlasting sky. Overnight stay at the Hotel/Resort.'
 },
 {
 day: 'Day 8',
 title: 'Kovalam – Trivandrum – Kovalam',
 description: 'After the sumptuous breakfast proceed for the sightseeing of Trivandrum. The major attraction of Trivandrum is Padmanabhaswamy temple is the most religious icon of the city. Other sightseeing places are Kuthiramalika Palace Museum, Veli Tourist Village, Shangumugham Beach where one can watch the amazing sunset. Overnight stay at the Hotel/Resort.'
 },
 {
 day: 'Day 9',
 title: 'Kovalam - Kanyakumari (3Hrs)',
 description: 'Enjoy the delicious breakfast later proceed to Kanyakumari the land of virgin goddess. Kanyakumari is an important pilgrim centre of India, it is famous for the Amman Temples, Mahatma Gandhi Memorial, Thiruvalluvar Statue,. End your day by watching the spectacular sunset there. Overnight stay at the Hotel/Resort. (Kanyakumari)'
 },
 {
 day: 'Day 10',
 title: 'Kanyakumari – Trivandrum',
 description: 'After having the breakfast, pack your baggage\'s with a promise to return once again to this paradise.... Proceed on time to board your flight/train with sweet memories of your holiday.'
 }
 ],
 inclusions: [
 'CP (Room + Breakfast)'
 ],
 exclusions: [],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '28': {
 id: '28',
 title: 'Madurai - Rameshwaram - Kanyakumari 4N 5D Tour',
 image: '/assets/generated/kanyakumari_beach.png',
 overview: {
 duration: '4 Nights / 5 Days',
 destination: 'Kanyakumari, Madurai, Rameshwaram, Meenakshi Temple',
 activities: 'Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage, Beaches and Islands'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'On Request',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Madurai',
 description: 'Morning Pick up from Madurai Station/Airport, transfer to Hotel, check In, Afternoon leave to city tour. Madurai\'s history goes back to six centuries before Christ. The Pandyan rulers made this their capital until the 14th Century and the city flowered with the genius of its writers, builders, poets and academics. Then the Nayaks ruled Madurai from the middle of the 16th Century to 1743. The ten tall Gopurams of the Meenakshi Temple were raised during their dynasty. Visiting - Sri Meenakshi Sundereswarar and Palani temples, King Tirumala\'s Palace, Vandiyur Mariamman Tank and Gandhi museum. Night halt at Madurai.'
 },
 {
 day: 'Day 2',
 title: 'Madurai – Rameshwaram (3Hrs)',
 description: 'Morning After Breakfast Check out Hotel, later depart to Rameshwaram - small island in the Gulf of Mannar is a major pilgrim centre. Visit to Sri Ramanathaswamy Temple - situated near the sea on the eastern side, as massive sculptured pillars on either side and has the longest corridors in the world, Kurusadai Island - It is a Marine Biosphere, a paradise for the Marine Biologists and Nature lovers. Night halt at Rameshwaram.'
 },
 {
 day: 'Day 3',
 title: 'Rameshwaram – Kanyakumari (5Hrs)',
 description: 'Morning After Breakfast Check out Hotel, later depart to Kanyakumari – is the land\'s end of India where the water of the Arabian Sea, the Bay of Bengal and the Indian Ocean meet. An important pilgrim centre of India. Upon arrival Check in hotel, Evening Enjoy Sunset, Night halt at Kanyakumari.'
 },
 {
 day: 'Day 4',
 title: 'Kanyakumari',
 description: 'Morning After Breakfast start for full day sightseeing visit famous Amman Temples – a symbol of unity and sanctity – dedicated to the virgin Goddess, Kanyakumari and to its South – East lies the famous Vivekananda Rock Memorial, a blend of all the architectural styles of India. Night halt at Kanyakumari.'
 },
 {
 day: 'Day 5',
 title: 'Kanyakumari - Trivendrum (3Hrs)',
 description: 'Morning After Breakfast, Check out hotel,Then Proceed on time to board your flight/train with sweet memories of your holiday.'
 }
 ],
 inclusions: [
 'CP (Room + Breakfast)'
 ],
 exclusions: [],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '29': {
 id: '29',
 title: '10 Night - 11 Days Tamil Nadu Tour Package',
 image: '/assets/chennai/10 Night - 11 Days Tamil Nadu Tour Package card.png',
 heroImage: '/assets/chennai/10 Night - 11 Days Tamil Nadu Tour Package.png',
 overview: {
 duration: '10 Nights / 11 Days',
 destination: 'Chennai, Kanchipuram, Kanyakumari, Mahabalipuram...',
 activities: 'Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage, Beaches and Islands'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'On Request',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Chennai',
 description: 'Morning Pick up from Chennai Airport/Station, later transfer to Hotel, Check in, later depart for Chennai Local Sightseeing - The Capital city of Tamilnadu and the main Centre of this region, visiting Gandhi Memorial, Fort St. George, Kapaleshwar temple, Parthasarthy Temple, Kala Kshetra, Mylapore temple Pantheon Museum & Art Gallery, Old Light house and Marina beach. Night halt at Chennai.'
 },
 {
 day: 'Day 2',
 title: 'Chennai – Mahabalipuram',
 description: 'Morning After Breakfast Check out Hotel, later depart to Mahabalipuram. Enroute visit Kanchipuram the ancient capital of the Pallavas famous as a golden city of 1000 Temples and still has 124 shrines is one of the seven most sacred cities of India. Kanchipuram is also famous for its silks. Visit its famous temples, Kailash Nath temple, Ekambareshwaram temple, Sri Kamakshi temple etc. Thereafter continue your drive to Mamallapuram (Mahabalipuram). Upon arrival check in hotel, Rest of the day at leisure or free for your own activities, night halt at Mahabalipuram.'
 },
 {
 day: 'Day 3',
 title: 'Mahabalipuram – Pondicherry',
 description: 'Morning After Breakfast check out Hotel, later depart for Mahabalipuram (Mamallapuram) Local Sightseeing - built in 7th century, earlier called Mahabalipuram, this ancient Pallava Fort, is today the sight of several antique sculptural marvels. In this ancient seaside town, shrines and huge sculptures cut-out of rocks more than 1200 years back during the reign of Pallava Kings in the region can be seen. At the mouth of the river Palar, on large granite hall about 1 km in length from north to south is the site of many monuments, like The Descent of Ganges also known as Arjuna\'s Penance, this open air sculpture showing the descent of the holy River, Krishna Mandap, The Rathas and the Shore temple dedicated to Lord Shiva. Noon Depart to Pondicherry, same day Arrival, Night halt at Pondicherry.'
 },
 {
 day: 'Day 4',
 title: 'Pondicherry',
 description: 'Morning After breakfast depart to Local Sightseeing of Pondicherry-carries a strong whiff of the French presence in India. Legend says that Pondicherry is the place where St. Agasthaya settled down. Visiting Arbindo Ashram, the city of dawn, which is 10kms north of Pondicherry. This ashram promotes Aurbindo\'s ideas in bringing about a synthesis of Yoga and modern science, so as to unite the spirit and matter. Afternoon, visit Auroville - a unique experiment in international living and in creating a new environment where men and women of all nationalities live together in harmony; Vardaraja Perumal Temple, Vedapureswarar Temple & Manakula Vinayagar Temple war memorial, Town Hall. Night halt at Pondicherry.'
 },
 {
 day: 'Day 5',
 title: 'Pondicherry – Trichy',
 description: 'Morning After Breakfast Check out Hotel, later depart to Trichy Enroute visit to Thanjor-Visiting Brihadeeshwara Temple, 16th century Shivganga Fort, Palace museum, etc. Also Night halt at Trichy.'
 },
 {
 day: 'Day 6',
 title: 'Trichy',
 description: 'Morning After Breakfast Start for Local Sightseeing of Trichy - short name of Trichirapalli, situated on the banks of Kaveri River is a blend of history and tradition as well as pilgrim centre. Visiting famous for Ranganath temple and Jambukeshwar Temple at Srirangam and Rock fort and its temple at a height of over 23mts.Night halt at Trichy.'
 },
 {
 day: 'Day 7',
 title: 'Trichy – Madurai',
 description: 'Morning After Breakfast depart to Madurai same day Arrival, Check in Hotel, later leave to city tour. Madurai\'s history goes back to six centuries before Christ. The Pandyan rulers made this their capital until the 14th Century and the city flowered with the genius of its writers, builders, poets and academics. Then the Nayaks ruled Madurai from the middle of the 16th Century to 1743. The ten tall Gopurams of the Meenakshi Temple were raised during their dynasty. Visiting - Sri Meenakshi Sundereswarar and Palani temples, King Tirumala\'s Palace, Vandiyur Mariamman Tank and Gandhi museum. Night halt at Madurai.'
 },
 {
 day: 'Day 8',
 title: 'Madurai – Rameshwaram',
 description: 'After breakfast, depart for Rameswaram. Check in to your accommodation in Rameswaram. Visit the Ramanathaswamy Temple, one of the twelve Jyotirlinga temples, and take a holy dip in the Agni Theertham, a sacred sea. Explore the other temples in the town, such as Kothandaramaswamy Temple, Panchmukhi Hanuman Temple, and more. Explore other holy places in Rameswaram. Return back to the hotel and Overnight stay in Rameswaram.'
 },
 {
 day: 'Day 9',
 title: 'Rameshwaram - Kanyakumari',
 description: 'Morning After Breakfast Check out Hotel, later depart to Kanyakumari – is the land\'s end of India where the water of the Arabian Sea, the Bay of Bengal and the Indian Ocean meet. An important pilgrim centre of India. Upon arrival Check in hotel, Evening Enjoy Sunset, Night halt at Kanyakumari.'
 },
 {
 day: 'Day 10',
 title: 'Kanyakumari',
 description: 'Morning After Breakfast start for full day sightseeing visit famous Amman Temples – a symbol of unity and sanctity – dedicated to the virgin Goddess, Kanyakumari and to its South – East lies the famous Vivekananda Rock Memorial, a blend of all the architectural styles of India. Night halt at Kanyakumari.'
 },
 {
 day: 'Day 11',
 title: 'Kanyakumari – Trivandrum Airport Drop',
 description: 'Morning After Breakfast Check out later, Proceed on time to board your flight/train with sweet memories of your holiday.'
 }
 ],
 inclusions: [
 'CP (Room + Breakfast)'
 ],
 exclusions: [],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '30': {
 id: '30',
 title: 'Delightful Madurai - Rameswaram - Kanyakumari 3Night 4Days Tour',
 image: '/assets/generated/vivekananda_rock.png',
 overview: {
 duration: '3 Nights / 4 Days',
 destination: 'Kanyakumari, Madurai, Rameshwaram, Kumari Amman Temple',
 activities: 'Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage, Beaches and Islands'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'On Request',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Madurai Arrival & Sightseeing',
 description: 'Upon your arrival at Madurai Airport or Madurai Railway Station in the early morning, you will be greeted by our local tour representative. He will transfer you to the Hotel , Check in to your accommodation in Madurai. Begin your sightseeing tour in Madurai. Visit the Meenakshi Amman Temple, a masterpiece of Dravidian architecture. Explore the Thirumalai Nayak Palace, showcasing Indo-Saracenic architecture. Visit The Koodal Azhagar Temple, Alagar Koil Temple . Evening return back to the hotel and Overnight stay in Madurai.'
 },
 {
 day: 'Day 2',
 title: 'Madurai - Rameswaram & Sightseeing',
 description: 'After breakfast, depart for Rameswaram. Check in to your accommodation in Rameswaram. Visit the Ramanathaswamy Temple, one of the twelve Jyotirlinga temples, and take a holy dip in the Agni Theertham, a sacred sea. Explore the other temples in the town, such as Kothandaramaswamy Temple, Panchmukhi Hanuman Temple, and more. Explore other holy places in Rameswaram. Return back to the hotel and Overnight stay in Rameswaram.'
 },
 {
 day: 'Day 3',
 title: 'Rameswaram - Kanyakumari & Sightseeing',
 description: 'After breakfast, check out from the hotel in Rameswaram and depart for Kanyakumari. Check in to your accommodation in Kanyakumari. Explore the Vivekananda Rock Memorial, Thiruvalluvar Statue, Kanyakumari Amman Temple and Thanumalayan Temple - Sthanumalayan Kovil. Enjoy the stunning sunset views. Later back to the Hotel and Overnight stay in Kanyakumari.'
 },
 {
 day: 'Day 4',
 title: 'Kanyakumari – Madurai',
 description: 'Early get ready for Sunrise in Seashore. Return to your hotel, have breakfast & then check-out from the hotel. We will head to Madurai for your onward journey. Your arrival at Madurai Airport / Railway Station will mark the end of the tour.'
 }
 ],
 inclusions: [
 'CP (Room + Breakfast)'
 ],
 exclusions: [],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '31': {
 id: '31',
 title: 'Madurai - Rameshwaram - Kanyakumari - Trivandrum Tour 5N 6D',
 image: '/assets/generated/padmanabhaswamy_temple.png',
 overview: {
 duration: '5 Nights / 6 Days',
 destination: 'Kovalam, Trivandrum, Kanyakumari, Madurai, Rameshwaram...',
 activities: 'Beaches Sightseeing, Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage, Beaches and Islands'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'On Request',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Arrival at Madurai and Half day City Tour',
 description: 'Upon arrival our representative will greet you at Madurai Airport/ Railway Station and then transfer to the hotel. Check-in and relax for a while amidst the comforts of your room. The ancient city of Madurai, some 2600 years old is laid out in the banks of river Vaigai as a lotus flower with the Meenakshi temple in the centre. Afternoon city tour visiting - Meenakshi temple, King Tirumala\'s Palace, Great tank, Koodal Azhagar Temple and Gandhi museum. Overnight stay at the Hotel.'
 },
 {
 day: 'Day 2',
 title: 'Madurai - Rameshwaram and City tour',
 description: 'Enjoy the sumptuous breakfast. Later proceed to Rameshwaram on the way visit Pamban Bridge, then Check into the hotel. Visit Five Face Hanuman Temple, Abdulkalam House, kothandaramar temple, Ramar padam,Jyortirling darshan at Ramanathaswamy Temple, Later proceed to Dhanushkodi.. Overnight stay at the Hotel.'
 },
 {
 day: 'Day 3',
 title: 'Rameshwaram - Kanyakumari and City tour',
 description: 'Enjoy the sumptuous breakfast. Later proceed to Kanyakumari. Reach & check-in at the hotel and relax for a while amidst the comforts of your room. Kanyakumari - Located at the southern tip of peninsular India, it offers a unique experience of sunrise & sunset. Visit rock memorial dedicated to Swami Vivekananda, the Gandhi Memorial, Kanyakumari Bhagavathi amman temple,Suchidram Temple with exquisite sculpture & musical pillars dedicated to Brahma, Vishnu &Shiva. Overnight stay at the Hotel.'
 },
 {
 day: 'Day 4',
 title: 'Kanyakumari - Kovalam Leisure',
 description: 'Enjoy the sumptuous breakfast. Later proceed to Kovalam on the way Padmanabhapuram Palace -Located in Thuckalay, this ancient palace is a fine example of traditional Kerala architecture. Poovar Island - A serene island near Kovalam, known for its beautiful backwaters and golden sand beaches, The Aazhimala Shiva Temple, also known as Aazhimala Siva Temple, is a beautiful Hindu temple located near Vizhinjam in the Thiruvananthapuram district of Kerala, India. & Check- in at the hotel and relax, Overnight stay at the Hotel/Resort.'
 },
 {
 day: 'Day 5',
 title: 'Kovalam - Trivadruam - Kovalam Sightseen',
 description: 'Enjoy the sumptuous breakfast. Later proceed to Trivandrum for city tour covering Napier Museum, Sri Padmanabha Swami Temple., and Zoo. Afternoon leisure at Kovalam. Overnight stay at the Hotel/Resort'
 },
 {
 day: 'Day 6',
 title: 'Check Out and Transfers to Train Station / Airport',
 description: 'Morning have breakfast at resort later check out Hotel and drive to nearest Airport / Railway Station for departure. Back to home with sweet memories of your tour.'
 }
 ],
 inclusions: [
 'CP (Room + Breakfast)'
 ],
 exclusions: [],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '32': {
 id: '32',
 title: 'Abode Of The Cloud - Shillong - 3N Tour',
 image: '/assets/meghalaya1.avif',
 overview: {
 duration: '3 Nights / 4 Days',
 destination: 'Shillong, Cherrapunji, Nohkalikai Falls',
 activities: 'Caving, Sightseeing',
 themes: 'Hill Stations & Valleys, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'On Request',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Guwahati Airport / Rly Station – Shillong (100 kms / 03 hrs.)',
 description: 'On arrival at Guwahati Airport / Railway Station & transfer to Shillong (4,900 ft.), which is called \'Scotland of the East". Enroute visit Umium Lake, a majestic placid lake with its surrounding sylvan hills. On arrival at Shillong, check in at your hotel. Overnight stay at Shillong.'
 },
 {
 day: 'Day 2',
 title: 'Excursion to Cherrapunjee (60 kms / 3 hrs. One Way)',
 description: 'After an early breakfast, proceed for a full-day excursion to Cherrapunjee (4,400 ft.), renowned as one of the wettest places on earth. En route, stop to admire the cascading Elephanta Falls, soak in the breathtaking vistas from Mawdok–Dympep Valley Viewpoint, and explore the unique Garden of Caves. On arrival, witness some of Cherrapunjee’s most spectacular natural wonders including the majestic Nohkalikai Falls (the tallest plunge waterfall in India), the enchanting Nohsngithiang Falls (Seven Sisters Falls), and the fascinating limestone formations inside the Mawsmai Caves. In the evening, drive back to Shillong for an Overnight stay at Shillong.'
 },
 {
 day: 'Day 3',
 title: 'Shillong Sightseeing',
 description: 'After breakfast visit Don Bosco Museum (Sunday closed), Ward’s Lake, Botanical Garden and Lady Hydari Park. Evening is free for personal activities. Overnight stay at Shillong.'
 },
 {
 day: 'Day 4',
 title: 'Shillong – Guwahati Airport / Rly Station (100 kms / 03 hrs.)',
 description: 'After breakfast check out from the hotel & transfer to Guwahati Airport / Railway Station for your onward journey.'
 }
 ],
 inclusions: [
 'CP (Room + Breakfast)'
 ],
 exclusions: [],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '33': {
 id: '33',
 title: 'Eastern Meadows Shillong - Guwahati Tour',
 image: '/assets/assam1.avif',
 overview: {
 duration: '3 Nights / 4 Days',
 destination: 'Guwahati, Shillong, Cherrapunji, Nohkalikai Falls',
 activities: 'Caving, Museums, Sightseeing',
 themes: 'Hill Stations & Valleys, Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'On Request',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Guwahati Airport / Rly Station – Shillong (100 kms / 03 hrs.)',
 description: 'On arrival at Guwahati Airport / Railway Station & transfer to Shillong (4,900 ft.), which is called ‘Scotland of the East”. Enroute visit Umium Lake, a majestic placid lake with its surrounding sylvan hills. On arrival at Shillong, check in at your hotel. Overnight stay at Shillong.'
 },
 {
 day: 'Day 2',
 title: 'Excursion to Cherrapunjee (60 kms / 3 hrs.)',
 description: 'After an early breakfast, proceed for a full-day excursion to Cherrapunjee (4,400 ft.), renowned as one of the wettest places on earth. En route, stop to admire the cascading Elephanta Falls, soak in the breathtaking vistas from Mawdok–Dympep Valley Viewpoint, and explore the unique Garden of Caves. On arrival, witness some of Cherrapunjee’s most spectacular natural wonders including the majestic Nohkalikai Falls (the tallest plunge waterfall in India), the enchanting Nohsngithiang Falls (Seven Sisters Falls), and the fascinating limestone formations inside the Mawsmai Caves. In the evening, drive back to Shillong for an Overnight stay at Shillong.'
 },
 {
 day: 'Day 3',
 title: 'Shillong Sightseeing – Guwahati (100 kms / 03 hrs.)',
 description: 'After breakfast Check out from hotel and visit Don Bosco Museum (Sunday Closed) & Ward’s Lake. After that drive to Guwahati. Arrive and check in at your hotel. In evening we suggest an optional tour of Golden sunset cruise on the Brahmaputra (Direct Payment by own). Overnight stay at Guwahati.'
 },
 {
 day: 'Day 4',
 title: 'Hotel – Guwahati Airport / Rly Station',
 description: 'After breakfast visit Kamakhya Temple (Notes -Timing 08:00 A.M till 01:00 P.M & 3:00 P.M till its gets dark). Transfer to Guwahati Airport / Railway Station for your onward journey. Note: Temple visit will depend on your departure time. It May be done on previous day'
 }
 ],
 inclusions: [
 'CP (Room + Breakfast)'
 ],
 exclusions: [],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '34': {
 id: '34',
 title: 'North-East Beauty Kaziranga - Shillong Tour',
 image: '/assets/sikkim1.avif',
 overview: {
 duration: '4 Nights / 5 Days',
 destination: 'Shillong, Cherrapunji, Kaziranga, Kaziranga National Park...',
 activities: 'Caving, Jeep Safari, Elephant Safari, Sightseeing',
 themes: 'Wildlife, Hill Stations & Valleys, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'On Request',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Guwahati Airport / Rly Station – Kaziranga National Park (220 kms / 5 hrs.)',
 description: 'On arrival at Guwahati Airport / Railway Station & transfer to Kaziranga National Park, the home of “One Horned Rhinoceros”, Enroute visit Maha Mrityunjay Temple. On arrival at Kaziranga Check in at your hotel. Evening is free for leisure. Overnight stay at Kaziranga.'
 },
 {
 day: 'Day 2',
 title: 'Kaziranga National Park',
 description: 'Early morning explores any one zone of Kaziranga National Park on back of Elephant. Apart from the Rhino, other species found are Hog Deer, Swamp Deer, Wild Buffalo, Elephants and if you are lucky then tiger also. It is also home to pelicans, storks and darters as there are a number of water bodies inside the Park. Return to the resort for breakfast. In the afternoon enjoy jeep safari through the National Park, later visit Kaziranga Orchid Park. Return to the hotel. Overnight stay at Kaziranga. \n\nImportant note: Elephant rides are all regulated and controlled by the forest Dept. Govt. of Assam. We do not have any control on the booking. Elephant rides & Jeep safari are subject to availability only.'
 },
 {
 day: 'Day 3',
 title: 'Kaziranga National Park – Shillong (295 kms / 7 hrs.)',
 description: 'After breakfast proceed for Shillong (4,900 ft.), called ‘Scotland of the East”. Enroute visit Umium Lake, a majestic placid lake with its surrounding sylvan hills. On arrival at Shillong, check in at your hotel. Back to the hotel. Overnight stay at Shillong.'
 },
 {
 day: 'Day 4',
 title: 'Excursion to Cherrapunjee (60 kms / 3 hrs.)',
 description: 'After an early breakfast, proceed for a full-day excursion to Cherrapunjee (4,400 ft.), renowned as one of the wettest places on earth. En route, stop to admire the cascading Elephanta Falls, soak in the breathtaking vistas from Mawdok–Dympep Valley Viewpoint, and explore the unique Garden of Caves. On arrival, witness some of Cherrapunjee’s most spectacular natural wonders including the majestic Nohkalikai Falls (the tallest plunge waterfall in India), the enchanting Nohsngithiang Falls (Seven Sisters Falls), and the fascinating limestone formations inside the Mawsmai Caves. In the evening, drive back to Shillong for an Overnight stay at Shillong.'
 },
 {
 day: 'Day 5',
 title: 'Shilong – Guwahati Airport / Rly Station (100 kms / 3 hrs.)',
 description: 'After breakfast check out from the hotel & transfer to Guwahati Airport / Railway Station for your onward journey.'
 }
 ],
 inclusions: [
 'CP (Room + Breakfast)'
 ],
 exclusions: [],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '35': {
 id: '35',
 title: 'Splendour Himalaya Shillong - Guwahati Tour',
 image: '/assets/mizoram1.avif',
 overview: {
 duration: '4 Nights / 5 Days',
 destination: 'Shillong, Cherrapunji, Dawki, Guwahati, Nohkalikai Falls',
 activities: 'Caving, Museums, Sightseeing',
 themes: 'Hill Stations & Valleys, Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'On Request',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Guwahati Airport / Rly Station – Shillong (100 kms / 3 hrs.)',
 description: 'On arrival at Guwahati Airport / Railway Station & transfer to Shillong (4,900 ft.), which is called ‘Scotland of the East” (100 kms 3 hrs). Enroute visit Umium Lake, a majestic placid lake with its surrounding sylvan hills. On arrival at Shillong, check in at your hotel. Overnight stay at Shillong.'
 },
 {
 day: 'Day 2',
 title: 'Excursion to Cherrapunjee (60 kms / 3 hrs one way.)',
 description: 'After an early breakfast, proceed for a full-day excursion to Cherrapunjee (4,400 ft.), renowned as one of the wettest places on earth. En route, stop to admire the cascading Elephanta Falls, soak in the breathtaking vistas from Mawdok–Dympep Valley Viewpoint, and explore the unique Garden of Caves. On arrival, witness some of Cherrapunjee’s most spectacular natural wonders including the majestic Nohkalikai Falls (the tallest plunge waterfall in India), the enchanting Nohsngithiang Falls (Seven Sisters Falls), and the fascinating limestone formations inside the Mawsmai Caves. In the evening, drive back to Shillong for an Overnight stay at Shillong.'
 },
 {
 day: 'Day 3',
 title: 'Excursion to Dawki & Mawlynnong (120 kms / 4 hrs one way.)',
 description: 'After early breakfast drive to Dawki, a small town near India Bangladesh border. Enjoy breathtaking view of the Umangot River. Later proceed to Mawlynnong – “Asia’s Cleanest Village”. Mawlynnong offers many interesting sights such as the living root bridge and another strange natural phenomenon of a boulder balancing on another small rock. Evening drive back to Shillong. Stay overnight at your hotel in Shillong.'
 },
 {
 day: 'Day 4',
 title: 'Shillong Sightseeing – Guwahati (100 kms / 3 hrs.)',
 description: 'After breakfast check out from hotel and visit Don Bosco Museum (Sunday Closed) & Ward’s Lake. After that drive to Guwahati. Arrive and check in at hotel. In evening we suggest an optional tour of Golden sunset cruise on the Brahmaputra (Direct Payment by own). Overnight stay at Guwahati.'
 },
 {
 day: 'Day 5',
 title: 'Hotel – Guwahati Airport / Rly Station',
 description: 'After breakfast visit Kamakhya Temple (Notes -Timing 08:00 A.M till 01:00 P.M & 3:00 P.M till its gets dark). Transfer to Guwahati Airport / Railway Station for your onward journey. Note: Temple visit will depend on your departure time. It May be done on previous day.'
 }
 ],
 inclusions: [
 'CP (Room + Breakfast)'
 ],
 exclusions: [],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '36': {
 id: '36',
 title: 'Scotland Of The East - Shillong 4N Tour',
 image: '/assets/meghalaya1.avif',
 overview: {
 duration: '4 Nights / 5 Days',
 destination: 'Shillong, Cherrapunji, Dawki, Nohkalikai Falls',
 activities: 'Caving, Sightseeing',
 themes: 'Hill Stations & Valleys, Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'On Request',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Guwahati Airport / Rly Station – Shillong (100 kms / 03 hrs.)',
 description: 'On arrival at Guwahati Airport / Railway Station & transfer to Shillong (4,900 ft.), which is called ‘Scotland of the East”. Enroute visit Umium Lake, a majestic placid lake with its surrounding sylvan hills. On arrival at Shillong, check in at your hotel. Overnight stay at Shillong.'
 },
 {
 day: 'Day 2',
 title: 'Excursion to Cherrapunjee (60 kms / 3 hrs. One Way)',
 description: 'After an early breakfast, proceed for a full-day excursion to Cherrapunjee (4,400 ft.), renowned as one of the wettest places on earth. En route, stop to admire the cascading Elephanta Falls, soak in the breathtaking vistas from Mawdok–Dympep Valley Viewpoint, and explore the unique Garden of Caves. On arrival, witness some of Cherrapunjee’s most spectacular natural wonders including the majestic Nohkalikai Falls (the tallest plunge waterfall in India), the enchanting Nohsngithiang Falls (Seven Sisters Falls), and the fascinating limestone formations inside the Mawsmai Caves. In the evening, drive back to Shillong for an Overnight stay at Shillong.'
 },
 {
 day: 'Day 3',
 title: 'Excursion to Jowai (110 kms / 4-5 hrs. One Way)',
 description: 'After early breakfast start full day excursion to Jowai, headquarters of the Jaintia Hills district is situated 66 kms away from Shillong, along the Shillong-Silchar national highway. A picturesque town circled by the majestic Myntdu River. Jowai was the summer capital of the Jaintia Kings, of Sutnga State. You will visit India’s most magical waterfall – Krang Suri, Meghalaya. A moment of silence to acknowledge how beautiful this waterfall is! Later drive to Tryshi Waterfalls, A bridge connects the waterfall’s surroundings with an expanse of green paddy fields. A breathtaking panoramic view of the Pynthor Nein is visible from the bridge. Next you will stop at Thadlaskein Lake where you can enjoy boating. Afternoon proceed to The Nartiang menhir measure 27 feet in height above the ground, 6 feet in breadth and 2 feet 6 inches in thickness. The monoliths represent the megalithic culture of the Hynniewtrep people. A 500 Years old temple of Durga is another attraction at Nartiang. Evening back to Shillong. Overnight stay at Shillong.'
 },
 {
 day: 'Day 4',
 title: 'Excursion to Dawki & Mawlynnong (120 kms / 4-5 hrs. One Way)',
 description: 'After early breakfast drive to Dawki, a small town near India Bangladesh border. Enjoy breathtaking view of the Umangot River. Later proceed to Mawlynnong – “Asia’s Cleanest Village”. Mawlynnong offers many interesting sights such as the living root bridge and another strange natural phenomenon of a boulder balancing on another small rock. Evening drive back to Shillong. Stay overnight at your hotel in Shillong.\nNote - It is advisable to carry packed lunch.'
 },
 {
 day: 'Day 5',
 title: 'Shillong – Guwahati Airport / Rly Station (100 kms / 03 hrs.)',
 description: 'After breakfast check out from the hotel & transfer to Guwahati Airport / Railway Station for your onward journey.'
 }
 ],
 inclusions: [
 'CP (Room + Breakfast)'
 ],
 exclusions: [],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '37': {
 id: '37',
 title: 'Peaks - Lakes Shillong - Guwahati Tour',
 image: '/assets/assam1.avif',
 overview: {
 duration: '4 Nights / 5 Days',
 destination: 'Guwahati, Shillong, Cherrapunji, Nohkalikai Falls',
 activities: 'Caving, Museums, Sightseeing',
 themes: 'Hill Stations & Valleys, Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'On Request',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Guwahati Airport / Rly Station – Shillong (100 kms / 3 hrs.)',
 description: 'On arrival at Guwahati Airport / Railway Station & transfer to Shillong (4,900 ft.), which is called \'Scotland of the East" (100 kms 3 hrs). Enroute visit Umium Lake, a majestic placid lake with its surrounding sylvan hills. On arrival at Shillong, check in at your hotel. Overnight stay at Shillong.'
 },
 {
 day: 'Day 2',
 title: 'Excursion to Cherrapunjee (60 kms / 3 hrs one way.)',
 description: 'After an early breakfast, proceed for a full-day excursion to Cherrapunjee (4,400 ft.), renowned as one of the wettest places on earth. En route, stop to admire the cascading Elephanta Falls, soak in the breathtaking vistas from Mawdok–Dympep Valley Viewpoint, and explore the unique Garden of Caves. On arrival, witness some of Cherrapunjee’s most spectacular natural wonders including the majestic Nohkalikai Falls (the tallest plunge waterfall in India), the enchanting Nohsngithiang Falls (Seven Sisters Falls), and the fascinating limestone formations inside the Mawsmai Caves. In the evening, drive back to Shillong for an Overnight stay at Shillong.'
 },
 {
 day: 'Day 3',
 title: 'Shillong Sightseeing – Guwahati (100 kms / 3 hrs.)',
 description: 'After breakfast visit Don Bosco Museum (Sunday Closed) & Ward’s Lake. After that drive to Guwahati. Arrive and check in at hotel. In evening we suggest an optional tour of Golden sunset cruise on the Brahmaputra (Direct Payment by own). Overnight stay at Guwahati'
 },
 {
 day: 'Day 4',
 title: 'Guwahati Local Sightseeing',
 description: 'After breakfast out to visit Kamakhya Temple (Notes -Timing 08:00 A.M till 01:00 P.M & 3:00 P.M till its gets dark), Tirupati Balaji Temple, Nabagraha Temple, Assam State Museum (Closed on Monday), State Zoo cum Botanical Garden, Regional Science Centre and Sukreswar Temple (The 6th Jyotirlinga of Shiva). Overnight stay at Guwahati.'
 },
 {
 day: 'Day 5',
 title: 'Hotel – Guwahati Airport / Rly Station',
 description: 'After breakfast check out from hotel & transfer to Guwahati Airport / Railway Station for your onward journey.'
 }
 ],
 inclusions: [
 'CP (Room + Breakfast)'
 ],
 exclusions: [],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '38': {
 id: '38',
 title: 'North East Triangle Kaziranga - Shillong - Guwahati Tour',
 image: '/assets/sikkim1.avif',
 overview: {
 duration: '5 Nights / 6 Days',
 destination: 'Guwahati, Shillong, Cherrapunji, Kaziranga...',
 activities: 'Jeep Safari, Elephant Safari, Museums, Sightseeing',
 themes: 'Wildlife, Hill Stations & Valleys, Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'On Request',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Guwahati Airport / Rly Station – Kaziranga National Park (220 kms / 5 hrs.)',
 description: 'On arrival at Guwahati Airport / Railway Station & transfer to Kaziranga National Park, the home of “One Horned Rhinoceros”, Enroute visit Maha Mrityunjay Temple. On arrival at Kaziranga Check in at your hotel. Evening is free for leisure. Overnight stay at Kaziranga.'
 },
 {
 day: 'Day 2',
 title: 'Kaziranga National Park',
 description: 'Early morning explores any one zone of Kaziranga National Park on back of Elephant. Apart from the Rhino, other species found are Hog Deer, Swamp Deer, Wild Buffalo, Elephants and if you are lucky then tiger also. It is also home to pelicans, storks and darters as there are a number of water bodies inside the Park. Return to the resort for breakfast. In the afternoon enjoy jeep safari through the National Park, later visit Kaziranga Orchid Park. Return to the hotel. Overnight stay at Kaziranga.\n\nImportant note: Elephant rides are all regulated and controlled by the forest Dept. Govt. of Assam. We do not have any control on the booking. Elephant rides & Jeep safari are subject to availability only.'
 },
 {
 day: 'Day 3',
 title: 'Kaziranga National Park – Shillong (295 kms / 7 hrs.)',
 description: 'After breakfast proceed for Shillong (4,900 ft.), which is called ‘Scotland of the East”. Enroute visit Umium Lake, a majestic placid lake with its surrounding sylvan hills. On arrival at Shillong, check in at your hotel. Evening is free for leisure. Overnight stay at Shillong.'
 },
 {
 day: 'Day 4',
 title: 'Excursion to Cherrapunjee (60 kms / 3 hrs one way.)',
 description: 'After an early breakfast, proceed for a full-day excursion to Cherrapunjee (4,400 ft.), renowned as one of the wettest places on earth. En route, stop to admire the cascading Elephanta Falls, soak in the breathtaking vistas from Mawdok–Dympep Valley Viewpoint, and explore the unique Garden of Caves. On arrival, witness some of Cherrapunjee’s most spectacular natural wonders including the majestic Nohkalikai Falls (the tallest plunge waterfall in India), the enchanting Nohsngithiang Falls (Seven Sisters Falls), and the fascinating limestone formations inside the Mawsmai Caves. In the evening, drive back to Shillong for an Overnight stay at Shillong.'
 },
 {
 day: 'Day 5',
 title: 'Shillong Sightseeing – Guwahati (100 kms / 3 hrs.)',
 description: 'After breakfast visit Don Bosco Museum (Sunday Closed) Ward’s Lake & Lady Hydari Park. Thereafter, drive to Guwahati. Arrive and check in at hotel. In evening we suggest an optional tour of Golden sunset cruise on the Brahmaputra (Direct Payment by own). Overnight stay at Guwahati'
 },
 {
 day: 'Day 6',
 title: 'Hotel – Guwahati Airport / Rly Station',
 description: 'After breakfast visit Kamakhya Temple (Notes -Timing 08:00 A.M till 01:00 P.M & 3:00 P.M till its gets dark). Transfer to Guwahati Airport / Railway Station for your onward journey.\n\nNote: Temple visit will depend on your departure time. It May be done on previous day.'
 }
 ],
 inclusions: [
 'CP (Room + Breakfast)'
 ],
 exclusions: [],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '39': {
 id: '39',
 title: 'Splendour Himalaya Shillong - Guwahati 6 Days Tour',
 image: '/assets/mizoram1.avif',
 overview: {
 duration: '5 Nights / 6 Days',
 destination: 'Guwahati, Shillong, Cherrapunji, Dawki, Nohkalikai Falls',
 activities: 'Caving, Museums, Sightseeing',
 themes: 'Hill Stations & Valleys, Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'On Request',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Guwahati Airport / Rly Station – Shillong (100 kms / 3 hrs.)',
 description: 'On arrival at Guwahati Airport / Railway Station & transfer to Shillong (4,900 ft.), which is called \'Scotland of the East" (100 kms 3 hrs). Enroute visit Umium Lake, a majestic placid lake with its surrounding sylvan hills. On arrival at Shillong, check in at your hotel. Overnight stay at Shillong.'
 },
 {
 day: 'Day 2',
 title: 'Excursion to Cherrapunjee (60 kms / 3 hrs one way.)',
 description: 'After an early breakfast, proceed for a full-day excursion to Cherrapunjee (4,400 ft.), renowned as one of the wettest places on earth. En route, stop to admire the cascading Elephanta Falls, soak in the breathtaking vistas from Mawdok–Dympep Valley Viewpoint, and explore the unique Garden of Caves. On arrival, witness some of Cherrapunjee’s most spectacular natural wonders including the majestic Nohkalikai Falls (the tallest plunge waterfall in India), the enchanting Nohsngithiang Falls (Seven Sisters Falls), and the fascinating limestone formations inside the Mawsmai Caves. In the evening, drive back to Shillong for an Overnight stay at Shillong.'
 },
 {
 day: 'Day 3',
 title: 'Excursion to Dawki & Mawlynnong (120 kms / 4-5 hrs. One Way)',
 description: 'After early breakfast drive to Dawki, a small town near India Bangladesh border. Enjoy breathtaking view of the Umangot River. Later proceed to Mawlynnong – “Asia’s Cleanest Village”. Mawlynnong offers many interesting sights such as the living root bridge and another strange natural phenomenon of a boulder balancing on another small rock. Evening drive back to Shillong. Stay overnight at your hotel in Shillong.'
 },
 {
 day: 'Day 4',
 title: 'Shillong Sightseeing – Guwahati (100 kms / 3 hrs.)',
 description: 'After breakfast visit Don Bosco Museum (Sunday Closed) Ward’s Lake & Lady Hydari Park. Thereafter, drive to Guwahati. Arrive and check in at hotel. In evening we suggest an optional tour of Golden sunset cruise on the Brahmaputra (Direct Payment by own). Overnight stay at Guwahati'
 },
 {
 day: 'Day 5',
 title: 'Guwahati Local Sightseeing',
 description: 'After breakfast out to visit Kamakhya Temple (Notes -Timing 08:00 A.M till 01:00 P.M & 3:00 P.M till its gets dark), Tirupati Balaji Temple, Nabagraha Temple, Assam State Museum (Closed on Monday), State Zoo cum Botanical Garden, Regional Science Centre and Sukreswar Temple (The 6th Jyotirlinga of Shiva). Overnight stay at Guwahati.'
 },
 {
 day: 'Day 6',
 title: 'Hotel – Guwahati Airport / Rly Station',
 description: 'After breakfast check out from hotel & transfer to Guwahati Airport / Railway Station for your onward journey.'
 }
 ],
 inclusions: [
 'CP (Room + Breakfast)'
 ],
 exclusions: [],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '40': {
 id: '40',
 title: 'The Rhino Land - Kaziranga - Guwahati Tour',
 image: '/assets/assam1.avif',
 overview: {
 duration: '3 Nights / 4 Days',
 destination: 'Guwahati, Kaziranga, Kaziranga National Park',
 activities: 'Jungle Safari, Jeep Safari, Elephant Safari, Sightseeing',
 themes: 'Wildlife, Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'On Request',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Guwahati Airport / Rly Station – Kaziranga National Park (220 kms / 5 hrs.)',
 description: 'On arrival at Guwahati Airport / Railway Station meet by our driver & transfer to Kaziranga National Park, the home of “One Horned Rhinoceros”, Check in at your hotel. Evening is free for leisure. Overnight stay at Kaziranga.'
 },
 {
 day: 'Day 2',
 title: 'Kaziranga National Park',
 description: 'Early morning explores any one zone of Kaziranga National Park on back of Elephant. Apart from the Rhino, other species found are Hog Deer, Swamp Deer, Wild Buffalo, Elephants and if you are lucky then tiger also. It is also home to pelicans, storks and darters as there are a number of water bodies inside the Park. Return to the resort for breakfast. In the afternoon enjoy jeep safari through the National Park, later visit Kaziranga Orchid Park. Return to the hotel. Overnight stay at Kaziranga.\n\nImportant note: Elephant rides are all regulated and controlled by the forest Dept. Govt. of Assam. We do not have any control on the booking. Elephant rides & Jeep safari are subject to availability only.'
 },
 {
 day: 'Day 3',
 title: 'Kaziranga National Park – Guwahati (220 kms / 5 hrs.)',
 description: 'After breakfast drive to Guwahati, enroute visit Maha Mritunjay Temple in Nagaon. Arrive and check in at your hotel. In evening we suggest an optional tour of Golden sunset cruise on the Brahmaputra (Direct Payment by own). Overnight stay at Guwahati.'
 },
 {
 day: 'Day 4',
 title: 'Hotel – Guwahati Airport / Rly Station',
 description: 'After breakfast visit Kamakhya Temple (Notes -Timing 08:00 A.M till 01:00 P.M & 3:00 P.M till its gets dark). Transfer to Guwahati Airport / Railway Station for your onward journey.\n\nNote: Temple visit will depend on your departure time. It May be done on previous day.'
 }
 ],
 inclusions: [
 'CP (Room + Breakfast)'
 ],
 exclusions: [],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '41': {
 id: '41',
 title: 'Ayodhya Flight Package From Chennai 1 Night - 2 Days',
 image: '/assets/generated/ayodhya_ram_mandir_pkg.png',
 overview: {
 duration: '1 Nights / 2 Days',
 destination: 'Ayodhya',
 activities: 'Museums, Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'Rs. 18500/-',
 status: 'Inquire Now for Best Deals'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Arrival Chennai - Ayodhya',
 description: 'Departure from Chennai Airport at 09.10 a.m. Arrival Ayodhya Airport at 11.35 a.m. Transfer to hotel. Visit the birth place Lord Rama, Shri Ramjanma Bhoomi and Hanuman Garhi Temple. Evening visit Kanak Bhawan and Ramkatha Museum.'
 },
 {
 day: 'Day 2',
 title: 'Departure from Ayodhya',
 description: 'Morning Free time for shopping and religious activities. After Lunch starting from Ayodhya and proceed to Airport. Reaching Ayodhya Airport at 03.00 p.m. Departure from Ayodhya Airport at 05.30 p.m. Reaching Chennai Airport at 08.00 p.m.'
 }
 ],
 inclusions: [
 'Hotel',
 'Transportation by A/C Bus/Cab.',
 'One night stay at Ayodhya in A/c room.',
 'Buffet Breakfast or Fixed Menu',
 'All sightseeing and excursion as per the itinerary.',
 'Everyone must bring Original ID Proof at the time of travel.',
 'English, Hindi and Tamil Guide for entire trip.',
 'Please be at Airport 2 hours before the departure Time.'
 ],
 exclusions: [
 'Food, Port Rages, Tips, Phone Call from Rooms, Laundry, Insurance, Personal Expenses, Mineral water etc., and those not included “Inclusions” Head.'
 ],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '42': {
 id: '42',
 title: 'Madurai To Rameshwaram 1N 2D Tour',
 image: '/assets/madurai 63 package/2day/Madurai  Rameshwaram 2 day trip.png',
 overview: {
 duration: '1 Nights / 2 Days',
 destination: 'Madurai, Rameshwaram',
 activities: 'Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage'
 },
 priceDetails: {
 label: 'Starts @',
 amount: 'On Request',
 status: 'On Request'
 },
 itinerary: [
 {
 day: 'Day 1',
 title: 'Madurai - Rameswaram & Sightseeing',
 description: 'Pick up from Madurai Airport or Junction Check in cab and Journey proceeding towards Rameshwaram visiting Ramanathaswamy temple - Five Faces Lord Hanuman Temple - Kothandaramaswamy Temple - Floating Stone - Agni Theertham - Dhanushkodi till entrance - Dr. APJ Abdul Kalam Memorial - Ramar Feet - stay at Rameshwaram.'
 },
 {
 day: 'Day 2',
 title: 'Rameswaram - Madurai',
 description: 'Pickup from Hotel at Rameshwaram and journey proceeding towards Madurai visiting local places like Lord Kallalagar Temple - Palamudhirchozai - Tiruparakundram Lord Karthik Temple - Thirumalai Naicker Palace - Meenakshi Amman Temple - Gandhi Museum [If time permits] - Drop at Madurai Airport or Junction.'
 }
 ],
 inclusions: [
 'EP (No Meal)'
 ],
 exclusions: [],
 policies: {
 payment: '20% Advance Percentage of total booking amount',
 cancellation: 'Upon cancellation, refund will be made after deducting the Retention Amount.'
 }
 },
 '43': {
    id: '43',
    title: '6 Day Trip from Bangalore | Madurai, Rameshwaram, Kanyakumari, Kovalam & Trivandrum',
    image: '/assets/Tamil Nadu1.avif',
    overview: { 
      duration: '5 Nights / 6 Days', 
      destination: 'Madurai, Rameshwaram, Kanyakumari, Kovalam, Trivandrum', 
      activities: 'Sightseeing', 
      themes: 'Religious & Pilgrimage, Culture & Heritage' 
    },
    itinerary: [
      {
        day: 'Day 1',
        title: 'Pick up at 6 AM from Bangalore - Madurai sightseeing',
        description: 'Koodal algar temple, Madurai Meenakshi Amman temple.'
      },
      {
        day: 'Day 2',
        title: 'Start at 9 AM - Madurai to Rameshwaram and Rameshwaram sightseeing',
        description: 'Ramanathaswamy temple, Agniteertham, Pamban bridge, Panchmukhi hanuman mandir, Dhanushkodi.'
      },
      {
        day: 'Day 3',
        title: 'Start at 9 AM - Rameshwaram to Kanyakumari and Kanyakumari sightseeing',
        description: 'Vivekananda rock memorial, Kanyakumari beach, Sunset Point, Thiruvalluvar statue.'
      },
      {
        day: 'Day 4',
        title: 'Start at 9 AM - Kanyakumari to Kovalam and Kovalam sightseeing',
        description: 'Padmanabhapuram palace, Thanumalayan or Suchindram temple, Samudra Beach, Lighthouse Beach.'
      },
      {
        day: 'Day 5',
        title: 'Start at 9 AM - Trivandrum sightseeing',
        description: 'Anantha Padmanabha Temple, Napier Museum.'
      },
      {
        day: 'Day 6',
        title: 'Start at 8 AM - Trivandrum to Bangalore Drop',
        description: 'Post breakfast checkout from Hotel & drop.'
      }
    ],
    inclusions: [
      'Selected AC vehicle for pick up & drop and sightseeing',
      'Complimentary breakfast at selected hotel',
      'Selected category hotel for accommodation (not applicable for 1-day trips)',
      'First day breakfast is not covered as the hotel checkin timings would be at 12 PM',
      'All the sightseeing will be on a private basis in AC vehicle',
      'Entry tax, Toll, Parking charges, Driver allowance, Interstate tax if applicable',
      'Home pick up & drop - within 7 KM\'s (From our location) complimentary home pick up and drop services will be provided',
      'Total fares include GST'
    ],
    exclusions: [
      'Meals other than mentioned (Lunch & Dinner) and any beverages',
      'Local guide, Entrance fees to monuments, sight-seeing, parks and Sanctuaries and Safari charges',
      'Items of personal nature viz. tips, laundry, travel insurance, camera fees, etc.',
      'Early check-in or late checkout charges if applicable',
      'Hotel Gala dinner charges in the event of Christmas and New year eve',
      'Anything not specifically mentioned in the inclusion section'
    ],
    policies: { payment: '20% Advance Percentage', cancellation: 'Standard cancellation applies.' }
  },
  '44': {
   id: '44',
   title: '4 Day Trip from Bangalore| Madurai, Rameshwaram & Kanyakumari',
   image: '/assets/himachal.avif',
   overview: { duration: '3 Nights / 4 Days', destination: 'Madurai, Rameshwaram, Kanyakumari', activities: 'Sightseeing', themes: 'Religious & Pilgrimage', transport: 'Private Cab' },
   priceDetails: { label: 'Starts @', amount: 'Rs. 12700/-', status: 'On Request' },
   itinerary: [
     {
       day: 'Day 1',
       title: 'Pick up from Bangalore at 6 AM - Madurai sightseeing',
       description: 'Koodal algar temple, Madurai Meenakshi Amman temple.'
     },
     {
       day: 'Day 2',
       title: 'Start at 9 AM - Madurai to Rameshwaram and Rameshwaram sightseeing',
       description: 'Ramanathaswamy temple, Agniteertham, Pamban bridge, Panchmukhi hanuman mandir, Dhanushkodi.'
     },
     {
       day: 'Day 3',
       title: 'Start at 9 AM - Rameshwaram to Kanyakumari and Kanyakumari sightseeing',
       description: 'Vivekananda rock memorial, Kanyakumari beach, Sunset Point, Tsunami monument, Thiruvalluvar statue.'
     },
     {
       day: 'Day 4',
       title: 'Start at 9 AM - Kanyakumari to Bangalore Drop',
       description: 'Post breakfast checkout from Hotel & drop.'
     }
   ],
   inclusions: [
     'Selected AC vehicle for pick up & drop and sightseeing',
      'Complimentary breakfast at selected hotel',
      'Selected category hotel for accommodation (not applicable for 1-day trips)',
      'First day breakfast is not covered as the hotel checkin timings would be at 12 PM.',
      'All the sightseeing will be on a private basis in AC vehicle',
      'Entry tax, Toll, Parking charges, Driver allowance, Interstate tax if applicable',
      "Home pick up & drop - within 7 KM's (From our location - Rajajinagar 6th Block) complimentary home pick up and drop services will be provided. Anything above than this will have extra charges",
      'Total fares include GST'
    ],
    exclusions: [
      'Meals other than mentioned (Lunch & Dinner) and any beverages',
      'Local guide, Entrance fees to monuments, sight-seeing, parks and Sanctuaries and Safari charges',
      'Items of personal nature viz. tips, laundry, travel insurance, camera fees, etc.',
      'Early check-in or late checkout charges if applicable',
      'Hotel Gala dinner charges in the event of Christmas and New year eve',
      'Anything not specifically mentioned in the inclusion section'
    ],
    policies: { payment: 'No Down Payment, No Cost EMI on 3/6 months tenure available.', cancellation: 'Standard cancellation applies.' }
  },
  '45': {
    id: '45',
    title: '9 Days Trip from Madurai | Madurai, Trichy, Thanjavur, Kumbakonam, Rameshwaram, Kanyakumari, Kovalam & Trivandrum',
    image: '/assets/megalaya1.avif',
    overview: { duration: '8 Nights / 9 Days', destination: 'Madurai, Trichy, Thanjavur, Kumbakonam, Rameshwaram, Kanyakumari, Kovalam, Trivandrum', activities: 'Sightseeing', themes: 'Religious & Pilgrimage, Culture & Heritage' },
    priceDetails: { label: 'Starts @', amount: 'Rs. 34495/-', status: 'On Request' },
    itinerary: [{ day: 'Day 1', title: 'Arrival', description: 'Arrival and transfer to hotel.' }, { day: 'Day 2-9', title: 'Sightseeing', description: 'Guided tours as per itinerary.' }],
    inclusions: ['Hotel', 'Transportation by A/C Bus/Cab.', 'Buffet Breakfast', 'All sightseeing as per the itinerary.'],
    exclusions: ['Personal Expenses'],
    policies: { payment: '20% Advance Percentage', cancellation: 'Standard cancellation applies.' }
  }
};

export const getPackageDisplayTitle = (p: any): string => {
  if (!p) return '';
  if (p.keywords) {
    const firstKeyword = p.keywords.split(',')[0].trim();
    if (firstKeyword.includes('→') || firstKeyword.includes('–') || firstKeyword.includes('to')) {
      return firstKeyword;
    }
  }
  return p.title;
};

export const getPackageCategory = (pkg: any) => {
  if (!pkg) return { name: 'Tours', slug: 'tours' };
  
  const idNum = parseInt(pkg.id);
  const titleLower = (pkg.title || '').toLowerCase();
  const destLower = (pkg.overview?.destination || '').toLowerCase();
  
  // Madurai Tours: 2025 to 2089, or containing "madurai"
  if ((idNum >= 2025 && idNum <= 2089) || titleLower.includes('madurai') || destLower.includes('madurai')) {
    return { name: 'Madurai Tours', slug: 'madurai-tours' };
  }
  
  // Shirdi Tours
  if (titleLower.includes('shirdi') || destLower.includes('shirdi') || (idNum >= 2011 && idNum <= 2024)) {
    return { name: 'Shirdi Tours', slug: 'shirdi-tours' };
  }
  
  // Varanasi Tours
  if (titleLower.includes('varanasi') || titleLower.includes('kasi') || destLower.includes('varanasi') || (idNum >= 2001 && idNum <= 2010)) {
    return { name: 'Varanasi Tours', slug: 'varanasi-tours' };
  }
  
  // Ayodhya Tours
  if (titleLower.includes('ayodhya') || destLower.includes('ayodhya')) {
    return { name: 'Ayodhya Tours', slug: 'ayodhya-tours' };
  }
  
  // Rameshwaram Tours
  if (titleLower.includes('rameshwaram') || destLower.includes('rameshwaram') || idNum === 42) {
    return { name: 'Rameshwaram Tours', slug: 'rameshwaram-tours' };
  }
  
  // Kanyakumari Tours
  if (titleLower.includes('kanyakumari') || destLower.includes('kanyakumari')) {
    return { name: 'Kanyakumari Tours', slug: 'kanyakumari-tours' };
  }
  
  // Kerala Tours
  const keralaKeywords = ['munnar', 'thekkady', 'alleppey', 'vagamon', 'valparai', 'kumarakom', 'marayoor', 'kerala'];
  if (keralaKeywords.some(kw => titleLower.includes(kw) || destLower.includes(kw))) {
    return { name: 'Kerala Tours', slug: 'kerala-tours' };
  }
  
  // Fallback: detect single words in destination or title
  if (destLower.includes('pune')) return { name: 'Pune Tours', slug: 'pune-tours' };
  if (destLower.includes('cherrapunji')) return { name: 'Cherrapunji Tours', slug: 'cherrapunji-tours' };
  if (destLower.includes('shillong')) return { name: 'Shillong Tours', slug: 'shillong-tours' };
  if (destLower.includes('guwahati')) return { name: 'Guwahati Tours', slug: 'guwahati-tours' };
  
  return { name: 'Tours', slug: 'tours' };
};

export const getPackageLink = (pkg: any) => {
  if (!pkg) return '/tour-packages';
  const categoryInfo = getPackageCategory(pkg);
  
  // Decide route prefix based on category
  const northIndiaKeywords = ['varanasi', 'shirdi', 'ayodhya', 'guwahati', 'pune', 'cherrapunji', 'shillong'];
  const routePrefix = northIndiaKeywords.includes(categoryInfo.slug.replace('-tours', '')) 
    ? 'north-india-tour-packages' 
    : 'tour-packages';
    
  return `/${routePrefix}/${categoryInfo.slug}/${generateSlug(pkg.title)}`;
};

const PackageDetails = () => {
  const { packageSlug } = useParams<{ packageSlug: string }>();
  const [activeTab, setActiveTab] = useState<'itinerary' | 'inclusions' | 'policies'>('itinerary');

    const pkgRaw = packageSlug 
    ? Object.values(packagesDatabase).find(p => {
        if (generateSlug(p.title) === packageSlug) return true;
        const displayTitle = getPackageDisplayTitle(p);
        if (generateSlug(displayTitle) === packageSlug) return true;
        return false;
      }) 
    : packagesDatabase['2000'];
  const pkg = pkgRaw ? { ...pkgRaw, title: getPackageDisplayTitle(pkgRaw) } : undefined;
  const categoryInfo = getPackageCategory(pkg);

  useSEO(
    pkg ? pkg.title : 'Tour Package Details',
    pkg ? `Explore the best ${pkg.title} with Logaa Holidays.` : 'Tour Package Details',
    pkg && pkg.keywords ? pkg.keywords : 'tour packages, logaa holidays'
  );

  const getRegionLink = () => {
    const title = pkg?.title?.toLowerCase() || '';
    const dest = pkg?.overview?.destination?.toLowerCase() || '';
    const northIndiaKeywords = ['varanasi', 'shirdi', 'ayodhya', 'guwahati', 'kasi', 'prayagraj', 'gaya', 'north'];
    
    if (northIndiaKeywords.some(keyword => title.includes(keyword) || dest.includes(keyword))) {
      return "/north-india-tour-packages";
    }
    return "/south-india-package";
  };

  const isCustomBanner = pkg?.heroImage?.includes('1918x642') || pkg?.heroImage?.toLowerCase().includes('heroseaction') || pkg?.heroImage?.toLowerCase().includes('kerala');

 if (!pkg) return <div className="min-h-screen flex items-center justify-center">Package not found.</div>;
 return (
 <div className="bg-[var(--color-bg-luxury)] min-h-screen pb-24 font-sans">
 
 {/* Hero Banner Section */}
 <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-slate-900">
 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 z-10" />
 <img 
 src={(pkg as any).heroImage || pkg.image} 
 alt={pkg.title} 
 className="absolute inset-0 w-full h-full object-cover"
 />
 <div className="absolute inset-0 z-20 flex flex-col justify-end pb-12 px-6 max-w-7xl mx-auto">
 <div className="flex flex-wrap items-center gap-2 text-white/90 text-sm font-semibold mb-4 drop-shadow-md">
 <Link to="/" className="hover:text-white transition-colors">Home</Link>
 <ChevronRight className="w-4 h-4" />
 <Link to={getRegionLink()} className="hover:text-white transition-colors">Tour Packages</Link>
 <ChevronRight className="w-4 h-4" />
 <Link to={`/tour-packages/${categoryInfo.slug}`} className="hover:text-white transition-colors">{categoryInfo.name}</Link>
 <ChevronRight className="w-4 h-4" />
 <span className="text-white font-bold">Package Details</span>
 </div>
 <h1 className="text-3xl md:text-5xl font-display font-bold text-white max-w-4xl leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
 {pkg.title}
 </h1>
 <div className="flex flex-wrap gap-4 mt-6">
 <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white font-medium text-sm">
 <Clock className="w-4 h-4" /> {pkg.overview.duration}
 </div>
 <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white font-medium text-sm">
 <MapPin className="w-4 h-4" /> {pkg.overview.destination}
 </div>
 </div>
 </div>
 </div>

 {/* Main Content Area */}
 <div className="max-w-7xl mx-auto px-6 mt-12">
 <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
 
 {/* Left Column (Details) */}
 <div className="flex-1">
 
 {/* Quick Overview Cards */}
 <div className={`grid grid-cols-2 ${pkg.overview.transport ? 'md:grid-cols-5' : 'md:grid-cols-4'} gap-4 mb-12`}>
 <div className="bg-white p-4 rounded-2xl ,0,0,0.05),-10px_-10px_30px_rgba(255,255,255,0.8)] border border-white flex flex-col items-center text-center justify-center">
 <Clock className="w-6 h-6 text-[var(--color-blue-ocean)] mb-2" />
 <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Duration</p>
 <p className="text-sm font-bold text-slate-800">{pkg.overview.duration}</p>
 </div>
 <div className="bg-white p-4 rounded-2xl ,0,0,0.05),-10px_-10px_30px_rgba(255,255,255,0.8)] border border-white flex flex-col items-center text-center justify-center">
 <MapPin className="w-6 h-6 text-orange-500 mb-2" />
 <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Destination</p>
 <p className="text-sm font-bold text-slate-800">{pkg.overview.destination}</p>
 </div>
 <div className="bg-white p-4 rounded-2xl ,0,0,0.05),-10px_-10px_30px_rgba(255,255,255,0.8)] border border-white flex flex-col items-center text-center justify-center">
 <Calendar className="w-6 h-6 text-[var(--color-primary-forest)] mb-2" />
 <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Activities</p>
 <p className="text-sm font-bold text-slate-800">{pkg.overview.activities}</p>
 </div>
 <div className="bg-white p-4 rounded-2xl ,0,0,0.05),-10px_-10px_30px_rgba(255,255,255,0.8)] border border-white flex flex-col items-center text-center justify-center">
 <Info className="w-6 h-6 text-purple-500 mb-2" />
 <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Themes</p>
 <p className="text-sm font-bold text-slate-800">{pkg.overview.themes}</p>
 </div>
 {pkg.overview.transport && (
   <div className="bg-white p-4 rounded-2xl ,0,0,0.05),-10px_-10px_30px_rgba(255,255,255,0.8)] border border-white flex flex-col items-center text-center justify-center">
     <Car className="w-6 h-6 text-[var(--color-primary-emerald)] mb-2" />
     <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Transport</p>
     <p className="text-sm font-bold text-slate-800">{pkg.overview.transport}</p>
   </div>
 )}

 </div>

 {/* Content Tabs Navigation */}
 <div className="flex gap-4 border-b border-slate-200 mb-8 overflow-x-auto pb-2">
 <button 
 onClick={() => setActiveTab('itinerary')}
 className={`pb-2 px-2 text-sm md:text-base font-bold whitespace-nowrap transition-colors ${activeTab === 'itinerary' ? 'text-[var(--color-blue-ocean)] border-b-2 border-[var(--color-blue-ocean)]' : 'text-slate-500 hover:text-slate-800'}`}
 >
 Tour Itinerary
 </button>
 <button 
 onClick={() => setActiveTab('inclusions')}
 className={`pb-2 px-2 text-sm md:text-base font-bold whitespace-nowrap transition-colors ${activeTab === 'inclusions' ? 'text-[var(--color-blue-ocean)] border-b-2 border-[var(--color-blue-ocean)]' : 'text-slate-500 hover:text-slate-800'}`}
 >
 Inclusions & Exclusions
 </button>
 <button 
 onClick={() => setActiveTab('policies')}
 className={`pb-2 px-2 text-sm md:text-base font-bold whitespace-nowrap transition-colors ${activeTab === 'policies' ? 'text-[var(--color-blue-ocean)] border-b-2 border-[var(--color-blue-ocean)]' : 'text-slate-500 hover:text-slate-800'}`}
 >
 Policies & Terms
 </button>
 </div>

 {/* Tab Contents */}
 <div className="bg-white rounded-3xl p-6 md:p-10 ,0,0,0.05),-10px_-10px_30px_rgba(255,255,255,0.8),inset_2px_2px_5px_rgba(255,255,255,1)] border border-white">
 
 {/* Itinerary Tab */}
 {activeTab === 'itinerary' && (
 <div className="space-y-8">
 <h3 className="text-2xl font-bold text-[var(--color-neutral-black)] mb-6">Detailed Itinerary</h3>
 <div className="relative border-l-2 border-slate-200 ml-3 md:ml-4 space-y-10">
 {pkg.itinerary.map((day: any, idx: number) => (
 <div key={idx} className="relative pl-8 md:pl-10">
 {/* Timeline Node */}
 <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-[var(--color-primary-forest)] border-4 border-white " />
 
 <div className="bg-slate-50 rounded-2xl p-6 ,0,0,0.02),inset_-2px_-2px_5px_rgba(255,255,255,1)] border border-white">
 <span className="inline-block px-3 py-1 bg-[var(--color-blue-ocean)]/10 text-[var(--color-blue-ocean)] rounded-lg text-xs font-bold mb-3 tracking-wide">
 {day.day}
 </span>
 <h4 className="text-xl font-bold text-slate-800 mb-3">{day.title}</h4>
 {day.description && (
   <p className="text-slate-600 leading-relaxed text-sm md:text-base whitespace-pre-line leading-8">{renderClickableText(day.description)}</p>
 )}
 {(day as any).activities && Array.isArray((day as any).activities) && (
   <ul className="space-y-3 mt-4">
     {(day as any).activities.map((activity: string, actIdx: number) => {
       const cleanActivity = activity.replace(/^[•✅✔️\t\s]+/, '');
       return (
         <li key={actIdx} className="text-slate-600 leading-relaxed text-sm md:text-base flex items-start gap-3">
           <span className="w-2 h-2 rounded-full bg-[var(--color-primary-forest)] mt-2 flex-shrink-0" />
           <span className="leading-7">{renderClickableText(cleanActivity)}</span>
         </li>
       );
     })}
   </ul>
 )}
 </div>
 </div>
 ))}
 </div>
 </div>
 )}

 {/* Inclusions & Exclusions Tab */}
 {activeTab === 'inclusions' && (
  <div className="space-y-12">
    <div className="grid md:grid-cols-2 gap-10">
 <div>
 <h3 className="text-xl font-bold text-[var(--color-neutral-black)] mb-6 flex items-center gap-2">
 <CheckCircle2 className="w-6 h-6 text-[var(--color-primary-forest)]" />
 Inclusions
 </h3>
 <ul className="space-y-4">
 {pkg.inclusions.map((item: any, i: number) => (
 <li key={i} className="flex items-start gap-3">
 <CheckCircle2 className="w-5 h-5 text-[var(--color-primary-forest)] flex-shrink-0 mt-0.5 opacity-80" />
 <span className="text-slate-600 text-sm md:text-base leading-relaxed">{item}</span>
 </li>
 ))}
 </ul>
 </div>
 <div>
 <h3 className="text-xl font-bold text-[var(--color-neutral-black)] mb-6 flex items-center gap-2">
 <XCircle className="w-6 h-6 text-red-500" />
 Exclusions
 </h3>
 <ul className="space-y-4">
 {pkg.exclusions.map((item: any, i: number) => (
 <li key={i} className="flex items-start gap-3">
 <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5 opacity-80" />
 <span className="text-slate-600 text-sm md:text-base leading-relaxed">{item}</span>
 </li>
 ))}
 
 </ul>
 </div>
 </div>

 {/* Accommodation & Languages */}
 <div className="grid md:grid-cols-2 gap-10 mt-12 pt-10 border-t border-slate-100">
 <div>
 <h3 className="text-xl font-bold text-[var(--color-neutral-black)] mb-6 flex items-center gap-2">
 <Home className="w-6 h-6 text-[var(--color-primary-forest)]" />
 Accommodation Options
 </h3>
 <div className="space-y-4">
 <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-[0_4px_10px_rgba(0,0,0,0.02)]">
 <div className="flex text-amber-400 mb-2">
 <Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/>
 </div>
 <h4 className="font-bold text-slate-800 text-base mb-2">2 Star Hotels</h4>
 <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside ml-1">
 <li>Comfortable Rooms</li>
 <li>Complimentary Breakfast</li>
 <li>Free Wi-Fi (subject to hotel policy)</li>
 </ul>
 </div>
 <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-[0_4px_10px_rgba(0,0,0,0.02)]">
 <div className="flex text-amber-400 mb-2">
 <Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/>
 </div>
 <h4 className="font-bold text-slate-800 text-base mb-2">3 Star Hotels</h4>
 <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside ml-1">
 <li>Deluxe Rooms</li>
 <li>Complimentary Breakfast</li>
 <li>Restaurant & Room Service</li>
 <li>Free Wi-Fi</li>
 </ul>
 </div>
 <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-[0_4px_10px_rgba(0,0,0,0.02)]">
 <div className="flex text-amber-400 mb-2">
 <Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/>
 </div>
 <h4 className="font-bold text-slate-800 text-base mb-2">4 Star Hotels</h4>
 <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside ml-1">
 <li>Premium Rooms</li>
 <li>Multi-Cuisine Restaurant</li>
 <li>Modern Amenities & Free Wi-Fi</li>
 </ul>
 </div>
 </div>
 </div>
 
 <div>
 <h3 className="text-xl font-bold text-[var(--color-neutral-black)] mb-6 flex items-center gap-2">
 <MessageSquare className="w-6 h-6 text-[var(--color-primary-forest)]" />
 Driver Languages
 </h3>
 <ul className="space-y-4 mb-10">
 <li className="flex items-start gap-3">
 <CheckCircle2 className="w-5 h-5 text-[var(--color-primary-forest)] flex-shrink-0 mt-0.5 opacity-80" />
 <span className="text-slate-600 text-sm md:text-base leading-relaxed">Tamil</span>
 </li>
 <li className="flex items-start gap-3">
 <CheckCircle2 className="w-5 h-5 text-[var(--color-primary-forest)] flex-shrink-0 mt-0.5 opacity-80" />
 <span className="text-slate-600 text-sm md:text-base leading-relaxed">English</span>
 </li>
 <li className="flex items-start gap-3">
 <CheckCircle2 className="w-5 h-5 text-[var(--color-primary-forest)] flex-shrink-0 mt-0.5 opacity-80" />
 <span className="text-slate-600 text-sm md:text-base leading-relaxed">Hindi (Subject to Availability)</span>
 </li>
 </ul>

 <h3 className="text-xl font-bold text-[var(--color-neutral-black)] mb-6 flex items-center gap-2">
 <ShieldCheck className="w-6 h-6 text-[var(--color-primary-forest)]" />
 Why Choose Logaa Holidays?
 </h3>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
 {['Trusted Tour Operator', 'Well-Maintained Vehicles', 'Experienced Drivers', 'Handpicked Hotels', 'Transparent Pricing', '24×7 Support'].map((reason, i) => (
 <div key={i} className="flex items-center gap-2 text-sm text-slate-600 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100 shadow-sm">
 <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
 <span className="font-bold text-slate-700">{reason}</span>
 </div>
 ))}
 </div>
     </div>
  </div>
</div>
)}

{/* Policies Tab */}
 {activeTab === 'policies' && (
 <div className="space-y-8">
 <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
 <h3 className="text-lg font-bold text-[var(--color-blue-ocean)] mb-3 flex items-center gap-2">
 <Info className="w-5 h-5" />
 Payment Terms
 </h3>
 <p className="text-slate-600 text-sm md:text-base ml-7">
 <span className="font-bold text-slate-800">* </span>
 {pkg.policies?.payment || "20% Advance at the time of booking. Balance before departure."}
 </p>
 </div>
 
 <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100">
 <h3 className="text-lg font-bold text-red-600 mb-3 flex items-center gap-2">
 <Info className="w-5 h-5" />
 Cancellation & Refund Policy
 </h3>
 <p className="text-slate-600 text-sm md:text-base ml-7">
 <span className="font-bold text-slate-800">* </span>
 {pkg.policies?.cancellation || "Cancellations made 7+ days before: Full refund. Within 3-7 days: 50% refund. Less than 3 days: No refund."}
 </p>
 </div>
 </div>
 )}

 </div>
 </div>

 {/* Right Column (Sticky Sidebar) */}
 <div className="w-full lg:w-[380px] flex-shrink-0">
 <div className="sticky top-32 space-y-6">
 
 {/* Pricing & Booking Card */}
 <PackageInquiryForm packageTitle={pkg.title} />

 <div className="mt-6 bg-white rounded-3xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08),-10px_-10px_30px_rgba(255,255,255,0.8),inset_2px_2px_5px_rgba(255,255,255,1)] border border-white flex items-start gap-4">
 <div className="w-12 h-12 rounded-full bg-[var(--color-primary-emerald)]/10 flex items-center justify-center flex-shrink-0">
 <Phone className="w-5 h-5 text-[var(--color-primary-emerald)]" />
 </div>
 <div>
 <p className="text-sm font-bold text-slate-800 mb-1">Need help booking?</p>
 <p className="text-xs text-slate-500 mb-2">Call our holiday experts</p>
 <a href="tel:+917397329776" className="text-[var(--color-blue-ocean)] font-bold hover:underline">
 +91 73973 29776
 </a>
 </div>
 </div>
 </div>

 </div>
 </div>

 </div>
 </div>
 );
}

export { PackageDetails };
