<script lang="ts">
  import { fly } from "svelte/transition"
  
  interface Box {
    name: string;
    href: string;
    hook?: string;
  }

  interface Category {
    name: string;
    boxes: Box[];
    expanded?: boolean;
  }

  const categories: Category[] = [{
    name: "General",
    boxes: [
      {
        name: "Basics",
        href: "/math/boxes/basics"
      },
      {
        name: "Sequence",
        href: "/math/boxes/sequence"
      },
      {
        name: "Formula Cheat Sheet",
        href: "/math/boxes/formulas"
      },
      {
        name: "Blobs & Trigonometry",
        href: "/math/boxes/blob"
      },
      {
        name: "Rotational Velocity",
        hook: "How do you rotate a cube?",
        href: "/math/boxes/rotational-velocity"
      }
    ]
  }]
</script>

<div class="m-8">
  {#each categories as { boxes, name, expanded }}
    <h1 on:click={() => expanded = !expanded} class="bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-all cursor-pointer select-none text-center rounded-lg p-6 text-2xl w-full">
      {name}
      {expanded ? "^" : ">"}
    </h1>
    {#if expanded}
      <div class="flex flex-wrap justify-around">
        {#each boxes as { name, href, hook }}
          <a sveltekit:prefetch transition:fly={{ y: -20 }} {href} class="flex flex-1 flex-col m-4 bg-green-100 hover:bg-green-200 active:bg-green-300 transition-all items-center justify-center w-1/4 p-4">
            {name}
            {#if hook}
              <p class="text-gray-600">{hook}</p>
            {/if}
          </a>
        {/each}
      </div>
    {/if}
  {/each}
</div>