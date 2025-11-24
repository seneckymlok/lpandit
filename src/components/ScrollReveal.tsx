import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}

export default function ScrollReveal({
    children,
    delay = 0,
    duration = 1.2,
    className = ""
}: ScrollRevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.22, 1, 0.36, 1] // Custom ease-out curve
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
