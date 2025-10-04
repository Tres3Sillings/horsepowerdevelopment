import React from 'react';
import { motion } from 'framer-motion';
import { Zap, BarChart, Users } from 'lucide-react';

export default function HomePage() {
    const features = [
        { icon: <Zap size={24} />, title: "MX & MTB Training", description: "Specialized training programs for motocross and mountain bike athletes." },
        { icon: <BarChart size={24} />, title: "Strength & Conditioning", description: "Certified Strength and Conditioning Specialist to help you reach your peak performance." },
        { icon: <Users size={24} />, title: "Personalized Coaching", description: "One-on-one coaching to help you achieve your fitness goals." },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-24 md:space-y-32 mb-24"
        >
            {/* 1. Hero Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold font-sans text-primary tracking-tight">
                            Unlock Your Peak Performance
                        </h1>
                        <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg md:text-xl font-serif text-muted-foreground">
                            Horsepower Development is a personal training company for motocross and mountain bike athletes. We are dedicated to helping you achieve your fitness goals and reach your peak performance.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <button className="bg-primary text-primary-foreground hover:bg-accent focus:outline-none focus:ring-4 focus:ring-ring font-bold rounded-md px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
                                Get Started
                            </button>
                            <button className="bg-secondary text-secondary-foreground hover:bg-border font-bold rounded-md px-8 py-4 text-lg transition-colors duration-300">
                                Contact Us
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-80 md:h-96">
                        {/* Replace with a relevant image or video */}
                        <div className="w-full h-full bg-secondary rounded-lg flex items-center justify-center">
                            <p className="font-mono text-muted-foreground">Image or Video Here</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Social Proof Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="flex justify-center">
                        <p className="font-mono text-muted-foreground text-2xl">Owned by @jamespvlny</p>
                    </div>
                    <div className="flex justify-center">
                        <p className="font-mono text-muted-foreground text-2xl">Fueled by @hammernutrition</p>
                    </div>
                </div>
            </section>

            {/* 3. Features Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-sans text-primary">Train With The Best</h2>
                    <p className="mt-4 text-lg font-serif text-muted-foreground">We offer a range of services to help you achieve your fitness goals. Whether you are a professional athlete or a weekend warrior, we have a program for you.</p>
                </div>
                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <div key={i} className="bg-card p-6 rounded-lg border border-border text-center">
                            <div className="inline-block p-4 bg-secondary text-accent rounded-full mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold font-sans text-foreground">{feature.title}</h3>
                            <p className="mt-2 font-serif text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Final CTA Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center bg-card p-10 rounded-lg border border-border">
                    <h2 className="text-3xl md:text-4xl font-bold font-sans text-primary">Ready to Get Started?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg font-serif text-muted-foreground">
                        Take the next step and see how our solutions can help you achieve your goals.
                    </p>
                    <div className="mt-8">
                        <button className="bg-primary text-primary-foreground hover:bg-accent focus:outline-none focus:ring-4 focus:ring-ring font-bold rounded-md px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
                            Start Your Project Today
                        </button>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
