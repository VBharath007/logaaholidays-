import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface BreadcrumbProps {
  /**
   * Optional manual items if the page wants full control.
   */
  items?: BreadcrumbItem[];

  /**
   * Optional manual override mapping for specific slug segments or full paths.
   */
  overrides?: Record<string, string>;

  /**
   * Custom label for the last breadcrumb item.
   */
  lastItemTitle?: string;

  /**
   * Visual variant:
   * - 'hero': Light text on dark background overlay (default)
   * - 'page': Darker slate text on light background
   */
  variant?: 'hero' | 'page';

  /**
   * Additional custom wrapper class names.
   */
  className?: string;

  /**
   * Whether the last item should also render as an active link.
   */
  linkLastItem?: boolean;
}

const KNOWN_SLUG_MAP: Record<string, string> = {
  // Navigation & Static Pages
  about: 'About Us',
  contact: 'Contact Us',
  services: 'Services',
  gallery: 'Gallery',
  testimonials: 'Testimonials',

  // Policies
  'privacy-policy': 'Privacy Policy',
  'terms-and-conditions': 'Terms & Conditions',
  'cancellation-policy': 'Cancellation Policy',

  // Regions & Core Tour Categories
  'tour-packages': 'Tour Packages',
  packages: 'Tour Packages',
  'north-india-tour-packages': 'North India Tour Packages',
  'south-india-package': 'South India Package',
  'south-india-tour-packages': 'South India Tour Packages',
  'honeymoon-packages': 'Honeymoon Packages',
  'honeymoon-package': 'Honeymoon Packages',
  'tamilnadu-tourism': 'Tamil Nadu Tour Packages',
  'kerala-tourism': 'Kerala Tour Packages',
  'karnataka-tour-packages': 'Karnataka Tour Packages',

  // Destinations & Places
  destination: 'Destinations',
  destinations: 'Destinations',
  tamilnadu: 'Tamil Nadu',
  kerala: 'Kerala',
  karnataka: 'Karnataka',
  madurai: 'Madurai',
  'madurai-tourism': 'Madurai',
  rameswaram: 'Rameswaram',
  'rameswaram-tourism': 'Rameswaram',
  kanyakumari: 'Kanyakumari',
  'kanyakumari-tourism': 'Kanyakumari',
  kodaikanal: 'Kodaikanal',
  'kodaikanal-tourism': 'Kodaikanal',
  ooty: 'Ooty',
  'ooty-tourism': 'Ooty',
  chennai: 'Chennai',
  'chennai-tourism': 'Chennai',
  munnar: 'Munnar',
  'munnar-tourism': 'Munnar',
  alleppey: 'Alleppey',
  'alleppey-tourism': 'Alleppey',
  thekkady: 'Thekkady',
  'thekkady-tourism': 'Thekkady',
  vagamon: 'Vagamon',
  'vagamon-tourism': 'Vagamon',
  cochin: 'Cochin',
  'cochin-tourism': 'Cochin',
  'pazhamudir-solai': 'Pazhamudir Solai',

  // Common Specific Tour Categories
  'shimla-tours': 'Shimla Tours',
  'manali-tours': 'Manali Tours',
  'manali-volvo-tours': 'Manali Volvo Tours',
  'kashmir-tours': 'Kashmir Tours',
  'karnataka-tours': 'Karnataka Tours',
  'kerala-tours': 'Kerala Tours',
  'andaman-tours': 'Andaman Tours',
  'andaman-island-tour': 'Andaman Island Tour',
  'shirdi-tours': 'Shirdi Tours',
  'varanasi-tours': 'Varanasi Tours',
  'ayodhya-tours': 'Ayodhya Tours',
  'golden-triangle-tours': 'Golden Triangle Tours',
  'goa-honeymoon-packages': 'Goa Honeymoon Packages',
  'andaman-honeymoon-packages': 'Andaman Honeymoon Packages',
  'sikkim-darjeeling-honeymoon-packages': 'Sikkim Darjeeling Honeymoon Packages',
  'maldives-honeymoon-packages': 'Maldives Honeymoon Packages',
  'karnataka-honeymoon-packages': 'Karnataka Honeymoon Packages',
  'kashmir-honeymoon-packages': 'Kashmir Honeymoon Packages',
  'himachal-honeymoon-packages': 'Himachal Honeymoon Packages',
  'tamil-nadu-honeymoon-packages': 'Tamil Nadu Honeymoon Packages',
  'kerala-honeymoon-packages': 'Kerala Honeymoon Packages',
};

