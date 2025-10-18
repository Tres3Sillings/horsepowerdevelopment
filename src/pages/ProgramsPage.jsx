import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollFadeIn from '../components/ScrollFadeIn';

export default function ProgramsPage() {
    const programs = [
        {
            title: "Training for Sports",
            description: "Sport-specific strength, conditioning, and endurance to help you reach the highest level of competition.",
            details: [
                "Personalized assessment and goal setting",
                "Sport-specific drills and exercises",
                "Performance analysis and feedback",
                "Competitive strategy and annual planning",
                "Sponsor discounts"
            ]
        },
        {
            title: "General strength and conditioning",
            description: "Holistic performance training tailored to your goals.",
            details: [
                "Full-body functional strength and conditioning",
                "Personalized assessment and goal setting",
                "Mobility and endurance building",
                "Nutrition planning and recommendations",
                "Sponsor Discounts"
            ]
        },
        {
            title: "Online Coaching",
            description: "Remote programs and personalized guidance, meeting you right where you’re at.",
            details: [
                "Personalized weekly training plan",
                "Video analysis and feedback",
                "Weekly check-ins and progress tracking",
                "Direct communication with a coach",
                "Sponsor Discounts"
            ]
        }
    ];

    const images = [
        "/Programs1.png",
        "/Programs2.png",
        "/Programs3.png"
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
                            Our Programs
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl font-serif text-muted-foreground">
                            Choose from a range of specialized training programs designed to help you achieve your riding and fitness goals. Whether you're a competitive racer or a weekend warrior, we have a plan for you.
                        </p>
                    </ScrollFadeIn>
                </div>
            </section>

            {/* 2. Programs Section */}
            <section className="bg-background py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {programs.map((program, index) => (
                            <ScrollFadeIn key={index}>
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    {/* Text Content */}
                                    <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                                        <h2 className="text-3xl font-bold font-sans text-primary text-center md:text-left">{program.title}</h2>
                                        
                                        {/* Image for Mobile */}
                                        <div className="md:hidden my-6">
                                            <img src={images[index]} alt={program.title} className="object-cover w-full h-full rounded-lg shadow-lg" />
                                        </div>

                                        <p className="mt-4 text-lg font-serif text-muted-foreground text-center md:text-left">{program.description}</p>
                                        <ul className="mt-6 space-y-2 font-serif text-muted-foreground">
                                            {program.details.map((detail, i) => (
                                                <li key={i} className="flex items-center gap-3">
                                                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    <span>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                                            {program.title === 'Online Coaching' ? (
                                                <Link to="/intro-call" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-md px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
                                                    Free intro call
                                                </Link>
                                            ) : (
                                                <>
                                                    <Link to="/intro-call" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-md px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
                                                        Free intro call
                                                    </Link>
                                                    <Link to="/schedule-session" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold rounded-md px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
                                                        Schedule a session
                                                    </Link>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    {/* Image for Desktop */}
                                    <div className={`hidden md:block ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                                        <img src={images[index]} alt={program.title} className="object-cover w-full h-full rounded-lg shadow-lg" />
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
                            <h2 className="text-3xl md:text-4xl font-bold font-sans text-primary">Not Sure Where to Start?</h2>
                            <p className="mt-4 max-w-2xl mx-auto text-lg font-serif text-muted-foreground">
                                Let's talk about your goals and find the perfect program for you. Book a free consultation with Coach James.
                            </p>
                            <div className="mt-8">
                                <Link to="/contact" className="bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-ring font-bold rounded-md px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
                                    Book a Free Consultation
                                </Link>
                            </div>
                        </div>
                    </ScrollFadeIn>
                </div>
            </section>
        </motion.div>
    );
}
