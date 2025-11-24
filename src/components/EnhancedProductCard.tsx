import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';
import { useRef } from 'react';

interface ProductCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  image: string | React.ReactNode;
}

export default function EnhancedProductCard({ title, price, originalPrice, discount, image }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set((e.clientX - centerX) / (rect.width / 2));
    mouseY.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-neutral-200/50 border border-neutral-200/50">
        <div className="absolute inset-0 bg-gradient-to-br from-divine-gold/0 to-divine-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative aspect-square bg-gradient-to-br from-neutral-50 to-neutral-100 flex items-center justify-center overflow-hidden">
          <motion.div
            className="w-full h-full flex items-center justify-center"
            style={{ transform: 'translateZ(40px)' }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            {typeof image === 'string' && image.startsWith('http') ? (
              <img src={image} alt={title} className="w-full h-full object-cover" />
            ) : (
              <div className="text-9xl filter drop-shadow-lg flex items-center justify-center w-full h-full text-divine-gold">
                {image}
              </div>
            )}
          </motion.div>

          <motion.div
            className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100"
            style={{ transform: 'translateZ(60px)' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart className="w-5 h-5 text-primary-600" strokeWidth={2} />
          </motion.div>

          {discount && (
            <motion.div
              className="absolute top-4 left-4 px-4 py-2 bg-secondary-600 text-white text-sm font-medium rounded-full shadow-lg"
              style={{ transform: 'translateZ(50px)' }}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              {discount}
            </motion.div>
          )}
        </div>

        <div className="p-8 space-y-4" style={{ transform: 'translateZ(20px)' }}>
          <h3 className="font-serif text-2xl text-neutral-900 group-hover:text-primary-700 transition-colors duration-300">
            {title}
          </h3>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-3xl font-serif text-neutral-900">{price}</div>
              {originalPrice && (
                <div className="text-lg text-neutral-400 line-through">{originalPrice}</div>
              )}
            </div>
          </div>

          <motion.button
            className="w-full px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-medium rounded-xl shadow-lg shadow-primary-900/30 flex items-center justify-center space-x-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ transform: 'translateZ(30px)' }}
          >
            <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Add to Cart</span>
          </motion.button>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-divine-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100"
            style={{
              transform: 'translateZ(10px)',
            }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
