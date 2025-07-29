import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold font-sans text-primary mb-6">About Us</h1>
                <div className="prose prose-lg max-w-none text-foreground font-serif space-y-4">
                    <p>
                        This is the about page. It's where you would introduce your company, your mission, and the team behind the magic.
                    </p>
                    <p>
                        You can use this space to build trust and connect with your audience on a more personal level. Talk about your history, your values, and what makes your products or services unique.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}