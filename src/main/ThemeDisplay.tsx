import { ScrollArea } from "@/components/ui/scroll-area";
import ThemeCard from "./ThemeCard";
import { useEffect } from "react";

interface Props {
  className?: string;
}

const ThemeDisplay = ({ className }: Props) => {
  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const ratio = window.scrollY / (window.outerWidth * 1.5);
          console.log(ratio);

          // Themes Top
          let target1 = document.getElementById("themes-top")!;
          target1 = target1.children[1] as HTMLElement;
          const maxScrollLeft1 = target1.scrollWidth - target1.clientWidth;
          target1.scrollLeft = ratio * maxScrollLeft1;

          // Themes Bottom
          let target2 = document.getElementById("themes-bottom")!;
          target2 = target2.children[1] as HTMLElement;
          const maxScrollLeft2 = target2.scrollWidth - target2.clientWidth;
          target2.scrollLeft = (1 - ratio) * maxScrollLeft2;
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      threshold: Array.from({ length: 101 }, (_, i) => i / 100)
    });
    observer.observe(document.getElementById("theme-display")!);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="theme-display" className={className}>
      <h1 className="w-1/2 text-center text-7xl">
        Discover that{" "}
        <div className="inline bg-clip-text text-transparent bg-gradient-to-r from-primary from-10% to-secondary to-80%">
          Magic{" "}
        </div>{" "}
        blend.
      </h1>
      <div
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)"
        }}
        className="flex flex-col w-full gap-4"
      >
        <ScrollArea id="themes-top" className="rounded-md h-28 whitespace-nowrap">
          <div className="flex p-4 space-x-8 w-max">
            <ThemeCard theme={"08081C-BFBAB5-3A999C-3457CB-CD7860"} name="Icicle" />
            <ThemeCard theme={"120703-D2CBD2-993848-CC995C"} name="Sienna" />
            <ThemeCard
              theme={"0D0902-C9D4C4-5ECAD4-28D258-9EBB11"}
              name="Midnight"
            />
            <ThemeCard theme={"170311-C2B3BA-AF3323-E10543-1EBEA0"} name="Scorch" />
            <ThemeCard
              theme={"000F0C-B2B0BA-DE35A3-96B42D-5ED4CE-8020DF"}
              name="Bumblebee"
            />
            <ThemeCard
              theme={"160916-C2CBCC-E1CF2D-F89130-50DC7F"}
              name="Sweet Tea"
            />
          </div>
        </ScrollArea>
        <ScrollArea id="themes-bottom" className="h-32 rounded-md whitespace-nowrap">
          <div className="flex p-4 space-x-8 w-max">
            <ThemeCard
              theme={"000F0C-B2B0BA-DE35A3-96B42D-5ED4CE-8020DF"}
              name="Bumblebee"
            />
            <ThemeCard
              theme={"160916-C2CBCC-E1CF2D-F89130-50DC7F"}
              name="Sweet Tea"
            />
            <ThemeCard
              theme={"0D0902-C9D4C4-5ECAD4-28D258-9EBB11"}
              name="Midnight"
            />
            <ThemeCard theme={"170311-C2B3BA-AF3323-E10543-1EBEA0"} name="Scorch" />
            <ThemeCard theme={"120703-D2CBD2-993848-CC995C"} name="Sienna" />
            <ThemeCard theme={"08081C-BFBAB5-3A999C-3457CB-CD7860"} name="Icicle" />
          </div>
        </ScrollArea>
      </div>
      <h2 className="text-primary">
        <a href="#">Discover Themes {">"}</a>
      </h2>
    </section>
  );
};

export default ThemeDisplay;
