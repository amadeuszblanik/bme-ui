import dark from "../themes/dark";

const theme = dark;

export type ThemeColours = keyof typeof theme.colors;
export const THEME_COLOURS_KEYS = Object.keys(theme.colors) as ThemeColours[];

export default theme;
