interface Props {
  cols: number;
}

const Generator = ({ cols }: Props) => {
  return <h1>{cols}</h1>;
};

export default Generator;
