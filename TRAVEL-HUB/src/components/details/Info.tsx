import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import type { Arrangement } from "../../models/Arrangement";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useState } from "react";
import { useAppContext } from "../../hooks/useAppContext";

interface DetailsProps {
  arrangement: Arrangement | undefined;
}

const Info: React.FC<DetailsProps> = ({ arrangement }) => {
  const { toggleWishlist, wishlist } = useAppContext();

  const inWishlist = wishlist.includes(arrangement!.id);

  const discount = Math.ceil(
    arrangement!.price * Number((arrangement!.discount / 100).toFixed(2)),
  );

  const additionalDaysPrice = 120;
  const [additionalDays, setAdditionalDays] = useState(0);

  const excursionPrice = 80;
  const [excursion, setExcursion] = useState(0);

  const airportTransferPrice = 150;
  const [airportTransfer, setAirportTransfer] = useState(false);

  const manipulateDays = (flag: string) => {
    if (flag === "plus") {
      if (additionalDays >= 20) {
        return;
      }
      setAdditionalDays(additionalDays + 1);
    } else {
      if (additionalDays === 0) {
        return;
      }
      setAdditionalDays(additionalDays - 1);
    }
  };

  const manipulateExcursions = (flag: string) => {
    if (flag === "plus") {
      if (excursion >= 20) {
        return;
      }
      setExcursion(excursion + 1);
    } else {
      if (excursion === 0) {
        return;
      }
      setExcursion(excursion - 1);
    }
  };

  return (
    <div className="max-w-250 mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative">
          <img
            src={arrangement?.image}
            alt={arrangement?.title}
            className="w-full h-96 object-cover"
          />
          <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full">
            -{arrangement?.discount}% OFF
          </div>
        </div>

        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl text-gray-900 mb-2">
                {arrangement?.title}
              </h1>
              <div className="flex items-center text-gray-600 space-x-4">
                <div className="flex items-center">
                  {arrangement?.destination}, {arrangement?.country}
                </div>
                <div className="flex items-center">{arrangement?.date}</div>
              </div>
            </div>

            <div
              onClick={() => toggleWishlist(arrangement!.id)}
              className="p-3 rounded-full bg-(--bg) text-2xl cursor-pointer"
            >
              {inWishlist ? (
                <FaHeart className="text-(--color-discount)" />
              ) : (
                <FaRegHeart className="text-(--heading)" />
              )}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed">
              {arrangement?.description}
            </p>
          </div>

          <div className="mb-8">
            <span className="inline-block bg-(--text-light) text-(--heading) px-3 py-1 rounded-lg">
              {arrangement?.type}
            </span>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl text-gray-900 mb-6">Combine Your Offer</h2>

            <div className="bg-gray-50 rounded-xl p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg text-gray-900">Additional Days</h3>
                  <p className="text-sm text-gray-600">$120 per day</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => manipulateDays("minus")}
                    className="bg-white border border-gray-300 p-2 rounded-lg hover:bg-gray-100"
                  >
                    <BiMinus className="w-5 h-5 text-gray-600" />
                  </button>
                  <span className="text-xl text-gray-900 w-12 text-center">
                    {additionalDays}
                  </span>
                  <button
                    onClick={() => manipulateDays("plus")}
                    className="bg-white border border-gray-300 p-2 rounded-lg hover:bg-gray-100"
                  >
                    <BiPlus className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg text-gray-900">Airport Transfer</h3>
                  <p className="text-sm text-gray-600">$150 round trip</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input onChange={() => setAirportTransfer((prev) => !prev)} type="checkbox" className="sr-only peer" />
                  <div className="w-10.5 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full  after:absolute after:top-0.75 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4.5 after:w-4.5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg text-gray-900">Guided Excursions</h3>
                  <p className="text-sm text-gray-600">$80 per excursion</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => manipulateExcursions("minus")}
                    className="bg-white border border-gray-300 p-2 rounded-lg hover:bg-gray-100"
                  >
                    <BiMinus className="w-5 h-5 text-gray-600" />
                  </button>
                  <span className="text-xl text-gray-900 w-12 text-center">
                    {excursion}
                  </span>
                  <button
                    onClick={() => manipulateExcursions("plus")}
                    className="bg-white border border-gray-300 p-2 rounded-lg hover:bg-gray-100"
                  >
                    <BiPlus className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 mt-8">
            <div className="bg-indigo-50 rounded-xl p-6">
              <h2 className="text-2xl text-gray-900 mb-4">Price Summary</h2>

              <div className="space-y-3">
                <div className="flex justify-between text-(--heading)">
                  <span>Base Price</span>
                  <span>${arrangement?.price}</span>
                </div>
                {arrangement?.discount && (
                  <div className="flex justify-between text-(--color-success)">
                    <span>Discount ({arrangement?.discount}%)</span>
                    <span>- ${discount}</span>
                  </div>
                )}
                {additionalDays !== 0 && (
                  <div className="flex justify-between text-(--heading)">
                    <span>Additional days ({additionalDays}):</span>
                    <span>+ ${additionalDays * additionalDaysPrice}</span>
                  </div>
                )}
                {excursion !== 0 && (
                  <div className="flex justify-between text-(--heading)">
                    <span>Excursions ({excursion}):</span>
                    <span>+ ${excursion * excursionPrice}</span>
                  </div>
                )}
                {airportTransfer && (
                  <div className="flex justify-between text-(--heading)">
                    <span>Airport Transfer:</span>
                    <span>+ ${airportTransferPrice}</span>
                  </div>
                )}

                <div className="border-t border-indigo-200 pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl text-(--heading)">
                      Total Price
                    </span>
                    <span className="text-3xl text-(--indigo)">
                      $
                      {arrangement!.price -
                        discount +
                        additionalDays * additionalDaysPrice +
                        excursion * excursionPrice}
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors text-lg cursor-pointer">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
