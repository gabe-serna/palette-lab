import { PaintBucket } from "lucide-react";
import { ArrowLeftRight } from "lucide-react";
import { Download } from "lucide-react";
import { useEffect, useRef } from "react";

interface Props {
  className?: string;
}

const AdditionalInfo = ({ className }: Props) => {
  const isHovering = useRef(false);
  const baseBoxShadow =
    "0px 0px 10px 5px hsl(from hsl(var(--primary)) h s calc(l / 3))";
  const hoverBoxShadow =
    "0px 0px 10px 5px hsl(from hsl(var(--primary)) h s calc(l / 1.5))";

  useEffect(() => {
    const choose = document.getElementById("choose")!;
    const adjust = document.getElementById("adjust")!;
    const exportEl = document.getElementById("export")!;
    const chooseX = choose.getBoundingClientRect().x;
    const chooseY = choose.getBoundingClientRect().y;
    const adjustX = adjust.getBoundingClientRect().x;
    const adjustY = adjust.getBoundingClientRect().y;
    const exportX = exportEl.getBoundingClientRect().x;
    const exportY = exportEl.getBoundingClientRect().y;
    const elements = [
      { element: choose, x: chooseX, y: chooseY },
      { element: adjust, x: adjustX, y: adjustY },
      { element: exportEl, x: exportX, y: exportY }
    ];

    const handleMouse = (event: MouseEvent) => {
      const handleHover = (element: HTMLElement) => {
        if (isHovering.current) return;
        isHovering.current = true;
        const hoverKeyframes = {
          transform: "translateX(0px) translateY(-20px) scale(1.01)"
        };
        element.animate(hoverKeyframes, {
          duration: 200,
          fill: "forwards"
        });
        element.style.boxShadow = hoverBoxShadow;
        elements.forEach(el => {
          if (el.element !== element) {
            const keyframes = {
              transform: "translateX(0px) translateY(0px)"
            };
            el.element.animate(keyframes, {
              duration: 800,
              fill: "forwards"
            });
          }
        });
      };

      const handleHoverMovement = (hoveredElement: HTMLElement) => {
        elements.forEach(el => {
          if (el.element === hoveredElement) return;
          let differenceX = (event.screenX - el.x) / 40;
          differenceX =
            differenceX > 15 ? 15 : differenceX < -15 ? -15 : differenceX;
          let differenceY = (event.screenY - el.y) / 40;
          differenceY =
            differenceY > 20 ? 20 : differenceY < -20 ? -20 : differenceY;
          const keyframes = {
            transform: `translateX(${differenceX}px) translateY(${differenceY}px)`
          };

          el.element.animate(keyframes, {
            duration: 800,
            fill: "forwards"
          });
        });
      };

      const handleMovement = (
        element: HTMLElement,
        cardX: number,
        cardY: number
      ) => {
        element.style.boxShadow = baseBoxShadow;

        let differenceX = (event.screenX - cardX) / 30;
        differenceX = differenceX > 15 ? 15 : differenceX < -15 ? -15 : differenceX;
        let differenceY = (event.screenY - cardY) / 30;
        differenceY = differenceY > 15 ? 15 : differenceY < -15 ? -15 : differenceY;
        const keyframes = {
          transform: `translateX(${differenceX}px) translateY(${differenceY}px)`
        };

        element.animate(keyframes, {
          duration: 800,
          fill: "forwards"
        });
      };

      // Actual Logic
      const target = event.target as HTMLElement;
      if (choose.contains(target)) {
        handleHover(choose);
        handleHoverMovement(choose);
        return;
      }

      if (adjust.contains(target)) {
        handleHover(adjust);
        handleHoverMovement(adjust);
        return;
      }

      if (exportEl.contains(target)) {
        handleHover(exportEl);
        handleHoverMovement(exportEl);
        return;
      }

      isHovering.current = false;
      handleMovement(choose, chooseX, chooseY);
      handleMovement(adjust, adjustX, adjustY);
      handleMovement(exportEl, exportX, exportY);
    };

    document.addEventListener("mousemove", handleMouse);

    return () => {};
  }, []);

  return (
    <section className={className}>
      <div className="relative flex flex-col text-center">
        <h1 className="z-10 mt-10 text-7xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-l from-primary from-10% to-accent to-80%">
            Stunning themes
          </span>
          , <br />
          waiting for{" "}
          <div className="relative z-10 inline">
            your{" "}
            <div className="absolute -top-16 -left-32 size-[300%] bg-[radial-gradient(closest-corner_at_40%_50%,_hsla(from_hsl(var(--tertiary))_h_s_calc(l_*_0.75)_/_0.3)_0%,_rgba(36,_36,_36,_0)_50%)] rotate-12 -z-10" />
          </div>
          touch.
        </h1>
        <div id="additional-info" className="z-10 flex gap-12 mt-16">
          <figure
            id="choose"
            style={{
              boxShadow: baseBoxShadow,
              transition: "box-shadow ease 0.5s"
            }}
            className="overflow-hidden w-72 h-96 bg-gradient-to-b from-background to-[hsl(from_hsl(var(--background))_h_calc(s_*_0.75)_calc(l_*_.6))] rounded-2xl grid grid-rows-[6fr_4fr]"
          >
            <div className="flex flex-col items-center gap-2 my-auto">
              <PaintBucket
                size={48}
                className="stroke-[hsl(from_hsl(var(--secondary))_h_s_calc(l_*_0.7))]"
              />
              <figcaption className="text-2xl select-none">
                Choose Your Colors
              </figcaption>
            </div>
            <div className="w-full px-5 bg-card">
              <p className="relative z-50 mt-4 select-none text-primary-foreground">
                Use the perfect amount of colors for your needs. You may select
                between 3-6 colors.
              </p>
              <div className="protrusion-div" />
            </div>
          </figure>
          {/*  */}
          <figure
            id="adjust"
            style={{
              boxShadow: baseBoxShadow,
              transition: "box-shadow ease 0.5s"
            }}
            className="overflow-hidden w-72 h-96 bg-gradient-to-b from-background to-[hsl(from_hsl(var(--background))_h_calc(s_*_0.75)_calc(l_*_.6))] rounded-2xl grid grid-rows-[6fr_4fr]"
          >
            <div className="flex flex-col items-center gap-2 my-auto">
              <ArrowLeftRight
                size={48}
                className="stroke-[hsl(from_hsl(var(--secondary))_h_s_calc(l_*_0.7))]"
              />
              <figcaption className="text-2xl select-none">
                Adjust Manually
              </figcaption>
            </div>
            <div className="w-full px-5 bg-card">
              <p className="relative z-50 mt-4 select-none text-primary-foreground">
                Hover between two colors and click to swap their positions. Click on
                a color to adjust it.
              </p>
              <div className="protrusion-div" />
            </div>
          </figure>
          {/*  */}
          <figure
            id="export"
            style={{
              boxShadow: baseBoxShadow,
              transition: "box-shadow ease 0.5s"
            }}
            className="overflow-hidden w-72 h-96 bg-gradient-to-b from-background to-[hsl(from_hsl(var(--background))_h_calc(s_*_0.75)_calc(l_*_.6))] rounded-2xl grid grid-rows-[6fr_4fr]"
          >
            <div className="flex flex-col items-center gap-2 my-auto">
              <Download
                size={48}
                className="stroke-[hsl(from_hsl(var(--secondary))_h_s_calc(l_*_0.7))]"
              />
              <figcaption className="text-2xl select-none">
                Export When Finished
              </figcaption>
            </div>
            <div className="w-full px-5 bg-card">
              <p className="relative z-50 mt-4 select-none text-primary-foreground">
                Once you're satisfied with your creation, export it in a variety of
                different formats.
              </p>
              <div className="protrusion-div" />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
