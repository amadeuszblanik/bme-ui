import { ComponentMeta, ComponentStory } from "@storybook/react";
import Component from "./index";
import Input from "../input";
import { THEME_COLOURS_KEYS } from "../../settings/theme";
import Checkbox from "../checkbox";

export default {
  title: "Atoms/Form controller",
  component: Component,
  argTypes: {
    name: {
      description: 'The name of the form field.',
    },
    label: {
      control: { type: 'text' },
      description: 'Label text to display above or beside the form field.',
    },
    hint: {
      control: { type: 'text' },
      description: 'Additional text to display below or beside the form field.',
    },
    error: {
      control: { type: 'text' },
      description: 'Error message to display if the form field is invalid.',
    },
    width: {
      control: { type: 'text' },
      description: 'Width of the form field container.',
    },
    minWidth: {
      control: { type: 'text' },
      description: 'Minimum width of the form field container.',
    },
    maxWidth: {
      control: { type: 'text' },
      description: 'Maximum width of the form field container.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the form field is disabled.',
    },
    variant: {
      control: { type: 'select', options: THEME_COLOURS_KEYS },
      description: 'Colour variant of the form field.',
    },
    children: {
      description: 'The input or checkbox element to be controlled by the form.',
    },
    labelPosition: {
      control: { type: 'radio', options: ['top', 'right', 'left'] },
      description: 'Position of the label relative to the form field.',
    },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <div style={{ maxWidth: 420, margin: "0 auto" }}>
    <Component {...args}>
      <Input width="100%" />
    </Component>
  </div>
);

const TemplateDouble: ComponentStory<typeof Component> = (args) => (
  <div style={{ maxWidth: 420, margin: "0 auto" }}>
    <Component {...args}>
      <Input width="100%" />
    </Component>
    <Component {...args}>
      <Input width="100%" />
    </Component>
  </div>
);

const TemplateCheckbox: ComponentStory<typeof Component> = (args) => (
  <div style={{ maxWidth: 420, margin: "0 auto" }}>
    <Component {...args}>
      <Checkbox name="chechbox" />
    </Component>
  </div>
);

export const Playground = Template.bind({});
export const PlaygroundDouble = TemplateDouble.bind({});
export const PlaygroundCheckbox = TemplateCheckbox.bind({});

Playground.args = {
  name: "input",
  label: "Input",
  hint: "0/128",
  error: "Error message",
};

PlaygroundDouble.args = {
  name: "input",
  label: "Input",
  hint: "0/128",
  error: "Error message",
};

PlaygroundCheckbox.args = {
  name: "input",
  label: "Input",
  hint: "0/128",
  error: "Error message",
};

Template.parameters = {
  pseudo: {
    hover: ["#one", "#two", "#three"],
    focus: ["#two", "#three"],
    active: "#three",
  },
};
