import React from "react";
import theme from "../../settings/theme";

export interface BmeThemeProviderContextType {
  theme: typeof theme;
}

export interface BmeThemeProviderProps extends BmeThemeProviderContextType {
  children: React.ReactNode;
}
