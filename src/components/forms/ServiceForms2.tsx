import React, { useState } from 'react';
import { User, Phone, Mail, MapPin, Calendar, Users2, Train, Briefcase, Globe2, FileText } from 'lucide-react';
import { FormWrapper, TextInput, SelectInput, TextArea } from './FormComponents';

// ── 16. RAILWAY TICKET BOOKING ────────────────────────────────────────────────
export const RailwayBookingForm = () => {
  const [returnJourney, setReturnJourney] = useState('No');
  const [children, setChildren] = useState('0');
  const [seniors, setSeniors] = useState('0');

  return (
    <FormWrapper
      title="Railway Ticket Booking Enquiry"
      subtitle="Share your journey details and our team will assist you with suitable train options."
    >
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
          <SelectInput
            icon={Train} label="Return Journey" required
            value={returnJourney} onChange={e => setReturnJourney(e.target.value)}
            options={[{ label: 'No – One Way', value: 'No' }, { label: 'Yes – Round Trip', value: 'Yes' }]}
          />
          {returnJourney === 'Yes' && (
            <TextInput icon={Calendar} label="Return Date" type="date" className="[color-scheme:dark]" />
          )}
        </div>

        <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Passengers</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <TextInput icon={Users2} label="Adults" type="number" min="1" defaultValue="1" required />
          <TextInput label="Children (5–11 yrs)" type="number" min="0" defaultValue="0"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChildren(e.target.value)} />
          <TextInput label="Senior Citizens" type="number" min="0" defaultValue="0"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSeniors(e.target.value)} />
          <TextInput label="Infants (under 5)" type="number" min="0" defaultValue="0" />
        </div>
        {parseInt(children) > 0 && <TextInput label="Child Age(s)" placeholder="e.g. 6, 9" />}
        {parseInt(seniors) > 0 && <TextInput label="Senior Citizen Age(s)" placeholder="e.g. 65, 70" />}

        <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Train Preferences</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectInput icon={Train} label="Class Preference" required
            options={[
              { label: 'Sleeper (SL)', value: 'SL' }, { label: '3rd AC (3A)', value: '3A' },
              { label: '2nd AC (2A)', value: '2A' }, { label: '1st AC (1A)', value: '1A' },
              { label: 'AC Chair Car (CC)', value: 'CC' }, { label: '2nd Sitting (2S)', value: '2S' },
            ]}
          />
          <SelectInput icon={Train} label="Berth Preference"
            options={[
              { label: 'Lower Berth', value: 'Lower' }, { label: 'Middle Berth', value: 'Middle' },
              { label: 'Upper Berth', value: 'Upper' }, { label: 'Side Lower', value: 'Side Lower' },
              { label: 'Side Upper', value: 'Side Upper' }, { label: 'No Preference', value: 'No Preference' },
            ]}
          />
          <TextInput icon={Train} label="Preferred Train / Train Number (Optional)" placeholder="e.g. 12673 – Cheran Express" />
          <TextInput icon={MapPin} label="Boarding Station (Optional)" placeholder="If different from departure city" />
          <SelectInput icon={FileText} label="Quota Preference"
            options={[
              { label: 'General Quota', value: 'General' }, { label: 'Ladies Quota', value: 'Ladies' },
              { label: 'Senior Citizen Quota', value: 'Senior Citizen' }, { label: 'Tourist Quota', value: 'Tourist' },
              { label: 'No Preference', value: 'No Preference' },
            ]}
          />
        </div>
        <TextArea label="Special Requirements" placeholder="Wheelchair assistance, dietary needs, group booking details..." rows={3} />
      </div>
    </FormWrapper>
  );
};

// ── 19. PASSPORT & VISA ───────────────────────────────────────────────────────
export const PassportVisaForm = () => (
  <FormWrapper
    title="Passport & Visa Enquiry"
    subtitle="Planning to travel abroad? Share your details and our team will guide you through the process."
  >
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
        <SelectInput icon={Globe2} label="Purpose of Travel" required
          options={[
            { label: 'Tourism / Holiday', value: 'Tourism' }, { label: 'Business', value: 'Business' },
            { label: 'Medical', value: 'Medical' }, { label: 'Education / Study', value: 'Education' },
            { label: 'Other', value: 'Other' },
          ]}
        />
        <TextInput icon={Calendar} label="Tentative Travel Date" type="date" className="[color-scheme:dark]" />
        <SelectInput icon={FileText} label="Passport Available?" required
          options={[
            { label: 'Yes – Passport Ready', value: 'Yes' },
            { label: 'No – Need Assistance', value: 'No' },
          ]}
        />
        <SelectInput icon={FileText} label="Visa Type (if known)"
          options={[
            { label: 'Tourist Visa', value: 'Tourist' }, { label: 'Business Visa', value: 'Business' },
            { label: 'E-Visa / Online', value: 'E-Visa' }, { label: 'Visa on Arrival', value: 'Visa on Arrival' },
            { label: 'Not Sure', value: 'Not Sure' },
          ]}
        />
      </div>
      <TextArea label="Additional Message" placeholder="Any specific questions or requirements..." rows={3} />
    </div>
  </FormWrapper>
);
