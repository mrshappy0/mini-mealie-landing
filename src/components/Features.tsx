import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Chrome Context Menu",
    description:
      "Mini Mealie enhances functionality by allowing users to add recipes to their Mealie server instance seamlessly; simply right-click on a recipe and select the 'Recipe Detected - Add Recipe to Mealie' option.",
    image: image4,
  },
  {
    title: "Bypass Paywalls",
    description:
      "Users have the flexibility to manage access by toggling a paywall ladder on or off, which directs the recipe creation process through a paywall when activated.",
    image: image3,
  },
  {
    title: "Seamless Server Navigation",
    description:
      "When connected to a server, the Mini Mealie Chrome pop-up icon offers a quick access feature, enabling users to click the icon and be swiftly directed to their Mealie instance.",
    image: image,
  },
];

const featureList: string[] = [
  "Create Recipe",
  "Recipe Detection",
  "Context Menu",
  "Paywall Ladder",
  "Local/Remote Access",
  "HTTP/HTTPS Support",
  "Server Link",
  "Chrome Pop-up",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
