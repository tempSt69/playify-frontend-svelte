import type { Meta, StoryObj } from "@storybook/svelte";

import Footer from "./Footer.svelte";

const meta = {
  title: "Molecule/Footer",
  component: Footer,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
