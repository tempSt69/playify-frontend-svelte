import type { Meta, StoryObj } from "@storybook/svelte";

import Button from "./Button.svelte";

const meta = {
  title: "Atom/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    type: {
      control: { type: "select" },
      options: ["button", "submit"],
    },
    primary: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: "Button",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    primary: true,
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    primary: true,
    size: "small",
    label: "Button",
  },
};
