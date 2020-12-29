import React from "react";
import "./main.scss";
import { ThemeProvider } from 'styled-components';
import theme from "../src/Theme/Theme";
import {BMEBox, BMEGlobalStyles, BMEText} from "../src";
import packageJSON from "../package.json";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <BMEGlobalStyles/>
      <BMEBox alignX="center" direction="column" padding={{ y: "s" }}>
        <BMEBox alignX="center" direction="column" padding={{ y: { bottom: "s" } }}>
          <BMEText align="center" variant="light">
            BME-UI Playground — {packageJSON.version}
          </BMEText>
        </BMEBox>
        <BMEText size="s" align="center" variant="light">
          💅 by Amadeusz Blanik &copy; 2020 MIT
        </BMEText>
      </BMEBox>
      <BMEBox background="light" alignX="left" alignY="center" padding={{y: "xl", x:  "m"}}>
        <Story />
      </BMEBox>
      <BMEBox background="dark" alignX="left" alignY="center" padding={{y: "xl", x:  "m"}}>
        <Story />
      </BMEBox>
      <BMEBox background="primary" alignX="left" alignY="center" padding={{y: "xl", x:  "m"}}>
        <Story />
      </BMEBox>
      <BMEBox background="secondary" alignX="left" alignY="center" padding={{y: "xl", x:  "m"}}>
        <Story />
      </BMEBox>
      <BMEBox background="tertiary" alignX="left" alignY="center" padding={{y: "xl", x:  "m"}}>
        <Story />
      </BMEBox>
    </ThemeProvider>
  ),
];
