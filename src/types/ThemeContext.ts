import type { Writable } from 'svelte/store';

export interface ThemeContext {
  theme?: Writable<'light' | 'dark'>;
  switchTheme(): void;
}
