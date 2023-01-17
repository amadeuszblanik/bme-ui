import { ComponentMeta, ComponentStory } from "@storybook/react";
import { THEME_COLOURS_KEYS } from "../../settings/theme";
import Box from "./index";

export default {
  title: "Atoms/Box",
  component: Box,
  argTypes: {
    position: {
      options: [undefined, "static", "relative", "absolute", "fixed", "sticky"],
      control: { type: "select" },
    },
    inline: {
      control: {
        type: "boolean",
      },
    },
    alignX: {
      options: [undefined, "left", "center", "right", "space-between"],
      control: { type: "select" },
    },
    alignY: {
      options: [undefined, "top", "center", "bottom", "space-between"],
      control: { type: "select" },
    },
    direction: {
      options: [undefined, "row", "column"],
      control: { type: "select" },
    },
    wrap: {
      control: {
        options: [undefined, true, "wrap", "nowrap", "wrap-reverse"],
        control: { type: "select" },
      },
    },
    width: {
      control: {
        type: "text",
      },
    },
    minWidth: {
      control: {
        type: "text",
      },
    },
    maxWidth: {
      control: {
        type: "text",
      },
    },
    height: {
      control: {
        type: "text",
      },
    },
    minHeight: {
      control: {
        type: "text",
      },
    },
    maxHeight: {
      control: {
        type: "text",
      },
    },
    padding: {
      control: {
        type: "text",
      },
    },
    margin: {
      control: { type: "text" },
    },
    rounded: {
      control: {
        type: "boolean",
      },
    },
    border: {
      options: [undefined, ...THEME_COLOURS_KEYS],
      control: { type: "select" },
    },
    background: {
      options: [undefined, ...THEME_COLOURS_KEYS],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <Box {...args}>
    <Box inline padding="xs|sm">
      Item 0: Lorem ipsum dolor sit amet
    </Box>
    <Box inline padding="xs|sm">
      Item 1
    </Box>
    <Box inline padding="xs|sm">
      Item 2
    </Box>
  </Box>
);

export const Playground = Template.bind({});

Playground.args = {
  padding: "md|xl",
  margin: "md|xl",
};

Template.parameters = {
  pseudo: {
    hover: ["#one", "#two", "#three"],
    focus: ["#two", "#three"],
    active: "#three",
  },
};
