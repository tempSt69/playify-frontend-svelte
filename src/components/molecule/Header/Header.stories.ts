import type { Meta, StoryObj } from '@storybook/svelte';
import MockThemeContext from '../../../../.storybook/MockThemeContext.svelte';

import Header from './Header.svelte';

const meta = {
  title: 'Molecule/Header',
  component: Header,
  tags: ['autodocs'],
  decorators: [() => MockThemeContext],
} satisfies Meta<Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
