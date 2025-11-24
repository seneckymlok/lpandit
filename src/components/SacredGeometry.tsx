import { motion } from 'framer-motion';

interface SacredGeometryProps {
  opacity?: number;
  color?: string;
  className?: string;
}

export default function SacredGeometry({
  opacity = 0.05,
  color = "currentColor",
  className = ""
}: SacredGeometryProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Sri Yantra inspired geometric patterns */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03]"
      >
        <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="0.5">
          <circle cx="50" cy="50" r="48" />
          <circle cx="50" cy="50" r="38" />
          <path d="M50 2 L92 75 L8 75 Z" />
          <path d="M50 98 L8 25 L92 25 Z" />
          <path d="M50 15 L80 85 L20 85 Z" />
          <path d="M50 85 L20 15 L80 15 Z" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] translate-x-1/3 -translate-y-1/3 opacity-[0.04]"
      >
        <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="0.5">
          <circle cx="50" cy="50" r="45" />
          {[...Array(8)].map((_, i) => (
            <path
              key={i}
              d={`M50 50 L${50 + 45 * Math.cos(i * Math.PI / 4)} ${50 + 45 * Math.sin(i * Math.PI / 4)}`}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}
