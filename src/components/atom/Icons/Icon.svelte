<script lang="ts">
  export let icon: string = 'play';
  export let className: string = '';
</script>

<i class={['fa-solid', `fa-${icon}`, className].join(' ')} />

<style lang="postcss">
  .btnp {
    @apply flex justify-center items-center dark:text-white text-black bg-transparent rounded-full active:scale-90 active:bg-opacity-30 active:bg-neutral-100 dark:active:bg-neutral-600 dark:active:bg-opacity-30 transition-all duration-100 ease-in-out;
  }
</style>