/**
 * Automatically converts a URL slug into a cleanly formatted title.
 * Examples:
 *   "north-india-tour-packages" -> "North India Tour Packages"
 *   "shimla-highlights-package" -> "Shimla Highlights Package"
 *   "kerala-5-days-package"     -> "Kerala 5 Days Package"
 */
export function formatSlugToTitle(slug: string): string {
  if (!slug) return '';
  const decoded = decodeURIComponent(slug).trim().toLowerCase();

  if (KNOWN_SLUG_MAP[decoded]) {
    return KNOWN_SLUG_MAP[decoded];
  }

  // Handle double dashes representing '&'
  const normalized = decoded
    .replace(/--+/g, ' & ')
    .replace(/[-_]+/g, ' ')
    .trim();

  // Words that require special uppercase handling
  const acronyms = new Set(['AC', 'SUV', 'VIP', 'FAQ', 'INR', 'USD', 'CMBT']);

  return normalized
    .split(/\s+/)
    .map(word => {
      const upper = word.toUpperCase();
      if (acronyms.has(upper)) return upper;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items: customItems,
  overrides = {},
  lastItemTitle,
  variant = 'hero',
  className = '',
  linkLastItem = false,
}) => {
  const location = useLocation();

  // Build breadcrumb items from URL if not manually provided
  const breadcrumbItems: BreadcrumbItem[] = React.useMemo(() => {
    if (customItems && customItems.length > 0) {
      return customItems;
    }

    const segments = location.pathname.split('/').filter(Boolean);
    const rawItems: BreadcrumbItem[] = [{ name: 'Home', path: '/' }];

    let accumulatedPath = '';
    segments.forEach((segment, index) => {
      accumulatedPath += `/${segment}`;
      const isLast = index === segments.length - 1;

      let name: string;
      if (isLast && lastItemTitle) {
        name = lastItemTitle;
      } else if (overrides[segment]) {
        name = overrides[segment];
      } else if (overrides[accumulatedPath]) {
        name = overrides[accumulatedPath];
      } else {
        name = formatSlugToTitle(segment);
      }

      let path = accumulatedPath;

      // Split 'tour-packages' into Honeymoon, South India, or North India based on category
      if (segment === 'tour-packages' && segments.length > 1) {
        const category = segments[1].toLowerCase();

        if (category.includes('honeymoon')) {
          name = 'Honeymoon Packages';
          path = '/honeymoon-packages';
        } else {
          const northIndiaKeywords = ['shirdi', 'varanasi', 'manali', 'shimla', 'kashmir', 'delhi', 'agra', 'jaipur', 'kasi', 'prayagraj', 'gaya', 'shillong', 'cherrapunji', 'guwahati'];
          const isNorthIndia = northIndiaKeywords.some(kw => category.includes(kw));

          if (isNorthIndia) {
            name = 'North India';
            path = '/north-india-tour-packages';
          } else {
            name = 'South India';
            path = '/south-india-package';
          }
        }
      }

      // If this segment is a city inside a state-tourism route, rewrite its path to point to the full DestinationOverview
      if (
        segments.length >= 2 &&
        index === 1 &&
        segments[0].endsWith('-tourism') &&
        !segment.endsWith('-tourism') &&
        !segment.endsWith('-packages') &&
        !isLast
      ) {
        // e.g. path is /tamilnadu-tourism/rameswaram -> rewrite to /destination/tamilnadu/rameswaram-tourism
        const stateBase = segments[0].replace('-tourism', '').replace('-tour', '');
        path = `/destination/${stateBase}/${segment}-tourism`;
      }

      // Also catch if the segment itself is something like rameswaram-tourism
      if (segment.endsWith('-tourism') && index > 0 && !segments[0].startsWith('destination')) {
        const stateBase = segments[0].replace('-tourism', '').replace('-tour', '');
        path = `/destination/${stateBase}/${segment}`;
      }

      rawItems.push({
        name,
        path,
      });
    });

    // Deduplicate consecutive items with identical or duplicate names (e.g. "Tamil Nadu" > "Tamil Nadu")
    const filteredItems: BreadcrumbItem[] = [];
    rawItems.forEach((item, i) => {
      if (i === 0) {
        filteredItems.push(item);
        return;
      }
      const prev = filteredItems[filteredItems.length - 1];
      if (prev && prev.name.trim().toLowerCase() === item.name.trim().toLowerCase()) {
        // Keep the more specific/deeper path and do not duplicate the name
        filteredItems[filteredItems.length - 1] = item;
      } else {
        filteredItems.push(item);
      }
    });

    return filteredItems;
  }, [location.pathname, customItems, overrides, lastItemTitle]);

  if (breadcrumbItems.length <= 1) {
    return null;
  }

  // JSON-LD Breadcrumb Schema for search engine indexing
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: window.location.origin + item.path,
    })),
  };

  const isHero = variant === 'hero';

  const containerStyle = isHero
    ? 'flex flex-wrap items-center gap-2 text-white/90 text-base md:text-lg font-semibold mb-4 drop-shadow-md'
    : 'flex flex-wrap items-center gap-2 text-sm font-medium text-slate-500 mb-4';

  const linkStyle = isHero
    ? 'hover:text-white transition-colors relative top-[-7px] md:top-0'
    : 'hover:text-[var(--color-blue-ocean)] transition-colors';

  const chevronStyle = isHero
    ? 'w-4 h-4 md:w-5 md:h-5 relative top-[-7px] md:top-0 shrink-0 text-white/70'
    : 'w-4 h-4 shrink-0 text-slate-400';

  const activeStyle = isHero
    ? 'text-white font-bold relative top-[-7px] md:top-0'
    : 'text-slate-800 font-bold';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`${containerStyle} ${className} ${variant === "hero" ? "max-[320px]:mt-4" : ""
          }`.trim()}
      >
        <ol
          className={`
      flex flex-wrap items-center
      gap-x-1 gap-y-0
      md:gap-x-2 md:gap-y-1
      m-0 p-0 list-none
      relative bottom-[-15px]
      ${variant === "hero"
              ? "max-[320px]:bottom-0 max-[320px]:gap-x-1"
              : ""
            }
    `}
        >
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;

            return (
              <li
                key={item.path}
                className={`flex items-center gap-1.5 md:gap-2 ${isLast ? "min-w-0 max-w-full" : "shrink-0"
                  } ${variant === "hero" ? "max-[320px]:gap-1" : ""}`}
              >
                {index > 0 && (
                  <ChevronRight
                    className={`
                ${chevronStyle}
                w-3.5 h-3.5
                md:w-5 md:h-5
                shrink-0
                ${variant === "hero"
                        ? "relative top-[-14px] max-[320px]:top-[-20px] max-[320px]:w-3 max-[320px]:h-3"
                        : ""
                      }
              `}
                    aria-hidden="true"
                  />
                )}

                {isLast && !linkLastItem ? (
                  <span
                    className={`
                ${activeStyle}
                min-w-0 break-words
                md:whitespace-nowrap
                ${variant === "hero"
                        ? "relative top-[-14px] max-[320px]:top-[-20px] max-[320px]:text-[11px] max-[320px]:leading-4"
                        : ""
                      }
              `}
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className={`
                ${linkStyle}
                min-w-0 break-words
                md:whitespace-nowrap
                ${variant === "hero"
                        ? "max-[320px]:text-[11px] max-[320px]:leading-4"
                        : ""
                      }
              `}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
