<script lang="ts">
  import { getContext } from 'svelte';
  import ButtonPlayer from '../../atom/Buttons/ButtonPlayer.svelte';
  import type { ThemeContext } from '../../../types/ThemeContext';

  let { theme, switchTheme } = getContext<ThemeContext>('Theme');
</script>

<div class="header">
  <a href="/"><ButtonPlayer iconName="play" border={false} size="medium" /></a>
  <a href="/add"
    ><ButtonPlayer iconName="gear" border={false} size="medium" /></a
  >
  <ButtonPlayer
    iconName={$theme === 'light' ? 'moon' : 'sun'}
    border={false}
    size="medium"
    on:click={switchTheme}
  />
</div>

<style lang="postcss">
  .header {
    @apply flex justify-end items-start w-full absolute top-0 right-0;
  }
</style>
