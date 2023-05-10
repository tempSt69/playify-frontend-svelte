<script lang="ts">
  import ButtonPlayer from '../../atom/Buttons/ButtonPlayer.svelte';
  import type { PlayerContextType } from '../../../types/PlayerContext';
  import { getContext } from 'svelte';

  let { pause, play, next, prev, playing } =
    getContext<PlayerContextType>('MusicPlayer');
</script>

<div class="p-5 w-full gap-x-10 flex justify-center">
  <ButtonPlayer size="large" on:click={prev} iconName="backward-step" />
  <ButtonPlayer
    size="xlarge"
    on:click={$playing ? pause : play}
    iconName={$playing ? 'pause' : 'play'}
  />
  <ButtonPlayer size="large" on:click={next} iconName="forward-step" />
</div>
