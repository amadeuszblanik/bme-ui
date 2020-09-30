import React from "react";
import {BMEBox, BMEButton, BMEText} from "../../index";

export default {
  title: "Button"
};

export const Component = ({content, ...args}) => (
  <>
    <BMEBox background="light" alignX="center" alignY="center" padding={{y: "xl"}}>
      <BMEButton {...args}>
        <BMEText>
          {content}
        </BMEText>
      </BMEButton>
    </BMEBox>

    <BMEBox background="dark" alignX="center" alignY="center" padding={{y: "xl"}}>
      <BMEButton {...args}>
        <BMEText>
          {content}
        </BMEText>
      </BMEButton>
    </BMEBox>
  </>
);

Component.args = {
  content: 'Click me! 👆',
  variant: 'secondary',
};

Component.argTypes = {
  content: {
    control: 'text',
  },
  variant: {
    control: {
      type: 'inline-radio',
      options: ['primary', 'secondary', 'tertiary', 'dark', 'light', false],
    },
  },

  outline: {
    control: 'boolean',
  },

  rounded: {
    control: 'boolean',
  },
};
