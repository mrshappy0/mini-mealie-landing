import { LogoIcon } from "./Icons";
import { routeList } from "./Navbar";

export const Footer = () => {
    return (
        <footer id="footer">
            <hr className="w-11/12 mx-auto" />

            <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
                <div className="col-span-full xl:col-span-2">
                    <a
                        rel="noreferrer noopener"
                        href="/"
                        className="font-bold text-xl flex"
                    >
                        <LogoIcon />
                        <span className="ml-2">Mini Mealie</span>
                    </a>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">Follow Us</h3>
                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="https://github.com/mrshappy0/mini-mealie"
                            target="_blank"
                            className="opacity-60 hover:opacity-100"
                        >
                            Github
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">Browsers</h3>
                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="https://chromewebstore.google.com/detail/mini-mealie/lchfnbjpjoeejalacnpjnafenacmdocc"
                            target="_blank"
                            className="opacity-60 hover:opacity-100"
                        >
                            Chrome
                        </a>
                    </div>

                   <div className="opacity-40">
                        <a
                            rel="noreferrer noopener"
                            href="#"
                            className="pointer-events-none cursor-not-allowed"
                        >
                            Firefox <span style={{ color: 'orange', fontStyle: 'italic' }}>- Coming Soon!</span>
                        </a>
                    </div>

                    <div className="opacity-40">
                        <a
                            rel="noreferrer noopener"
                            href="#"
                            className="pointer-events-none cursor-not-allowed"
                        >
                            Safari <span style={{ color: 'orange', fontStyle: 'italic' }}>- Coming Soon!</span>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">About</h3>
                    {routeList.map((route, index) => (
                        <div key={index}>
                            <a
                            rel="noreferrer noopener"
                                href={route.href}
                            className="opacity-60 hover:opacity-100"
                        >
                                {route.label}
                        </a>
                    </div>
                    ))}
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">Community</h3>
                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="#"
                            className="opacity-40 pointer-events-none cursor-not-allowed"
                        >
                            Youtube <span style={{ color: 'orange', fontStyle: 'italic' }}>- Coming Soon!</span>
                        </a>
                    </div>
                </div>
            </section>
            <section className="container pb-14 text-center">
                <h3>
                    &copy; {new Date().getFullYear()} Mini Mealie. All rights reserved.
                </h3>
            </section>
        </footer>
    );
};
