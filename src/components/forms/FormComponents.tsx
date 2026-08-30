import React, { useState, useRef } from 'react';
import { Send, CheckCircle2, Loader2, type LucideIcon } from 'lucide-react';

// ─── Style helpers ────────────────────────────────────────────────────────────
export const inputClasses = (isFocused: boolean, hasError?: boolean) => `
  w-full bg-white/5 px-4 py-3.5 pl-11 rounded-xl border transition-all duration-300 outline-none text-sm font-medium text-white placeholder-white/40
  ${hasError
    ? 'border-red-400 bg-red-500/5'
    : isFocused
      ? 'border-[var(--color-brand-orange)] bg-white/10'
      : 'border-white/10 hover:border-white/20 hover:bg-white/10'}
`;

export const iconClasses = (isFocused: boolean) => `
  absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-all duration-300
  ${isFocused ? 'text-[var(--color-brand-orange)] scale-110' : 'text-white/40'}
`;

export const labelClasses = (isFocused: boolean) => `
  block text-sm font-bold mb-2 transition-colors duration-300
  ${isFocused ? 'text-[var(--color-brand-orange)]' : 'text-white/80'}
`;

// ─── TextInput ────────────────────────────────────────────────────────────────
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: LucideIcon;
  errorMsg?: string;
}

export const TextInput = ({ label, icon: Icon, className = '', errorMsg, ...props }: InputProps) => {
  const [focused, setFocused] = useState(false);
  const name = props.name || (label ? label.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase() : undefined);
  return (
    <div className={`relative group ${className}`}>
      {label && (
        <label className={labelClasses(focused)}>
          {label} {props.required && <span className="text-red-400">*</span>}
        </label>
      )}
      <div className="relative">
        {Icon && <Icon className={iconClasses(focused)} />}
        <input
          name={name}
          {...props}
          className={`${inputClasses(focused, !!errorMsg)} ${!Icon ? 'pl-4' : ''}`}
          onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
          onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
        />
      </div>
      {errorMsg && <p className="text-red-400 text-xs mt-1">{errorMsg}</p>}
    </div>
  );
};

// ─── SelectInput ──────────────────────────────────────────────────────────────
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  icon?: LucideIcon;
  options: { label: string; value: string }[];
  placeholder?: string;
}

export const SelectInput = ({ label, icon: Icon, options, className = '', ...props }: SelectProps) => {
  const [focused, setFocused] = useState(false);
  const name = props.name || (label ? label.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase() : undefined);
  return (
    <div className={`relative group ${className}`}>
      {label && (
        <label className={labelClasses(focused)}>
          {label} {props.required && <span className="text-red-400">*</span>}
        </label>
      )}
      <div className="relative">
        {Icon && <Icon className={iconClasses(focused)} />}
        <select
          name={name}
          {...props}
          className={`${inputClasses(focused)} appearance-none ${!Icon ? 'pl-4' : ''}`}
          onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
          onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
        >
          <option value="" className="bg-[var(--color-deep-teal)] text-white">{props.placeholder || 'Select...'}</option>
          {options.map(opt => (
            <option key={opt.value} value={opt.value} className="bg-[var(--color-deep-teal)] text-white">{opt.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

// ─── TextArea ─────────────────────────────────────────────────────────────────
interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  icon?: LucideIcon;
}

export const TextArea = ({ label, icon: Icon, className = '', ...props }: TextAreaProps) => {
  const [focused, setFocused] = useState(false);
  const name = props.name || (label ? label.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase() : undefined);
  return (
    <div className={`relative group ${className}`}>
      {label && (
        <label className={labelClasses(focused)}>
          {label} {props.required && <span className="text-red-400">*</span>}
        </label>
      )}
      <div className="relative">
        {Icon && <Icon className={`absolute left-4 top-4 w-4 h-4 transition-all duration-300 ${focused ? 'text-[var(--color-brand-orange)] scale-110' : 'text-white/40'}`} />}
        <textarea
          name={name}
          {...props}
          className={`w-full bg-white/5 pr-4 py-3.5 rounded-xl border transition-all duration-300 outline-none text-sm font-medium text-white placeholder-white/40 resize-none ${focused ? 'border-[var(--color-brand-orange)] bg-white/10' : 'border-white/10 hover:border-white/20 hover:bg-white/10'} ${Icon ? 'pl-11' : 'pl-4'}`}
          onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
          onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
        />
      </div>
    </div>
  );
};

// ─── Success State ────────────────────────────────────────────────────────────
export const SuccessState = () => (
  <div className="bg-[var(--color-deep-teal)] rounded-[2rem] p-10 text-center shadow-[0_10px_40px_rgba(0,0,0,0.15)] relative overflow-hidden border border-white/10">
    <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-orange)]/10 rounded-full blur-[40px]" />
    <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--color-leaf-green)]/10 rounded-full blur-[40px]" />
    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-5 backdrop-blur-sm border border-white/20">
      <CheckCircle2 className="w-10 h-10 text-[var(--color-brand-orange)]" />
    </div>
    <h3 className="text-2xl font-bold text-white mb-3">Thank You!</h3>
    <p className="text-base text-white/80 leading-relaxed max-w-sm mx-auto">
      Thank you for contacting Logaa Holidays. Our travel team will get back to you shortly.
    </p>
    <p className="text-xs text-white/40 mt-4">
      You can also reach us directly at <strong className="text-white/60">+91 73973 29776</strong>
    </p>
  </div>
);

// ─── Validation helpers ───────────────────────────────────────────────────────
function validateForm(form: HTMLFormElement): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  const data = new FormData(form);

  // Required fields
  const requiredFields = form.querySelectorAll<HTMLInputElement | HTMLSelectElement>('[required]');
  requiredFields.forEach(field => {
    const val = (data.get(field.name) || '').toString().trim();
    if (!val) {
      const label = field.closest('div')?.querySelector('label')?.textContent?.replace('*', '').trim();
      errors.push(`"${label || field.name}" is required.`);
    }
  });

  // Mobile number validation (Indian 10 digits)
  const mobileField = data.get('mobile_number') || data.get('phone') || '';
  if (mobileField) {
    const digits = mobileField.toString().replace(/\D/g, '');
    if (digits.length !== 10) errors.push('Mobile number must be 10 digits.');
  }

  // Email validation
  const emailField = data.get('email_address') || '';
  if (emailField && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.toString())) {
    errors.push('Please enter a valid email address.');
  }

  // Date: past-date restriction for departure/journey dates
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const departureDateKeys = ['departure_date', 'journey_date', 'pickup_date', 'travel_date'];
  for (const key of departureDateKeys) {
    const val = data.get(key)?.toString();
    if (val) {
      const d = new Date(val);
      if (d < today) errors.push('Travel/Departure date cannot be in the past.');
    }
  }

  // Return date must be >= departure date
  const returnVal = data.get('return_date')?.toString();
  const departureVal = (
    data.get('departure_date') ||
    data.get('journey_date') ||
    data.get('pickup_date')
  )?.toString();
  if (returnVal && departureVal) {
    if (new Date(returnVal) < new Date(departureVal)) {
      errors.push('Return date cannot be earlier than the departure date.');
    }
  }

  return { valid: errors.length === 0, errors };
}

