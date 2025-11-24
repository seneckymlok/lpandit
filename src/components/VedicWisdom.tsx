import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Flame, HandHeart, Flower, Sparkles } from 'lucide-react';

export default function VedicWisdom() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const verses = [
    {
      sanskrit: 'न विद्या न तपो न तज्ञं न च किया\nयोगानामपि सर्वेषां नैं नैं धारणं समम्',
      title: 'Padma Purana (Uttara Khanda, Chapter 57, Verse 74)',
      translation: 'No knowledge, penance, or ritual equals the merit of wearing Rudraksha.',
      source: <span className="flex items-center gap-2"><Sparkles className="w-4 h-4" /> Padma Purana</span>,
    },
    {
      sanskrit: 'रुद्राक्षधारणं पुण्यं यदा समाधि समंदत्',
      title: 'Traditional Verse (Cited in Rudraksha Jabala Upanishad)',
      translation: 'Meditating with Rudraksha steadies the mind beyond worldly suffering.',
      source: <span className="flex items-center gap-2"><BookOpen className="w-4 h-4" /> Rudraksha Jabala Upanishad</span>,
    },
    {
      sanskrit: 'शिव त्रिपुरान्तक विश्वेश्वर संहिता',
      title: 'Rudrashtakam (from Ramcharitmanas, Uttarkanda)',
      translation: 'Shiva is formless consciousness, infinite and eternal.',
      source: <span className="flex items-center gap-2"><Flame className="w-4 h-4" /> Ramcharitmanas</span>,
    },
    {
      sanskrit: 'रुद्राक्षधरी वंदु तच्च नास्ति संशयः',
      title: 'Shiva Purana (Vidyeshvara Samhita, Chapter 25)',
      translation: 'The fruits of wearing Rudraksha are beyond doubt.',
      source: <span className="flex items-center gap-2"><HandHeart className="w-4 h-4" /> Shiva Purana</span>,
    },
    {
      sanskrit: 'रुद्राक्षधारणादेव मानं विध्वस्ति तत्क्षणात्',
      title: 'Shiva Mahapurana (Rudraksha Mahatmya, Chapter 6)',
      translation: 'By wearing Rudraksha, one\'s sins are destroyed instantly.',
      source: <span className="flex items-center gap-2"><Flower className="w-4 h-4" /> Shiva Mahapurana</span>,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % verses.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + verses.length) % verses.length);
  };

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-neutral-900 to-neutral-800 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,169,97,0.1),transparent_50%)]" />
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-divine-gold/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-6"
        >
          <Sparkles className="w-16 h-16 text-divine-gold mx-auto mb-4" />

          <h2 className="font-serif text-4xl lg:text-5xl text-neutral-50 max-w-3xl mx-auto leading-tight">
            Vedon Mein Varnit,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-divine-gold to-divine-lightGold">
              Puranon Mein Pramaanit
            </span>
          </h2>

          <p className="text-neutral-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Ancient wisdom passed through generations
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {verses.map((verse, index) => (
                <div
                  key={index}
                  className="min-w-full px-4"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 backdrop-blur-xl rounded-3xl p-12 lg:p-16 border-2 border-divine-gold/20 shadow-2xl"
                    style={{
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l4 8 8 4-8 4-4 8-4-8-8-4 8-4z\' fill=\'%23C9A961\' fill-opacity=\'0.03\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
                    }}
                  >
                    <div className="absolute top-8 left-8 text-6xl text-divine-gold/20 font-serif">"</div>
                    <div className="absolute bottom-8 right-8 text-6xl text-divine-gold/20 font-serif">"</div>

                    <div className="relative space-y-8">
                      <div className="inline-block px-4 py-2 bg-divine-gold/10 border border-divine-gold/30 rounded-full">
                        <span className="text-divine-gold text-sm font-medium tracking-wide">
                          {verse.title}
                        </span>
                      </div>

                      <h3 className="font-serif text-3xl lg:text-4xl text-divine-lightGold leading-relaxed">
                        {verse.sanskrit}
                      </h3>

                      <div className="h-px bg-gradient-to-r from-transparent via-divine-gold/30 to-transparent" />

                      <p className="text-neutral-300 text-xl lg:text-2xl leading-relaxed italic">
                        {verse.translation}
                      </p>

                      <p className="text-neutral-500 text-sm">
                        — {verse.source}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex items-center justify-center space-x-6 mt-12">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-divine-gold transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex items-center space-x-3">
              {verses.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                    ? 'w-12 bg-divine-gold'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-divine-gold transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
