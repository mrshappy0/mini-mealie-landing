import { GiftIcon, MapIcon, MedalIcon, PlaneIcon } from './Icons';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface FeatureProps {
    icon: JSX.Element;
    title: string;
    description: string | JSX.Element;
}

const features: FeatureProps[] = [
    {
        icon: <MedalIcon />,
        title: 'Installation',
        description: (
            <>
                Install Mini Mealie from the{' '}
                <a
                    href="https://chromewebstore.google.com/detail/mini-mealie/lchfnbjpjoeejalacnpjnafenacmdocc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline-offset-2 hover:underline"
                >
                    Chrome Web Store
                </a>
            </>
        ),
    },
    {
        icon: <MapIcon />,
        title: 'Connect',
        description:
            'Acquire your Mealie instance URL and API key, then connect Mini Mealie to your Mealie instance',
    },
    {
        icon: <PlaneIcon />,
        title: 'Search',
        description: 'Search for recipes on your favorite Recipe websites',
    },
    {
        icon: <GiftIcon />,
        title: 'Right Click',
        description: 'Right click on any recipe to save it to your Mealie instance',
    },
];

export const Quickstart = () => {
    return (
        <section id="quickstart" className="container text-center py-24 sm:py-32">
            <h2 className="text-3xl md:text-4xl font-bold ">
                Step-by-Step{' '}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    Guide
                </span>
            </h2>
            <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
                Less than four easy steps!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map(({ icon, title, description }: FeatureProps) => (
                    <Card key={title} className="bg-muted/50">
                        <CardHeader>
                            <CardTitle className="grid gap-4 place-items-center">
                                {icon}
                                {title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>{description}</CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};
