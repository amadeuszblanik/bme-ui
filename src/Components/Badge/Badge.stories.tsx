import React from "react";
import {BMEBadge, BMEBox, BMEButton, BMEText} from "../../index";

export default {
  title: "Badge"
};

export const Component = ({ content, ...args }) => (
  <>
    <BMEBox background="light" alignX="left" alignY="center" padding={{y: "xl", x:  "m"}}>
      <BMEBox width="full">
        <BMEText>
          Messages
          <BMEBadge {...args}>{content}</BMEBadge>
        </BMEText>
      </BMEBox>
      <BMEBox width="full">
        <BMEButton variant="tertiary">
          <BMEText>
            Messages
            <BMEBadge {...args}>{content}</BMEBadge>
          </BMEText>
        </BMEButton>
      </BMEBox>
    </BMEBox>

    <BMEBox background="dark" alignX="left" alignY="center" padding={{y: "xl", x:  "m"}}>
      <BMEBox width="full">
        <BMEText>
          Messages
          <BMEBadge {...args}>{content}</BMEBadge>
        </BMEText>
      </BMEBox>
      <BMEBox width="full">
        <BMEButton variant="tertiary">
          <BMEText>
            Messages
            <BMEBadge {...args}>{content}</BMEBadge>
          </BMEText>
        </BMEButton>
      </BMEBox>
    </BMEBox>

    <BMEBox background="primary" alignX="left" alignY="center" padding={{y: "xl", x:  "m"}}>
      <BMEBox width="full">
        <BMEText>
          Messages
          <BMEBadge {...args}>{content}</BMEBadge>
        </BMEText>
      </BMEBox>
      <BMEBox width="full">
        <BMEButton variant="tertiary">
          <BMEText>
            Messages
            <BMEBadge {...args}>{content}</BMEBadge>
          </BMEText>
        </BMEButton>
      </BMEBox>
    </BMEBox>

    <BMEBox background="secondary" alignX="left" alignY="center" padding={{y: "xl", x:  "m"}}>
      <BMEBox width="full">
        <BMEText>
          Messages
          <BMEBadge {...args}>{content}</BMEBadge>
        </BMEText>
      </BMEBox>
      <BMEBox width="full">
        <BMEButton variant="tertiary">
          <BMEText>
            Messages
            <BMEBadge {...args}>{content}</BMEBadge>
          </BMEText>
        </BMEButton>
      </BMEBox>
    </BMEBox>

    <BMEBox background="tertiary" alignX="left" alignY="center" padding={{y: "xl", x:  "m"}}>
      <BMEBox width="full">
        <BMEText>
          Messages
          <BMEBadge {...args}>{content}</BMEBadge>
        </BMEText>
      </BMEBox>
      <BMEBox width="full">
        <BMEButton variant="tertiary">
          <BMEText>
            Messages
            <BMEBadge {...args}>{content}</BMEBadge>
          </BMEText>
        </BMEButton>
      </BMEBox>
    </BMEBox>
  </>
);

Component.args = {
  content: '99+',
  variant: 'dark',
}

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
}

