import { motion } from 'framer-motion';
import EnhancedProductCard from './EnhancedProductCard';
import ScrollReveal from './ScrollReveal';

export default function FeaturedCollection() {
    const products = [
        {
            id: '1',
            name: '5 Mukhi Rudraksha Mala',
            price: 1250,
            image: 'https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?auto=format&fit=crop&q=80&w=800',
            category: 'Mala',
            rating: 4.9,
            reviews: 128,
            isNew: true
        },
        {
            id: '2',
            name: 'Premium 5 Mukhi Bead',
            price: 550,
            image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&q=80&w=800',
            category: 'Rudraksha',
            rating: 4.8,
            reviews: 85
        },
        {
            id: '3',
            name: 'Siddha Mala (Collector)',
            price: 5500,
            image: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=800',
            category: 'Premium',
            rating: 5.0,
            reviews: 42,
            isBestSeller: true
        }
    ];

    return (
        <section className="py-24 bg-mystic-indigo relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-divine-gold font-serif tracking-[0.2em] uppercase text-sm">
                            Sacred Collection
                        </span>
                        <h2 className="font-serif text-4xl lg:text-5xl mt-4 text-neutral-100">
                            Choose Your <span className="text-saffron">Blessing</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-divine-gold to-transparent mx-auto mt-8 opacity-50" />
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <ScrollReveal key={product.id} delay={index * 0.2}>
                            <motion.div
                                whileHover={{ y: -5, boxShadow: "0 0 30px rgba(212, 175, 55, 0.15)" }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="rounded-2xl overflow-hidden border border-white/5 bg-white/5 backdrop-blur-sm group"
                            >
                                <EnhancedProductCard
                                    title={product.name}
                                    price={`₹${product.price}`}
                                    image={product.image}
                                // Add other props if needed or optional
                                />
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
