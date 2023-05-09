import type { Meta, StoryObj } from "@storybook/svelte";

import ProgressBar from "./ProgressBar.svelte";

const meta = {
  title: "Molecule/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args:{
        audioRef:undefined,
        hasSong:false,
        duration:0,
        progressBarRef:undefined,
        timeProgress:0
    }
};
