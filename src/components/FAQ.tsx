import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Why Customers Trust Rudraksha for Genuine Rudraksha Beads?',
      answer:
        "Yes, Our Rudraksha is a trusted and reputable source for authentic Rudraksha beads. We are proud to be ISO 9001:2015 certified and Lab (Government-registered, demonstrating our commitment to quality and compliance.",
    },
    {
      question: 'Where are the Rudraksha sourced from in Nepal Rudraksha?',
      answer:
        'Our Rudraksha beads are sourced directly from the pristine regions of Nepal, particularly from the foothills of the Himalayas where the most authentic and powerful beads grow naturally.',
    },
    {
      question: 'What is the AAA Quality Standard?',
      answer:
        'AAA Quality Standard refers to the highest grade of Rudraksha beads, characterized by clear mukhi lines, proper shape, authentic texture, and natural origin. Each bead undergoes rigorous quality checks and lab certification.',
    },
    {
      question: 'Can women wear Rudraksha?',
      answer:
        'Absolutely! Rudraksha is beneficial for everyone regardless of gender. Women can wear Rudraksha at all times, and it is particularly helpful for emotional balance, mental clarity, and spiritual growth.',
    },
    {
      question: 'Is Nepal Rudraksha ISO certified?',
      answer:
        'Yes, we are ISO 9001:2015 certified, which demonstrates our commitment to maintaining the highest quality standards in sourcing, testing, and delivering authentic Rudraksha beads.',
    },
    {
      question: 'Do I need to wear Rudraksha on a specific day or time?',
      answer:
        'While Monday (dedicated to Lord Shiva) is considered auspicious, you can wear Rudraksha any day. The most important aspect is wearing it with faith and maintaining its sanctity through regular care.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 lg:py-32 bg-neutral-50 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="faq-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="40" cy="40" r="1" fill="#000" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#faq-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32 space-y-8"
          >
            <div className="inline-block">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                className="w-16 h-16 bg-gradient-to-br from-divine-gold to-divine-darkGold rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-divine-gold/30"
              >
                <MessageCircle className="w-8 h-8 text-divine-gold" />
              </motion.div>
            </div>

            <h2 className="font-serif text-4xl lg:text-5xl text-neutral-900 leading-tight">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
                Questions
              </span>
            </h2>

            <p className="text-neutral-600 text-lg leading-relaxed">
              Everything you need to know about authentic Rudraksha beads and their spiritual benefits.
            </p>

            <div className="relative aspect-square max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 rounded-3xl blur-2xl" />

              <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-12 flex items-center justify-center shadow-2xl border border-white/10">
                <div className="text-center space-y-6">
                  <Sparkles className="w-24 h-24 text-divine-gold" strokeWidth={1} />
                  <p className="text-neutral-300 text-lg font-serif">
                    Sacred Rudraksha Beads
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index
                      ? 'border-divine-gold/30 shadow-lg shadow-divine-gold/10'
                      : 'border-neutral-200/50 shadow-sm hover:border-neutral-300'
                    }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-start justify-between p-6 lg:p-8 text-left"
                  >
                    <span className="font-serif text-lg lg:text-xl text-neutral-900 pr-8 leading-snug">
                      {faq.question}
                    </span>

                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index
                          ? 'bg-gradient-to-br from-divine-gold to-divine-darkGold text-white rotate-180'
                          : 'bg-neutral-100 text-neutral-600 group-hover:bg-neutral-200'
                        }`}
                    >
                      {openIndex === index ? (
                        <Minus className="w-5 h-5" strokeWidth={2} />
                      ) : (
                        <Plus className="w-5 h-5" strokeWidth={2} />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                          <div className="pt-4 border-t border-neutral-200/50">
                            <p className="text-neutral-600 text-base lg:text-lg leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
