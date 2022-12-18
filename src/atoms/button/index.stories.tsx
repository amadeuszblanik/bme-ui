import { ComponentMeta, ComponentStory } from "@storybook/react";
import { THEME_COLOURS_KEYS } from "../../settings/theme";
import Button from "./index";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    variant: {
      options: THEME_COLOURS_KEYS,
      control: { type: "select" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    outline: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  variant: "blue",
  size: "medium",
  children: "Button",
};

Template.parameters = {
  pseudo: {
    hover: ["#one", "#two", "#three"],
    focus: ["#two", "#three"],
    active: "#three",
  },
};
