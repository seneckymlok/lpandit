import { motion } from 'framer-motion';
import { Sparkles, Heart, Brain, Shield, Zap, HandHeart, Video, Sun, User, CircleDot } from 'lucide-react';

export default function SpiritualStory() {
  const benefits = [
    { icon: <Brain className="w-12 h-12 text-divine-gold" />, text: 'Mental calmness', subtext: 'Reduces anxiety, overthinking' },
    { icon: <Sparkles className="w-12 h-12 text-divine-gold" />, text: 'Better focus', subtext: 'Enhances clarity & decision-making' },
    { icon: <Shield className="w-12 h-12 text-divine-gold" />, text: 'Inner strength', subtext: 'Wards off negativity, helps emotional balance' },
    { icon: <User className="w-12 h-12 text-divine-gold" />, text: 'Supports meditation', subtext: 'Helps you go deeper in stillness' },
    { icon: <Heart className="w-12 h-12 text-divine-gold" />, text: 'Traditional wellness', subtext: 'Said to support BP & heart' },
  ];

  const chakras = [
    { name: 'Crown', color: '#9333EA', position: 'top-[5%]' },
    { name: 'Third Eye', color: '#6366F1', position: 'top-[18%]' },
    { name: 'Throat', color: '#3B82F6', position: 'top-[28%]' },
    { name: 'Heart', color: '#10B981', position: 'top-[40%]' },
    { name: 'Solar Plexus', color: '#F59E0B', position: 'top-[52%]' },
    { name: 'Sacral', color: '#F97316', position: 'top-[64%]' },
    { name: 'Root', color: '#EF4444', position: 'top-[76%]' },
  ];

  return (
    <>
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-neutral-900 to-neutral-800 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="w-full h-full opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, #C9A961 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 space-y-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-divine-gold/20 to-primary-600/20 rounded-full border-2 border-divine-gold/30 mx-auto">
              <Zap className="w-10 h-10 text-divine-gold" />
            </div>

            <h2 className="font-serif text-4xl lg:text-5xl text-neutral-50 max-w-4xl mx-auto leading-tight">
              Why Rudraksha Is Called{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-divine-gold to-divine-lightGold">
                Shiva's Blessing
              </span>
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-neutral-300 text-lg lg:text-xl leading-relaxed">
                As described in the{' '}
                <span className="text-divine-gold font-medium">Shiva Purana</span>{' '}
                (Vidyeshvara Samhita, Chapter 25), when Lord Shiva opened His eyes after deep meditation,{' '}
                <span className="text-divine-gold font-medium">tears of compassion fell upon the Earth</span>.
                From those divine tears grew the Rudraksha tree, a sacred gift to humanity.
              </p>

              <div className="pt-8 space-y-4">
                <p className="text-divine-lightGold text-2xl font-serif italic">
                  'रुद्राक्ष' होते है रुद्रो — रूद + अक्ष दुती
                </p>
                <p className="text-neutral-400 text-lg">
                  (Rudra + Aksha = Shiva's Tear / Eye)
                </p>
              </div>

              <div className="pt-8 bg-neutral-800/50 border border-divine-gold/20 rounded-2xl p-8 backdrop-blur-sm">
                <p className="text-neutral-300 leading-relaxed text-lg mb-4">
                  Each bead carries that vibration of compassion, a balance of power and peace.
                  The 5 Mukhi Rudraksha, ruled by Jupiter, symbolizes wisdom and protection for all beings.
                </p>

                <p className="text-divine-gold font-medium italic">
                  "Rudraksha dharan karne wala sada Shiv ke kripa mein rehta hai."
                </p>
              </div>

              <div className="pt-6 inline-flex items-center space-x-3 px-6 py-3 bg-neutral-800/80 border border-white/10 rounded-full">
                <HandHeart className="w-8 h-8 text-divine-gold" />
                <p className="text-neutral-400 text-sm">
                  The one who wears Rudraksha always remains under Shiva's grace.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 mt-32">
          <div className="h-px bg-gradient-to-r from-transparent via-divine-gold/30 to-transparent mb-20" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 space-y-6"
          >
            <Video className="w-12 h-12 text-divine-gold mx-auto" />

            <h2 className="font-serif text-4xl lg:text-5xl text-neutral-50 max-w-3xl mx-auto leading-tight">
              Watch How{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-divine-gold to-divine-lightGold">
                Rudraksha Is Originated
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-4xl mx-auto aspect-video bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-6">
                <HandHeart className="w-24 h-24 text-white/80 mx-auto" />
                <p className="text-neutral-400 text-lg">Sacred Origin Story Video</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32 bg-neutral-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 space-y-6"
          >
            <div className="inline-block">
              <div className="h-px bg-gradient-to-r from-transparent via-primary-600 to-transparent w-32 mx-auto mb-8" />
            </div>

            <h2 className="font-serif text-4xl lg:text-5xl text-neutral-900 max-w-3xl mx-auto leading-tight">
              Why People{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
                Wear It Every Day
              </span>
            </h2>

            <p className="text-neutral-600 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Traditional benefits people experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-divine-gold/10 to-primary-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-neutral-200/50 border border-neutral-200/50 h-full">
                  <div className="aspect-[4/3] bg-gradient-to-br from-neutral-100 to-neutral-50 flex items-center justify-center text-8xl">
                    {benefit.icon}
                  </div>

                  <div className="p-8 space-y-3">
                    <h3 className="font-serif text-xl text-neutral-900">
                      {benefit.text}
                    </h3>

                    <p className="text-neutral-600 leading-relaxed">
                      {benefit.subtext}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 mt-32">
          <div className="h-px bg-gradient-to-r from-transparent via-primary-600 to-transparent mb-20" />

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <Sun className="w-12 h-12 text-divine-gold" />

              <h2 className="font-serif text-4xl lg:text-5xl text-neutral-900 leading-tight">
                Clear Communication with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
                  the Throat Chakra
                </span>
              </h2>

              <p className="text-neutral-600 text-lg leading-relaxed">
                Wearing the 5 Mukhi Rudraksha helps open and balance the{' '}
                <span className="font-medium text-neutral-900">Throat Chakra (Vishuddha)</span>,
                which governs your ability to express yourself with clarity and truth.
              </p>

              <div className="space-y-6 pt-4">
                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl border border-neutral-200/50 shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-divine-gold to-divine-darkGold rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900 mb-2">Authentic Communication</h4>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      It promotes authentic communication and self-expression.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl border border-neutral-200/50 shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-divine-gold to-divine-darkGold rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900 mb-2">Emotional Balance</h4>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Helps you overcome emotional blockages and express your inner voice.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full hidden lg:flex justify-center"
            >
              <div className="relative h-[600px] lg:h-auto lg:aspect-square w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 rounded-full blur-3xl" />

                {/* Simplified Container Structure for Perfect Centering */}
                <div className="relative w-full h-full">
                  {chakras.map((chakra, index) => (
                    <motion.div
                      key={chakra.name}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className={`absolute left-1/2 -translate-x-1/2 ${chakra.position}`}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                        className="w-16 h-16 rounded-full"
                        style={{
                          background: `radial-gradient(circle, ${chakra.color}, transparent)`,
                          boxShadow: `0 0 30px ${chakra.color}`,
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-neutral-900 to-neutral-800 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 space-y-6"
          >
            <CircleDot className="w-12 h-12 text-divine-gold mx-auto mb-4" />

            <h2 className="font-serif text-4xl lg:text-5xl text-neutral-50 max-w-3xl mx-auto leading-tight">
              Why{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-divine-gold to-divine-lightGold">
                108 Beads Matter
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-divine-gold/20 to-primary-600/20 rounded-full blur-3xl animate-pulse" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl transform hover:scale-110 transition-transform duration-500">
                    <HandHeart className="w-32 h-32 text-divine-gold/50" />
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-8 left-8 px-6 py-3 bg-neutral-800/90 backdrop-blur-md border border-divine-gold/20 rounded-2xl"
                >
                  <p className="text-neutral-300 text-sm">
                    Traditional mala with 108+1 beads
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-8 right-8 px-6 py-3 bg-neutral-800/90 backdrop-blur-md border border-divine-gold/20 rounded-2xl"
                >
                  <p className="text-neutral-300 text-sm">
                    Ideal for chanting & meditation
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 order-1 lg:order-2"
            >
              <div className="space-y-6">
                <div className="p-8 bg-neutral-800/50 border border-divine-gold/20 rounded-2xl backdrop-blur-sm">
                  <h3 className="font-serif text-2xl text-divine-gold mb-4">
                    Traditional mala with 108+1 beads - ideal for chanting
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    The number 108 is considered sacred in Vedic tradition, representing the universe's wholeness.
                  </p>
                </div>

                <div className="p-8 bg-neutral-800/50 border border-divine-gold/20 rounded-2xl backdrop-blur-sm">
                  <h3 className="font-serif text-2xl text-divine-gold mb-4">
                    Every bead = one breath, one mantra, one moment of focus
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    Each bead serves as a meditation anchor, bringing you deeper into stillness with every count.
                  </p>
                </div>

                <div className="p-8 bg-neutral-800/50 border border-divine-gold/20 rounded-2xl backdrop-blur-sm">
                  <h3 className="font-serif text-2xl text-divine-gold mb-4">
                    Use as a tool for meditation or wear it as daily protection
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    Whether for spiritual practice or daily wear, the mala becomes your constant companion on the path.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
