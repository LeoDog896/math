<script lang="ts">
  export let title: string
</script>

<div class="m-8">
  <h1 class="text-3xl">{title}</h1>
  <slot></slot>
</div>