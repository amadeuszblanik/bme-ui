import { ComponentMeta, ComponentStory } from "@storybook/react";
import Component from "./index";
import Input from "../input";
import { THEME_COLOURS_KEYS } from "../../settings/theme";

export default {
  title: "Atoms/Form controller",
  component: Component,
  argTypes: {
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
    hint: {
      control: {
        type: "text",
      },
    },
    error: {
      control: {
        type: "text",
      },
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
    variant: {
      options: THEME_COLOURS_KEYS,
      control: { type: "select" },
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

export const Playground = Template.bind({});
export const PlaygroundDouble = TemplateDouble.bind({});

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

Template.parameters = {
  pseudo: {
    hover: ["#one", "#two", "#three"],
    focus: ["#two", "#three"],
    active: "#three",
  },
};
