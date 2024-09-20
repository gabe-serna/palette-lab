import { useEffect } from "react";
import AdditionalInfo from "./AdditionalInfo";
import BasicInfo from "./BasicInfo";
import GalleryInfo from "./GalleryInfo";
import Hero from "./Hero";
import SideNoteDivider from "./SideNoteDivider";
import ThemeDisplay from "./ThemeDisplay";
import getPrefersReducedMotion from "@/utils/getMotionPreference";

const Main = () => {
  const prefersReducedMotion = getPrefersReducedMotion();
  // Fade Hero in on Load
  useEffect(() => {
    const hero = document.getElementById("hero")!;
    const elements = hero.getElementsByClassName("animate");
    for (let i = 0; i < elements.length; i++) {
      if (prefersReducedMotion) {
        const element = elements[i] as HTMLElement;
        element.style.opacity = "1";
        element.style.visibility = "visible";
        continue;
      }
      elements[i].animate(
        [
          { transform: "translateY(-15px)", visibility: "hidden", opacity: 0 },
          { transform: "translateY(0)", visibility: "visible", opacity: 1 }
        ],
        {
          duration: 1200,
          delay: 500 + i * 500,
          easing: "ease-out",
          fill: "forwards"
        }
      );
    }
  }, []);

  // Fade Pages in on Scroll
  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = entry.target.getElementsByClassName("animate");
          for (let i = 0; i < elements.length; i++) {
            if (prefersReducedMotion) {
              const element = elements[i] as HTMLElement;
              element.style.opacity = "1";
              element.style.visibility = "visible";
              continue;
            }
            elements[i].animate(
              [
                { transform: "translateY(-15px)", visibility: "hidden", opacity: 0 },
                { transform: "translateY(0)", visibility: "visible", opacity: 1 }
              ],
              {
                duration: 600,
                delay: i * 250,
                easing: "ease-out",
                fill: "forwards"
              }
            );
            observer.unobserve(entry.target);
          }
        }
      });
    };

    let options;
    if (!prefersReducedMotion) {
      options = { threshold: 0.5 };
    } else {
      options = { threshold: 0, rootMargin: "0px 0px -100px 0px" };
    }
    const observer = new IntersectionObserver(callback, options);
    observer.observe(document.getElementById("basic-info")!);
    observer.observe(document.getElementById("theme-display")!);
    observer.observe(document.getElementById("additional-info")!);
    observer.observe(document.getElementById("divider")!);
    observer.observe(document.getElementById("gallery-info")!);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Hero className="flex flex-col items-center relative z-20 justify-center size-full bg-[radial-gradient(ellipse,_rgba(0,_0,_0,_0)_50%,_hsl(from_hsl(var(--background))_h_s_calc(l_/_3))_100%)]" />
      <BasicInfo className="flex items-center relative z-20 justify-around px-24 size-full bg-[radial-gradient(ellipse,_rgba(0,_0,_0,_0)_50%,_hsl(from_hsl(var(--background))_h_s_calc(l_/_3))_100%)]" />
      <ThemeDisplay className="flex flex-col relative z-20 items-center justify-center gap-12 px-24 size-full bg-[radial-gradient(ellipse,_rgba(0,_0,_0,_0)_50%,_hsl(from_hsl(var(--background))_h_s_calc(l_/_3))_100%)]" />
      <div className="z-10 bg-[linear-gradient(hsl(from_hsl(var(--background))_h_s_calc(l_/_1.3))_20%,_hsl(from_hsl(var(--primary))_h_calc(s_*_2.5)_calc(l_*_.065))_100%)]">
        <div
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, black 0%, transparent 45%, transparent 55%, black 100%)",
            maskImage:
              "linear-gradient(to right, black 0%, transparent 45%, transparent 55%, black 100%)"
          }}
          className="w-full relative z-20 h-24 bg-gradient-to-b from-[hsl(from_hsl(var(--background))_h_calc(s_*_0.8)_calc(l_/_2.5))] to-[hsl(from_hsl(var(--primary))_h_calc(s_*_2.5)_calc(l_*_.045))]"
        />
      </div>
      <div className="bg-[hsl(from_hsl(var(--primary))_h_calc(s_*_2.5)_calc(l_*_.08))] z-10 size-full">
        <AdditionalInfo className="relative z-20 flex flex-col items-center justify-center gap-12 px-24 size-full bg-[radial-gradient(ellipse,_rgba(0,_0,_0,_0)_50%,_hsl(from_hsl(var(--primary))_h_calc(s_*_2.5)_calc(l_*_.04))_100%)]" />
      </div>
      <div className="bg-[hsl(from_hsl(var(--primary))_h_calc(s_*_2.5)_calc(l_*_.08))] z-10 w-full h-2/3">
        <SideNoteDivider className="relative z-20 size-full px-24 bg-[radial-gradient(ellipse_65%_80%,_rgba(0,_0,_0,_0)_35%,_hsl(from_hsl(var(--primary))_h_calc(s_*_2.5)_calc(l_*_.04))_100%)]" />
      </div>
      <div className="bg-[hsl(from_hsl(var(--primary))_h_calc(s_*_2.5)_calc(l_*_.08))] z-10 size-full">
        <GalleryInfo className="relative z-20 flex items-center justify-around px-24 size-full bg-[radial-gradient(ellipse,_rgba(0,_0,_0,_0)_50%,_hsl(from_hsl(var(--primary))_h_calc(s_*_2.5)_calc(l_*_.04))_100%)]" />
      </div>
      <footer className="relative z-30 flex mr-auto flex-col items-center justify-center w-[calc(100vw-15rem-10px)] h-36 gap-2 py-6 text-foreground bg-background">
        <div className="flex items-center justify-center gap-8">
          <p>Created by Gabe Serna</p>
          <a href="https://github.com/gabe-serna/palette-lab">Github</a>
        </div>
        <div>
          <p className="text-xs italic text-foreground">
            Copyright © 2024 All Rights Reserved. CC BY-NC-ND License.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Main;
