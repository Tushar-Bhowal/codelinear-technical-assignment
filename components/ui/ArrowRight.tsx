export function ArrowRight({
  size = 12,
  strokeWidth = 1,
  className = "",
}: {
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 12 12"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
    >
      <line x1="0.5" y1="6" x2="11" y2="6" />
      <polyline points="6,0.5 11,6 6,11.5" />
    </svg>
  );
}
