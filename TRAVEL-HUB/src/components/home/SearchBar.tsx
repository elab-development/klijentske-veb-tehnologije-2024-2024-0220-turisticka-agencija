const SearchBar = () => {
  return (
    <div className="w-full max-w-240 flex flex-col items-center p-5 gap-3 bg-(--white) rounded-2xl">
      <div className="w-full flex flex-col md:flex-row items-center gap-3">
        <input type="text" className="w-full border border-(--heading) px-3 py-1.5 rounded-lg" placeholder="Destination" />
        <input type="date" className="w-full border border-(--heading) px-3 py-1.5 rounded-lg" placeholder="mm/dd/yyyy" />
        <input type="number" className="w-full border border-(--heading) px-3 py-1.5 rounded-lg" placeholder="Budget" />
      </div>
      <button className="w-full bg-(--indigo) text-(--white) rounded-lg py-2.5 font-semibold text-md cursor-pointer">Search Offers</button>
    </div>
  );
};

export default SearchBar;
