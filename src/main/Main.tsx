import AdditionalInfo from "./AdditionalInfo";
import BasicInfo from "./BasicInfo";
import GalleryInfo from "./GalleryInfo";
import Hero from "./Hero";
import SideNoteDivider from "./SideNoteDivider";
import ThemeDisplay from "./ThemeDisplay";

const Main = () => {
  return (
    <>
      <Hero className="flex flex-col items-center justify-center size-full bg-[radial-gradient(ellipse,_rgba(0,_0,_0,_0)_50%,_hsl(from_hsl(var(--background))_h_s_calc(l_/_3))_100%)]" />
      <BasicInfo className="flex items-center justify-around px-24 size-full bg-[radial-gradient(ellipse,_rgba(0,_0,_0,_0)_50%,_hsl(from_hsl(var(--background))_h_s_calc(l_/_3))_100%)]" />
      <ThemeDisplay className="flex flex-col items-center justify-center gap-12 px-24 size-full bg-[radial-gradient(ellipse,_rgba(0,_0,_0,_0)_50%,_hsl(from_hsl(var(--background))_h_s_calc(l_/_3))_100%)]" />
      <div className="bg-gradient-to-b from-[hsl(from_hsl(var(--background))_h_s_calc(l_/_3))] to-[hsl(from_hsl(var(--primary))_h_calc(s_*_2.5)_calc(l_*_0.04))]">
        <div
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)"
          }}
          className="w-full h-24 bg-gradient-to-b from-[hsl(from_hsl(var(--background))_h_calc(s_*_0.8)_calc(l_/_1.3))] to-[hsl(from_hsl(var(--primary))_h_calc(s_*_2.5)_calc(l_*_.062))]"
        />
      </div>
      <div className="bg-[hsl(from_hsl(var(--primary))_h_calc(s_*_2.5)_calc(l_*_.04))] size-full">
        <AdditionalInfo className="flex flex-col items-center justify-center gap-12 px-24 size-full bg-[hsl(from_hsl(var(--primary))_h_calc(s_*_2.5)_calc(l_*_.08))] bg-[radial-gradient(ellipse,_rgba(0,_0,_0,_0)_50%,_hsl(from_hsl(var(--primary))_h_calc(s_*_2.5)_calc(l_*_.04))_100%)]" />
        <SideNoteDivider className="w-full px-24 h-2/3 bg-[hsl(from_hsl(var(--primary))_h_calc(s_*_2.5)_calc(l_*_.08))] bg-[radial-gradient(ellipse_65%_80%,_rgba(0,_0,_0,_0)_35%,_hsl(from_hsl(var(--primary))_h_calc(s_*_2.5)_calc(l_*_.04))_100%)] z-10" />
        <GalleryInfo className="flex items-center justify-around px-24 size-full bg-[hsl(from_hsl(var(--primary))_h_calc(s_*_2.5)_calc(l_*_.08))] bg-[radial-gradient(ellipse,_rgba(0,_0,_0,_0)_50%,_hsl(from_hsl(var(--primary))_h_calc(s_*_2.5)_calc(l_*_.04))_100%)]" />
        <footer className="flex mr-auto flex-col items-center justify-center w-[calc(100vw-15rem-10px)] h-32 gap-2 py-6 text-primary-foreground/65">
          <div className="flex items-center justify-center gap-8">
            <a href="#">Created by Gabe Serna</a>
            <a href="#">Github</a>
          </div>
          <div>
            <p className="text-xs italic text-primary-foreground/55">
              Copyright © 2024 All Rights Reserved. CC BY-NC-ND License.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Main;
