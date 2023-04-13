import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IconNames } from "./types";
import { THEME_COLOURS_KEYS } from "../../settings/theme";
import Icon from "./index";

export default {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {
    name: {
      control: { type: 'select', options: IconNames },
      description: 'The name of the icon to display.',
    },
    color: {
      control: { type: 'select', options: THEME_COLOURS_KEYS },
      description: 'Colour of the icon.',
    },
    size: {
      control: { type: 'number', min: 0 },
      description: 'Size of the icon in pixels.',
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Playground = Template.bind({});

Template.parameters = {
  pseudo: {
    hover: ["#one", "#two", "#three"],
    focus: ["#two", "#three"],
    active: "#three",
  },
};
