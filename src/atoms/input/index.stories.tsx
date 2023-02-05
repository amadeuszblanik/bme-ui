import { ComponentMeta, ComponentStory } from "@storybook/react";
import Component from "./index";

export default {
  title: "Atoms/Input",
  component: Component,
  argTypes: {
    name: {
      control: {
        type: "text",
      },
    },
    value: {
      control: {
        type: "text",
      },
    },
    placeholder: {
      control: {
        type: "text",
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
    inputMode: {
      options: ["text", "decimal", "numeric", "tel", "search", "email", "url"],
      control: { type: "select" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    onChange: {
      action: "onChange",
      description: "All other HTMLInput events are supported.",
    },
    onClick: {
      action: "onClick",
      description: "All other HTMLInput events are supported.",
    },
    onPaste: {
      action: "onPaste",
      description: "All other HTMLInput events are supported.",
    },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

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
