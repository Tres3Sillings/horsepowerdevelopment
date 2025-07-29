import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Star, Zap, BarChart, Users } from 'lucide-react';

// Use React.lazy for performance. This will only load the Spline component when it's needed.
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const SplineScene = () => (
    <Suspense fallback={<div className="w-full h-full bg-secondary rounded-lg flex items-center justify-center"><p className="font-mono text-muted-foreground">Loading 3D Scene...</p></div>}>
        <Spline scene="https://prod.spline.design/DdMaCI1zbsos6KA7/scene.splinecode" />
    </Suspense>
);

export default function HomePage() {
    const features = [
        { icon: <Zap size={24} />, title: "Feature One", description: "Describe the key benefit of your first amazing feature here." },
        { icon: <BarChart size={24} />, title: "Feature Two", description: "Explain how this second feature provides incredible value." },
        { icon: <Users size={24} />, title: "Feature Three", description: "Showcase the collaborative or community aspect of your service." },
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
                            Your Compelling Headline
                        </h1>
                        <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg md:text-xl font-serif text-muted-foreground">
                            This is your value proposition. Clearly explain the main benefit your service provides and who it's for in one or two sentences.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <button className="bg-primary text-primary-foreground hover:bg-accent focus:outline-none focus:ring-4 focus:ring-ring font-bold rounded-md px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
                                Primary Call to Action
                            </button>
                            <button className="bg-secondary text-secondary-foreground hover:bg-border font-bold rounded-md px-8 py-4 text-lg transition-colors duration-300">
                                Secondary Action
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-80 md:h-96">
                        <SplineScene />
                    </div>
                </div>
            </section>

            {/* 2. Social Proof Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center font-serif text-muted-foreground">Trusted by the world's best companies</p>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex justify-center">
                            <p className="font-mono text-muted-foreground text-2xl">LOGO</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Features Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-sans text-primary">Discover the Possibilities</h2>
                    <p className="mt-4 text-lg font-serif text-muted-foreground">Explain the core benefits of your product or service in this section. Focus on what the user will gain.</p>
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

            {/* 4. Testimonial Section */}
            <section className="bg-card border-y border-border py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex justify-center text-accent mb-4">
                            {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6" fill="currentColor" />)}
                        </div>
                        <blockquote className="text-xl md:text-2xl font-serif text-foreground">
                            "This service completely transformed our business. The results were beyond our wildest expectations. I cannot recommend them enough!"
                        </blockquote>
                        <p className="mt-6 font-semibold text-muted-foreground">- Jane Doe, CEO of A Happy Client</p>
                    </div>
                </div>
            </section>

            {/* 5. Final CTA Section */}
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