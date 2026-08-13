import React, { useState } from 'react';
import { Send, CheckCircle2, type LucideIcon } from 'lucide-react';

export const inputClasses = (isFocused: boolean) => `
  w-full bg-white/5 px-4 py-3.5 pl-11 rounded-xl border transition-all duration-300 outline-none text-sm font-medium text-white placeholder-white/40
  ${isFocused
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

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: LucideIcon;
}

export const TextInput = ({ label, icon: Icon, className = '', ...props }: InputProps) => {
  const [focused, setFocused] = useState(false);
  const name = props.name || (label ? label.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase() : undefined);
  return (
    <div className={`relative group ${className}`}>
      {label && <label className={labelClasses(focused)}>{label} {props.required && <span className="text-red-400">*</span>}</label>}
      <div className="relative">
        {Icon && <Icon className={iconClasses(focused)} />}
        <input
          name={name}
          {...props}
          className={`${inputClasses(focused)} ${!Icon ? 'pl-4' : ''}`}
          onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
          onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
        />
      </div>
    </div>
  );
};

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
      {label && <label className={labelClasses(focused)}>{label} {props.required && <span className="text-red-400">*</span>}</label>}
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

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  icon?: LucideIcon;
}

export const TextArea = ({ label, icon: Icon, className = '', ...props }: TextAreaProps) => {
  const [focused, setFocused] = useState(false);
  const name = props.name || (label ? label.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase() : undefined);
  return (
    <div className={`relative group ${className}`}>
      {label && <label className={labelClasses(focused)}>{label} {props.required && <span className="text-red-400">*</span>}</label>}
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

export const SuccessState = ({ message = "Our Logaa Holidays travel expert will contact you shortly." }) => (
  <div className="bg-[var(--color-deep-teal)] rounded-[2rem] p-8 text-center shadow-[0_10px_40px_rgba(0,0,0,0.15)] relative overflow-hidden border border-white/10">
    <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-orange)]/10 rounded-full blur-[40px]" />
    <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--color-leaf-green)]/10 rounded-full blur-[40px]" />
    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/20">
      <CheckCircle2 className="w-8 h-8 text-[var(--color-brand-orange)]" />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">Thank you! Your enquiry has been received.</h3>
    <p className="text-sm text-white/70">{message}</p>
  </div>
);

export const FormWrapper = ({ title, subtitle, onSubmit, children }: any) => {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Extract form data
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    // Build WhatsApp message
    let message = `*New Enquiry: ${title}*\n\n`;
    for (const [key, value] of Object.entries(data)) {
      if (value.trim()) {
        const formattedKey = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        message += `*${formattedKey}:* ${value}\n`;
      }
    }

    const whatsappNumber = "917397329776"; 
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    if (onSubmit) onSubmit(e);
  };

  if (submitted) return <SuccessState />;

  return (
    <div className="bg-[var(--color-deep-teal)] rounded-[2.5rem] overflow-hidden relative shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-white/10">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-orange)]/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-leaf-green)]/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[var(--color-brand-orange)] to-transparent opacity-50"></div>
      
      <div className="p-8 md:p-12 relative z-10">
        <h3 className="text-3xl font-display font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-white/60 mb-8">{subtitle}</p>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {children}
          
          <div className="pt-4 border-t border-white/10">
            <label className="flex items-center gap-3 cursor-pointer mb-6 group">
              <input type="checkbox" required className="w-4 h-4 rounded border-white/20 bg-white/5 text-[var(--color-brand-orange)] focus:ring-[var(--color-brand-orange)]/50 cursor-pointer" />
              <span className="text-sm text-white/70 group-hover:text-white transition-colors">I agree to be contacted by Logaa Holidays regarding my enquiry.</span>
            </label>
            
            <button type="submit" className="group relative w-full sm:w-auto overflow-hidden rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold py-4 px-10 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-orange)] to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-center gap-2">
                <Send className="w-4 h-4 group-hover:animate-bounce" />
                <span>Submit Enquiry</span>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
