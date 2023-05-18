<script lang="ts">
  import { getContext } from 'svelte';
  import type { ListItemType } from '../../../types/ListItem';
  import { formatTime } from '../../../utils/FormatTime';
  import ButtonPlayer from '../../atom/Buttons/ButtonPlayer.svelte';
  import type { PlayerContextType } from '../../../types/PlayerContext';

  let { selectSong, playing, pause, play } =
    getContext<PlayerContextType>('MusicPlayer');

  export let item: ListItemType;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  on:click={() => {
    if (!item.active) {
      selectSong(item);
    }
  }}
  class={['list-item', item.active ? 'active' : ''].join(' ')}
>
  <ButtonPlayer
    border={false}
    iconName={item.active && $playing ? 'pause' : 'play'}
    size={'small'}
    on:click={item.active && $playing ? pause : play}
  />
  <h3 class="ml-5 text-black dark:text-white">{item.name}</h3>
  <span class="text-black dark:text-white ml-auto"
    >{formatTime(item.duration)}</span
  >
</div>

<style lang="postcss">
  .list-item {
    @apply my-2 border-2 cursor-pointer border-transparent flex w-full items-center px-5 py-3 rounded-3xl transition-all duration-500 ease-in;
  }

  .list-item.active {
    @apply bg-black bg-opacity-20 dark:bg-white dark:border-transparent dark:bg-opacity-10;
  }

  .list-item:not(.active) {
    @apply bg-transparent border-transparent hover:border-black dark:hover:border-white;
  }
</style>
