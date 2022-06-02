<script lang="ts">
  interface Box {
    name: string;
    content: string;
  }

  interface Category {
    boxes: Box[]
  }

  const categories: Category[] = []
</script>