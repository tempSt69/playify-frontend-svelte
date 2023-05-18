<script lang="ts">
  import type { Writable } from 'svelte/store';

  export let bindFiles: Writable<FileList>;
  export let placeholder: string;
</script>

<div class="input-field">
  <div class="wrapper">
    <input bind:files={$bindFiles} type="file" {placeholder} />
  </div>
</div>

<style lang="postcss">
  .input-field {
    @apply relative text-lg bg-transparent w-full pl-5;
  }

  .input-field .wrapper {
    @apply flex items-center py-2 w-full;
  }

  .input-field .wrapper input {
    @apply font-Kanit font-light w-full text-gray-500 placeholder-gray-500 bg-transparent border-none mr-3 px-2 leading-tight focus:outline-none;
  }
</style>
