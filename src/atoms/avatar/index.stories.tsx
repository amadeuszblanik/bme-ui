import { ComponentMeta, ComponentStory } from "@storybook/react";
import { THEME_COLOURS_KEYS } from "../../settings/theme";
import Avatar from "./index";
import { IconNames } from "../icon/types";

export default {
  title: "Atoms/Avatar",
  component: Avatar,
  argTypes: {
    src: {
      control: { type: 'text' },
      description: 'URL of the image to display in the avatar.',
    },
    size: {
      control: { type: 'radio', options: ['small', 'medium', 'large'] },
      description: 'Size of the avatar.',
    },
    variant: {
      control: { type: 'select', options: THEME_COLOURS_KEYS },
      description: 'Variant of the avatar.',
    },
    rounded: {
      control: { type: 'boolean' },
      description: 'Whether the avatar should be rounded.',
    },
    border: {
      control: { type: 'boolean' },
      description: 'Whether the avatar should have a border.',
    },
    status: {
      control: { type: 'select', options: THEME_COLOURS_KEYS },
      description: 'Status of the avatar.',
    },
    children: {
      control: { type: 'text' },
      description: 'Children to render inside the avatar, such as initials or icons.',
    },
    actionIcon: {
      control: { type: 'select', options: IconNames },
      description: 'Icon of the avatar action.',
    },
    actionOnClick: {
      action: "actionOnClick()",
      description: '(Action) clicked',
    }
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

const TemplateWithAction: ComponentStory<typeof Avatar> = ({ ...args }) => <Avatar {...args}>
  <Avatar.Action icon={args.actionIcon || "camera"} onClick={args.actionOnClick} />
</Avatar>;

export const Playground = Template.bind({});
export const PlaygroundWithAction = TemplateWithAction.bind({});

Playground.args = {
  src: "https://images.pexels.com/photos/59849/schnauzer-miniature-schnauzer-dog-running-59849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
};

PlaygroundWithAction.args = {
  src: "https://images.pexels.com/photos/59849/schnauzer-miniature-schnauzer-dog-running-59849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
};

Template.parameters = {
  pseudo: {
    hover: ["#one", "#two", "#three"],
    focus: ["#two", "#three"],
    active: "#three",
  },
};

TemplateWithAction.parameters = {
  pseudo: {
    hover: ["#one", "#two", "#three"],
    focus: ["#two", "#three"],
    active: "#three",
  },
};
