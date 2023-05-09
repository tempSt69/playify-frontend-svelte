import type { Meta, StoryObj } from "@storybook/svelte";

import Cover from "./Cover.svelte";

const meta = {
  title: "Atom/Cover",
  component: Cover,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    lowOpacity: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<Cover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://angartwork.anghcdn.co/webp/?id=1171884882",
  },
};

export const LowOpacity: Story = {
  args: {
    src: "https://angartwork.anghcdn.co/webp/?id=1171884882",
    lowOpacity: true,
  },
};
