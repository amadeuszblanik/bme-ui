import { ComponentMeta, ComponentStory } from "@storybook/react";
import { THEME_COLOURS_KEYS } from "../../settings/theme";
import Spinner from "./index";

export default {
  title: "Atoms/Spinner",
  component: Spinner,
  argTypes: {
    size: {
      control: { type: 'radio', options: ['small', 'medium', 'large'] },
      description: 'Size of the spinner.',
    },
    variant: {
      control: { type: 'select', options: THEME_COLOURS_KEYS },
      description: 'Variant of the spinner.',
    },
    strokeWidth: {
      control: { type: 'number', options: { min: 0 } },
      description: 'Variant of the spinner.',
    },
  },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Playground = Template.bind({});
