import React from "react";
import {BMEBox, BMEImage} from "../../index";

export default {
  title: "Image"
};

export const Component = ({ content, source, ...args }) => (
  <>
    <BMEBox background="light" alignX="center" alignY="center" padding={{y: "xl", x:  "m"}}>
      <BMEBox width="half" alignX="center" alignY="center">
        <BMEImage source={source} {...args}/>
      </BMEBox>
    </BMEBox>

    <BMEBox background="dark" alignX="center" alignY="center" padding={{y: "xl", x:  "m"}}>
      <BMEBox width="half" alignX="center" alignY="center">
        <BMEImage source={source} {...args}/>
      </BMEBox>
    </BMEBox>

    <BMEBox background="primary" alignX="center" alignY="center" padding={{y: "xl", x:  "m"}}>
      <BMEBox width="half" alignX="center" alignY="center">
        <BMEImage source={source} {...args}/>
      </BMEBox>
    </BMEBox>

    <BMEBox background="secondary" alignX="center" alignY="center" padding={{y: "xl", x:  "m"}}>
      <BMEBox width="half" alignX="center" alignY="center">
        <BMEImage source={source} {...args}/>
      </BMEBox>
    </BMEBox>

    <BMEBox background="tertiary" alignX="center" alignY="center" padding={{y: "xl", x:  "m"}}>
      <BMEBox width="half" alignX="center" alignY="center">
        <BMEImage source={source} {...args}/>
      </BMEBox>
    </BMEBox>
  </>
);

Component.args = {
  source: 'https://images.pexels.com/photos/3078831/pexels-photo-3078831.jpeg',
  width: 200,
  lazy: true,
}

Component.argTypes = {
  src: {
    control: 'text',
  },
  width: {
    control: 'number',
  },
  lazy: {
    control: 'boolean',
  },
}

