import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Send,
  BotMessageSquare,
  MapPin,
  Calendar,
  Users,
  Hotel,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

import {
  searchKnowledge,
  siteKnowledge,
  companyInfo
} from '../../data/chatbotKnowledge';

import type { KnowledgeEntry } from '../../data/chatbotKnowledge';

import {
  parseInput,
  searchPackages,
  INITIAL_STATE,
  type ChatState,
  type PackageSummary
} from '../../utils/chatbotEngine';


/* ============================================================
   TYPES
   ============================================================ */

type Message = {
  id: number;
  text: string;
  isBot: boolean;
  results?: KnowledgeEntry[];
  options?: string[];
  packageCards?: PackageSummary[];
};


/* ============================================================
   POPULAR REGIONS
   ============================================================ */

const POPULAR_REGIONS: Record<string, string[]> = {

  'South India': [
    'Kodaikanal',
    'Ooty',
    'Munnar',
    'Mysore',
    'Coorg',
    'Madurai',
    'Rameswaram',
    'Kanyakumari',
    'Kerala'
  ],

  'North India': [
    'Manali',
    'Shimla',
    'Kashmir',
    'Shirdi',
    'Delhi',
    'Agra',
    'Jaipur'
  ],

  'Kerala': [
    'Munnar',
    'Alleppey',
    'Thekkady',
    'Wayanad'
  ],

  'Karnataka': [
    'Mysore',
    'Coorg'
  ],

  'Tamil Nadu': [
    'Kodaikanal',
    'Ooty',
    'Madurai',
    'Rameswaram',
    'Kanyakumari'
  ],

  'Goa': [
    'Goa'
  ]
};


/* ============================================================
   ALTERNATIVE PACKAGE OPTIONS
   Shown when requested package is not available
   ============================================================ */

const ALTERNATIVE_PACKAGE_OPTIONS = [
  'South India Package',
  'North India Package',
  'Honeymoon Package',
  'International Package'
];


/* ============================================================
   AVAILABLE PACKAGE OPTIONS
   Shown specifically when we tell the user we don't have a
   package for the place they asked about — only lists what we
   genuinely offer today (no "International", since that just
   loops straight back into "not available").
   ============================================================ */

const AVAILABLE_PACKAGE_OPTIONS = [
  'South India Package',
  'North India Package',
  'Honeymoon Package'
];


/* ============================================================
   GENERIC FILLER WORDS
   Used to decide whether leftover text (after stripping
   "package", "tour", etc.) actually looks like someone naming
   a destination/package — "usa", "dubai", "japan trip" — versus
   a generic sentence like "i need some help planning".
   ============================================================ */

const GENERIC_FILLER_WORDS = new Set([
  'i', 'me', 'my', 'we', 'us', 'you', 'your',
  'a', 'an', 'the',
  'is', 'are', 'do', 'does', 'can', 'could', 'would',
  'need', 'want', 'looking', 'look', 'please', 'pls',
  'help', 'plan', 'planning', 'info', 'information',
  'details', 'detail', 'question', 'tell', 'about',
  'give', 'get', 'book', 'booking', 'order',
  'trip', 'tour', 'tours', 'package', 'packages', 'travel',
  'holiday', 'holidays',
  'suggest', 'recommend', 'something', 'anything',
  'good', 'best', 'nice',
  'hi', 'hello', 'hey'
]);


/* ============================================================
   DOES THIS LOOK LIKE AN UNKNOWN DESTINATION / PACKAGE?

   Example:

   "usa"                          → true  (short + meaningful)
   "usa package"                  → true  (same, after strip)
   "i need help planning a trip"  → false (long, generic)
   ============================================================ */

function looksLikeUnknownDestinationRequest(
  cleaned: string
): boolean {

  if (!cleaned) {
    return false;
  }

  const words = cleaned
    .split(' ')
    .filter(Boolean);

  // Real destination/package names are short. Longer sentences
  // are more likely a generic question, so leave those to the
  // normal "which destination" fallback instead of guessing.
  if (words.length === 0 || words.length > 3) {
    return false;
  }

  const meaningfulWords = words.filter(
    word => !GENERIC_FILLER_WORDS.has(word)
  );

  return meaningfulWords.length > 0;
}


/* ============================================================
   PACKAGE WORDS
   Used to detect package-related requests
   ============================================================ */

