import { ComponentMeta, ComponentStory } from "@storybook/react";
import { THEME_COLOURS_KEYS } from "../../settings/theme";
import Test from "./index";

export default {
  title: "Atoms/Test",
  component: Test,
  argTypes: {
    variant: {
      options: THEME_COLOURS_KEYS,
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Test>;

const Template: ComponentStory<typeof Test> = (args) => <Test {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  variant: "blue",
};

Template.parameters = {
  pseudo: {
    hover: ["#one", "#two", "#three"],
    focus: ["#two", "#three"],
    active: "#three",
  },
};
