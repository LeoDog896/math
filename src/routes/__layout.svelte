<script context="module" lang="ts">
 	import type { Load } from "@sveltejs/kit"
  export const load: Load = async ({ url }) => ({ props: { url } });
</script>

<script lang="ts">
	import '../app.css';

  import PageTransition from "$lib/PageTransition.svelte";

  export let url: string;
</script>

<svelte:head>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism.min.css" rel="stylesheet" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.6/dist/katex.min.css" integrity="sha384-ZPe7yZ91iWxYumsBEOn7ieg8q/o+qh/hQpSaPow8T6BwALcXSCS6C6fSRPIAnTQs" crossorigin="anonymous">
</svelte:head>

<PageTransition {url}>
	<slot />
</PageTransition>