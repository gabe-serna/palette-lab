interface Props {
  color: string;
}

const Color = ({ color }: Props) => {
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className={`w-full h-full border border-gray-300`}
    ></div>
  );
};

export default Color;
