import React, {useState} from "react";
import "./main.scss";
import { ThemeProvider } from 'styled-components';
import theme from "../src/Theme/Theme";
import { BMEBox, BMEForm, BMEGlobalStyles, BMEText } from "../src";
import packageJSON from "../package.json";

export const parameters = {
  options: {
    storySort: {
      method: '',
      order: ['Getting started', 'Components', 'Forms'],
      locales: '',
    },
  }
}

export const decorators = [
  (Story) => {
  const [stateSelectedTheme, setStateSelectedTheme] = useState("light");

  const themeOptions = [
    { value: "light", content: "Light" },
    { value: "dark", content: "Dark" },
    { value: "primary", content: "primary" },
    { value: "secondary", content: "secondary" },
    { value: "tertiary", content: "tertiary" },
    { value: "focus", content: "focus" },
    { value: "required", content: "required" },
    { value: "blue", content: "blue" },
    { value: "green", content: "green" },
    { value: "indigo", content: "indigo" },
    { value: "orange", content: "orange" },
    { value: "pink", content: "pink" },
    { value: "purple", content: "purple" },
    { value: "red", content: "red" },
    { value: "teal", content: "teal" },
    { value: "yellow", content: "yellow" }
  ]

  return (
      <ThemeProvider theme={theme}>
        <BMEGlobalStyles/>
        <BMEBox background="dark" alignX="left" alignY="center" padding={{y: "m"}}>
          <BMEForm.Select options={themeOptions} name="Theme" label="Theme" onChange={setStateSelectedTheme}/>
        </BMEBox>
        <BMEBox alignX="center" direction="column" padding={{ y: "m" }}>
          <BMEBox alignX="center" direction="column" padding={{ y: { bottom: "s" } }}>
            <BMEText align="center" variant="light">
              BME-UI Playground — {packageJSON.version}
            </BMEText>
          </BMEBox>
          <BMEText size="s" align="center" variant="light">
            💅 by Amadeusz Blanik &copy; 2020 MIT
          </BMEText>
        </BMEBox>
        <BMEBox background={stateSelectedTheme} alignX="left" alignY="center" padding={{y: "xl", x:  "m"}}>
          <Story />
        </BMEBox>
      </ThemeProvider>
    )
  },
];
