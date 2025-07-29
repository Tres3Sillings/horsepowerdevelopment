import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, Loader } from 'lucide-react';

// IMPORTANT: Replace with your actual Access Key from web3forms.com
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', or null

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmissionStatus(null);

        const formData = new FormData(event.target);
        formData.append("access_key", WEB3FORMS_ACCESS_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setSubmissionStatus('success');
                event.target.reset();
            } else {
                console.error("Error from Web3Forms:", data);
                setSubmissionStatus('error');
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setSubmissionStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
            <div className="max-w-xl mx-auto">
                <h1 className="text-4xl font-bold font-sans text-primary mb-2 text-center">Contact Us</h1>
                <p className="text-muted-foreground text-center mb-8">We'd love to hear from you. Drop us a line below.</p>

                <div className="bg-card p-8 rounded-lg border border-border shadow-lg">
                    {submissionStatus === 'success' ? (
                        <div className="text-center py-10">
                            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                            <h2 className="text-2xl font-bold text-primary mb-2">Message Sent!</h2>
                            <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">Full Name</label>
                                <input type="text" id="name" name="name" required className="mt-1 block w-full bg-input border border-border rounded-md p-3 text-foreground focus:ring-2 focus:ring-ring focus:outline-none" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">Email</label>
                                <input type="email" id="email" name="email" required className="mt-1 block w-full bg-input border border-border rounded-md p-3 text-foreground focus:ring-2 focus:ring-ring focus:outline-none" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">Message</label>
                                <textarea id="message" name="message" rows="4" required className="mt-1 block w-full bg-input border border-border rounded-md p-3 text-foreground focus:ring-2 focus:ring-ring focus:outline-none"></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex items-center justify-center bg-primary text-primary-foreground hover:bg-accent font-bold rounded-md px-8 py-3 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? <Loader className="animate-spin h-5 w-5 mr-3" /> : null}
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                            {submissionStatus === 'error' && (
                                <div className="flex items-center text-sm text-destructive mt-4">
                                    <AlertTriangle className="h-4 w-4 mr-2" />
                                    <p>Something went wrong. Please try again later.</p>
                                </div>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </motion.div>
    );
}