import { ComponentMeta, ComponentStory } from "@storybook/react";
import { THEME_COLOURS_KEYS } from "../../settings/theme";
import Component from "./index";

export default {
  title: "Atoms/Select",
  component: Component,
  argTypes: {
    size: {
      description: "The size of the select component.",
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    variant: {
      description: "The variant (color scheme) of the select component.",
      control: { type: "select", options: THEME_COLOURS_KEYS },
    },
    native: {
      description: "Whether to use the native select element or a custom implementation.",
      control: { type: "boolean" },
    },
    onChange: {
      description: "Callback function invoked when the selected value changes.",
      control: null,
    },
    value: {
      description: "The currently selected value of the select component.",
      control: { type: "text" },
    },
    emptyValue: {
      description: "The text to display when no value is selected.",
      control: { type: "text" },
    },
    searchable: {
      description: "Whether to enable searching for options.",
      control: { type: "boolean" },
    },
    multiple: {
      description: "Whether to allow selecting multiple options.",
      control: { type: "boolean" },
    },
    width: {
      description: "The width of the select component.",
      control: { type: "text" },
    },
    minWidth: {
      description: "The minimum width of the select component.",
      control: { type: "text" },
    },
    maxWidth: {
      description: "The maximum width of the select component.",
      control: { type: "text" },
    },
    disabled: {
      description: "Whether the select component is disabled.",
      control: { type: "boolean" },
    },
    children: {
      description: "The child elements to be rendered as options.",
      control: null,
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

const TemplateMultiple: ComponentStory<typeof Component> = (args) => <Component {...args} multiple>
  <Component.Option value="vag-audi" label="Audi" />
  <Component.Option value="bmw" label="BMW" />
  <Component.Option value="daimler-mercedes-benz" label="Mercedes-Benz" selected />
  <Component.Option value="vag-volkswagen" label="Volkswagen" />
  <Component.Option value="psa-peugeot" label="Peugeot" />
  <Component.Option value="vag-porsche" label="Porsche" selected />
  <Component.Option value="renault" label="Renault" />
  <Component.Option value="toyota" label="Toyota" />
</Component>;

const TemplateGroupMultiple: ComponentStory<typeof Component> = (args) => <Component {...args} multiple>
  <Component.Group label="German">
    <Component.Option value="vag-audi" label="Audi" />
    <Component.Option value="bmw" label="BMW" />
    <Component.Option value="daimler-mercedes-benz" label="Mercedes-Benz" selected />
    <Component.Option value="vag-volkswagen" label="Volkswagen" />
    <Component.Option value="vag-porsche" label="Porsche" selected />
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
export const PlaygroundMultiple = TemplateMultiple.bind({});
export const PlaygroundGroupMultiple = TemplateGroupMultiple.bind({});

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
