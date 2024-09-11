import { useState } from "react";
import Generator from "./generator/Generator";
import SubHeader from "./sub_header/SubHeader";

function App() {
  const [colors, setColors] = useState(3);

  return (
    <>
      <div className="grid md:grid-rows-[3.75rem_3.5rem_calc(100vh-3.75rem-3.5rem)] grid-rows-[3.75rem_calc(100vh-3.75rem-3.5rem)_3.5rem]">
        <div className="flex items-center row-span-1 row-start-1 border border-white">
          <h1>App Name</h1>
        </div>
        <div className="flex items-center row-span-1 row-start-3 border border-white md:row-start-2">
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
