import type { Meta, StoryObj } from '@storybook/svelte';
import MockMusicContext from '../../../../.storybook/MockMusicContext.svelte';

import ProgressBar from './ProgressBar.svelte';

const meta = {
  title: 'Molecule/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [() => MockMusicContext],
} satisfies Meta<ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    audioRef: undefined,
    hasSong: true,
    duration: 120,
    timeProgress: 25,
  },
};
