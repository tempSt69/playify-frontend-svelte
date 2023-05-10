import type { Meta, StoryObj } from '@storybook/svelte';

import List from './List.svelte';
import MockMusicContext from '../../../../.storybook/MockMusicContext.svelte';

const meta = {
  title: 'Molecule/List',
  component: List,
  tags: ['autodocs'],
  decorators: [() => MockMusicContext],
} satisfies Meta<List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        _id: '1',
        name: 'Moto',
        duration: 120,
        artist: {
          _id: '1',
          name: 'Alekos',
          cover: 'ok',
        },
        trackUrl: 'try',
        trackType: 'mp3',
        active: false,
      },
      {
        _id: '2',
        name: 'Moto',
        duration: 120,
        artist: {
          _id: '1',
          name: 'Alekos',
          cover: 'ok',
        },
        trackUrl: 'try',
        trackType: 'mp3',
        active: true,
      },
      {
        _id: '3',
        name: 'Moto',
        duration: 120,
        artist: {
          _id: '1',
          name: 'Alekos',
          cover: 'ok',
        },
        trackUrl: 'try',
        trackType: 'mp3',
        active: false,
      },
    ],
  },
};
