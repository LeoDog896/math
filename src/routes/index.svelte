<script lang="ts">
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

<div class="m-8">
  {#each categories as { boxes, name }}
    <h1 class="bg-gray-100 text-center rounded-lg p-6 text-2xl w-full">{name}</h1>
    <div class="flex">
      {#each boxes as { name, href }}
      <a {href} class="flex flex-col bg-green-100 items-center justify-center w-1/4 p-4">
        {name}
      </a>
      {/each}
    </div>
  {/each}
</div>