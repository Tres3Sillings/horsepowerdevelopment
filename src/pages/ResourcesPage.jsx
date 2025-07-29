import React from 'react';
import { motion } from 'framer-motion';
import { Book, Link, Zap, Code, Box } from 'lucide-react';

const ResourceCard = ({ icon, title, children }) => (
    <div className="bg-card p-6 rounded-lg border border-border">
        <div className="flex items-center mb-4">
            <div className="p-2 bg-secondary rounded-md mr-4">{icon}</div>
            <h3 className="text-xl font-bold font-sans text-primary">{title}</h3>
        </div>
        <div className="font-serif text-muted-foreground space-y-3">{children}</div>
    </div>
);

const ResourceLink = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center text-foreground hover:text-primary transition-colors group">
        <Link className="h-4 w-4 mr-2 text-muted-foreground group-hover:text-primary" />
        <span>{children}</span>
    </a>
);

export default function ResourcesPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold font-sans text-primary mb-2 text-center">Developer Resources</h1>
                <p className="text-muted-foreground text-center mb-12">Your go-to guide for our tech stack, best practices, and useful tools.</p>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* React & Boilerplate */}
                    <ResourceCard icon={<Code className="h-6 w-6 text-accent" />} title="React & Boilerplate">
                        <p>Our projects are built with React and Vite. This boilerplate includes theme switching, custom hooks, and a multi-page structure.</p>
                        <h4 className="font-bold text-foreground pt-2">Key Resources:</h4>
                        <ResourceLink href="https://react.dev/">Official React Docs</ResourceLink>
                        <ResourceLink href="https://reactbits.dev/">React Bits - Design Patterns</ResourceLink>
                        <ResourceLink href="https://vitejs.dev/guide/">Vite Official Guide</ResourceLink>
                    </ResourceCard>

                    {/* Animation */}
                    <ResourceCard icon={<Zap className="h-6 w-6 text-accent" />} title="Animation Best Practices">
                        <p>We use Framer Motion for animations. Use animations to provide feedback, guide user attention, and enhance the user experience—not to distract.</p>
                        <h4 className="font-bold text-foreground pt-2">When to Use:</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Page transitions (fade in/out).</li>
                            <li>Modal pop-ups (scale/fade in).</li>
                            <li>Button clicks (scale down on press).</li>
                            <li>Revealing content on scroll (slide/fade in).</li>
                        </ul>
                        <h4 className="font-bold text-foreground pt-2">Key Resources:</h4>
                        <ResourceLink href="https://www.framer.com/motion/">Framer Motion Docs</ResourceLink>
                    </ResourceCard>

                    {/* 3D Assets with Spline */}
                    <ResourceCard icon={<Box className="h-6 w-6 text-accent" />} title="3D Assets with Spline">
                        <p>Spline is our preferred tool for creating and embedding 3D web experiences. It's powerful and integrates easily with React.</p>
                        <h4 className="font-bold text-foreground pt-2">Best Practices:</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Keep scenes optimized for web (low polygon count).</li>
                            <li>Use for hero sections, product showcases, or interactive elements.</li>
                            <li>Avoid overuse; one impactful 3D scene is better than many slow ones.</li>
                        </ul>
                        <h4 className="font-bold text-foreground pt-2">Key Resources:</h4>
                        <ResourceLink href="https://spline.design/">Spline Website</ResourceLink>
                        <ResourceLink href="https://github.com/splinetool/react-spline">React Spline Library</ResourceLink>
                    </ResourceCard>

                    {/* General Tools & Design */}
                    <ResourceCard icon={<Book className="h-6 w-6 text-accent" />} title="General Tools & Design">
                        <p>A collection of other essential tools we use for design, icons, and fonts.</p>
                        <h4 className="font-bold text-foreground pt-2">Key Resources:</h4>
                        <ResourceLink href="https://lucide.dev/icons/">Lucide Icons (Our icon set)</ResourceLink>
                        <ResourceLink href="https://fonts.google.com/">Google Fonts</ResourceLink>
                        <ResourceLink href="https://www.figma.com/">Figma (For UI/UX Design)</ResourceLink>
                        <ResourceLink href="https://web3forms.com/">Web3Forms (For contact forms)</ResourceLink>
                    </ResourceCard>
                </div>
            </div>
        </motion.div>
    );
}