<script>
  export let left = "Input"
  export let right = "Result"
</script>

<div class="table w-full py-4 rounded-lg">
  <div class="table-cell h-full border">
    <div class="flex flex-col h-full">
      <div class="w-full bg-gray-100 text-center text-xl p-4">{left}</div>
      <div class="p-4"><slot name="input"></slot></div>
    </div>
  </div>

  <div class="table-cell h-full border">
    <div class="flex flex-col h-full">
      <div class="w-full bg-gray-100 text-center text-xl p-4">{right}</div>
      <div class="w-full flex flex-grow justify-center h-full items-center"><slot name="result"></slot></div>
    </div>
  </div>
</div>