import { Heading, Link, Paragraph } from "@/Typography";
import GalleryCarousel from "./GalleryCarousel";

interface Props {
  className?: string;
}

const GalleryInfo = ({ className }: Props) => {
  return (
    <section id="gallery-info" className={className}>
      <GalleryCarousel />
      <div className="relative flex flex-col w-1/2">
        <Heading className="z-20 lg:max-xl:w-[120%]">
          Bring Your{" "}
          <div className="relative z-10 inline">
            Colors{" "}
            <div className="absolute -top-8 -left-12 size-[200%] bg-[radial-gradient(closest-corner_at_40%_50%,_hsla(from_hsl(var(--accent-2))_h_s_calc(l_*_0.75)_/_0.35)_0%,_rgba(36,_36,_36,_0)_50%)] rotate-12 -z-10" />
          </div>
          into
          <br />
          the{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-l from-[hsl(from_hsl(var(--secondary))_h_s_calc(l_*_0.6))] from-10% to-secondary to-80%">
            Gallery
          </span>
        </Heading>
        <Paragraph className="z-20 mb-7">
          Found a palette you love? See it in action with a wide variety of artwork
          demos. Watch your colors give life to art.
        </Paragraph>
        <Link href="#" className="z-20">
          View Gallery {">"}
        </Link>
      </div>
    </section>
  );
};

export default GalleryInfo;
