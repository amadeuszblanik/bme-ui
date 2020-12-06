import React from "react";
import {BMEBox, BMEHeader, BMENav} from "../../index";

export default {
  title: "Navigation"
};

export const Component = ({ ...args }) => (
  <BMEBox direction="column">
    <BMEBox margin={{ y: { bottom: "l" } }}>
      <BMEHeader>
        Sample
      </BMEHeader>
    </BMEBox>
    <BMENav {...args}>
      <BMENav.Item>Home</BMENav.Item>
      <BMENav.Item active>News</BMENav.Item>
      <BMENav.Item>Blog</BMENav.Item>
      <BMENav.Item>Pricing</BMENav.Item>
      <BMENav.Item>About us</BMENav.Item>
      <BMENav.Item>Contact</BMENav.Item>
    </BMENav>
    <BMEBox margin={{ y: "l" }}>
      <BMEHeader>
        With scroll
      </BMEHeader>
    </BMEBox>
    <BMENav {...args}>
      <BMENav.Item active>Lorem</BMENav.Item>
      <BMENav.Item>Ipsum</BMENav.Item>
      <BMENav.Item>Dolor</BMENav.Item>
      <BMENav.Item>Sit</BMENav.Item>
      <BMENav.Item>Amet</BMENav.Item>
      <BMENav.Item>Consectetur</BMENav.Item>
      <BMENav.Item>Adipiscing</BMENav.Item>
      <BMENav.Item>Elit</BMENav.Item>
      <BMENav.Item>Duis</BMENav.Item>
      <BMENav.Item>Eget</BMENav.Item>
      <BMENav.Item>Pellentesque</BMENav.Item>
      <BMENav.Item>Sem</BMENav.Item>
      <BMENav.Item>Fringilla</BMENav.Item>
      <BMENav.Item>Vulputate</BMENav.Item>
      <BMENav.Item>Tortor</BMENav.Item>
      <BMENav.Item>Aliquam</BMENav.Item>
    </BMENav>
  </BMEBox>
)
