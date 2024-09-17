import { useState } from "react";
import { getTextColor } from "../utils/getTextColor";
import ColorPicker from "./ColorPicker";
import Lock from "./Lock";
import SwitchColors from "./SwitchColors";

interface Props {
  id: string;
  color: string;
  label: string;
  index: number;
  isLast?: boolean;
}

const Color = ({ id, color, label, index, isLast = false }: Props) => {
  const textColor = getTextColor(color);
  const [isFocused, setIsFocused] = useState(false);
  const opacity = isFocused ? "block opacity-100" : "hidden";

  return (
    <div id={id} className="relative flex flex-col w-full mb-2">
      <div
        style={{
          backgroundColor: `#${color}`,
          border: `1px solid hsl(from ${textColor} h s calc(l * 0.6))`
        }}
        onClick={event => {
          if (!(event.target instanceof HTMLDivElement)) return;
          console.log(event.target);
          const picker = document.getElementById("picker-" + index)!;
          let keyframes;
          if (!isFocused) {
            keyframes = [
              { display: "none", opacity: "0" },
              { display: "block", opacity: "1" }
            ];
          } else {
            keyframes = [
              { display: "block", opacity: "1" },
              { display: "none", opacity: "0" }
            ];
          }
          picker.animate(keyframes, {
            duration: 100,
            fill: "forwards"
          });
          setIsFocused(!isFocused);
        }}
        className={`flex w-full group justify-start px-2 items-center h-10 rounded-xl`}
      >
        {textColor && (
          <div className="flex items-center justify-between w-44">
            <h1 style={{ color: textColor }} className="text-xl">
              {color}
            </h1>
            <Lock color={color} bg={textColor} />
          </div>
        )}
        <ColorPicker
          id={"picker-" + index}
          className={
            "absolute transition-opacity opacity-0 left-36 top-24 " + opacity
          }
        />
      </div>
      <h1 className="pl-1 text-sm italic">{label}</h1>
      {!isLast && (
        <div className="absolute flex justify-center items-center w-full h-8 -bottom-[.8rem] transition-opacity opacity-0 hover:opacity-100">
          <SwitchColors index={index} switchColor={color} />
        </div>
      )}
    </div>
  );
};

export default Color;
