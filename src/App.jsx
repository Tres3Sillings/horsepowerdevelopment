import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricePage';
import FormPage from './pages/FormPage';

// UI
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// ---- LAYOUTS ----
function SiteLayout() {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

// ---- APP ----
export default function App() {
    return (
        <Router>
            <Routes>
                {/* Normal site routes (with Navbar + Footer) */}
                <Route element={<SiteLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/get-started" element={<FormPage />} />
                </Route>
            </Routes>
        </Router>
    );
}
