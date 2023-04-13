import { ComponentMeta, ComponentStory } from "@storybook/react";
import { THEME_COLOURS_KEYS } from "../../settings/theme";
import { IconNames } from "../icon/types";
import Tag from "./index";

export default {
  title: "Atoms/Tag",
  component: Tag,
  argTypes: {
    label: {
      description: 'The text label of the tag',
      control: { type: 'text' },
    },
    size: {
      description: 'The size of the tag',
      control: { type: 'radio', options: ['small', 'medium', 'large'] },
    },
    variant: {
      description: 'The color variant of the tag',
      control: { type: 'select', options: THEME_COLOURS_KEYS },
    },
    icon: {
      description: 'The name of the icon to display next to the label',
      control: { type: 'select', options: IconNames },
    },
    onRemove: {
      description: 'Callback function to handle removal of the tag',
      action: 'removed',
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
