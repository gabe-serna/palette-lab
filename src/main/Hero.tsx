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
    <section className={className}>
      <div className="relative flex justify-center w-full h-32">
        <h1
          style={{ textShadow: "3px 3px 10px rgba(0, 0, 0, 0.5)" }}
          className="absolute z-10 text-transparent text-9xl"
        >
          Inspiration
        </h1>
        <h1 className="absolute text-9xl bg-gradient-to-l from-primary from-10% to-accent to-80% bg-clip-text text-transparent z-10">
          Inspiration
        </h1>
      </div>
      <h2 className="z-10 mt-4 text-4xl">at the press of a button</h2>
      <button
        type="button"
        id="space"
        style={{ color: buttonTextColor }}
        className=" text-lg mt-16 bg-gradient-to-b from-primary to-[hsla(from_hsl(var(--primary))_h_s_calc(l_*_0.75)_/_0.5)] px-[3.25rem] py-[0.675rem] rounded-2xl z-10"
      >
        Press Space
      </button>
      <div className="absolute top-10 left-60 size-[60%] bg-[radial-gradient(closest-corner_at_40%_50%,_hsla(from_hsl(var(--accent))_h_s_calc(l_*_0.75)_/_0.3)_0%,_rgba(36,_36,_36,_0)_50%)] -rotate-[25deg] z-0" />
      <div className="absolute top-40 -right-10 size-1/2 bg-[radial-gradient(closest-corner_at_40%_50%,_hsla(from_hsl(var(--primary))_h_s_calc(l_*_0.75)_/_0.3)_0%,_rgba(36,_36,_36,_0)_60%)] rotate-6 z-0" />
    </section>
  );
};

export default Hero;
