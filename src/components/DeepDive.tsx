import { motion } from 'framer-motion';
import { Globe, Droplets, Flame, Wind, Stars, Crown, Scroll, Sparkles } from 'lucide-react';
import SacredGeometry from './SacredGeometry';
import ScrollReveal from './ScrollReveal';

export default function DeepDive() {
    const elements = [
        { name: 'Earth', icon: <Globe className="w-8 h-8" />, desc: 'Stability', color: 'from-emerald-500 to-emerald-700' },
        { name: 'Water', icon: <Droplets className="w-8 h-8" />, desc: 'Calm emotions', color: 'from-blue-500 to-blue-700' },
        { name: 'Fire', icon: <Flame className="w-8 h-8" />, desc: 'Inner strength', color: 'from-orange-500 to-red-600' },
        { name: 'Air', icon: <Wind className="w-8 h-8" />, desc: 'Clarity', color: 'from-sky-300 to-sky-500' },
        { name: 'Space', icon: <Stars className="w-8 h-8" />, desc: 'Peace', color: 'from-indigo-500 to-purple-700' },
    ];

    return (
        <section className="relative py-24 lg:py-32 bg-cosmic-blue text-neutral-50 overflow-hidden">
            <SacredGeometry opacity={0.03} color="#ffffff" />

            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/50 via-cosmic-blue to-black" />
            <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

            <div className="relative max-w-7xl mx-auto px-6 space-y-32">

                {/* Section 1: Why 5 Mukhi is King */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <ScrollReveal>
                        <h2 className="font-serif text-4xl lg:text-5xl mb-8 leading-tight">
                            Why 5 Mukhi Rudraksha Is Called the{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-divine-gold to-divine-lightGold">
                                King of Rudrakshas
                            </span>
                        </h2>
                        <ul className="space-y-6 text-lg text-neutral-300">
                            {[
                                'Represents the five elements — Earth, Water, Fire, Air & Space',
                                'Brings balance, peace, and protection to the wearer',
                                'Ruled by Jupiter (Brihaspati) — planet of wisdom & growth',
                                'Safe and suitable for everyone — men, women, children & elders',
                                'Promotes mental clarity, spiritual calm, and emotional stability',
                                'Most widely worn and universally beneficial Rudraksha'
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start space-x-3 group"
                                >
                                    <Sparkles className="w-5 h-5 text-divine-gold mt-1 group-hover:scale-125 transition-transform duration-300" />
                                    <span className="group-hover:text-white transition-colors duration-300">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </ScrollReveal>

                    <div className="relative flex justify-center">
                        <motion.div
                            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="w-80 h-80 rounded-full bg-gradient-to-br from-divine-gold/20 to-transparent blur-3xl absolute inset-0 m-auto"
                        />
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-10 drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                        >
                            <Crown className="w-32 h-32 text-divine-gold" strokeWidth={1} />
                        </motion.div>
                    </div>
                </div>

                {/* Section 2: Align Your Energy */}
                <div className="text-center">
                    <ScrollReveal>
                        <div className="mb-16">
                            <h2 className="font-serif text-4xl lg:text-5xl mb-6">
                                Align Your Energy with the{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-divine-gold to-divine-lightGold">
                                    5 Elements
                                </span>
                            </h2>
                            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                                The 5 Mukhi Rudraksha balances Earth, Water, Fire, Air, and Space, bringing harmony to mind, body, and soul.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {elements.map((el, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <motion.div
                                    whileHover={{ y: -10, scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 group cursor-default h-full flex flex-col items-center"
                                >
                                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300 text-divine-gold">
                                        {el.icon}
                                    </div>
                                    <h3 className="font-serif text-xl text-white mb-1">{el.name}</h3>
                                    <p className="text-divine-gold text-sm font-medium">{el.desc}</p>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>

                    <ScrollReveal delay={0.6}>
                        <p className="mt-12 text-neutral-400 italic">
                            Each face (mukhi) represents one element, helping you stay balanced, grounded, and spiritually aligned.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Section 3: Brihaspati's Blessing */}
                <div className="relative bg-gradient-to-br from-divine-gold/10 to-neutral-900 rounded-3xl p-8 lg:p-16 border border-divine-gold/20 overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-divine-gold/10 blur-3xl rounded-full -mr-32 -mt-32" />

                    <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-block px-4 py-1 rounded-full bg-divine-gold/20 border border-divine-gold/40 text-divine-gold text-sm font-medium uppercase tracking-wider">
                            The Wisdom of Jupiter
                        </div>

                        <h2 className="font-serif text-4xl lg:text-5xl">
                            Brihaspati's Blessing
                        </h2>

                        <p className="text-xl text-neutral-300 leading-relaxed">
                            Ruled by Jupiter, the 5 Mukhi Rudraksha boosts clarity, focus, and spiritual growth, helping you align with wisdom, prosperity, and personal expansion.
                        </p>

                        <div className="py-8">
                            <div className="text-3xl lg:text-4xl font-serif text-divine-lightGold mb-4">
                                "रुद्राक्षधारणं यन्तु तच्च फलं नात्र संशयः"
                            </div>
                            <p className="text-neutral-400 text-lg">
                                Wearing Rudraksha surely brings spiritual merit — no doubt about it.
                            </p>
                            <div className="flex items-center justify-center space-x-2 text-neutral-500 text-sm mt-2">
                                <Scroll className="w-4 h-4" />
                                <span>(Padma Purana)</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
