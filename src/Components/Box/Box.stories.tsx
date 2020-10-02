import React from "react";
import {BMEBox, BMEText} from "../../index";

export default {
  title: "Box"
};

export const Component = ({...args}) => (
  <>
    <BMEBox background="light" alignX="left" alignY="center" padding={{y: "xl", x: "m"}}>
      <BMEBox {...args}>
        <BMEText fontFamily="mono">
          Lorem ipsum.
        </BMEText>
        <BMEText fontFamily="mono">
          Dolor sit amet.
        </BMEText>
      </BMEBox>
    </BMEBox>

    <BMEBox background="dark" alignX="left" alignY="center" padding={{y: "xl", x: "m"}}>
      <BMEBox {...args}>
        <BMEText fontFamily="mono">
          Lorem ipsum.
        </BMEText>
        <BMEText fontFamily="mono">
          Dolor sit amet.
        </BMEText>
      </BMEBox>
    </BMEBox>

    <BMEBox background="primary" alignX="left" alignY="center" padding={{y: "xl", x: "m"}}>
      <BMEBox {...args}>
        <BMEText fontFamily="mono">
          Lorem ipsum.
        </BMEText>
        <BMEText fontFamily="mono">
          Dolor sit amet.
        </BMEText>
      </BMEBox>
    </BMEBox>

    <BMEBox background="secondary" alignX="left" alignY="center" padding={{y: "xl", x: "m"}}>
      <BMEBox {...args}>
        <BMEText fontFamily="mono">
          Lorem ipsum.
        </BMEText>
        <BMEText fontFamily="mono">
          Dolor sit amet.
        </BMEText>
      </BMEBox>
    </BMEBox>

    <BMEBox background="tertiary" alignX="left" alignY="center" padding={{y: "xl", x: "m"}}>
      <BMEBox {...args}>
        <BMEText fontFamily="mono">
          Lorem ipsum.
        </BMEText>
        <BMEText fontFamily="mono">
          Dolor sit amet.
        </BMEText>
      </BMEBox>
    </BMEBox>
  </>
);

Component.argTypes = {
  width: {
    control: {
      type: 'inline-radio',
      options: ['full', 'half', false],
    },
  },
  height: {
    control: {
      type: 'inline-radio',
      options: ['full', 'fullPage', 'half', false],
    },
  },
  inline: {
    control: {
      type: 'inline-radio',
      options: [true, false],
    },
  },
  alignY: {
    control: {
      type: 'inline-radio',
      options: ['top', 'center', 'bottom', 'justify', false],
    },
  },
  alignX: {
    control: {
      type: 'inline-radio',
      options: ['left', 'center', 'right', 'justify', false],
    },
  },
  direction: {
    control: {
      type: 'inline-radio',
      options: ['row', 'column', false],
    },
  },
  rounded: {
    control: {
      type: 'inline-radio',
      options: ['full', true, false],
    },
  },
  background: {
    control: {
      type: 'inline-radio',
      options: ['primary', 'secondary', 'tertiary', 'dark', 'light', false],
    },
  },
  padding: {
    control: {
      type: 'inline-radio',
      options: ['xxl', 'xl', 'l', 'm', 's', 'xs', 'xxs', false],
    },
  },
  margin: {
    control: {
      type: 'inline-radio',
      options: ['xxl', 'xl', 'l', 'm', 's', 'xs', 'xxs', false],
    },
  },
};
