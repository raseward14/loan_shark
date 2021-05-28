import { useContext, createContext } from "react";

export const SharkContext = createContext(null);

export function useSharkContext() {
  return useContext(SharkContext);
}