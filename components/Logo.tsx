import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Logo({ size = "md", className = "" }: LogoProps) {
  const sizes = {
    sm: { width: 32, height: 32 },
    md: { width: 48, height: 48 },
    lg: { width: 80, height: 80 },
  };

  const { width, height } = sizes[size];

  return (
    <div className={`flex items-center justify-center w-fit ${className}`}>
      <Image
        src="/logo.png"
        alt="Minara Labs"
        width={width}
        height={height}
        priority
        quality={100}
        style={{ width: 'auto', height: 'auto' }}
        className="object-contain"
      />
    </div>
  );
}
