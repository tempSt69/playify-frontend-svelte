import type { Meta, StoryObj } from "@storybook/svelte";

import SongInfo from "./SongInfo.svelte";

const meta = {
  title: "Molecule/SongInfo",
  component: SongInfo,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<SongInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SelectedSong: Story = {
  args: {
    selectedSong: {
      name: "Moto",
      cover: "https://angartwork.anghcdn.co/webp/?id=1171884882",
    },
  },
};
