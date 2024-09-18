import { useContext, useEffect, useState } from "react";
import { getTextColor } from "../utils/getTextColor";
import ColorPicker from "./ColorPicker";
import Lock from "./Lock";
import SwitchColors from "./SwitchColors";
import { ColorContext } from "@/ColorProvider";
import updateColorVariables from "@/utils/updateColorVariables";

interface Props {
  id: string;
  label: string;
  index: number;
  isLast?: boolean;
}

const Color = ({ id, label, index, isLast = false }: Props) => {
  const context = useContext(ColorContext);
  const { colors, setColors, setRedoTree } = context!;

  const color = colors[index].color;
  const textColor = getTextColor(color);

  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const pickerVisibility = isPickerVisible
    ? "block opacity-100 "
    : "hidden opacity-0 ";

  useEffect(() => {
    const colorDiv = document.getElementById("color-" + index)!;
    const picker = document.getElementById("picker-" + index)!;
    const input = document.getElementById("input-" + index)! as HTMLInputElement;

    const handlePicker = (action: "open" | "close", picker: HTMLElement) => {
      let keyframes;
      if (action === "open") {
        keyframes = [
          { display: "none", opacity: "0" },
          { display: "block", opacity: "1" }
        ];
        picker.animate(keyframes, {
          duration: 100,
          fill: "forwards"
        });
        setIsPickerVisible(true);
        return;
      }
      // Close Picker
      keyframes = [
        { display: "block", opacity: "1" },
        { display: "none", opacity: "0" }
      ];
      picker.animate(keyframes, {
        duration: 100,
        fill: "forwards"
      });
      setIsPickerVisible(false);

      const newColors = JSON.parse(JSON.stringify(colors));
      const pickerColor = input.value;
      if (newColors[index].color !== pickerColor) {
        newColors[index].color = pickerColor;
        updateColorVariables(newColors);
        setRedoTree([]);
        // setUndoTree(prev => [...prev, { history: newColors }]);
        setColors(newColors);
      }
    };

    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof HTMLDivElement)) {
        if (event.target === input) return;
        if (isPickerVisible) handlePicker("close", picker);
        return;
      }

      if (event.target.id === colorDiv.id) {
        if (isPickerVisible) {
          handlePicker("close", picker);
          return;
        } else handlePicker("open", picker);
      } else if (colorDiv.contains(event.target)) return;
      else if (isPickerVisible) {
        handlePicker("close", picker);
      } else return;
    };

    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [isPickerVisible]);

  return (
    <div id={id} className="relative flex flex-col w-full mb-2">
      <div
        id={"color-" + index}
        style={{
          backgroundColor: `#${color}`,
          border: `1px solid hsl(from ${textColor} h s calc(l * 0.6))`
        }}
        className={`flex w-full group justify-start px-2 items-center h-10 rounded-xl`}
      >
        {textColor && (
          <div className="flex items-center justify-between w-full pointer-events-none ">
            <h1 style={{ color: textColor }} className="text-xl">
              {color.toUpperCase()}
            </h1>
            <Lock color={color} bg={textColor} />
          </div>
        )}
        <ColorPicker
          index={index}
          parentColor={color}
          className={pickerVisibility + "transition-opacity left-44 top-24"}
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
