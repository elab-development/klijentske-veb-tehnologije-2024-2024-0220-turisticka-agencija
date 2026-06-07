import { useNavigate } from "react-router-dom";
import {
  LuHeart as Heart,
  LuTrash2 as Trash2,
  LuShoppingCart as ShoppingCart,
  LuArrowLeft as ArrowLeft,
} from "react-icons/lu";

import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import { useAppContext } from "../hooks/useAppContext";
import type { Arrangement } from "../models/Arrangement";

export default function WishList() {
  const navigate = useNavigate();

  const {
    arrangements,
    wishlist,
    toggleWishlist,
    addReservation,
  } = useAppContext();

  const wishlistArrangements = arrangements.filter((arrangement) =>
    wishlist.includes(arrangement.id)
  );

  const handleBook = (id: number) => {
    addReservation(id);
    toggleWishlist(id);
    navigate("/profile");
  };

  const handleDelete = (id: number) => {
    toggleWishlist(id);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pt-[96px] pb-10 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-gray-900"
        >
          <ArrowLeft className="h-5 w-5" />
          Back
        </button>

        <section className="rounded-2xl bg-white p-6 shadow-lg sm:p-8 lg:p-10">
          <div className="mb-12 flex items-center gap-4 sm:mb-16">
            <Heart className="h-8 w-8 fill-red-500 text-red-500 sm:h-9 sm:w-9" />

            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              My Wishlist
            </h1>
          </div>

          {wishlistArrangements.length === 0 ? (
            <div className="flex min-h-[260px] flex-col items-center justify-center text-center sm:min-h-[320px]">
              <Heart className="mb-6 h-16 w-16 text-gray-300 sm:h-20 sm:w-20" />

              <h2 className="mb-3 text-xl font-bold text-gray-700 sm:text-2xl">
                Your wishlist is empty
              </h2>

              <p className="mb-8 max-w-xl text-sm text-gray-500 sm:text-base">
                Start adding your favorite destinations to plan your next
                adventure!
              </p>

              <button
                onClick={() => navigate("/offers")}
                className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 sm:px-7"
              >
                Browse Offers
              </button>
            </div>
          ) : (
            <>
              <p className="mb-6 text-sm text-gray-600 sm:text-base">
                You have {wishlistArrangements.length}{" "}
                {wishlistArrangements.length === 1 ? "offer" : "offers"} saved
              </p>

              <div className="space-y-6">
                {wishlistArrangements.map((arrangement: Arrangement) => {
                  const finalPrice =
                    arrangement.price * (1 - arrangement.discount / 100);

                  const savings = arrangement.price - finalPrice;

                  return (
                    <article
                      key={arrangement.id}
                      className="overflow-hidden rounded-2xl bg-gray-50 shadow-sm transition hover:shadow-md md:flex"
                    >
                      <img
                        src={arrangement.image}
                        alt={arrangement.title}
                        onClick={() => navigate(`/details/${arrangement.id}`)}
                        className="h-52 w-full cursor-pointer object-cover md:h-auto md:w-64 lg:w-72"
                      />

                      <div className="flex flex-1 flex-col p-5 sm:p-6">
                        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <h3
                              onClick={() =>
                                navigate(`/details/${arrangement.id}`)
                              }
                              className="cursor-pointer text-xl font-bold text-gray-900 transition hover:text-indigo-600 sm:text-2xl"
                            >
                              {arrangement.title}
                            </h3>

                            <p className="mt-1 text-sm text-gray-600">
                              {arrangement.destination}, {arrangement.country}
                            </p>
                          </div>

                          {arrangement.discount > 0 && (
                            <span className="w-fit rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white sm:text-sm">
                              -{arrangement.discount}%
                            </span>
                          )}
                        </div>

                        <p className="mb-4 line-clamp-2 text-sm text-gray-700">
                          {arrangement.description}
                        </p>

                        <div className="mb-5 flex flex-wrap gap-2">
                          <span className="rounded-lg bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 sm:text-sm">
                            {arrangement.type}
                          </span>

                          {arrangement.isLastMinute && (
                            <span className="rounded-lg bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700 sm:text-sm">
                              Last Minute
                            </span>
                          )}
                        </div>

                        <div className="mt-auto flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              {arrangement.discount > 0 && (
                                <span className="text-base text-gray-400 line-through sm:text-lg">
                                  ${arrangement.price}
                                </span>
                              )}

                              <span className="text-2xl font-bold text-indigo-600 sm:text-3xl">
                                ${finalPrice.toFixed(0)}
                              </span>
                            </div>

                            {arrangement.discount > 0 && (
                              <p className="mt-1 text-sm text-green-600">
                                Save ${savings.toFixed(0)}
                              </p>
                            )}
                          </div>

                          <div className="flex flex-col gap-3 sm:flex-row">
                            <button
                              onClick={() => handleDelete(arrangement.id)}
                              className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100"
                            >
                              <Trash2 className="h-5 w-5" />
                              Remove
                            </button>

                            <button
                              onClick={() => handleBook(arrangement.id)}
                              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
                            >
                              <ShoppingCart className="h-5 w-5" />
                              Book Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-600">
                      Total value of saved offers
                    </p>

                    <p className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
                      $
                      {wishlistArrangements
                        .reduce(
                          (sum, arrangement) =>
                            sum +
                            arrangement.price *
                              (1 - arrangement.discount / 100),
                          0
                        )
                        .toFixed(0)}
                    </p>
                  </div>

                  <button
                    onClick={() => navigate("/offers")}
                    className="rounded-lg bg-gray-200 px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-300"
                  >
                    Add More Offers
                  </button>
                </div>
              </div>
            </>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}