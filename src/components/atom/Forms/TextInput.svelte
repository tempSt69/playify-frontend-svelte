<script lang="ts">
  import type { HTMLInputTypeAttribute } from 'react';
  import type { Writable } from 'svelte/store';

  export let bindValue: Writable<string>;
  export let type: HTMLInputTypeAttribute = 'text';
  export let placeholder: string;

  function typeAction(node: HTMLInputElement) {
    node.type = type;
  }
</script>

<div class="input-field">
  <div class="wrapper">
    <input bind:value={$bindValue} use:typeAction {placeholder} />
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
