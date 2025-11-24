import { motion } from 'framer-motion';
import { Check, ShieldCheck, Leaf, CircleDot, HandHeart, Lock } from 'lucide-react';

export default function ProductDetails() {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left Column: Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="font-serif text-3xl lg:text-4xl text-neutral-900">
                            Product Description
                        </h2>

                        <div className="prose prose-lg text-neutral-600">
                            <p>
                                Experience calm, clarity, and spiritual grounding with the most universally recommended Rudraksha bead.
                                Sourced from the Himalayan regions of Nepal and energized before delivery, this 108+1 bead mala is crafted
                                from natural 5 Mukhi Rudraksha, known as the "King of Rudrakshas" for its balance of power, safety, and accessibility.
                            </p>
                            <p className="mt-4">
                                Rooted in ancient tradition and backed by trust, each bead symbolizes the five elements and is linked to
                                Jupiter (Brihaspati), the planet of wisdom, healing, and expansion.
                            </p>
                        </div>

                        <ul className="space-y-4">
                            {[
                                { icon: Leaf, text: 'Natural Nepali Beads', color: 'text-green-600' },
                                { icon: CircleDot, text: '108+1 Strong Mala', color: 'text-amber-600' },
                                { icon: ShieldCheck, text: 'GRS Certified Authenticity', color: 'text-blue-600' },
                                { icon: HandHeart, text: 'Everyday Spiritual Wear', color: 'text-purple-600' },
                            ].map((item, i) => (
                                <li key={i} className="flex items-center space-x-3 text-neutral-800 font-medium">
                                    <item.icon className={`w-5 h-5 ${item.color}`} />
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right Column: Certifications & X-Ray */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200">
                            <h3 className="font-serif text-2xl text-neutral-900 mb-6 flex items-center">
                                <ShieldCheck className="w-6 h-6 text-divine-gold mr-2" />
                                GRS X-ray Tested & Verified
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-2 text-neutral-600 bg-white p-3 rounded-lg border border-neutral-100 shadow-sm">
                                    <Lock className="w-5 h-5 text-neutral-500" />
                                    <span className="font-medium">Verified. Energized. Ready to Wear.</span>
                                </div>

                                <ul className="space-y-3">
                                    {[
                                        'GRS X-ray certified',
                                        '100% natural Nepali origin',
                                        'Includes usage + care guide'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center space-x-3">
                                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                                <Check className="w-3 h-3 text-green-600" />
                                            </div>
                                            <span className="text-neutral-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-neutral-900 text-neutral-50 rounded-3xl p-8 border border-neutral-800 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-divine-gold/10 rounded-bl-full" />

                            <h3 className="font-serif text-2xl mb-6 relative z-10">
                                Certificate of Authenticity
                            </h3>

                            <div className="space-y-4 relative z-10">
                                <p className="font-medium text-divine-gold">What makes this Rudraksha different?</p>
                                <ul className="space-y-3 text-neutral-300">
                                    {[
                                        'Natural & hand-picked from Nepal',
                                        'Lab-tested, X-ray certified by GRS',
                                        'Spiritually activated before shipping',
                                        'Comes with clear instructions & mantra guide'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start space-x-3">
                                            <Check className="w-4 h-4 text-divine-gold mt-1" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
