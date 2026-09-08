import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { searchKnowledge, siteKnowledge, companyInfo } from '../../data/chatbotKnowledge';
import type { KnowledgeEntry } from '../../data/chatbotKnowledge';

type Message = {
  id: number;
  text: string;
  isBot: boolean;
  results?: KnowledgeEntry[];
  options?: string[];
};

// ─── Response generator ─────────────────────────────────────────────────────
function generateResponse(input: string): { text: string; results?: KnowledgeEntry[]; options?: string[] } {
  const q = input.toLowerCase().trim();

  // Greetings
  if (['hi', 'hello', 'hey', 'hai', 'vanakkam', 'helo'].includes(q)) {
    return {
      text: "Hello! 👋 Welcome to Logaa Holidays. I'm here to help you plan your perfect trip. What are you looking for — a domestic tour, honeymoon package, international holiday, or something else?",
      options: ['South India Tour', 'North India Tour', 'Honeymoon Package', 'International Tour']
    };
  }

  // Thank you
  if (q.includes('thank') || q.includes('thanks') || q.includes('nandri')) {
    return { text: "You're welcome! 😊 Feel free to ask anything else about our packages or services." };
  }

  // Contact / Phone / WhatsApp
  if (q.includes('contact') || q.includes('phone') || q.includes('call') || q.includes('whatsapp') || q.includes('reach')) {
    return {
      text: `You can reach us anytime:\n📞 ${companyInfo.phone}\n📧 ${companyInfo.email}\n📍 ${companyInfo.address}\n\nOr click the WhatsApp button on this page to chat directly!`,
    };
  }

  // Address / Location
  if (q.includes('address') || q.includes('location') || q.includes('where are you') || q.includes('office')) {
    return {
      text: `Our office is at:\n📍 ${companyInfo.address}\n\nWe're based in Madurai and serve travelers across India.`,
    };
  }

  // Price / Cost / Budget
  if (q.includes('price') || q.includes('cost') || q.includes('budget') || q.includes('how much') || q.includes('rate') || q.includes('charge') || q.includes('vilai') || q.includes('pakam')) {
    return {
      text: "Package prices vary based on the destination, number of people, hotel category, and duration. For an exact quote tailored to your needs, just share your preferences and our team will get back to you quickly.",
    };
  }

  // ── INTELLIGENT SEARCH ENGINE (PRIORITY) ──────────────────────────────────
  // Run the semantic search engine first
  const searchEngineResults = searchKnowledge(q);
  
  // If it's a multi-word specific query (e.g. "ooty honeymoon") and we have results,
  // we MUST use the intelligent search engine to avoid generic hardcoded responses.
  const wordCount = q.split(/\s+/).length;
  if (wordCount >= 2 && searchEngineResults.length > 0) {
    const firstName = searchEngineResults[0].name;
    let enquireText = firstName;
    if (firstName.toLowerCase() === 'home' || firstName.toLowerCase().includes('contact') || firstName.toLowerCase().includes('about')) {
      enquireText = 'Tour Packages';
    }
    
    return {
      text: `Great choice! Here's what I found for "${input}". Check out the details below and feel free to ask me anything specific about the itinerary, duration, or inclusions.`,
      results: searchEngineResults,
      options: [`Enquire about ${enquireText}`]
    };
  }

  // ── FALLBACK HARDCODED CATEGORIES (GENERIC SINGLE WORD) ──────────────────

  // Honeymoon / Couple / Romantic — return ALL honeymoon categories
  if (q === 'honeymoon' || q === 'honey moon' || q === 'couple' || q === 'romantic') {
    const allHoneymoon = siteKnowledge.filter(entry =>
      entry.keywords.some(kw => kw.includes('honeymoon')) ||
      entry.name.toLowerCase().includes('honeymoon')
    );
    return {
      text: "Congratulations! 🥂 We have beautiful honeymoon packages across India and abroad. Choose your dream destination:",
      results: allHoneymoon,
    };
  }

  // Family tour
  if (q === 'family' || q === 'kids' || q === 'family tour') {
    return {
      text: "We love planning family holidays! Our family packages are designed for comfort, fun, and memorable experiences for all age groups.",
      results: searchKnowledge('south india').slice(0, 3),
    };
  }

  // Pilgrimage / Temple / Yatra / Spiritual
  if (q === 'temple' || q === 'pilgrimage' || q === 'spiritual' || q === 'yatra') {
    const combinedResults = [
      ...searchKnowledge('shirdi yatra'),
      ...searchKnowledge('varanasi'),
      ...searchKnowledge('palani tours'),
      ...searchKnowledge('rameswaram')
    ];
    const uniqueResults = Array.from(new Map(combinedResults.map(item => [item.url, item])).values()).slice(0, 4);

    return {
      text: "We specialize in spiritual and temple tours! From powerful local shrines to grand yatras across India, we arrange comfortable travel for your devotional journeys. Here are some of our popular divine packages:",
      results: uniqueResults,
      options: ['Custom Spiritual Tour']
    };
  }

  // North India
  if (q === 'north india tour' || q === 'north india') {
    const allNorthIndia = siteKnowledge.filter(entry =>
      !entry.name.toLowerCase().includes('honeymoon') &&
      entry.keywords.some(kw =>
        kw === 'north india' || kw === 'north india tour' || kw === 'north india package' ||
        kw === 'kashmir' || kw === 'manali' || kw === 'shimla' || kw === 'himachal' ||
        kw === 'golden triangle' || kw === 'varanasi' || kw === 'varanasi tour' ||
        kw === 'shirdi' || kw === 'shirdi yatra' || kw === 'delhi' || kw === 'agra' ||
        kw === 'jaipur' || kw === 'manali volvo'
      )
    );
    return {
      text: "We offer wonderful North India tours! From the snow-covered valleys of Kashmir and Himachal to the heritage cities of Rajasthan and spiritual destinations like Varanasi and Shirdi. Choose your destination:",
      results: allNorthIndia,
    };
  }

  // International
  if (q === 'international' || q === 'abroad') {
    return {
      text: "We have great international packages! We cover Malaysia, Singapore, Bali, Thailand, and Sri Lanka. Which destination interests you?",
      results: searchKnowledge('international').slice(0, 3),
      options: ['Malaysia', 'Singapore', 'Bali', 'Thailand', 'Sri Lanka']
    };
  }

  // Hotel
  if (q.includes('hotel') || q.includes('accommodation') || q.includes('resort') || q.includes('stay') || q.includes('room')) {
    return {
      text: "Yes, we handle hotel bookings from budget to luxury 5-star properties. Just tell us your destination and dates and we'll find the best options for you.",
      results: searchKnowledge('hotel booking'),
    };
  }

  // Cab / Transport
  if (q.includes('cab') || q.includes('car') || q.includes('taxi') || q.includes('tempo') || q.includes('traveller') || q.includes('bus') || q.includes('coach') || q.includes('vehicle') || q.includes('transport')) {
    return {
      text: "We provide Cab and Tempo Traveller rentals for local and outstation trips — Sedan, Innova, SUV, Tempo Traveller, Mini Bus, and Luxury Coach.",
      results: searchKnowledge('cab'),
    };
  }

  // Flight
  if (q.includes('flight') || q.includes('air ticket') || q.includes('airline') || q.includes('airplane') || q.includes('fly')) {
    return {
      text: "We book domestic and international flight tickets at competitive prices. Share your travel dates and we'll help you find the best options.",
      results: searchKnowledge('flight booking'),
    };
  }

  // Train / Railway
  if (q.includes('train') || q.includes('railway') || q.includes('rail') || q.includes('irctc')) {
    return {
      text: "We assist with railway ticket bookings too! Tell us your route and travel dates and we'll help you book.",
      results: searchKnowledge('railway booking'),
    };
  }

  // ── Final Fallback ────────────────────────────────────────────────────────
  if (searchEngineResults.length > 0) {
    const firstName = searchEngineResults[0].name;
    let enquireText = firstName;
    if (firstName.toLowerCase() === 'home' || firstName.toLowerCase().includes('contact') || firstName.toLowerCase().includes('about')) {
      enquireText = 'Tour Packages';
    }
    
    return {
      text: `Great choice! Here's what I found for "${input}". Check out the details below and feel free to ask me anything specific about the itinerary, duration, or inclusions.`,
      results: searchEngineResults,
      options: [`Enquire about ${enquireText}`]
    };
  }

  // Fallback
  return {
    text: "That's a great question! I want to make sure I give you accurate information. Could you share a bit more — like the destination, number of days, or type of trip? Or you can connect directly with our travel team for a personalized recommendation.",
    options: ['South India Tour', 'North India Tour', 'Honeymoon Package', 'International Tour']
  };
}

