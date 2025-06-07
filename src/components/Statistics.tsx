import { useEffect, useState } from "react";
import { numberOfUsers } from "@/reviewData";

interface GitHubRepoData {
    openIssues: string;
    stargazers: string;
}

const fetchNumberOfOpenIssues = async (): Promise<GitHubRepoData> => {
    try {
        const response = await fetch(
            "https://api.github.com/repos/mrshappy0/mini-mealie"
        );
        const data = await response.json();
        return {
            openIssues: (data.open_issues_count ?? 0).toString(),
            stargazers: (data.stargazers_count ?? 0).toString(),
        };
    } catch {
        return {
            openIssues: "0",
            stargazers: "4",
        };
    }
};

export const Statistics = () => {
    interface statsProps {
        url: string;
        quantity: string;
        description: string;
    }

    const [repoData, setRepoData] = useState<GitHubRepoData>({
        openIssues: "0",
        stargazers: "4",
    });

    useEffect(() => {
        fetchNumberOfOpenIssues().then(setRepoData);
    }, [repoData]);

    const stats: statsProps[] = [
        {
            url: "https://chromewebstore.google.com/detail/Mini%20Mealie/lchfnbjpjoeejalacnpjnafenacmdocc",
            quantity: `${numberOfUsers ?? "100"}+`,
            description: "Installs",
        },
        {
            url: "https://github.com/mrshappy0/mini-mealie/stargazers",
            quantity: repoData.stargazers,
            description: "Stargazers",
        },
        {
            url: "https://github.com/mrshappy0/mini-mealie/issues",
            quantity: repoData.openIssues,
            description: "Open Issues",
        },
        {
            url: "#features",
            quantity: "4",
            description: "Features",
        },
    ];

    return (
        <section id="statistics">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
                {stats.map(({ quantity, description, url }: statsProps) => {
                    const isInternal = url.startsWith("#");
                    return (
                        <a
                            key={description}
                            href={url}
                            {...(!isInternal && {
                                target: "_blank",
                                rel: "noopener noreferrer",
                            })}
                            className="flex flex-col items-center space-y-1"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold ">
                                {quantity}
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                {description}
                            </p>
                        </a>
                    );
                })}
            </div>
        </section>
    );
};
