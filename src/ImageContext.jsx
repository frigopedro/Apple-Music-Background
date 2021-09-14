import { createContext } from "react";

export const ImagesContext = createContext("");

export function ImagesProvider({ children }) {
  return (
    <ImagesContext.Provider value={"Pedro"}>{children}</ImagesContext.Provider>
  );
}
