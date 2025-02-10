<script lang="ts" setup>
    import { IStickyNote } from "../../actions/project-board/StickyNoteTypes";

    defineProps<{
        stickyNotes: IStickyNote[];
    }>();

    const emit = defineEmits<{ (e: "deleteStickyNote", stickyNote: IStickyNote): void }>();
</script>

<template>
  <div
    v-for="stickyNote in stickyNotes"
    :key="stickyNote.id"
    :class="
      'flex flex-col sticky-note min-h-40 w-[200px] shadow-md p-1 rounded-md cursor-pointer hover:bg-yellow-500 sticky-note-' +
      stickyNote.id +' '+ stickyNote.color
    "
  >
    <div class="card-header w-full flex items-center justify-between">
      <div
        class="hover:bg-slate-100 p-1 rounded-md"
        @click="emit('deleteStickyNote', stickyNote)"
      >
        <TrashIcon />
      </div>
      <div
        :class="
          'hover:bg-slate-100 p-1 rounded-md sticky-note-handler-' +
          stickyNote.id
        "
      >
        <ArrowTopIcon />
      </div>
    </div>
    <div class="card-body w-full h-full p-2" contenteditable="true">
      Type your content here...
    </div>
    <div class="flex justify-end">
      <div :class="'cursor-nw-resize sticky-note-resizer-'+ stickyNote.id">
        <ArrowDownIcon />
      </div>
    </div>
  </div>
</template>
