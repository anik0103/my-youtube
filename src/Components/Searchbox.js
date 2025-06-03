
const Searchbox = () => {
  return (
    <div className="flex items-center justify-center flex-row">
      <div>
        <input
          type="text"
          placeholder="Search"
          className=" border w-80 rounded-tl-full rounded-bl-full p-0.5"/>
      </div>
      <button className="w-7 border rounded-tr-full rounded-br-full p-0.5 bg-slate-300">🔍</button>
    </div>
  );
};

export default Searchbox;
