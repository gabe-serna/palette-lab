function App() {
  return (
    <>
      <div className="grid md:grid-rows-[3.75rem_3.5rem_calc(100vh-3.75rem-3.5rem)] grid-rows-[3.75rem_calc(100vh-3.75rem-3.5rem)_3.5rem]">
        <div className="flex items-center row-span-1 row-start-1 border border-white">
          <h1>App Name</h1>
        </div>
        <div className="flex items-center row-span-1 row-start-3 border border-white md:row-start-2">
          Sub Header
        </div>
        <div className="row-span-1 row-start-2 border border-white md:row-start-3">
          <h2>Body</h2>
        </div>
      </div>
    </>
  );
}

export default App;
