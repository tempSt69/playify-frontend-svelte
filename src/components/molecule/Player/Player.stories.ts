import type { Meta, StoryObj } from "@storybook/svelte";

import Player from "./Player.svelte";

const meta = {
  title: "Molecule/Player",
  component: Player,
  tags: ["autodocs"],
  argTypes: {
    playing: {
      control: { type: "boolean" },
    },
    hasSong: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<Player>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PlayingSong: Story = {
  args: {
    cover: "https://angartwork.anghcdn.co/webp/?id=1171884882",
    playing: true,
    hasSong: true,
  },
};

export const PausedSong: Story = {
  args: {
    cover: "https://angartwork.anghcdn.co/webp/?id=1171884882",
    playing: false,
    hasSong: true,
  },
};

export const NoSong: Story = {
  args: {
    playing: false,
    hasSong: false,
  },
};
