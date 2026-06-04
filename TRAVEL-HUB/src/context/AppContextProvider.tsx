import { useState, type ReactNode } from "react";
import { AppContext } from "./AppContext";
import type { User } from "../models/User";
import type { Arrangement } from "../models/Arrangement";
import { arrangementsData } from "../data/arrangements";

interface ThemeProviderProps {
  children: ReactNode;
}

const AppContextProvider = ({ children }: ThemeProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [arrangements, setArrangements] = useState<Array<Arrangement> | []>(
    arrangementsData,
  );

  const value = {
    user,
    setUser,
    arrangements,
    setArrangements,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
