/* eslint-disable no-magic-numbers */
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Theme from "../../settings/theme";
import Component, { Props } from "./index";

const TEXT_VARIANTS = [
  "LargeTitle",
  "Title1",
  "Title2",
  "Title3",
  "Headline",
  "Body",
  "Callout",
  "Subhead",
  "Footnote",
  "Caption1",
  "Caption2",
];

const TEXT_WEIGHTS = ["thin", "light", "regular", "medium", "semibold", "bold", "heavy", "black"];

type ComponentType = React.FunctionComponent<Props & { sampleText: string }>;

export default {
  title: "Atoms/Text",
  component: Component,
  argTypes: {
    variant: {
      options: TEXT_VARIANTS,
      control: "select",
    },
    weight: {
      options: TEXT_WEIGHTS,
      control: "select",
    },
    leading: { control: "boolean" },
    uppercase: { control: "boolean" },
    noBottomMargin: { control: "boolean" },
    color: { options: Object.keys(Theme.colors), control: "select" },
    sampleText: { control: "text" },
  },
} as ComponentMeta<ComponentType>;

// eslint-disable-next-line react/prop-types
const Template: ComponentStory<ComponentType> = ({ sampleText, ...args }) => (
  <Component {...args}>{sampleText}</Component>
);

export const Playground = Template.bind({});
Playground.args = {
  sampleText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae.",
};
