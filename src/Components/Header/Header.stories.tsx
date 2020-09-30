import React from "react";
import {BMEBox, BMEHeader} from "../../index";

export default {
  title: "Header"
};

export const Component = ({ content, ...args }) => (
  <>
    <BMEBox background="light" alignX="left" alignY="center" padding={{y: "xl", x:  "m"}}>
      <BMEHeader {...args}>{content}</BMEHeader>
    </BMEBox>

    <BMEBox background="dark" alignX="left" alignY="center" padding={{y: "xl", x:  "m"}}>
      <BMEHeader {...args}>{content}</BMEHeader>
    </BMEBox>

    <BMEBox background="primary" alignX="left" alignY="center" padding={{y: "xl", x:  "m"}}>
      <BMEHeader {...args}>{content}</BMEHeader>
    </BMEBox>

    <BMEBox background="secondary" alignX="left" alignY="center" padding={{y: "xl", x:  "m"}}>
      <BMEHeader {...args}>{content}</BMEHeader>
    </BMEBox>

    <BMEBox background="tertiary" alignX="left" alignY="center" padding={{y: "xl", x:  "m"}}>
      <BMEHeader {...args}>{content}</BMEHeader>
    </BMEBox>
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

