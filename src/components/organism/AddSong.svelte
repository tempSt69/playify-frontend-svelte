<script lang="ts">
  import type { Writable } from 'svelte/store';
  import CustomInput from '../atom/Forms/CustomInput.svelte';
  import Button from '../atom/Buttons/Button.svelte';
  import type Artist from '../../types/Artist';
  import Header from '../molecule/Header/Header.svelte';
  import Panel from '../atom/Panel/Panel.svelte';
  import CustomSelect from '../atom/Forms/CustomSelect.svelte';
  import CustomInputFile from '../atom/Forms/CustomInputFile.svelte';

  export let artistList: Artist[];
  export let name: Writable<string>;
  export let artist: Writable<string>;
  export let cover: Writable<string>;
  export let duration: Writable<number>;
  export let file: Writable<FileList>;
  export let onSubmit: () => void;
</script>

<div class="add-song">
  <Header />
  <h1>Add a song</h1>
  <div class="container">
    <Panel>
      <form>
        <CustomInput bindValue={name} placeholder={'Song name'} />
        <CustomSelect bindValue={artist}>
          <option value="" />
          {#each artistList as art (art._id)}
            <option value={art._id}>{art.name}</option>
          {/each}
        </CustomSelect>
        <CustomInput bindValue={cover} placeholder={'Cover url'} />
        <CustomInput
          type={'number'}
          bindValue={duration}
          placeholder={'Song duration in seconds'}
        />
        <CustomInputFile bindFiles={file} placeholder={'file'} />
        <Button label={'Add'} on:click={onSubmit} type={'button'} />
      </form>
    </Panel>
  </div>
</div>

<style lang="postcss">
  .add-song {
    @apply h-screen w-full backdrop-blur-xl dark:bg-slate-900 dark:bg-opacity-80 bg-slate-300 bg-opacity-60;
  }
  .add-song .container {
    @apply flex items-center justify-center h-screen w-4/12 mx-auto;
  }
</style>
