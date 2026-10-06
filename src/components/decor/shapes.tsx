import { cn } from "@/lib/utils";

type DecorProps = { className?: string };

/**
 * Decorative SVG primitives for the "magical digital playground" language.
 * All shapes are aria-hidden — they are pure decoration.
 */

export function Cloud({ className }: DecorProps) {
  return (
    <svg
      viewBox="0 0 120 64"
      aria-hidden="true"
      focusable="false"
      className={cn("h-auto w-full", className)}
      fill="currentColor"
    >
      <circle cx="36" cy="34" r="18" />
      <circle cx="62" cy="24" r="22" />
      <circle cx="88" cy="36" r="16" />
      <rect x="24" y="40" width="76" height="18" rx="9" />
    </svg>
  );
}

export function Star({ className }: DecorProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={cn("h-auto w-full", className)}
      fill="currentColor"
    >
      <path d="M12 1.6l2.7 6 6.5.7-4.9 4.4 1.4 6.4L12 15.8l-5.7 3.3 1.4-6.4L2.8 8.3l6.5-.7z" />
    </svg>
  );
}

export function Sparkle({ className }: DecorProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={cn("h-auto w-full", className)}
      fill="currentColor"
    >
      <path d="M12 0c1.1 8.1 4 11 12 12-8 1-10.9 3.9-12 12-1.1-8.1-4-11-12-12C8 11 10.9 8.1 12 0z" />
    </svg>
  );
}

export function Strawberry({ className }: DecorProps) {
  return (
    <svg
      viewBox="0 0 40 44"
      aria-hidden="true"
      focusable="false"
      className={cn("h-auto w-full", className)}
    >
      <path
        d="M20 42C10 35.5 4 27 4 18.5 4 11.6 9.2 7 15.4 7c2 0 3.5.7 4.6 1.6C21.1 7.7 22.6 7 24.6 7 30.8 7 36 11.6 36 18.5 36 27 30 35.5 20 42z"
        fill="#e94b6a"
      />
      <path
        d="M20 42C10 35.5 4 27 4 18.5 4 11.6 9.2 7 15.4 7c2 0 3.5.7 4.6 1.6 1.1-.9 2.6-1.6 4.6-1.6C30.8 7 36 11.6 36 18.5 36 27 30 35.5 20 42z"
        fill="#ff5c8a"
      />
      <path
        d="M20 9.5c-1.6-3-4-5-7-6 1.6 2.6 2 5 1.4 7.4M20 9.5c1.6-3 4-5 7-6-1.6 2.6-2 5-1.4 7.4M20 9.5c0-3 .9-5.6 2.6-7.8-.3 2.6-.1 5 .7 7.2"
        stroke="#3f9e6e"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
      <g fill="#ffe9a8">
        <ellipse cx="13" cy="19" rx="1.3" ry="1.9" />
        <ellipse cx="20" cy="23" rx="1.3" ry="1.9" />
        <ellipse cx="27" cy="19" rx="1.3" ry="1.9" />
        <ellipse cx="16.5" cy="29" rx="1.3" ry="1.9" />
        <ellipse cx="23.5" cy="29" rx="1.3" ry="1.9" />
        <ellipse cx="20" cy="14.5" rx="1.3" ry="1.9" />
      </g>
    </svg>
  );
}

export function Sun({ className }: DecorProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      aria-hidden="true"
      focusable="false"
      className={cn("h-auto w-full", className)}
    >
      <g stroke="currentColor" strokeWidth="5" strokeLinecap="round">
        <line x1="48" y1="4" x2="48" y2="16" />
        <line x1="48" y1="80" x2="48" y2="92" />
        <line x1="4" y1="48" x2="16" y2="48" />
        <line x1="80" y1="48" x2="92" y2="48" />
        <line x1="17" y1="17" x2="26" y2="26" />
        <line x1="70" y1="70" x2="79" y2="79" />
        <line x1="17" y1="79" x2="26" y2="70" />
        <line x1="70" y1="26" x2="79" y2="17" />
      </g>
      <circle cx="48" cy="48" r="22" fill="currentColor" />
    </svg>
  );
}

export function Dots({ className }: DecorProps) {
  return (
    <svg
      viewBox="0 0 60 60"
      aria-hidden="true"
      focusable="false"
      className={cn("h-auto w-full", className)}
      fill="currentColor"
    >
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1, 2, 3, 4].map((col) => (
          <circle key={`${row}-${col}`} cx={6 + col * 12} cy={6 + row * 12} r="2.4" />
        ))
      )}
    </svg>
  );
}

/**
 * Curved section divider — creates organic transitions between layers.
 */
export function WaveDivider({
  className,
  fill = "#fff9ef",
  flip = false,
}: {
  className?: string;
  fill?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      className={cn("block h-14 w-full md:h-24", flip && "-scale-y-100", className)}
    >
      <path
        d="M0,64 C240,120 480,16 720,40 C960,64 1200,116 1440,72 L1440,120 L0,120 Z"
        fill={fill}
      />
    </svg>
  );
}
