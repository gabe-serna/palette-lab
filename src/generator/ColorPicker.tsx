import { useState } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";

interface Props {
  id: string;
  className?: string;
}

const ColorPicker = ({ id, className }: Props) => {
  const [color, setColor] = useState("#aabbcc");
  return (
    <div
      id={id}
      style={{
        boxShadow: "0px 0px 20px 10px hsl(from hsl(var(--primary)) h s calc(l / 2))"
      }}
      className={
        className +
        " relative border-4 rounded-xl w-min h-min border-primary bg-background"
      }
    >
      <div className="absolute -left-[1.5rem] z-10 w-0 h-0 border-y-[20px] border-y-transparent border-r-[1.5rem] border-r-primary" />
      <HexColorPicker color={color} onChange={setColor} />
      <HexColorInput
        color={color}
        onChange={setColor}
        className="w-[90%] bg-transparent rounded-xl my-1 pl-1 ml-1 focus:outline-none text-foreground"
      />
    </div>
  );
};

export default ColorPicker;
