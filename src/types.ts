import theme from "./settings/theme";

export type ThemeColours = keyof typeof theme.colors;

export type BmeInputMode = "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
