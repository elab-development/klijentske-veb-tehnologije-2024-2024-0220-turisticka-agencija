import type { Dispatch, SetStateAction } from "react";
import type { User } from "./User";
import type { Arrangement } from "./Arrangement";

export interface AppContextType {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;

  arrangements: Arrangement[];
  setArrangements: Dispatch<SetStateAction<Arrangement[]>>;

  reservations: number[];
  setReservations: Dispatch<SetStateAction<number[]>>;

  wishlist: number[];
  setWishlist: Dispatch<SetStateAction<number[]>>;
}