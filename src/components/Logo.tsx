import { STUDIO } from '@/lib/studio';

interface LogoProps {
  tone?: 'light' | 'dark';
  compact?: boolean;
}

export default function Logo({ tone = 'dark', compact = false }: LogoProps) {
  const wordmarkClass =
    tone === 'light'
      ? 'bg-gradient-to-b from-[#FFF6E0] via-[#EBD3A0] to-[#D4AF65]'
      : 'bg-gradient-to-b from-[#C9A052] via-[#A3803A] to-[#856430]';

  return (
    <div className="flex items-center gap-3" aria-label={STUDIO.name}>
      <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-primary-400/70 shadow-soft">
        <img
          src="/assets/images/D_logo.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none h-[200%] w-[200%] max-w-none object-contain mix-blend-multiply"
        />
      </span>
      {!compact && (
        <span
          className={`select-none bg-clip-text font-sans text-[1.65rem] font-medium lowercase leading-none tracking-[0.02em] text-transparent ${wordmarkClass}`}
        >
          dezert
        </span>
      )}
    </div>
  );
}
