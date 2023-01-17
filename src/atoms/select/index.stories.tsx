import { ComponentMeta, ComponentStory } from "@storybook/react";
import { THEME_COLOURS_KEYS } from "../../settings/theme";
import Select from "./index";

export default {
  title: "Atoms/Select",
  component: Select,
  argTypes: {
    value: {
      control: {
        type: "object",
      },
    },
    list: {
      control: {
        type: "object",
      },
    },
    variant: {
      options: THEME_COLOURS_KEYS,
      control: { type: "select" },
    },
    name: {
      control: {
        type: "text",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
    emptyLabel: {
      control: {
        type: "text",
      },
    },
    placeholder: {
      control: {
        type: "text",
      },
    },
    hint: {
      control: {
        type: "text",
        description: "Hint message. Display order: error > valid > hint",
      },
    },
    error: {
      control: {
        type: "text",
        description: "Error message. Display order: error > valid > hint",
      },
    },
    valid: {
      control: {
        type: "text",
        description: "Valid message. Display order: error > valid > hint",
      },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
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
    type: {
      options: ["text", "password", "email", "search"],
      control: { type: "select" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    multiple: {
      control: { type: "boolean" },
    },
    onValue: {
      action: "onValue",
    },
    onChange: {
      action: "onChange",
      description: "Deprecated. Use onValue instead.",
    },
    onClick: {
      action: "onClick",
    },
    onPaste: {
      action: "onPaste",
      description: "All other HTMLInput events are supported.",
    },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Playground = Template.bind({});
export const PlaygroundMultipleValue = Template.bind({});
export const PlaygroundNullValue = Template.bind({});

Playground.args = {
  size: "medium",
  name: "Select",
  label: "Select",
  value: { key: "1", label: "One" },
  list: [
    { key: "1", label: "One" },
    { key: "2", label: "Two" },
    { key: "3", label: "Three" },
  ],
};

PlaygroundMultipleValue.args = {
  size: "medium",
  name: "Select",
  label: "Select",
  value: [
    { key: "1", label: "One" },
    { key: "2", label: "Two" },
  ],
  list: [
    { key: "1", label: "One" },
    { key: "2", label: "Two" },
    { key: "3", label: "Three" },
    { key: "4", label: "Four" },
    { key: "5", label: "Five" },
  ],
  multiple: true,
};

Template.parameters = {
  pseudo: {
    hover: ["#one", "#two", "#three"],
    focus: ["#two", "#three"],
    active: "#three",
  },
};

PlaygroundNullValue.args = {
  size: "medium",
  name: "Select",
  label: "Select",
  value: null,
  list: [
    { key: "1", label: "One" },
    { key: "2", label: "Two" },
    { key: "3", label: "Three" },
  ],
};

Template.parameters = {
  pseudo: {
    hover: ["#one", "#two", "#three"],
    focus: ["#two", "#three"],
    active: "#three",
  },
};
