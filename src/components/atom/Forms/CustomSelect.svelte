<script lang="ts">
  import type { Writable } from 'svelte/store';

  export let bindValue: Writable<any>;
</script>

<div class="input-field">
  <select bind:value={$bindValue}>
    <slot />
  </select>
  <div class="inner">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path
        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
      />
    </svg>
  </div>
</div>

<style lang="postcss">
  .input-field {
    @apply inline-block relative w-64;
  }

  .input-field select {
    @apply block appearance-none w-full bg-white border border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight;
  }

  .input-field select:hover {
    @apply border-gray-500;
  }

  .input-field select:focus {
    @apply outline-none shadow-none;
  }

  .input-field .inner {
    @apply pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700;
  }
  .input-field .inner svg {
    @apply fill-current h-4 w-4;
  }
</style>
