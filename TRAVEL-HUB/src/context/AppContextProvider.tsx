import { useState, type ReactNode } from "react";
import { AppContext } from "./AppContext";
import type { User } from "../models/User";
import type { Arrangement } from "../models/Arrangement";
import { arrangementsData } from "../data/arrangements";

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [user, setUser] = useState<User | null>({
    name: "Petar",
    surname: "Petrovic",
    email: "petar@gmail.com",
    password: "123456",
  });

  const [arrangements, setArrangements] =
    useState<Arrangement[]>(arrangementsData);

  const [reservations, setReservations] = useState<number[]>([]);

  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(id)
        ? prevWishlist.filter((wishlistId) => wishlistId !== id)
        : [...prevWishlist, id],
    );
  };

  const addReservation = (id: number) => {
    setReservations((prevReservations) =>
      prevReservations.includes(id)
        ? prevReservations
        : [...prevReservations, id],
    );
  };

  const value = {
    user,
    setUser,
    arrangements,
    setArrangements,
    reservations,
    setReservations,
    wishlist,
    setWishlist,
    toggleWishlist,
    addReservation,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
