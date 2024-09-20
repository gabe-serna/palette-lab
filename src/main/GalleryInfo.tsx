import GalleryCarousel from "./GalleryCarousel";

interface Props {
  className?: string;
}

const GalleryInfo = ({ className }: Props) => {
  return (
    <section id="gallery-info" className={className}>
      <GalleryCarousel />
      <div className="relative flex flex-col w-1/2">
        <h1 style={{ opacity: "0" }} className="z-20 text-7xl animate">
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
        </h1>
        <p
          style={{ width: "clamp(45ch, 50%, 75ch)", opacity: "0" }}
          className="animate z-20 mt-4 text-lg text-[hsl(from_hsl(var(--foreground))_h_s_calc(l_*_0.75))]"
        >
          Found a palette you love? See it in action with a wide variety of artwork
          demos. Watch your colors give life to art.
          <br />
          <br />
        </p>
        <a
          href="#"
          style={{ opacity: "0" }}
          className="z-20 animate text-md text-primary"
        >
          View Gallery {">"}
        </a>
      </div>
    </section>
  );
};

export default GalleryInfo;
