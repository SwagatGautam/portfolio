'use client';

import { useEffect, useRef } from 'react';

/**
 * Ambient animated background: soft drifting aurora blobs behind a masked grid.
 * Also renders a pointer-following spotlight that reacts to the cursor.
 */
export default function Aurora() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--mx', `${e.clientX}px`);
        el.style.setProperty('--my', `${e.clientY}px`);
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* base grid */}
      <div className="absolute inset-0 grid-bg opacity-70" />

      {/* aurora blobs */}
      <div
        className="aurora-blob animate-float-slow"
        style={{
          top: '-8%',
          left: '5%',
          width: '42vw',
          height: '42vw',
          background:
            'radial-gradient(circle at 30% 30%, var(--accent), transparent 60%)',
        }}
      />
      <div
        className="aurora-blob animate-float-slow-2"
        style={{
          top: '20%',
          right: '-5%',
          width: '38vw',
          height: '38vw',
          background:
            'radial-gradient(circle at 60% 40%, var(--accent-3), transparent 60%)',
        }}
      />
      <div
        className="aurora-blob animate-float-slow"
        style={{
          bottom: '-15%',
          left: '25%',
          width: '46vw',
          height: '46vw',
          background:
            'radial-gradient(circle at 50% 50%, var(--accent-2), transparent 62%)',
          animationDelay: '-6s',
        }}
      />

      {/* cursor spotlight */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            'radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), color-mix(in oklch, var(--accent) 12%, transparent), transparent 70%)',
        }}
      />

      {/* vignette to keep content readable */}
      <div className="absolute inset-0 bg-background/25" />
    </div>
  );
}
