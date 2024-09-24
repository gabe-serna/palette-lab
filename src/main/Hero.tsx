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
  const mainTextSize =
    "3xl:text-[11rem] 3xl: 2xl:text-[8.5rem] xl:text-[7.5rem] lg:text-8xl ";
  return (
    <section id="hero" className={className}>
      <div
        style={{ opacity: "0" }}
        className="relative flex justify-center w-full h-32 animate"
      >
        <h1
          style={{ textShadow: "3px 3px 20px rgba(0, 0, 0, 0.5)" }}
          className={mainTextSize + " absolute z-10 text-transparent"}
        >
          Inspiration
        </h1>
        <h1
          className={
            mainTextSize +
            "absolute select-none bg-gradient-to-l from-primary from-10% to-secondary to-80% bg-clip-text text-transparent z-10"
          }
        >
          Inspiration
        </h1>
      </div>
      <h2
        style={{ opacity: "0" }}
        className={
          "3xl:text-[3.25rem] 2xl:text-[2.5rem] xl:text-4xl lg:text-3xl " +
          "3xl:mt-20 2xl:mt-6 xl:mt-2 lg:-mt-4 " +
          "z-10 animate"
        }
      >
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
        className={
          "3xl:text-[1.375rem] 2xl:text-lg xl:text-base lg:text-base " +
          "3xl:mt-[5.5rem] 2xl:mt-16 xl:mt-12 lg:mt-11 " +
          "3xl:px-[4.675rem] 3xl:py-[1.125rem] 2xl:px-[3.75rem] 2xl:py-[0.75rem] xl:px-[3.25rem] xl:py-[0.675rem] " +
          "lg:px-[2.875rem] lg:py-[0.625rem] " +
          "animate bg-gradient-to-b from-primary to-[hsla(from_hsl(var(--primary))_h_s_calc(l_*_0.75)_/_0.5)] rounded-2xl z-10"
        }
      >
        Press Space
      </button>
      <div className="absolute top-10 left-24 size-[60%] bg-[radial-gradient(closest-corner_at_40%_50%,_hsla(from_hsl(var(--secondary))_h_s_calc(l_*_0.75)_/_0.3)_0%,_rgba(36,_36,_36,_0)_50%)] -rotate-[25deg] z-0" />
      <div className="absolute top-36 -right-0 size-1/2 bg-[radial-gradient(closest-corner_at_40%_50%,_hsla(from_hsl(var(--primary))_h_s_calc(l_*_0.75)_/_0.3)_0%,_rgba(36,_36,_36,_0)_60%)] rotate-6 z-0" />
    </section>
  );
};

export default Hero;
