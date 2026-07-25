interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Logo({ size = "md", className = "" }: LogoProps) {
  const sizes = {
    sm: 32,
    md: 48,
    lg: 80,
  };

  const dimension = sizes[size];

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src="/logo.png"
        alt="Minara Labs"
        width={dimension}
        height={dimension}
        style={{ width: `${dimension}px`, height: `${dimension}px`, objectFit: 'contain' }}
      />
    </div>
  );
}
