<script lang="ts">
  import Icon from '../Icons/Icon.svelte';

  export let iconName:
    | 'play'
    | 'pause'
    | 'backward-step'
    | 'forward-step'
    | 'gear'
    | 'moon'
    | 'sun' = 'play';
  export let border: boolean = true;
  export let disabled: boolean = false;
  export let size: 'small' | 'medium' | 'large' | 'xlarge' = 'large';

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'small':
        return 'h-7 w-7 fa-sm';
      case 'medium':
        return 'h-10 w-10 fa-md';
      case 'large':
        return 'h-12 w-12 fa-lg';
      case 'xlarge':
        return 'h-16 w-16 fa-lg';
    }
  };

  const getBorderClasses = (border: boolean): string => {
    return border ? 'border-black border-2 dark:border-white' : '';
  };

  const getDisabledClasses = (disabled: boolean): string => {
    return disabled ? 'cursor-default pointer-events-none' : 'cursor-pointer';
  };
</script>

<button type="button" on:click>
  <Icon
    icon={iconName}
    className={[
      'btnp',
      getSizeClasses(size),
      getBorderClasses(border),
      getDisabledClasses(disabled),
    ].join(' ')}
  />
</button>
