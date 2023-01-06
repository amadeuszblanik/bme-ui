/* eslint-disable no-magic-numbers */
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ItemProps } from "./item";
import Button from "../button";
import Component, { Props } from "./index";

export default {
  title: "Atoms/List",
  component: Component,
  argTypes: {
    label: { control: "text" },
    onClick: { action: "onClick" },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = ({ onClick, ...args }: Props & ItemProps) => (
  <Component {...args}>
    <Component.Item
      onClick={onClick}
      actions={
        <Button variant="red" size="small">
          Delete
        </Button>
      }
    >
      <div>13.70</div>
      <div>5 Sept at 11:22am</div>
    </Component.Item>
    <Component.Item
      actions={
        <>
          <Button variant="blue" size="small">
            Edit
          </Button>
          <Button variant="red" size="small">
            Delete
          </Button>
        </>
      }
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
