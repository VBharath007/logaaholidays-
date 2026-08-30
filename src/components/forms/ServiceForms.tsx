import React, { useState } from 'react';
import { User, Phone, Mail, MapPin, Calendar, Users2, CreditCard, Car, Plane, Train, Briefcase, FileText, Globe2, ShieldCheck, HeartHandshake, Home } from 'lucide-react';
import { FormWrapper, TextInput, SelectInput, TextArea } from './FormComponents';

export const TourOperatorsForm = () => {
  const [travelType, setTravelType] = useState('');
  return (
    <FormWrapper 
      title="Plan Your Perfect Trip" 
      subtitle="Tell us about your travel plans and our travel experts will create a suitable itinerary for you."
    >
      <div className="space-y-6">
        <h4 className="text-xl font-bold text-white mb-4">Personal Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput icon={User} label="Full Name" placeholder="Your Name" required />
          <TextInput icon={Phone} label="Mobile Number" placeholder="+91 73973 29776" required />
          <TextInput icon={Mail} label="Email Address" type="email" placeholder="you@example.com" />
          <TextInput icon={MapPin} label="City / Current Location" placeholder="Your City" required />
        </div>

        <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Trip Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectInput 
            icon={Globe2} label="Travel Type" required
            value={travelType} onChange={(e) => setTravelType(e.target.value)}
            options={[
              { label: 'Family Tour', value: 'Family' },
              { label: 'Honeymoon Tour', value: 'Honeymoon' },
              { label: 'Couple Tour', value: 'Couple' },
              { label: 'Friends / Group Tour', value: 'Group' },
              { label: 'Senior Citizen Tour', value: 'Senior' },
              { label: 'Solo Trip', value: 'Solo' },
              { label: 'Corporate Tour', value: 'Corporate' },
              { label: 'Customized Tour', value: 'Custom' }
            ]} 
          />
          <TextInput icon={MapPin} label="Preferred Destination" placeholder="Where to?" required />
          <TextInput icon={MapPin} label="Departure City" placeholder="Leaving from" required />
          <TextInput icon={Calendar} label="Travel Start Date" type="date" required className="[color-scheme:dark]" />
          <TextInput icon={Calendar} label="Travel End Date" type="date" className="[color-scheme:dark]" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <TextInput icon={Users2} label="Adults" type="number" min="1" required />
          {travelType === 'Family' && <TextInput label="Children" type="number" min="0" />}
          {travelType === 'Family' && <TextInput label="Infants" type="number" min="0" />}
          {(travelType === 'Senior' || travelType === 'Family') && <TextInput label="Senior Citizens" type="number" min="0" />}
        </div>

        <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Accommodation & Budget</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectInput 
            icon={Home} label="Preferred Hotel Category" 
            options={[
              { label: '3 Star', value: '3 Star' },
              { label: '4 Star', value: '4 Star' },
              { label: '5 Star', value: '5 Star' },
              { label: 'Luxury', value: 'Luxury' },
              { label: 'No Preference', value: 'None' }
            ]} 
          />
          <TextInput icon={CreditCard} label="Approximate Budget Per Person" type="number" placeholder="₹" />
        </div>

        <TextArea label="Special Requirements / Message" placeholder="Tell us more about what you need..." rows={4} />
      </div>
    </FormWrapper>
  );
};

export const CarCoachRentalForm = () => {
  return (
    <FormWrapper 
      title="Book a Car or Coach for Your Journey" 
      subtitle="Tell us your travel requirements and we'll suggest the right vehicle for your trip."
    >
      <div className="space-y-6">
        <h4 className="text-xl font-bold text-white mb-4">Customer Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput icon={User} label="Full Name" required />
          <TextInput icon={Phone} label="Mobile Number" required />
          <TextInput icon={Mail} label="Email Address" type="email" />
          <TextInput icon={MapPin} label="City" required />
        </div>

        <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Vehicle & Journey Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectInput 
            icon={Car} label="Vehicle Type" required
            options={[
              { label: 'Sedan', value: 'Sedan' },
              { label: 'SUV', value: 'SUV' },
              { label: 'Innova', value: 'Innova' },
              { label: 'Tempo Traveller', value: 'Tempo' },
              { label: 'Mini Bus', value: 'Mini Bus' },
              { label: 'Bus', value: 'Bus' },
              { label: 'Luxury Coach', value: 'Luxury Coach' },
              { label: 'Other', value: 'Other' }
            ]} 
          />
          <SelectInput 
            icon={Briefcase} label="Rental Type" required
            options={[
              { label: 'One Way', value: 'One Way' },
              { label: 'Round Trip', value: 'Round Trip' },
              { label: 'Local Rental', value: 'Local' },
              { label: 'Outstation Rental', value: 'Outstation' },
              { label: 'Airport Transfer', value: 'Airport' },
              { label: 'Multi-Day Rental', value: 'Multi-Day' },
              { label: 'Corporate Travel', value: 'Corporate' }
            ]} 
          />
          <TextInput icon={Users2} label="Number of Passengers" type="number" min="1" required />
          <TextInput icon={Car} label="Number of Vehicles" type="number" min="1" defaultValue="1" />
          
          <TextInput icon={MapPin} label="Pickup Location" required />
          <TextInput icon={MapPin} label="Drop Location" required />
          <TextInput icon={Calendar} label="Pickup Date" type="date" required className="[color-scheme:dark]" />
          <TextInput icon={Calendar} label="Return Date" type="date" className="[color-scheme:dark]" />
        </div>

        <TextArea label="Additional Message" placeholder="Luggage requirements, AC requirement, driver preference..." rows={3} />
      </div>
    </FormWrapper>
  );
};

