import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollFadeIn({ children, className }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
