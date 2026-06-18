import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  LuUser as UserIcon,
  LuMail as Mail,
  LuPencil as Edit2,
  LuSave as Save,
  LuHeart as Heart,
  LuCalendar as Calendar,
  LuLogOut as LogOut,
} from "react-icons/lu";

import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import { useAppContext } from "../hooks/useAppContext";
import type { Arrangement } from "../models/Arrangement";

export default function Profile() {
  const navigate = useNavigate();

  const {
    user,
    setUser,
    arrangements,
    reservations = [],
    wishlist = [],
  } = useAppContext();

  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    surname: user?.surname || "",
    email: user?.email || "",
  });

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        surname: user.surname,
        email: user.email,
      });
    }
  }, [user]);

  if (!user) {
    return null;
  }

  const reservedArrangements = arrangements.filter((arrangement) =>
    reservations.includes(arrangement.id),
  );

  const wishlistArrangements = arrangements.filter((arrangement) =>
    wishlist.includes(arrangement.id),
  );

  const handleSave = () => {
    setUser({
      ...user,
      name: formData.name,
      surname: formData.surname,
      email: formData.email,
    });

    setIsEditing(false);
  };

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  const renderReservationCard = (arrangement: Arrangement) => {
    const finalPrice = arrangement.price * (1 - arrangement.discount / 100);

    return (
      <article
        key={arrangement.id}
        className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-sm transition hover:shadow-md"
      >
        <img
          src={arrangement.image}
          alt={arrangement.title}
          className="h-40 w-full object-cover"
        />

        <div className="p-4">
          <h3 className="mb-1 text-base font-semibold text-gray-900">
            {arrangement.title}
          </h3>

          <p className="mb-2 text-sm text-gray-600">
            {arrangement.destination}, {arrangement.country}
          </p>

          <p className="font-semibold text-indigo-600">
            ${finalPrice.toFixed(0)}
          </p>

          <button
            onClick={() => navigate(`/details/${arrangement.id}`)}
            className="mt-3 w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
          >
            View Details
          </button>
        </div>
      </article>
    );
  };

  const renderWishlistCard = (arrangement: Arrangement) => {
    const finalPrice = arrangement.price * (1 - arrangement.discount / 100);

    return (
      <article
        key={arrangement.id}
        className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-sm transition hover:shadow-md"
      >
        <img
          src={arrangement.image}
          alt={arrangement.title}
          className="h-32 w-full object-cover"
        />

        <div className="p-3">
          <h3 className="mb-1 truncate text-sm font-semibold text-gray-900">
            {arrangement.title}
          </h3>

          <p className="text-sm font-semibold text-indigo-600">
            ${finalPrice.toFixed(0)}
          </p>
        </div>
      </article>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="mx-auto w-full max-w-5xl px-4 pt-24 pb-8 sm:px-6 lg:px-8">
        <section className="mb-8 rounded-xl bg-white p-5 shadow-lg sm:p-6 lg:p-8">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              My Profile
            </h1>

            <button
              onClick={handleLogout}
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-red-600 transition hover:text-red-700"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </div>

          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-indigo-600 sm:h-16 sm:w-16">
              <UserIcon className="h-8 w-8 text-white" />
            </div>

            <div className="min-w-0">
              <h2 className="truncate text-xl font-semibold text-gray-900 sm:text-2xl">
                {user.name} {user.surname}
              </h2>

              <p className="mt-1 flex items-center gap-2 break-all text-sm text-gray-600">
                <Mail className="h-4 w-4 shrink-0" />
                {user.email}
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
                Personal Information
              </h3>

              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-medium text-indigo-600 transition hover:bg-indigo-50 hover:text-indigo-700"
                >
                  <Edit2 className="h-4 w-4" />
                  Edit
                </button>
              ) : (
                <button
                  onClick={handleSave}
                  className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
                >
                  <Save className="h-4 w-4" />
                  Save
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Name
                </label>

                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  disabled={!isEditing}
                  className={`w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-indigo-500 ${
                    !isEditing ? "bg-gray-50 text-gray-700" : "bg-white"
                  }`}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Surname
                </label>

                <input
                  type="text"
                  value={formData.surname}
                  onChange={(e) =>
                    setFormData({ ...formData, surname: e.target.value })
                  }
                  disabled={!isEditing}
                  className={`w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-indigo-500 ${
                    !isEditing ? "bg-gray-50 text-gray-700" : "bg-white"
                  }`}
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  disabled={!isEditing}
                  className={`w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-indigo-500 ${
                    !isEditing ? "bg-gray-50 text-gray-700" : "bg-white"
                  }`}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8 rounded-xl bg-white p-5 shadow-lg sm:p-6 lg:p-8">
          <div className="mb-6 flex items-center gap-3">
            <Calendar className="h-6 w-6 text-indigo-600" />
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
              My Reservations
            </h2>
          </div>

          {reservedArrangements.length === 0 ? (
            <div className="flex min-h-[180px] flex-col items-center justify-center rounded-lg bg-gray-50 px-4 py-10 text-center">
              <Calendar className="mb-3 h-12 w-12 text-gray-400" />

              <p className="text-sm text-gray-600 sm:text-base">
                No reservations yet
              </p>

              <button
                onClick={() => navigate("/offers")}
                className="mt-4 text-sm font-medium text-indigo-600 transition hover:text-indigo-700"
              >
                Browse offers
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {reservedArrangements.map(renderReservationCard)}
            </div>
          )}
        </section>

        <section className="rounded-xl bg-white p-5 shadow-lg sm:p-6 lg:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Heart className="h-6 w-6 text-red-500" />

              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                My Wishlist
              </h2>
            </div>

            <button
              onClick={() => navigate("/wishlist")}
              className="text-sm font-medium text-indigo-600 transition hover:text-indigo-700"
            >
              View All
            </button>
          </div>

          {wishlistArrangements.length === 0 ? (
            <div className="flex min-h-[180px] flex-col items-center justify-center rounded-lg bg-gray-50 px-4 py-10 text-center">
              <Heart className="mb-3 h-12 w-12 text-gray-400" />

              <p className="text-sm text-gray-600 sm:text-base">
                Your wishlist is empty
              </p>

              <button
                onClick={() => navigate("/offers")}
                className="mt-4 text-sm font-medium text-indigo-600 transition hover:text-indigo-700"
              >
                Browse offers
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {wishlistArrangements.slice(0, 4).map(renderWishlistCard)}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
