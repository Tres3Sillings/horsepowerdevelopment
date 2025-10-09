import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedFeatureCard({ feature }) {
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: -8, // Float up and stay
            borderColor: "hsl(var(--destructive))", // Use destructive (red) color
            boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            transition: {
                duration: 0.6,
                ease: "easeOut",
            }
        }
    };

    return (
        <motion.div
            variants={cardVariants}
            className="bg-card p-6 rounded-lg border text-center h-full flex flex-col"
            // The whileHover is kept for desktop users to provide interaction feedback
            whileHover={{
                y: -8,
                borderColor: 'hsl(var(--destructive))',
                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
            }}
        >
            <div className="inline-block p-4 bg-secondary text-secondary-foreground rounded-full mb-4 self-center">{feature.icon}</div>
            <h3 className="text-xl font-bold font-sans text-card-foreground">{feature.title}</h3>
            <p className="mt-2 font-serif text-muted-foreground flex-grow">{feature.description}</p>
        </motion.div>
    );
}
