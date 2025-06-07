import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { reviews as scrapedReviews } from "../reviewData";
import { convertReviewsToTestimonials, getInitials } from "@/lib/utils";
import { mockTestimonials } from "@/lib/constants";
import { TestimonialProps } from "@/lib/types";

export const Testimonials = () => {
    const [testimonials, setTestimonials] =
        useState<TestimonialProps[]>(mockTestimonials);

    useEffect(() => {
        try {
            const fetchedTestimonials =
                convertReviewsToTestimonials(scrapedReviews);
            if (fetchedTestimonials.length > 0) {
                setTestimonials(fetchedTestimonials);
            }
        } catch (error) {
            console.error("Error processing reviews:", error);
        }
    }, []);

    return (
        <section id="testimonials" className="container py-24 sm:py-32">
            <h2 className="text-3xl md:text-4xl font-bold">
                Discover Why
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    {" "}
                    People Love{" "}
                </span>
                Mini Mealie
            </h2>

            <p className="text-xl text-muted-foreground pt-4 pb-8">
                Real reviews from our users, showcasing the power and utility of
                Mini Mealie.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
                {testimonials.map(
                    ({ image, name, userName, comment }: TestimonialProps) => (
                        <Card
                            key={userName}
                            className="max-w-md md:break-inside-avoid overflow-hidden"
                        >
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <Avatar>
                                    <AvatarImage alt="" src={image} />
                                    <AvatarFallback>
                                        {getInitials(name ?? "")}
                                    </AvatarFallback>
                                </Avatar>

                                <div className="flex flex-col">
                                    <CardTitle className="text-lg">
                                        {name}
                                    </CardTitle>
                                    <CardDescription>
                                        {userName}
                                    </CardDescription>
                                </div>
                            </CardHeader>

                            <CardContent>{comment}</CardContent>
                        </Card>
                    )
                )}
            </div>
        </section>
    );
};
