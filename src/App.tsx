import { ThemeProvider } from './theme/ThemeContext'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { MagneticCursor } from './components/ui/MagneticCursor'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { ServiceDetails } from './pages/ServiceDetails'
import { NorthIndiaPackage } from './pages/NorthIndiaPackage'
import { TourCategory } from './pages/TourCategory'
import { PackageDetails } from './pages/PackageDetails'
import { TestimonialsPage } from './pages/TestimonialsPage'
import { Contact } from './pages/Contact'
import { SouthIndiaPackage } from './pages/SouthIndiaPackage'
import { TamilNaduPackage } from './pages/TamilNaduPackage'
import { KeralaPackage } from './pages/KeralaPackage'
import { KarnatakaTourPackages } from './pages/KarnatakaTourPackages'
import { DestinationOverview } from './pages/DestinationOverview'
import { PlacesToVisit } from './pages/PlacesToVisit'
import { PlaceDetails } from './pages/PlaceDetails'
import { ScrollToTop } from './components/ScrollToTop'
import { WhatsAppButton } from './components/ui/WhatsAppButton'
import { Chatbot } from './components/ui/Chatbot'
import { BackToTop } from './components/ui/BackToTop'

import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TermsConditions } from './pages/TermsConditions'
import { CancellationPolicy } from './pages/CancellationPolicy'
import { NotFound } from './pages/NotFound'
import { Gallery } from './pages/Gallery'

function App() {
  useSmoothScroll();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ThemeProvider>
        <MagneticCursor />
        <Navbar />
        <main className="bg-[var(--color-bg-luxury)] min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetails />} />
            <Route path="/north-india-tour-packages" element={<NorthIndiaPackage />} />
            <Route path="/north-india-tour-packages/:category" element={<TourCategory />} />
            <Route path="/tour-packages" element={<Navigate to="/north-india-tour-packages" replace />} />
            <Route path="/tour-packages/:category" element={<TourCategory />} />
            <Route path="/tour-packages/:category/:packageSlug" element={<PackageDetails />} />
            <Route path="/north-india-tour-packages/:category/:packageSlug" element={<PackageDetails />} />
            <Route path="/packages/:packageSlug" element={<PackageDetails />} />
            <Route path="/south-india-package" element={<SouthIndiaPackage />} />
            <Route path="/tamil-nadu-tour-packages" element={<TamilNaduPackage />} />
            <Route path="/kerala-tour-packages" element={<KeralaPackage />} />
            <Route path="/karnataka-tour-packages" element={<KarnatakaTourPackages />} />
            <Route path="/destination/:state/:city" element={<DestinationOverview />} />
            <Route path="/places-to-visit/:state/:city" element={<PlacesToVisit />} />
            <Route path="/place/:state/:placeId" element={<PlaceDetails />} />
            <Route path="/place/:state/:city/:placeId" element={<PlaceDetails />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<Contact />} />
            
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="/cancellation-policy" element={<CancellationPolicy />} />
            
            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
        <WhatsAppButton />
        <BackToTop />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
