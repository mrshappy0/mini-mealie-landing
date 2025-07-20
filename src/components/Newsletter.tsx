import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

import { Button } from './ui/button';
import { Input } from './ui/input';

export const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!isValidEmail(email)) {
            return;
        }
        setStatus('loading');
        try {
            // TODO: use prod endpoint
            const res = await fetch(
                'https://edusqp95v5.execute-api.us-west-2.amazonaws.com/subscribe',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email }),
                },
            );

            if (!res.ok) throw new Error('Failed to subscribe');
            setStatus('success');
            toast.success('Check your email to confirm your subscription!');
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
            setStatus('error');
            toast.error('Subscription failed. Please try again.');
        }
    };

    return (
        <section id="newsletter">
            <hr className="w-11/12 mx-auto" />
            <div className="container py-24 sm:py-32">
                <h3 className="text-center text-4xl md:text-5xl font-bold">
                    Join Our Changelog{' '}
                    <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                        Newsletter
                    </span>
                </h3>
                <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
                    Infrequent updates on features and changes
                </p>
                <form
                    className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
                    onSubmit={handleSubmit}
                >
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-muted/50 dark:bg-muted/80 focus-visible:ring-orange-500"
                        aria-label="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button type="submit" disabled={!isValidEmail(email) || status === 'loading'}>
                        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                    </Button>
                </form>
            </div>

            <hr className="w-11/12 mx-auto" />
        </section>
    );
};
