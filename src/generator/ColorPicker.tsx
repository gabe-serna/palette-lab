import { ColorContext } from "@/ColorProvider";
import { getTextColor } from "@/utils/getTextColor";
import { useContext, useEffect, useState } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";

interface Props {
  index: number;
  className?: string;
}

const ColorPicker = ({ index, className }: Props) => {
  const context = useContext(ColorContext);
  const { colors } = context!;

  const [color, setColor] = useState(colors[index].color);
  const textColor = getTextColor(color);
  const bgColor = "#" + color.replace(/^#/, "");

  useEffect(() => {
    setColor(colors[index].color);
  }, [colors]);

  return (
    <div
      id={"picker-" + index}
      style={{
        boxShadow: "0px 0px 20px 10px hsl(from hsl(var(--primary)) h s calc(l / 2))",
        backgroundColor: bgColor
      }}
      className={
        className + " relative border-4 rounded-xl w-min h-min border-primary"
      }
    >
      <div className="absolute -left-[1.5rem] z-0 w-0 h-0 border-y-[20px] border-y-transparent border-r-[1.5rem] border-r-primary" />
      <HexColorPicker color={color.toUpperCase()} onChange={setColor} />
      {color && (
        <HexColorInput
          id={"input-" + index}
          color={color.toUpperCase()}
          style={{ color: textColor }}
          onChange={setColor}
          className="w-[90%] bg-transparent rounded-xl my-1 pl-1 ml-1 focus:outline-none transition-colors"
        />
      )}
    </div>
  );
};

export default ColorPicker;
