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
    emptyValue: {
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
  <Component.Option value="vag-audi" label="Audi" />
  <Component.Option value="bmw" label="BMW" />
  <Component.Option value="daimler-mercedes-benz" label="Mercedes-Benz" />
  <Component.Option value="vag-volkswagen" label="Volkswagen" />
  <Component.Option value="psa-peugeot" label="Peugeot" />
  <Component.Option value="vag-porsche" label="Porsche" />
  <Component.Option value="renault" label="Renault" />
  <Component.Option value="toyota" label="Toyota" />
</Component>;

const TemplateGroup: ComponentStory<typeof Component> = (args) => <Component {...args}>
  <Component.Group label="German">
    <Component.Option value="vag-audi" label="Audi" />
    <Component.Option value="bmw" label="BMW" />
    <Component.Option value="daimler-mercedes-benz" label="Mercedes-Benz" />
    <Component.Option value="vag-volkswagen" label="Volkswagen" />
    <Component.Option value="vag-porsche" label="Porsche" />
  </Component.Group>
  <Component.Group label="French">
    <Component.Option value="psa-peugeot" label="Peugeot" />
    <Component.Option value="renault" label="Renault" />
  </Component.Group>
  <Component.Group label="Non-european">
    <Component.Option value="toyota" label="Toyota" disabled />
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
