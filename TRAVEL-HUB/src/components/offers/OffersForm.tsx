import { useState } from "react";
import { useAppContext } from "../../hooks/useAppContext";
import Filter from "./Filters";
import ArrangementCard from "../global/ArrangementCard";

const Offers = () => {
  const { arrangements } = useAppContext();

  const [onlyDiscounted, setOnlyDiscounted] = useState<boolean>(false);
  const [lastMinuteOnly, setLastMinuteOnly] = useState<boolean>(false);

  const filteredArrangements = arrangements.filter((arrangement) => {
    if (onlyDiscounted && !arrangement.hotDiscount) {
      return false;
    }
    if (lastMinuteOnly && !arrangement.isLastMinute) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-28 py-10">
        
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-(--heading)">Offers</h1>
          <p className="text-sm font-medium text-gray-600">
            {filteredArrangements.length}{" "}
            {filteredArrangements.length === 1 ? "offer found" : "offers found"}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          <Filter
            onlyDiscounted={onlyDiscounted}
            setOnlyDiscounted={setOnlyDiscounted}
            lastMinuteOnly={lastMinuteOnly}
            setLastMinuteOnly={setLastMinuteOnly}
          />

          <div className="flex-1 w-full">
            {filteredArrangements.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArrangements.map((arrangement) => (
                  <ArrangementCard key={arrangement.id} arrangement={arrangement} />
                ))}
              </div>
            ) : (
              <div className="w-full text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-gray-500 text-lg">No offers match your criteria.</p>
              </div>
            )}
          </div>

        </div>
      </main>

    </div>
  );
};

export default Offers;