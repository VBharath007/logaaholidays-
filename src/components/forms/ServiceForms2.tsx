import React, { useState } from 'react';
import { User, Phone, Mail, MapPin, Calendar, Users2, CreditCard, Train, ShieldCheck, HeartHandshake, Home, Briefcase, Globe2, FileText } from 'lucide-react';
import { FormWrapper, TextInput, SelectInput, TextArea } from './FormComponents';

export const RailwayBookingForm = () => {
  const [returnJourney, setReturnJourney] = useState('No');
  
  return (
    <FormWrapper 
      title="Railway Ticket Booking Enquiry" 
      subtitle="Share your journey details and we'll assist you with suitable train options."
    >
      <div className="space-y-6">
        <h4 className="text-xl font-bold text-white mb-4">Contact Details</h4>
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
            label="Return Journey?" 
            value={returnJourney} onChange={e => setReturnJourney(e.target.value)}
            options={[{label:'Yes', value:'Yes'}, {label:'No', value:'No'}]} 
          />
          {returnJourney === 'Yes' && <TextInput icon={Calendar} label="Return Date" type="date" className="[color-scheme:dark]" />}
        </div>
        
        <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Passenger & Travel Preference</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <TextInput icon={Users2} label="Adults" type="number" min="1" required />
          <TextInput label="Children" type="number" min="0" />
          <TextInput label="Senior Citizens" type="number" min="0" />
          <TextInput label="Infants" type="number" min="0" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <SelectInput 
            icon={Train} label="Class Preference" required
            options={[
              { label: 'Sleeper', value: 'SL' },
              { label: '3A', value: '3A' },
              { label: '2A', value: '2A' },
              { label: '1A', value: '1A' },
              { label: 'Chair Car', value: 'CC' },
              { label: 'Executive Chair Car', value: 'EC' },
              { label: 'General', value: 'GN' },
              { label: 'No Preference', value: 'None' }
            ]} 
          />
        </div>

        <p className="text-xs text-white/50">* Enquiries do not guarantee confirmed seats. ID proof required while travelling as per IRCTC rules.</p>
        <TextArea label="Special Requirements" placeholder="Lower berth preference, preferred train..." rows={3} />
      </div>
    </FormWrapper>
  );
};

export const PassportVisaForm = () => {
  const [service, setService] = useState('');
  
  return (
    <FormWrapper 
      title="Passport & Visa Assistance" 
      subtitle="Tell us where you are travelling and what travel document assistance you need."
    >
      <div className="space-y-6">
        <h4 className="text-xl font-bold text-white mb-4">Applicant Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput icon={User} label="Full Name" required />
          <TextInput icon={Phone} label="Mobile Number" required />
          <TextInput icon={Mail} label="Email Address" type="email" required />
          <TextInput icon={Calendar} label="Date of Birth" type="date" required className="[color-scheme:dark]" />
          <TextInput icon={Globe2} label="Nationality" required />
          <TextInput icon={MapPin} label="Current City" required />
        </div>

        <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Service & Destination</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectInput 
            icon={FileText} label="Service Required" required
            value={service} onChange={e => setService(e.target.value)}
            options={[
              { label: 'New Passport', value: 'New Passport' },
              { label: 'Passport Renewal', value: 'Passport Renewal' },
              { label: 'Tourist Visa', value: 'Tourist Visa' },
              { label: 'Business Visa', value: 'Business Visa' },
              { label: 'Student Visa', value: 'Student Visa' },
              { label: 'Other', value: 'Other' }
            ]} 
          />
          <TextInput icon={Globe2} label="Country You Plan to Visit" required />
          <SelectInput 
            icon={Briefcase} label="Purpose of Travel" required
            options={[
              { label: 'Tourism', value: 'Tourism' },
              { label: 'Business', value: 'Business' },
              { label: 'Study', value: 'Study' },
              { label: 'Work', value: 'Work' }
            ]} 
          />
          <TextInput icon={Calendar} label="Expected Travel Date" type="date" className="[color-scheme:dark]" />
        </div>

        {(service.includes('Visa') || service.includes('Passport')) && (
          <div className="bg-white/5 p-4 rounded-xl border border-white/10 mt-4">
            <h5 className="text-sm font-bold text-brand-orange mb-3">Document Check</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SelectInput label="Previous International Travel?" options={[{label:'Yes', value:'Yes'}, {label:'No', value:'No'}]} />
              <SelectInput label="Existing Passport?" options={[{label:'Yes', value:'Yes'}, {label:'No', value:'No'}]} />
              {service.includes('Visa') && <SelectInput label="Invitation/Sponsorship Available?" options={[{label:'Yes', value:'Yes'}, {label:'No', value:'No'}]} />}
            </div>
          </div>
        )}

        <p className="text-xs text-white/50">* Our team will review your requirement and guide you through the applicable process and documentation. This is not a guarantee of visa/passport approval.</p>
        <TextArea label="Describe your requirement" placeholder="Additional details about your trip or application..." rows={3} />
      </div>
    </FormWrapper>
  );
};
