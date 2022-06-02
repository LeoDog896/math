<script lang="ts">
  import type { SvelteComponent } from "svelte";

  interface Box {
    name: string;
    href: string;
  }

  interface Category {
    name: string;
    boxes: Box[];
  }

  const categories: Category[] = [{
    name: "General",
    boxes: [
      {
        name: "Summnation",
        href: "boxes/summnation"
      }
    ]
  }]
</script>

{#each categories as { boxes, name }}
  {name}
  {#each boxes as { name, href }}
    {name}
    <a {href}>{name}</a>
  {/each}
{/each}