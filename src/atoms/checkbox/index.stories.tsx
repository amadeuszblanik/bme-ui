import { ComponentMeta, ComponentStory } from "@storybook/react";
import { THEME_COLOURS_KEYS } from "../../settings/theme";
import Checkbox from "./index";

export default {
  title: "Atoms/Checkbox",
  component: Checkbox,
  argTypes: {
    name: {
      description: 'The name of the input field.',
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      description: 'Size of the checkbox or radio button.',
    },
    valid: {
      control: { type: 'text' },
      description: 'Validation message to display when the input is invalid.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled.',
    },
    variant: {
      control: { type: 'select', options: THEME_COLOURS_KEYS },
      description: 'Colour variant of the input.',
    },
    id: {
      control: { type: 'text' },
      description: 'ID of the radio input (only applicable if type is "radio").',
    },
    type: {
      control: { type: 'select', options: ['checkbox', 'radio'] },
      description: 'Type of the input.',
    },
    value: {
      control: { type: 'boolean' },
      description: 'Value of the input.',
    },
    onChange: {
      action: 'changed',
      description: 'Function to call when the input changes.',
    }
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  size: "medium",
  name: "checkbox",
};

Template.parameters = {
  pseudo: {
    hover: ["#one", "#two", "#three"],
    focus: ["#two", "#three"],
    active: "#three",
  },
};
