<script lang="ts">
  export let type: 'submit' | 'button' = 'button';
  export let primary: boolean = true;
  export let size: 'small' | 'medium' | 'large' = 'medium';
  export let label: string = '';

  $: mode = primary ? 'primary' : 'secondary';

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'small':
        return 'px-4 py-2.5';
      case 'large':
        return 'px-6 py-3';
      default:
        return 'px-5 py-2.5';
    }
  };
</script>

<button {type} class={['btn', getSizeClasses(size), mode].join(' ')} on:click>
  {label}
</button>

<style lang="postcss">
  .btn {
    @apply active:scale-90 transition-all duration-100 ease-in-out cursor-pointer rounded-full border-2 font-bold leading-none inline-block;
  }

  .btn.primary {
    @apply text-white bg-black border-black dark:bg-white dark:text-black dark:border-white active:bg-opacity-90 active:bg-neutral-900 dark:active:bg-neutral-200;
  }

  .btn.secondary {
    @apply text-black bg-transparent border-black dark:text-white dark:border-white active:bg-neutral-100 dark:active:bg-neutral-600 active:bg-opacity-30;
  }
</style>
