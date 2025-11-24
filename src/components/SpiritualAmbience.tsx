import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function SpiritualAmbience() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      pulse: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth * 0.03); // Reduced count for subtlety
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1, // Slightly larger, softer
          speedX: (Math.random() - 0.5) * 0.1, // Very slow
          speedY: (Math.random() - 0.5) * 0.1 - 0.05, // Slight upward drift
          opacity: Math.random() * 0.3,
          pulse: Math.random() * Math.PI,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Soft gradient overlay for "aura" feel
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(26, 16, 60, 0.2)'); // mystic-indigo tint
      gradient.addColorStop(1, 'rgba(45, 15, 18, 0.2)'); // temple-maroon tint
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Pulse effect
        particle.pulse += 0.02;
        const currentOpacity = particle.opacity + Math.sin(particle.pulse) * 0.1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

        // Soft golden glow
        const glow = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 2);
        glow.addColorStop(0, `rgba(212, 175, 55, ${Math.max(0, currentOpacity)})`);
        glow.addColorStop(1, 'rgba(212, 175, 55, 0)');
        ctx.fillStyle = glow;
        ctx.fill();

        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around screen
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    resizeCanvas();
    createParticles();
    drawParticles();

    window.addEventListener('resize', () => {
      resizeCanvas();
      particles = [];
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 mix-blend-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    />
  );
}
