import React from 'react';
import { motion } from 'framer-motion';
import { Bike, Dumbbell, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    const features = [
        { icon: <Bike className="w-8 h-8" />, title: "MX & MTB Training", description: "Specialized training programs for motocross and mountain bike athletes." },
        { icon: <Dumbbell className="w-8 h-8" />, title: "Strength & Conditioning", description: "Certified Strength and Conditioning Specialist to help you reach your peak performance." },
        { icon: <ClipboardList className="w-8 h-8" />, title: "Personalized Coaching", description: "One-on-one coaching to help you achieve your fitness goals." },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-background text-foreground space-y-24 md:space-y-32 mb-24"
        >
            {/* 1. Hero Section */}
            <section className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold font-sans tracking-tight text-foreground">
                            Unlock Your <span className="text-primary">Peak</span> Performance
                        </h1>
                        <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg md:text-xl font-serif text-muted-foreground">
                            Horsepower Development is a personal training company for motocross and mountain bike athletes. We are dedicated to helping you achieve your fitness goals and reach your peak performance.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link to="/get-started" className="bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-ring font-bold rounded-md px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 text-center">
                                Get Started
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-96">
                        <img src="/The Action Shot.png" alt="Action Shot" className="col-span-2 row-span-1 object-cover w-full h-full rounded-lg shadow-lg" />
                        <img src="/The Athlete Focus.png" alt="Athlete Focus" className="col-span-1 row-span-1 object-cover w-full h-full rounded-lg shadow-lg" />
                        <img src="/The Graphic Look.png" alt="Graphic Look" className="col-span-1 row-span-1 object-cover w-full h-full rounded-lg shadow-lg" />
                    </div>
                </div>
            </section>

            {/* 2. Social Proof Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8">
                    <div className="flex justify-center items-center gap-4">
                        <p className="font-mono text-muted-foreground text-xl md:text-2xl">Owned by @jamespvlny</p>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <p className="font-mono text-muted-foreground text-xl md:text-2xl">Fueled by @hammernutrition</p>
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
                        <div key={i} className="bg-card p-6 rounded-lg border border-border text-center transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-2">
                            <div className="inline-block p-4 bg-secondary text-secondary-foreground rounded-full mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold font-sans text-card-foreground">{feature.title}</h3>
                            <p className="mt-2 font-serif text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Final CTA Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative text-center bg-card p-10 rounded-lg border border-border">
                    <div className="relative">
                        <h2 className="text-3xl md:text-4xl font-bold font-sans text-primary">Ready to Get Started?</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg font-serif text-muted-foreground">
                            Take the next step and see how our solutions can help you achieve your goals.
                        </p>
                        <div className="mt-8">
                            <Link to="/get-started" className="bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-ring font-bold rounded-md px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
                                Start Your Project Today
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
