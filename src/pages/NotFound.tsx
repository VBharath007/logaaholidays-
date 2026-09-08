import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { Home } from 'lucide-react';

export function NotFound() {
  useSEO(
    'Page Not Found | Logaa Holidays',
    'The page you are looking for does not exist. Return to Logaa Holidays home page.',
    '404, page not found'
  );

  return (
    <div className="bg-[var(--color-bg-luxury)] min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-8xl font-display font-bold text-[var(--color-primary-forest)] mb-4">404</h1>
      <h2 className="text-3xl font-bold text-slate-800 mb-6">Page Not Found</h2>
      <p className="text-slate-600 mb-8 max-w-md mx-auto">
        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        to="/" 
        className="flex items-center gap-2 bg-[var(--color-blue-ocean)] text-white font-bold px-8 py-4 rounded-full hover:bg-[var(--color-primary-emerald)] transition-colors"
      >
        <Home className="w-5 h-5" />
        Back to Home
      </Link>
    </div>
  );
}
