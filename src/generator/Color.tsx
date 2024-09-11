interface Props {
  color: string;
}

const Color = ({ color }: Props) => {
  return (
    <div style={{ backgroundColor: `${color}` }} className={`w-full h-full`}></div>
  );
};

export default Color;
