import './App.css';

import { useEffect, useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Navbar } from './components/Navbar';
import { Newsletter } from './components/Newsletter';
import { ScrollToTop } from './components/ScrollToTop';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { useTheme } from './components/theme-provider';
import { loadAnalytics } from './lib/analytics';
import { MINI_MEALIE_CLOUD_BASE_URL } from './lib/api';

function App() {
    const { theme } = useTheme();
    const hasConfirmed = useRef(false);
    const base =
        import.meta.env.MODE === 'production'
            ? MINI_MEALIE_CLOUD_BASE_URL.Production
            : MINI_MEALIE_CLOUD_BASE_URL.Staging;

    const effectiveTheme =
        theme === 'system'
            ? window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
            : theme;

    useEffect(() => {
        loadAnalytics();

        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');

        if (token && !hasConfirmed.current) {
            hasConfirmed.current = true;

            fetch(`https://${base}.execute-api.us-west-2.amazonaws.com/confirm?token=${token}`)
                .then(async (res) => {
                    if (!res.ok) throw new Error(await res.text());
                    return res.json();
                })
                .then(() => {
                    toast.success('Successfully confirmed your subscription!');
                })
                .catch(() => {
                    toast.error('Failed to confirm your subscription.');
                })
                .finally(() => {
                    const url = new URL(window.location.href);
                    url.searchParams.delete('token');
                    window.history.replaceState({}, document.title, url.pathname);
                });
        }
    }, []);
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <HowItWorks />
            <Features />
            <Testimonials />
            <Team />
            <Newsletter />
            <FAQ />
            <Footer />
            <ScrollToTop />
            <ToastContainer theme={effectiveTheme} />
        </>
    );
}

export default App;
