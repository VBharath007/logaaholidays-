import React, { useState } from 'react';
import { User, Phone, Mail, MapPin, Calendar, Users2, CreditCard, ShieldCheck, HeartHandshake, Home, Briefcase, Globe2, FileText } from 'lucide-react';
import { FormWrapper, TextInput, SelectInput, TextArea } from './FormComponents';

export const TravelInsuranceForm = () => {
  return (
    <FormWrapper
      title="Travel Insurance Enquiry"
      subtitle="Travelling soon? Get the right coverage for a worry-free journey. Share your details below."
    >
      <div className="space-y-6">
        <h4 className="text-xl font-bold text-white mb-4">Contact Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput icon={User} label="Full Name" required />
          <TextInput icon={Phone} label="Mobile Number" required />
          <TextInput icon={Mail} label="Email Address" type="email" required />
          <TextInput icon={MapPin} label="City" required placeholder="Your current city" />
        </div>

        <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Trip Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput icon={Globe2} label="Destination Country / Region" required placeholder="e.g. Thailand, Europe" />
          <SelectInput icon={Briefcase} label="Trip Type" required
            options={[
              { label: 'Domestic', value: 'Domestic' },
              { label: 'International – Single Trip', value: 'International Single' },
              { label: 'International – Multi Trip', value: 'International Multi' },
            ]}
          />
          <TextInput icon={Calendar} label="Departure Date" type="date" required className="[color-scheme:dark]" />
          <TextInput icon={Calendar} label="Return Date" type="date" required className="[color-scheme:dark]" />
          <TextInput icon={Users2} label="Number of Travellers" type="number" min="1" defaultValue="1" required />
        </div>

        <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Coverage Preference</h4>
        <SelectInput icon={ShieldCheck} label="Coverage Preference"
          options={[
            { label: 'Basic Coverage', value: 'Basic' },
            { label: 'Comprehensive Coverage', value: 'Comprehensive' },
            { label: 'Not Sure – Recommend for me', value: 'Recommend' },
          ]}
        />

        <TextArea
          label="Existing Medical or Special Travel Requirement (Optional)"
          placeholder="Mention only if relevant — e.g. pre-existing condition, adventure sports planned, etc."
          rows={3}
        />
      </div>
    </FormWrapper>
  );
};

export const EventManagementForm = () => {
  return (
    <FormWrapper 
      title="Plan Your Event With Us" 
      subtitle="Tell us about your event and our team will help you plan the right experience."
    >
      <div className="space-y-6">
        <h4 className="text-xl font-bold text-white mb-4">Contact Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput icon={User} label="Full Name" required />
          <TextInput icon={Briefcase} label="Company / Organization" />
          <TextInput icon={Phone} label="Mobile Number" required />
          <TextInput icon={Mail} label="Email Address" type="email" />
          <TextInput icon={MapPin} label="City" required />
        </div>

        <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Event Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectInput 
            icon={HeartHandshake} label="Event Type" required
            options={[
              { label: 'Corporate Event', value: 'Corporate' },
              { label: 'Wedding', value: 'Wedding' },
              { label: 'Conference', value: 'Conference' },
              { label: 'Birthday/Anniversary', value: 'Party' },
              { label: 'Cultural Event', value: 'Cultural' },
              { label: 'Other', value: 'Other' }
            ]} 
          />
          <TextInput icon={MapPin} label="Event Location" required />
          <TextInput icon={Calendar} label="Event Date" type="date" required className="[color-scheme:dark]" />
          <TextInput icon={Users2} label="Expected Guest Count" type="number" min="1" required />
          <SelectInput 
            icon={CreditCard} label="Estimated Event Budget" 
            options={[
              { label: 'Below ₹50,000', value: 'Below 50k' },
              { label: '₹50,000–₹1 Lakh', value: '50k-1L' },
              { label: '₹1–3 Lakhs', value: '1L-3L' },
              { label: '₹5 Lakhs+', value: '5L+' },
              { label: 'Discuss With Us', value: 'Discuss' }
            ]} 
          />
        </div>

        <TextArea label="Event Description & Services Required" placeholder="Describe your event and what services (decoration, catering, venue) you need..." rows={4} />
      </div>
    </FormWrapper>
  );
};

