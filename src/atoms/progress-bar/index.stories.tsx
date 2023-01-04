import { ComponentMeta, ComponentStory } from "@storybook/react";
import { THEME_COLOURS_KEYS } from "../../settings/theme";
import ProgressBar from "./index";

export default {
  title: "Atoms/Progress Bar",
  component: ProgressBar,
  argTypes: {
    value: {
      control: {
        type: "number",
      },
    },
    label: {
      control: {
        type: "number",
        description: "$0 will be replaced with value formatted as percentage",
      },
    },
    variant: {
      options: THEME_COLOURS_KEYS,
      control: { type: "select" },
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
    timeLeft: {
      control: {
        type: "text",
        description: "In seconds",
      },
    },
    error: {
      control: {
        type: "text",
      },
    },
    done: {
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <div style={{ maxWidth: 320, margin: "0 auto" }}>
    <ProgressBar {...args} />
  </div>
);

export const Playground = Template.bind({});

Playground.args = {
  label: "$0 Complete",
};

Template.parameters = {
  pseudo: {
    hover: ["#one", "#two", "#three"],
    focus: ["#two", "#three"],
    active: "#three",
  },
};
