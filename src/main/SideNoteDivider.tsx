interface Props {
  className?: string;
}

const SideNoteDivider = ({ className }: Props) => {
  return (
    <>
      <section id="divider" className={className}>
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
              boxShadow: "0px 0px 30px -10px hsl(var(--accent-2))"
            }}
            className={
              "3xl:h-44 2xl:h-36 xl:h-32 lg:h-28 w-full " +
              "flex flex-col items-center justify-center z-10 bg-background border-y-[1px] border-[hsl(from_hsl(var(--accent-2))_h_calc(l_*_0.8)_calc(l_*_0.8))]"
            }
          >
            <p className="3xl:text-[1.75rem] 2xl:text-2xl xl:text-xl lg:text-lg italic">
              <span style={{ opacity: "0" }} className="animate">
                And 100% Free.{" "}
              </span>
              <span style={{ opacity: "0" }} className="inline animate">
                <span className="text-secondary">Forever</span>.
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SideNoteDivider;
