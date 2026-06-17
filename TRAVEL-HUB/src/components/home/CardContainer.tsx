import { useAppContext } from "../../hooks/useAppContext";
import ArrangementCard from "../global/ArrangementCard";
import { GoFlame } from "react-icons/go";
import { GoGlobe } from "react-icons/go";

const CardContainer = () => {
  const { arrangements } = useAppContext();

  const lastMinuteArrangements = arrangements.filter((ar) => ar.isLastMinute);
  const hotDiscountArrangements = arrangements.filter((ar) => ar.hotDiscount);
  const popularArrangements = arrangements.filter((ar) => ar.popular);

  return (
    <div className="w-full flex flex-col items-center gap-8 py-12 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col items-start gap-6 mt-4">
        <div className="w-full flex flex-row items-center gap-3">
          <GoFlame className="text-2xl text-(--color-last-minute)" />
          <h2 className="text-[24px] text-(--heading) font-semibold">
            Last Minute Deals
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {lastMinuteArrangements.map((arrangement) => (
            <ArrangementCard key={arrangement.id} arrangement={arrangement} />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start gap-6 mt-4">
        <div className="w-full flex flex-row items-center gap-3">
          <p className="text-2xl text-(--color-discount) font-semibold">%</p>
          <h2 className="text-[24px] text-(--heading) font-semibold">
            Hot Discounts
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {hotDiscountArrangements.map((arrangement) => (
            <ArrangementCard key={arrangement.id} arrangement={arrangement} />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start gap-6 mt-4">
        <div className="flex flex-row items-center gap-3">
          <GoGlobe className="text-2xl text-(--indigo)" />
          <h2 className="text-[24px] text-(--heading) font-semibold">
            Popular Destinations
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {popularArrangements.map((arrangement) => (
            <ArrangementCard key={arrangement.id} arrangement={arrangement} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
