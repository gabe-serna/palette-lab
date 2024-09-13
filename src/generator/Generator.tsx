import { useContext } from "react";
import { ColorContext } from "../ColorProvider";
import Color from "./Color";

const Generator = () => {
  const context = useContext(ColorContext);
  const { colors } = context!;
  return (
    <>
      <div className="flex flex-row items-center w-full h-full gap-2 pt-8 md:flex-col">
        {colors.map((color, index) => (
          <Color key={index} color={color} />
        ))}
      </div>
    </>
  );
};

export default Generator;
