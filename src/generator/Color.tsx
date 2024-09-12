import { getTextColor } from "../utils/getTextColor";
import { useEffect, useState } from "react";
import axios from "axios";

interface Props {
  color: string;
}

const Color = ({ color }: Props) => {
  const textColor = getTextColor(color);
  const [colorName, setColorName] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    const getColorName = (color: string) => {
      axios
        .get(`https://www.thecolorapi.com/id?hex=${color}`)
        .then(res => {
          const name = res.data.name.value as string;
          setColorName(name);
          setIsFetching(false);
          return;
        })
        .catch(err => {
          console.error(err);
          setColorName("Color");
          setIsFetching(false);
          return;
        });
    };

    getColorName(color);
  }, [color]);
  return (
    <div
      style={{ backgroundColor: `#${color}` }}
      className={`flex justify-center items-center w-full h-full`}
    >
      {!isFetching && (
        <div className="flex flex-col items-center">
          <h1 style={{ color: textColor }} className="mb-2 text-3xl">
            {color}
          </h1>
          <p
            style={{ color: textColor }}
            className="text-sm italic font-light opacity-70"
          >
            {colorName}
          </p>
        </div>
      )}
    </div>
  );
};

export default Color;
