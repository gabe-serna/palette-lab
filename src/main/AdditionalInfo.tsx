import { PaintBucket } from "lucide-react";
import { ArrowLeftRight } from "lucide-react";
import { Download } from "lucide-react";

interface Props {
  className?: string;
}

const Hero = ({ className }: Props) => {
  return (
    <section className={className}>
      <div className="relative flex flex-col text-center">
        <h1 className="z-10 text-7xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-l from-primary from-10% to-accent to-80%">
            Stunning themes
          </span>
          , <br />
          waiting for{" "}
          <div className="relative z-10 inline">
            your{" "}
            <div className="absolute -top-16 -left-32 size-[300%] bg-[radial-gradient(closest-corner_at_40%_50%,_hsla(from_hsl(var(--tertiary))_h_s_calc(l_*_0.75)_/_0.3)_0%,_rgba(36,_36,_36,_0)_50%)] rotate-12 -z-10" />
          </div>{" "}
          touch.
        </h1>
        <div id="additional-info" className="z-10 flex gap-6 mt-16">
          <figure
            style={{ boxShadow: "0px 0px 10px hsl(var(--primary))" }}
            className="overflow-hidden w-72 h-96 bg-background rounded-2xl grid grid-rows-[6fr_4fr]"
          >
            <div className="flex flex-col items-center my-auto">
              <PaintBucket
                size={48}
                className="stroke-[hsl(from_hsl(var(--tertiary))_h_s_calc(l_*_0.7))]"
              />
              <figcaption className="text-2xl">Choose Your Colors</figcaption>
            </div>
            <div className="w-full px-5 bg-card">
              <p className="relative z-50 mt-4 text-primary-foreground">
                Use the perfect amount of colors for your needs. You may select
                between 3-6 colors.
              </p>
              <div className="protrusion-div" />
            </div>
          </figure>
          {/*  */}
          <figure
            style={{ boxShadow: "0px 0px 10px hsl(var(--primary))" }}
            className="overflow-hidden w-72 h-96 bg-background rounded-2xl grid grid-rows-[6fr_4fr]"
          >
            <div className="flex flex-col items-center my-auto">
              <ArrowLeftRight
                size={48}
                className="stroke-[hsl(from_hsl(var(--tertiary))_h_s_calc(l_*_0.7))]"
              />
              <figcaption className="text-2xl">Adjust Manually</figcaption>
            </div>
            <div className="w-full px-5 bg-card">
              <p className="relative z-50 mt-4 text-primary-foreground">
                Hover between two colors and click to swap their positions. Click on
                a color to adjust it.
              </p>
              <div className="protrusion-div" />
            </div>
          </figure>
          {/*  */}
          <figure
            style={{ boxShadow: "0px 0px 10px hsl(var(--primary))" }}
            className="overflow-hidden w-72 h-96 bg-background rounded-2xl grid grid-rows-[6fr_4fr]"
          >
            <div className="flex flex-col items-center my-auto">
              <Download
                size={48}
                className="stroke-[hsl(from_hsl(var(--tertiary))_h_s_calc(l_*_0.7))]"
              />
              <figcaption className="text-2xl">Export When Finished</figcaption>
            </div>
            <div className="w-full px-5 bg-card">
              <p className="relative z-50 mt-4 text-primary-foreground">
                Once you're satisfied with your creation, export it in a variety of
                different formats.
              </p>
              <div className="protrusion-div" />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
