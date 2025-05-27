import { buttonVariants } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, GithubIcon } from "lucide-react";

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

// const teamList: TeamProps[] = [
//     {
//         imageUrl: "https://i.pravatar.cc/150?img=35", // TODO: change to my photo
//         name: "Adam Shappy",
//         position: "Creator & Lead Developer",
//         description:
//             "Mini Mealie was born when Adam realized the hassle users faced when loading Mealie just to create a recipe. Aiming to simplify this, he developed Mini Mealie as a convenient solution and a gift to the open-source community.",

//         socialNetworks: [
//             {
//                 name: "Linkedin",
//                 url: "https://www.linkedin.com/in/adam-shappy/",
//             },
//             {
//                 name: "Instagram",
//                 url: "https://www.instagram.com/atomishappy",
//             },
//             {
//                 name: "GitHub",
//                 url: "https://github.com/mrshappy0/",
//             },
//         ],
//     },
//     {
//         imageUrl: "https://i.pravatar.cc/150?img=60", // TODO: add carter's photo
//         name: "Carter Shappy",
//         position: "Visual Designer",
//         description:
//             "Carter is an artist deeply rooted in the magical city of Portland, Maine, where he explores the complex beauty of nature in his work. Inspired by the chance to contribute to an open-source project like Mini Mealie, he brings his unique visual talent to the team.",

//         socialNetworks: [
//             {
//                 name: "Linkedin",
//                 url: "https://www.linkedin.com/in/carter-shappy/",
//             },
//             {
//                 name: "Instagram",
//                 url: "https://www.instagram.com/cartershappy/",
//             },
//         ],
//     },
//     {
//         imageUrl: "https://i.pravatar.cc/150?img=36",
//         name: "Spencer Adler",
//         position: "Developer",
//         description:
//             "Spencer is passionate about traveling, open source, and recently merged his 7 years of engineering with software engineering.",
//         socialNetworks: [
//             {
//                 name: "Linkedin",
//                 url: "https://www.linkedin.com/in/spenceradler2/",
//             },
//             {
//                 name: "GitHub",
//                 url: "https://github.com/spenceradler2",
//             },
//         ],
//     },
//     {
//         imageUrl: "https://i.pravatar.cc/150?img=41", // Update with a different placeholder image
//         name: "Your Name Here",
//         position: "Future Collaborator",
//         description:
//             "Passionate about open source? Fork, create issues, and submit PRs to join us!",
//         socialNetworks: [
//             {
//                 name: "GitHub",
//                 url: "https://github.com/your-profile",
//             },
//         ],
//     },
// ];

// ... existing code ...

const teamList: TeamProps[] = [
    {
        imageUrl: "https://i.pravatar.cc/150?img=35", // TODO: change to my photo
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
        imageUrl: "https://i.pravatar.cc/150?img=60", // TODO: add carter's photo
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
        imageUrl: "https://i.pravatar.cc/150?img=36",
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
        imageUrl: "https://i.pravatar.cc/150?img=41", // Update with a different placeholder image
        name: "Your Name Here",
        position: "Future Collaborator",
        description:
            "Join us in enhancing Mini Mealie! Fork, create issues, and submit PRs on GitHub.",
        socialNetworks: [
            {
                name: "GitHub",
                url: "https://github.com/your-profile",
            },
        ],
    },
];

// ... rest of code ...
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
                Crew
            </h2>

            <p className="mt-4 mb-10 text-xl text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veritatis dolor pariatur sit!
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
