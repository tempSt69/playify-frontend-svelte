import type { Meta, StoryObj } from '@storybook/svelte';
import MockMusicContext from '../../../../.storybook/MockMusicContext.svelte';

import ListItem from './ListItem.svelte';

const meta = {
  title: 'Molecule/ListItem',
  component: ListItem,
  tags: ['autodocs'],
  decorators: [() => MockMusicContext],
} satisfies Meta<ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Item: Story = {
  args: {
    item: {
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
  },
};

export const ItemActive: Story = {
  args: {
    item: {
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
      active: true,
    },
  },
};
