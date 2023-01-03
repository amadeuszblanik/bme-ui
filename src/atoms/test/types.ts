import Theme, { ThemeColours } from "../../settings/theme";

export interface TestProps {
  variant: ThemeColours;
}

export interface StyledTestProps {
  variant: ThemeColours;
  bmeTheme: typeof Theme;
}
