import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Sparkles, Check } from 'lucide-react';

export default function Footer() {
  const brandLinks = [
    'About Us',
    'Careers',
    'LocalPandit Blog',
    'Jewellery Designs',
    'LocalPandit Reviews',
    'Custom Jewelry',
    'Custom Engagement Rings',
    'Gem Lab Certification',
  ];

  const helpLinks = [
    'Payment',
    'Shipping Policy',
    'Customer & Duties',
    'Ring Size Guide',
    'Gemstones Wholesale',
    'Carot to Ratti Converter',
    "FAQ's",
    'Terms & Exchange',
    'Returns & Exchange',
    'Privacy Policy',
    'Check Order Status',
  ];

  return (
    <footer className="relative bg-gradient-to-b from-neutral-50 to-neutral-100 border-t border-neutral-200">
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="footer-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="20" fill="none" stroke="#000" strokeWidth="0.5" />
            <circle cx="30" cy="30" r="10" fill="none" stroke="#000" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-divine-gold to-divine-darkGold rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-neutral-900" />
              </div>
              <span className="text-2xl font-serif text-neutral-900 font-semibold tracking-tight">
                Local Pandit
              </span>
            </div>

            <p className="text-neutral-600 leading-relaxed">
              Bringing ancient wisdom and authentic spiritual products to modern seekers.
              Your trusted source for genuine Rudraksha, gemstones, and sacred items.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-xl text-neutral-900">Brand Profile</h3>
            <ul className="space-y-3">
              {brandLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-xl text-neutral-900">Help</h3>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-xl text-neutral-900">Contact Us</h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div className="space-y-1">
                  <a href="tel:+919710110380" className="text-neutral-600 hover:text-primary-600 transition-colors text-sm block">
                    +91 9710110380
                  </a>
                  <p className="text-neutral-500 text-sm">Working Hours</p>
                  <p className="text-neutral-500 text-sm">Sales: 24/7</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <p className="text-neutral-600 text-sm">Support: 9:30am - 9:30pm IST</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <h4 className="font-medium text-neutral-900">Get in Touch</h4>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div className="text-neutral-600 text-sm leading-relaxed">
                  <p>Bazzify</p>
                  <p>10 LocalPandit Pvt Ltd</p>
                  <p>Flat/1909, Ashoka Avenue,</p>
                  <p>Bazzify, 143005</p>
                  <p className="mt-2">Ph +91 9710110380</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-neutral-600 text-sm">
              Copyright &copy;2024 localpandit.com - All Rights Reserved
            </p>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-divine-gold to-divine-darkGold rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">ISO</span>
                </div>
                <span className="text-neutral-600 text-sm">ISO Certified</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-secondary-600 to-secondary-700 rounded-lg flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <span className="text-neutral-600 text-sm">100% Authentic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
