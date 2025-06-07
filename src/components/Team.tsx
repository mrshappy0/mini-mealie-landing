import { buttonVariants } from "@/components/ui/button";
import mountainMe from '../assets/mountain-me-GIMPed.jpg';
import carterBeach from '../assets/carter-beach.jpg';
import spencerMtns from '../assets/spencer-mtns.jpeg';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Instagram, Linkedin, GithubIcon } from "lucide-react";

interface TeamProps {
    imageUrl: string;
    name: string;
    position: string;
    socialNetworks: SociaNetworkslProps[];
    description: string;
}

interface SociaNetworkslProps {
    name: string;
    url: string;
}

const teamList: TeamProps[] = [
    {
        imageUrl: mountainMe, // TODO: change to my photo
        name: "Adam Shappy",
        position: "Creator & Lead Developer",
        description:
            "Adam created Mini Mealie to streamline recipe creation and contribute to the open-source community.",

        socialNetworks: [
            {
                name: "Linkedin",
                url: "https://www.linkedin.com/in/adam-shappy/",
            },
            {
                name: "Instagram",
                url: "https://www.instagram.com/atomishappy",
            },
            {
                name: "GitHub",
                url: "https://github.com/mrshappy0/",
            },
        ],
    },
    {
        imageUrl: carterBeach, // TODO: add carter's photo
        name: "Carter Shappy",
        position: "Visual Designer",
        description:
            "Carter uses his artistic talents from Portland, Maine, to bring a unique visual flair to Mini Mealie.",

        socialNetworks: [
            {
                name: "Linkedin",
                url: "https://www.linkedin.com/in/carter-shappy/",
            },
            {
                name: "Instagram",
                url: "https://www.instagram.com/cartershappy/",
            },
        ],
    },
    {
        imageUrl: spencerMtns,
        name: "Spencer Adler",
        position: "Developer",
        description:
            "Spencer loves travel and open source, and he brings seven years of engineering experience to software.",
        socialNetworks: [
            {
                name: "Linkedin",
                url: "https://www.linkedin.com/in/spenceradler2/",
            },
            {
                name: "GitHub",
                url: "https://github.com/spenceradler2",
            },
        ],
    },
    {
        imageUrl: "https://api.dicebear.com/9.x/notionists/svg?scale=150&seed=Felix&backgroundColor=9B501C", // Update with a different placeholder image
        name: "Your Name",
        position: "Future Collaborator",
        description:
            "Join us in enhancing Mini Mealie! Fork, create issues, and submit PRs on GitHub. We welcome all contributions, big or small.",
        socialNetworks: [
            {
                name: "GitHub",
                url: "https://github.com/",
            },
        ],
    },
];

export const Team = () => {
    const socialIcon = (iconName: string) => {
        switch (iconName) {
            case "Linkedin":
                return <Linkedin size="20" />;

            case "GitHub":
                return <GithubIcon size="20" />;

            case "Instagram":
                return <Instagram size="20" />;
        }
    };

    return (
        <section id="team" className="container py-24 sm:py-32">
            <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    Our Dedicated{" "}
                </span>
                Builders
            </h2>

            <p className="mt-4 mb-10 text-xl text-muted-foreground">
                We're just a group of enthusiasts contributing to Mini Mealie for the love of open source and learning.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
                {teamList.map(
                    ({
                        imageUrl,
                        name,
                        position,
                        socialNetworks,
                        description,
                    }: TeamProps) => (
                        <Card
                            key={name}
                            className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
                        >
                            <CardHeader className="mt-8 flex justify-center items-center pb-2">
                                <img
                                    src={imageUrl}
                                    alt={`${name} ${position}`}
                                    className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                                />
                                <CardTitle className="text-center">
                                    {name}
                                </CardTitle>
                                <CardDescription className="text-primary">
                                    {position}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="text-center pb-2">
                                <p>{description}</p>
                            </CardContent>

                            <CardFooter>
                                {socialNetworks.map(
                                    ({ name, url }: SociaNetworkslProps) => (
                                        <div key={name}>
                                            <a
                                                rel="noreferrer noopener"
                                                href={url}
                                                target="_blank"
                                                className={buttonVariants({
                                                    variant: "ghost",
                                                    size: "sm",
                                                })}
                                            >
                                                <span className="sr-only">
                                                    {name} icon
                                                </span>
                                                {socialIcon(name)}
                                            </a>
                                        </div>
                                    )
                                )}
                            </CardFooter>
                        </Card>
                    )
                )}
            </div>
        </section>
    );
};
