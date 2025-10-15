import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import ScrollFadeIn from '../components/ScrollFadeIn';

export default function ContactPage() {
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
                            Get in Touch
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl font-serif text-muted-foreground">
                            Ready to start your journey or have a question for us? Fill out the form below or use the contact information to reach out.
                        </p>
                    </ScrollFadeIn>
                </div>
            </section>

            {/* 2. Contact Form & Info Section */}
            <section className="bg-background py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        {/* Contact Form */}
                        <ScrollFadeIn>
                            <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
                                <h2 className="text-2xl font-bold font-sans text-primary mb-6">Book a Call or Send a Message</h2>
                                <form>
                                    <div className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
                                            <input type="text" id="name" name="name" className="block w-full px-4 py-3 bg-muted border border-border rounded-md focus:ring-primary focus:border-primary" />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                                            <input type="email" id="email" name="email" className="block w-full px-4 py-3 bg-muted border border-border rounded-md focus:ring-primary focus:border-primary" />
                                        </div>
                                        <div>
                                            <label htmlFor="goal" className="block text-sm font-medium text-muted-foreground mb-2">Primary Goal</label>
                                            <select id="goal" name="goal" className="block w-full px-4 py-3 bg-muted border border-border rounded-md focus:ring-primary focus:border-primary">
                                                <option>Select a goal...</option>
                                                <option>MX & MTB Training</option>
                                                <option>Strength & Conditioning</option>
                                                <option>Online Coaching</option>
                                                <option>General Inquiry</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                                            <textarea id="message" name="message" rows="4" className="block w-full px-4 py-3 bg-muted border border-border rounded-md focus:ring-primary focus:border-primary"></textarea>
                                        </div>
                                        <div>
                                            <button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-md px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </ScrollFadeIn>

                        {/* Contact Info */}
                        <ScrollFadeIn>
                            <div className="space-y-8">
                                <h2 className="text-2xl font-bold font-sans text-primary">Contact Information</h2>
                                <div className="space-y-4 font-serif">
                                    <div className="flex items-center gap-4">
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Mail className="w-6 h-6 text-primary" />
                                        <a href="mailto:james@horsepowerdevelopment.com" className="text-lg text-muted-foreground hover:text-primary">james@horsepowerdevelopment.com</a>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <MapPin className="w-6 h-6 text-primary" />
                                        <p className="text-lg text-muted-foreground">Apple Valley, MN</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Instagram className="w-6 h-6 text-primary" />
                                        <a href="https://www.instagram.com/horsepowerdevelopment/" target="_blank" rel="noopener noreferrer" className="text-lg text-muted-foreground hover:text-primary">@horsepowerdevelopment</a>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <h3 className="text-xl font-bold font-sans text-primary mb-4">Business Hours</h3>
                                    <p className="text-lg font-serif text-muted-foreground">Monday - Friday: 9am - 6pm</p>
                                    <p className="text-lg font-serif text-muted-foreground">Saturday: 10am - 4pm</p>
                                    <p className="text-lg font-serif text-muted-foreground">Sunday: Closed</p>
                                </div>
                            </div>
                        </ScrollFadeIn>
                    </div>
                </div>
            </section>

            {/* 3. Instagram Feed Section */}
            <section className="bg-muted py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollFadeIn className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold font-sans text-primary">Follow Our Journey</h2>
                        <div className="mt-8 bg-card border border-border rounded-lg p-8 h-96 flex items-center justify-center">
                            <p className="text-muted-foreground font-serif text-lg">Instagram Feed Embed Coming Soon</p>
                        </div>
                    </ScrollFadeIn>
                </div>
            </section>
        </motion.div>
    );
}
