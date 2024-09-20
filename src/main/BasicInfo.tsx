import ColorSwirl from "./images/color-swirl";

interface Props {
  className?: string;
}

const BasicInfo = ({ className }: Props) => {
  return (
    <section id="basic-info" className={className}>
      <div className="relative z-10 flex flex-col w-1/2">
        <h1 className="z-10 text-7xl animate" style={{ opacity: "0" }}>
          <span className="bg-clip-text text-transparent bg-gradient-to-l from-[hsl(from_hsl(var(--secondary))_h_s_calc(l_*_0.6))] from-10% to-secondary to-80%">
            Effortless
          </span>{" "}
          <div className="relative z-10 inline">
            Color
            <div className="absolute -top-20 -left-16 size-[300%] bg-[radial-gradient(closest-corner_at_40%_50%,_hsla(from_hsl(var(--primary))_h_s_calc(l_*_0.75)_/_0.3)_0%,_rgba(36,_36,_36,_0)_50%)] rotate-12 -z-10" />
          </div>{" "}
          Creation.
        </h1>
        <p
          style={{ width: "clamp(45ch, 50%, 75ch)", opacity: "0" }}
          className="animate mt-4 text-lg text-[hsl(from_hsl(var(--foreground))_h_s_calc(l_*_0.75))]"
        >
          Use the space bar to randomize the color palette. If you find a color you
          <em className="text-primary"> love</em>, simply click to lock it in place
          and keep it from randomizing.
        </p>
      </div>
      <div
        style={{
          opacity: "0",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)"
        }}
        className="w-1/2 -z-10 animate"
      >
        <ColorSwirl />
      </div>
    </section>
  );
};

export default BasicInfo;
