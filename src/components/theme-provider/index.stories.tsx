import { ComponentMeta, ComponentStory } from "@storybook/react";
import theme, { THEME_COLOURS_KEYS } from "../../settings/theme";
import { BmeThemeProvider } from "../index";
import { BmeTest } from "../../atoms";

export default {
  title: "Components/Theme prpvider",
  component: BmeThemeProvider,
  argTypes: {
    variant: {
      options: THEME_COLOURS_KEYS,
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof BmeThemeProvider>;

const Template: ComponentStory<typeof BmeThemeProvider> = (args) => (
  <BmeThemeProvider {...args}>
    <BmeTest variant="primary" />
  </BmeThemeProvider>
);

export const Playground = Template.bind({});

Playground.args = {
  theme,
};

Template.parameters = {
  pseudo: {
    hover: ["#one", "#two", "#three"],
    focus: ["#two", "#three"],
    active: "#three",
  },
};
