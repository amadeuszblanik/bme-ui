import React from "react";
import {BMEHeader} from "../../index";

export default {
  title: "Header"
};

export const Component = ({ content, ...args }) => (
  <>
    <BMEHeader {...args}>{content}</BMEHeader>
  </>
);

Component.args = {
  content: 'Lorem ipsum dolor sit amet.',
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
  align: {
    control: {
      type: 'inline-radio',
      options: ['left', 'center', 'right'],
    },
  },
}

