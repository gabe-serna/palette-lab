import Color from "./Color";

interface Props {
  colors: number;
}

const Generator = ({ colors }: Props) => {
  return (
    <>
      <div className="flex flex-col w-full h-full md:flex-row">
        {Array.from({ length: colors }).map((_, index) => (
          <Color
            key={index}
            color={Math.floor(Math.random() * 16777215).toString(16)}
          />
        ))}
      </div>
    </>
  );
};

export default Generator;
