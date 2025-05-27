import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
    return (
        <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
            <div className="text-center lg:text-start space-y-6">
                <main className="text-5xl md:text-6xl font-bold">
                    <h1 className="inline">
                        <span className="inline bg-gradient-to-r from-[#FFAE64]  to-[#FF7E19] text-transparent bg-clip-text">
                            Mini Mealie
                        </span>{" "}
                        Your In-Browser
                    </h1>{" "}
                    <h2 className="inline">
                        <span className="inline bg-gradient-to-r from-[#FF7E19] via-[#FFA347] to-[#FFC178] text-transparent bg-clip-text">
                            Mealie
                        </span>{" "}
                        Assistant
                    </h2>
                </main>

                <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
                    Build your React landing page effortlessly with the required
                    sections to your project.
                </p>

                <div className="space-y-4 md:space-y-0 md:space-x-4">
                    <Button className="w-full md:w-1/3">
                        <a
                            href="https://chromewebstore.google.com/detail/mini-mealie/lchfnbjpjoeejalacnpjnafenacmdocc"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Get Started
                        </a>
                    </Button>
                    <a
                        rel="noreferrer noopener"
                        href="https://github.com/mrshappy0/mini-mealie"
                        target="_blank"
                        className={`w-full md:w-1/3 ${buttonVariants({
                            variant: "outline",
                        })}`}
                    >
                        Github Repository
                        <GitHubLogoIcon className="ml-2 w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* Hero cards sections */}
            <div className="z-10">
                <HeroCards />
            </div>

            {/* Shadow effect */}
            <div className="shadow"></div>
        </section>
    );
};
