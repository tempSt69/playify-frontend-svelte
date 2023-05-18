<script lang="ts">
  import { formatTime } from '../../../utils/FormatTime';
  import type { PlayerContextType } from '../../../types/PlayerContext';
  import { getContext } from 'svelte';

  export let hasSong: boolean = false;
  export let audioRef: HTMLAudioElement | undefined;
  export let duration: number = 0;
  export let timeProgress: number = 0;

  let { progressBarRef } = getContext<PlayerContextType>('MusicPlayer');

  const handleProgressChange = () => {
    if (hasSong && audioRef && $progressBarRef) {
      audioRef.currentTime = parseInt($progressBarRef!.value);
    }
  };
</script>

<div class="progressbar">
  {#if hasSong}
    <div class="progress">
      <span>{formatTime(timeProgress)}</span>
      <input
        type="range"
        bind:this={$progressBarRef}
        value={timeProgress ?? 0}
        min="0"
        max={duration ?? 0}
        on:change={handleProgressChange}
      />
      <span class="text-right">{formatTime(duration)}</span>
    </div>
  {/if}
</div>

<style lang="postcss">
  .progressbar {
    @apply flex items-center justify-start w-10/12 rounded-tl-xl h-20 px-4 bg-opacity-40 bg-slate-300 dark:bg-slate-700 dark:bg-opacity-40;
  }

  .progressbar .progress {
    @apply flex w-full justify-between items-center;
  }

  .progressbar .progress span {
    @apply w-1/12;
  }

  .progressbar .progress input[type='range'] {
    @apply w-10/12 bg-slate-400 dark:bg-slate-500;
  }

  input[type='range'] {
    --range-progress: 0;
    -webkit-appearance: none;
    position: relative;
    background: #ccc;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    cursor: pointer;
  }

  /* Input range - firefox */
  input[type='range']::-moz-range-track {
    position: relative;
    background: #ccc;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    cursor: pointer;
  }

  /* played progress length - Chrome & safari*/
  input[type='range']::before {
    content: '';
    height: 2px;
    background: #000;
    width: var(--range-progress);
    border-bottom-left-radius: 2px;
    border-top-left-radius: 2px;
    position: absolute;
    top: 0;
    left: 0;
  }
  /* played progress length - firefox */
  input[type='range']::-moz-range-progress {
    background: #000;
    border-bottom-left-radius: 2px;
    border-top-left-radius: 2px;
    height: 2px;
  }
  /* slider thumb - chrome and safari */
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    border: 3px solid black;
    background-color: #fff;
    cursor: pointer;
    position: relative;
    transition: all;
    transition-duration: 0.3s;
  }

  /* dragging thumb - chrome and safari */
  input[type='range']:active::-webkit-slider-thumb {
    transform: scale(1.4);
  }
  /* slider thumb - firefox */
  input[type='range']::-moz-range-thumb {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    border: 3px solid black;
    background-color: #fff;
    cursor: pointer;
    border: transparent;
    position: relative;
  }
  /* dragging thumb - firefox */
  input[type='range']:active::-moz-range-thumb {
    transform: scale(1.4);
  }
</style>
