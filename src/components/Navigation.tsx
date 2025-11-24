import { Search, Heart, ShoppingCart, ChevronDown, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Navigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { scrollY } = useScroll();

  const navOpacity = useTransform(scrollY, [0, 100], [0.7, 0.95]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0.1, 0.2]);

  const categories = [
    {
      name: 'Rudraksha',
      subcategories: ['1 Mukhi', '5 Mukhi', '7 Mukhi', '9 Mukhi', 'Mala Sets'],
    },
    {
      name: 'Gemstones',
      subcategories: ['Ruby', 'Pearl', 'Coral', 'Emerald', 'Blue Sapphire'],
    },
    {
      name: 'Yantras',
      subcategories: ['Sri Yantra', 'Kuber Yantra', 'Mahamrityunjaya', 'Vastu Yantra'],
    },
    {
      name: 'Jewellery',
      subcategories: ['Bracelets', 'Pendants', 'Malas', 'Rings'],
    },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b"
        style={{
          backgroundColor: `rgba(26, 23, 20, ${navOpacity.get()})`,
          borderColor: `rgba(255, 255, 255, ${borderOpacity.get()})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-divine-gold/0 via-divine-gold/5 to-divine-gold/0" />
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-12">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center space-x-3"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-divine-gold to-divine-darkGold rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-neutral-900" />
                </div>
                <span className="text-2xl font-serif text-neutral-50 font-semibold tracking-tight">
                  Local Pandit
                </span>
              </motion.div>

              <nav className="hidden lg:flex items-center space-x-8">
                {categories.map((category, idx) => (
                  <div
                    key={category.name}
                    className="relative"
                    onMouseEnter={() => setActiveMenu(category.name)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <motion.button
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center space-x-1 text-neutral-200 hover:text-divine-gold transition-colors duration-300 text-sm font-medium tracking-wide"
                    >
                      <span>{category.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </motion.button>

                    {activeMenu === category.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-4 w-56 bg-neutral-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                      >
                        {category.subcategories.map((sub, subIdx) => (
                          <motion.a
                            key={sub}
                            href="#"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: subIdx * 0.05 }}
                            className="block px-6 py-3 text-neutral-300 hover:text-divine-gold hover:bg-white/5 transition-all duration-200 text-sm"
                          >
                            {sub}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
                <a href="#" className="text-neutral-200 hover:text-divine-gold transition-colors duration-300 text-sm font-medium tracking-wide">
                  Book Pooja
                </a>
                <a href="#" className="text-neutral-200 hover:text-divine-gold transition-colors duration-300 text-sm font-medium tracking-wide">
                  About Us
                </a>
              </nav>
            </div>

            <div className="flex items-center space-x-6">
              <button className="text-neutral-300 hover:text-divine-gold transition-colors duration-300">
                <Search className="w-5 h-5" strokeWidth={1.5} />
              </button>
              <button className="text-neutral-300 hover:text-divine-gold transition-colors duration-300">
                <Heart className="w-5 h-5" strokeWidth={1.5} />
              </button>
              <button className="relative text-neutral-300 hover:text-divine-gold transition-colors duration-300">
                <ShoppingCart className="w-5 h-5" strokeWidth={1.5} />
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary-600 text-white text-xs rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="h-20" />
    </>
  );
}
