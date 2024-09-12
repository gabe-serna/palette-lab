import Color from "./Color";

interface Props {
  colors: string[];
}

const Generator = ({ colors = [] }: Props) => {
  return (
    <>
      <div className="flex flex-row w-full h-full md:flex-col">
        {colors.map((color, index) => (
          <Color key={index} color={color} />
        ))}
      </div>
    </>
  );
};

export default Generator;
