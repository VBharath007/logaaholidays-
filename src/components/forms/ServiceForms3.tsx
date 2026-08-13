import React, { useState } from 'react';
import { User, Phone, Mail, MapPin, Calendar, Users2, CreditCard, ShieldCheck, HeartHandshake, Home, Briefcase, Globe2, FileText } from 'lucide-react';
import { FormWrapper, TextInput, SelectInput, TextArea } from './FormComponents';

export const TravelInsuranceForm = () => {
  return (
    <FormWrapper 
      title="Travel Insurance Enquiry" 
      subtitle="Tell us about your trip and we'll help you explore suitable travel insurance options."
    >
      <div className="space-y-6">
        <h4 className="text-xl font-bold text-white mb-4">Customer Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput icon={User} label="Full Name" required />
          <TextInput icon={Phone} label="Mobile Number" required />
          <TextInput icon={Mail} label="Email Address" type="email" required />
          <TextInput icon={MapPin} label="City" required />
        </div>

        <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Trip Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput icon={Globe2} label="Destination Country" required />
          <SelectInput 
            icon={Briefcase} label="Trip Type" required
            options={[
              { label: 'Domestic', value: 'Domestic' },
              { label: 'International', value: 'International' }
            ]} 
          />
          <TextInput icon={Calendar} label="Departure Date" type="date" required className="[color-scheme:dark]" />
          <TextInput icon={Calendar} label="Return Date" type="date" required className="[color-scheme:dark]" />
          <TextInput icon={Users2} label="Number of Travellers" type="number" min="1" required />
        </div>

        <h4 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/10">Coverage Preference</h4>
        <div className="grid grid-cols-1 gap-4">
          <SelectInput 
            icon={ShieldCheck} label="Primary Coverage Requirement" 
            options={[
              { label: 'Medical Coverage', value: 'Medical' },
              { label: 'Comprehensive Travel Cover', value: 'Comprehensive' },
              { label: 'Trip Cancellation', value: 'Cancellation' },
              { label: 'Not Sure – Need Guidance', value: 'Not Sure' }
            ]} 
          />
        </div>

        <p className="text-xs text-white/50">* We do not promise claim approval before the actual insurer policy is issued.</p>
        <TextArea label="Existing Medical / Special Travel Requirement" placeholder="Briefly describe if any specific conditions..." rows={3} />
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
