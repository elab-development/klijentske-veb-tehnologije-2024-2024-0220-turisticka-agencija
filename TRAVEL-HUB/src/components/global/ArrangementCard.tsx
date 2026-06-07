import { Link } from "react-router-dom";
import type { Arrangement } from "../../models/Arrangement";
import { FaRegHeart } from "react-icons/fa6";
import { GoFlame } from "react-icons/go";

interface ProductCardProps {
  arrangement: Arrangement;
}

const ArrangementCard: React.FC<ProductCardProps> = ({ arrangement }) => {
  return (
    <div className="w-full max-w-65 flex flex-col items-center rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover cursor-pointer transition-all duration-100">
      <div className="relative w-full h-45 overflow-hidden flex items-center justify-center">
        <img
          src={arrangement.image}
          alt="arrangement-image"
          className="w-full h-45 object-cover"
        />
        <div className="absolute bottom-2 right-2 p-2 rounded-full bg-(--bg) text-xl text-(--heading)">
          <FaRegHeart />
        </div>
        <p className="absolute top-2 right-2 px-2 py-1 bg-(--color-discount) text-(--white) text-sm rounded-full">
          -{arrangement.discount}%
        </p>
        {arrangement.isLastMinute && <p className="absolute top-2 left-2 px-2 py-1 bg-(--color-last-minute) text-(--white) text-sm rounded-full flex items-center gap-1">
          <GoFlame className="text-lg" />
          Last minute
        </p>}
      </div>
      <div className="w-full flex flex-col items-start p-4 gap-2">
        <h3 className="text-[18px] font-semibold text-(--black)">
          {arrangement.title}
        </h3>
        <p className="text-[13px] text-(--heading)">
          {arrangement.destination}, {arrangement.country}
        </p>
        <div className="w-full flex flex-row items-center justify-between">
          <p className="flex flex-row items-center">
            <span className="text-[14px] text-(--text-normal) line-through mr-2">
              ${arrangement.price}
            </span>
            <span className="text-[18px] text-(--indigo)">
              $
              {(
                arrangement.price -
                (arrangement.price / 100) * arrangement.discount
              ).toFixed(0)}
            </span>
          </p>
          <Link
            to={`/details/${arrangement.id}`}
            className="text-(--white) text-[13px] font-semibold bg-(--indigo) rounded-lg cursor-pointer py-2 px-4"
          >
            Details
          </Link>
        </div>
        <p className="px-2 py-1 bg-(--bg) text-(--heading) text-[11px] rounded">
          {arrangement.type}
        </p>
      </div>
    </div>
  );
};

export default ArrangementCard;
