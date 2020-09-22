import React from "react";
import Text from "./Text";

export default {
  title: "Text"
};

export const Component = ({ content, ...args }) => (
  <Text {...args}>{content}</Text>
);

Component.args = {
  content: 'Lorem ipsum dolor sit amet.'
}

Component.argTypes = {
  content: {
    control: 'text',
  },
  size: {
    control: {
      type: 'inline-radio',
      options: ['xxl', 'xl', 'l', 'm', 's', 'xs', 'xxs'],
    },
  },
  fontFamily: {
    control: {
      type: 'inline-radio',
      options: ['sansSerif', 'serif', 'mono'],
    },
  },
  italic: {
    control: 'boolean',
  },
  weight: {
    control: {
      type: 'inline-radio',
      options: ['bold', 'regular', 'light'],
    },
  },
  align: {
    control: {
      type: 'inline-radio',
      options: ['left', 'center', 'right'],
    },
  },
}

