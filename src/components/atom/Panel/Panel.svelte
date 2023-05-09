<div class="panel">
  <slot />
</div>

<style lang="postcss">
  .panel {
    @apply justify-between w-full p-12 rounded-[50px] bg-opacity-40 bg-slate-300 dark:bg-slate-700 dark:bg-opacity-40;
  }
</style>
