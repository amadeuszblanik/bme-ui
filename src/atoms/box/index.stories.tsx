import { ComponentMeta, ComponentStory } from "@storybook/react";
import { THEME_COLOURS_KEYS } from "../../settings/theme";
import Box from "./index";

export default {
  title: "Atoms/Box",
  component: Box,
  argTypes: {
    innerRef: {
      description: 'Reference to the inner `div` element.',
    },
    children: {
      description: 'Content to render inside the box.',
    },
    position: {
      control: { type: 'radio', options: ['relative', 'absolute', 'fixed'] },
      description: 'Positioning of the box.',
    },
    overflow: {
      control: { type: 'radio', options: ['auto', 'hidden', 'scroll', 'visible'] },
      description: 'Overflow of the box.',
    },
    overflowX: {
      control: { type: 'radio', options: ['auto', 'hidden', 'scroll', 'visible'] },
      description: 'Horizontal overflow of the box.',
    },
    overflowY: {
      control: { type: 'radio', options: ['auto', 'hidden', 'scroll', 'visible'] },
      description: 'Vertical overflow of the box.',
    },
    inline: {
      control: { type: 'boolean' },
      description: 'Whether the box should be displayed as an inline element.',
    },
    alignX: {
      control: { type: 'radio', options: ['left', 'center', 'right', 'space-between'] },
      description: 'Horizontal alignment of the box.',
    },
    alignY: {
      control: { type: 'radio', options: ['top', 'center', 'bottom', 'space-between'] },
      description: 'Vertical alignment of the box.',
    },
    direction: {
      control: { type: 'radio', options: ['row', 'column'] },
      description: 'Direction of the flexbox layout inside the box.',
    },
    wrap: {
      control: { type: 'radio', options: [true, 'nowrap', 'wrap', 'wrap-reverse'] },
      description: 'Whether the flexbox layout should wrap its contents, and in what way.',
    },
    width: {
      control: { type: 'text' },
      description: 'Width of the box.',
    },
    minWidth: {
      control: { type: 'text' },
      description: 'Minimum width of the box.',
    },
    maxWidth: {
      control: { type: 'text' },
      description: 'Maximum width of the box.',
    },
    height: {
      control: { type: 'text' },
      description: 'Height of the box.',
    },
    minHeight: {
      control: { type: 'text' },
      description: 'Minimum height of the box.',
    },
    maxHeight: {
      control: { type: 'text' },
      description: 'Maximum height of the box.',
    },
    padding: {
      control: { type: 'text' },
      description: 'Padding of the box.',
    },
    margin: {
      control: { type: 'text' },
      description: 'Margin of the box.',
    },
    rounded: {
      control: { type: 'boolean' },
      description: 'Whether the box should have rounded corners.',
    },
    border: {
      control: { type: 'select', options: THEME_COLOURS_KEYS },
      description: 'Colour of the box border.',
    },
    background: {
      control: { type: 'select', options: THEME_COLOURS_KEYS },
      description: 'Background colour of the box.',
    },
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <Box {...args}>
    <Box inline padding="xs|sm">
      Item 0: Lorem ipsum dolor sit amet
    </Box>
    <Box inline padding="xs|sm">
      Item 1
    </Box>
    <Box inline padding="xs|sm">
      Item 2
    </Box>
  </Box>
);

export const Playground = Template.bind({});

Playground.args = {
  padding: "md|xl",
  margin: "md|xl",
};

Template.parameters = {
  pseudo: {
    hover: ["#one", "#two", "#three"],
    focus: ["#two", "#three"],
    active: "#three",
  },
};
