import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formaterTelephone(brut: string): string {
  const digits = brut.replace(/\D/g, '');
  if (digits.length !== 10) return brut;
  return digits.match(/.{2}/g)?.join(' ') ?? brut;
}

export function telephoneVersHref(brut: string): string {
  const digits = brut.replace(/\D/g, '');
  if (digits.startsWith('0') && digits.length === 10) {
    return `tel:+33${digits.slice(1)}`;
  }
  if (digits.startsWith('33')) return `tel:+${digits}`;
  return `tel:${digits}`;
}

export function formatPrixEuros(centimes: number): string {
  return `${Math.round(centimes / 100)} €`;
}

export function slugifyFrench(texte: string): string {
  return texte
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://plombierdeboucheur83.fr';
export const SITE_NAME =
  process.env.NEXT_PUBLIC_SITE_NAME ?? 'Plombier Déboucheur 83';
