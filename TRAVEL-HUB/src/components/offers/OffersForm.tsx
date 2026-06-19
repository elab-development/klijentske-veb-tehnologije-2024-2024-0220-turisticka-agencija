import { useState, useEffect } from "react";
import { useAppContext } from "../../hooks/useAppContext";
import Filter from "./Filters";
import ArrangementCard from "../global/ArrangementCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; 

const Offers = () => {
  const { arrangements } = useAppContext();

  const [onlyDiscounted, setOnlyDiscounted] = useState<boolean>(false);
  const [lastMinuteOnly, setLastMinuteOnly] = useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  const filteredArrangements = arrangements.filter((arrangement) => {
    if (onlyDiscounted && !arrangement.hotDiscount) return false;
    if (lastMinuteOnly && !arrangement.isLastMinute) return false;
    return true;
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [onlyDiscounted, lastMinuteOnly]);

  const totalPages = Math.ceil(filteredArrangements.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
  const currentItems = filteredArrangements.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePageClick = (pageNumber: number) => setCurrentPage(pageNumber);

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
          
          {/* FILTERI */}
          <Filter
            onlyDiscounted={onlyDiscounted}
            setOnlyDiscounted={setOnlyDiscounted}
            lastMinuteOnly={lastMinuteOnly}
            setLastMinuteOnly={setLastMinuteOnly}
          />

          <div className="flex-1 w-full flex flex-col min-h-full">
            {filteredArrangements.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  {currentItems.map((arrangement) => (
                    <div key={arrangement.id} className="flex justify-center">
                      <ArrangementCard arrangement={arrangement} />
                    </div>
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-auto">
                    <button
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                      className="flex items-center justify-center p-2 rounded-lg bg-white border border-gray-200 text-(--heading) hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <FiChevronLeft className="text-xl" />
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageClick(page)}
                        className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
                          currentPage === page
                            ? "bg-(--indigo) text-(--white) shadow-sm"
                            : "bg-white border border-gray-200 text-(--heading) hover:bg-gray-50"
                        }`}
                      >
                        {page}
                      </button>
                    ))}

                    <button
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      className="flex items-center justify-center p-2 rounded-lg bg-white border border-gray-200 text-(--heading) hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <FiChevronRight className="text-xl" />
                    </button>
                  </div>
                )}
              </>
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