const PACKAGE_WORDS = [
  'package',
  'packages',
  'tour',
  'tours',
  'trip',
  'travel',
  'holiday',
  'holidays'
];


/* ============================================================
   CHECK WHETHER USER IS ASKING FOR A PACKAGE
   ============================================================ */

function isPackageRequest(input: string): boolean {

  const q = input
    .toLowerCase()
    .trim();

  return PACKAGE_WORDS.some(word =>
    q.includes(word)
  );
}


/* ============================================================
   REMOVE GENERIC PACKAGE WORDS
   Example:
   
   "usa package"
   → "usa"

   "japan tour package"
   → "japan"
   ============================================================ */

function extractRequestedPackageName(
  input: string
): string {

  return input
    .toLowerCase()
    .trim()

    .replace(/\bpackages\b/g, '')
    .replace(/\bpackage\b/g, '')

    .replace(/\btours\b/g, '')
    .replace(/\btour\b/g, '')

    .replace(/\btrip\b/g, '')
    .replace(/\btravel\b/g, '')

    .replace(/\bholidays\b/g, '')
    .replace(/\bholiday\b/g, '')

    .replace(/\s+/g, ' ')
    .trim();
}


/* ============================================================
   DISPLAY NAME
   Example:
   
   usa → USA
   japan → Japan
   dubai → Dubai
   ============================================================ */

function formatPackageName(
  value: string
): string {

  const upperCaseWords = [
    'usa',
    'uk',
    'uae',
    'usa',
    'us'
  ];

  if (
    upperCaseWords.includes(
      value.toLowerCase()
    )
  ) {
    return value.toUpperCase();
  }

  return value
    .split(' ')
    .map(word =>
      word.charAt(0).toUpperCase() +
      word.slice(1)
    )
    .join(' ');
}


/* ============================================================
   RESPONSE GENERATOR
   ============================================================ */

