import Color from "./Color";

interface Props {
  colors: string[];
}

const Generator = ({ colors = [] }: Props) => {
  return (
    <>
      <div className="flex flex-row items-center w-full h-full gap-2 pt-2 md:flex-col">
        {colors.map((color, index) => (
          <Color key={index} color={color} />
        ))}
      </div>
    </>
  );
};

export default Generator;
