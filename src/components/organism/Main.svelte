<script lang="ts">
  import type { Writable } from 'svelte/store';
  import type Song from '../../types/Song';
  import TextInput from '../atom/Forms/TextInput.svelte';
  import Container from '../molecule/Container/Container.svelte';
  import Footer from '../molecule/Footer/Footer.svelte';
  import Header from '../molecule/Header/Header.svelte';
  import List from '../molecule/List/List.svelte';
  import Player from '../molecule/Player/Player.svelte';

  export let bindSearchValue: Writable<string>;
  export let song: Song | undefined;
  export let loading: boolean;
  export let error: string | undefined;
  export let songsList: Writable<Song[] | undefined>;
</script>

<div class="main">
  <div
    class="background"
    style={`background-image:url('${
      song
        ? song.artist.cover
        : 'https://i.scdn.co/image/ab6761610000e5eb7b9c72b3e2f9226f5b426291'
    }')`}
  />
  <div class="content">
    <Header />
    <Container>
      <div class="flex justify-between w-full h-full pt-16">
        <div class="w-5/12">
          <Player
            cover={song ? song.artist.cover : undefined}
            hasSong={song ? true : false}
          />
        </div>
        <div class="w-7/12 mx-4">
          <TextInput
            bindValue={bindSearchValue}
            placeholder="Type your favorite song..."
          />
          <List
            {error}
            {loading}
            items={$songsList
              ? $songsList.map((songItem) => ({
                  ...songItem,
                  name: `${songItem.artist.name} - ${songItem.name}`,
                  active: song && song._id === songItem._id ? true : false,
                }))
              : []}
          />
        </div>
      </div>
    </Container>
    <Footer />
  </div>
</div>

<style lang="postcss">
  .main {
    @apply h-screen relative;
  }

  .main .background {
    @apply absolute top-0 left-0 h-screen w-full bg-no-repeat dark:bg-slate-900 bg-center;
  }

  .main .content {
    @apply absolute top-0 left-0 h-screen w-full backdrop-blur-xl dark:bg-slate-900 dark:bg-opacity-80 bg-slate-300 bg-opacity-60;
  }
</style>
