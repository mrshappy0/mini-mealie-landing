import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
    return (
        <section id="about" className="container py-24 sm:py-32">
            <div className="bg-muted/50 border rounded-lg py-12">
                <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
                    <img
                        src={pilot}
                        alt=""
                        className="w-[300px] object-contain rounded-lg"
                    />
                    <div className="bg-green-0 flex flex-col justify-between">
                        <div className="pb-6">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                                    About{" "}
                                </span>
                                ShapLabs
                            </h2>
                            <p className="text-xl text-muted-foreground mt-4">
                                ShapLabs is a dynamic hub where creativity meets
                                technology, fostering innovation and growth. Our
                                mission is to merge tech advancement with the
                                open source ethos and a commitment to community
                                and mentorship.
                                <br />
                                <br />
                                <span className="block ml-5">
                                    <b>Innovate with Purpose -</b> Develop
                                    functional, user-centered technologies
                                </span>
                                {/* <br /> */}
                                <br />
                                <span className="block ml-5">
                                    <b>Empower Through Open Source -</b> Harness
                                    the power of collaboration for shared
                                    learning
                                </span>
                                {/* <br /> */}
                                <br />
                                <span className="block ml-5">
                                    <b>Cultivate Community -</b> Build an
                                    inclusive, supportive environment for all
                                </span>
                                {/* <br /> */}
                                <br />
                                <span className="block ml-5">
                                    <b>Prioritize Mentorship -</b> Commit to
                                    guiding the next generation of developers to
                                    build practical skills and confidence
                                </span>
                            </p>
                        </div>

                        <Statistics />
                    </div>
                </div>
            </div>
        </section>
    );
};
