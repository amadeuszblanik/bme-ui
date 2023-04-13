import { ComponentMeta, ComponentStory } from "@storybook/react";
import { THEME_COLOURS_KEYS } from "../../settings/theme";
import ProgressBar from "./index";

export default {
  title: "Atoms/Progress Bar",
  component: ProgressBar,
  argTypes: {
    value: {
      description: 'The progress value, between 0 and 100',
      type: {
        required: false,
        summary: 'number',
      },
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    label: {
      description: 'The label for the progress bar',
      type: {
        required: false,
        summary: 'string',
      },
    },
    variant: {
      description: 'The color variant for the progress bar',
      type: {
        required: false,
        summary: 'string',
      },
      control: {
        type: 'select',
        options: THEME_COLOURS_KEYS,
      },
    },
    width: {
      description: 'The width of the progress bar',
      type: {
        required: false,
        summary: 'string',
      },
      control: {
        type: 'text',
      },
    },
    minWidth: {
      description: 'The minimum width of the progress bar',
      type: {
        required: false,
        summary: 'string',
      },
      control: {
        type: 'text',
      },
    },
    maxWidth: {
      description: 'The maximum width of the progress bar',
      type: {
        required: false,
        summary: 'string',
      },
      control: {
        type: 'text',
      },
    },
    timeLeft: {
      description: 'The estimated time left until completion',
      type: {
        required: false,
        summary: 'string',
      },
    },
    error: {
      description: 'The error message to display when progress bar encounters an error',
      type: {
        required: false,
        summary: 'string',
      },
    },
    done: {
      description: 'The completion message to display when progress bar is finished',
      type: {
        required: false,
        summary: 'string',
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
