import { CardBase, CardHeading, CardParagraph, Heading } from "@/Typography";
import { PaintBucket } from "lucide-react";
import { ArrowLeftRight } from "lucide-react";
import { Download } from "lucide-react";
import { useEffect, useRef } from "react";

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

const AdditionalInfo = ({ className, style }: Props) => {
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
        element.style.boxShadow = hoverBoxShadow;

        const hoverKeyframes = {
          transform: "translateX(0px) translateY(-20px) scale(1.01)"
        };
        element.animate(hoverKeyframes, {
          duration: 200,
          fill: "forwards"
        });

        elements.forEach(el => {
          if (el.element !== element) {
            el.element.style.opacity = "0.6";

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
            differenceY > 15 ? 15 : differenceY < -15 ? -15 : differenceY;
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
        element.style.opacity = "1";

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
    <section id="additional-info" style={style} className={className}>
      <div className="relative flex flex-col text-center">
        <Heading className="z-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-l from-primary from-10% to-secondary to-80%">
            Stunning themes
          </span>
          , <br />
          waiting for{" "}
          <div className="relative z-10 inline">
            your{" "}
            <div className="absolute -top-16 -left-32 size-[300%] bg-[radial-gradient(closest-corner_at_40%_50%,_hsla(from_hsl(var(--accent-2))_h_s_calc(l_*_0.75)_/_0.3)_0%,_rgba(36,_36,_36,_0)_50%)] rotate-12 -z-10" />
          </div>
          touch.
        </Heading>
        <div
          id="additional-info"
          style={{ opacity: 0 }}
          className="z-20 flex gap-12 mt-20 animate"
        >
          <CardBase id="choose">
            <div className="flex flex-col items-center gap-2 my-auto">
              <PaintBucket
                className={
                  "3xl:size-[4.375rem] 2xl:size-14 xl:size-11 lg:size-8 " +
                  "stroke-[hsl(from_hsl(var(--accent))_h_s_calc(l_*_0.7))]"
                }
              />
              <CardHeading>Choose Your Colors</CardHeading>
            </div>
            <div className="w-full px-5 bg-card">
              <CardParagraph className="z-50">
                Use the perfect amount of colors for your needs. You may select
                between 3-6 colors.
              </CardParagraph>
              <div className="protrusion-div" />
            </div>
          </CardBase>
          {/*  */}
          <CardBase id="adjust">
            <div className="flex flex-col items-center gap-2 my-auto">
              <ArrowLeftRight
                className={
                  "3xl:size-[4.375rem] 2xl:size-14 xl:size-11 lg:size-8 " +
                  "stroke-[hsl(from_hsl(var(--accent))_h_s_calc(l_*_0.7))]"
                }
              />
              <CardHeading>Adjust Manually</CardHeading>
            </div>
            <div className="w-full px-5 bg-card">
              <CardParagraph className="z-50">
                Hover between two colors and click to swap their positions. Click on
                a color to adjust it.
              </CardParagraph>
              <div className="protrusion-div" />
            </div>
          </CardBase>
          {/*  */}
          <CardBase id="export">
            <div className="flex flex-col items-center gap-2 my-auto">
              <Download
                className={
                  "3xl:size-[4.375rem] 2xl:size-14 xl:size-11 lg:size-8 " +
                  "stroke-[hsl(from_hsl(var(--accent))_h_s_calc(l_*_0.7))]"
                }
              />
              <CardHeading>Export When Finished</CardHeading>
            </div>
            <div className="w-full px-5 bg-card">
              <CardParagraph className="z-50">
                Once you're satisfied with your creation, export it in a variety of
                different formats.
              </CardParagraph>
              <div className="protrusion-div" />
            </div>
          </CardBase>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
