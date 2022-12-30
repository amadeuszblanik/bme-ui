import { ComponentMeta, ComponentStory } from "@storybook/react";
import { THEME_COLOURS_KEYS } from "../../settings/theme";
import { IconNames } from "../icon/types";
import Tag from "./index";

export default {
  title: "Atoms/Tag",
  component: Tag,
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    variant: {
      options: THEME_COLOURS_KEYS,
      control: { type: "select" },
    },
    icon: {
      options: [undefined, ...IconNames],
      control: { type: "select" },
    },
    onRemove: {
      action: "onRemove",
    },
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  label: "Tag",
};

Template.parameters = {
  pseudo: {
    hover: ["#one", "#two", "#three"],
    focus: ["#two", "#three"],
    active: "#three",
  },
};
