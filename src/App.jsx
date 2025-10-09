import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage';
import ResultsPage from './pages/ResultsPage';
import BlogPage from './pages/BlogPage';
import PricingPage from './pages/PricePage';
import ContactPage from './pages/ContactPage';

// UI
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop.jsx";

// ---- LAYOUTS ----
function SiteLayout() {
    const location = useLocation();
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <ScrollToTop />
            <Navbar />
            <main key={location.pathname} className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

function AppRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route element={<SiteLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/programs" element={<ProgramsPage />} />
                    <Route path="/results" element={<ResultsPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
}

// ---- APP ----
export default function App() {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
}
