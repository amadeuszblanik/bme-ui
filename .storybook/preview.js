import React from "react";
import { ThemeProvider } from 'styled-components';
import GlobalStyles from "../src/GlobalStyles/GlobalStyles";
import theme from "../src/Theme/Theme";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Story />
    </ThemeProvider>
  ),
];
