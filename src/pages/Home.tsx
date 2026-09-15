import { NewHero } from '../sections/NewHero';
import{Hero} from '../sections/Hero'
import { PopularPlaces } from '../sections/PopularPlaces';
import { SweetMemories } from '../sections/SweetMemories';
import { ExploreMore } from '../sections/ExploreMore';
import { AdventureDestinations } from '../sections/AdventureDestinations';
import { BookTicketsBanner } from '../sections/BookTicketsBanner';
import { useSEO } from '../hooks/useSEO';

export function Home() {
  useSEO(
    'Logaa Holidays | Best Travel Agency & Tour Operators in Madurai',
    'Logaa Holidays is the best travel agency in Madurai, offering customized domestic and international tour packages. Book family, group, and honeymoon holiday packages from Madurai.',
    'Travel Agency in Madurai, Best Travel Agency in Madurai, Holiday Packages from Madurai, Tour Packages from Madurai',
    undefined,
    {
      canonicalUrl: 'https://logaaholidays.com/',
      ogTitle: 'Logaa Holidays | Best Travel Agency & Tour Operators in Madurai',
      ogDescription: 'Logaa Holidays is the best travel agency in Madurai, offering customized domestic and international tour packages. Book family, group, and honeymoon holiday packages from Madurai.',
      ogUrl: 'https://logaaholidays.com/',
      ogImage: 'https://logaaholidays.com/og-image.jpg',
      twitterCard: 'summary_large_image',
      twitterTitle: 'Logaa Holidays | Best Travel Agency & Tour Operators in Madurai',
      twitterDescription: 'Logaa Holidays is the best travel agency in Madurai, offering customized domestic and international tour packages. Book family, group, and honeymoon holiday packages from Madurai.',
      twitterImage: 'https://logaaholidays.com/og-image.jpg',
    }
  );

  return (
    <>
      <Hero />
      <PopularPlaces />
      <SweetMemories />
      <ExploreMore />
      {/* <AdventureDestinations /> */}
      {/* <BookTicketsBanner /> */}
    </>
  );
}
