import { useContext } from "react";
import { ColorContext } from "../ColorProvider";
import Color from "./Color";
import AddColor from "./AddColor";
// import ModeToggle from "./ModeToggle";
import RemoveColor from "./RemoveColor";
import UndoButton from "./UndoButton";
import RedoButton from "./RedoButton";

const Generator = () => {
  const context = useContext(ColorContext);
  const { colors } = context!;

  const labels = [
    "Background",
    "Foreground",
    "Primary",
    "Accent",
    "Accent 2",
    "Accent 3"
  ];

  return (
    <div
      id="aside-container"
      style={{
        boxShadow:
          "10px 0 40px -5px hsl(from hsl(var(--primary)) h calc(s * 0.75) calc(l * .4))"
      }}
      className="flex flex-col justify-between w-full h-full pt-[3.75rem]"
    >
      <div className="flex flex-row items-center w-full gap-2 px-4 pt-8 h-min md:flex-col">
        {colors.map((color, index) => (
          <Color key={index} color={color.color} label={labels[index]} />
        ))}
        <div className="flex justify-between w-full px-6">
          <AddColor />
          <RemoveColor />
        </div>
      </div>
      <div className="flex justify-between px-10 py-6 mt-4">
        {/* <ModeToggle /> */}
        <UndoButton />
        <RedoButton />
      </div>
    </div>
  );
};

export default Generator;
