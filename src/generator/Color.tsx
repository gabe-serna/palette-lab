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
}

const Color = ({ id, label, index }: Props) => {
  const context = useContext(ColorContext);
  const { colors, setColors, setRedoTree } = context!;

  const color = colors[index].color;
  const textColor = getTextColor(color);

  let isLocked = false;
  if (index === colors.length - 1) {
    isLocked = true;
  } else {
    if (colors[index].locked) {
      isLocked = true;
    } else if (colors[index + 1].locked) {
      isLocked = true;
    }
  }

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
        setColors(newColors);
      }
    };

    const handleClick = (event: MouseEvent) => {
      if (colors[index].locked) {
        if (isPickerVisible) handlePicker("close", picker);
        return;
      }
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

    // Close out of menu when pressing enter
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === "Escape") {
        if (isPickerVisible) handlePicker("close", picker);
      }
    };

    window.addEventListener("click", handleClick);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPickerVisible, colors]);

  return (
    <div
      id={id}
      className="relative flex flex-col w-full 3xl:mb-4 2xl:mb-3 xl:mb-2 lg:mb-1"
    >
      <div
        id={"color-" + index}
        style={{
          backgroundColor: `#${color}`,
          borderColor: `hsl(from ${textColor} h s calc(l * 0.6))`
        }}
        className={
          "3xl:px-4 3xl:py-7 2xl:px-3 2xl:py-[1.4rem] xl:px-2 xl:py-0 " +
          "lg:px-2 lg:max-xl:h-9 " +
          "flex w-full group justify-start items-center h-10 rounded-xl border 3xl:border-2"
        }
      >
        {textColor && (
          <div className="flex items-center justify-between w-full pointer-events-none">
            <h1
              style={{ color: textColor }}
              className="3xl:text-3xl 2xl:text-2xl xl:text-xl lg:text-lg"
            >
              {color.toUpperCase()}
            </h1>
            <Lock lockColor={color} bg={textColor} />
          </div>
        )}
        <ColorPicker
          index={index}
          className={
            pickerVisibility +
            "transition-opacity top-24 3xl:left-60 2xl:left-[12.5rem] xl:left-44 lg:left-[9.5rem]"
          }
        />
      </div>
      <p
        className={
          "3xl:text-xl 2xl:text-base xl:text-sm lg:text-xs " +
          "pl-1 italic 2xl:mt-[1px] 3xl:mt-[3px]"
        }
      >
        {label}
      </p>
      {!isLocked && (
        <div className="absolute flex justify-center items-center w-full h-8 -bottom-[.8rem] transition-opacity opacity-0 hover:opacity-100">
          <SwitchColors index={index} switchColor={color} />
        </div>
      )}
    </div>
  );
};

export default Color;
