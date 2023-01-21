/* eslint-disable no-magic-numbers */
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ListItemProps, ListProps } from "./types";
import Component from "./index";

export default {
  title: "Atoms/List",
  component: Component,
  argTypes: {
    label: { control: "text" },
    onClick: { action: "onClick" },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = ({ onClick, ...args }: ListProps & ListItemProps) => (
  <Component {...args}>
    <Component.Item
      onClick={onClick}
      actions={[
        {
          variant: "blue",
          children: "Edit",
        },
        {
          variant: "red",
          children: "Delete",
        },
      ]}
    >
      <div>13.70</div>
      <div>5 Sept at 11:22am</div>
    </Component.Item>
    <Component.Item
      actions={[
        {
          variant: "blue",
          children: "Edit",
        },
        {
          variant: "red",
          children: "Delete",
        },
      ]}
    >
      <div>13.70</div>
      <div>5 Sept at 11:22am</div>
    </Component.Item>
    <Component.Item>
      <div>13.70</div>
      <div>5 Sept at 11:22am</div>
    </Component.Item>
  </Component>
);

export const Playground = Template.bind({});
Playground.args = {
  label: "Lorem ipsum dolor sit amet",
};
