import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function ThankYouPage() {
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
        <main className="bg-background min-h-screen flex items-center justify-center py-16 md:py-24 px-4 font-body">
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="container mx-auto max-w-2xl text-center"
            >
                <div className="bg-card border border-border p-8 md:p-12 rounded-xl shadow-lg">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
                        className="flex justify-center mb-6"
                    >
                        <CheckCircle className="h-16 w-16 text-green-500" />
                    </motion.div>
                    <h1 className="text-3xl md:text-4xl font-bold font-sans text-foreground">
                        Thank You!
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Your information has been submitted successfully. We will reach out to you shortly to follow up.
                    </p>
                </div>
            </motion.div>
        </main>
    );
}
