import { getTextColor } from "@/utils/getTextColor";
import { useState } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";

interface Props {
  index: number;
  parentColor: string;
  className?: string;
}

const ColorPicker = ({ index, parentColor, className }: Props) => {
  const [color, setColor] = useState(parentColor);
  const textColor = getTextColor(color);
  const bgColor = "#" + color.replace(/^#/, "");

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
