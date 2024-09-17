import { getTextColor } from "../utils/getTextColor";
import Lock from "./Lock";
import SwitchColors from "./SwitchColors";

interface Props {
  color: string;
  label: string;
  index: number;
  isLast?: boolean;
}

const Color = ({ color, label, index, isLast = false }: Props) => {
  const textColor = getTextColor(color);
  return (
    <div className="relative flex flex-col w-full mb-2">
      <div
        style={{
          backgroundColor: `#${color}`,
          border: `1px solid hsl(from ${textColor} h s calc(l * 0.6))`
        }}
        className={`flex w-full group justify-start px-2 items-center h-10 rounded-xl`}
      >
        {textColor && (
          <div className="flex items-center justify-between w-full">
            <h1 style={{ color: textColor }} className="text-xl">
              {color}
            </h1>
            <Lock color={color} bg={textColor} />
          </div>
        )}
      </div>
      <h1 className="pl-1 text-sm italic">{label}</h1>
      {!isLast && (
        <SwitchColors
          index={index}
          className="absolute -bottom-[.6rem] left-[45%] transition-opacity opacity-0 hover:opacity-100"
        />
      )}
    </div>
  );
};

export default Color;
