const SearchBar = () => {
  return (
    <div className="w-full max-w-240 flex flex-col items-center p-5 gap-5 bg-(--white) rounded-2xl">
      <div className="w-full flex flex-col md:flex-row items-center gap-3">
        <input type="text" className="w-full border border-(--text-normal) focus:outline-(--indigo) px-5 py-3 rounded-lg" placeholder="Destination" />
        <input type="date" className="w-full border border-(--text-normal) focus:outline-(--indigo) px-5 py-3 rounded-lg text-(--text-normal)" placeholder="mm/dd/yyyy" />
        <input type="number" className="w-full border border-(--text-normal) focus:outline-(--indigo) px-5 py-3 rounded-lg" placeholder="Budget" />
      </div>
      <button className="w-full bg-(--indigo) text-(--white) hover:bg-(--hover) rounded-lg py-3 font-semibold text-md cursor-pointer">Search Offers</button>
    </div>
  );
};

export default SearchBar;
