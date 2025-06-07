import { resolve, dirname } from "path";
import { writeFileSync } from "fs";
import puppeteer from "puppeteer";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const EXTENSION_ID = "lchfnbjpjoeejalacnpjnafenacmdocc";
const TARGET_URL = `https://chrome.google.com/webstore/detail/${EXTENSION_ID}/reviews`;

async function getChromeWebStoreInfo() {
    const browser = await puppeteer.launch({
        executablePath:
            "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", // TODO: this will only run on my machine. Allow it to run in Github actions pipeline
        headless: false,
    });

    const page = await browser.newPage();
    await page.goto(TARGET_URL, { waitUntil: "networkidle2", timeout: 30000 });

    try {
        await page.waitForSelector("main section", { timeout: 10000 });

        const reviews = await page.evaluate(() => {
            const reviewSections = document.evaluate(
                "//main//section",
                document,
                null,
                XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
                null
            );

            const extractedReviews: {
                reviewerName: string;
                starRating: string;
                stars: number;
                reviewText: string;
            }[] = [];

            for (let i = 0; i < reviewSections.snapshotLength; i++) {
                const section = reviewSections.snapshotItem(
                    i
                ) as Element | null;
                if (!section) continue;

                // Extract Reviewer Name
                const reviewerNameElement = document.evaluate(
                    ".//h3/span",
                    section,
                    null,
                    XPathResult.FIRST_ORDERED_NODE_TYPE,
                    null
                ).singleNodeValue as Element | null;

                const reviewerName =
                    reviewerNameElement?.textContent?.trim() || "Unknown";

                // Extract Star Rating
                const ratingElement = document.evaluate(
                    './/div[@role="img"]',
                    section,
                    null,
                    XPathResult.FIRST_ORDERED_NODE_TYPE,
                    null
                ).singleNodeValue as Element | null;

                const starRating =
                    ratingElement?.getAttribute("aria-label") || "No rating";

                // Extract numeric stars (e.g., "5 out of 5 stars" => 5)
                const stars = parseFloat(starRating.split(" ")[0]) || 0;

                // Extract Review Text
                const reviewTextElement = document.evaluate(
                    ".//p",
                    section,
                    null,
                    XPathResult.FIRST_ORDERED_NODE_TYPE,
                    null
                ).singleNodeValue as Element | null;

                const reviewText =
                    reviewTextElement?.textContent?.trim() || "No review text";

                // Only push reviews that have valid data and a rating of 3.5 or higher
                if (
                    reviewerName !== "Unknown" &&
                    starRating !== "No rating" &&
                    reviewText !== "No review text" &&
                    stars >= 3.5
                ) {
                    extractedReviews.push({
                        reviewerName,
                        starRating,
                        stars,
                        reviewText,
                    });
                }
            }

            return extractedReviews;
        });

        const numberOfUsers = await page.evaluate(() => {
            const userSection = document.evaluate(
                "//main/header/section/section/div/div[3]",
                document,
                null,
                XPathResult.FIRST_ORDERED_NODE_TYPE,
                null
            ).singleNodeValue as Element | null;

            const textContent = userSection?.textContent?.trim() ?? "100 users";
            const match = textContent.match(/(\d+)\s*users/);
            return match ? match[1] : "0";
        });

        const outputPath = resolve(__dirname, "../src/reviewData.ts");
        const fileContent = `
export interface Review {
  reviewerName: string;
  starRating: string;
  stars: number;
  reviewText: string;
}

export const reviews: Review[] = ${JSON.stringify(reviews, null, 2)};

export const numberOfUsers = "${numberOfUsers}";
`;

        writeFileSync(outputPath, fileContent);

        console.log("Reviews written to src/reviewData.ts");
    } catch (err) {
        console.error("Error extracting reviews:", err);
    } finally {
        await browser.close();
    }
}

getChromeWebStoreInfo();
