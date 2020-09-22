import React from "react";
import Text from "./Text";
import GlobalStyles from "../GlobalStyles/GlobalStyles";

export default {
  title: "Text"
};

export const Component = ({ content, ...args }) => (
  <>
    <GlobalStyles />
    <Text {...args}>{content}</Text>
  </>
);

Component.args = {
  content: 'Lorem ipsum dolor sit amet.'
}

Component.argTypes = {
  weight: {
    control: {
      type: 'inline-radio',
      options: ['bold', 'regular', 'light'],
    },
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
  content: {
    control: 'text',
  },
  align: {
    control: {
      type: 'inline-radio',
      options: ['left', 'center', 'right'],
    },
  },
}

