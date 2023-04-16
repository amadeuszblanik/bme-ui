import { ComponentMeta, ComponentStory } from "@storybook/react";
import Component from "./index";

export default {
  title: "Atoms/Segmented Picker",
  component: Component,
  argTypes: {
    value: {
      control: {
        type: "select",
        options: ["day", "week", "month", "6months", "year"],
      },
      description: "The currently selected value.",
      type: { name: "string | number", required: false },
    },
    onChange: {
      action: "onChange",
      description: "Function to be called when a value is selected.",
      type: { name: "(value: string | number) => void", required: false },
    },
    children: {
      description: "The SegmentedPickerItems to display.",
      type: { name: "SegmentedPickerChildren", required: true },
    },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args}>
  <Component.Item tag="day">D</Component.Item>
  <Component.Item tag="week">W</Component.Item>
  <Component.Item tag="month">M</Component.Item>
  <Component.Item tag="6months">6M</Component.Item>
  <Component.Item tag="year">Y</Component.Item>
</Component>;

export const Playground = Template.bind({});

Template.parameters = {
  pseudo: {
    hover: ["#one", "#two", "#three"],
    focus: ["#two", "#three"],
    active: "#three",
  },
};

