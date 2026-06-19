interface FilterProps {
  onlyDiscounted: boolean;
  setOnlyDiscounted: (val: boolean) => void;
  lastMinuteOnly: boolean;
  setLastMinuteOnly: (val: boolean) => void;
}

const Filter = ({
  onlyDiscounted,
  setOnlyDiscounted,
  lastMinuteOnly,
  setLastMinuteOnly,
}: FilterProps) => {
  return (
    <div className="w-full md:w-64 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4 h-fit">
      <h3 className="text-lg font-semibold text-(--heading)">Filters</h3>
      
      <div className="flex flex-col gap-4">
        {/* Only Discounted Filter */}
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-500 font-medium">Only Discounted</label>
          <div className="flex items-center mt-1">
            <input
              type="checkbox"
              id="discounted"
              checked={onlyDiscounted}
              onChange={(e) => setOnlyDiscounted(e.target.checked)}
              className="w-5 h-5 accent-(--indigo) rounded cursor-pointer border-gray-300"
            />
          </div>
        </div>

        {/* Last Minute Only Filter */}
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-500 font-medium">Last Minute Only</label>
          <div className="flex items-center mt-1">
            <input
              type="checkbox"
              id="lastMinute"
              checked={lastMinuteOnly}
              onChange={(e) => setLastMinuteOnly(e.target.checked)}
              className="w-5 h-5 accent-(--indigo) rounded cursor-pointer border-gray-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;