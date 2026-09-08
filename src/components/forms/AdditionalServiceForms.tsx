import React, { useState } from 'react';
import { User, Phone, Mail, MapPin, Calendar, Users2, Car, Train, Briefcase, FileText, Globe2, ShieldCheck } from 'lucide-react';
import { FormWrapper, TextInput, SelectInput, TextArea } from './FormComponents';

// ── 16. RAILWAY TICKET BOOKING ────────────────────────────────────────────────
export const RailwayBookingForm = () => {
  const [returnJourney, setReturnJourney] = useState('No');
  const [children, setChildren] = useState('0');
  const [seniors, setSeniors] = useState('0');
  return (
    <FormWrapper title="Railway Ticket Booking Enquiry" subtitle="Share your journey details and our team will assist you with suitable train options.">
      <div className="space-y-6">
        <div className="bg-yellow-500/10 border border-yellow-400/20 rounded-xl p-3 text-xs text-yellow-200">
          ⚠️ Submitting this enquiry does not guarantee confirmed railway seats. Our team will confirm availability and assist you accordingly.
        </div>
        <h4 className="text-xl font-bold text-white mb-4">Passenger Contact</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput icon={User} label="Full Name" required />
          <TextInput icon={Phone} label="Mobile Number" required />
          <TextInput icon={Mail} label="Email Address" type="email" />
        </div>
        <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Journey Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput icon={MapPin} label="From Station / City" required />
          <TextInput icon={MapPin} label="To Station / City" required />
          <TextInput icon={Calendar} label="Journey Date" type="date" required className="[color-scheme:dark]" />
          <SelectInput icon={Train} label="Return Journey" required value={returnJourney} onChange={e => setReturnJourney(e.target.value)}
            options={[{ label: 'No – One Way', value: 'No' }, { label: 'Yes – Round Trip', value: 'Yes' }]} />
          {returnJourney === 'Yes' && <TextInput icon={Calendar} label="Return Date" type="date" className="[color-scheme:dark]" />}
        </div>
        <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Passengers</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <TextInput icon={Users2} label="Adults" type="number" min="1" defaultValue="1" required />
          <TextInput label="Children (5–11 yrs)" type="number" min="0" defaultValue="0" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChildren(e.target.value)} />
          <TextInput label="Senior Citizens" type="number" min="0" defaultValue="0" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSeniors(e.target.value)} />
          <TextInput label="Infants (under 5)" type="number" min="0" defaultValue="0" />
        </div>
        {parseInt(children) > 0 && <TextInput label="Child Age(s)" placeholder="e.g. 6, 9" />}
        {parseInt(seniors) > 0 && <TextInput label="Senior Citizen Age(s)" placeholder="e.g. 65, 70" />}
        <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Train Preferences</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectInput icon={Train} label="Class Preference" required options={[
            { label: 'Sleeper (SL)', value: 'SL' }, { label: '3rd AC (3A)', value: '3A' },
            { label: '2nd AC (2A)', value: '2A' }, { label: '1st AC (1A)', value: '1A' },
            { label: 'AC Chair Car (CC)', value: 'CC' }, { label: '2nd Sitting (2S)', value: '2S' }]} />
          <SelectInput icon={Train} label="Berth Preference" options={[
            { label: 'Lower Berth', value: 'Lower' }, { label: 'Middle Berth', value: 'Middle' },
            { label: 'Upper Berth', value: 'Upper' }, { label: 'Side Lower', value: 'Side Lower' },
            { label: 'Side Upper', value: 'Side Upper' }, { label: 'No Preference', value: 'No Preference' }]} />
          <TextInput icon={Train} label="Preferred Train / Train Number (Optional)" placeholder="e.g. 12673 – Cheran Express" />
          <TextInput icon={MapPin} label="Boarding Station (Optional)" placeholder="If different from From City" />
          <SelectInput icon={FileText} label="Quota Preference" options={[
            { label: 'General Quota', value: 'General' }, { label: 'Ladies Quota', value: 'Ladies' },
            { label: 'Senior Citizen Quota', value: 'Senior Citizen' }, { label: 'Tourist Quota', value: 'Tourist' },
            { label: 'No Preference', value: 'No Preference' }]} />
        </div>
        <TextArea label="Special Requirements" placeholder="Wheelchair assistance, dietary needs, group booking details..." rows={3} />
      </div>
    </FormWrapper>
  );
};

// ── 17. BUS BOOKING ───────────────────────────────────────────────────────────
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
          <SelectInput icon={Car} label="Return Journey" value={returnJourney} onChange={e => setReturnJourney(e.target.value)}
            options={[{ label: 'No – One Way', value: 'No' }, { label: 'Yes – Round Trip', value: 'Yes' }]} />
          {returnJourney === 'Yes' && <TextInput icon={Calendar} label="Return Date" type="date" className="[color-scheme:dark]" />}
          <TextInput icon={MapPin} label="Boarding Point" placeholder="e.g. Madurai Central Bus Stand" />
          <TextInput icon={MapPin} label="Dropping Point" placeholder="e.g. Chennai CMBT" />
        </div>
        <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Passengers</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <TextInput icon={Users2} label="Adults" type="number" min="1" defaultValue="1" required />
          <TextInput label="Children" type="number" min="0" defaultValue="0" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChildren(e.target.value)} />
          <TextInput label="Total Travellers" type="number" min="1" required />
        </div>
        {parseInt(children) > 0 && <TextInput label="Child Age(s)" placeholder="e.g. 5, 8" />}
        <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Bus Preferences</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectInput icon={Car} label="AC / Non-AC" options={[
            { label: 'AC', value: 'AC' }, { label: 'Non-AC', value: 'Non-AC' }, { label: 'No Preference', value: 'No Preference' }]} />
          <SelectInput icon={Car} label="Seat Type" options={[
            { label: 'Seater', value: 'Seater' }, { label: 'Semi Sleeper', value: 'Semi Sleeper' },
            { label: 'Sleeper', value: 'Sleeper' }, { label: 'No Preference', value: 'No Preference' }]} />
          <SelectInput icon={Car} label="Preferred Travel Time" options={[
            { label: 'Morning', value: 'Morning' }, { label: 'Afternoon', value: 'Afternoon' },
            { label: 'Evening', value: 'Evening' }, { label: 'Night', value: 'Night' }, { label: 'Any Time', value: 'Any Time' }]} />
        </div>
        <TextArea label="Special Request" placeholder="Seat preference, luggage, accessibility needs..." rows={3} />
      </div>
    </FormWrapper>
  );
};

