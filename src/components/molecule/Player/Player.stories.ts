import type { Meta, StoryObj } from '@storybook/svelte';

import Player from './Player.svelte';
import MockMusicContext from '../../../../.storybook/MockMusicContext.svelte';

const meta = {
  title: 'Molecule/Player',
  component: Player,
  tags: ['autodocs'],
  argTypes: {
    hasSong: {
      control: { type: 'boolean' },
    },
  },
  decorators: [() => MockMusicContext],
} satisfies Meta<Player>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PlayingSong: Story = {
  args: {
    cover: 'https://angartwork.anghcdn.co/webp/?id=1171884882',
    hasSong: true,
  },
};

export const PausedSong: Story = {
  args: {
    cover: 'https://angartwork.anghcdn.co/webp/?id=1171884882',
    hasSong: true,
  },
};

export const NoSong: Story = {
  args: {
    hasSong: false,
  },
};
