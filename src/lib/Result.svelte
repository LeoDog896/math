<script>
  export let left = "Input"
  export let right = "Result"

  let leftExists = $$slots.input
  let rightExists = $$slots.result

  export let equalWidth = true;

  $: shouldUseEqualWidth = equalWidth && leftExists && rightExists
</script>

<div class="flex items-stretch flex-row w-full py-4 rounded-lg">
  {#if leftExists}
    <div class="flex-grow min-h-full border {shouldUseEqualWidth ? "w-1/2" : "w-full"}">
      <div class="flex flex-col h-full">
        {#if left}
          <div class="w-full bg-gray-100 text-center text-xl p-4">{left}</div>
        {/if}
        <div class="p-4"><slot name="input"></slot></div>
      </div>
    </div>
  {/if}

  {#if rightExists}
    <div class="flex-grow min-h-full border {shouldUseEqualWidth ? "w-1/2" : "w-full"}">
      <div class="flex flex-col h-full w-full">
        {#if right}
          <div class="w-full bg-gray-100 text-center text-xl p-4">{right}</div>
        {/if}
        <div class="w-full flex flex-grow justify-center h-full items-center"><slot name="result"></slot></div>
      </div>
    </div>
  {/if}
</div>

<style>
  :global(.math-display) { 
    @apply text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl;
  }
</style>