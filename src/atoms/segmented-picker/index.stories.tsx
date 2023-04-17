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
    itemOnClick: {
      action: "itemOnClick",
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
  <Component.Item tag="day" onClick={args.itemOnClick}>D</Component.Item>
  <Component.Item tag="week" onClick={args.itemOnClick}>W</Component.Item>
  <Component.Item tag="month" onClick={args.itemOnClick}>M</Component.Item>
  <Component.Item tag="6months" onClick={args.itemOnClick}>6M</Component.Item>
  <Component.Item tag="year" onClick={args.itemOnClick}>Y</Component.Item>
</Component>;

export const Playground = Template.bind({});

Template.parameters = {
  pseudo: {
    hover: ["#one", "#two", "#three"],
    focus: ["#two", "#three"],
    active: "#three",
  },
};

