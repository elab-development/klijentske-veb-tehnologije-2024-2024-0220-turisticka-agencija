import type { Arrangement } from "./Arrangement";
import type { User } from "./User";

export interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  arrangements: Array<Arrangement>;
  setArrangements: (arrangements: Array<Arrangement> | []) => void;
}
