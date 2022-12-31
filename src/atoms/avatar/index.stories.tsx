import { ComponentMeta, ComponentStory } from "@storybook/react";
import { THEME_COLOURS_KEYS } from "../../settings/theme";
import Avatar from "./index";

export default {
  title: "Atoms/Avatar",
  component: Avatar,
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
    variant: {
      options: THEME_COLOURS_KEYS,
      control: { type: "select" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    rounded: {
      control: {
        type: "boolean",
      },
    },
    border: {
      control: {
        type: "boolean",
      },
    },
    status: {
      options: [null, ...THEME_COLOURS_KEYS],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  src: "https://images.pexels.com/photos/59849/schnauzer-miniature-schnauzer-dog-running-59849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
};

Template.parameters = {
  pseudo: {
    hover: ["#one", "#two", "#three"],
    focus: ["#two", "#three"],
    active: "#three",
  },
};