import AdditionalInfo from "./AdditionalInfo";
import BasicInfo from "./BasicInfo";
import Hero from "./Hero";
import ThemeDisplay from "./ThemeDisplay";

const Main = () => {
  return (
    <>
      <Hero className="flex flex-col items-center justify-center size-full bg-gradient-to-b from-[hsl(from_hsl(var(--primary))_h_calc(s_*_0.75)_calc(l_*_.4))] to-[hsl(var(--background))] to-5%" />
      <BasicInfo className="flex items-center justify-between px-24 size-full" />
      <ThemeDisplay className="flex flex-col items-center justify-center gap-12 px-24 size-full" />
      <AdditionalInfo className="flex flex-col items-center justify-center gap-12 px-24 size-full bg-[hsl(from_hsl(var(--primary))_h_calc(s_*_2.5)_calc(l_*_.1))]" />
    </>
  );
};

export default Main;
