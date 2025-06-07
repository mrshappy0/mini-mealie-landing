import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "react-toastify";
import { useTheme } from "@/components/theme-provider";

interface FAQProps {
    question: string;
    answer: string;
    value: string;
}

const handleCopyEmail = async () => {
    const effectiveTheme = document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
    try {
        await navigator.clipboard.writeText("atom@shaplabs.net");
        toast.success("Email address copied to clipboard!", {
            theme: effectiveTheme,
        });
    } catch (err) {
        console.error("Failed to copy: ", err);
        toast.error("Failed to copy email address.");
    }
};

const FAQList: FAQProps[] = [
    {
        question: "Is Mini Mealie free?",
        answer: "Yes! All too often, we see great open-source projects get abandoned or monetized. Mini Mealie will always be free and open-source.",
        value: "item-1",
    },
    {
        question: "Does Mini Mealie work offline?",
        answer: "If your Mealie instance is on the same local network and your LAN is active, then yes! Mini Mealie is designed to work offline as long as you have access to your Mealie instance.",
        value: "item-2",
    },
    {
        question: "How do I connect Mini Mealie to my Mealie instance?",
        answer: "You will need two things: 1) Your Mealie instance URL, and 2) Your Mealie API key.",
        value: "item-3",
    },
    {
        question: "How do I get my Mealie API key?",
        answer: "To obtain your Mealie API key, first log in to your Mealie instance. You can either click on your user icon and select 'Manage Your API Tokens' or navigate directly to `<mealie-instance-domain>/user/profile/api-tokens`. Here, you need to generate a new token. It's recommended to give it a descriptive name like 'mini-mealie' to avoid accidentally deleting or misplacing it.",
        value: "item-4",
    },
    {
        question: "Is my data safe with Mini Mealie?",
        answer: "Yes, Mini Mealie does not store any of your data. It simply acts as a frontend interface to interact with your Mealie instance, which handles all data storage and management.",
        value: "item-5",
    },
];

export const FAQ = () => {
    return (
        <section id="faq" className="container py-24 sm:py-32">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    Questions
                </span>
            </h2>

            <Accordion
                type="single"
                collapsible
                className="w-full AccordionRoot"
            >
                {FAQList.map(({ question, answer, value }: FAQProps) => (
                    <AccordionItem key={value} value={value}>
                        <AccordionTrigger className="text-left">
                            {question}
                        </AccordionTrigger>

                        <AccordionContent>{answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>

            <h3 className="font-medium mt-4">
                Still have questions?{" "}
                <a
                    rel="noreferrer noopener"
                    href="#"
                    onClick={handleCopyEmail}
                    className="text-primary transition-all border-primary hover:border-b-2"
                >
                    Contact us
                </a>
            </h3>
        </section>
    );
};
