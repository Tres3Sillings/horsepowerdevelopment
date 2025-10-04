import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const tiers = [
    {
        name: 'Foundation',
        price: 'Starting at $99/mo',
        description: 'Perfect for dedicated riders looking to build a strong base and improve fundamental skills.',
        features: [
            'Personalized Strength Program',
            'Customized Cardio & Endurance Plan',
            'Monthly Coach Check-in Calls',
            'Basic Nutrition Guidance',
        ],
        cta: 'Book a Free Consultation',
        isPopular: false,
    },
    {
        name: 'Competitor',
        price: 'Starting at $150/mo',
        description: 'Designed for serious athletes aiming to dominate their local series and reach the next level.',
        features: [
            'Everything in Foundation, plus:',
            'Advanced On-Bike Skill Development',
            'Bi-Weekly Coach Check-in Calls',
            'Detailed Race Strategy Sessions',
            'Access to Private Training Group',
        ],
        cta: 'Book a Free Consultation',
        isPopular: true,
    },
    {
        name: 'Pro',
        price: 'Starting at $300/mo',
        description: 'Our elite, all-inclusive package for professional athletes who demand the absolute best.',
        features: [
            'Everything in Competitor, plus:',
            'Weekly 1-on-1 Coaching Calls',
            'Full Nutrition & Supplement Plan',
            'Mental Performance Coaching',
            'Direct Line to Your Coach',
        ],
        cta: 'Book a Free Consultation',
        isPopular: false,
    },
];

export default function PricingPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-background text-foreground min-h-screen py-16 md:py-24"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-sans tracking-tight text-primary">
                        Find Your Perfect Plan
                    </h1>
                    <p className="mt-4 text-lg md:text-xl font-serif text-muted-foreground">
                        Invest in your performance. All plans are customized to your specific needs after our initial consultation call.
                    </p>
                </div>

                {/* Pricing Tiers Grid */}
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`relative flex flex-col bg-card border rounded-xl shadow-lg p-8 ${tier.isPopular ? 'border-primary' : 'border-border'}`}
                        >
                            {tier.isPopular && (
                                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                                    <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full px-4 py-1.5">
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            <h2 className="text-2xl font-bold font-sans text-foreground">{tier.name}</h2>
                            <p className="mt-2 text-muted-foreground text-sm flex-grow">{tier.description}</p>

                            <div className="mt-6">
                                <span className="text-4xl font-bold text-primary">{tier.price.split(' ')[2]}</span>
                                <span className="text-lg font-medium text-muted-foreground">{tier.price.split(' ')[3]}</span>
                                <p className="text-xs text-muted-foreground">{tier.price.split(' ').slice(0, 2).join(' ')}</p>
                            </div>

                            <ul className="mt-8 space-y-4 text-left">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-start">
                                        <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mr-3 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>

                                ))}
                            </ul>

                            <div className="mt-auto pt-8">
                                <Link to="/get-started" state={{ selectedPackage: tier.name }}>
                                    <button
                                        className={`w-full font-bold rounded-md px-8 py-3 text-lg transition-colors duration-300 ${
                                            tier.isPopular
                                                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                                                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                                        }`}
                                    >
                                        {tier.cta}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
