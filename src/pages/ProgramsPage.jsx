import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollFadeIn from '../components/ScrollFadeIn';

export default function ProgramsPage() {
    const programs = [
        {
            title: "MX & MTB Training",
            description: "In-person, group, or private training sessions designed to improve your performance on the track or trail. We focus on building sport-specific strength, endurance, and skills.",
            details: [
                "Personalized assessment and goal setting",
                "On-bike and off-bike training drills",
                "Technique analysis and feedback",
                "Race strategy and mental preparation"
            ]
        },
        {
            title: "Strength & Conditioning",
            description: "A comprehensive strength and conditioning program tailored to your individual needs as a rider. Get stronger, prevent injuries, and boost your overall athletic performance.",
            details: [
                "Full-body functional strength workouts",
                "Customized cardio and endurance plans",
                "Mobility and flexibility routines",
                "Nutritional guidance for peak performance"
            ]
        },
        {
            title: "Online Coaching",
            description: "Get expert coaching and a personalized training plan from anywhere in the world. Our remote coaching program is perfect for self-motivated athletes who need guidance and accountability.",
            details: [
                "Customized weekly training schedule",
                "Video analysis and feedback",
                "Regular check-ins and progress tracking",
                "Direct communication with your coach"
            ]
        }
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
                                    <div className={index % 2 === 0 ? '' : 'md:order-2'}>
                                        <h2 className="text-3xl font-bold font-sans text-primary">{program.title}</h2>
                                        <p className="mt-4 text-lg font-serif text-muted-foreground">{program.description}</p>
                                        <ul className="mt-6 space-y-2 font-serif text-muted-foreground">
                                            {program.details.map((detail, i) => (
                                                <li key={i} className="flex items-center gap-3">
                                                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    <span>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="mt-8">
                                            <Link to="/contact" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-md px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
                                                Start Your Program
                                            </Link>
                                        </div>
                                    </div>
                                    <div className={index % 2 === 0 ? 'md:order-2' : ''}>
                                        {/* Placeholder for an image */}
                                        <div className="bg-muted rounded-lg shadow-lg w-full h-80 flex items-center justify-center">
                                            <p className="text-muted-foreground">Image coming soon</p>
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
