<script lang="ts">
  import { getContext } from 'svelte';
  import ProgressBar from '../Player/ProgressBar.svelte';
  import SongInfo from '../Player/SongInfo.svelte';
  import type { PlayerContextType } from '../../../types/PlayerContext';

  let { song, audioRef, timeProgress } =
    getContext<PlayerContextType>('MusicPlayer');
</script>

<div class="footer">
  <SongInfo selectedSong={{ cover: $song?.artist.cover, name: $song?.name }} />
  <ProgressBar
    audioRef={$audioRef}
    duration={$song?.duration}
    timeProgress={$timeProgress}
    hasSong={$song ? true : false}
  />
</div>

<style lang="postcss">
  .footer {
    @apply flex gap-5 items-end justify-between w-full h-1/6;
  }
</style>
