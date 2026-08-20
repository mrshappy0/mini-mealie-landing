import { useEffect, useState } from 'react';

import { fetchFromMMCApi } from '@/lib/api';
import { Review } from '@/lib/types';

interface statsProps {
    url: string;
    quantity: string;
    description: string;
}

const fetchNumberOfOpenIssues = async (): Promise<{
    openIssues: string;
    stargazers: number;
}> => {
    try {
        const [repoResponse, issuesResponse] = await Promise.all([
            fetch('https://api.github.com/repos/mrshappy0/mini-mealie'),
            fetch(
                'https://api.github.com/search/issues?q=repo:mrshappy0/mini-mealie+type:issue+state:open',
            ),
        ]);
        const repoData = await repoResponse.json();
        const issuesData = await issuesResponse.json();
        return {
            // GitHub's repo API lumps open PRs into open_issues_count, so the
            // search API (filtered to type:issue) is used for an accurate count.
            openIssues: issuesData.total_count ?? 0,
            stargazers: repoData.stargazers_count ?? 0,
        };
    } catch {
        return {
            openIssues: '0',
            stargazers: 4,
        };
    }
};

export const Statistics = () => {
    const [repoData, setRepoData] = useState<{
        openIssues: string;
        stargazers: number;
    }>({
        openIssues: '0',
        stargazers: 4,
    });
    const [animatedStars, setAnimatedStars] = useState(0);

    const [numberOfUsers, setNumberOfUsers] = useState<number | null>(null);
    const [animatedUsers, setAnimatedUsers] = useState(1);

    useEffect(() => {
        const fetchUserCount = async () => {
            try {
                const data = await fetchFromMMCApi<{
                    reviews: Review[];
                    scrapedAt: string;
                    numberOfUsers: string;
                }>('/stats');

                const parsed = parseInt(data?.numberOfUsers ?? '0', 10);
                setNumberOfUsers(Number.isNaN(parsed) ? 50 : parsed);
            } catch (err) {
                console.error('Failed to fetch stats:', err);
                setNumberOfUsers(50);
            }
        };

        fetchUserCount();
    }, []);

    useEffect(() => {
        if (numberOfUsers === null) return;

        let current = 1;
        let step = 1;
        const target = numberOfUsers;
        const maxDelay = 60; // max delay per step in ms
        const acceleration = 1.15; // smaller = slower growth

        const tick = () => {
            if (current >= target) return;

            step = Math.min(step * acceleration, target - current);
            current = Math.min(current + Math.floor(step), target);
            setAnimatedUsers(current);

            const delay = Math.min(maxDelay, 1000 / (step + 1));
            setTimeout(tick, delay);
        };

        tick();
    }, [numberOfUsers]);

    useEffect(() => {
        fetchNumberOfOpenIssues().then(setRepoData);
    }, []);

    useEffect(() => {
        if (!repoData.stargazers) return;

        let current = 0;
        let step = 0.5;
        const target = repoData.stargazers;
        const acceleration = 1.03; // slower growth
        const maxDelay = 90;

        const tick = () => {
            if (current >= target) return;

            step = Math.min(step * acceleration, target - current);
            current = Math.min(current + Math.floor(step), target);
            setAnimatedStars(current);

            const delay = Math.min(maxDelay, 1000 / (step + 1));
            setTimeout(tick, delay);
        };

        tick();
    }, [repoData.stargazers]);

    const stats: statsProps[] = [
        ...(numberOfUsers
            ? [
                  {
                      url: 'https://chromewebstore.google.com/detail/Mini%20Mealie/lchfnbjpjoeejalacnpjnafenacmdocc',
                      quantity: `${animatedUsers}+`,
                      description: 'Installs',
                  },
              ]
            : []),
        {
            url: 'https://github.com/mrshappy0/mini-mealie/stargazers',
            quantity: `${animatedStars}`,
            description: 'Stargazers',
        },
        {
            url: 'https://github.com/mrshappy0/mini-mealie/issues',
            quantity: repoData.openIssues,
            description: 'Open Issues',
        },
        {
            url: '#features',
            quantity: '4',
            description: 'Features',
        },
    ];

    return (
        <section id="statistics">
            <div
                className={`grid grid-cols-2 ${
                    stats.length >= 4 ? 'sm:grid-cols-4' : 'sm:grid-cols-3'
                } gap-6 text-center text-white`}
            >
                {stats.map(({ quantity, description, url }: statsProps) => {
                    const isInternal = url.startsWith('#');
                    return (
                        <a
                            key={description}
                            href={url}
                            {...(!isInternal && {
                                target: '_blank',
                                rel: 'noopener noreferrer',
                            })}
                            className="flex flex-col items-center space-y-1"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold ">{quantity}</h2>
                            <p className="text-xl text-muted-foreground">{description}</p>
                        </a>
                    );
                })}
            </div>
        </section>
    );
};
