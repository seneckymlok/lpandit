import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Sparkles } from 'lucide-react';
import { useMousePosition } from '../hooks/useMousePosition';
import SacredGeometry from './SacredGeometry';
import SpiritualAmbience from './SpiritualAmbience';
import LotusDecoration from './LotusDecoration';

export default function Hero() {
  const { scrollY } = useScroll();
  const mousePosition = useMousePosition();

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-neutral-900 via-amber-950/20 to-neutral-900 overflow-hidden">
      <SacredGeometry />
      <SpiritualAmbience />
      <LotusDecoration className="absolute top-10 left-10 scale-150 opacity-50" />
      <LotusDecoration className="absolute bottom-10 right-10 scale-150 opacity-50" />

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 2) * 40}%`,
            width: '200px',
            height: '200px',
            background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(212,175,55,0.08)' : 'rgba(255,153,51,0.08)'}, transparent 70%)`,
            filter: 'blur(30px)',
            x: useTransform(scrollY, [0, 1000], [0, -30 + i * 8]),
            y: useTransform(scrollY, [0, 1000], [0, 40 - i * 6]),
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5 + i * 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-full backdrop-blur-sm shadow-lg shadow-amber-500/10"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
              </motion.div>
              <span className="text-amber-300 text-sm font-medium tracking-wide">
                Spiritually Blessed
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-serif text-5xl lg:text-7xl text-neutral-50 leading-tight"
            >
              Divine Grace in
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-divine-gold to-divine-lightGold">
                Every Bead
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-neutral-300 text-lg lg:text-xl leading-relaxed max-w-xl"
            >
              Experience the transformative power of authentic 5 Mukhi Rudraksha.
              Sourced from the sacred Himalayas, each bead carries the blessing of Lord Shiva.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center space-x-4"
            >
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-divine-gold fill-divine-gold"
                  />
                ))}
              </div>
              <span className="text-neutral-400 text-sm">
                4.9/5 from 1,950+ reviews
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-medium rounded-full shadow-lg shadow-amber-900/20 transition-all duration-300 hover:scale-105 hover:shadow-amber-900/40">
                Shop Sacred Collection
              </button>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-neutral-200 font-medium rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-300">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className="relative perspective-1000"
          >
            <motion.div
              className="relative aspect-square"
              style={{
                rotateX: useTransform(() => (mousePosition.y - window.innerHeight / 2) / 50),
                rotateY: useTransform(() => (mousePosition.x - window.innerWidth / 2) / 50),
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-full blur-3xl"
                style={{
                  background: 'radial-gradient(circle, rgba(212,175,55,0.15), transparent 60%)',
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />



              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-amber-900/90 via-orange-900/90 to-amber-950/90 shadow-2xl flex items-center justify-center relative overflow-hidden backdrop-blur-sm border-2 border-amber-500/20">
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'radial-gradient(circle at 30% 30%, rgba(255,191,0,0.2), transparent 60%)',
                    }}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />

                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'conic-gradient(from 0deg, transparent, rgba(212,175,55,0.1), transparent)',
                    }}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />

                  <div className="text-center space-y-4 relative z-10">

                    <motion.p
                      className="font-serif text-amber-200 text-lg tracking-wider"
                      animate={{
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      5 Mukhi Rudraksha
                    </motion.p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-6 -right-6 w-40 h-40 rounded-full blur-2xl"
                style={{
                  background: 'radial-gradient(circle, rgba(255,191,0,0.4), transparent 70%)',
                }}
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <motion.div
                className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full blur-2xl"
                style={{
                  background: 'radial-gradient(circle, rgba(255,153,51,0.4), transparent 70%)',
                }}
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2,
                }}
              />

              <motion.div
                className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full blur-3xl"
                style={{
                  background: 'radial-gradient(circle, rgba(212,175,55,0.25), transparent 70%)',
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
