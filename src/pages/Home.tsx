import { NewHero } from '../sections/NewHero';
import { PopularPlaces } from '../sections/PopularPlaces';
import { SweetMemories } from '../sections/SweetMemories';
import { ExploreMore } from '../sections/ExploreMore';
import { AdventureDestinations } from '../sections/AdventureDestinations';
import { BookTicketsBanner } from '../sections/BookTicketsBanner';
import { useSEO } from '../hooks/useSEO';

export function Home() {
  useSEO(
    'Logaa Holidays | Best Travel Agency in Madurai | South India Tour Packages',
    'Logaa Holidays is a top-rated travel agency in Madurai offering premium tour packages, local sightseeing, honeymoon packages, and reliable cab services across South India.',
    'Travel Agency in Madurai, Best Travel Agency in Madurai, Tour Operator in Madurai, Madurai Tour Packages, South India Tour Packages, Tamil Nadu Tour Packages'
  );

  return (
    <>
      <NewHero />
      <PopularPlaces />
      <SweetMemories />
      <ExploreMore />
      {/* <AdventureDestinations /> */}
      {/* <BookTicketsBanner /> */}
    </>
  );
}
