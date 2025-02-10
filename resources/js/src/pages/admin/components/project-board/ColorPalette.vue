<script lang="ts" setup>
import { IStickyNote } from "../../actions/project-board/StickyNoteTypes";
import { useStickyNoteStore } from "../../../../store/stickyNote";
const props = defineProps<{
    stickyNotes: IStickyNote[];
}>();

const emit = defineEmits<{
  (e: "changeStickyNoteColor", stickyId: number, color: string): void;
}>();

const stickyNoteStore = useStickyNoteStore();

function changeStickyNoteBgColor(color: string) {
  const id = stickyNoteStore.stickyNote.id;
  emit("changeStickyNoteColor", id,color);
  const stickyNote = document.querySelector(
    ".sticky-note-" + id
  ) as HTMLElement;
  const currentStickyNote = props.stickyNotes.filter((item) => item.id === id);
  if (currentStickyNote.length) {
    stickyNote.classList.remove(currentStickyNote[0].color);
    stickyNote.classList.add(color);
  }
}
</script>

<template>
  <ul class="flex flex-col px-2 bg-white mb-2 rounded-md gap-2 p-2 shadow-md">
    <li
      @click="changeStickyNoteBgColor('bg-yellow-300')"
      class="flex flex-row items-center rounded-md gap-2 bg-yellow-300 h-8 py-2 cursor-pointer"
    ></li>

    <li
      @click="changeStickyNoteBgColor('bg-indigo-300')"
      class="flex flex-row items-center rounded-md gap-2 bg-indigo-300 h-8 py-2 cursor-pointer"
    ></li>

    <li
      @click="changeStickyNoteBgColor('bg-blue-300')"
      class="flex flex-row items-center rounded-md gap-2 bg-blue-300 h-8 py-2 cursor-pointer"
    ></li>

    <li
      @click="changeStickyNoteBgColor('bg-pink-300')"
      class="flex flex-row items-center rounded-md gap-2 bg-pink-300 h-8 py-2 cursor-pointer"
    ></li>
  </ul>
</template>
