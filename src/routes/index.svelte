<script lang="ts">
  interface Box {
    name: string;
    href: string;
  }

  interface Category {
    name: string;
    boxes: Box[];
    collapsed?: boolean;
  }

  const categories: Category[] = [{
    name: "General",
    boxes: [
      {
        name: "Sequence",
        href: "/math/boxes/sequence"
      },
      {
        name: "Thing",
        href: "/math/boxes/thing"
      }
    ]
  }]
</script>

<div class="m-8">
  {#each categories as { boxes, name, collapsed }}
    <h1 on:click={() => collapsed = !collapsed} class="bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-all cursor-pointer select-none text-center rounded-lg p-6 text-2xl w-full">
      {name}
      {collapsed ? ">" : "^"}
    </h1>
    {#if !!collapsed}
      <div class="flex flex-wrap justify-around">
        {#each boxes as { name, href }}
        <a {href} class="flex flex-1 flex-col m-4 bg-green-100 hover:bg-green-200 active:bg-green-300 transition-all items-center justify-center w-1/4 p-4">
          {name}
        </a>
        {/each}
      </div>
    {/if}
  {/each}
</div>