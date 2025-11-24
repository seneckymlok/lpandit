import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Zap, Award, Sparkles, HandHeart } from 'lucide-react';
import EnhancedProductCard from './EnhancedProductCard';
import MagneticButton from './MagneticButton';

export default function ProductShowcase() {
  const features = [
    {
      icon: CheckCircle2,
      title: '5 Elements Balance',
      description: 'Harmonizes Water, Fire, Earth, Air & Space',
    },
    {
      icon: Shield,
      title: 'GRS Certified',
      description: '100% Natural Nepali Origin',
    },
    {
      icon: Zap,
      title: 'Jupiter Energy',
      description: 'Enhances wisdom & spiritual growth',
    },
    {
      icon: Award,
      title: 'Chakra Balance',
      description: 'Aligns and activates energy centers',
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-amber-50/30 via-orange-50/20 to-amber-50/30 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mandalaSpiritualGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="1" />
              <stop offset="50%" stopColor="#FF9933" stopOpacity="1" />
              <stop offset="100%" stopColor="#FFBF00" stopOpacity="1" />
            </linearGradient>
          </defs>
          <pattern id="mandala" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <circle cx="100" cy="100" r="80" fill="none" stroke="url(#mandalaSpiritualGrad)" strokeWidth="1" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="url(#mandalaSpiritualGrad)" strokeWidth="1" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="url(#mandalaSpiritualGrad)" strokeWidth="1" />
            <circle cx="100" cy="100" r="20" fill="none" stroke="url(#mandalaSpiritualGrad)" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#mandala)" />
        </svg>
      </div>

      <motion.div
        className="absolute top-20 right-10 w-64 h-64 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(255,191,0,0.4), transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-20 left-10 w-64 h-64 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.4), transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

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
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-px bg-gradient-to-r from-transparent via-divine-gold to-transparent mb-8"
            />
          </div>

          <h2 className="font-serif text-4xl lg:text-5xl text-neutral-900 max-w-3xl mx-auto leading-tight">
            The Most Revered{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
              Spiritual Bead
            </span>
          </h2>

          <p className="text-neutral-600 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Sourced from the pristine regions of Nepal and energized before delivery. Each bead carries the vibration of ancient wisdom.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-divine-gold/10 to-primary-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-white rounded-3xl p-8 shadow-lg shadow-neutral-200/50 border border-neutral-200/50 h-full">
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-divine-gold to-divine-darkGold rounded-2xl flex items-center justify-center shadow-lg shadow-divine-gold/30">
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl text-neutral-900 mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center p-12 lg:p-16">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-divine-gold/20 border border-divine-gold/30 rounded-full">
                <span className="text-divine-gold text-sm font-medium tracking-wide">
                  Limited Edition
                </span>
              </div>

              <h3 className="font-serif text-4xl lg:text-5xl text-neutral-50 leading-tight">
                5 Mukhi Rudraksha
              </h3>

              <p className="text-neutral-300 text-lg leading-relaxed italic font-serif">
                "It's not just a bead. It's my daily reminder to slow down and breathe."
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-divine-gold rounded-full" />
                  <span className="text-neutral-300">10k+ people trust us in last 1 month</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-divine-gold rounded-full" />
                  <span className="text-neutral-300">Natural Nepali Beads</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-divine-gold rounded-full" />
                  <span className="text-neutral-300">108+1 Strong Mala</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-divine-gold rounded-full" />
                  <span className="text-neutral-300">GRS Certified Authenticity</span>
                </div>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div>
                  <div className="text-4xl font-serif text-neutral-50">₹500</div>
                  <div className="text-neutral-400 line-through">₹599</div>
                </div>
                <div className="px-4 py-2 bg-secondary-600 text-white text-sm font-medium rounded-full">
                  93% OFF
                </div>
              </div>

              <MagneticButton className="w-full lg:w-auto px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-medium rounded-xl shadow-lg shadow-primary-900/50 transition-colors duration-300">
                Add to Cart
              </MagneticButton>
            </div>

            <div className="relative">
              <div className="relative aspect-square">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 bg-gradient-to-br from-divine-gold/20 to-primary-600/20 rounded-full blur-2xl"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <Award className="w-32 h-32 text-divine-gold/50" />
                </div>

                <div className="absolute top-4 right-4 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                  <span className="text-white text-sm font-medium">Spiritually Charged</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32"
        >
          <div className="text-center mb-16 space-y-4">
            <h3 className="font-serif text-3xl lg:text-4xl text-neutral-50">
              Featured{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-divine-gold to-divine-lightGold">
                Sacred Collection
              </span>
            </h3>
            <p className="text-neutral-400 text-lg">Handpicked for your spiritual journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
            <EnhancedProductCard
              title="7 Mukhi Rudraksha"
              price="₹750"
              originalPrice="₹899"
              discount="17% OFF"
              image={<Award className="w-16 h-16 text-divine-gold" />}
            />
            <EnhancedProductCard
              title="9 Mukhi Rudraksha"
              price="₹1,200"
              originalPrice="₹1,499"
              discount="20% OFF"
              image={<Sparkles className="w-16 h-16 text-divine-gold" />}
            />
            <EnhancedProductCard
              title="Rudraksha Mala (108+1)"
              price="₹2,500"
              originalPrice="₹3,200"
              discount="22% OFF"
              image={<HandHeart className="w-16 h-16 text-divine-gold" />}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
