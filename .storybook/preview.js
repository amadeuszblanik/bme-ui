// import { addDecorator } from "@storybook/react";
// import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import { BmeDefaultTheme, BmeGlobalStyle } from "../src";
import { useState } from "react";

export const BmeLightTheme = {
  radius: 6,
  colors: {
    primary: "#ffdbb8",
    red: "#ff3b30",
    orange: "#ff9500",
    yellow: "#ffcc00",
    green: "#34c759",
    mint: "#00c7be",
    teal: "#30b0c7",
    cyan: "#32ade6",
    blue: "#007aff",
    indigo: "#5856d6",
    purple: "#af52de",
    pink: "#ff2d55",
    brown: "#a2845e",
    gray: "#8e8e93",
    gray2: "#aeaeb2",
    gray3: "#c7c7cc",
    gray4: "#d1d1d6",
    gray5: "#e5e5ea",
    gray6: "#f2f2f7",
    light: "#f3f3f3",
    dark: "#0a0a0a",
    background: "#ffffff",
    backgroundSecondary: "#f3f3f3",
    text: "#0a0a0a",
  },
  breakpoints: {
    mobile: 0,
    desktop: 768,
  },
  boxShadow: {
    primary: "0px 8px 17px rgba(255, 255, 255, 0.08)",
    secondary: "0px 8px 17px rgba(255, 255, 255, 0.08)",
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
  const [theme, setTheme] = useState("0");

    return (
      <>
        <select onChange={(event) => setTheme(event.target.value)}>
          <option value="0">Default (Dark)</option>
          <option value="1">Light</option>
        </select>
        <ThemeProvider theme={theme === "0" ? BmeDefaultTheme : BmeLightTheme}>
          <div style={{ margin: "3em" }}>
            <BmeGlobalStyle />
            <Story />
          </div>
        </ThemeProvider>
      </>
    )
  },
];