// ── 18. CAB / COACH RENTAL (V2) ───────────────────────────────────────────────
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
          <SelectInput icon={Car} label="Trip Type" required options={[
            { label: 'Local', value: 'Local' }, { label: 'Outstation', value: 'Outstation' },
            { label: 'One Way', value: 'One Way' }, { label: 'Round Trip', value: 'Round Trip' },
            { label: 'Airport Transfer', value: 'Airport Transfer' }]} />
        </div>
        <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Passengers</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <TextInput icon={Users2} label="Adults" type="number" min="1" defaultValue="1" required />
          <TextInput label="Children" type="number" min="0" defaultValue="0" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChildren(e.target.value)} />
          <TextInput label="Total Passengers" type="number" min="1" required />
        </div>
        {parseInt(children) > 0 && <TextInput label="Child Age(s)" placeholder="e.g. 5, 8" />}
        <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Vehicle Preference</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectInput icon={Car} label="Vehicle Type" required options={[
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

// ── 19. PASSPORT & VISA ───────────────────────────────────────────────────────
export const PassportVisaForm = () => (
  <FormWrapper title="Passport & Visa Enquiry" subtitle="Planning to travel abroad? Share your details and our team will guide you through the process.">
    <div className="space-y-6">
      <div className="bg-blue-500/10 border border-blue-400/20 rounded-xl p-3 text-xs text-blue-200">
        ℹ️ Please do not share your passport number or any sensitive identity documents through this form. Our team will guide you after reviewing your enquiry.
      </div>
      <h4 className="text-xl font-bold text-white mb-4">Contact Details</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextInput icon={User} label="Full Name" required />
        <TextInput icon={Phone} label="Mobile Number" required />
        <TextInput icon={Mail} label="Email Address" type="email" required />
        <TextInput icon={Users2} label="Number of Applicants" type="number" min="1" defaultValue="1" required />
      </div>
      <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Travel Details</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextInput icon={Globe2} label="Destination Country" required placeholder="e.g. Malaysia, Sri Lanka" />
        <SelectInput icon={Globe2} label="Purpose of Travel" required options={[
          { label: 'Tourism / Holiday', value: 'Tourism' }, { label: 'Business', value: 'Business' },
          { label: 'Medical', value: 'Medical' }, { label: 'Education / Study', value: 'Education' },
          { label: 'Other', value: 'Other' }]} />
        <TextInput icon={Calendar} label="Tentative Travel Date" type="date" className="[color-scheme:dark]" />
        <SelectInput icon={FileText} label="Passport Available?" required options={[
          { label: 'Yes – Passport Ready', value: 'Yes' }, { label: 'No – Need Assistance', value: 'No' }]} />
        <SelectInput icon={FileText} label="Visa Type (if known)" options={[
          { label: 'Tourist Visa', value: 'Tourist' }, { label: 'Business Visa', value: 'Business' },
          { label: 'E-Visa / Online', value: 'E-Visa' }, { label: 'Visa on Arrival', value: 'Visa on Arrival' },
          { label: 'Not Sure', value: 'Not Sure' }]} />
      </div>
      <TextArea label="Additional Message" placeholder="Any specific questions or requirements..." rows={3} />
    </div>
  </FormWrapper>
);

// ── 20. TRAVEL INSURANCE ──────────────────────────────────────────────────────
export const TravelInsuranceForm = () => (
  <FormWrapper title="Travel Insurance Enquiry" subtitle="Travelling soon? Get the right coverage for a worry-free journey. Share your details below.">
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
        <SelectInput icon={Globe2} label="Trip Type" required options={[
          { label: 'Domestic', value: 'Domestic' },
          { label: 'International – Single Trip', value: 'International Single' },
          { label: 'International – Multi Trip', value: 'International Multi' }]} />
        <TextInput icon={Calendar} label="Departure Date" type="date" required className="[color-scheme:dark]" />
        <TextInput icon={Calendar} label="Return Date" type="date" required className="[color-scheme:dark]" />
        <TextInput icon={Users2} label="Number of Travellers" type="number" min="1" defaultValue="1" required />
      </div>
      <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Coverage Preference</h4>
      <SelectInput icon={ShieldCheck} label="Coverage Preference" options={[
        { label: 'Basic Coverage', value: 'Basic' },
        { label: 'Comprehensive Coverage', value: 'Comprehensive' },
        { label: 'Not Sure – Recommend for me', value: 'Recommend' }]} />
      <TextArea
        label="Existing Medical or Special Travel Requirement (Optional)"
        placeholder="Mention only if relevant — e.g. pre-existing condition, adventure sports planned, etc."
        rows={3}
      />
    </div>
  </FormWrapper>
);