export const FlightBookingForm = () => {
  const [tripType, setTripType] = useState('Round Trip');
  const [isInternational, setIsInternational] = useState('No');
  const [children, setChildren] = useState('0');
  const [infants, setInfants] = useState('0');
  
  return (
    <FormWrapper 
      title="Flight Booking Enquiry" 
      subtitle="Share your travel details and our team will help you find suitable flight options."
    >
      <div className="space-y-6">
        <h4 className="text-xl font-bold text-white mb-4">Passenger Contact</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput icon={User} label="Full Name" required />
          <TextInput icon={Phone} label="Mobile Number" required />
          <TextInput icon={Mail} label="Email Address" type="email" required />
        </div>

        <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Journey Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectInput 
            icon={Plane} label="Trip Type" required
            value={tripType} onChange={e => setTripType(e.target.value)}
            options={[
              { label: 'One Way', value: 'One Way' },
              { label: 'Round Trip', value: 'Round Trip' },
            ]} 
          />
          <SelectInput 
            icon={Globe2} label="Domestic / International" required
            value={isInternational} onChange={e => setIsInternational(e.target.value)}
            options={[
              { label: 'Domestic', value: 'No' },
              { label: 'International', value: 'Yes' },
            ]} 
          />
          <TextInput icon={MapPin} label="From / Departure Airport" required />
          <TextInput icon={MapPin} label="To / Arrival Airport" required />
          <TextInput icon={Calendar} label="Departure Date" type="date" required className="[color-scheme:dark]" />
          {tripType !== 'One Way' && <TextInput icon={Calendar} label="Return Date" type="date" className="[color-scheme:dark]" />}
        </div>
        
        {/* Passengers */}
        <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Passengers</h4>
        <div className="grid grid-cols-3 gap-4">
          <TextInput icon={Users2} label="Adults" type="number" min="1" defaultValue="1" required />
          <TextInput label="Children (2–11 yrs)" type="number" min="0" defaultValue="0"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChildren(e.target.value)} />
          <TextInput label="Infants (under 2)" type="number" min="0" defaultValue="0"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInfants(e.target.value)} />
        </div>

        {parseInt(children) > 0 && (
          <TextInput label="Child Age(s)" placeholder="e.g. 5, 8" />
        )}
        {parseInt(infants) > 0 && (
          <TextInput label="Infant Age(s) in months" placeholder="e.g. 6, 14" />
        )}

        {/* Preferences */}
        <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Flight Preferences</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectInput
            icon={Plane} label="Preferred Departure Time"
            options={[
              { label: 'Morning (6 AM – 12 PM)', value: 'Morning' },
              { label: 'Afternoon (12 PM – 6 PM)', value: 'Afternoon' },
              { label: 'Evening (6 PM – 12 AM)', value: 'Evening' },
              { label: 'Any Time', value: 'Any Time' },
            ]}
          />
          <SelectInput
            icon={Briefcase} label="Cabin Class" required
            options={[
              { label: 'Economy', value: 'Economy' },
              { label: 'Premium Economy', value: 'Premium Economy' },
              { label: 'Business', value: 'Business' },
            ]}
          />
          <TextInput icon={Plane} label="Preferred Airline (Optional)" placeholder="e.g. IndiGo, Air India" />
          <TextInput icon={Briefcase} label="Baggage Requirement (Optional)" placeholder="e.g. 15 kg, 30 kg" />
        </div>

        {isInternational === 'Yes' && (
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <h5 className="text-sm font-bold text-brand-orange mb-1">International Travel</h5>
            <p className="text-xs text-white/60 mb-4">Please do not share your passport number at this stage. Our team will guide you through the next steps.</p>
            <SelectInput
              label="Passport Available?"
              options={[
                { label: 'Yes – Passport Ready', value: 'Yes' },
                { label: 'No – Need Assistance', value: 'No' },
              ]}
            />
          </div>
        )}

        <TextArea label="Additional Message" placeholder="Meal preference, extra baggage, preferred airlines..." rows={3} />
      </div>
    </FormWrapper>
  );
};

// ── RAILWAY BOOKING FORM ─────────────────────────────────────────────────────
export const RailwayBookingForm = () => { return <div>Railway Form Placeholder</div>; };
