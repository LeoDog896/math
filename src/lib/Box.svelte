<script>
  export let title = "";
</script>

<div class="mx-24 my-8">
  <a href="/math" class="mb-8 w-full transition-all block hover:translate-x-[-10px]">🠔 Back</a>
  <h1 class="text-6xl mb-4">{title}</h1>
  <slot></slot>
</div>