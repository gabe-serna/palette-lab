interface Props {
  setState: React.Dispatch<React.SetStateAction<number>>;
}

const Main = ({ setState }: Props) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center size-full bg-gradient-to-b from-[hsl(from_#4595D3_h_calc(s_*_0.75)_calc(l_*_.4))] to-[hsl(var(--background))] to-5%">
        <div className="relative flex justify-center w-full h-32">
          <h1
            style={{ textShadow: "3px 3px 10px rgba(0, 0, 0, 0.5)" }}
            className="absolute z-10 text-transparent text-9xl"
          >
            Inspiration
          </h1>
          <h1 className="absolute text-9xl bg-gradient-to-l from-[#4595D3] from-10% to-[#7D52B3] to-80% bg-clip-text text-transparent z-10">
            Inspiration
          </h1>
        </div>
        <h2 className="z-10 mt-4 text-4xl">at the press of a button</h2>
        <button
          type="button"
          className=" text-lg mt-16 bg-gradient-to-b from-[#4595D3] to-[hsla(from_#4595D3_h_s_calc(l_*_0.75)_/_0.3)] px-[3.25rem] py-[0.675rem] rounded-2xl z-10"
          onClick={() => setState(prev => prev + 1)}
        >
          Press Space
        </button>
        <div className="absolute top-10 left-60 size-[60%] bg-[radial-gradient(closest-corner_at_40%_50%,_rgba(59,_43,_79,_0.7)_0%,_rgba(36,_36,_36,_0)_50%)] -rotate-[25deg] z-0" />
        <div className="absolute top-40 -right-10 size-1/2 bg-[radial-gradient(closest-corner_at_40%_50%,_hsla(from_#4595D3_h_s_calc(l_*_0.75)_/_0.3)_0%,_rgba(36,_36,_36,_0)_60%)] rotate-6 z-0" />
      </div>
      <div className="size-full" />
    </>
  );
};

export default Main;
