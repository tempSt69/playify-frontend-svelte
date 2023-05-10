<script lang="ts">
  import { setContext } from 'svelte';
  import { writable, type Writable } from 'svelte/store';
  import type Song from '../src/types/Song';
  import type { PlayerContextType } from '../src/types/PlayerContext';
  setContext<PlayerContextType>('MusicPlayer', {
    playing: writable(false),
    song: writable({
      _id: '63fa466cb3c4eec23f490ed3',
      name: 'Antilope',
      duration: 131,
      artist: {
        name: 'Alekos',
        cover:
          'https://i.scdn.co/image/ab67616d0000b2733f31b72a2b18071851fa2090',
        _id: '63f37295e571cc2eb7d534fc',
      },
      trackUrl: 'c11f24b5316f80c7e7785803243e62e9',
      trackType: 'audio/mpeg',
    }),
    audioRef: writable<HTMLAudioElement>(undefined),
    timeProgress: writable(0),
    progressBarRef: writable<HTMLInputElement>(undefined),
    selectSong: (song: Song) => console.log(song),
    play: () => console.log('play'),
    pause: () => console.log('pause'),
    next: () => console.log('next'),
    prev: () => console.log('prev'),
  });
</script>

<slot />
