import type { Meta, StoryObj } from '@storybook/svelte';

import ControlsMenu from './ControlsMenu.svelte';

const meta = {
  title: 'Molecule/ControlsMenu',
  component: ControlsMenu,
  tags: ['autodocs'],
  argTypes: {
    playing: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<ControlsMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playing: Story = {
  args: {
    playing: true,
  },
};

export const Paused: Story = {
  args: {
    playing: false,
  },
};
