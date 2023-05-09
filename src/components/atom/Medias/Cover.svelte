<script lang="ts">
  export let src: string | undefined;
  export let lowOpacity: boolean = false;
  export let size: 'small' | 'medium' | 'large' = 'large';

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'small':
        return 'rounded-[10px]';
      case 'medium':
        return 'rounded-[25px]';
      case 'large':
      default:
        return 'rounded-[50px]';
    }
  };

  const getOpacityClass = (lowOpacity: boolean) => {
    return lowOpacity ? 'opacity-30' : null;
  };
</script>

<div
  class={[getSizeClasses(size), getOpacityClass(lowOpacity), 'cover'].join(' ')}
  style={`background-image: url(${src});`}
/>

<style lang="postcss">
  .cover {
    @apply h-full aspect-square bg-no-repeat bg-cover p-2;
  }
</style>
