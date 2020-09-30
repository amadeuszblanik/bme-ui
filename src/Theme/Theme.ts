import {TextFontFamilies} from "../Components/Text/Text.types";

export type Palette = "primary" | "secondary" | "tertiary" | "dark" | "light";
export type Sizes = "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs";

interface Thm {
  bme: {
    palette: { [key in Palette]: string },
    fonts: { [key in TextFontFamilies]: string }
  }
}

const Thm: Thm = {
  bme: {
    palette: {
      primary: '#300032',
      secondary: '#c43235',
      tertiary: '#0066FF',
      dark: '#000000',
      light: '#ffffff',
    },
    fonts: {
      sansSerif: "\"IBM Plex Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
      serif: "\"IBM Plex Serif\", \"Palatino Linotype\", \"Book Antiqua\", Palatino, serif",
      mono: "\"IBM Plex Mono\", \"Lucida Console\", Monaco, monospace",
    }
  }
};

export default Thm;