function processMessage(
  input: string,
  currentState: ChatState
): {
  text: string;
  options?: string[];
  packageCards?: PackageSummary[];
  newState: ChatState;
} {

  const q = input
    .toLowerCase()
    .trim();

  let newState = {
    ...currentState
  };


  /* ==========================================================
     GREETINGS
     ========================================================== */

  if (
    [
      'hi',
      'hello',
      'hey',
      'hai',
      'vanakkam',
      'helo'
    ].includes(q)
  ) {

    return {

      text:
        "Hello! 👋 Welcome to Logaa Holidays. I'm here to help you plan your perfect trip. Where are you planning to travel?",

      options: [
        'Kodaikanal',
        'Ooty',
        'Munnar',
        'Kerala',
        'Goa',
        'North India'
      ],

      newState: {
        ...INITIAL_STATE,
        awaitingDestination: true
      }
    };
  }


  /* ==========================================================
     THANK YOU
     ========================================================== */

  if (
    q.includes('thank') ||
    q.includes('thanks') ||
    q.includes('nandri')
  ) {

    return {

      text:
        "You're welcome! 😊 Feel free to ask anything else about our packages.",

      newState
    };
  }


  /* ==========================================================
     REGION / PACKAGE CATEGORY SELECTION
     
     Example:
     
     South India
     South India Package
     North India
     North India Package
     ========================================================== */

  const cleanedRegionQuery = q
    .replace(/\bpackages\b/g, '')
    .replace(/\bpackage\b/g, '')
    .replace(/\btours\b/g, '')
    .replace(/\btour\b/g, '')
    .replace(/\s+/g, ' ')
    .trim();


  const selectedRegion =
    Object.keys(POPULAR_REGIONS).find(
      region =>
        region.toLowerCase() ===
        cleanedRegionQuery
    );


  if (selectedRegion) {

    const destinations =
      POPULAR_REGIONS[selectedRegion];


    return {

      text:
        `Here are some popular ${selectedRegion} destinations. Which place would you like to explore?`,

      options: destinations,

      newState: {
        ...INITIAL_STATE,
        awaitingDestination: true
      }
    };
  }


  /* ==========================================================
     SPECIAL PACKAGE CATEGORY BUTTONS
     ========================================================== */

  if (
    cleanedRegionQuery ===
    'honeymoon'
  ) {

    return {

      text:
        'Here are our honeymoon package options. Which destination are you looking for?',

      options: [
        'Kodaikanal',
        'Ooty',
        'Munnar',
        'Kerala',
        'Kashmir',
        'Goa'
      ],

      newState: {
        ...INITIAL_STATE,
        awaitingDestination: true
      }
    };
  }


  if (
    cleanedRegionQuery ===
    'international'
  ) {

    return {

      text:
        'Please choose an available destination from our packages.',

      options: [
        'South India Package',
        'North India Package'
      ],

      newState: {
        ...INITIAL_STATE,
        awaitingDestination: true
      }
    };
  }


  /* ==========================================================
     PARSE USER INPUT USING EXISTING NLP ENGINE
     ========================================================== */

  const {
    foundDestinations,
    foundTypes,
    foundDurations,
    newState: nextState,
    tokens
  } = parseInput(
    input,
    currentState
  );

  newState = nextState;


  /* ==========================================================
     COMBINE CURRENT INPUT + COLLECTED STATE
     ========================================================== */

  const effectiveDestinations =
    new Set(foundDestinations);


  if (
    newState.collectedDestination
  ) {

    effectiveDestinations.add(
      newState.collectedDestination
    );
  }


  const effectiveTypes =
    new Set(foundTypes);


  if (
    newState.collectedTravelerType
  ) {

    effectiveTypes.add(
      newState.collectedTravelerType
    );
  }


  const effectiveDurations =
    new Set(foundDurations);


  if (
    newState.collectedDuration
  ) {

    effectiveDurations.add(
      newState.collectedDuration
    );
  }


  /* ==========================================================
     SEARCH PACKAGES
     ========================================================== */

  const packages =
    searchPackages(
      effectiveDestinations,
      effectiveTypes,
      effectiveDurations,
      tokens
    );


  /* ==========================================================
     UNKNOWN DESTINATION / PACKAGE DETECTION

     🔧 FIX: this used to only fire when the message literally
     contained a word like "package" or "tour" (isPackageRequest).
     That meant a bare place name with nothing else in it — e.g.
     just typing "usa" — never matched here, fell through every
     other branch, and landed back on the generic "Which
     destination are you looking for?" prompt instead of a clear
     "sorry, not available" message.

     Now this fires whenever NOTHING was recognised at all (no
     destination, no traveler type, no duration) and the leftover
     text looks like someone naming a place/package rather than a
     generic sentence.

     Example:

     usa
     USA package
     Japan package
     Dubai package
     Paris package
     ========================================================== */

  if (
    effectiveDestinations.size === 0 &&
    effectiveTypes.size === 0 &&
    effectiveDurations.size === 0
  ) {

    const requestedPackage =
      extractRequestedPackageName(input);


    if (
      looksLikeUnknownDestinationRequest(
        requestedPackage
      )
    ) {

      const displayPackage =
        formatPackageName(
          requestedPackage
        );


      return {

        text:
          `Sorry, we don't currently have a ${displayPackage} package with us.` +
          `\n\nRight now we offer packages across South India and North India. ` +
          `Would you like to check one of these instead?`,

        options:
          AVAILABLE_PACKAGE_OPTIONS,

        newState: {
          ...INITIAL_STATE
        }
      };
    }
  }


  /* ==========================================================
     NO PACKAGE FOUND AFTER VALID FILTER
     
     Example:
     
     Kodaikanal 10 days
     
     Kodaikanal exists,
     but 10 Days package does not exist.
     ========================================================== */

  if (
    packages.length === 0 &&
    (
      effectiveDestinations.size > 0 ||
      effectiveTypes.size > 0 ||
      effectiveDurations.size > 0
    )
  ) {

    const destinationName =
      Array.from(
        effectiveDestinations
      )[0] ||
      'this destination';


    const durationName =
      Array.from(
        effectiveDurations
      )[0];


    return {

      text:
        `Sorry, we don't have a matching package for ${destinationName}` +
        `${durationName ? ` with ${durationName}` : ''} right now.` +
        `\n\nWould you like to try another package?`,

      options:
        ALTERNATIVE_PACKAGE_OPTIONS,

      newState: {
        ...INITIAL_STATE
      }
    };
  }


  /* ==========================================================
     AUTO SET STATE
     ========================================================== */

  if (
    !newState.collectedDestination &&
    effectiveDestinations.size > 0
  ) {

    newState.collectedDestination =
      Array.from(
        effectiveDestinations
      )[0];
  }


  if (
    !newState.collectedTravelerType &&
    effectiveTypes.size > 0
  ) {

    newState.collectedTravelerType =
      Array.from(
        effectiveTypes
      )[0];
  }


  if (
    !newState.collectedDuration &&
    effectiveDurations.size > 0
  ) {

    newState.collectedDuration =
      Array.from(
        effectiveDurations
      )[0];
  }


  /* ==========================================================
     SMART SEARCH FLOW
     ========================================================== */

  const hasDestination =
    effectiveDestinations.size > 0;


  const hasTravelerType =
    effectiveTypes.size > 0;


  const hasDuration =
    effectiveDurations.size > 0;


  /* ==========================================================
     NO DESTINATION
     ========================================================== */

  if (!hasDestination) {

    newState.awaitingDestination = true;

    return {

      text:
        'Which destination are you looking for?',

      options: [
        'Kodaikanal',
        'Ooty',
        'Munnar',
        'Kerala',
        'Goa',
        'North India'
      ],

      newState
    };
  }


  /* ==========================================================
     DESTINATION ONLY
     ========================================================== */

  if (
    hasDestination &&
    !hasDuration &&
    !hasTravelerType
  ) {

    return {

      text:
        `We found packages for ${Array.from(
          effectiveDestinations
        )[0]}. What would you like to check?`,

      options: [
        '1 Day',
        '2 Days',
        '3 Days',
        '4+ Days',
        'Honeymoon',
        'Family'
      ],

      newState
    };
  }


  /* ==========================================================
     PACKAGE DISPLAY
     ========================================================== */

  if (packages.length > 0) {

    /* --------------------------------------------------------
       DESTINATION ONLY
       -------------------------------------------------------- */

    if (
      effectiveTypes.size === 0 &&
      effectiveDurations.size === 0 &&
      tokens.length <= 1
    ) {

      return {

        text:
          `We've got some amazing ${
            Array.from(
              effectiveDestinations
            )[0] || 'tour'
          } packages! 😍 Which one would you like to check out?`,

        options: [
          '1 Day',
          '2 Days',
          'Honeymoon',
          'Family'
        ],

        newState
      };
    }


    /* --------------------------------------------------------
       HIGH CONFIDENCE PACKAGE MATCH
       -------------------------------------------------------- */

    const matchingPackages =
      packages;


    const destName =
      newState.collectedDestination ||
      Array.from(
        effectiveDestinations
      )[0] ||
      '';


    const durationName =
      Array.from(
        effectiveDurations
      )[0] ||
      '';


    /*
     * Reset state after package results
     */

    const finalState = {
      ...INITIAL_STATE
    };


    return {

      text:
        `Here are ${matchingPackages.length} matching package` +
        `${
          matchingPackages.length === 1
            ? ''
            : 's'
        }` +
        `${
          destName
            ? ' for ' + destName
            : ''
        }` +
        `${
          durationName
            ? ' (' + durationName + ')'
            : ''
        }:`,


      packageCards:
        matchingPackages,


      newState:
        finalState
    };
  }


  /* ==========================================================
     FINAL FALLBACK
     ========================================================== */

  return {

    text:
      "That's a great question! I want to make sure I give you accurate information. Could you share a bit more — like the destination, number of days, or type of trip? Or you can connect directly with our travel team for a personalized recommendation.",

    options: [
      'South India Package',
      'North India Package',
      'Honeymoon Package',
      'International Package'
    ],

    newState
  };
}


