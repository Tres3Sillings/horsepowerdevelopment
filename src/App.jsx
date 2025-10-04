import React, { useState } from 'react';

// Import our new components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import our new pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

export default function App() {
    // --- STATE MANAGEMENT ---
    // Simple state-based routing
    const [currentPage, setCurrentPage] = useState('Home');

    // --- PAGE RENDERING LOGIC ---
    const renderPage = () => {
        switch (currentPage) {
            case 'Contact':
                return <ContactPage />;
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
            />
            <main className="flex-grow">
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
}