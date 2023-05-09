<script lang="ts">
  import type SongBasic from '../../../types/SongBasic';
  import Cover from '../../atom/Medias/Cover.svelte';

  export let selectedSong: SongBasic | undefined = undefined;
</script>

<div class="song-info">
  {#if selectedSong}
    <Cover src={selectedSong.cover ?? ''} size="small" />
    <p>{selectedSong.name ?? ''}</p>
  {/if}
</div>

<style lang="postcss">
  .song-info {
    @apply flex items-center justify-start w-2/12 rounded-tr-xl h-20 bg-opacity-40 bg-slate-300 dark:bg-slate-700 dark:bg-opacity-40;
  }

  .song-info p {
    @apply w-9/12 pl-1;
  }
</style>
