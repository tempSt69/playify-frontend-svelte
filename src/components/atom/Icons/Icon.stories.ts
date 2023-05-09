import type { Meta, StoryObj } from "@storybook/svelte";

import Icon from "./Icon.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: "Atom/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    icon: {},
  },
} satisfies Meta<Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Play: Story = {
  args: {
    icon: "play",
  },
};

export const Pause: Story = {
  args: {
    icon: "pause",
  },
};
