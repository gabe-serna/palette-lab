import { useContext, useEffect, useState } from "react";
import Generator from "./generator/Generator";
import SubHeader from "./sub_header/SubHeader";
import { generateColor } from "./utils/generateColor";
import Main from "./main/Main";
import { ColorContext } from "./ColorProvider";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  const [spacebar, setSpacebar] = useState(0);
  const context = useContext(ColorContext);
  const { setColors } = context!;

  const randomizeColors = () => {
    setColors(prevColors => {
      const newColors = prevColors.map(color => {
        if (color.locked) return color;
        const newColor = generateColor();
        return { ...color, color: newColor.color };
      });
      return newColors;
    });
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === " ") randomizeColors();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    randomizeColors();
    return () => {
      randomizeColors();
    };
  }, [spacebar]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="grid bg-background md:grid-rows-[3.75rem_calc(100vh-3.75rem)] md:grid-cols-[15rem_calc(100vw-15rem)] grid-rows-[3.75rem_calc(100vh-3.75rem-3.5rem)_3.5rem]">
        <div className="items-center justify-center hidden border border-white md:col-span-1 md:col-start-1 md:row-span-1 md:row-start-1 md:flex">
          <h1 className="text-xl">Palette Lab</h1>
        </div>
        <nav className="flex items-center justify-center row-span-1 row-start-1 px-4 py-2 border border-white md:col-span-1 md:col-start-2">
          <SubHeader />
        </nav>
        <main className="row-start-2 md:col-start-2">
          <Main setState={setSpacebar} />
        </main>
        <aside className="row-span-1 row-start-3 border border-white md:col-span-1 md:col-start-1 md:row-start-2">
          <Generator />
        </aside>
      </div>
    </ThemeProvider>
  );
}

export default App;
