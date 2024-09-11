interface Props {
  colors: number;
  setColors: React.Dispatch<React.SetStateAction<number>>;
}

const SubHeader = ({ colors, setColors }: Props) => {
  return (
    <>
      <h1>Sub Header</h1>
      <button
        className="mx-2 border border-green-500"
        onClick={() => {
          const newCols = colors + 1 > 10 ? 10 : colors + 1;
          setColors(newCols);
        }}
      >
        Add Column
      </button>
      <button
        className="border border-red-500"
        onClick={() => {
          const newCols = colors - 1 < 3 ? 3 : colors - 1;
          setColors(newCols);
        }}
      >
        Remove Column
      </button>
    </>
  );
};

export default SubHeader;
