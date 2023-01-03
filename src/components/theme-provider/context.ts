import { createContext } from "react";
import { BmeThemeProviderContextType } from "./types";
import theme from "../../settings/theme";

const ThemeProviderContext = createContext<BmeThemeProviderContextType>({
  theme,
});

export default ThemeProviderContext;
