import { ComponentMeta, ComponentStory } from "@storybook/react";
import { THEME_COLOURS_KEYS } from "../../settings/theme";
import Button from "./index";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    children: {
      description: 'Content to display inside the button.',
    },
    variant: {
      control: { type: 'select', options: THEME_COLOURS_KEYS },
      description: 'Colour variant of the button.',
    },
    size: {
      control: { type: 'radio', options: ['small', 'medium', 'large'] },
      description: 'Size of the button.',
    },
    width: {
      control: { type: 'text' },
      description: 'Width of the button.',
    },
    outline: {
      control: { type: 'boolean' },
      description: 'Whether the button should have an outline instead of a solid fill.',
    },
    type: {
      control: { type: 'radio', options: ['button', 'submit', 'reset'] },
      description: 'Type of the button.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled.',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Whether the button is loading.',
    }
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
