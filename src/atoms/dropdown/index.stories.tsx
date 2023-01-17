import { ComponentMeta, ComponentStory } from "@storybook/react";
import { THEME_COLOURS_KEYS } from "../../settings/theme";
import Button from "./index";

export default {
  title: "Atoms/Dropdown [WIP]",
  component: Button,
  argTypes: {
    children: {
      control: { type: "text" },
    },
    variant: {
      options: THEME_COLOURS_KEYS,
      control: { type: "select" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    width: {
      control: { type: "text" },
    },
    outline: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    type: {
      options: ["button", "submit", "reset"],
      control: { type: "radio" },
      defaultValue: "button",
      description: "Default: button NOT submit",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  variant: "blue",
  size: "medium",
  children: "Button",
  // eslint-disable-next-line no-console
  list: [{ label: "Option 1", onClick: () => console.log("Option 1") }],
};

Template.parameters = {
  pseudo: {
    hover: ["#one", "#two", "#three"],
    focus: ["#two", "#three"],
    active: "#three",
  },
};
