<script lang="ts">
  import type { ListItemType } from '../../../types/ListItem';
  import Loader from '../../atom/Loader/Loader.svelte';
  import ListItem from './ListItem.svelte';
  export let items: ListItemType[] = [];
  export let loading: boolean = false;
  export let error: string | undefined = undefined;
</script>

{#if error}
  <div class="text-center text-red-500">
    {error}
  </div>
{:else if loading}
  <Loader />
{:else}
  <div class="py-3 rounded-3xl transition-colors">
    {#each items as item (item._id)}
      <ListItem {item} />
    {/each}
  </div>
{/if}
