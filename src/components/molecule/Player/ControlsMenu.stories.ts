import type { Meta, StoryObj } from '@storybook/svelte';
import ControlsMenu from './ControlsMenu.svelte';
import MockMusicContext from '../../../../.storybook/MockMusicContext.svelte';

const meta = {
  title: 'Molecule/ControlsMenu',
  component: ControlsMenu,
  tags: ['autodocs'],
  decorators: [() => MockMusicContext],
} satisfies Meta<ControlsMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playing: Story = {
  args: {},
};
