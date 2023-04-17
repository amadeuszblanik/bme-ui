import { ComponentMeta, ComponentStory } from "@storybook/react";
import Component from "./item";

export default {
  title: "Atoms/Segmented Picker/Item",
  component: Component,
  argTypes: {
    tag: {
      control: {
        type: 'select',
        options: ['tag1', 'tag2', 1, 2],
      },
      description: 'The tag for the item.',
      type: { name: 'string | number', required: true },
    },
    selected: {
      control: 'boolean',
      description: 'Whether the item is currently selected. (Will be overwriten by the parent SegmentedPicker)',
      type: { name: 'boolean', required: false },
    },
    onClick: {
      action: 'onClick',
      description: 'Function to be called when the item is selected.',
      type: { name: '(value: string | number) => void', required: false },
    },
    divider: {
      control: 'boolean',
      description: 'Whether to display a divider after the item. (Will be overwriten by the parent SegmentedPicker)',
      type: { name: 'boolean', required: false },
    },
    children: {
      control: 'text',
      description: 'The content of the item.',
      type: { name: 'React.ReactNode | string', required: true },
    },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = ({ children, ...args }) => <Component {...args}>
  {children}
</Component>;

export const Playground = Template.bind({});

Playground.args = {
  children: "Item",
}

Template.parameters = {
  pseudo: {
    hover: ["#one", "#two", "#three"],
    focus: ["#two", "#three"],
    active: "#three",
  },
};

