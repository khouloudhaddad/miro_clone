<script lang="ts" setup>
    const emit = defineEmits<{ (e: "createStickyNote"): void }>();
</script>

<template>
  <ul
    class="flex flex-col px-2 bg-white mt-20 mb-2 gap-2 p-2 shadow-md rounded-md"
  >
    <li
      @click="emit('createStickyNote')"
      class="flex flex-row items-center cursor-pointer p-2 bg-slate-100"
    >
      <span class="icon">
        <StickyNoteIcon />
      </span>
    </li>

    <li
      class="flex flex-row items-center cursor-pointer p-2 hover:bg-slate-100"
    >
      <span class="icon">
        <DocumentIcon />
      </span>
    </li>
  </ul>
</template>
