import { useContext, useEffect, useRef } from "react";
import Generator from "./generator/Generator";
import SubHeader from "./sub_header/SubHeader";
import { generateNewColors } from "./utils/generateColor";
import Main from "./main/Main";
import { ColorContext } from "./ColorProvider";
import { ThemeProvider } from "./components/theme-provider";
import { useSearchParams } from "react-router-dom";
import getColorParams from "./utils/getColorParams";
import updateColorVariables from "./utils/updateColorVariables";
import { Toaster } from "./components/ui/sonner";

function App() {
  const [, setSearchParams] = useSearchParams();

  const areAllLocked = useRef(false);
  const context = useContext(ColorContext);
  const { colors, setColors, setRedoTree } = context!;

  const randomizeColors = () => {
    if (areAllLocked.current) return;
    setRedoTree([]);
    setColors(prevColors => {
      const newColors = generateNewColors(prevColors);
      updateColorVariables(newColors);
      return newColors;
    });
  };

  useEffect(() => {
    const colorParams = getColorParams(colors);
    setSearchParams({ colors: colorParams });
    areAllLocked.current = colors.every(color => color.locked);
  }, [colors]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === " ") {
        event.preventDefault();
        randomizeColors();
      }
    };

    const handleClick = (event: MouseEvent) => {
      if (event.target instanceof HTMLElement) {
        if (event.target.id === "space") {
          randomizeColors();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  // Cursor Gradient Trail
  useEffect(() => {
    const cursorGradient = document.getElementById("cursor-gradient")!;

    const handleMouseMove = (event: MouseEvent) => {
      const left = event.clientX;
      const top = event.clientY + window.scrollY;
      const breakpoint = window.innerHeight * 3;
      const color =
        event.pageY < breakpoint
          ? "radial-gradient(hsla(from hsl(var(--accent)) h s calc(l * 0.5) / 0.3) 0%, rgba(36, 36, 36, 0) 50%)"
          : "radial-gradient(hsla(from hsl(var(--secondary)) h s calc(l * 0.5) / 0.4) 0%, rgba(36, 36, 36, 0) 50%)";
      const opacity =
        event.pageY < breakpoint - 150 || event.pageY > breakpoint + 200 ? "1" : "0";

      const hoverKeyframes = {
        left: `${left}px`,
        top: `${top}px`,
        opacity: opacity
      };
      cursorGradient.style.backgroundImage = color;
      cursorGradient.animate(hoverKeyframes, {
        duration: 1250,
        fill: "forwards"
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div
        className={
          "3xl:grid-rows-[6.5rem_calc(100vh-6.5rem)] 3xl:grid-cols-[22rem_calc(100vw-22rem)] " +
          "2xl:grid-rows-[5.125rem_calc(100vh-5.125rem)] 2xl:grid-cols-[17.75rem_calc(100vw-17.75rem)] " +
          "xl:grid-rows-[4.25rem_calc(100vh-4.25rem)] xl:grid-cols-[15rem_calc(100vw-15rem)] " +
          "lg:grid-rows-[3.75rem_calc(100vh-3.75rem)] lg:grid-cols-[13rem_calc(100vw-13rem)] " +
          "grid-rows-[3.75rem_calc(100vh-3.75rem-3.5rem)_3.5rem] " +
          "grid bg-background"
        }
      >
        <div
          className={
            "3xl:h-[6.5rem] 3xl:w-[22rem] 2xl:h-[5.125rem] 2xl:w-[17.75rem] " +
            "xl:h-[4.25rem] xl:w-[15rem] lg:h-[3.75rem] lg:w-[13rem] " +
            "z-50 lg:fixed items-center justify-center max-lg:hidden lg:col-span-1 lg:col-start-1 lg:row-span-1 lg:row-start-1 lg:flex"
          }
        >
          <h1 className="3xl:text-3xl 2xl:text-2xl xl:text-xl lg:text-lg">
            Palette Lab
          </h1>
        </div>
        <nav
          className={
            "3xl:h-[6.5rem] 3xl:w-[calc(100vw-22rem-10px)] " +
            "2xl:h-[5.125rem] 2xl:w-[calc(100vw-17.75rem-10px)] " +
            "xl:h-[4.25rem] xl:w-[calc(100vw-15rem-10px)] " +
            "lg:h-[3.75rem] lg:w-[calc(100vw-13rem-10px)] " +
            "lg:fixed max-lg:hidden z-50 right-0 row-span-1 row-start-1 lg:col-span-1 lg:col-start-2"
          }
        >
          <SubHeader />
        </nav>
        <main className="lg:block hidden relative w-[calc(100%-10px)] ml-[14px] row-span-2 row-start-1 md:col-start-2">
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, transparent 20%, transparent 80%, black 100%)",
              maskImage:
                "linear-gradient(to bottom, black 0%, transparent 20%, transparent 80%, black 100%)"
            }}
            className="fixed z-40 pointer-events-none bg-background size-full top:0"
          />
          <Main />
        </main>
        <aside
          className={
            "3xl:w-[22rem] 2xl:w-[17.75rem] xl:w-[15rem] lg:w-[13rem] " +
            "z-40 lg:fixed max-lg:hidden h-screen bottom-0 row-span-1 row-start-3 md:col-span-1 md:col-start-1 md:row-start-1 md:row-span-2"
          }
        >
          <Generator />
        </aside>
        <div
          id="cursor-gradient"
          className={
            "absolute z-10 rounded-full pointer-events-none 3xl:size-[56rem] 2xl:size[55rem] xl:size-[40rem] lg:size-[30rem] transition-opacity -translate-x-1/2 -translate-y-1/2 " +
            "bg-[radial-gradient(hsla(from_hsl(var(--primary))_h_s_calc(l_*_0.5)_/_0.3)_0%,_rgba(36,_36,_36,_0)_50%)]"
          }
        />
      </div>
      <div className="absolute w-screen row-span-1 row-start-2 text-center top-1/2 lg:hidden">
        <h1>Please Visit Website on Desktop</h1>
      </div>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
