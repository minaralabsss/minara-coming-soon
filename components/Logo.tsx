interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

// The mark is a wide lockup (roughly 2.55:1), so it is sized by height
// and allowed to find its own width. Sizing it as a square squashes it.
const HEIGHTS = {
  sm: 22,
  md: 36,
  lg: 52,
} as const;

export default function Logo({ size = "md", className = "" }: LogoProps) {
  const height = HEIGHTS[size];

  return (
    <img
      src="/logo.png"
      alt="Minara Labs"
      width={Math.round(height * 2.548)}
      height={height}
      className={`block w-auto ${className}`}
      style={{ height: `${height}px` }}
    />
  );
}
