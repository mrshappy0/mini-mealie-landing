import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const SubscribeModal = () => {
    const [visible, setVisible] = useState(true); // show immediately on mount

    useEffect(() => {
        const subscribeEl = document.getElementById('subscribe');
        if (!subscribeEl) return;

        const handleScroll = () => {
            const rect = subscribeEl.getBoundingClientRect();
            const isSubscribeVisible = rect.top < window.innerHeight && rect.bottom > 0;

            // hide modal if subscribe section is visible
            setVisible(!isSubscribeVisible);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // check on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-4 right-[4.5rem] z-50"
                >
                    <button
                        onClick={() => {
                            document
                                .getElementById('subscribe')
                                ?.scrollIntoView({ behavior: 'smooth' });
                            setVisible(false);
                        }}
                        className="inline-flex items-center justify-center h-10 px-4 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition-colors"
                    >
                        Subscribe for Updates
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
