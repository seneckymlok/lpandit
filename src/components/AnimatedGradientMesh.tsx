import { motion } from 'framer-motion';

export default function AnimatedGradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(201,169,97,0.4), transparent 70%)',
          top: '10%',
          left: '10%',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(217,119,6,0.3), transparent 70%)',
          bottom: '15%',
          right: '10%',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-25 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(5,150,105,0.3), transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          x: [-50, 50, -50],
          y: [-50, 50, -50],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
