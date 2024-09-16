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
      <div className="bg-[hsl(from_hsl(var(--primary))_h_calc(s_*_2.5)_calc(l_*_.05))] size-full">
        <AdditionalInfo className="flex flex-col items-center justify-center gap-12 px-24 size-full bg-[hsl(from_hsl(var(--primary))_h_calc(s_*_2.5)_calc(l_*_.08))] bg-[radial-gradient(ellipse,_rgba(0,_0,_0,_0)_50%,_hsl(from_hsl(var(--primary))_h_calc(s_*_2.5)_calc(l_*_.04))_100%)]" />
        <SideNoteDivider className="w-full px-24 h-2/3 bg-[hsl(from_hsl(var(--primary))_h_calc(s_*_2.5)_calc(l_*_.08))] bg-[radial-gradient(ellipse_65%_80%,_rgba(0,_0,_0,_0)_35%,_hsl(from_hsl(var(--primary))_h_calc(s_*_2.5)_calc(l_*_.04))_100%)] z-10" />
        <GalleryInfo className="flex items-center justify-around px-24 size-full bg-[hsl(from_hsl(var(--primary))_h_calc(s_*_2.5)_calc(l_*_.08))] bg-[radial-gradient(ellipse,_rgba(0,_0,_0,_0)_50%,_hsl(from_hsl(var(--primary))_h_calc(s_*_2.5)_calc(l_*_.04))_100%)]" />
      </div>
    </>
  );
};

export default Main;
