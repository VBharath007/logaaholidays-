import React from 'react';
import { TourOperatorsForm, CarCoachRentalForm, FlightBookingForm } from './ServiceForms';
import { RailwayBookingForm, PassportVisaForm } from './ServiceForms2';
import { TravelInsuranceForm, EventManagementForm, HotelBookingForm } from './ServiceForms3';
import { ComprehensiveEnquiryForm } from '../ComprehensiveEnquiryForm';

export const ServiceEnquiryRouter = ({ serviceId }: { serviceId: string }) => {
  switch (serviceId) {
    case 'tour-operators':
      return <TourOperatorsForm />;
    case 'car-coach-rental':
      return <CarCoachRentalForm />;
    case 'flight-booking':
      return <FlightBookingForm />;
    case 'railway-ticket-booking':
      return <RailwayBookingForm />;
    case 'passport-visa-service':
      return <PassportVisaForm />;
    case 'travel-insurance-service':
      return <TravelInsuranceForm />;
    case 'event-management':
      return <EventManagementForm />;
    case 'hotel-booking':
      return <HotelBookingForm />;
    default:
      // Fallback for unknown services
      return <ComprehensiveEnquiryForm />;
  }
};
