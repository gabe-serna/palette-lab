interface Props {
  cols: number;
  setCols: React.Dispatch<React.SetStateAction<number>>;
}

const SubHeader = ({ cols, setCols }: Props) => {
  return (
    <>
      <h1>Sub Header</h1>
      <button className="border border-blue-300" onClick={() => setCols(cols + 1)}>
        Add Column
      </button>
    </>
  );
};

export default SubHeader;
