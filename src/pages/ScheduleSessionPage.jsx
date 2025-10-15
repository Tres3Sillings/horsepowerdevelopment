import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Calendly = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            className="calendly-inline-widget h-full w-full"
            data-url="https://calendly.com/povolnyj320/strength-training-session"
            style={{ minWidth: '320px', height: '700px' }}
        />
    );
};

export default function ScheduleSessionPage() {
    const pageVariants = {
        initial: { opacity: 0, y: 20 },
        in: { opacity: 1, y: 0 },
        out: { opacity: 0, y: -20 }
    };

    const pageTransition = {
        type: 'tween',
        ease: 'anticipate',
        duration: 0.7
    };

    return (
        <main className="bg-background min-h-screen py-16 md:py-24 px-4 font-body">
            <motion.div
                key="calendly"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="container mx-auto max-w-2xl"
            >
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold font-sans text-foreground">Schedule Your Session</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Please pick a time that works best for you below.
                    </p>
                </div>
                <div className="bg-card border border-border rounded-xl shadow-lg overflow-hidden">
                    <Calendly />
                </div>
            </motion.div>
        </main>
    );
}
