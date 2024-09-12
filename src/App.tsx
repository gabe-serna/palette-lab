import { useEffect, useState } from "react";
import Generator from "./generator/Generator";
import SubHeader from "./sub_header/SubHeader";
import { generateColors } from "./utils/generateColor";
import Main from "./main/Main";

function App() {
  const [colors, setColors] = useState(generateColors(3));

  useEffect(() => {
    const randomizeColors = (event: KeyboardEvent) => {
      if (event.key === " ") {
        setColors(prevColors => {
          const length = prevColors.length;
          const newColors = generateColors(length);
          return newColors;
        });
      }
    };

    window.addEventListener("keydown", randomizeColors);
    return () => {
      window.removeEventListener("keydown", randomizeColors);
    };
  }, []);

  return (
    <>
      <div className="grid md:grid-rows-[3.75rem_calc(100vh-3.75rem)] md:grid-cols-[15rem_calc(100vw-15rem)] grid-rows-[3.75rem_calc(100vh-3.75rem-3.5rem)_3.5rem]">
        <div className="items-center justify-center hidden border border-white md:col-span-1 md:col-start-1 md:row-span-1 md:row-start-1 md:flex">
          <h1 className="text-xl">Palette Lab</h1>
        </div>
        <nav className="flex items-center justify-center row-span-1 row-start-1 px-4 py-2 border border-white md:col-span-1 md:col-start-2">
          <SubHeader colors={colors} setColors={setColors} />
        </nav>
        <main className="row-start-2 md:col-start-2">
          <Main />
        </main>
        <aside className="row-span-1 row-start-3 border border-white md:col-span-1 md:col-start-1 md:row-start-2">
          <Generator colors={colors} />
        </aside>
      </div>
    </>
  );
}

export default App;