/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export function Chatbot() {

  const [isOpen, setIsOpen] =
    useState(false);


  const [inputText, setInputText] =
    useState('');


  const [chatState, setChatState] =
    useState<ChatState>(
      INITIAL_STATE
    );


  const [messages, setMessages] =
    useState<Message[]>([

      {
        id: 1,

        text:
          "Hi there! 👋 Welcome to Logaa Holidays. I can help you find the right tour package, destination info, or any service. What are you planning?",

        isBot: true,

        options: [
          'South India Tour',
          'North India Tour',
          'Honeymoon Package',
          'International Tour'
        ]
      }

    ]);


  const messagesEndRef =
    useRef<HTMLDivElement>(null);


  /* ==========================================================
     AUTO SCROLL
     ========================================================== */

  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });

  }, [
    messages,
    isOpen
  ]);


  /* ==========================================================
     HANDLE SEND
     ========================================================== */

  const handleSend = (
    text: string
  ) => {

    if (!text.trim()) {
      return;
    }


    /* --------------------------------------------------------
       USER MESSAGE
       -------------------------------------------------------- */

    const userMsg: Message = {

      id: Date.now(),

      text,

      isBot: false
    };


    setMessages(prev => [
      ...prev,
      userMsg
    ]);


    setInputText('');


    /* --------------------------------------------------------
       BOT RESPONSE
       -------------------------------------------------------- */

    setTimeout(() => {


      /* ======================================================
         WHATSAPP CTA
         ====================================================== */

      if (
        text.startsWith(
          'Enquire about'
        ) ||
        text ===
          'Enquire on WhatsApp'
      ) {

        const subject =
          text
            .replace(
              'Enquire about ',
              ''
            )
            .replace(
              'Enquire on WhatsApp',
              'a custom tour package'
            );


        const msg =
          `Hi Logaa Holidays, I would like to enquire about ${subject}.`;


        window.open(
          `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(msg)}`,
          '_blank'
        );


        setMessages(prev => [

          ...prev,

          {

            id:
              Date.now() + 1,

            text:
              "I've opened WhatsApp for you to connect with our travel expert. They'll get back to you shortly! 😊",

            isBot: true
          }

        ]);


        setChatState(
          INITIAL_STATE
        );


        return;
      }


      /* ======================================================
         NORMAL MESSAGE
         ====================================================== */

      const response =
        processMessage(
          text,
          chatState
        );


      setChatState(
        response.newState
      );


      setMessages(prev => [

        ...prev,

        {

          id:
            Date.now() + 1,

          ...response,

          isBot: true
        }

      ]);

    }, 500);
  };


  /* ==========================================================
     JSX
     ========================================================== */

  return (

    <div
      className="
        fixed
        bottom-16
        right-2
        sm:bottom-24
        sm:right-4
        lg:bottom-24
        lg:right-6
        z-[9999]
        font-sans
      "
    >


      {/* ======================================================
          CHATBOT WINDOW
          ====================================================== */}

      {isOpen && (

        <div
          className="
            w-[calc(100vw-32px)]
            sm:w-[380px]
            bg-white
            rounded-2xl
            shadow-[0_10px_40px_rgba(0,0,0,0.18)]
            overflow-hidden
            border
            border-slate-100
            flex
            flex-col
            h-[520px]
            max-h-[calc(100vh-100px)]
            animate-in
            fade-in
            slide-in-from-bottom-4
            duration-300
            origin-bottom-right
          "
        >


          {/* ==================================================
              HEADER
              ================================================== */}

          <div
            className="
              bg-[var(--color-primary-forest)]
              text-white
              p-4
              flex
              justify-between
              items-center
              shrink-0
            "
          >

            <div
              className="
                flex
                items-center
                gap-3
              "
            >

              <div
                className="
                  w-10
                  h-10
                  bg-white
                  rounded-full
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                  shrink-0
                "
              >

                <img
                  src="/logo.ico"
                  alt="Logaa Holidays Assistant"
                  className="
                    w-7
                    h-7
                    object-contain
                  "
                />

              </div>


              <div>

                <h3
                  className="
                    font-bold
                    text-base
                    leading-tight
                  "
                >
                  Logaa Holidays Assistant
                </h3>


                <p
                  className="
                    text-emerald-100
                    text-xs
                    flex
                    items-center
                    gap-1.5
                  "
                >

                  <span
                    className="
                      w-1.5
                      h-1.5
                      rounded-full
                      bg-green-400
                      animate-pulse
                      inline-block
                    "
                  />

                  Ask me anything about our packages

                </p>

              </div>

            </div>


            <button
              onClick={() =>
                setIsOpen(false)
              }
              className="
                text-white/80
                hover:text-white
                p-1
                rounded-full
                hover:bg-white/20
                transition-colors
              "
            >

              <X className="w-5 h-5" />

            </button>

          </div>


          {/* ==================================================
              MESSAGES
              ================================================== */}

          <div
            className="
              flex-1
              p-4
              bg-slate-50
              flex
              flex-col
              gap-4
              overflow-y-auto
            "
          >

            {messages.map(msg => (

              <div
                key={msg.id}
                className={`
                  flex
                  flex-col
                  ${
                    msg.isBot
                      ? 'items-start'
                      : 'items-end'
                  }
                  max-w-full
                `}
              >


                {/* ============================================
                    MESSAGE BUBBLE
                    ============================================ */}

                <div
                  className={`
                    p-3
                    rounded-2xl
                    shadow-sm
                    text-sm
                    max-w-[85%]
                    whitespace-pre-line

                    ${
                      msg.isBot
                        ? `
                          bg-white
                          border
                          border-slate-100
                          rounded-tl-sm
                          text-slate-800
                        `
                        : `
                          bg-[var(--color-primary-forest)]
                          text-white
                          rounded-tr-sm
                        `
                    }
                  `}
                >

                  {msg.text}

                </div>


                {/* ============================================
                    SEARCH RESULTS
                    ============================================ */}

                {msg.results &&
                  msg.results.length > 0 && (

                    <div
                      className="
                        flex
                        flex-col
                        gap-2
                        mt-2
                        w-full
                      "
                    >

                      {msg.results.map(
                        (r, i) => (

                          <Link
                            key={i}
                            to={r.url}
                            onClick={() =>
                              setIsOpen(false)
                            }
                            className="
                              bg-white
                              border
                              border-slate-200
                              hover:border-[var(--color-primary-forest)]
                              rounded-xl
                              px-3
                              py-2.5
                              text-sm
                              flex
                              items-center
                              justify-between
                              group
                              shadow-sm
                              hover:shadow-md
                              transition-all
                            "
                          >

                            <div>

                              <p
                                className="
                                  font-semibold
                                  text-slate-800
                                  group-hover:text-[var(--color-primary-forest)]
                                  transition-colors
                                "
                              >
                                {r.name}
                              </p>


                              <p
                                className="
                                  text-xs
                                  text-slate-400
                                  truncate
                                  max-w-[200px]
                                "
                              >
                                {r.description}
                              </p>

                            </div>


                            <span
                              className="
                                text-[var(--color-primary-forest)]
                                text-lg
                              "
                            >
                              →
                            </span>

                          </Link>

                        )
                      )}

                    </div>

                  )}


                {/* ============================================
                    PACKAGE CARDS
                    ============================================ */}

                {msg.packageCards &&
                  msg.packageCards.length > 0 && (

                    <div
                      className="
                        flex
                        flex-col
                        gap-3
                        mt-2
                        w-full
                      "
                    >

                      {msg.packageCards.map(
                        (pkg, i) => (

                          <div
                            key={i}
                            className="
                              bg-white
                              border
                              border-slate-200
                              rounded-xl
                              overflow-hidden
                              shadow-sm
                              flex
                              flex-col
                              text-sm
                            "
                          >


                            {/* Package Header */}

                            <div
                              className="
                                p-3
                                bg-slate-50
                                border-b
                                border-slate-100
                                flex
                                items-start
                                gap-2
                              "
                            >

                              <MapPin
                                className="
                                  w-4
                                  h-4
                                  text-emerald-600
                                  shrink-0
                                  mt-0.5
                                "
                              />


                              <div>

                                <h4
                                  className="
                                    font-bold
                                    text-slate-800
                                    leading-tight
                                  "
                                >
                                  {pkg.title}
                                </h4>


                                <p
                                  className="
                                    text-xs
                                    text-slate-500
                                    mt-0.5
                                  "
                                >
                                  {pkg.destination}
                                </p>

                              </div>

                            </div>


                            {/* Package Details */}

                            <div
                              className="
                                p-3
                                space-y-2
                              "
                            >

                              {/* Duration */}

                              <div
                                className="
                                  flex
                                  items-center
                                  gap-2
                                  text-xs
                                  text-slate-600
                                "
                              >

                                <Calendar
                                  className="
                                    w-3.5
                                    h-3.5
                                  "
                                />

                                <span>
                                  {pkg.duration}
                                </span>

                              </div>


                              {/* Traveler Type */}

                              <div
                                className="
                                  flex
                                  items-center
                                  gap-2
                                  text-xs
                                  text-slate-600
                                "
                              >

                                <Users
                                  className="
                                    w-3.5
                                    h-3.5
                                  "
                                />

                                <span>
                                  Best for:{' '}
                                  {pkg.travelerTypes.join(
                                    ' / '
                                  )}
                                </span>

                              </div>


                              {/* Hotel */}

                              <div
                                className="
                                  flex
                                  items-center
                                  gap-2
                                  text-xs
                                  text-slate-600
                                "
                              >

                                <Hotel
                                  className="
                                    w-3.5
                                    h-3.5
                                  "
                                />

                                <span>
                                  Hotel:{' '}
                                  {pkg.hotelCategory}
                                </span>

                              </div>


                              {/* Places */}

                              <div
                                className="
                                  flex
                                  items-start
                                  gap-2
                                  text-xs
                                  text-slate-600
                                "
                              >

                                <CheckCircle2
                                  className="
                                    w-3.5
                                    h-3.5
                                    text-emerald-500
                                    shrink-0
                                    mt-0.5
                                  "
                                />

                                <span
                                  className="
                                    line-clamp-2
                                  "
                                >
                                  Places:{' '}
                                  {pkg.places}
                                </span>

                              </div>

                            </div>


                            {/* WhatsApp */}

                            <div
                              className="
                                px-3
                                pb-3
                                pt-1
                              "
                            >

                              <a
                                href={
                                  `https://wa.me/${companyInfo.whatsapp}` +
                                  `?text=${encodeURIComponent(
                                    `Hi Logaa Holidays, I'm interested in the ${pkg.title} (${pkg.destination}). Please share more details and the exact price quote.`
                                  )}`
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                  w-full
                                  bg-[var(--color-primary-forest)]
                                  hover:bg-emerald-800
                                  text-white
                                  font-medium
                                  py-2
                                  rounded-lg
                                  flex
                                  items-center
                                  justify-center
                                  gap-2
                                  transition-colors
                                "
                              >

                                <span>
                                  📲 Logaa Holidays — Enquire Now
                                </span>

                              </a>

                            </div>

                          </div>

                        )
                      )}

                    </div>

                  )}


                {/* ============================================
                    QUICK REPLY OPTIONS
                    ============================================ */}

                {msg.options &&
                  msg.options.length > 0 && (

                    <div
                      className="
                        flex
                        flex-wrap
                        gap-2
                        mt-2
                      "
                    >

                      {msg.options.map(
                        (opt, i) => (

                          <button
                            key={i}
                            onClick={() =>
                              handleSend(opt)
                            }
                            className="
                              bg-white
                              border
                              border-[var(--color-primary-forest)]
                              text-[var(--color-primary-forest)]
                              hover:bg-[var(--color-primary-forest)]
                              hover:text-white
                              text-xs
                              px-3
                              py-1.5
                              rounded-full
                              transition-colors
                              shadow-sm
                            "
                          >

                            {opt}

                          </button>

                        )
                      )}

                    </div>

                  )}

              </div>

            ))}


            <div
              ref={messagesEndRef}
            />

          </div>


          {/* ==================================================
              INPUT
              ================================================== */}

          <div
            className="
              p-3
              bg-white
              border-t
              border-slate-100
              shrink-0
            "
          >

            <form
              onSubmit={e => {

                e.preventDefault();

                handleSend(
                  inputText
                );

              }}
              className="
                flex
                items-center
                gap-2
              "
            >

              <input
                type="text"
                value={inputText}
                onChange={e =>
                  setInputText(
                    e.target.value
                  )
                }
                placeholder="Type a destination or question..."
                className="
                  flex-1
                  bg-slate-100
                  rounded-full
                  px-4
                  py-2.5
                  text-base
                  sm:text-sm
                  text-slate-800
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[var(--color-primary-forest)]/30
                "
              />


              <button
                type="submit"
                disabled={
                  !inputText.trim()
                }
                className="
                  w-10
                  h-10
                  bg-[var(--color-primary-forest)]
                  text-white
                  rounded-full
                  flex
                  items-center
                  justify-center
                  shrink-0
                  disabled:opacity-40
                  hover:opacity-90
                  transition-opacity
                "
              >

                <Send
                  className="w-4 h-4"
                />

              </button>

            </form>

          </div>

        </div>

      )}


      {/* ======================================================
          CHATBOT TOGGLE
          ====================================================== */}

      {!isOpen && (

        <button
          onClick={() =>
            setIsOpen(true)
          }
          className="
            w-10
            h-10
            sm:w-14
            sm:h-14
            bg-[var(--color-primary-forest)]
            text-white
            rounded-full
            flex
            items-center
            justify-center
            shadow-[0_4px_14px_rgba(7,42,51,0.4)]
            hover:scale-110
            hover:shadow-[0_6px_20px_rgba(7,42px,51,0.5)]
            transition-all
            duration-300
          "
          aria-label="Open AI Travel Assistant"
        >

          <BotMessageSquare
            className="
              w-5
              h-5
              sm:w-6
              sm:h-6
            "
          />

        </button>

      )}

    </div>
  );
}