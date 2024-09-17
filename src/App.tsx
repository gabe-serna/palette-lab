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
      const left = event.screenX - 240;
      const top = event.screenY - 350 + window.scrollY;
      // cursorGradient.style.left = `${left}px`;
      // cursorGradient.style.top = `${top}px`;

      const hoverKeyframes = {
        left: `${left}px`,
        top: `${top}px`
      };
      cursorGradient.animate(hoverKeyframes, {
        duration: 800,
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
          className="absolute z-10 bg-[radial-gradient(hsla(from_hsl(var(--primary))_h_s_calc(l_*_0.5)_/_0.3)_0%,_rgba(36,_36,_36,_0)_50%)] rounded-full pointer-events-none size-[30rem]"
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
