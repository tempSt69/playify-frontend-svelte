import type { Meta, StoryObj } from "@storybook/svelte";

import List from "./List.svelte";

const meta = {
  title: "Molecule/List",
  component: List,
  tags: ["autodocs"],
} satisfies Meta<List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
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
      {
        id: "2",
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
      {
        id: "3",
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
    ],
  },
};
