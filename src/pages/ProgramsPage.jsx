import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollFadeIn from '../components/ScrollFadeIn';
import { Bike, Dumbbell, ClipboardList } from 'lucide-react';

export default function ProgramsPage() {
    const programs = [
        {
            icon: <Bike className="w-16 h-16 text-secondary mx-auto lg:w-24 lg:h-24" />,
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
            icon: <Dumbbell className="w-16 h-16 text-secondary mx-auto lg:w-24 lg:h-24" />,
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
            icon: <ClipboardList className="w-16 h-16 text-secondary mx-auto lg:w-24 lg:h-24" />,
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

    const trainingFactors = [
        "Strength (weight training)",
        "Endurance",
        "Nutrition",
        "Sport-specific skills",
        "Mobility",
        "Recovery"
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
                            We use a holistic approach to training, prioritizing six primary training factors that contribute to peak performance:
                        </p>
                        <ul className="mt-6 max-w-3xl mx-auto text-lg md:text-xl font-serif text-muted-foreground list-none text-left grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                            {trainingFactors.map((factor, index) => (
                                <li key={index} className="flex items-center gap-3 my-1">
                                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span>{factor}</span>
                                </li>
                            ))}
                        </ul>
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
                                        
                                        {/* Icon for Mobile */}
                                        <div className="md:hidden my-6 text-center">
                                            {program.icon}
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
                                    </div>
                                    {/* Icon for Desktop */}
                                    <div className={`hidden md:flex justify-center items-center ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                                        {program.icon}
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
                            <h2 className="text-3xl md:text-4xl font-bold font-sans text-primary">Ready to Get Started?</h2>
                            <p className="mt-4 max-w-2xl mx-auto text-lg font-serif text-muted-foreground">
                                Fill out our quick form to get your personalized training plan started for free.
                            </p>
                            <div className="mt-8">
                                <Link to="/intro-call"
                                   className="bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-ring font-bold rounded-md px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 inline-block">
                                    Get started for free
                                </Link>
                            </div>
                        </div>
                    </ScrollFadeIn>
                </div>
            </section>
        </motion.div>
    );
}
