import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollFadeIn from '../components/ScrollFadeIn';

export default function ResultsPage() {
    const testimonials = [
        {
            quote: "Gained 15% more endurance and qualified for Nationals. James knows how to push you to the next level.",
            name: "- Pro MX Rider",
            beforeImage: "/before-placeholder.png",
            afterImage: "/motocross-jump-orange-bike.jpg",
        },
        {
            quote: "I went from struggling on climbs to setting new personal records. The strength training made a huge difference.",
            name: "- MTB Enthusiast",
            beforeImage: "/before-placeholder.png",
            afterImage: "/mtb-race-finish-line.JPG",
        },
        {
            quote: "The online coaching was a game-changer. I finally have structure and purpose in my training.",
            name: "- Amateur Racer",
            beforeImage: "/before-placeholder.png",
            afterImage: "/motocross-cornering-sand-track.JPG",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-background text-foreground"
        >
            {/* 1. Hero Section */}
            <section className="relative bg-muted py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollFadeIn immediate>
                        <h1 className="text-4xl md:text-6xl font-bold font-sans tracking-tight text-foreground">
                            Athletes Who <span className="text-primary">Built Their Horsepower</span>
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl font-serif text-muted-foreground">
                            Real results from riders just like you. We are proud to be a part of their journey to peak performance.
                        </p>
                    </ScrollFadeIn>
                </div>
            </section>

            {/* 2. Testimonials Section */}
            <section className="bg-background py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-20">
                        {testimonials.map((testimonial, index) => (
                            <ScrollFadeIn key={index}>
                                <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
                                    <div className="grid md:grid-cols-3 gap-8 items-center">
                                        <div className="md:col-span-1">
                                            <blockquote className="text-xl font-serif italic text-foreground">
                                                <p>\"{testimonial.quote}\"</p>
                                                <footer className="mt-4 text-base font-sans text-primary not-italic">{testimonial.name}</footer>
                                            </blockquote>
                                        </div>
                                        <div className="md:col-span-2 grid grid-cols-2 gap-4">
                                            <div>
                                                <h3 className="text-center font-sans text-muted-foreground mb-2">Before</h3>
                                                <img src={testimonial.beforeImage} alt="Before" className="object-cover w-full h-64 rounded-lg bg-muted" />
                                            </div>
                                            <div>
                                                <h3 className="text-center font-sans text-muted-foreground mb-2">After</h3>
                                                <img src={testimonial.afterImage} alt="After" className="object-cover w-full h-64 rounded-lg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollFadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Final CTA Section */}
            <section className="bg-muted py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollFadeIn className="relative text-center bg-card p-10 rounded-lg border border-border">
                        <div className="relative">
                            <h2 className="text-3xl md:text-4xl font-bold font-sans text-primary">Ready to Build Your Horsepower?</h2>
                            <p className="mt-4 max-w-2xl mx-auto text-lg font-serif text-muted-foreground">
                                Join the growing list of athletes who have transformed their performance with our proven training methods.
                            </p>
                            <div className="mt-8">
                                <Link to="/contact" className="bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-ring font-bold rounded-md px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
                                    Start Your Journey
                                </Link>
                            </div>
                        </div>
                    </ScrollFadeIn>
                </div>
            </section>
        </motion.div>
    );
}
