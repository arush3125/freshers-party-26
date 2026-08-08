import { useEffect, useState } from "react";

type Particle = {
  left: number;
  size: number;
  delay: number;
  duration: number;
  hue: string;
};

const HUES = ["var(--color-neon-pink)", "var(--color-neon-cyan)", "var(--color-neon-purple)"];

export function NeonBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 28 }, (_, i) => ({
        left: Math.random() * 100,
        size: 2 + Math.random() * 5,
        delay: Math.random() * 14,
        duration: 14 + Math.random() * 16,
        hue: HUES[i % HUES.length]!,
      })),
    );
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="animate-drift-a absolute -top-40 -left-32 h-[38rem] w-[38rem] rounded-full bg-neon-purple/25 blur-[140px]" />
      <div className="animate-drift-b absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full bg-neon-pink/20 blur-[150px]" />
      <div className="animate-drift-c absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-neon-blue/25 blur-[140px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,color-mix(in_oklab,var(--color-neon-cyan)_18%,transparent),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:64px_64px]" />
      {particles.map((p, i) => (
        <span
          key={i}
          className="animate-float-up absolute bottom-[-10%] rounded-full"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: p.hue,
            boxShadow: `0 0 12px ${p.hue}`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}