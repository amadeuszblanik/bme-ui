import { ComponentMeta, ComponentStory } from "@storybook/react";
import { THEME_COLOURS_KEYS } from "../../settings/theme";
import Component from "./index";

export default {
  title: "Atoms/Select",
  component: Component,
  argTypes: {
    value: {
      control: {
        type: "object",
      },
    },
    list: {
      control: {
        type: "object",
      },
    },
    variant: {
      options: THEME_COLOURS_KEYS,
      control: { type: "select" },
    },
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
    emptyLabel: {
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
    multiple: {
      control: { type: "boolean" },
    },
    searchable: {
      description: "Searchable only works without native",
      control: { type: "boolean" },
    },
    native: {
      control: { type: "boolean" },
    },
    onValue: {
      action: "onValue",
    },
    onChange: {
      action: "onChange",
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
