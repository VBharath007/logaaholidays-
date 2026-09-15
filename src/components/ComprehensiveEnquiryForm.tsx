import React, { useState } from 'react';
import {
  Send, User, Mail, MapPin, Phone, Calendar,
  Globe2, Clock, Users2, CreditCard, MessageSquare, Compass
} from 'lucide-react';

const stateDistrictsMap: Record<string, string[]> = {
  'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tiruchirappalli', 'Tirunelveli', 'Erode', 'Vellore', 'Thoothukudi', 'Dindigul', 'Thanjavur', 'Kanchipuram', 'Kanyakumari', 'Krishnagiri', 'Namakkal', 'Karur', 'Nagapattinam', 'Ramanathapuram', 'Sivagangai', 'Virudhunagar', 'Cuddalore', 'Villupuram', 'Tenkasi', 'Ranipet', 'Tirupattur', 'Ariyalur', 'Perambalur', 'Mayiladuthurai', 'Nilgiris', 'Tiruvannamalai', 'Tiruvallur', 'Dharmapuri'],
  'Kerala': ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam', 'Palakkad', 'Kannur', 'Idukki', 'Pathanamthitta', 'Alleppey', 'Wayanad', 'Kasaragod', 'Kottayam', 'Malappuram'],
  'Karnataka': ['Bangalore', 'Mysore', 'Mangalore', 'Hubli', 'Belgaum', 'Shimoga', 'Dharwad', 'Tumkur', 'Chitradurga', 'Coorg', 'Hassan', 'Chikmagalur', 'Raichur', 'Bijapur', 'Gulbarga', 'Bellary', 'Udupi', 'Dakshina Kannada', 'Uttara Kannada', 'Kolar', 'Bagalkot', 'Gadag', 'Koppal', 'Haveri', 'Yadgir', 'Chamrajnagar', 'Mandya', 'Ramnagara', 'Bidar', 'Chikkaballapur'],
  'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Tirupati', 'Guntur', 'Kurnool', 'Nellore', 'Rajahmundry', 'Kadapa', 'Anantapur', 'Kakinada', 'Eluru', 'Ongole', 'Chittoor', 'Srikakulam', 'Vizianagaram'],
  'Telangana': ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Khammam', 'Rangareddy', 'Medak', 'Nalgonda', 'Mahbubnagar', 'Adilabad'],
  'Maharashtra': ['Mumbai', 'Pune', 'Nashik', 'Nagpur', 'Aurangabad', 'Shirdi', 'Kolhapur', 'Solapur', 'Thane', 'Raigad', 'Satara', 'Ratnagiri', 'Sangli', 'Ahmednagar', 'Jalgaon', 'Latur', 'Osmanabad', 'Beed', 'Nanded', 'Akola', 'Amravati', 'Buldhana', 'Washim', 'Yavatmal', 'Gondiya', 'Bhandara', 'Chandrapur', 'Gadchiroli', 'Wardha', 'Hingoli', 'Parbhani', 'Dhule', 'Nandurbar'],
  'Rajasthan': ['Jaipur', 'Jodhpur', 'Udaipur', 'Jaisalmer', 'Bikaner', 'Ajmer', 'Alwar', 'Bharatpur', 'Kota', 'Sikar', 'Tonk', 'Barmer', 'Pali', 'Nagaur', 'Churu', 'Hanumangarh', 'Jhunjhunu', 'Sawai Madhopur'],
  'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Gandhinagar', 'Somnath', 'Dwarka', 'Kutch', 'Anand', 'Mehsana', 'Patan', 'Sabarkantha', 'Banaskantha', 'Porbandar'],
  'Goa': ['North Goa', 'South Goa'],
  'Uttar Pradesh': ['Lucknow', 'Varanasi', 'Agra', 'Prayagraj', 'Kanpur', 'Ayodhya', 'Mathura', 'Vrindavan', 'Meerut', 'Ghaziabad', 'Noida', 'Bareilly', 'Moradabad', 'Aligarh', 'Saharanpur', 'Gorakhpur', 'Jhansi', 'Muzaffarnagar', 'Bulandshahr'],
  'Madhya Pradesh': ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain', 'Khajuraho', 'Pachmarhi', 'Orchha', 'Satna', 'Rewa', 'Sagar', 'Dewas', 'Ratlam', 'Chhindwara'],
  'Delhi': ['New Delhi', 'Central Delhi', 'North Delhi', 'South Delhi', 'East Delhi', 'West Delhi'],
  'West Bengal': ['Kolkata', 'Darjeeling', 'Siliguri', 'Howrah', 'Durgapur', 'Asansol', 'Murshidabad', 'Bardhaman', 'Jalpaiguri', 'Cooch Behar'],
  'Himachal Pradesh': ['Shimla', 'Manali', 'Dharamshala', 'Kullu', 'Mandi', 'Chamba', 'Solan', 'Sirmour', 'Kinnaur', 'Lahaul & Spiti'],
  'Uttarakhand': ['Dehradun', 'Rishikesh', 'Haridwar', 'Nainital', 'Mussoorie', 'Jim Corbett', 'Kedarnath', 'Badrinath', 'Auli', 'Lansdowne'],
  'Jammu & Kashmir': ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonamarg', 'Jammu', 'Leh', 'Kargil'],
  'Punjab': ['Amritsar', 'Ludhiana', 'Chandigarh', 'Jalandhar', 'Patiala', 'Bathinda', 'Anandpur Sahib'],
  'Haryana': ['Gurugram', 'Faridabad', 'Ambala', 'Panipat', 'Kurukshetra', 'Karnal', 'Rohtak'],
  'Bihar': ['Patna', 'Gaya', 'Bodh Gaya', 'Muzaffarpur', 'Bhagalpur', 'Nalanda', 'Rajgir', 'Vaishali'],
  'Odisha': ['Bhubaneswar', 'Puri', 'Cuttack', 'Konark', 'Sambalpur', 'Rourkela', 'Berhampur'],
  'Assam': ['Guwahati', 'Kaziranga', 'Jorhat', 'Dibrugarh', 'Silchar', 'Nagaon', 'Tezpur'],
  'Meghalaya': ['Shillong', 'Cherrapunji', 'Dawki', 'Mawlynnong', 'Tura'],
  'Sikkim': ['Gangtok', 'Pelling', 'Lachung', 'Lachen', 'Ravangla', 'Namchi'],
  'Andaman & Nicobar': ['Port Blair', 'Havelock Island', 'Neil Island', 'Baratang', 'Ross Island'],
};

