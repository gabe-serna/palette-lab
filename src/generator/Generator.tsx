import { useContext } from "react";
import { ColorContext } from "../ColorProvider";
import Color from "./Color";
import AddColor from "./AddColor";
import RemoveColor from "./RemoveColor";
import UndoButton from "./UndoButton";
import RedoButton from "./RedoButton";
import Export from "./export/Export";
import ExportProvider from "@/ExportProvider";

const Generator = () => {
  const context = useContext(ColorContext);
  const { colors } = context!;

  const labels = [
    "Background",
    "Foreground",
    "Primary",
    "Secondary",
    "Accent",
    "Accent 2"
  ];

  return (
    <div
      id="aside-container"
      style={{
        boxShadow:
          "10px 0 40px -5px hsl(from hsl(var(--primary)) h calc(s * 0.75) calc(l * .5))"
      }}
      className={
        "3xl:pt-[6.5rem] 2xl:pt-[5.125rem] xl:pt-[4.25rem] lg:pt-[3.75rem] " +
        "flex flex-col justify-between w-full h-full bg-background"
      }
    >
      <div
        className={
          "3xl:px-6 2xl:px-5 xl:px-4 lg:px-[0.875rem] " +
          "flex flex-row items-center w-full gap-2 pt-8 h-min lg:flex-col"
        }
      >
        {colors.map((color, index) => {
          return (
            <Color
              id={color.color}
              key={index}
              label={labels[index]}
              index={index}
            />
          );
        })}
        <div className="flex justify-between w-full px-6">
          <AddColor />
          <RemoveColor />
        </div>
      </div>
      <div className="flex justify-between px-10 py-6 mt-4">
        {/* <ModeToggle /> */}
        <UndoButton />
        <RedoButton />
        <ExportProvider>
          <Export />
        </ExportProvider>
      </div>
    </div>
  );
};

export default Generator;
