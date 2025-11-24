import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Search, User, Flower, Brain, Shield, Moon, Heart, Lightbulb } from 'lucide-react';

export default function Benefits() {
    const shifts = [
        { icon: <Flower className="w-6 h-6 text-pink-500" />, text: 'Calm in the chaos' },
        { icon: <Brain className="w-6 h-6 text-blue-500" />, text: 'Sharper thinking' },
        { icon: <Shield className="w-6 h-6 text-emerald-500" />, text: 'Protection from negativity' },
        { icon: <Moon className="w-6 h-6 text-indigo-500" />, text: 'Better sleep & less overthinking' },
        { icon: <Heart className="w-6 h-6 text-red-500" />, text: 'Support for BP & stress (traditional belief)' },
    ];

    const audience = [
        {
            icon: Briefcase,
            title: 'For professionals',
            desc: 'focus & clarity',
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: GraduationCap,
            title: 'For students',
            desc: 'memory & concentration',
            color: 'from-green-500 to-green-600'
        },
        {
            icon: Search,
            title: 'For seekers',
            desc: 'inner peace & growth',
            color: 'from-purple-500 to-purple-600'
        },
        {
            icon: User,
            title: 'For elders',
            desc: 'calm & stability',
            color: 'from-amber-500 to-amber-600'
        },
    ];

    return (
        <section className="relative py-24 bg-neutral-50 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-6">

                {/* Section 1: Feel the Shift */}
                <div className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-divine-gold/10 rounded-full mb-6">
                            <Lightbulb className="w-8 h-8 text-divine-gold" />
                        </div>
                        <h2 className="font-serif text-4xl lg:text-5xl text-neutral-900 mb-6">
                            Feel the Shift with{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-divine-gold to-divine-darkGold">
                                5 Mukhi
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {shifts.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="text-2xl">{item.icon}</div>
                                <p className="text-neutral-700 font-medium">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Section 2: This Mala Is Made For */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-serif text-4xl lg:text-5xl text-neutral-900 mb-6">
                            This Mala Is Made For...
                        </h2>
                        <p className="text-neutral-600 text-lg italic">
                            "Unlike other types, yeh sabke liye shubh mana gaya hai"
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {audience.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className="group relative bg-white rounded-3xl p-8 shadow-lg border border-neutral-100 overflow-hidden"
                                >
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-5 rounded-bl-full transition-opacity group-hover:opacity-10`} />

                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                                        <Icon className="w-7 h-7" />
                                    </div>

                                    <h3 className="font-serif text-xl text-neutral-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-neutral-500">
                                        – {item.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
