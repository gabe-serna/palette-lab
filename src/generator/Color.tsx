import { getTextColor } from "../utils/getTextColor";

interface Props {
  color: string;
}

const Color = ({ color }: Props) => {
  const textColor = getTextColor(color);
  return (
    <div
      style={{ backgroundColor: `#${color}` }}
      className={`flex justify-center items-end pb-28 w-full h-full`}
    >
      <h1 style={{ color: textColor }} className="text-3xl">
        {color}
      </h1>
    </div>
  );
};

export default Color;
