import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';
import { useRef } from 'react';

interface TestimonialCardProps {
  text: string;
  author: string;
  location: string;
  rating: number;
  delay?: number;
}

export default function TestimonialCard({ text, author, location, rating, delay = 0 }: TestimonialCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set((e.clientX - centerX) / (rect.width / 2));
    mouseY.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: 1.02 }}
      className="group relative h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/15 to-orange-500/15 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div
        className="relative bg-gradient-to-br from-neutral-800/90 via-amber-950/20 to-neutral-800/90 backdrop-blur-xl rounded-3xl p-8 border border-amber-500/10 h-full flex flex-col shadow-2xl shadow-amber-900/10"
        style={{ transform: 'translateZ(20px)' }}
      >
        <motion.div
          className="flex items-center space-x-1 mb-6"
          style={{ transform: 'translateZ(40px)' }}
        >
          {[...Array(rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: delay + 0.1 + i * 0.05, type: 'spring' }}
            >
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" style={{ filter: 'drop-shadow(0 0 2px rgba(255,191,0,0.5))' }} />
            </motion.div>
          ))}
        </motion.div>

        <motion.blockquote
          className="text-neutral-200 text-lg leading-relaxed mb-8 flex-1 italic"
          style={{ transform: 'translateZ(30px)' }}
        >
          "{text}"
        </motion.blockquote>

        <motion.div
          className="flex items-center space-x-4"
          style={{ transform: 'translateZ(40px)' }}
        >
          <motion.div
            className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-medium shadow-xl"
            style={{
              boxShadow: '0 4px 20px rgba(255,191,0,0.4), 0 0 10px rgba(212,175,55,0.3)',
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            {author.charAt(0)}
          </motion.div>

          <div>
            <div className="font-medium text-amber-100">{author}</div>
            <div className="text-amber-300/60 text-sm">{location}</div>
          </div>
        </motion.div>

        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-amber-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
}
