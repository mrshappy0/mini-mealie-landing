import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { TestimonialProps } from "./types";
import { Review } from "@/reviewData";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getInitials = (name: string) => {
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

export const convertReviewsToTestimonials = (
    reviews: Review[] | undefined
): TestimonialProps[] => {
    return (
        reviews?.map((review) => ({
            image: "", // TODO: real scraped icon from google
            name: review.reviewerName,
            userName: `@${review.reviewerName
                .toLowerCase()
                .replace(/\s+/g, "_")}`,
            comment: review.reviewText,
        })) ?? []
    );
};