import {TextFontFamilies} from "../Text/Text.types";

interface Thm {
  bme: {
    fonts: { [key in TextFontFamilies]: string }
  }
}

const Thm: Thm = {
  bme: {
    fonts: {
      sansSerif: "\"IBM Plex Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
      serif: "\"IBM Plex Serif\", \"Palatino Linotype\", \"Book Antiqua\", Palatino, serif",
      mono: "\"IBM Plex Mono\", \"Lucida Console\", Monaco, monospace",
    }
  }
};

export default Thm;
