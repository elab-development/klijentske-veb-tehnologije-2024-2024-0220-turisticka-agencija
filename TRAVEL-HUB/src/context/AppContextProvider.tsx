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

  const value = {
    user,
    setUser,
    arrangements,
    setArrangements,
    reservations,
    setReservations,
    wishlist,
    setWishlist,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;