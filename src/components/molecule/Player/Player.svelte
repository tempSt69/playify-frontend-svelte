<script lang="ts">
  import type { Writable } from 'svelte/store';
  import Cover from '../../atom/Medias/Cover.svelte';
  import ControlsMenu from './ControlsMenu.svelte';
  export let cover: string =
    'https://i.scdn.co/image/ab6761610000e5eb7b9c72b3e2f9226f5b426291';
  export let hasSong: boolean = false;
</script>

<div class={['player', hasSong ?? 'pb-5'].join(' ')}>
  <Cover src={cover} lowOpacity={!hasSong} />
  {#if hasSong}
    <ControlsMenu />
  {/if}
</div>

<style lang="postcss">
  .player {
    @apply flex flex-col gap-3 justify-between h-full w-full p-12 rounded-[50px] bg-opacity-40 bg-slate-300 dark:bg-slate-700 dark:bg-opacity-40;
  }
</style>
