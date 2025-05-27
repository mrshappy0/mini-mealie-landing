import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { reviews as scrapedReviews, Review } from "../reviewData";
interface TestimonialProps {
    image: string;
    name: string;
    userName: string;
    comment: string;
}

const getInitials = (name: string) => {
    const parts = name.split(" ");

    if (parts.length > 1) {
        // Take first letter of each part and join them
        return parts[0][0] + parts[1][0];
    } else if (parts.length === 1) {
        // Repeat the first letter if there's only one word
        return parts[0][0] + parts[0][1] || parts[0][0];
    } else {
        // Handle empty string scenario
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return (
            letters[Math.floor(Math.random() * 26)] +
            letters[Math.floor(Math.random() * 26)]
        );
    }
};

const mockTestimonials: TestimonialProps[] = [
    {
        image: "https://github.com/shadcn.png",
        name: "Reactive Pigeon",
        userName: "@reactive_pigeon",
        comment: "Mini Mealie is awesome possum!",
    },
    {
        image: "https://github.com/shadcn.png",
        name: "John Doe React",
        userName: "@john_Doe1",
        comment:
            "Lorem ipsum dolor sit amet,empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },

    {
        image: "https://github.com/shadcn.png",
        name: "John Doe React",
        userName: "@john_Doe2",
        comment:
            "Lorem ipsum dolor sit amet,exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    },
    {
        image: "https://github.com/shadcn.png",
        name: "John Doe React",
        userName: "@john_Doe3",
        comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
        image: "https://github.com/shadcn.png",
        name: "John Doe React",
        userName: "@john_Doe4",
        comment:
            "Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
    {
        image: "https://github.com/shadcn.png",
        name: "John Doe React",
        userName: "@john_Doe5",
        comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

const convertReviewsToTestimonials = (
    reviews: Review[] | undefined
): TestimonialProps[] => {
    return (
        reviews?.map((review) => ({
            image: "",
            // image: "https://github.com/shadcn.png", // TODO: real scraped icon from google
            name: review.reviewerName,
            userName: `@${review.reviewerName
                .toLowerCase()
                .replace(/\s+/g, "_")}`,
            comment: review.reviewText,
        })) ?? []
    );
};

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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                unde error facere hic reiciendis illo
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
