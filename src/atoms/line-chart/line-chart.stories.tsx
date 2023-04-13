import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Component from "./index";

export default {
  title: 'Atoms/Line chart',
  component: Component,
  argTypes: {
    data: {
      control: "array",
      description: 'An array of LineChartItem objects, containing the data points for the chart',
      type: {
        required: true,
        summary: 'LineChartItem[]',
      },
    },
    width: {
      description: 'The width of the chart component, in pixels',
      type: {
        required: false,
        summary: 'number',
      },
      control: {
        type: 'number',
        min: 0,
      },
    },
    loading: {
      description: 'If true, the chart is in a loading state and is not displaying any data',
      type: {
        required: false,
        summary: 'boolean',
      },
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  data: [
    { y: 13.7, x: new Date("2022-09-16") },
    { y: 14.1, x: new Date("2022-08-16") },
    { y: 13.5, x: new Date("2022-08-16") },
    { y: 13.3, x: new Date("2022-08-12") },
    { y: 12.3, x: new Date("2022-07-27") },
    { y: 11.5, x: new Date("2022-07-16") },
    { y: 11.25, x: new Date("2022-07-12") },
    { y: 11, x: new Date("2022-07-10") },
    { y: 10.85, x: new Date("2022-07-08") },
  ],
};