export const HotelBookingForm = () => {
  return (
    <FormWrapper 
      title="Hotel Booking Enquiry" 
      subtitle="Share your stay details and we'll help you find suitable accommodation."
    >
      <div className="space-y-6">
        <h4 className="text-xl font-bold text-white mb-4">Guest Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput icon={User} label="Full Name" required />
          <TextInput icon={Phone} label="Mobile Number" required />
          <TextInput icon={Mail} label="Email Address" type="email" required />
        </div>

        <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Stay Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput icon={MapPin} label="Destination / City" required />
          <TextInput icon={Home} label="Number of Rooms" type="number" min="1" required />
          <TextInput icon={Calendar} label="Check-in Date" type="date" required className="[color-scheme:dark]" />
          <TextInput icon={Calendar} label="Check-out Date" type="date" required className="[color-scheme:dark]" />
        </div>
        
        <div className="grid grid-cols-3 gap-4 mt-4">
          <TextInput icon={Users2} label="Adults" type="number" min="1" required />
          <TextInput label="Children" type="number" min="0" />
          <TextInput label="Infants" type="number" min="0" />
        </div>

        <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Hotel Preference</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectInput 
            icon={Home} label="Hotel Category" 
            options={[
              { label: '3 Star', value: '3 Star' },
              { label: '4 Star', value: '4 Star' },
              { label: '5 Star', value: '5 Star' },
              { label: 'Luxury Resort', value: 'Luxury Resort' },
              { label: 'No Preference', value: 'None' }
            ]} 
          />
          <SelectInput 
            icon={Home} label="Room Preference" 
            options={[
              { label: 'Single', value: 'Single' },
              { label: 'Double', value: 'Double' },
              { label: 'Twin', value: 'Twin' },
              { label: 'Family Room', value: 'Family' },
              { label: 'Suite', value: 'Suite' }
            ]} 
          />
        </div>

        <p className="text-xs text-white/50">* We do not guarantee early check-in, late check-out or specific room availability until the hotel confirms it.</p>
        <TextArea label="Special Requirements & Preferred Hotel" placeholder="Honeymoon setup, wheelchair access, preferred hotel name..." rows={3} />
      </div>
    </FormWrapper>
  );
};

// ── 17. BUS BOOKING ──────────────────────────────────────────────────────────
export const BusBookingForm = () => {
  const [returnJourney, setReturnJourney] = useState('No');
  const [children, setChildren] = useState('0');
  return (
    <FormWrapper title="Bus Booking Enquiry" subtitle="Looking for a comfortable bus journey? Share your details and we will help you find the right service.">
      <div className="space-y-6">
        <h4 className="text-xl font-bold text-white mb-4">Passenger Contact</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput icon={User} label="Full Name" required />
          <TextInput icon={Phone} label="Mobile Number" required />
          <TextInput icon={Mail} label="Email Address (Optional)" type="email" />
        </div>
        <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Journey Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput icon={MapPin} label="From City" required />
          <TextInput icon={MapPin} label="To City" required />
          <TextInput icon={Calendar} label="Journey Date" type="date" required className="[color-scheme:dark]" />
          <SelectInput icon={HeartHandshake} label="Return Journey" value={returnJourney} onChange={(e: any) => setReturnJourney(e.target.value)}
            options={[{ label: 'No - One Way', value: 'No' }, { label: 'Yes - Round Trip', value: 'Yes' }]} />
          {returnJourney === 'Yes' && <TextInput icon={Calendar} label="Return Date" type="date" className="[color-scheme:dark]" />}
          <TextInput icon={MapPin} label="Boarding Point" placeholder="e.g. Madurai Central Bus Stand" />
          <TextInput icon={MapPin} label="Dropping Point" placeholder="e.g. Chennai CMBT" />
        </div>
        <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Passengers</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <TextInput icon={Users2} label="Adults" type="number" min="1" defaultValue="1" required />
          <TextInput label="Children" type="number" min="0" defaultValue="0" onChange={(e: any) => setChildren(e.target.value)} />
          <TextInput label="Total Travellers" type="number" min="1" required />
        </div>
        {parseInt(children) > 0 && <TextInput label="Child Age(s)" placeholder="e.g. 5, 8" />}
        <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Bus Preferences</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectInput icon={HeartHandshake} label="AC / Non-AC" options={[
            { label: 'AC', value: 'AC' }, { label: 'Non-AC', value: 'Non-AC' }, { label: 'No Preference', value: 'No Preference' }]} />
          <SelectInput icon={HeartHandshake} label="Seat Type" options={[
            { label: 'Seater', value: 'Seater' }, { label: 'Semi Sleeper', value: 'Semi Sleeper' },
            { label: 'Sleeper', value: 'Sleeper' }, { label: 'No Preference', value: 'No Preference' }]} />
          <SelectInput icon={HeartHandshake} label="Preferred Travel Time" options={[
            { label: 'Morning', value: 'Morning' }, { label: 'Afternoon', value: 'Afternoon' },
            { label: 'Evening', value: 'Evening' }, { label: 'Night', value: 'Night' }, { label: 'Any Time', value: 'Any Time' }]} />
        </div>
        <TextArea label="Special Request" placeholder="Seat preference, luggage, accessibility needs..." rows={3} />
      </div>
    </FormWrapper>
  );
};

