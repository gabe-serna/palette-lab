import { useContext, useEffect } from "react";
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

  const context = useContext(ColorContext);
  const { colors, setColors, setRedoTree } = context!;

  const randomizeColors = () => {
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
    console.log("updating color params");
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
      const size = 40; //in rem
      const left = event.screenX - (size * 16) / 2;
      const top = event.screenY - size * 16 * 0.7 + window.scrollY;
      const color =
        event.pageY < 2337
          ? "radial-gradient(hsla(from hsl(var(--accent)) h s calc(l * 0.5) / 0.3) 0%, rgba(36, 36, 36, 0) 50%)"
          : "radial-gradient(hsla(from hsl(var(--secondary)) h s calc(l * 0.5) / 0.4) 0%, rgba(36, 36, 36, 0) 50%)";
      const opacity = event.pageY < 2150 || event.pageY > 2500 ? "1" : "0";

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
      <div className="grid bg-background md:grid-rows-[3.75rem_calc(100vh-3.75rem)] md:grid-cols-[15rem_calc(100vw-15rem)] grid-rows-[3.75rem_calc(100vh-3.75rem-3.5rem)_3.5rem]">
        <div className="z-40 fixed items-center h-[3.75rem] w-[15rem] justify-center hidden md:col-span-1 md:col-start-1 md:row-span-1 md:row-start-1 md:flex">
          <h1 className="text-xl">Palette Lab</h1>
        </div>
        <nav className="fixed z-50 h-[3.75rem] w-[calc(100vw-15rem-10px)] right-0 row-span-1 row-start-1 md:col-span-1 md:col-start-2">
          <SubHeader />
        </nav>
        <main className="relative row-span-2 row-start-1 md:col-start-2">
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
        <aside className="z-30 fixed w-[15rem] h-screen bottom-0 row-span-1 row-start-3 md:col-span-1 md:col-start-1 md:row-start-1 md:row-span-2">
          <Generator />
        </aside>
        <div
          id="cursor-gradient"
          className="absolute z-10 bg-[radial-gradient(hsla(from_hsl(var(--primary))_h_s_calc(l_*_0.5)_/_0.3)_0%,_rgba(36,_36,_36,_0)_50%)] rounded-full pointer-events-none size-[40rem] transition-opacity"
        />
      </div>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
