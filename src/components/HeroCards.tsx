import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Check, Linkedin } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button, buttonVariants } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { fetchFromMMCApi } from '@/lib/api';
import { mockTestimonials } from '@/lib/constants';
import { Review, TestimonialProps } from '@/lib/types';
import { convertReviewsToTestimonials, getInitials } from '@/lib/utils';

import mountainMe from '../assets/mountain-me-GIMPed.jpg';
import { LightBulbIcon } from './Icons';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';

export const HeroCards = () => {
    const [testimonial, setTestimonial] = useState<TestimonialProps>();

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const data = await fetchFromMMCApi<{
                    reviews: Review[];
                    scrapedAt: string;
                    numberOfUsers: string;
                }>('/stats');

                const fetchedTestimonials = convertReviewsToTestimonials(data.reviews);

                const sourceData =
                    fetchedTestimonials.length > 0 ? fetchedTestimonials : mockTestimonials;

                const randomIndex = Math.floor(Math.random() * sourceData.length);
                setTestimonial(sourceData[randomIndex]);
            } catch (err) {
                console.error('Failed to fetch stats:', err);
            }
        };

        fetchReviews();
    }, []);

    return (
        <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
            {/* Testimonial */}
            {testimonial && (
                <a href="#testimonials">
                    <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 cursor-pointer">
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                            <Avatar>
                                <AvatarImage alt="" src={testimonial?.image ?? ''} />
                                <AvatarFallback>
                                    {getInitials(testimonial?.name ?? '')}
                                </AvatarFallback>
                            </Avatar>

                            <div className="flex flex-col">
                                <CardTitle className="text-lg">{testimonial?.name}</CardTitle>
                                <CardDescription>{testimonial?.userName}</CardDescription>
                            </div>
                        </CardHeader>

                        <CardContent>
                            {testimonial.comment.length > 40
                                ? testimonial.comment.substring(0, 40) + '...'
                                : testimonial.comment}
                        </CardContent>
                    </Card>
                </a>
            )}

            {/* Team */}
            <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="mt-8 flex justify-center items-center pb-2">
                    <img
                        src={mountainMe}
                        alt="user avatar"
                        className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                    />
                    <CardTitle className="text-center">Adam Shappy</CardTitle>
                    <CardDescription className="font-normal text-primary">
                        Developer
                    </CardDescription>
                </CardHeader>

                <CardContent className="text-center pb-2">
                    <p>
                        Empowering self-hosted solutions with open-source tools, bridging practical
                        development with a passion for continuous learning.
                    </p>
                </CardContent>

                <CardFooter>
                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="https://github.com/mrshappy0"
                            target="_blank"
                            className={buttonVariants({
                                variant: 'ghost',
                                size: 'sm',
                            })}
                        >
                            <span className="sr-only">Github icon</span>
                            <GitHubLogoIcon className="w-5 h-5" />
                        </a>

                        <a
                            rel="noreferrer noopener"
                            href="https://www.linkedin.com/in/adam-shappy/"
                            target="_blank"
                            className={buttonVariants({
                                variant: 'ghost',
                                size: 'sm',
                            })}
                        >
                            <span className="sr-only">Linkedin icon</span>
                            <Linkedin size="20" />
                        </a>
                    </div>
                </CardFooter>
            </Card>

            <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader>
                    <CardTitle className="flex item-center justify-between">
                        Free
                        <Badge variant="secondary" className="text-sm text-primary">
                            Open Source
                        </Badge>
                    </CardTitle>
                    <div>
                        <span className="text-3xl font-bold">$0</span>
                        <span className="text-muted-foreground"> /month</span>
                    </div>

                    <CardDescription>
                        Built for recipe lovers and open-source fans — no subscriptions, no upsells.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <Button className="w-full">
                        <a
                            href="https://chromewebstore.google.com/detail/mini-mealie/lchfnbjpjoeejalacnpjnafenacmdocc"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Install Extension
                        </a>
                    </Button>
                </CardContent>

                <hr className="w-4/5 m-auto mb-4" />

                <CardFooter className="flex">
                    <div className="space-y-4">
                        {[
                            'Local or hosted Mealie',
                            'Smart recipe detection',
                            'Paywall bypass built-in',
                        ].map((benefit: string) => (
                            <span key={benefit} className="flex">
                                <Check className="text-orange-500" />{' '}
                                <h3 className="ml-2">{benefit}</h3>
                            </span>
                        ))}
                    </div>
                </CardFooter>
            </Card>

            {/* Service */}
            <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                    <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                        <LightBulbIcon />
                    </div>
                    <div>
                        <CardTitle>Actively Growing</CardTitle>
                        <CardDescription className="text-md mt-2">
                            Built in collaboration with the community—your feedback drives every
                            improvement.
                        </CardDescription>
                    </div>
                </CardHeader>
            </Card>
        </div>
    );
};
