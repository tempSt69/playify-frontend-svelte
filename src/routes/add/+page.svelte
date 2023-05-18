<script lang="ts">
  import type { ThemeContext } from '../../types/ThemeContext';
  import type Artist from '../../types/Artist';
  import AddSong from '../../components/organism/AddSong.svelte';
  import { writable } from 'svelte/store';
  import { insertSong } from '../../services/Song';
  import { onMount, setContext } from 'svelte';
  import { goto } from '$app/navigation';

  /** @type {import('./$types').PageData} */
  export let data;

  let theme = writable<'light' | 'dark'>('dark');

  let artistList = writable<Artist[]>(data.artists);
  let cover = writable<string>('');
  let name = writable<string>('');
  let artist = writable<string>('');
  let duration = writable<number>(0);
  let file = writable<FileList>(undefined);

  const onSubmit = async () => {
    let artistFound = $artistList.find((art) => art._id === $artist);
    if (artistFound) {
      artistFound.cover = $cover;
      await insertSong({
        name: $name,
        artist: artistFound,
        duration: $duration,
        file: $file[0],
      });
      goto('/');
    }
  };

  onMount(() => {
    theme.subscribe(() => {
      document.body.classList.remove('light', 'dark');
      document.body.classList.add($theme);
    });
  });

  setContext<ThemeContext>('Theme', {
    theme: theme,
    switchTheme: () => theme.set($theme === 'light' ? 'dark' : 'light'),
  });
</script>

<AddSong
  artistList={$artistList}
  {cover}
  {artist}
  {name}
  {duration}
  {file}
  {onSubmit}
/>
