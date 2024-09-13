import { useContext } from "react";
import { ColorContext } from "../ColorProvider";
import Color from "./Color";
import AddColor from "./AddColor";
import ModeToggle from "./ModeToggle";
import RemoveColor from "./RemoveColor";

const Generator = () => {
  const context = useContext(ColorContext);
  const { colors } = context!;

  const labels = [
    "Background",
    "Foreground",
    "Accent",
    "Primary",
    "Secondary",
    "Tertiary"
  ];

  return (
    <>
      <div className="flex flex-row items-center w-full gap-2 px-4 pt-8 h-min md:flex-col">
        {colors.map((color, index) => (
          <Color key={index} color={color.color} label={labels[index]} />
        ))}
        <div className="flex justify-between w-full px-6">
          <AddColor />
          <RemoveColor />
        </div>
      </div>
      <div className="p-6 mt-4">
        <ModeToggle />
      </div>
    </>
  );
};

export default Generator;
