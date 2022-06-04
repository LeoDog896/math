<script>
  import { fly } from "svelte/transition";
  export let url = "";

  let transitioning = false;

  const pageTransitionDuration = 400;
</script>

<div class="w-full h-full" class:overflow-hidden={transitioning}>
  {#key url}
    <div class="w-full h-full"
      in:fly={{ x:-5, duration: pageTransitionDuration, delay: pageTransitionDuration }}
      out:fly={{ x: 5, duration: pageTransitionDuration }}
      on:outrostart={() => transitioning = true}
      on:introend={() => transitioning = false}
      >
        <slot />
    </div>
  {/key}
</div>