import { getTextColor } from "../utils/getTextColor";
import Lock from "./Lock";

interface Props {
  color: string;
}

const Color = ({ color }: Props) => {
  const textColor = getTextColor(color);
  return (
    <div
      style={{ backgroundColor: `#${color}` }}
      className={`flex group justify-start px-2 items-center w-4/5 h-10 rounded-lg`}
    >
      {textColor && (
        <div className="flex justify-between w-full">
          <h1 style={{ color: textColor }} className="text-xl">
            {color}
          </h1>
          <Lock />
        </div>
      )}
    </div>
  );
};

export default Color;