// ─── FormWrapper ──────────────────────────────────────────────────────────────
export const FormWrapper = ({ title, subtitle, onSubmit, children }: any) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const submittedRef = useRef(false); // duplicate prevention

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submittedRef.current || loading) return; // prevent duplicate

    const form = e.currentTarget;
    const { valid, errors: validationErrors } = validateForm(form);

    if (!valid) {
      setErrors(validationErrors);
      // Scroll to first error
      form.querySelector('[required]')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setErrors([]);
    setLoading(true);
    submittedRef.current = true;

    // Extract form data
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => { data[key] = value.toString(); });

    // Add submission metadata
    const now = new Date();
    const submissionTime = now.toLocaleString('en-IN', {
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit', hour12: true
    });

    // Build WhatsApp message
    let message = `*New Enquiry – ${title}*\n`;
    message += `*Submitted:* ${submissionTime}\n\n`;
    for (const [key, value] of Object.entries(data)) {
      if (value.trim() && key !== 'i_agree_to_be_contacted_by_logaa_holidays_regarding_my_enquiry_') {
        const formattedKey = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        message += `*${formattedKey}:* ${value}\n`;
      }
    }

    const whatsappNumber = '917397329776';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Simulate brief loading for UX, then open WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setLoading(false);
      setSubmitted(true);
      if (onSubmit) onSubmit(e);
    }, 800);
  };

  if (submitted) return <SuccessState />;

  return (
    <div className="bg-[var(--color-deep-teal)] rounded-[2.5rem] overflow-hidden relative shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-white/10">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-orange)]/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-leaf-green)]/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[var(--color-brand-orange)] to-transparent opacity-50" />

      <div className="p-6 md:p-12 relative z-10">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-white/60 mb-8">{subtitle}</p>

        {/* Validation errors */}
        {errors.length > 0 && (
          <div className="mb-6 bg-red-500/10 border border-red-400/30 rounded-xl p-4">
            <p className="text-red-300 text-sm font-bold mb-2">Please fix the following:</p>
            <ul className="space-y-1">
              {errors.map((err, i) => (
                <li key={i} className="text-red-300 text-xs flex items-start gap-2">
                  <span className="shrink-0 mt-0.5">•</span>{err}
                </li>
              ))}
            </ul>
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
          {children}

          <div className="pt-4 border-t border-white/10">
            {/* Consent checkbox */}
            <label className="flex items-start gap-3 cursor-pointer mb-6 group">
              <input
                type="checkbox"
                required
                className="w-4 h-4 mt-0.5 shrink-0 rounded border-white/20 bg-white/5 text-[var(--color-brand-orange)] focus:ring-[var(--color-brand-orange)]/50 cursor-pointer"
              />
              <span className="text-sm text-white/70 group-hover:text-white transition-colors leading-relaxed">
                I agree to be contacted by Logaa Holidays regarding my enquiry.
              </span>
            </label>

            {/* Where enquiry goes – info note */}
            <p className="text-xs text-white/40 mb-5">
              📲 Your enquiry will be sent directly to our WhatsApp. Our team will respond within working hours.
            </p>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full sm:w-auto overflow-hidden rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold py-4 px-10 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-orange)] to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center justify-center gap-2">
                {loading
                  ? <><Loader2 className="w-4 h-4 animate-spin" /><span>Sending...</span></>
                  : <><Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" /><span>Submit Enquiry</span></>
                }
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
