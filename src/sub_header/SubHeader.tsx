import { generateColor } from "../utils/generateColor";

interface Props {
  colors: string[];
  setColors: React.Dispatch<React.SetStateAction<string[]>>;
}

const SubHeader = ({ colors, setColors }: Props) => {
  return (
    <>
      <h1>Sub Header</h1>
      <button
        className="mx-2 border border-green-500"
        tabIndex={-1}
        onClick={() => {
          const isMaxLength = colors.length + 1 > 10 ? true : false;
          if (isMaxLength) return;
          const newColor = generateColor();
          setColors([...colors, newColor]);
        }}
      >
        Add Column
      </button>
      <button
        className="border border-red-500"
        tabIndex={-1}
        onClick={() => {
          const isMinLength = colors.length - 1 < 3 ? true : false;
          if (isMinLength) return;
          const newColors = [...colors];
          newColors.pop();
          setColors(newColors);
        }}
      >
        Remove Column
      </button>
    </>
  );
};

export default SubHeader;
