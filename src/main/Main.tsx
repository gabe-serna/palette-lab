import BasicInfo from "./BasicInfo";
import Hero from "./Hero";

const Main = () => {
  return (
    <>
      <Hero className="flex flex-col items-center justify-center size-full bg-gradient-to-b from-[hsl(from_hsl(var(--primary))_h_calc(s_*_0.75)_calc(l_*_.4))] to-[hsl(var(--background))] to-5%" />
      <BasicInfo className="flex items-center justify-between px-24 size-full" />
    </>
  );
};

export default Main;
