import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// You would pass the themes array in a real app, but for simplicity we redefine it here
const themes = [
    { name: 'The Foundry', class: 'theme-foundry' },
    { name: 'Ridge Line', class: 'theme-ridge-line' },
    { name: 'Fable Fare', class: 'theme-fable-fare' },
];

export default function Navbar({ currentPage, setCurrentPage, currentThemeName, cycleTheme }) {
    const [isOpen, setIsOpen] = useState(false);
    // Add "Resources" to the navigation links
    const navLinks = ['Home', 'About', 'Services', 'Resources', 'Contact'];

    const NavLink = ({ page }) => (
        <button
            onClick={() => {
                setCurrentPage(page);
                setIsOpen(false);
            }}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                currentPage === page
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
            }`}
        >
            {page}
        </button>
    );

    return (
        <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <button onClick={() => setCurrentPage('Home')} className="font-bold text-xl tracking-tighter text-foreground">
                            Your<span className="text-primary">Logo</span>
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-4">
                        {navLinks.map(page => <NavLink key={page} page={page} />)}
                        <button onClick={cycleTheme} className="ml-4 bg-secondary text-secondary-foreground hover:bg-border font-semibold rounded-md px-4 py-2 text-sm transition-colors duration-300">
                            Theme: {currentThemeName}
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-muted-foreground hover:text-primary">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-border"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map(page => <NavLink key={page} page={page} />)}
                            <button onClick={cycleTheme} className="w-full text-left mt-2 bg-secondary text-secondary-foreground hover:bg-border font-semibold rounded-md px-3 py-2 text-sm transition-colors duration-300">
                                Theme: {currentThemeName}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}