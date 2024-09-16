const SubHeader = () => {
  return (
    <section className="relative z-20 flex items-center justify-center gap-8 px-4 py-2 size-full">
      <h1 className="z-30 font-thin">
        <a href="#">Gallery</a>
      </h1>
      <h1 className="z-30 font-thin">
        <a href="#">Themes</a>
      </h1>
      <h1 className="z-30 font-thin">
        <a href="#">Contact</a>
      </h1>
      <div
        style={{
          WebkitMaskImage: "linear-gradient(black 60%, transparent 100%)",
          maskImage: "linear-gradient(black 60%, transparent 100%)"
        }}
        className="absolute backdrop-blur-lg size-full"
      >
        <div className="absolute size-full backdrop-blur-lg" />
      </div>
    </section>
  );
};

export default SubHeader;
