'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { ChevronsLeftRight } from 'lucide-react';

type Props = {
  photoAvant: string;
  photoApres: string;
  alt: string;
};

export function RealisationAvantApres({ photoAvant, photoApres, alt }: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(98, Math.max(2, x)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    dragging.current = false;
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-3xl bg-slate-100 touch-none cursor-ew-resize"
      role="region"
      aria-label="Comparateur avant / après"
    >
      <Image
        src={photoApres}
        alt={`Après — ${alt}`}
        fill
        sizes="(max-width: 1024px) 100vw, 1024px"
        className="object-cover"
        priority
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        aria-hidden
      >
        <Image
          src={photoAvant}
          alt={`Avant — ${alt}`}
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover"
        />
      </div>

      {/* labels */}
      <span className="absolute left-3 top-3 rounded-full bg-borne-encre/85 px-3 py-1 text-xs font-black uppercase tracking-wider text-white">
        Avant
      </span>
      <span className="absolute right-3 top-3 rounded-full bg-borne-vert px-3 py-1 text-xs font-black uppercase tracking-wider text-white">
        Après
      </span>

      {/* curseur */}
      <div
        className="pointer-events-none absolute top-0 bottom-0"
        style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
      >
        <span className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_10px_rgba(0,0,0,0.45)]" />
        <span className="absolute top-1/2 left-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-white bg-white shadow-borne text-borne-encre">
          <ChevronsLeftRight className="h-5 w-5" />
        </span>
      </div>

      {/* slider mobile accessible */}
      <input
        type="range"
        min={2}
        max={98}
        step={1}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Comparer avant / après"
        className="absolute inset-x-0 bottom-3 mx-auto block w-3/4 opacity-0"
      />
    </div>
  );
}
