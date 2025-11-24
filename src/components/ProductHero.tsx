import { motion } from 'framer-motion';
import { Shield, Globe, Flower, Zap, Clock, Leaf, Sun } from 'lucide-react';
import SacredGeometry from './SacredGeometry';
import ScrollReveal from './ScrollReveal';
import rudrakshaHero from '../assets/images/rudraksha-hero.png';

export default function ProductHero() {
    return (
        <section className="relative min-h-[95vh] flex items-center py-24 lg:py-32 bg-gradient-to-b from-mystic-indigo via-deep-purple to-temple-maroon overflow-hidden text-neutral-100">
            <SacredGeometry opacity={0.08} className="text-divine-gold mix-blend-overlay" />

            {/* Ambient Light/Aura */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.15),transparent_70%)] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-12">
                        <ScrollReveal delay={0.2}>
                            <div className="inline-flex items-center space-x-3 mb-4">
                                <div className="h-px w-12 bg-divine-gold/60" />
                                <span className="text-divine-gold font-serif tracking-[0.3em] uppercase text-xs">
                                    Sacred Offerings
                                </span>
                            </div>

                            <h1 className="font-serif text-5xl lg:text-7xl leading-[1.2] text-neutral-50">
                                The King of{' '}
                                <span className="relative inline-block text-saffron drop-shadow-[0_0_15px_rgba(255,153,51,0.3)]">
                                    Rudrakshas
                                </span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <div className="relative p-8 bg-white/5 backdrop-blur-md border-l-2 border-divine-gold/40 rounded-r-xl">
                                <div className="absolute -top-4 -left-2 text-6xl text-divine-gold/20 font-serif">"</div>
                                <p className="text-xl lg:text-2xl text-neutral-200 italic font-serif leading-relaxed tracking-wide">
                                    It's not just a bead. It's my daily reminder to slow down and breathe.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.6}>
                            <div className="flex flex-wrap gap-4 text-sm font-medium text-neutral-300">
                                {[
                                    { icon: <Globe className="w-4 h-4 text-blue-400" />, text: '5 Elements' },
                                    { icon: <Sun className="w-4 h-4 text-amber-400" />, text: 'Jupiter Energy' },
                                    { icon: <Flower className="w-4 h-4 text-pink-400" />, text: 'Chakra Balance' },
                                    { icon: <Zap className="w-4 h-4 text-yellow-400" />, text: 'Spiritually charged' },
                                    { icon: <Clock className="w-4 h-4 text-neutral-400" />, text: 'Timeless tradition' },
                                    { icon: <Shield className="w-4 h-4 text-emerald-400" />, text: 'GRS certified' },
                                    { icon: <Leaf className="w-4 h-4 text-green-400" />, text: '100% natural Nepali origin' },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:border-divine-gold/30 hover:bg-white/10 transition-all duration-500"
                                    >
                                        <span>{item.icon}</span>
                                        <span>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>

                        {/* Mobile Image - Visible only on mobile, placed between features and button */}
                        <div className="lg:hidden relative w-full max-w-xs mx-auto aspect-[4/5] my-8 rounded-t-[5rem] rounded-b-[1rem] overflow-hidden shadow-2xl border border-white/10 group">
                            <div className="absolute inset-0 bg-gradient-to-b from-neutral-800 to-neutral-900 flex items-center justify-center">
                                <img
                                    src={rudrakshaHero}
                                    alt="Sacred 5 Mukhi Rudraksha"
                                    className="w-full h-full object-cover opacity-90"
                                />
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1),transparent_60%)] animate-pulse-slow pointer-events-none" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        </div>

                        <ScrollReveal delay={0.8}>
                            <div className="pt-4 flex items-center space-x-8">
                                <button className="px-10 py-5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-serif tracking-wider text-lg rounded-full shadow-lg shadow-amber-900/20 transition-all duration-300 hover:scale-105 hover:shadow-amber-900/40">
                                    Shop Now
                                </button>
                                <span className="text-xs text-divine-gold/80 font-serif tracking-[0.2em] uppercase">
                                    Free Shipping in India
                                </span>
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="hidden lg:flex relative lg:h-[700px] items-center justify-center perspective-1000">
                        {/* Rotating Mandala Background behind image */}
                        {/* Rotating Mandala Background behind image - REMOVED */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-30">
                            {/* Removed rotating rings */}
                        </div>

                        {/* Main Image with Aura */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="relative z-10 w-full max-w-md aspect-[4/5] rounded-t-[10rem] rounded-b-[2rem] overflow-hidden shadow-2xl border border-white/10 group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-neutral-800 to-neutral-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-[2s] ease-in-out">
                                <img
                                    src={rudrakshaHero}
                                    alt="Sacred 5 Mukhi Rudraksha"
                                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                                />
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1),transparent_60%)] animate-pulse-slow pointer-events-none" />
                            </div>

                            {/* Glass Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        </motion.div>

                        {/* Floating Elements - Ritualistic - REMOVED */}
                    </div>
                </div>
            </div>
        </section>
    );
}
