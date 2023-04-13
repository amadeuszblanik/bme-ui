import { ComponentMeta, ComponentStory } from "@storybook/react";
import TextArea from "./index";

export default {
  title: "Atoms (Deprecated)/Text area",
  component: TextArea,
  argTypes: {
    name: {
      description: "The name of the textarea input",
      control: { type: "text" },
    },
    value: {
      description: "The value of the textarea input",
      control: { type: "text" },
    },
    label: {
      description: "The label for the textarea input",
      control: { type: "text" },
    },
    onValue: {
      description: "The callback function called when the textarea value changes",
      action: "changed",
    },
    size: {
      description: "The size of the textarea input",
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
    width: {
      description: "The width of the textarea input",
      control: { type: "text" },
    },
    minWidth: {
      description: "The minimum width of the textarea input",
      control: { type: "text" },
    },
    maxWidth: {
      description: "The maximum width of the textarea input",
      control: { type: "text" },
    },
    hint: {
      description: "The hint message for the textarea input",
      control: { type: "text" },
    },
    error: {
      description: "The error message for the textarea input",
      control: { type: "text" },
    },
    valid: {
      description: "The valid message for the textarea input",
      control: { type: "text" },
    },
    disabled: {
      description: "Whether the textarea input is disabled",
      control: { type: "boolean" },
    },
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  size: "medium",
  label: "Text area",
};

Template.parameters = {
  pseudo: {
    hover: ["#one", "#two", "#three"],
    focus: ["#two", "#three"],
    active: "#three",
  },
};
