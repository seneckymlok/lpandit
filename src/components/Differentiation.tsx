import { motion } from 'framer-motion';
import { Gem, Leaf, Zap, Award, Sparkles } from 'lucide-react';

export default function Differentiation() {
  const features = [
    {
      icon: Leaf,
      title: 'Natural & Hand-picked from Nepal',
      description: 'Each bead is carefully selected from sacred Himalayan regions',
    },
    {
      icon: Zap,
      title: 'Lab-tested, X-ray Certified by GRS',
      description: 'Authenticated through rigorous scientific verification',
    },
    {
      icon: Award,
      title: 'Spiritually Activated Before Shipping',
      description: 'Energized with Vedic mantras for maximum potency',
    },
    {
      icon: Gem,
      title: 'Includes Clear Guide & Mantra',
      description: 'Complete instructions for proper wearing and care',
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-neutral-50 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="lotus" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="2" fill="#000" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#lotus)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-6"
        >
          <div className="inline-block">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              className="w-16 h-16 bg-gradient-to-br from-divine-gold to-divine-darkGold rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-divine-gold/30"
            >
              <Sparkles className="w-8 h-8 text-divine-gold" />
            </motion.div>
          </div>

          <h2 className="font-serif text-4xl lg:text-5xl text-neutral-900 max-w-3xl mx-auto leading-tight">
            What Makes This{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
              Rudraksha Different?
            </span>
          </h2>

          <p className="text-neutral-600 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Uncompromising quality standards meet ancient wisdom
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-divine-gold/0 to-divine-gold/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-white rounded-3xl p-10 lg:p-12 shadow-lg shadow-neutral-200/50 border border-neutral-200/50 h-full">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-divine-gold to-divine-darkGold rounded-2xl flex items-center justify-center shadow-lg shadow-divine-gold/30 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                      </div>
                    </div>

                    <div className="flex-1 space-y-4">
                      <h3 className="font-serif text-2xl text-neutral-900 leading-snug">
                        {feature.title}
                      </h3>

                      <p className="text-neutral-600 text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="w-full h-full"
              style={{
                backgroundImage: 'radial-gradient(circle, #C9A961 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />
          </div>

          <div className="relative grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            <div className="p-12 text-center space-y-4">
              <div className="text-5xl font-serif text-divine-gold">ISO 9001:2015</div>
              <p className="text-neutral-400 text-lg">Certified Quality</p>
            </div>

            <div className="p-12 text-center space-y-4">
              <div className="text-5xl font-serif text-divine-gold">100%</div>
              <p className="text-neutral-400 text-lg">Authentic Guarantee</p>
            </div>

            <div className="p-12 text-center space-y-4">
              <div className="text-5xl font-serif text-divine-gold">10k+</div>
              <p className="text-neutral-400 text-lg">Happy Seekers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
