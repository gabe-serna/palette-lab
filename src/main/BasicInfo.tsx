interface Props {
  className?: string;
}

const BasicInfo = ({ className }: Props) => {
  return (
    <div className={className}>
      <div className="relative flex flex-col w-1/2">
        <h1 className="z-10 text-7xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-l from-[hsl(from_hsl(var(--accent))_h_s_calc(l_*_0.6))] from-10% to-accent to-80%">
            Effortless
          </span>{" "}
          <div className="relative z-10 inline">
            Color
            <div className="absolute -top-20 -left-16 size-[300%] bg-[radial-gradient(closest-corner_at_40%_50%,_hsla(from_hsl(var(--secondary))_h_s_calc(l_*_0.75)_/_0.3)_0%,_rgba(36,_36,_36,_0)_50%)] rotate-12 -z-10" />
          </div>{" "}
          Creation.
        </h1>
        <p
          style={{ width: "clamp(45ch, 50%, 75ch)" }}
          className="mt-4 text-lg text-[hsl(from_hsl(var(--foreground))_h_s_calc(l_*_0.75))]"
        >
          Use the space bar to randomize the color palette. If you find a color you
          <em className="text-primary"> love</em>, simply click to lock it in place
          and keep it from randomizing.
        </p>
      </div>
      <div>
        <img
          src="https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-vivid-colorful-powder-splash-png-image_11899648.png"
          alt="color smoke"
        />
      </div>
    </div>
  );
};

export default BasicInfo;
