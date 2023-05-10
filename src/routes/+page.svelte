<script lang="ts">
  import type Song from '../types/Song';
  import type { PlayerContextType } from '../types/PlayerContext';
  import type { ThemeContext } from '../types/ThemeContext';
  import '../app.css';
  import Main from '../components/organism/Main.svelte';
  import { afterUpdate, onMount, setContext } from 'svelte';
  import { createStreamUrl, getMoveIndex } from '../utils/Song';
  import { writable } from 'svelte/store';
  import { searchSongs } from '../services/Song';

  //datas
  /** @type {import('./$types').PageData} */
  export let data;
  let songs = writable<Song[]>(data.songs);
  const defaultSongsList = data.songs;

  //states
  let searchValue = writable<string>('');
  let song = writable<Song>(undefined);
  let audioRef = writable<HTMLAudioElement>(undefined);
  let progressBarRef = writable<HTMLInputElement>(undefined);
  let playing = writable(false);
  let timeProgress = writable<number>(0);
  let theme = writable<'light' | 'dark'>('dark');

  //functions
  const selectSong = (newSong: Song) => {
    song.set(newSong);
  };

  const controlAudioHtml = () => {
    if ($playing) {
      $audioRef?.play();
    } else {
      $audioRef?.pause();
    }
  };

  const progress = () => {
    timeProgress.set($audioRef ? $audioRef.currentTime : 0);
  };

  afterUpdate(() => controlAudioHtml());

  //subscribes (useEffect equivalent)
  song.subscribe(() => {
    playing.set(true);
  });

  timeProgress.subscribe(() => {
    if ($song && $audioRef && $progressBarRef) {
      const currentTime = $audioRef.currentTime;
      $progressBarRef.value = currentTime.toString();
      $progressBarRef.style.setProperty(
        '--range-progress',
        `${(parseInt($progressBarRef.value) / $song.duration) * 100}%`
      );
      if (parseInt($progressBarRef.value) / $song.duration === 1)
        song.set($songs[getMoveIndex(+1, $song, $songs)]);
    }
  });

  searchValue.subscribe(async (val) => {
    if (val.length > 2) {
      const searchData = await searchSongs(val);
      songs.set(searchData.songs!);
    } else {
      songs.set(defaultSongsList);
    }
  });

  //onMount (componentDidMount equivalent)
  onMount(() => {
    theme.subscribe(() => {
      document.body.classList.remove('light', 'dark');
      document.body.classList.add($theme);
    });
  });

  //contexts
  setContext<PlayerContextType>('MusicPlayer', {
    playing,
    song,
    audioRef,
    timeProgress,
    progressBarRef,
    selectSong,
    play: () => playing.set(true),
    pause: () => playing.set(false),
    next: () => song.set($songs[getMoveIndex(+1, $song, $songs)]),
    prev: () => song.set($songs[getMoveIndex(-1, $song, $songs)]),
  });

  setContext<ThemeContext>('Theme', {
    theme: theme,
    switchTheme: () => theme.set($theme === 'light' ? 'dark' : 'light'),
  });
</script>

<audio
  src={$song ? createStreamUrl($song._id) : null}
  bind:this={$audioRef}
  on:timeupdate={progress}
  class="hidden"
/>

<Main
  bindSearchValue={searchValue}
  songsList={songs}
  loading={false}
  song={$song}
  error={undefined}
/>
