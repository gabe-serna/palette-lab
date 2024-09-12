import { useEffect, useState } from "react";
import Generator from "./generator/Generator";
import SubHeader from "./sub_header/SubHeader";
import { generateColors } from "./utils/generateColor";

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
      <div className="grid md:grid-rows-[3.75rem_3.5rem_calc(100vh-3.75rem-3.5rem)] grid-rows-[3.75rem_calc(100vh-3.75rem-3.5rem)_3.5rem]">
        <div className="flex items-center row-span-1 row-start-1 px-4 py-2 border border-white">
          <h1>Palette Lab</h1>
        </div>
        <div className="flex items-center row-span-1 row-start-3 px-4 py-2 border border-white md:row-start-2">
          <SubHeader colors={colors} setColors={setColors} />
        </div>
        <div className="row-span-1 row-start-2 border border-white md:row-start-3">
          <Generator colors={colors} />
        </div>
      </div>
    </>
  );
}

export default App;
