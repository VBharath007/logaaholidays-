import { Suspense, lazy } from 'react'
import { ThemeProvider } from './theme/ThemeContext'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { MagneticCursor } from './components/ui/MagneticCursor'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { ScrollToTop } from './components/ScrollToTop'
import { WhatsAppButton } from './components/ui/WhatsAppButton'
import { BackToTop } from './components/ui/BackToTop'

// Code-split routes and heavy widgets to keep the critical first-paint JS bundle small
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })))
const ServiceDetails = lazy(() => import('./pages/ServiceDetails').then(m => ({ default: m.ServiceDetails })))
const NorthIndiaPackage = lazy(() => import('./pages/NorthIndiaPackage').then(m => ({ default: m.NorthIndiaPackage })))
const TourCategory = lazy(() => import('./pages/TourCategory').then(m => ({ default: m.TourCategory })))
const PackageDetails = lazy(() => import('./pages/PackageDetails').then(m => ({ default: m.PackageDetails })))
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage').then(m => ({ default: m.TestimonialsPage })))
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })))
const SouthIndiaPackage = lazy(() => import('./pages/SouthIndiaPackage').then(m => ({ default: m.SouthIndiaPackage })))
const KeralaPackage = lazy(() => import('./pages/KeralaPackage').then(m => ({ default: m.KeralaPackage })))
const KarnatakaTourPackages = lazy(() => import('./pages/KarnatakaTourPackages').then(m => ({ default: m.KarnatakaTourPackages })))
const DestinationOverview = lazy(() => import('./pages/DestinationOverview').then(m => ({ default: m.DestinationOverview })))
const PlacesToVisit = lazy(() => import('./pages/PlacesToVisit').then(m => ({ default: m.PlacesToVisit })))
const PlaceDetails = lazy(() => import('./pages/PlaceDetails').then(m => ({ default: m.PlaceDetails })))
const HoneymoonPackages = lazy(() => import('./pages/HoneymoonPackages').then(m => ({ default: m.HoneymoonPackages })))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })))
const TermsConditions = lazy(() => import('./pages/TermsConditions').then(m => ({ default: m.TermsConditions })))
const CancellationPolicy = lazy(() => import('./pages/CancellationPolicy').then(m => ({ default: m.CancellationPolicy })))
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })))
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })))
const Chatbot = lazy(() => import('./components/ui/Chatbot').then(m => ({ default: m.Chatbot })))

function App() {
  useSmoothScroll();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ThemeProvider>
        <MagneticCursor />
        <Navbar />
        <main className="bg-[var(--color-bg-luxury)] min-h-screen">
          <Suspense fallback={<div className="min-h-screen bg-[var(--color-bg-luxury)]" />}>
            <Routes>
              <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services/:serviceId" element={<ServiceDetails />} />
            <Route path="/north-india-tour-packages" element={<NorthIndiaPackage />} />
            <Route path="/north-india-tour-packages/:category" element={<TourCategory />} />
            <Route path="/tour-packages" element={<Navigate to="/north-india-tour-packages" replace />} />
            <Route path="/tour-packages/:category" element={<TourCategory />} />
            <Route path="/tour-packages/:category/:packageSlug" element={<PackageDetails />} />
            <Route path="/north-india-tour-packages/:category/:packageSlug" element={<PackageDetails />} />
            <Route path="/packages/:packageSlug" element={<PackageDetails />} />
            <Route path="/south-india-package" element={<SouthIndiaPackage />} />
            <Route path="/south-india-tour-packages" element={<SouthIndiaPackage />} />
            <Route path="/south-india-tour-packages/:category" element={<TourCategory />} />
            <Route path="/south-india-tour-packages/:category/:packageSlug" element={<PackageDetails />} />
            <Route path="/honeymoon-packages" element={<HoneymoonPackages />} />
            <Route path="/honeymoon-package" element={<Navigate to="/honeymoon-packages" replace />} />
            <Route path="/honeymoon-packages/:category" element={<TourCategory />} />
            <Route path="/honeymoon-packages/:category/:packageSlug" element={<PackageDetails />} />
            {/* <Route path="/tamil-nadu-tour-packages" element={<TamilNaduPackage />} />
            <Route path="/tamil-nadu-tour-packages/:category" element={<TourCategory />} />
            <Route path="/tamil-nadu-tour-packages/:category/:packageSlug" element={<PackageDetails />} /> */}
            <Route path="/kerala-tour-packages" element={<KeralaPackage />} />
            <Route path="/kerala-tour-packages/:category" element={<TourCategory />} />
            <Route path="/kerala-tour-packages/:category/:packageSlug" element={<PackageDetails />} />
            <Route path="/karnataka-tour-packages" element={<KarnatakaTourPackages />} />
            <Route path="/karnataka-tour-packages/:category" element={<TourCategory />} />
            <Route path="/karnataka-tour-packages/:category/:packageSlug" element={<PackageDetails />} />
            <Route path="/destination" element={<Navigate to="/south-india-package" replace />} />
            <Route path="/destination/tamilnadu" element={<Navigate to="/tamilnadu-tourism" replace />} />
            <Route path="/destination/kerala" element={<Navigate to="/kerala-tourism" replace />} />
            <Route path="/destination/karnataka" element={<Navigate to="/karnataka-tour-packages" replace />} />
            <Route path="/destination/:state/:city" element={<DestinationOverview />} />
            <Route path="/places-to-visit" element={<Navigate to="/south-india-package" replace />} />
            <Route path="/places-to-visit/tamilnadu" element={<Navigate to="/tamilnadu-tourism" replace />} />
            <Route path="/places-to-visit/kerala" element={<Navigate to="/kerala-tourism" replace />} />
            <Route path="/places-to-visit/karnataka" element={<Navigate to="/karnataka-tour-packages" replace />} />
            <Route path="/places-to-visit/:state/:city" element={<PlacesToVisit />} />
            <Route path="/place/:state/:placeId" element={<PlaceDetails />} />
            <Route path="/place/:state/:city/:placeId" element={<PlaceDetails />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="/cancellation-policy" element={<CancellationPolicy />} />

            {/* ── Clean State-Tourism Routes ── */}
            {/* Tamil Nadu */}
            <Route path="/tamilnadu-tourism" element={<DestinationOverview />} />
            <Route path="/tamilnadu-tourism/:city" element={<PlacesToVisit />} />
            <Route path="/tamilnadu-tourism/:city/:placeId" element={<PlaceDetails />} />
            {/* Kerala */}
            <Route path="/kerala-tourism" element={<DestinationOverview />} />
            <Route path="/kerala-tourism/:city" element={<PlacesToVisit />} />
            <Route path="/kerala-tourism/:city/:placeId" element={<PlaceDetails />} />
            {/* Karnataka */}
            <Route path="/karnataka-tour-packages" element={<DestinationOverview />} />
            <Route path="/karnataka-tour-packages/:city" element={<PlacesToVisit />} />
            <Route path="/karnataka-tour-packages/:city/:placeId" element={<PlaceDetails />} />
            {/* Andaman */}
            <Route path="/andaman-tourism" element={<DestinationOverview />} />
            <Route path="/andaman-tourism/:city" element={<PlacesToVisit />} />
            <Route path="/andaman-tourism/:city/:placeId" element={<PlaceDetails />} />

            {/* Dynamic Generic state routes for any other tourism slug (e.g. /madurai-tourism/... ) */}
            <Route path="/:stateSlug/:city" element={<PlacesToVisit />} />
            <Route path="/:stateSlug/:city/:placeId" element={<PlaceDetails />} />

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>
      <WhatsAppButton />
      <BackToTop />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
