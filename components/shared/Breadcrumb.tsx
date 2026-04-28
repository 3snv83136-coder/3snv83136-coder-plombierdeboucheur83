import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export type FilArianeItem = { label: string; href?: string };

export function FilAriane({ items }: { items: FilArianeItem[] }) {
  return (
    <nav
      aria-label="Fil d'Ariane"
      className="container-borne flex items-center gap-1.5 py-3 text-sm text-borne-gris"
    >
      <Link href="/" className="inline-flex items-center hover:text-borne-encre">
        <Home className="h-4 w-4" />
        <span className="sr-only">Accueil</span>
      </Link>
      {items.map((item, idx) => (
        <span key={idx} className="inline-flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5" />
          {item.href ? (
            <Link href={item.href} className="hover:text-borne-encre">
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-borne-encre">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
