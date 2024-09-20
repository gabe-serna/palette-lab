import { ColorContext } from "@/ColorProvider";
import { getTextColor } from "@/utils/getTextColor";
import { useContext } from "react";

interface Props {
  className?: string;
}

const Hero = ({ className }: Props) => {
  const context = useContext(ColorContext);
  const { colors } = context!;
  const buttonTextColor = getTextColor(colors[2].color);
  return (
    <section id="hero" className={className}>
      <div
        style={{ opacity: "0" }}
        className="relative flex justify-center w-full h-32 animate"
      >
        <h1
          style={{ textShadow: "3px 3px 20px rgba(0, 0, 0, 0.5)" }}
          className="absolute z-10 text-transparent text-9xl"
        >
          Inspiration
        </h1>
        <h1 className="absolute select-none text-9xl bg-gradient-to-l from-primary from-10% to-secondary to-80% bg-clip-text text-transparent z-10">
          Inspiration
        </h1>
      </div>
      <h2 style={{ opacity: "0" }} className="z-10 mt-4 text-4xl animate">
        at the press of a button
      </h2>
      <button
        type="button"
        id="space"
        style={{
          boxShadow: "0px -2px 30px -15px hsl(var(--foreground))",
          color: buttonTextColor,
          opacity: "0"
        }}
        className="animate text-lg mt-16 bg-gradient-to-b from-primary to-[hsla(from_hsl(var(--primary))_h_s_calc(l_*_0.75)_/_0.5)] px-[3.25rem] py-[0.675rem] rounded-2xl z-10"
      >
        Press Space
      </button>
      <div className="absolute top-10 left-24 size-[60%] bg-[radial-gradient(closest-corner_at_40%_50%,_hsla(from_hsl(var(--secondary))_h_s_calc(l_*_0.75)_/_0.3)_0%,_rgba(36,_36,_36,_0)_50%)] -rotate-[25deg] z-0" />
      <div className="absolute top-36 -right-0 size-1/2 bg-[radial-gradient(closest-corner_at_40%_50%,_hsla(from_hsl(var(--primary))_h_s_calc(l_*_0.75)_/_0.3)_0%,_rgba(36,_36,_36,_0)_60%)] rotate-6 z-0" />
    </section>
  );
};

export default Hero;