// ─── Main Component ──────────────────────────────────────────────────────────
export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! 👋 Welcome to Logaa Holidays. I can help you find the right tour package, destination info, or any service. What are you planning?",
      isBot: true,
      options: ['South India Tour', 'North India Tour', 'Honeymoon Package', 'International Tour']
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { id: Date.now(), text, isBot: false };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    setTimeout(() => {
      // Special: Enquire about X
      if (text.startsWith('Enquire about')) {
        const subject = text.replace('Enquire about ', '');
        const msg = `Hi Logaa Holidays, I would like to enquire about ${subject}.`;
        window.open(`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
        setMessages(prev => [...prev, {
          id: Date.now() + 1,
          text: "I've opened WhatsApp for you to connect with our travel expert. They'll get back to you shortly! 😊",
          isBot: true
        }]);
        return;
      }

      const response = generateResponse(text);
      setMessages(prev => [...prev, { id: Date.now() + 1, ...response, isBot: true }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-24 right-6 z-[9999] font-sans">
      {/* Chatbot Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[320px] sm:w-[360px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.18)] overflow-hidden border border-slate-100 flex flex-col h-[520px] max-h-[75vh]">

          {/* Header */}
          <div className="bg-[var(--color-primary-forest)] text-white p-4 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-base leading-tight">Logaa Holidays Assistant</h3>
                <p className="text-emerald-100 text-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block"></span>
                  Ask me anything about our packages
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/20 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 bg-slate-50 flex flex-col gap-4 overflow-y-auto">
            {messages.map(msg => (
              <div key={msg.id} className={`flex flex-col ${msg.isBot ? 'items-start' : 'items-end'} max-w-full`}>

                {/* Bubble */}
                <div className={`p-3 rounded-2xl shadow-sm text-sm max-w-[85%] whitespace-pre-line ${msg.isBot ? 'bg-white border border-slate-100 rounded-tl-sm text-slate-800' : 'bg-[var(--color-primary-forest)] text-white rounded-tr-sm'}`}>
                  {msg.text}
                </div>

                {/* Search results as cards */}
                {msg.results && msg.results.length > 0 && (
                  <div className="flex flex-col gap-2 mt-2 w-full">
                    {msg.results.map((r, i) => (
                      <Link key={i} to={r.url} onClick={() => setIsOpen(false)}
                        className="bg-white border border-slate-200 hover:border-[var(--color-primary-forest)] rounded-xl px-3 py-2.5 text-sm flex items-center justify-between group shadow-sm hover:shadow-md transition-all">
                        <div>
                          <p className="font-semibold text-slate-800 group-hover:text-[var(--color-primary-forest)] transition-colors">{r.name}</p>
                          <p className="text-xs text-slate-400 truncate max-w-[200px]">{r.description}</p>
                        </div>
                        <span className="text-[var(--color-primary-forest)] text-lg">→</span>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Quick-reply options */}
                {msg.options && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {msg.options.map((opt, i) => (
                      <button key={i} onClick={() => handleSend(opt)}
                        className="bg-white border border-[var(--color-primary-forest)] text-[var(--color-primary-forest)] hover:bg-[var(--color-primary-forest)] hover:text-white text-xs px-3 py-1.5 rounded-full transition-colors shadow-sm">
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-slate-100 shrink-0">
            <form onSubmit={e => { e.preventDefault(); handleSend(inputText); }} className="flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                placeholder="Type a destination or question..."
                className="flex-1 bg-slate-100 rounded-full px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-forest)]/30"
              />
              <button type="submit" disabled={!inputText.trim()}
                className="w-10 h-10 bg-[var(--color-primary-forest)] text-white rounded-full flex items-center justify-center shrink-0 disabled:opacity-40 hover:opacity-90 transition-opacity">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[var(--color-primary-forest)] text-white rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(7,42,51,0.4)] hover:scale-110 hover:shadow-[0_6px_20px_rgba(7,42,51,0.5)] transition-all duration-300"
        aria-label="Toggle AI Travel Assistant">
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
}
