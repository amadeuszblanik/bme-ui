import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IconNames } from "./types";
import { THEME_COLOURS_KEYS } from "../../settings/theme";
import Icon from "./index";

export default {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {
    name: {
      options: IconNames,
      control: { type: "select" },
    },
    color: {
      options: THEME_COLOURS_KEYS,
      control: { type: "select" },
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
