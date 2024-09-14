const SubHeader = () => {
  return (
    <div className="relative flex items-center justify-center gap-8 px-4 py-2 size-full">
      <h1 className="z-30">Docs</h1>
      <h1 className="z-30">Themes</h1>
      <h1 className="z-30">Contact</h1>
      <div
        style={{
          WebkitMaskImage: "linear-gradient(black 65%, transparent 100%)",
          maskImage: "linear-gradient(black 65%, transparent 100%)"
        }}
        className="absolute backdrop-blur-lg size-full"
      >
        <div className="absolute size-full backdrop-blur-lg" />
      </div>
    </div>
  );
};

export default SubHeader;
