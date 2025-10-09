import React from 'react';
import { motion } from 'framer-motion';
import { Bike, Dumbbell, ClipboardList, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollFadeIn from '../components/ScrollFadeIn';
import AnimatedFeatureCard from '../components/AnimatedFeatureCard';

export default function HomePage() {
    const features = [
        { icon: <Bike className="w-8 h-8" />, title: "MX & MTB Training", description: "Sport-specific strength, conditioning, and endurance to dominate the track or trail." },
        { icon: <Dumbbell className="w-8 h-8" />, title: "Strength & Conditioning", description: "Full-body performance training tailored to your goals." },
        { icon: <ClipboardList className="w-8 h-8" />, title: "Online Coaching", description: "Remote programs and personalized guidance, wherever you ride." },
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.4, // Time delay between each child animation
            },
        },
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-background text-foreground"
        >
            {/* 1. Hero Section */}
            <section className="relative bg-background py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <ScrollFadeIn immediate className="text-center md:text-left">
                            <h1 className="text-4xl md:text-6xl font-bold font-sans tracking-tight text-foreground">
                                Build Real Power. <span className="text-primary">Ride Longer.</span> Recover Faster.
                            </h1>
                            <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg md:text-xl font-serif text-muted-foreground">
                                MX & MTB-specific training built by a Certified Strength and Conditioning Specialist.
                            </p>
                            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <Link to="/contact" className="bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-ring font-bold rounded-md px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 text-center">
                                    Start Training
                                </Link>
                                <Link to="/#services" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 focus:outline-none focus:ring-4 focus:ring-ring font-bold rounded-md px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 text-center">
                                    See Programs
                                </Link>
                            </div>
                        </ScrollFadeIn>
                        <ScrollFadeIn immediate className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-96">
                            <img src="/mtb-training-rock-trail.JPG" alt="Mountain biker on a rock trail" className="col-span-2 row-span-2 object-cover w-full h-full rounded-lg shadow-lg" />
                        </ScrollFadeIn>
                    </div>
                </div>
            </section>

            {/* 2. Services Section */}
            <section id="services" className="bg-muted py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollFadeIn className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold font-sans text-primary">Train With The Best</h2>
                        <p className="mt-4 text-lg font-serif text-muted-foreground">We offer a range of services to help you achieve your fitness goals. Whether you are a professional athlete or a weekend warrior, we have a program for you.</p>
                    </ScrollFadeIn>
                    <motion.div
                        className="mt-12 grid md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {features.map((feature, i) => (
                            <AnimatedFeatureCard key={i} feature={feature} />
                        ))}
                    </motion.div>
                     <div className="mt-8 text-center">
                        <Link to="/contact" className="bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-ring font-bold rounded-md px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
                            Book a Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* 3. About Section */}
            <section className="bg-background py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                            <img src="/coach-james-povolny-portrait.JPG" alt="Coach James Povolny" className="object-cover w-full h-full rounded-lg shadow-lg" />

                        <ScrollFadeIn className="text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold font-sans text-primary">Meet Your Coach — James Povolny</h2>
                            <p className="mt-4 text-lg font-serif text-muted-foreground">
                                Certified Strength and Conditioning Specialist (CSCS) with years of experience with motocross and mountain bike athletes. Focus on functional strength, endurance, and injury prevention.
                            </p>
                            <p className="mt-4 text-lg font-serif font-bold text-foreground">
                                “You don’t ride better by chance — you ride better by training with purpose.”
                            </p>
                            <div className="mt-6 flex justify-center md:justify-start items-center gap-2">
                                <Instagram className="w-6 h-6 text-muted-foreground" />
                                <a href="https://www.instagram.com/horsepowerdevelopment/" target="_blank" rel="noopener noreferrer" className="text-lg font-serif text-muted-foreground hover:text-primary transition-colors">
                                    @horsepowerdevelopment
                                </a>
                            </div>
                        </ScrollFadeIn>
                    </div>
                </div>
            </section>


            {/* 4. Results / Testimonials Section */}
            <section className="bg-muted py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <ScrollFadeIn className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold font-sans text-primary">Athletes Who Built Their Horsepower</h2>
                     </ScrollFadeIn>
                     <div className="mt-12 grid md:grid-cols-3 gap-4">
                        <img src="/motocross-cornering-sand-track.JPG" alt="Motocross rider cornering" className="object-cover w-full h-full rounded-lg shadow-lg" />
                        <img src="/mtb-race-finish-line.JPG" alt="Mountain bike race finish line" className="object-cover w-full h-full rounded-lg shadow-lg" />
                        <img src="/motocross-jump-orange-bike.jpg" alt="Motocross jump" className="object-cover w-full h-full rounded-lg shadow-lg" />
                     </div>
                </div>
            </section>

            {/* 5. Contact Section */}
            <section className="bg-background py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollFadeIn className="relative text-center bg-card p-10 rounded-lg border border-border">
                        <div className="relative">
                            <h2 className="text-3xl md:text-4xl font-bold font-sans text-primary">Ready to Get Started?</h2>
                            <p className="mt-4 max-w-2xl mx-auto text-lg font-serif text-muted-foreground">
                                Take the next step and see how our solutions can help you achieve your goals.
                            </p>
                            <div className="mt-8">
                                <Link to="/contact" className="bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-ring font-bold rounded-md px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
                                    Book a Session
                                </Link>
                            </div>
                        </div>
                    </ScrollFadeIn>
                </div>
            </section>
        </motion.div>
    );
}
