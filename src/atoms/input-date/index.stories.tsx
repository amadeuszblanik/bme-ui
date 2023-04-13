import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "./index";
import { THEME_COLOURS_KEYS } from "../../settings/theme";

export default {
  title: "Atoms/Input Date",
  component: Input,
  argTypes: {
    name: {
      control: { type: 'text' },
      description: 'The name of the input field.',
    },
    value: {
      control: { type: 'text' },
      description: 'The value of the input field.',
    },
    type: {
      control: { type: 'radio', options: ['date', 'time', 'datetime-local'] },
      description: 'The type of the input field.',
    },
    size: {
      control: { type: 'radio', options: ['small', 'medium', 'large'] },
      description: 'The size of the input field.',
    },
    onChange: {
      description: 'Callback function to handle input changes.',
    },
    variant: {
      control: { type: 'select', options: THEME_COLOURS_KEYS },
      description: 'Colour variant of the input field.',
    },
    width: {
      control: { type: 'text' },
      description: 'Width of the input field.',
    },
    minWidth: {
      control: { type: 'text' },
      description: 'Minimum width of the input field.',
    },
    maxWidth: {
      control: { type: 'text' },
      description: 'Maximum width of the input field.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input field is disabled.',
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
