import React from 'react';
import { motion } from 'framer-motion';
import { Bike, Dumbbell, ClipboardList, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollFadeIn from '../components/ScrollFadeIn';
import AnimatedFeatureCard from '../components/AnimatedFeatureCard';
import MountainDivider from '../components/MountainDivider';

export default function HomePage() {
    const features = [
        { icon: <Bike className="w-8 h-8" />, title: "Training for Sports", description: "Sport-specific strength, conditioning, and endurance to help you reach the highest level of competition." },
        { icon: <Dumbbell className="w-8 h-8" />, title: "General strength and conditioning", description: "Holistic performance training tailored to your goals." },
        { icon: <ClipboardList className="w-8 h-8" />, title: "Online Coaching", description: "Remote programs and personalized guidance, meeting you right where you’re at." },
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
            <section className="relative bg-background pt-16 md:pt-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Desktop Hero */}
                    <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
                        <ScrollFadeIn immediate className="text-center md:text-left">
                            <h1 className="text-4xl md:text-6xl font-bold font-sans tracking-tight text-foreground">
                                Unlock <span className="text-primary">Peak Performance</span>
                            </h1>
                            <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg md:text-xl font-serif text-muted-foreground">
                                Personalized training plans to teach you all the secrets of pro athletes and leave nothing on the table.
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
                        <ScrollFadeIn immediate className="w-full h-96">
                            <img src="/mtb-training-rock-trail.JPG" alt="Mountain biker on a rock trail" className="object-cover w-full h-full rounded-lg shadow-lg" />
                        </ScrollFadeIn>
                    </div>
                    {/* Mobile Hero */}
                    <div className="md:hidden text-center">
                        <h1 className="text-4xl font-bold font-sans tracking-tight text-foreground">
                            Unlock <span className="text-primary">Peak Performance</span>
                        </h1>
                        <div className="mt-8 w-full h-96">
                             <img src="/mtb-training-rock-trail.JPG" alt="Mountain biker on a rock trail" className="object-cover w-full h-full rounded-lg shadow-lg" />
                        </div>
                        <div className="mt-8">
                            <p className="max-w-xl mx-auto text-lg font-serif text-muted-foreground">
                                Personalized training plans to teach you all the secrets of pro athletes and leave nothing on the table.
                            </p>
                            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact" className="bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-ring font-bold rounded-md px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 text-center">
                                    Start Training
                                </Link>
                                <Link to="/#services" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 focus:outline-none focus:ring-4 focus:ring-ring font-bold rounded-md px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 text-center">
                                    See Programs
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <MountainDivider />

            {/* 2. About Section */}
            <section className="bg-muted py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Desktop About */}
                    <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
                        <div className="grid grid-cols-1 gap-4">
                            <img src="/about-me.jpg" alt="About me image 1" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                            <div className="grid grid-cols-2 gap-4">
                                <img src="/about-me-2.jpg" alt="About me image 2" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                                <img src="/about-me-3.JPG" alt="About me image 3" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                            </div>
                        </div>
                        <ScrollFadeIn className="text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold font-sans text-primary">About Me — James Povolny</h2>
                            <p className="mt-4 text-lg font-serif text-muted-foreground">
                                I started Horsepower Development to give people the guidance I wish I had when I was a kid, wondering how to reach my goals of becoming a professional motocross racer. I’ve been racing dirt bikes since I was 8 years old, but when I graduated high school, I was far from where I needed to be to make my dreams come true. Desperate to know exactly what I was missing, I decided to put my racing boots aside to study exercise science at Liberty University. My studies answered every question I’ve ever had as an athlete, AND MORE. Along with my degree at Liberty, I was certified as a strength and conditioning specialist and raced on the cycling team at the collegiate level. This experience took my knowledge for training myself and others to levels I never imagined. After graduating, I’ve committed to chasing my dreams of becoming a professional athlete as well as helping others reach their fitness goals.
                            </p>
                            <div className="mt-6 flex flex-col items-center md:items-start gap-2">
                                <a href="https://www.instagram.com/horsepowerdevelopment/" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg font-serif text-muted-foreground hover:text-primary transition-colors">
                                    <Instagram className="w-6 h-6 mr-2" />
                                    <span>@horsepowerdevelopment</span>
                                </a>
                                <a href="https://www.instagram.com/jamespvlny/" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg font-serif text-muted-foreground hover:text-primary transition-colors">
                                    <Instagram className="w-6 h-6 mr-2" />
                                    <span>@jamespvlny</span>
                                </a>
                            </div>
                        </ScrollFadeIn>
                    </div>
                    {/* Mobile About */}
                    <div className="md:hidden text-center">
                        <h2 className="text-3xl font-bold font-sans text-primary">About Me — James Povolny</h2>
                        <div className="grid grid-cols-1 gap-4 mt-8">
                            <img src="/about-me.jpg" alt="About me image 1" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                            <div className="grid grid-cols-2 gap-4">
                                <img src="/about-me-2.jpg" alt="About me image 2" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                                <img src="/about-me-3.JPG" alt="About me image 3" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                            </div>
                        </div>
                        <div className="mt-8">
                            <p className="text-lg font-serif text-muted-foreground">
                                I started Horsepower Development to give people the guidance I wish I had when I was a kid, wondering how to reach my goals of becoming a professional motocross racer. I’ve been racing dirt bikes since I was 8 years old, but when I graduated high school, I was far from where I needed to be to make my dreams come true. Desperate to know exactly what I was missing, I decided to put my racing boots aside to study exercise science at Liberty University. My studies answered every question I’ve ever had as an athlete, AND MORE. Along with my degree at Liberty, I was certified as a strength and conditioning specialist and raced on the cycling team at the collegiate level. This experience took my knowledge for training myself and others to levels I never imagined. After graduating, I’ve committed to chasing my dreams of becoming a professional athlete as well as helping others reach their fitness goals.
                            </p>
                            <div className="mt-6 flex flex-col items-center gap-2">
                                <a href="https://www.instagram.com/horsepowerdevelopment/" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg font-serif text-muted-foreground hover:text-primary transition-colors">
                                    <Instagram className="w-6 h-6 mr-2" />
                                    <span>@horsepowerdevelopment</span>
                                </a>
                                <a href="https://www.instagram.com/jamespvlny/" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg font-serif text-muted-foreground hover:text-primary transition-colors">
                                    <Instagram className="w-6 h-6 mr-2" />
                                    <span>@jamespvlny</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* 3. Services Section */}
            <section id="services" className="bg-background py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     {/* Desktop Services */}
                    <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
                        <ScrollFadeIn className="text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold font-sans text-primary">Programs</h2>
                            <p className="mt-4 text-lg font-serif text-muted-foreground">We offer a range of services to help you achieve your fitness goals. Whether you are a professional athlete or a weekend warrior, we have a program for you.</p>
                        </ScrollFadeIn>
                        <ScrollFadeIn>
                            <img
                                src="/youth-mountain-bike-team.jpg"
                                alt="A group of seven young mountain bikers in matching red and black jerseys and helmets stand in a line with their bikes, posing for a photo outdoors. They are on a dirt and grass area with trees in the background."
                                className="w-full h-auto object-cover rounded-lg shadow-lg"
                            />
                        </ScrollFadeIn>
                    </div>
                    {/* Mobile Services */}
                    <div className="md:hidden text-center">
                        <h2 className="text-3xl font-bold font-sans text-primary">Programs</h2>
                        <div className="mt-8">
                            <img
                                src="/youth-mountain-bike-team.jpg"
                                alt="A group of seven young mountain bikers in matching red and black jerseys and helmets stand in a line with their bikes, posing for a photo outdoors. They are on a dirt and grass area with trees in the background."
                                className="w-full h-auto object-cover rounded-lg shadow-lg"
                            />
                        </div>
                        <p className="mt-8 text-lg font-serif text-muted-foreground">We offer a range of services to help you achieve your fitness goals. Whether you are a professional athlete or a weekend warrior, we have a program for you.</p>
                    </div>

                    <motion.div
                        className="mt-16 grid md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {features.map((feature, i) => (
                            <AnimatedFeatureCard key={i} feature={feature} />
                        ))}
                    </motion.div>
                     <div className="mt-16 text-center">
                        <Link to="/contact" className="bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-ring font-bold rounded-md px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
                            Book a Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. Results / Testimonials Section */}
            <section className="bg-muted py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <ScrollFadeIn className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold font-sans text-primary">Horsepower Athletes</h2>
                     </ScrollFadeIn>
                     <div className="mt-12 grid md:grid-cols-3 gap-4">
                        <img src="/testimonial-image-1.jpg" alt="Two young male cyclists in matching red and black Hammerdown HP jerseys and full gear, standing with their mountain bikes on a grassy field." className="object-cover w-full h-full rounded-lg shadow-lg" />
                        <img src="/testimonial-image-2.jpg" alt="Two male cyclists in matching white and red Liberty team jerseys, holding red Hammerdown HP water bottles and standing in front of a bus." className="object-cover w-full h-full rounded-lg shadow-lg" />
                        <img src="/testimonial-image-3.jpg" alt="A group of five young cyclists posing under a red Fueling Station tent at a grassy, outdoor bike event." className="object-cover w-full h-full rounded-lg shadow-lg" />
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
