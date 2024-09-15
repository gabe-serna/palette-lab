import { useContext, useEffect } from "react";
import Generator from "./generator/Generator";
import SubHeader from "./sub_header/SubHeader";
import { generateNewColors } from "./utils/generateColor";
import Main from "./main/Main";
import { ColorContext } from "./ColorProvider";
import { ThemeProvider } from "./components/theme-provider";
import { useSearchParams } from "react-router-dom";
import getColorParams from "./utils/getColorParams";

function App() {
  const [, setSearchParams] = useSearchParams();

  const context = useContext(ColorContext);
  const { colors, setColors, setRedoTree } = context!;

  const randomizeColors = () => {
    setRedoTree([]);
    setColors(prevColors => {
      const newColors = generateNewColors(prevColors);
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

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="grid bg-background md:grid-rows-[3.75rem_calc(100vh-3.75rem)] md:grid-cols-[15rem_calc(100vw-15rem)] grid-rows-[3.75rem_calc(100vh-3.75rem-3.5rem)_3.5rem]">
        <div className="fixed items-center h-[3.75rem] w-[15rem] justify-center hidden md:col-span-1 md:col-start-1 md:row-span-1 md:row-start-1 md:flex">
          <h1 className="text-xl">Palette Lab</h1>
        </div>
        <nav className="fixed z-20 h-[3.75rem] w-[calc(100vw-15rem-10px)] right-0 row-span-1 row-start-1 md:col-span-1 md:col-start-2">
          <SubHeader />
        </nav>
        <main className="row-span-2 row-start-1 md:col-start-2">
          <Main />
        </main>
        <aside className="fixed w-[15rem] h-screen bottom-0 row-span-1 row-start-3 md:col-span-1 md:col-start-1 md:row-start-1 md:row-span-2">
          <Generator />
        </aside>
      </div>
    </ThemeProvider>
  );
}

export default App;
