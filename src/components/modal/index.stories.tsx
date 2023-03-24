import { ComponentMeta, ComponentStory } from "@storybook/react";
import Box from "../../atoms/box";
import Modal from "./index";

export default {
  title: "Molecules/Modal",
  component: Modal,
  argTypes: {
    title: {
      control: { type: "text" },
    },
    position: {
      options: [undefined, "fixed", "absolute"],
      control: { type: "select" },
    },
    onClose: {
      action: "onClose",
      description: "Optional. Close button will be visible only when onClose was provided",
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <div
    style={{
      position: "relative",
      width: 420,
      height: 420,
      overflow: "hidden",
      background: "purple",
      borderRadius: "5px",
    }}
  >
    <Modal {...args}>
      <Box inline padding="xs|sm">
        Item 0: Lorem ipsum dolor sit amet
      </Box>
      <Box inline padding="xs|sm">
        Item 1
      </Box>
      <Box inline padding="xs|sm">
        Item 2
      </Box>
    </Modal>
  </div>
);

const TemplateShort: ComponentStory<typeof Modal> = (args) => (
  <div
    style={{
      position: "relative",
      width: 420,
      height: 420,
      overflow: "hidden",
      background: "purple",
      borderRadius: "5px",
    }}
  >
    <Modal {...args}>
      Lorem ipsum dolor sit amet
    </Modal>
  </div>
);

export const Playground = Template.bind({});
export const PlaygroundShort = TemplateShort.bind({});

Playground.args = {
  title: "Modal title",
};

PlaygroundShort.args = {
  title: "Modal title",
}

Template.parameters = {
  pseudo: {
    hover: ["#one", "#two", "#three"],
    focus: ["#two", "#three"],
    active: "#three",
  },
};
