import { getTextColor } from "../utils/getTextColor";
import Lock from "./Lock";

interface Props {
  color: string;
  label: string;
}

const Color = ({ color, label }: Props) => {
  const textColor = getTextColor(color);
  return (
    <div className="flex flex-col w-full mb-2">
      <div
        style={{ backgroundColor: `#${color}` }}
        className={`flex w-full group justify-start px-2 items-center h-10 rounded-lg`}
      >
        {textColor && (
          <div className="flex items-center justify-between w-full">
            <h1 style={{ color: textColor }} className="text-xl">
              {color}
            </h1>
            <Lock color={color} />
          </div>
        )}
      </div>
      <h1 className="pl-1 text-sm italic">{label}</h1>
    </div>
  );
};

export default Color;
