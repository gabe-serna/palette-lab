import { getTextColor } from "../utils/getTextColor";
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
  return (
    <div id={id} className="relative flex flex-col w-full mb-2">
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
        <div className="absolute flex justify-center items-center w-full h-8 -bottom-[.8rem] transition-opacity opacity-0 hover:opacity-100">
          <SwitchColors index={index} switchColor={color} />
        </div>
      )}
    </div>
  );
};

export default Color;
