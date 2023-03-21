import { ComponentMeta, ComponentStory } from "@storybook/react";
import { THEME_COLOURS_KEYS } from "../../settings/theme";
import Component from "./index";

export default {
  title: "Atoms/Select",
  component: Component,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    variant: {
      options: THEME_COLOURS_KEYS,
      control: { type: "select" },
    },
    native: {
      control: { type: "boolean" },
    },
    onChange: {
      action: "onChange",
      description: "Deprecated. Use onValue instead.",
    },
    value: {
      control: {
        type: "text",
      },
    },
    search: {
      description: "Searchable only works without native",
      control: { type: "boolean" },
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
    onClick: {
      action: "onClick",
    },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args}>
  <Component.Option value="audi">Audi</Component.Option>
  <Component.Option value="bmw">BMW</Component.Option>
  <Component.Option value="mercedes-benz">Mercedes-Benz</Component.Option>
  <Component.Option value="volkswagen">Volkswagen</Component.Option>
  <Component.Option value="peugeot">Peugeot</Component.Option>
  <Component.Option value="porsche">Porsche</Component.Option>
  <Component.Option value="renault">Renault</Component.Option>
  <Component.Option value="toyota">Toyota</Component.Option>
</Component>;

const TemplateGroup: ComponentStory<typeof Component> = (args) => <Component {...args}>
  <Component.Group label="German">
    <Component.Option value="audi">Audi</Component.Option>
    <Component.Option value="bmw">BMW</Component.Option>
    <Component.Option value="mercedes-benz">Mercedes-Benz</Component.Option>
    <Component.Option value="volkswagen">Volkswagen</Component.Option>
    <Component.Option value="porsche">Porsche</Component.Option>
  </Component.Group>
  <Component.Group label="French">
    <Component.Option value="peugeot">Peugeot</Component.Option>
    <Component.Option value="renault">Renault</Component.Option>
  </Component.Group>
  <Component.Group label="Non-european">
    <Component.Option value="toyota">Toyota</Component.Option>
  </Component.Group>
</Component>;

export const Playground = Template.bind({});
export const PlaygroundGroup = TemplateGroup.bind({});

Template.parameters = {
  pseudo: {
    hover: ["#one", "#two", "#three"],
    focus: ["#two", "#three"],
    active: "#three",
  },
};

Template.parameters = {
  pseudo: {
    hover: ["#one", "#two", "#three"],
    focus: ["#two", "#three"],
    active: "#three",
  },
};
