import { createContext } from "react";
import type { AppContextType } from "../models/AppContextType";

export const AppContext = createContext<AppContextType | undefined>(undefined);
