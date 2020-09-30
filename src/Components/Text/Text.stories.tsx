import React from "react";
import Text from "./Text";
import {BMEBox} from "../../index";

export default {
  title: "Text"
};

export const Component = ({ content, ...args }) => (
  <>
    <BMEBox background="light" alignX="left" alignY="center" padding={{y: "xl", x:  "m"}}>
      <Text {...args}>{content}</Text>
    </BMEBox>

    <BMEBox background="dark" alignX="left" alignY="center" padding={{y: "xl", x:  "m"}}>
      <Text {...args}>{content}</Text>
    </BMEBox>

    <BMEBox background="primary" alignX="left" alignY="center" padding={{y: "xl", x:  "m"}}>
      <Text {...args}>{content}</Text>
    </BMEBox>

    <BMEBox background="secondary" alignX="left" alignY="center" padding={{y: "xl", x:  "m"}}>
      <Text {...args}>{content}</Text>
    </BMEBox>

    <BMEBox background="tertiary" alignX="left" alignY="center" padding={{y: "xl", x:  "m"}}>
      <Text {...args}>{content}</Text>
    </BMEBox>
  </>
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

