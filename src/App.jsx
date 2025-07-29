import React, { useState, useEffect } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';

// Import our new components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import our new pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ResourcesPage from "./pages/ResourcesPage.jsx";

// Define our available themes
export const themes = [
    { name: 'The Foundry', class: 'theme-foundry' },
    { name: 'Ridge Line', class: 'theme-ridge-line' },
    { name: 'Fable Fare', class: 'theme-fable-fare' },
];

export default function App() {
    // --- STATE MANAGEMENT ---
    // Simple state-based routing
    const [currentPage, setCurrentPage] = useState('Home');
    // Persistent theme selection from our hook
    const [themeIndex, setThemeIndex] = useLocalStorage('boilerplate-theme-index', 0);

    // --- THEME LOGIC ---
    const cycleTheme = () => {
        setThemeIndex(prevIndex => (prevIndex + 1) % themes.length);
    };

    useEffect(() => {
        const root = document.documentElement;
        const newTheme = themes[themeIndex];
        const themeClassesToRemove = themes.map(t => t.class).filter(c => c !== 'theme-foundry');
        root.classList.remove(...themeClassesToRemove);
        if (newTheme.class !== 'theme-foundry') {
            root.classList.add(newTheme.class);
        }
    }, [themeIndex]);

    // --- PAGE RENDERING LOGIC ---
    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <AboutPage />;
            case 'Services':
                return <ServicesPage />;
            case 'Contact':
                return <ContactPage />;
            case 'Resources':
                return <ResourcesPage />;
            case 'Home':
            default:
                return <HomePage />;

        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                currentThemeName={themes[themeIndex].name}
                cycleTheme={cycleTheme}
            />
            <main className="flex-grow">
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
}