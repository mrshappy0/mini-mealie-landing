import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpToLine } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from './ui/button';

export const ScrollToTop = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const heroEl = document.getElementById('hero');
        if (!heroEl) return;

        const handleScroll = () => {
            const rect = heroEl.getBoundingClientRect();
            const heroOutOfView = rect.bottom < 0;

            setShow(heroOutOfView);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // check on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const goToTop = () => {
        window.scroll({ top: 0, left: 0 });

        const url = new URL(window.location.href);
        url.hash = '';
        window.history.replaceState({}, document.title, url.toString());
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    key="scroll-to-top"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.9 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-4 right-4 z-50"
                >
                    <Button onClick={goToTop} className="shadow-md" size="icon">
                        <ArrowUpToLine className="h-4 w-4" />
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
