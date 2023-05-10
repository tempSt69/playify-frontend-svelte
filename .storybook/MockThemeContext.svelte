<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import type { ThemeContext } from '../src/types/ThemeContext';
  setContext<ThemeContext>('Theme', {
    switchTheme: () => console.log('switch'),
    theme: writable<'dark' | 'light'>('dark'),
  });
</script>

<slot />
