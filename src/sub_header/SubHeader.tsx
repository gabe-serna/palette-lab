const SubHeader = () => {
  return (
    <section className="relative z-20 flex items-center justify-center gap-8 px-4 py-2 size-full">
      <h1 className="z-30 font-thin 3xl:text-[1.625rem] 2xl:text-xl">
        <a href="#">Gallery</a>
      </h1>
      <h1 className="z-30 font-thin 3xl:text-[1.625rem] 2xl:text-xl">
        <a href="#">Themes</a>
      </h1>
      <h1 className="z-30 font-thin 3xl:text-[1.625rem] 2xl:text-xl">
        <a href="#">Contact</a>
      </h1>
      <div
        style={{
          WebkitMaskImage: "linear-gradient(black 55%, transparent 100%)",
          maskImage: "linear-gradient(black 55%, transparent 100%)"
        }}
        className="absolute backdrop-blur-lg w-full h-[200%]"
      />
    </section>
  );
};

export default SubHeader;
