import { useContext } from "react";
import { generateColor } from "../utils/generateColor";
import { ColorContext } from "../ColorProvider";

const SubHeader = () => {
  const context = useContext(ColorContext);
  const { colors, setColors } = context!;

  return (
    <>
      <h1>Press the spacebar to generate color palettes!</h1>
      <button
        className="z-10 mx-2 border border-green-500"
        tabIndex={-1}
        onClick={() => {
          console.log("clicked add");
          const isMaxLength = colors.length + 1 > 6 ? true : false;
          if (isMaxLength) return;
          const newColor = generateColor();
          setColors([...colors, newColor]);
        }}
      >
        Add Column
      </button>
      <button
        className="z-10 border border-red-500"
        tabIndex={-1}
        onClick={() => {
          console.log("clicked remove");

          const isMinLength = colors.length - 1 < 3 ? true : false;
          if (isMinLength) return;
          const newColors = [...colors];
          newColors.pop();
          setColors(newColors);
        }}
      >
        Remove Column
      </button>
    </>
  );
};

export default SubHeader;
