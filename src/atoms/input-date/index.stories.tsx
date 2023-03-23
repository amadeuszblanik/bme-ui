import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "./index";
import { THEME_COLOURS_KEYS } from "../../settings/theme";

export default {
  title: "Atoms/Input Date",
  component: Input,
  argTypes: {
    name: {
      control: {
        type: "text",
      },
    },
    value: {
      control: { type: "date" },
    },
    type: {
      options: [undefined, "date", "time", "datetime-local"],
      control: { type: "select" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    variant: {
      options: THEME_COLOURS_KEYS,
      control: { type: "select" },
    },
    width: {
      control: {
        type: "text",
      },
    },
    minWidth: {
      control: {
        type: "text",
      },
    },
    maxWidth: {
      control: {
        type: "text",
      },
    },
    disabled: {
      control: { type: "boolean" },
    },
    onChange: {
      action: "onChange",
    },
    onClick: {
      action: "onClick",
    },
    onPaste: {
      action: "onPaste",
      description: "All other HTMLInput events are supported.",
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  name: "input",
  size: "medium",
};

Template.parameters = {
  pseudo: {
    hover: ["#one", "#two", "#three"],
    focus: ["#two", "#three"],
    active: "#three",
  },
};
