import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function ServicesPage() {
    const services = [
        "Themeable Components",
        "Responsive Design",
        "Custom Hooks",
        "Multi-Page Structure",
        "Animation with Framer Motion"
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold font-sans text-primary mb-8">Our Services</h1>
                <ul className="space-y-4">
                    {services.map((service, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center bg-card p-4 rounded-lg border border-border"
                        >
                            <Check className="h-6 w-6 text-accent mr-4" />
                            <span className="font-serif text-lg">{service}</span>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}