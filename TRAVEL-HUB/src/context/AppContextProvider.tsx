import { useState, useEffect, type ReactNode } from "react"; // Dodat useEffect
import { AppContext } from "./AppContext";
import type { User } from "../models/User";
import type { Arrangement } from "../models/Arrangement";
import { arrangementsData } from "../data/arrangements";

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      const allUsers = JSON.parse(localStorage.getItem("users") || "[]");
      
      const updatedUsers = allUsers.map((u: any) => {
        if (u.password === user.password) {
          return user; 
        }
        return u;
      });

      localStorage.setItem("users", JSON.stringify(updatedUsers));
    } else {
      localStorage.removeItem("loggedInUser");
    }
  }, [user]);

  const [arrangements, setArrangements] = useState<Arrangement[]>(arrangementsData);

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