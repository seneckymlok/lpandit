import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: '"My anxiety feels less loud now. It helped me go deeper in meditation."',
      author: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
    },
    {
      text: '"It\'s not just a bead. It\'s my daily reminder to slow down and breathe."',
      author: 'Rahul Verma',
      location: 'Bangalore',
      rating: 5,
    },
    {
      text: '"Pehle bechaini thi, ab shanti hai. (Earlier there was restlessness, now there is peace.)"',
      author: 'Amit Patel',
      location: 'Ahmedabad',
      rating: 5,
    },
    {
      text: '"Pehle mujhe anxiety ke attacks hote the. Ab Rudraksha pehnke lagta hai jaise koi shield hai mere aas paas."',
      author: 'Sneha Gupta',
      location: 'Delhi',
      rating: 5,
    },
    {
      text: '"After a few weeks, I genuinely felt calmer. Like my overthinking had turned down a notch."',
      author: 'Vikram Singh',
      location: 'Jaipur',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-neutral-900 via-amber-950/10 to-neutral-900 overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? 'rgba(212,175,55,0.25)' : 'rgba(255,191,0,0.2)',
              boxShadow: `0 0 ${4 + Math.random() * 6}px ${i % 2 === 0 ? 'rgba(212,175,55,0.4)' : 'rgba(255,191,0,0.3)'}`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <motion.div
        className="absolute top-10 left-10 w-80 h-80 rounded-full blur-3xl opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(255,153,51,0.6), transparent 70%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full blur-3xl opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.6), transparent 70%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
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
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-divine-gold fill-divine-gold" />
              ))}
            </div>
          </div>

          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="flex -space-x-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 border-2 border-neutral-900 flex items-center justify-center text-white font-medium"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-divine-gold to-divine-darkGold border-2 border-neutral-900 flex items-center justify-center text-white font-medium">
                5L+
              </div>
            </div>
          </div>

          <h2 className="font-serif text-4xl lg:text-5xl text-neutral-50 max-w-3xl mx-auto leading-tight">
            How It Feels to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-divine-gold to-divine-lightGold">
              Wear One
            </span>
          </h2>

          <p className="text-neutral-400 text-lg">
            Trusted by thousands of people
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto" style={{ perspective: '1000px' }}>
          <div className="grid md:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${currentIndex}-${index}`}
                text={testimonial.text}
                author={testimonial.author}
                location={testimonial.location}
                rating={testimonial.rating}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="flex items-center justify-center space-x-6 mt-12">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-divine-gold transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex items-center space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                      ? 'w-12 bg-divine-gold'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
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
