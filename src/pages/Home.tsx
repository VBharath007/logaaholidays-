import { Hero } from '../sections/Hero';
import { PopularPlaces } from '../sections/PopularPlaces';
import { SweetMemories } from '../sections/SweetMemories';
import { ExploreMore } from '../sections/ExploreMore';
import { AdventureDestinations } from '../sections/AdventureDestinations';
import { BookTicketsBanner } from '../sections/BookTicketsBanner';

export function Home() {
  return (
    <>
      <Hero />
      <PopularPlaces />
      <SweetMemories />
      <ExploreMore />
      <AdventureDestinations />
      <BookTicketsBanner />
    </>
  );
}
