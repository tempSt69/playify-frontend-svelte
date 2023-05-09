import type { Meta, StoryObj } from "@storybook/svelte";

import ButtonPlayer from "./ButtonPlayer.svelte";

const meta = {
  title: "Atom/ButtonPlayer",
  component: ButtonPlayer,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    border: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    iconName: {
      control: { type: "select" },
      options: ["play", "pause"],
    },
  },
} satisfies Meta<ButtonPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Play: Story = {
  args: {
    iconName: "play",
  },
};

export const Pause: Story = {
  args: {
    iconName: "pause",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const XLarge: Story = {
  args: {
    size: "xlarge",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};
