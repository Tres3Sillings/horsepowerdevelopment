import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollFadeIn from '../components/ScrollFadeIn';

export default function BlogPage() {
    const blogPosts = [
        {
            title: "Top 5 Core Exercises for MX Riders",
            description: "A strong core is essential for stability and control on the bike. Discover the top 5 exercises that will make a real difference in your riding.",
            link: "/blog/core-exercises-for-mx",
            image: "/blog-placeholder-1.png"
        },
        {
            title: "How to Recover After a Long Ride",
            description: "Proper recovery is key to consistent performance. Learn the best strategies to help your body recover faster and stronger after a demanding ride.",
            link: "/blog/recovery-tips",
            image: "/blog-placeholder-2.png"
        },
        {
            title: "Why Cyclists Should Strength Train",
            description: "Think strength training will slow you down? Think again. Find out why incorporating strength work is crucial for improving power, endurance, and injury prevention.",
            link: "/blog/why-strength-train",
            image: "/blog-placeholder-3.png"
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
                        <h1 className="text-4xl md:text-6xl font-bold font-sans tracking-tight text-primary">
                            Resources & Insights
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl font-serif text-muted-foreground">
                            Actionable training tips and expert advice to help you become a stronger, faster, and more resilient rider.
                        </p>
                    </ScrollFadeIn>
                </div>
            </section>

            {/* 2. Blog Posts Section */}
            <section className="bg-background py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <ScrollFadeIn key={index}>
                                <div className="bg-card rounded-lg shadow-lg overflow-hidden border border-border h-full flex flex-col">
                                    <img src={post.image} alt={post.title} className="object-cover w-full h-48 bg-muted" />
                                    <div className="p-6 flex-grow flex flex-col">
                                        <h2 className="text-xl font-bold font-sans text-primary">{post.title}</h2>
                                        <p className="mt-3 text-muted-foreground font-serif flex-grow">{post.description}</p>
                                        <div className="mt-4">
                                            <Link to={post.link} className="font-bold text-primary hover:underline">
                                                Read More &rarr;
                                            </Link>
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
                            <h2 className="text-3xl md:text-4xl font-bold font-sans text-primary">Ready to Apply These Insights?</h2>
                            <p className="mt-4 max-w-2xl mx-auto text-lg font-serif text-muted-foreground">
                                Knowledge is power, but action is where results happen. Let's build a plan that puts these concepts to work for you.
                            </p>
                            <div className="mt-8">
                                <Link to="/contact" className="bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-ring font-bold rounded-md px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
                                    Get Your Personalized Plan
                                </Link>
                            </div>
                        </div>
                    </ScrollFadeIn>
                </div>
            </section>
        </motion.div>
    );
}