export interface ComprehensiveEnquiryFormProps {
  defaultCountry?: string;
  defaultState?: string;
  defaultDestination?: string;
}

export function ComprehensiveEnquiryForm({
  defaultCountry = '',
  defaultState = '',
  defaultDestination = '',
}: ComprehensiveEnquiryFormProps = {}) {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [tourCountry, setTourCountry] = useState(defaultCountry);
  const [selectedState, setSelectedState] = useState(defaultState);
  const [selectedDestination, setSelectedDestination] = useState(defaultDestination);
  const [locState, setLocState] = useState('');
  const [locCity, setLocCity] = useState('');

  React.useEffect(() => {
    if (defaultCountry) setTourCountry(defaultCountry);
    if (defaultState) setSelectedState(defaultState);
    if (defaultDestination) setSelectedDestination(defaultDestination);
  }, [defaultCountry, defaultState, defaultDestination]);

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

      <div className="p-8 md:p-12 relative z-10 mb-10">

        <form onSubmit={submitHandler} className="space-y-12">

          {/* SECTION 1: Trip Requirements */}
          <div className="relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md">
                <Compass className="w-6 h-6 text-[var(--color-brand-orange)]" />
              </div>

              <h4 className="text-2xl font-bold text-white font-display">
                01. Trip Requirements
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Tour Country */}
              <div className="relative group">
                <label className={labelClasses('tourCountry')}>
                  Tour Country <span className="text-red-400">*</span>
                </label>

                <div className="relative">
                  <Globe2 className={iconClasses('tourCountry')} />

                  <select
                    className={inputClasses('tourCountry') + " appearance-none"}
                    value={tourCountry}
                    onFocus={() => setFocusedField('tourCountry')}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => {
                      setTourCountry(e.target.value);
                      setSelectedState('');
                      setSelectedDestination('');
                    }}
                    required
                  >
                    <option
                      value=""
                      className="bg-[var(--color-deep-teal)] text-white"
                    >
                      Select Country...
                    </option>

                    <option
                      value="India"
                      className="bg-[var(--color-deep-teal)] text-white"
                    >
                      India
                    </option>

                    <option
                      value="International"
                      className="bg-[var(--color-deep-teal)] text-white"
                    >
                      International
                    </option>
                  </select>
                </div>
              </div>

              {/* India: State Dropdown */}
              {tourCountry === 'India' && (
                <div className="relative group">
                  <label className={labelClasses('state')}>
                    State <span className="text-red-400">*</span>
                  </label>

                  <div className="relative">
                    <MapPin className={iconClasses('state')} />

                    <select
                      className={inputClasses('state') + " appearance-none"}
                      value={selectedState}
                      onFocus={() => setFocusedField('state')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => {
                        setSelectedState(e.target.value);
                        setSelectedDestination('');
                      }}
                      required
                    >
                      <option
                        value=""
                        className="bg-[var(--color-deep-teal)] text-white"
                      >
                        Select State...
                      </option>

                      {Object.keys(stateDistrictsMap).map((state) => (
                        <option
                          key={state}
                          value={state}
                          className="bg-[var(--color-deep-teal)] text-white"
                        >
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* India: District / Destination Dropdown */}
              {tourCountry === 'India' && (
                <div className="relative group">
                  <label className={labelClasses('cityToTravel')}>
                    Destination City <span className="text-red-400">*</span>
                  </label>

                  <div className="relative">
                    <MapPin className={iconClasses('cityToTravel')} />

                    <select
                      className={inputClasses('cityToTravel') + " appearance-none"}
                      value={selectedDestination}
                      onFocus={() => setFocusedField('cityToTravel')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setSelectedDestination(e.target.value)}
                      required
                    >
                      <option
                        value=""
                        className="bg-[var(--color-deep-teal)] text-white"
                      >
                        {selectedState
                          ? `Select District in ${selectedState}...`
                          : 'Select State first...'}
                      </option>

                      {(stateDistrictsMap[selectedState] || []).map((district) => (
                        <option
                          key={district}
                          value={district}
                          className="bg-[var(--color-deep-teal)] text-white"
                        >
                          {district}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* International: Destination Dropdown */}
              {tourCountry === 'International' && (
                <div className="relative group">
                  <label className={labelClasses('cityToTravel')}>
                    Destination <span className="text-red-400">*</span>
                  </label>

                  <div className="relative">
                    <MapPin className={iconClasses('cityToTravel')} />

                    <select
                      className={inputClasses('cityToTravel') + " appearance-none"}
                      value={selectedDestination}
                      onFocus={() => setFocusedField('cityToTravel')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setSelectedDestination(e.target.value)}
                      required
                    >
                      <option
                        value=""
                        className="bg-[var(--color-deep-teal)] text-white"
                      >
                        Select Destination...
                      </option>

                      <option
                        value="Malaysia"
                        className="bg-[var(--color-deep-teal)] text-white"
                      >
                        Malaysia
                      </option>

                      <option
                        value="Singapore"
                        className="bg-[var(--color-deep-teal)] text-white"
                      >
                        Singapore
                      </option>

                      <option
                        value="Bali"
                        className="bg-[var(--color-deep-teal)] text-white"
                      >
                        Bali
                      </option>

                      <option
                        value="Thailand"
                        className="bg-[var(--color-deep-teal)] text-white"
                      >
                        Thailand
                      </option>

                      <option
                        value="Sri Lanka"
                        className="bg-[var(--color-deep-teal)] text-white"
                      >
                        Sri Lanka
                      </option>
                    </select>
                  </div>
                </div>
              )}

              {/* Departure City */}
              <div className="relative group">
                <label className={labelClasses('startCity')}>
                  Departure City <span className="text-red-400">*</span>
                </label>

                <div className="relative">
                  <MapPin className={iconClasses('startCity')} />

                  <input
                    type="text"
                    name="startCity"
                    placeholder="Leaving from..."
                    className={inputClasses('startCity')}
                    onFocus={() => setFocusedField('startCity')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                </div>
              </div>

              {/* Expected Travel Date */}
              <div className="relative group">
                <label className={labelClasses('arrivalDate')}>
                  Expected Travel Date <span className="text-red-400">*</span>
                </label>

                <div className="relative">
                  <Calendar className={iconClasses('arrivalDate')} />

                  <input
                    type="date"
                    name="expectedTravelDate"
                    min={new Date().toISOString().split('T')[0]}
                    className={
                      inputClasses('arrivalDate') + " [color-scheme:dark]"
                    }
                    onFocus={() => setFocusedField('arrivalDate')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                </div>
              </div>

              {/* Duration */}
              <div className="relative group">
                <label className={labelClasses('duration')}>
                  Duration <span className="text-red-400">*</span>
                </label>

                <div className="relative">
                  <Clock className={iconClasses('duration')} />

                  <input
                    type="text"
                    name="duration"
                    placeholder="e.g. 5 Days, 4 Nights"
                    className={inputClasses('duration')}
                    onFocus={() => setFocusedField('duration')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                </div>
              </div>

              {/* Budget Level */}
              <div className="relative group">
                <label className={labelClasses('budget')}>
                  Budget Level <span className="text-red-400">*</span>
                </label>

                <div className="relative">
                  <CreditCard className={iconClasses('budget')} />

                  <select
                    name="budgetLevel"
                    className={inputClasses('budget') + " appearance-none"}
                    onFocus={() => setFocusedField('budget')}
                    onBlur={() => setFocusedField(null)}
                    required
                  >
                    <option
                      value=""
                      className="bg-[var(--color-deep-teal)] text-white"
                    >
                      Select Level...
                    </option>

                    <option
                      value="Economy"
                      className="bg-[var(--color-deep-teal)] text-white"
                    >
                      Economy
                    </option>

                    <option
                      value="Standard"
                      className="bg-[var(--color-deep-teal)] text-white"
                    >
                      Standard
                    </option>

                    <option
                      value="Luxury"
                      className="bg-[var(--color-deep-teal)] text-white"
                    >
                      Luxury
                    </option>
                  </select>
                </div>
              </div>

              {/* Budget Amount */}
              <div className="relative group">
                <label className={labelClasses('budgetAmount')}>
                  Budget Amount
                </label>

                <div className="relative">
                  <CreditCard className={iconClasses('budgetAmount')} />

                  <input
                    type="number"
                    name="budgetAmount"
                    min="0"
                    placeholder="Enter budget amount"
                    className={inputClasses('budgetAmount')}
                    onFocus={() => setFocusedField('budgetAmount')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
              </div>

              {/* Budget Currency */}
              <div className="relative group">
                <label className={labelClasses('budgetCurrency')}>
                  Currency
                </label>

                <div className="relative">
                  <Globe2 className={iconClasses('budgetCurrency')} />

                  <select
                    name="budgetCurrency"
                    className={
                      inputClasses('budgetCurrency') + " appearance-none"
                    }
                    onFocus={() => setFocusedField('budgetCurrency')}
                    onBlur={() => setFocusedField(null)}
                  >
                    <option
                      value=""
                      className="bg-[var(--color-deep-teal)] text-white"
                    >
                      Select Currency...
                    </option>

                    <option
                      value="INR"
                      className="bg-[var(--color-deep-teal)] text-white"
                    >
                      INR - Indian Rupee
                    </option>

                    <option
                      value="USD"
                      className="bg-[var(--color-deep-teal)] text-white"
                    >
                      USD - US Dollar
                    </option>

                    <option
                      value="EUR"
                      className="bg-[var(--color-deep-teal)] text-white"
                    >
                      EUR - Euro
                    </option>

                    <option
                      value="GBP"
                      className="bg-[var(--color-deep-teal)] text-white"
                    >
                      GBP - British Pound
                    </option>

                    <option
                      value="SGD"
                      className="bg-[var(--color-deep-teal)] text-white"
                    >
                      SGD - Singapore Dollar
                    </option>

                    <option
                      value="MYR"
                      className="bg-[var(--color-deep-teal)] text-white"
                    >
                      MYR - Malaysian Ringgit
                    </option>

                    <option
                      value="THB"
                      className="bg-[var(--color-deep-teal)] text-white"
                    >
                      THB - Thai Baht
                    </option>

                    <option
                      value="LKR"
                      className="bg-[var(--color-deep-teal)] text-white"
                    >
                      LKR - Sri Lankan Rupee
                    </option>
                  </select>
                </div>
              </div>

              {/* Travelers */}
              <div className="relative group md:col-span-2 lg:col-span-3">
                <label className={labelClasses('travelers')}>
                  Travelers <span className="text-red-400">*</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

                  {/* Adults */}
                  <div className="flex-1 relative flex items-center bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/10 focus-within:border-[var(--color-brand-orange)] focus-within:bg-white/10 transition-all duration-300">
                    <Users2 className="absolute left-4 w-5 h-5 text-white/40" />

                    <input
                      type="number"
                      name="adults"
                      min="1"
                      placeholder="Adults"
                      className="w-full bg-transparent px-12 py-3 outline-none font-medium text-white placeholder-white/60"
                      required
                    />
                  </div>

                  {/* Children */}
                  <div className="flex-1 relative flex items-center bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/10 focus-within:border-[var(--color-brand-orange)] focus-within:bg-white/10 transition-all duration-300">
                    <input
                      type="number"
                      name="children"
                      min="0"
                      placeholder="Children"
                      className="w-full bg-transparent px-6 py-3 outline-none font-medium text-white placeholder-white/60"
                    />
                  </div>

                  {/* Children Ages */}
                  <div className="flex-1 relative flex items-center bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/10 focus-within:border-[var(--color-brand-orange)] focus-within:bg-white/10 transition-all duration-300">
                    <input
                      type="text"
                      name="childrenAges"
                      placeholder="Children Ages (e.g. 5, 8)"
                      className="w-full bg-transparent px-6 py-3 outline-none font-medium text-white placeholder-white/60"
                      pattern="^[0-9]+(,\s*[0-9]+)*$"
                      title="Enter children's ages separated by commas, e.g. 5, 8"
                    />
                  </div>

                  {/* Infants */}
                  <div className="flex-1 relative flex items-center bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/10 focus-within:border-[var(--color-brand-orange)] focus-within:bg-white/10 transition-all duration-300">
                    <input
                      type="number"
                      name="infants"
                      min="0"
                      placeholder="Infants"
                      className="w-full bg-transparent px-6 py-3 outline-none font-medium text-white placeholder-white/60"
                    />
                  </div>

                </div>

                <p className="mt-2 text-xs text-white/40">
                  If you are travelling with children, enter their ages separated by commas.
                  Example: 5, 8
                </p>
              </div>

              {/* Special Requirements */}
              <div className="relative group md:col-span-2 lg:col-span-3">
                <label className={labelClasses('description')}>
                  Special Requirements
                </label>

                <div className="relative">
                  <MessageSquare
                    className={`
              absolute left-4 top-5 w-5 h-5
              transition-all duration-300
              ${focusedField === 'description'
                        ? 'text-[var(--color-brand-orange)] scale-110'
                        : 'text-white/40'
                      }
            `}
                  />

                  <textarea
                    name="specialRequirements"
                    rows={4}
                    placeholder="Tell us about your preferred places, special arrangements, or other requirements..."
                    className={`
              w-full
              bg-white/5
              pl-12 pr-6 py-4
              rounded-2xl
              border
              transition-all duration-300
              outline-none
              font-medium
              resize-none
              text-white
              placeholder-white/40
              ${focusedField === 'description'
                        ? 'border-[var(--color-brand-orange)] bg-white/10'
                        : 'border-white/10 hover:border-white/20 hover:bg-white/10'
                      }
            `}
                    onFocus={() => setFocusedField('description')}
                    onBlur={() => setFocusedField(null)}
                  />
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

              <h4 className="text-2xl font-bold text-white font-display">
                02. Personal Details
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Full Name */}
              <div className="relative group">
                <label className={labelClasses('name')}>
                  Full Name <span className="text-red-400">*</span>
                </label>

                <div className="relative">
                  <User className={iconClasses('name')} />

                  <input
                    type="text"
                    name="name"
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
                <label className={labelClasses('email')}>
                  Email Address <span className="text-red-400">*</span>
                </label>

                <div className="relative">
                  <Mail className={iconClasses('email')} />

                  <input
                    type="email"
                    name="email"
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
                <label className={labelClasses('phone')}>
                  Phone Number <span className="text-red-400">*</span>
                </label>

                {/* ONE SINGLE BOX */}
                <div
                  className={`
      relative flex items-center w-full
      rounded-xl
      border
      overflow-hidden
      transition-all duration-300
      ${focusedField === 'phone'
                      ? 'border-[var(--color-brand-orange)] ring-1 ring-[var(--color-brand-orange)]/20'
                      : 'border-white/10'
                    }
      bg-white/5
    `}
                >
                  {/* COUNTRY CODE */}
                  {/* <button
                    type="button"
                    className="
        flex items-center gap-2
        shrink-0
        h-[58px]
        px-4
        bg-transparent
        border-0
        outline-none
        text-white
        cursor-pointer
      "
                    aria-label="Country code"
                  >
                    <Globe2 className="w-4 h-4 text-white/50 shrink-0" />

                    <span className="text-sm sm:text-base font-semibold text-white whitespace-nowrap">
                      +91
                    </span>
                  </button> */}

                  {/* DIVIDER */}
                  <span
                    className={`
        block
        w-px
        h-7
        shrink-0
        ${focusedField === 'phone'
                        ? 'bg-[var(--color-brand-orange)]/40'
                        : 'bg-white/15'
                      }
      `}
                  />

                  {/* PHONE NUMBER */}
                  <div className="relative flex-1 min-w-0 h-[58px]">
                    <Phone
                      className="
          absolute
          left-3
          top-1/2
          -translate-y-1/2
          w-4
          h-4
          text-white/40
          pointer-events-none
        "
                    />

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="Enter 10 digit number"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      inputMode="numeric"
                      onInput={(e) => {
                        e.currentTarget.value = e.currentTarget.value
                          .replace(/\D/g, '')
                          .slice(0, 10);
                      }}
                      className="
          block
          w-full
          h-full
          bg-transparent
          border-0
          outline-none
          ring-0
          appearance-none
          text-white
          placeholder-white/40
          text-sm
          sm:text-base
          font-medium
          pl-10
          pr-4
          focus:border-0
          focus:outline-none
          focus:ring-0
        "
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Location: State */}
              <div className="relative group">
                <label className={labelClasses('locState')}>
                  State <span className="text-red-400">*</span>
                </label>

                <div className="relative">
                  <MapPin className={iconClasses('locState')} />

                  <select
                    name="locState"
                    className={inputClasses('locState') + " appearance-none"}
                    value={locState}
                    onFocus={() => setFocusedField('locState')}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => {
                      setLocState(e.target.value);
                      setLocCity('');
                    }}
                    required
                  >
                    <option
                      value=""
                      className="bg-[var(--color-deep-teal)] text-white"
                    >
                      Select State...
                    </option>

                    {Object.keys(stateDistrictsMap).map((state) => (
                      <option
                        key={state}
                        value={state}
                        className="bg-[var(--color-deep-teal)] text-white"
                      >
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Location: City / District */}
              <div className="relative group">
                <label className={labelClasses('locCity')}>
                  City / District <span className="text-red-400">*</span>
                </label>

                <div className="relative">
                  <MapPin className={iconClasses('locCity')} />

                  <select
                    name="locCity"
                    className={inputClasses('locCity') + " appearance-none"}
                    value={locCity}
                    onFocus={() => setFocusedField('locCity')}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => setLocCity(e.target.value)}
                    required
                  >
                    <option
                      value=""
                      className="bg-[var(--color-deep-teal)] text-white"
                    >
                      {locState
                        ? `Select City in ${locState}...`
                        : 'Select State first...'}
                    </option>

                    {(stateDistrictsMap[locState] || []).map((city) => (
                      <option
                        key={city}
                        value={city}
                        className="bg-[var(--color-deep-teal)] text-white"
                      >
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

            </div>
          </div>

          {/* Privacy / Terms Consent */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="privacyConsent"
                required
                className="
          mt-1
          h-4 w-4
          shrink-0
          accent-[var(--color-brand-orange)]
          cursor-pointer
        "
              />

              <span className="text-sm leading-6 text-white/70">
                I agree to the{' '}
                <a
                  href="/terms-and-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-brand-orange)] hover:underline"
                >
                  Terms & Conditions
                </a>{' '}
                and{' '}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-brand-orange)] hover:underline"
                >
                  Privacy Policy
                </a>.
              </span>
            </label>
          </div>

          {/* Submit Action */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">

            <p className="text-sm text-white/50 font-medium">
              We respect your privacy. No spam, ever.
            </p>

            <button
              type="submit"
              className="
        group
        relative
        w-full
        sm:w-auto
        overflow-hidden
        rounded-2xl
        bg-white/10
        backdrop-blur-md
        border border-white/20
        text-white
        font-bold
        py-4 px-10
        transition-all duration-300
      "
            >
              {/* Animated hover gradient */}
              <div
                className="
          absolute inset-0
          bg-gradient-to-r
          from-[var(--color-brand-orange)]
          to-rose-500
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-500
        "
              />

              <div className="relative flex items-center justify-center gap-3">
                <Send className="w-5 h-5 group-hover:animate-bounce" />

                <span className="tracking-wide text-lg">
                  Submit Enquiry
                </span>
              </div>
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}
