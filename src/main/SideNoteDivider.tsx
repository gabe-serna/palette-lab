interface Props {
  className?: string;
}

const SideNoteDivider = ({ className }: Props) => {
  return (
    <>
      <section className={className}>
        <div
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)"
          }}
          className="relative z-20 flex items-center size-full"
        >
          <div
            style={{
              boxShadow: "0px 0px 30px -10px hsl(var(--tertiary))"
            }}
            className="flex flex-col items-center justify-center z-10 w-full h-36 bg-background border-y-[1px] border-[hsl(from_hsl(var(--tertiary))_h_calc(l_*_0.8)_calc(l_*_0.8))]"
          >
            <p className="text-xl italic">
              And 100% Free. <div className="inline text-accent">Forever</div>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SideNoteDivider;
