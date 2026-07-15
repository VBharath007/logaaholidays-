import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateSlug(title: string) {
  if (!title) return '';
  return title
    .toLowerCase()
    .replace(/\s*\|\s*/g, '--') // Replace pipe with --
    .replace(/\s*&\s*/g, '--')  // Replace & with --
    .replace(/,\s*/g, '-')      // Replace comma with -
    .replace(/\s+/g, '-')       // Replace spaces with -
    .replace(/[^a-z0-9-]/g, '') // Remove any other special chars
    .replace(/-+/g, '-')        // Collapse multiple dashes
    .replace(/^-|-$/g, '');
}
