import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "./index";

export default {
  title: "Atoms (Deprecated)/Input",
  component: Input,
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
    label: {
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
    onValue: {
      action: "onValue",
    },
    onChange: {
      action: "onValue",
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
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  name: "input",
  size: "medium",
  label: "Input",
};

Template.parameters = {
  pseudo: {
    hover: ["#one", "#two", "#three"],
    focus: ["#two", "#three"],
    active: "#three",
  },
};