// ── 18. CAB / COACH RENTAL V2 ────────────────────────────────────────────────
export const CabCoachRentalFormV2 = () => {
  const [children, setChildren] = useState('0');
  return (
    <FormWrapper title="Cab / Car & Coach Rental Enquiry" subtitle="Tell us your travel requirements and we will arrange the right vehicle for your trip.">
      <div className="space-y-6">
        <h4 className="text-xl font-bold text-white mb-4">Contact Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput icon={User} label="Full Name" required />
          <TextInput icon={Phone} label="Mobile Number" required />
          <TextInput icon={Mail} label="Email Address (Optional)" type="email" />
        </div>
        <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Trip Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput icon={MapPin} label="Pickup Location" required />
          <TextInput icon={MapPin} label="Drop Location" required />
          <TextInput icon={Calendar} label="Pickup Date" type="date" required className="[color-scheme:dark]" />
          <TextInput icon={Calendar} label="Pickup Time" type="time" className="[color-scheme:dark]" />
          <TextInput icon={Calendar} label="Return Date" type="date" className="[color-scheme:dark]" />
          <TextInput icon={Calendar} label="Number of Days" type="number" min="1" defaultValue="1" />
          <SelectInput icon={FileText} label="Trip Type" required options={[
            { label: 'Local', value: 'Local' }, { label: 'Outstation', value: 'Outstation' },
            { label: 'One Way', value: 'One Way' }, { label: 'Round Trip', value: 'Round Trip' },
            { label: 'Airport Transfer', value: 'Airport Transfer' }]} />
        </div>
        <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Passengers</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <TextInput icon={Users2} label="Adults" type="number" min="1" defaultValue="1" required />
          <TextInput label="Children" type="number" min="0" defaultValue="0" onChange={(e: any) => setChildren(e.target.value)} />
          <TextInput label="Total Passengers" type="number" min="1" required />
        </div>
        {parseInt(children) > 0 && <TextInput label="Child Age(s)" placeholder="e.g. 5, 8" />}
        <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Vehicle Preference</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectInput icon={HeartHandshake} label="Vehicle Type" required options={[
            { label: 'Sedan', value: 'Sedan' }, { label: 'Ertiga', value: 'Ertiga' },
            { label: 'Innova', value: 'Innova' }, { label: 'Innova Crysta', value: 'Innova Crysta' },
            { label: 'Tempo Traveller', value: 'Tempo Traveller' },
            { label: 'Mini Bus', value: 'Mini Bus' }, { label: 'Coach / Bus', value: 'Coach / Bus' }]} />
          <TextInput icon={Briefcase} label="Approximate Luggage (Optional)" placeholder="e.g. 4 bags, 40 kg" />
        </div>
        <TextArea label="Route / Sightseeing Details" placeholder="Describe your route or places to visit..." rows={3} />
        <TextArea label="Special Requirements" placeholder="AC preference, driver language, accessibility needs..." rows={2} />
      </div>
    </FormWrapper>
  );
};
