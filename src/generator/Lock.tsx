import { ColorContext } from "@/ColorProvider";
import { useContext, useRef } from "react";

interface Props {
  lockColor: string;
  bg: string;
}

const Lock = ({ lockColor, bg }: Props) => {
  const isLocked = useRef(false);

  const context = useContext(ColorContext);
  const { colors, setColors, setRedoTree } = context!;

  colors.forEach(color => {
    if (color.color == lockColor) {
      isLocked.current = color.locked;
    }
  });

  const classes = !isLocked.current
    ? "opacity-0 group-hover:opacity-40"
    : "opacity-80";

  return (
    <button
      className={
        "absolute right-2 transition-opacity pointer-events-auto size-6 " + classes
      }
      type="button"
      onClick={event => {
        const target = event.currentTarget as HTMLButtonElement;
        target.blur();

        const newColors = colors.map(color => {
          if (color.color === lockColor) {
            return { ...color, locked: !color.locked };
          }
          return color;
        });
        setRedoTree([]);
        setColors(newColors);
      }}
    >
      {!isLocked && (
        <svg
          id="Layer_2"
          data-name="Layer 2"
          style={{ stroke: bg }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            className="cls-1"
            d="m18.135,9.5h-9.635v-3.5c0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5c0,.276.224.5.5.5s.5-.224.5-.5c0-2.481-2.019-4.5-4.5-4.5s-4.5,2.019-4.5,4.5v3.5h-1.635c-1.304,0-2.365,1.062-2.365,2.365v8.27c0,1.304,1.062,2.365,2.365,2.365h12.27c1.304,0,2.365-1.062,2.365-2.365v-8.27c0-1.304-1.062-2.365-2.365-2.365Zm1.365,10.635c0,.753-.612,1.365-1.365,1.365H5.865c-.753,0-1.365-.612-1.365-1.365v-8.27c0-.753.612-1.365,1.365-1.365h12.27c.753,0,1.365.612,1.365,1.365v8.27Z"
          />
        </svg>
      )}
      {isLocked && (
        <svg
          id="Layer_2"
          data-name="Layer 2"
          style={{ stroke: bg }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            className="cls-1"
            d="m18.135,9.5h-1.635v-3.5c0-2.481-2.019-4.5-4.5-4.5s-4.5,2.019-4.5,4.5v3.5h-1.635c-1.304,0-2.365,1.061-2.365,2.365v8.271c0,1.304,1.061,2.365,2.365,2.365h12.27c1.304,0,2.365-1.061,2.365-2.365v-8.271c0-1.304-1.062-2.365-2.365-2.365Zm-9.635-3.5c0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5v3.5h-7v-3.5Zm11,14.135c0,.752-.612,1.365-1.365,1.365H5.865c-.752,0-1.365-.612-1.365-1.365v-8.271c0-.752.612-1.365,1.365-1.365h12.27c.753,0,1.365.612,1.365,1.365v8.271Z"
          />
        </svg>
      )}
    </button>
  );
};

export default Lock;
