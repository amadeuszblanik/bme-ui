import React from "react";
import { BmeThemeProviderProps } from "./types";
import ThemeProviderContext from "./context";

const Component: React.FC<BmeThemeProviderProps> = ({ children, theme }) => (
  <ThemeProviderContext.Provider value={{ theme }}>{children}</ThemeProviderContext.Provider>
);

export default Component;
