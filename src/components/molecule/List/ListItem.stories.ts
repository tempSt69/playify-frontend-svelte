import type { Meta, StoryObj } from "@storybook/svelte";

import ListItem from "./ListItem.svelte";

const meta = {
  title: "Molecule/ListItem",
  component: ListItem,
  tags: ["autodocs"],
  argTypes: {
    playing: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Item: Story = {
  args: {
    item: {
      id: "1",
      name: "Moto",
      duration: 120,
      artist: {
        id: "1",
        name: "Alekos",
        cover: "ok",
      },
      trackUrl: "try",
      active: false,
    },
    playing: false,
  },
};

export const ItemActive: Story = {
  args: {
    item: {
      id: "1",
      name: "Moto",
      duration: 120,
      artist: {
        id: "1",
        name: "Alekos",
        cover: "ok",
      },
      trackUrl: "try",
      active: true,
    },
    playing: true,
  },
};
