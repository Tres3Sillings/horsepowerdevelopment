import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// --- Calendly Component ---
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
            data-url="https://calendly.com/povolnyj320/30min"
            style={{ minWidth: '320px', height: '700px' }}
        />
    );
};


// --- Main Contact Page Component ---
export default function IntroCallPage() {
    const location = useLocation();
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [formStatus, setFormStatus] = useState({ loading: false, error: '' });

    const [formData, setFormData] = useState({
        age: '',
        discipline: '',
        otherDiscipline: '',
        experience: '',
        weightTrainingExperience: '',
        goals: '',
        selectedPackage: 'N/A',
    });

    useEffect(() => {
        if (location.state?.selectedPackage) {
            setFormData(prev => ({ ...prev, selectedPackage: location.state.selectedPackage }));
        }
    }, [location.state]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ loading: true, error: '' });

        try {
            const formspreeEndpoint = 'https://formspree.io/f/mnnzkpqg';

            const response = await fetch(formspreeEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Something went wrong. Please try again.');
            }

            setIsFormSubmitted(true);

        } catch (error) {
            setFormStatus({ loading: false, error: error.message });
        }
    };

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
            <div className="container mx-auto max-w-2xl">
                <AnimatePresence mode="wait">
                    {!isFormSubmitted ? (
                        <motion.div
                            key="form"
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                            <div className="text-center">
                                <h1 className="text-3xl md:text-4xl font-bold font-sans text-foreground">Let's Get Started</h1>
                                <p className="mt-4 text-lg text-muted-foreground">
                                    Just a few quick questions to understand your background before you book your free 15-minute consultation.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="mt-12 bg-card border border-border p-8 rounded-xl shadow-lg space-y-6">
                                <input type="hidden" name="selectedPackage" value={formData.selectedPackage} />

                                {/* Age */}
                                <div>
                                    <label htmlFor="age" className="block text-sm font-medium text-foreground mb-2">What is your age?</label>
                                    <input
                                        type="number"
                                        id="age"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        required
                                        className="py-3 px-4 block w-full shadow-sm rounded-md bg-input border-border focus:ring-primary focus:border-primary"
                                        placeholder="e.g., 25"
                                    />
                                </div>

                                {/* Primary Discipline */}
                                <div>
                                    <label htmlFor="discipline" className="block text-sm font-medium text-foreground mb-2">What is your primary discipline?</label>
                                    <select
                                        id="discipline"
                                        name="discipline"
                                        value={formData.discipline}
                                        onChange={handleChange}
                                        required
                                        className="py-3 px-4 block w-full shadow-sm rounded-md bg-input border-border focus:ring-primary focus:border-primary"
                                    >
                                        <option value="" disabled>Select a discipline...</option>
                                        <option value="Motocross">Motocross</option>
                                        <option value="Mountain Bike (Enduro/Downhill)">Mountain Bike (Enduro/Downhill)</option>
                                        <option value="Mountain Bike (XC)">Mountain Bike (XC)</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {formData.discipline === 'Other' && (
                                        <input
                                            type="text"
                                            name="otherDiscipline"
                                            value={formData.otherDiscipline}
                                            onChange={handleChange}
                                            placeholder="Please specify your discipline"
                                            className="mt-2 py-3 px-4 block w-full shadow-sm rounded-md bg-input border-border focus:ring-primary focus:border-primary"
                                            required
                                        />
                                    )}
                                </div>

                                {/* Years of Experience */}
                                <div>
                                    <label htmlFor="experience" className="block text-sm font-medium text-foreground mb-2">How many years of riding/racing experience do you have?</label>
                                    <select
                                        id="experience"
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleChange}
                                        required
                                        className="py-3 px-4 block w-full shadow-sm rounded-md bg-input border-border focus:ring-primary focus:border-primary"
                                    >
                                        <option value="" disabled>Select your experience level...</option>
                                        <option value="Beginner (0-2 years)">Beginner (0-2 years)</option>
                                        <option value="Intermediate (2-5 years)">Intermediate (2-5 years)</option>
                                        <option value="Advanced (5-10 years)">Advanced (5-10 years)</option>
                                        <option value="Expert (10+ years)">Expert (10+ years)</option>
                                    </select>
                                </div>

                                {/* Years of Weight Training Experience */}
                                <div>
                                    <label htmlFor="weightTrainingExperience" className="block text-sm font-medium text-foreground mb-2">How many years of weight training experience do you have?</label>
                                    <select
                                        id="weightTrainingExperience"
                                        name="weightTrainingExperience"
                                        value={formData.weightTrainingExperience}
                                        onChange={handleChange}
                                        required
                                        className="py-3 px-4 block w-full shadow-sm rounded-md bg-input border-border focus:ring-primary focus:border-primary"
                                    >
                                        <option value="" disabled>Select your experience level...</option>
                                        <option value="None">None</option>
                                        <option value="Beginner (0-1 years)">Beginner (0-1 years)</option>
                                        <option value="Intermediate (1-3 years)">Intermediate (1-3 years)</option>
                                        <option value="Advanced (3+ years)">Advanced (3+ years)</option>
                                    </select>
                                </div>

                                {/* Primary Goals */}
                                <div>
                                    <label htmlFor="goals" className="block text-sm font-medium text-foreground mb-2">What is your Fitness and performace goal with personal training?</label>
                                    <textarea
                                        id="goals"
                                        name="goals"
                                        rows="4"
                                        value={formData.goals}
                                        onChange={handleChange}
                                        required
                                        className="py-3 px-4 block w-full shadow-sm rounded-md bg-input border-border focus:ring-primary focus:border-primary"
                                        placeholder="e.g., 'To win my local series,' 'Improve my endurance for long races,' 'Build strength to prevent injuries.'"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div>
                                    <button
                                        type="submit"
                                        disabled={formStatus.loading}
                                        className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors disabled:opacity-50"
                                    >
                                        {formStatus.loading ? 'Submitting...' : 'Submit & Book Your Call'}
                                    </button>
                                    {formStatus.error && <p className="text-destructive text-sm mt-2 text-center">{formStatus.error}</p>}
                                </div>
                            </form>
                        </motion.div>
                    ) : (
                        // --- STEP 2: Calendly Booking ---
                        <motion.div
                            key="calendly"
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                            <div className="text-center mb-8">
                                <h1 className="text-3xl md:text-4xl font-bold font-sans text-foreground">Schedule Your Call</h1>
                                <p className="mt-4 text-lg text-muted-foreground">
                                    Great! Please pick a time that works best for you below.
                                </p>
                            </div>
                            <div className="bg-card border border-border rounded-xl shadow-lg overflow-hidden">
                                <Calendly />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
}
