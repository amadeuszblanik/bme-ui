/* eslint-disable no-magic-numbers */
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { THEME_COLOURS_KEYS } from "../../settings/theme";
import Component, { Props } from "./index";

type ComponentType = React.FunctionComponent<Props & { sampleText: string }>;

export default {
  title: "Atoms/Text",
  component: Component,
  argTypes: {
    vachildren: {
      type: { name: "string", required: true },
      description: "The text content to be displayed",
      control: { type: "text" },
    },
    variant: {
      type: "string",
      description: "The typography variant to be used",
      control: { type: "select", options: ["LargeTitle", "Title1", "Title2", "Title3", "Headline", "Body", "Callout", "Subhead", "Footnote", "Caption1", "Caption2"] },
    },
    weight: {
      type: "string",
      description: "The font weight to be used",
      control: { type: "select", options: ["Thin", "UltraLight", "Light", "Regular", "Medium", "SemiBold", "Bold", "Heavy", "Black"] },
    },
    leading: {
      type: { name: "boolean" },
      description: "Whether to apply additional line-height to the text",
      control: { type: "boolean" },
    },
    noBottomMargin: {
      type: { name: "boolean" },
      description: "Whether to remove the default bottom margin",
      control: { type: "boolean" },
    },
    color: {
      type: {
        name: "string",
        required: false,
      },
      description: "The text color to be used",
      control: { type: "select", options: THEME_COLOURS_KEYS },
    },
    fontStyle: {
      type: {
        name: "string",
        required: false,
      },
      description: "The font style to be used",
      control: { type: "select", options: ["normal", "italic"] },
    },
    lineHeight: {
      type: { name: "string", required: false },
      description: "The line height to be used",
      control: { type: "text" },
    },
    letterSpacing: {
      type: { name: "string", required: false },
      description: "The letter spacing to be used",
      control: { type: "text" },
    },
    lineFormat: {
      type: "string",
      description: "The line format to be used",
      control: { type: "select", options: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] },
    },
    uppercase: {
      type: { name: "boolean" },
      description: "Whether to convert the text to uppercase",
      control: { type: "boolean" },
    },
    align: {
      type: "string",
      description: "The text alignment to be used",
      control: { type: "select", options: ["left", "center", "right"] },
    },
    ellipsis: {
      type: { name: "boolean" },
      description: "Whether to display an ellipsis for text that overflows its container",
      control: { type: "boolean" },
    },
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
